import emailjs from 'emailjs-com';

const handleSendOrder = (e) => {
  e.preventDefault();

  const templateParams = {
    to_name: orderData.name,
    email: orderData.email,
    address: orderData.address,
    city: orderData.city,
    postal_code: orderData.postalCode,
    products: selectedProducts.map(p => `${p.name} (${p.amount})`).join(', '),
    total: `${totalCost} zł`,
  };

  emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    templateParams,
    'YOUR_PUBLIC_KEY'
  ).then((response) => {
    console.log('SUCCESS!', response.status, response.text);
    alert("Zamówienie wysłane!");
  }, (err) => {
    console.log('FAILED...', err);
    alert("Błąd podczas wysyłania.");
  });
};

export default handleSendOrder;