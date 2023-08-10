export const PaintOptions = async () => {
  const response = await fetch("http://localhost:8088/paints");
  const paints = await response.json();

  let paintHTML = `
  <div class="choices_paint">
    <select id="paints">
        <option value="0">Select a paint color</option>`;

  const paintOptionArray = paints.map((paint) => {
    return `<option value="${paint.id}">${paint.paint}</option>`;
  });

  paintHTML += paintOptionArray.join("");
  paintHTML += `
    </select>
  </div>`;
  return paintHTML;
};
