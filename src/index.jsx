import ReactDOM from 'react-dom';
import App from '@components/app/app';
import {ERROR_COUNT} from '@consts/index';
import questions from '@mocks/questions';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from '@reducer/reducer.js';


const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        errorsCount = {ERROR_COUNT}
        questions = {questions}
      />,
    </Provider>,
    document.querySelector(`#root`)
);
