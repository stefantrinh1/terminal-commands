import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Box } from 'theme-ui';
import { FaCopy } from 'react-icons/fa';
import slugify from 'slugify';

export default function CopyButton(props) {
  const [popUp, setPopUp] = useState(false);
  return (
    <Box sx={{ ...styles.container, ...props.sx }}>
      <Button
        sx={styles.btn}
        onClick={() => {
          const textArea = document.getElementById(props.id);
          textArea.select();
          document.execCommand('copy');
          setPopUp(true);
          setTimeout(() => {
            setPopUp(false);
          }, 2000);
        }}
      >
        <FaCopy />
      </Button>
      {/* A text area to place the code somewhere to copy and hide from screen */}
      <textarea
        style={{ position: 'absolute', top: '-5000px' }}
        readOnly
        id={props.id}
        value={props.code}
      />
      {popUp && <Box sx={styles.popup}>Copied!</Box>}
    </Box>
  );
}

const styles = {
  container: {},
  btn: {
    padding: '0.25rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
    border: 'solid 1px purple',
    margin: '0rem',
    textAlign: 'center',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'transparent',
    },
    svg: {
      margin: '0rem',
    },
  },
  popup: {
    position: 'fixed',
    bottom: '1rem',
    left: '1rem',
    backgroundColor: 'purple',
    color: 'white',
    padding: '1rem 3rem',
    borderRadius: '10px',
  },
};
