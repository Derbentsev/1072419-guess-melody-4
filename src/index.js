import ReactDOM from 'react-dom';
import {App} from '@components/app/app.jsx';
import {ERROR_COUNT} from '@consts/consts';


ReactDOM.render(
    <App
      errorCount = {ERROR_COUNT}
    />,
    document.querySelector(`#root`)
);
