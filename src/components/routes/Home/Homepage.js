import React from 'react';
import { withRouter } from 'react-router';
import { Box, Text, Heading } from 'theme-ui';
import { useThemeUI } from 'theme-ui';

const Homepage = () => {
  const context = useThemeUI();
  const { theme, components, colorMode, setColorMode } = context;

  return <Box sx={styles.container} as='main'></Box>;
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: '100vh',
  },
  icon: {
    marginBottom: '2rem',
  },
  boxes: {
    justifyContent: 'flex-start',
  },
};

export default withRouter(Homepage);
