import React from 'react';
import PropTypes from 'prop-types';
import {WelcomeScreen} from '@components/welcome-screen/welcome-screen.jsx';


export const App = (props) => {
  const {errorCount} = props;

  return <WelcomeScreen
    errorCount = {errorCount}
  />;
};

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
};
