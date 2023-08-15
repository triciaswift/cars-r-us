import { setWheelId } from "./TransientState.js";

const handleWheelChoice = (changeEvent) => {
  if (changeEvent.target.id === "wheels") {
    const chosenOption = parseInt(changeEvent.target.value);
    setWheelId(chosenOption);
  }
};

export const WheelsOptions = async () => {
  const response = await fetch("http://localhost:8088/wheels");
  const wheels = await response.json();

  let wheelHTML = `<select id="wheels">`;
  wheelHTML += `<option value="0">Select a wheel style</option>`;

  document.addEventListener("change", handleWheelChoice);

  const wheelOptionArray = wheels.map((wheel) => {
    return `<option value="${wheel.id}">${wheel.wheel} -- $${wheel.price}</option>`;
  });

  wheelHTML += wheelOptionArray.join("");
  wheelHTML += `</select>`;
  return wheelHTML;
};
