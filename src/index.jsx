import ReactDOM from 'react-dom';
import {App} from '@components/app/app';
import {ERROR_COUNT} from '@consts/index';
import questions from '@mocks/questions';


ReactDOM.render(
    <App
      errorsCount = {ERROR_COUNT}
      questions = {questions}
    />,
    document.querySelector(`#root`)
);
