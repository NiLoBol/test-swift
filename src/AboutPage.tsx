import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <LanguageSwitcher />
      
    </div>
  );
};

export default HomePage;
