import React from 'react';
import Layout from '../components/Layout/layout';
import { CallAction, Informations, MainBody, Help } from '../components/Sections/Home';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <CallAction />
      <Informations />
      <MainBody />
      <Help />
    </Layout>
  );
};

export default HomePage;
