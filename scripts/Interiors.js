import { setInteriorId } from "./TransientState.js";

const handleInteriorChoice = (changeEvent) => {
  if (changeEvent.target.id === "interiors") {
    const chosenOption = parseInt(changeEvent.target.value);
    setInteriorId(chosenOption);
  }
};

export const InteriorOptions = async () => {
  const response = await fetch("http://localhost:8088/interiors");
  const interiors = await response.json();

  let interiorHTML = `<select id="interiors">`;
  interiorHTML += `<option value="0">Select an interior material</option>`;

  document.addEventListener("change", handleInteriorChoice);

  const interiorOptionArray = interiors.map((interior) => {
    return `<option value="${interior.id}">${interior.interior}</option>`;
  });

  interiorHTML += interiorOptionArray.join("");
  interiorHTML += `</select>`;
  return interiorHTML;
};
