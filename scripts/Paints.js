import { setPaintId } from "./TransientState.js";

const handlePaintChoice = (changeEvent) => {
  if (changeEvent.target.id === "paints") {
    const chosenOption = parseInt(changeEvent.target.value);
    setPaintId(chosenOption);
  }
};

export const PaintOptions = async () => {
  const response = await fetch("http://localhost:8088/paints");
  const paints = await response.json();

  let paintHTML = `<select id="paints">`;
  paintHTML += `<option value="0">Select a paint color</option>`;

  document.addEventListener("change", handlePaintChoice);

  const paintOptionArray = paints.map((paint) => {
    return `<option value="${paint.id}">${paint.paint} -- $${paint.price}</option>`;
  });

  paintHTML += paintOptionArray.join("");
  paintHTML += `</select>`;
  return paintHTML;
};
