import * as Actions from "../actions/Actions";

export const estimate = (
  state = {
    currentEstimate: {},
    options: {
      units: ["2", "3", "5", "8"],
      qualifiers: ["Mad", "Mythical Man", "Long", "Short", "Bloody"],
      measures: ["Minutes", "Hours", "Days", "Weeks", "Unicorns"]
    },
    previousEstimates: []
  },
  action
) => {
  switch (action.type) {
    case Actions.estimate.type:
      const currentEstimate = generateEstimate(state.options);
      const previousEstimates = state.currentEstimate
        ? [state.currentEstimate, ...state.previousEstimates]
        : state.previousEstimates;
      console.log(currentEstimate);
      return { ...state, currentEstimate, previousEstimates };
    default: {
      if (state.currentEstimate) {
        return state;
      }
      return {
        currentEstimate: generateEstimate(state.options),
        ...state
      };
    }
  }
};

const generateEstimate = options => {
  return {
    units: randomValue(options.units),
    qualifier: randomValue(options.qualifiers),
    measure: randomValue(options.measures)
  };
};

const randomValue = options => {
  return options[Math.floor(Math.random() * options.length)];
};
