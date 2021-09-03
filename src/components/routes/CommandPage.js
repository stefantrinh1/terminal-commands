/** @jsxImportSource theme-ui */

import React from 'react';
import { Box, Text, Heading, Image } from 'theme-ui';

export default function CommandPage({ data }) {
  console.log(data);
  const { displayName, commands, name, logoUrl, description } = data;

  const renderCommands = () => {
    console.log(commands);
    return commands.map((commandRow) => {
      const {
        commandName,
        command,
        description: commandDescription,
      } = commandRow;
      return (
        <Box sx={styles.row}>
          <Box sx={styles.commandName}>{commandName}</Box>
          <Box sx={styles.command}>{command}</Box>
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
        <Heading sx={styles.heading} as='h3'>
          Commands
        </Heading>
        <Box sx={styles.headerRow}>
          <Box sx={styles.commandName}>Command Name</Box>
          <Box sx={styles.command}>Command</Box>
          <Box sx={styles.commandDescription}>Command Description</Box>
        </Box>
        <Box sx={styles.commandsContainer}>{renderCommands()}</Box>
      </Box>
    </Box>
  );
}

const styles = {
  container: {
    width: '75%',
    minHeight: '100vh',
    margin: ' 0 0 0 auto',
    backgroundColor: 'lightgrey',
    padding: '2rem',
  },
  headingContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    borderBottom: '1px solid',
    paddingBottom: '1.5rem',
  },
  logo: {
    width: '35%',
    padding: '0.5rem 2rem 0.5rem 0.5rem',
    borderRight: 'solid 1px black',
  },

  headingText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '0rem 2rem',
    width: '65%',
  },
  heading: {
    borderBottom: 'solid 2px black',
    paddingBottom: '0.5rem',
    marginBottom: '1rem',
  },
  commandsBox: {
    marginTop: '1rem',
    padding: '2rem',
    backgroundColor: 'white',
    width: '100%',
  },
  commandsContainer: {
    '> div:nth-of-type(even)': {
      backgroundColor: '#e0e0e0',
    },
  },
  headerRow: {
    borderBottom: '3px solid',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.5rem',
    fontWeight: 'bold',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '0.9rem',
    borderBottom: '1px solid lightgrey',
    padding: '1rem 0.5rem',
  },
  commandName: {
    width: '25%',
    padding: '0rem 1rem 0rem 0rem',
  },
  command: {
    width: '35%',
    fontWeight: 'bold',
    padding: '0rem 1rem 0rem 0rem',
  },
  commandDescription: {
    width: '35%',
  },
};
