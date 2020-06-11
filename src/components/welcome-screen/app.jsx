/* eslint-disable react/prop-types */
import React from 'react';
import {WelcomeScreen} from './welcome-screen.jsx';

export const App = (props) => {
  const {gameTime, errorCount} = props;

  return <WelcomeScreen
    time={gameTime}
    errorCount={errorCount}
  />;
};
