import React from 'react';
import './App.css';
import Routes from './components/routes/Routes';
import { Box } from 'theme-ui';

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
