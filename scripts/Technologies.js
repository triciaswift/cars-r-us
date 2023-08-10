export const TechnologiesOptions = async () => {
  const response = await fetch("http://localhost:8088/technologies");
  const technologies = await response.json();

  let technologyHTML = `
      <div class="choices_technology">
        <select id="technologies">
            <option value="0">Select a technology package</option>`;

  const technologyOptionArray = technologies.map((technology) => {
    return `<option value="${technology.id}">${technology.technology}</option>`;
  });

  technologyHTML += technologyOptionArray.join("");
  technologyHTML += `
        </select>
      </div>`;
  return technologyHTML;
};
