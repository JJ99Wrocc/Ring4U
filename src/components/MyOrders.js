import React, { useEffect, useState } from "react";
import { auth, db } from "../Firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!auth.currentUser) {
        setLoading(false);
        return;
      }

      const userId = auth.currentUser.uid;
      const ordersRef = collection(db, "users", userId, "orders"); 

      try {
        const q = query(ordersRef, orderBy("orderDate", "desc"));
        const snapshot = await getDocs(q);
        const ordersList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setOrders(ordersList);
      } catch (error) {
        console.error("Błąd pobierania zamówień:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p>Ładowanie zamówień...</p>;
  if (!orders.length) return <p>Brak zamówień.</p>;

  return (
    <div>
      <h2 className="my-order-title">Moje zamówienia</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id} className="my-order-box">
            <p className="my-order-p"><strong>ID zamówienia:</strong> {order.id}</p>
            <p className="my-order-p"><strong>Data zamówienia:</strong> {order.orderDate?.toDate().toLocaleString()}</p>
            <p className="my-order-p"><strong>Data dostawy:</strong> {order.deliveryDate?.toDate().toLocaleString()}</p>
            <p className="my-order-p"><strong>Status:</strong> {order.status}</p>
            <p className="my-order-p"><strong>Numer przesyłki:</strong> {order.trackingNumber}</p>
            <p className="my-order-p"><strong>Produkty:</strong></p>
            <ul>
              {order.products?.map(product => (
                <li key={product.id} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    style={{ width: "60px", height: "60px", objectFit: "cover", marginRight: "10px", borderRadius: "5px" }} 
                  />
                  <div>
                    <p style={{ margin: 0 }}>Nazwa: <span className="order-total">{product.name}</span> (x<span className="order-total">{product.quantity}</span>)</p>
                    <p style={{ margin: 0 }}>Cena: <span className="order-total">{product.price} </span>zł</p>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyOrders;
