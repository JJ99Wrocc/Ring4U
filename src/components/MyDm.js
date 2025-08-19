import React, { useState, useEffect } from "react";
import { db, auth } from "../Firebase";
import { collection, query, orderBy, onSnapshot, doc, deleteDoc, updateDoc } from "firebase/firestore";

const MyDm = () => {
  const [messages, setMessages] = useState([]);
  const [userUid, setUserUid] = useState(null);

  useEffect(() => {
      const unsubscribeAuth = auth.onAuthStateChanged(user => {
      if (user) {
        setUserUid(user.uid);
      } else {
        setUserUid(null);
      }
    });

    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    if (!userUid) return;

    const messagesRef = collection(db, "userMessages", userUid, "messages");
    const q = query(messagesRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, snapshot => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, [userUid]);

  const handleDelete = async (messageId) => {
    if (!userUid) return;
    const messageRef = doc(db, "userMessages", userUid, "messages", messageId);
    await deleteDoc(messageRef);
  };

  const markAsRead = async (messageId) => {
    if (!userUid) return;
    const messageRef = doc(db, "userMessages", userUid, "messages", messageId);
    await updateDoc(messageRef, { status: "read" });
  };

  if (!userUid) return <p>Musisz być zalogowany, aby zobaczyć wiadomości.</p>;
  if (messages.length === 0) return <p>Brak wiadomości.</p>;

  return (
    <div className="messages-wrapper">
      <h2 className="my-order-title">Moje wiadomości</h2>
      <div className="messages-container">
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`message-item ${msg.status === "unread" ? "unread" : "read"}`}
          >
            <h4 className="message-title">{msg.title}</h4>
            <p className="message-content">{msg.content}</p>
            {msg.orderId && <small className="message-order">Numer zamówienia: {msg.orderId}</small>}
            <p className="message-status">Status: {msg.status}</p>
            <div className="message-buttons">
              {msg.status === "unread" && (
                <button className="btn-read" onClick={() => markAsRead(msg.id)}>
                  Oznacz jako przeczytane
                </button>
              )}
              <button className="btn-delete" onClick={() => handleDelete(msg.id)}>
                Usuń
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyDm;
