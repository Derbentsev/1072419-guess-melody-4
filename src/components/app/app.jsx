import {WelcomeScreen} from '@components/welcome-screen/welcome-screen';


const welcomeButtonHundler = () => {};

export const App = (props) => {
  const {errorCount} = props;

  return <WelcomeScreen
    errorCount = {errorCount}
    onWelcomeButtonClick = {welcomeButtonHundler}
  />;
};

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};
