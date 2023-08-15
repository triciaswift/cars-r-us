import { SaveOrder, currentTransientState } from "./TransientState.js";

const handleButtonClick = (clickEvent) => {
  if (clickEvent.target.id === "order_button") {
    const transientState = currentTransientState();
    if (
      transientState.paintId &&
      transientState.interiorId &&
      transientState.packageId &&
      transientState.wheelId
    ) {
      SaveOrder();
    } else {
      const errorMessage = `<div class="message">Please select all 4 items.</div>`;
      const parentTag = document.querySelector(".error_message");
      parentTag.innerHTML = errorMessage;
    }
  }
};

export const OrderButton = () => {
  document.addEventListener("click", handleButtonClick);
  return `<button id="order_button">Place Car Order</button>`;
};
