const transientState = {
  paintId: 0,
  interiorId: 0,
  techId: 0,
  wheelId: 0,
};

export const setPaintId = (chosenPaint) => {
  transientState.paintId = chosenPaint;
};

export const setInteriorId = (chosenInterior) => {
  transientState.interiorId = chosenInterior;
};

export const setTechId = (chosenTech) => {
  transientState.techId = chosenTech;
};

export const setWheelId = (chosenWheel) => {
  transientState.wheelId = chosenWheel;
};

export const currentTransientState = () => {
  return structuredClone(transientState);
};

export const SaveOrder = async () => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transientState),
  };

  const response = await fetch("http://localhost:8088/orders", postOptions);

  if (response.ok) {
    setPaintId(0);
    setInteriorId(0);
    setTechId(0);
    setWheelId(0);

    const stateChanged = new CustomEvent("newOrderPlaced");
    document.dispatchEvent(stateChanged);
  }
};
