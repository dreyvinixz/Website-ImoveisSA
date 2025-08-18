import React from 'react';
import Layout from '../components/Layout/layout';
import { CallAction, Informations, Highlights, SalesSection, Help } from '../components/Sections/Home';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <CallAction />
      <Informations />
      <Highlights />
      <SalesSection />
      <Help />
    </Layout>
  );
};

export default HomePage;
