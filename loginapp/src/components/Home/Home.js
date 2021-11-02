import React from 'react';

import Card from '../card/Card';
import './Home.css';

const Home = ({ home }) => {
  return (
    <Card className='home'>
      <h1>Welcome back!</h1>
    </Card>
  );
};

export default Home;
