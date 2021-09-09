/** @jsxImportSource theme-ui */

import { Box, Text, Heading, Image } from 'theme-ui';
import CopyButton from '../CopyButton';
import slugify from 'slugify';
export default function CommandPage({ data }) {
  const { displayName, commands, logoUrl, description } = data;

  const renderCommands = () => {
    return commands.map((commandRow) => {
      const {
        commandName,
        command,
        description: commandDescription,
      } = commandRow;
      return (
        <Box sx={styles.row}>
          <Box sx={styles.commandName}>{commandName}</Box>
          <Box sx={styles.command}>
            {command}{' '}
            <CopyButton
              sx={styles.copyBtn}
              id={slugify(commandName, { lower: true })}
              code={command}
            />
          </Box>
          <Box sx={styles.commandDescription}>{commandDescription}</Box>
        </Box>
      );
    });
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.headingContainer}>
        <Image sx={styles.logo} src={logoUrl} alt='command branding logo' />
        <Box sx={styles.headingText}>
          <Heading sx={styles.heading} as='h1'>
            {displayName}
          </Heading>
          <Text as='p'>{description}</Text>
        </Box>
      </Box>
      <Box sx={styles.commandsBox}>
        <Heading sx={styles.headingTable} as='h3'>
          {displayName} Commands List
        </Heading>
        <Box sx={styles.headerRow}>
          <Box sx={{ ...styles.commandName, ...styles.tableHeader }}>
            Command Name
          </Box>
          <Box sx={{ ...styles.command, ...styles.tableHeader }}>Command</Box>
          <Box sx={{ ...styles.commandDescription, ...styles.tableHeader }}>
            Command Description
          </Box>
        </Box>
        <Box sx={styles.commandsContainer}>{renderCommands()}</Box>
      </Box>
    </Box>
  );
}

const styles = {
  container: {
    width: ['100%', '', '', '80%'],
    minHeight: '100vh',
    margin: '0 0 0 auto',
    backgroundColor: '#f6f6f6',
    padding: ['1.5rem 0.5rem', '', '', '2rem'],
  },
  headingContainer: {
    display: 'flex',
    flexDirection: ['column', '', 'row'],
    justifyContent: 'flex-start',
    alignItems: ['flex-start', '', 'center'],
    width: '100%',
    borderBottom: '1px solid',
    paddingBottom: '1.5rem',
  },
  logo: {
    // width: ['75%', '50%', '35%'],
    padding: '0.5rem 2rem 0.5rem 0.5rem',
    marginBottom: ['2rem', '', '0rem'],

    maxHeight: '125px',
    maxWidth: '300px',
    objectFit: 'cover',
  },

  headingText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: ['0.5rem', '', '0rem 2rem'],
    width: ['100%', '', '65%'],
    flexGrow: '1',
    borderLeft: ['', '', 'solid 1px grey'],
  },
  heading: {
    marginBottom: '1rem',
  },

  headingTable: {
    padding: '1rem',
    backgroundColor: 'purple',
    color: 'white',
    display: 'flex',
  },
  commandsBox: {
    marginTop: '1rem',
    padding: ['1rem', '', '2rem'],
    backgroundColor: 'white',
    width: '100%',
  },
  commandsContainer: {
    '> div:nth-of-type(even)': {
      backgroundColor: '#f9f9f9',
    },
  },
  headerRow: {
    // borderBottom: '3px solid',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.5rem',
    fontWeight: 'bold',
    display: ['none', '', 'flex'],
    backgroundColor: '#d19bde',
    color: '#800080',
  },
  tableHeader: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
  },
  row: {
    display: 'flex',
    flexDirection: ['column', '', 'row'],
    justifyContent: ['flex-start', '', 'center'],
    alignItems: ['flex-start', '', 'center'],
    fontSize: '0.9rem',
    borderBottom: '1px solid lightgrey',
    padding: '1rem 0.5rem',
  },
  commandName: {
    width: ['100%', '', '25%'],
    padding: '0rem 1rem 0rem 0rem',
    fontSize: '0.8em',
  },
  command: {
    width: ['100%', '', '35%'],
    fontWeight: 'bold',
    padding: '0rem 2rem 0rem 0rem',
    fontSize: '0.9em',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: '1',
    lineBreak: 'anywhere',
    order: ['2', '', 'unset'],
  },
  commandDescription: {
    width: ['100%', '', '35%'],
    fontSize: '0.7em',
  },
  copyBtn: {
    // margin: '0rem 0rem 0rem auto',
  },
};
