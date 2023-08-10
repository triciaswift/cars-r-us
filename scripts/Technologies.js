import { setTechId } from "./TransientState.js";

const handleTechChoice = (changeEvent) => {
  if (changeEvent.target.id === "techs") {
    const chosenOption = parseInt(changeEvent.target.value);
    setTechId(chosenOption);
  }
};

export const TechsOptions = async () => {
  const response = await fetch("http://localhost:8088/techs");
  const techs = await response.json();

  let techHTML = `<select id="techs">`;
  techHTML += `<option value="0">Select a technology package</option>`;

  document.addEventListener("change", handleTechChoice);

  const techOptionArray = techs.map((tech) => {
    return `<option value="${tech.id}">${tech.tech}</option>`;
  });

  techHTML += techOptionArray.join("");
  techHTML += `</select>`;
  return techHTML;
};
