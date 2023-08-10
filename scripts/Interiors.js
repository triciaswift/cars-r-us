export const InteriorOptions = async () => {
  const response = await fetch("http://localhost:8088/interiors");
  const interiors = await response.json();

  let interiorHTML = `
    <div class="choices_interior">
      <select id="interiors">
          <option value="0">Select an interior material</option>`;

  const interiorOptionArray = interiors.map((interior) => {
    return `<option value="${interior.id}">${interior.interior}</option>`;
  });

  interiorHTML += interiorOptionArray.join("");
  interiorHTML += `
      </select>
    </div>`;
  return interiorHTML;
};
