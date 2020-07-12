import NameSpace from '../name-space';


const NAME_SPACE = NameSpace.GAME;

const getStep = (state) => {
  return state[NAME_SPACE].step;
};

const getMistakes = (state) => {
  return state[NAME_SPACE].mistakes;
};

const getMaxMistakes = (state) => {
  return state[NAME_SPACE].getMaxMistakes;
};


export {
  getStep,
  getMistakes,
  getMaxMistakes,
};
