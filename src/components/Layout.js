import React from 'react';
import { Box } from 'theme-ui';
import Header from './Header/Header';

export default function Layout({ children, location }) {
  return (
    <Box>
      <Header location={location} />
      {children}
    </Box>
  );
}
