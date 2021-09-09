import logo from '../assets/logos/gatsbylogo.png';

const command = {
  name: 'gatsbyjs',
  displayName: 'Gatsby JS',
  logoUrl: logo,
  description:
    'Gatsby provides development teams an open source frontend framework for creating rich, optimized websites and a cloud platform for delivering them on a blazing fast edge network.',
  commands: [
    {
      commandName: 'Install Gatsby Cli',
      command: 'npm install -g gatsby-cli',
      description: 'Installs gatsby cli as a global package',
    },
    {
      commandName: 'Checks Gatsby CLI Version',
      command: 'gatsby -v',
      description:
        'Checks the current ggatsby cli version you are using if installed.',
    },
    {
      commandName: 'Create New Gatsby Site',
      command: 'gatsby new',
      description: 'used to auto start a gatsby projects quickly.',
    },
    {
      commandName: 'Create Gatsby Site From Starter ',
      command: 'gatsby new site-name starter-url',
      description:
        'Creates a new gatsby site from a starter rather than default starter site.',
    },

    {
      commandName: 'Start Gatsby Project In Development Mode',
      command: 'gatsby develop',
      description: 'Starts A Gatsby Site In Development mode',
    },
    {
      commandName: 'Creates Production Build',
      command: 'gatsby build',
      description:
        'At the root of a Gatsby site, compile your application and make it ready for deployment',
    },
    {
      commandName: 'Get Environment Information',
      command: 'gatsby info',
      description:
        'At the root of a Gatsby site, get helpful environment information which will be required when reporting a bug',
    },

    {
      commandName: 'Clear Cache',
      command: 'gatsby clean',
      description: 'Clear gatsby project cache',
    },
  ],
};

export default command;
