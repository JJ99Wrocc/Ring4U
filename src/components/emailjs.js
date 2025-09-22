import emailjs from "emailjs-com";

export const sendOrderEmail = (orderData, selectedProducts, totalCost) => {
  const templateParams = {
    to_name: `${orderData.shippingAddress.costumerName} ${orderData.shippingAddress.costumerSurname}`,
    email: orderData.email,
    address: orderData.shippingAddress.address,
    city: orderData.shippingAddress.city,
    postal_code: orderData.shippingAddress.postalCode,
    products: selectedProducts.map(p => `${p.name} (${p.amount})`).join(", "),
    total: `${totalCost} zł`,
  };

  return emailjs.send(
    "YOUR_SERVICE_ID",   // <- ID z EmailJS
    "YOUR_TEMPLATE_ID",  // <- ID szablonu EmailJS
    templateParams,
    "YOUR_PUBLIC_KEY"    // <- publiczny klucz EmailJS
  );
};
