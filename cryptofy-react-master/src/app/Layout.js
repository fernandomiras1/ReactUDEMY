import React from 'react';
import Helmet from 'react-helmet';

import { Header } from './layout/Header';
import { Content } from './layout/Content';
import { HeroSection } from './layout/HeroSection';

export const Layout = ({ children }) => {
  return (
    <div>
      {/* Se usa para SEO, podes pasar todos tus scripy o meta para renderizar en el head de tu app */}
      <Helmet
        title="Cryptofy"
        script={[
          { src: 'https://use.fontawesome.com/releases/v5.0.7/js/all.js' }
        ]}
      />
      <Header />
      <HeroSection />
      <Content />
    </div>
  );
};
