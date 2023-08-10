export const CustomOrders = async () => {
  const fetchResponse = await fetch("http://localhost:8088/orders");
  const orders = await fetchResponse.json();

  let ordersHTML = orders.map((order) => {
    return `<div>Order #${order.id}</div>`;
  });

  ordersHTML = ordersHTML.join("");
  return ordersHTML;
};
