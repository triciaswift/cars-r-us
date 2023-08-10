const transientState = {
  paintId: 0,
  interiorId: 0,
  technologyId: 0,
  wheelId: 0,
};

export const setPaintId = (chosenPaint) => {
  transientState.paintId = chosenPaint;
  console.log(transientState);
};

export const setInteriorId = (chosenInterior) => {
  transientState.interiorId = chosenInterior;
  console.log(transientState);
};

export const technologyId = (chosenTechnology) => {
  transientState.technologyId = chosenTechnology;
  console.log(transientState);
};

export const setWheelId = (chosenWheel) => {
  transientState.wheelId = chosenWheel;
  console.log(transientState);
};
