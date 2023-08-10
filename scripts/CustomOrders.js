export const CustomOrders = async () => {
  const fetchResponse = await fetch(
    "http://localhost:8088/orders?_expand=paint&_expand=interior&_expand=package&_expand=wheel"
  );
  const orders = await fetchResponse.json();

  const ordersHTML = orders.map((order) => {
    const total =
      order.paint.price +
      order.interior.price +
      order.package.price +
      order.wheel.price;

    const orderPrice = total.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    return `<div>${order.paint.paint} car with 
    ${order.wheel.wheel} wheels, 
    ${order.interior.interior} interior, and the 
    ${order.package.package} for a total cost of 
    ${orderPrice}</div>`;
  });

  return ordersHTML.join("");
};
