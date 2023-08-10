import { technologyId } from "./TransientState.js";

const handleTechnologyChoice = (changeEvent) => {
  if (changeEvent.target.id === "technologies") {
    const chosenOption = parseInt(changeEvent.target.value);
    technologyId(chosenOption);
  }
};

export const TechnologiesOptions = async () => {
  const response = await fetch("http://localhost:8088/technologies");
  const technologies = await response.json();

  let technologyHTML = `<select id="technologies">`;
  technologyHTML += `<option value="0">Select a technology package</option>`;

  document.addEventListener("change", handleTechnologyChoice);

  const technologyOptionArray = technologies.map((technology) => {
    return `<option value="${technology.id}">${technology.technology}</option>`;
  });

  technologyHTML += technologyOptionArray.join("");
  technologyHTML += `</select>`;
  return technologyHTML;
};
