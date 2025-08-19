// src/utils/userMessages.js
import { db } from "../Firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

/**
 * Dodaje wiadomość dla użytkownika
 * @param {string} userUid 
 * @param {string} title 
 * @param {string} content 
 * @param {string|null} orderId 
 */
export const addUserMessage = async (userUid, title, content, orderId = null) => {
  try {
    const messagesRef = collection(db, "userMessages", userUid, "messages");
    await addDoc(messagesRef, {
      title,
      content,
      status: "unread",       
      orderId,
      createdAt: serverTimestamp()
    });
  } catch (error) {
    console.error("Błąd przy dodawaniu wiadomości:", error);
  }
};
