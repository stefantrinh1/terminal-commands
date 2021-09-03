/** @jsxImportSource theme-ui */

import { Box, Image, Text, Heading } from 'theme-ui';
import { Link } from 'react-router-dom';
import allCommands from '../../commandsData/allCommands';
export default function Header(props) {
  // sets state to scrolled if the user is not at the top of the page

  console.log(allCommands);

  return (
    <Box sx={{ ...styles.container }}>
      <Box sx={styles.headingContainer}>
        <Heading as='h1' sx={styles.heading}>
          Terminal Commands
        </Heading>
        <Text sx={styles.text} as='p'>
          All your forgotten commands in one place
        </Text>
      </Box>
      <Box sx={styles.menu}>
        {Object.values(allCommands).map((commandType) => {
          return (
            <Box>
              <Link to={`/${commandType.name}`} sx={styles.link}>
                {commandType.displayName}
              </Link>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
const styles = {
  // ? == container styles ===
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'fixed',
    top: '0rem',
    left: '0rem',
    height: '100vh',
    backgroundColor: 'white',
    borderRight: '1px solid lightgrey',
    width: ['25%'],
  },
  headingContainer: {
    borderBottom: '1px solid black',
    padding: '1rem',
    width: '100%',
  },
  heading: {
    fontSize: '1.75rem',
    marginBottom: '1rem',
  },
  text: {
    color: 'grey',
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '1rem',
    width: '100%',
  },
  link: {
    fontSize: '1.3rem',
    padding: '0.5rem 0rem',
    display: 'flex',
  },
};
