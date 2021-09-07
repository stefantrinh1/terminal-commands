import './App.css';
import Routes from './components/routes/Routes';
import { Box, useThemeUI } from 'theme-ui';
import React, { useEffect } from 'react';

function App() {
  return (
    <Box sx={styles.container}>
      <Routes />
    </Box>
  );
}

export default App;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
};
