import {WelcomeScreen} from '@components/welcome-screen/welcome-screen';


export const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {errorCount} = props;

  return <WelcomeScreen
    errorCount = {errorCount}
  />;
};
