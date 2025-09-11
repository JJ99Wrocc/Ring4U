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

  if (loading) return <p role="status">Ładowanie zamówień...</p>;
  if (!orders.length) return <p role="status">Brak zamówień.</p>;

  return (
    <div>
      <h2 className="my-order-title">Moje zamówienia</h2>
      <ul role="list">
        {orders.map(order => {
          const hasDiscount = !!order.discountApplied;
          const discountValue = parseFloat(order.discountValue || 0);
          const totalPrice = order.products?.reduce((acc, product) => {
            const priceNumber = parseFloat(product.price.replace(/[^\d,.]/g, '').replace(',', '.'));
            return acc + priceNumber * product.amount;
          }, 0) || 0;
          const finalPrice = hasDiscount 
            ? (totalPrice * (1 - discountValue)).toFixed(2) 
            : totalPrice.toFixed(2);

          return (
            <li key={order.id} className="my-order-box" role="listitem" aria-label={`Zamówienie ${order.id}, status ${order.status}`}>
              <p className="my-order-p"><strong>ID zamówienia:</strong> {order.id}</p>
              <p className="my-order-p"><strong>Data zamówienia:</strong> {order.orderDate?.toDate().toLocaleString()}</p>
              <p className="my-order-p"><strong>Data dostawy:</strong> {order.deliveryDate?.toDate().toLocaleString()}</p>
              <p className="my-order-p"><strong>Status:</strong> {order.status}</p>
              <p className="my-order-p"><strong>Numer przesyłki:</strong> {order.trackingNumber}</p>

              <p className="my-order-p"><strong>Rabat:</strong> {hasDiscount ? `${discountValue * 100}%` : 'Brak'}</p>
              <p className="my-order-p"><strong>Łączna kwota po rabacie:</strong> {finalPrice} zł</p>

              <p className="my-order-p"><strong>Produkty:</strong></p>
              <ul role="list">
                {order.products?.map(product => (
                  <li 
                    key={product.id} 
                    style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
                    role="listitem"
                    aria-label={`Produkt ${product.name}, ilość ${product.amount}, cena ${product.price} zł`}
                  >
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      style={{ width: "60px", height: "60px", objectFit: "cover", marginRight: "10px", borderRadius: "5px" }} 
                    />
                    <div>
                      <p style={{ margin: 0 }}>Nazwa: <span className="order-total">{product.name}</span> (x<span className="order-total">{product.amount}</span>)</p>
                      <p style={{ margin: 0 }}>Cena: <span className="order-total">{product.price}</span> zł</p>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MyOrders;
