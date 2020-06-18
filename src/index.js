import ReactDOM from 'react-dom';
import {App} from '@components/app/app.jsx';
import {ERROR_COUNT} from '@consts/consts';
import questions from '@mocks/questions';


ReactDOM.render(
    <App
      errorsCount = {ERROR_COUNT}
      questions = {questions}
    />,
    document.querySelector(`#root`)
);
