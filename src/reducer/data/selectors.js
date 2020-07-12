import {createSelector} from 'reselect';
import NameSpace from '../name-space';


const getQuestions = (state) => {
  return state[NameSpace.DATA].questions;
};

const randomFilter = () => {
  return Math.random() > 0.5;
};

const getArtistsQuestions = createSelector(
    getQuestions,
    randomFilter,
    randomFilter,
    (resultOne, resultTwo) => {
      return resultOne.filter((it) => resultTwo && it.type === `artist`);
    }
);

const getGenreQuestions = createSelector(
    getQuestions,
    (questions) => {
      return questions.filter((it) => it.type === `genre`);
    }
);


export {
  getQuestions,
  getArtistsQuestions,
  getGenreQuestions,
};
