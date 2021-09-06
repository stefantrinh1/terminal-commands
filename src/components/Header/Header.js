/** @jsxImportSource theme-ui */

import { Box, Image, Text, Heading, Link as ExternalLink } from 'theme-ui';
import { Link } from 'react-router-dom';
import allCommands from '../../commandsData/allCommands';
import { AiOutlinePullRequest, AiFillGithub } from 'react-icons/ai';
import { GoPerson } from 'react-icons/go';
import { FiArrowRightCircle } from 'react-icons/fi';

export default function Header(props) {
  // sets state to scrolled if the user is not at the top of the page

  console.log(allCommands);

  return (
    <Box sx={{ ...styles.container }}>
      <Box sx={styles.headingContainer}>
        <Heading as='h1' sx={styles.heading}>
          <Link to='/'>Terminal Commands</Link>
        </Heading>
        <Text sx={styles.text} as='p'>
          All your forgotten commands in one place
        </Text>
      </Box>
      <Box sx={styles.menu}>
        {Object.values(allCommands).map((commandType) => {
          return (
            <Link to={`/${commandType.name}`} sx={styles.link}>
              <FiArrowRightCircle /> {commandType.displayName}
            </Link>
          );
        })}
      </Box>
      <Box sx={styles.externalLinks}>
        <ExternalLink href='https://github.com/stefantrinh1/terminal-commands'>
          <AiFillGithub />
          Github
        </ExternalLink>
        <ExternalLink href='http://www.stefantrinh.com/'>
          <GoPerson />
          Author
        </ExternalLink>
        <ExternalLink href='https://github.com/stefantrinh1/terminal-commands/pulls'>
          <AiOutlinePullRequest />
          Pull Requests
        </ExternalLink>
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
    position: ['', '', '', 'fixed'],
    top: '0rem',
    left: '0rem',
    height: ['', '', '', '100vh'],
    backgroundColor: 'white',
    borderRight: '1px solid lightgrey',
    width: ['100%', '', '', '20%'],
    overflow: 'hidden',
  },
  headingContainer: {
    borderBottom: '1px solid black',
    padding: '1rem',
    width: '100%',
    backgroundColor: 'purple',
    color: 'white',
  },
  heading: {
    fontSize: '1.75rem',
    marginBottom: '1rem',
  },
  text: {
    color: 'lightgrey',
  },
  menu: {
    display: 'flex',
    flexWrap: ['nowrap'],
    flexDirection: ['row', '', '', 'column'],
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '1rem',
    width: '100%',
    overflowX: 'scroll',
    overflowY: 'hidden',
    whiteSpace: ['nowrap'],
    backgroundColor: ['#f8f8f8', '', '', 'white'],
    borderBottom: ['1px solid black', '', '', 'none'],
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  link: {
    fontSize: ['1rem', '', '', '1.1rem'],
    padding: ['0.5rem', '', '', '0.5rem 0rem'],
    flex: ' 0 0 auto',
    display: 'flex',
    alignItems: 'center',
    transition: 'all ease-in-out 0.5s',
    svg: {
      marginRight: '0.5rem',
    },
    ':hover': {
      paddingLeft: ['', '', '', '1rem'],
      opacity: '0.8',
      color: 'purple',
    },
  },

  externalLinks: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    padding: '1rem',
    borderTop: '1px solid lightgrey',
    paddingTop: '0.75rem',
    marginTop: '0.75rem',
    margin: 'auto 0rem 0rem',
    backgroundColor: '#231c37',
    color: 'white',
    a: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row',
      fontSize: '1.1rem',
      margin: '0.25rem 0rem',
      svg: {
        marginRight: '1rem',
        width: '30px',
        height: '30px',
        color: 'purple',
      },
    },
  },
};
