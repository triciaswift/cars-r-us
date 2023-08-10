export const WheelsOptions = async () => {
  const response = await fetch("http://localhost:8088/wheels");
  const wheels = await response.json();

  let wheelHTML = `
        <div class="choices_wheel">
          <select id="wheels">
              <option value="0">Select a wheel style</option>`;

  const wheelOptionArray = wheels.map((wheel) => {
    return `<option value="${wheel.id}">${wheel.wheel}</option>`;
  });

  wheelHTML += wheelOptionArray.join("");
  wheelHTML += `
          </select>
        </div>`;
  return wheelHTML;
};
