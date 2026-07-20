import emailjs from "@emailjs/browser";

export const sendOrderEmail = (orderData, selectedProducts, totalCost) => {


  const wantsInvoice =
    orderData.billingAddress?.wantInvoice || false;


  const templateParams = {
    to_name: `${orderData.shippingAddress.costumerName} ${orderData.shippingAddress.costumerSurname}`,

    costumerName: orderData.shippingAddress.costumerName,
    costumerSurname: orderData.shippingAddress.costumerSurname,

    email: orderData.email,

    phonePrefix: orderData.shippingAddress.phonePrefix,
    phoneNumber: orderData.shippingAddress.phoneNumber,

    address: orderData.shippingAddress.address,
    postalCode: orderData.shippingAddress.postalCode,
    city: orderData.shippingAddress.city,


    // DANE DO FAKTURY
    company: orderData.billingAddress?.company || "",
    nip: orderData.billingAddress?.nip || "",

    billingName:
      orderData.billingAddress?.costumerName || "",

    billingSurname:
      orderData.billingAddress?.costumerSurname || "",

    billingAddress:
      orderData.billingAddress?.address || "",

    billingPostalCode:
      orderData.billingAddress?.postalCode || "",

    billingCity:
      orderData.billingAddress?.city || "",


    products: selectedProducts
      .filter((p) => p.selected)
      .map((p) => `${p.name} × ${p.amount}`)
      .join("\n"),


    total: `${totalCost} zł`,


    invoice:
      wantsInvoice
        ? "TAK - faktura"
        : "NIE - rachunek",
  };


const templateId = wantsInvoice
  ? "template_vxy9uni"
  : "template_t33wcuk";


  console.log("CZY FAKTURA:", wantsInvoice);
  console.log("TEMPLATE:", templateId);


  return emailjs.send(
    "service_q080d8x",
    templateId,
    templateParams,
    "b0kSQQdQ70kSaSPcg"
  );
};