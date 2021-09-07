import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Box, Text, Heading, Image } from 'theme-ui';
import allCommands from '../../../commandsData/allCommands';

const Homepage = () => {
  return (
    <Box sx={styles.container} as='main'>
      <Box sx={styles.headingContainer}>
        <Heading>Terminal Commands</Heading>
        <br></br>
        <Text as='p'>
          CLI commands are easily forgotten. This will quickly help you find
          what you need. it does not contain all commands but all the most used
          ones for quick look references.
        </Text>
        <br></br>
        <Text as='p'>
          Taking open source contributions. If anyone can add to this list or
          see a problem. Submit a pull request on{' '}
          <a
            href='https://github.com/stefantrinh1/terminal-commands'
            alt='github'
            target='_blank'
          >
            Github
          </a>
          .
        </Text>
      </Box>
      <Box sx={styles.boxes}>
        {Object.values(allCommands).map((element) => {
          console.log(element);
          return (
            <Link to={`/${element.name}`}>
              <Box sx={styles.box}>
                <Image src={element.logoUrl} sx={styles.image} />
                <Text sx={styles.text}>{element.displayName}</Text>
              </Box>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: ['100%', '', '', '80%'],
    minHeight: '100vh',
    marginLeft: ['', '', '', '20%'],
  },
  icon: {
    marginBottom: '2rem',
  },
  headingContainer: {
    padding: '2rem',
    a: {
      fontWeight: 'bold',
      textDecoration: 'underline',
    },
  },

  boxes: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    a: {
      flexGrow: '1',
      maxWidth: ['', '', '50%'],
      margin: '1rem',
    },
  },
  box: {
    // height: '100px',
    // width:'100%'
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#f9f9f9',
    padding: '1rem',
  },
  image: {
    width: '100%',
    objectFit: 'contain',
    height: '100px',
  },
  text: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: '1rem',
    fontWeight: 'bold',
    paddingTop: '1rem',
    borderTop: '1px solid black',
  },
};

export default withRouter(Homepage);
