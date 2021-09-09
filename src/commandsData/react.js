import react from '../assets/logos/reactlogo.png';

const reactCommands = {
  name: 'react',
  displayName: 'React JS',
  logoUrl: react,
  description:
    'React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.',
  commands: [
    {
      commandName: 'Create React App Starter',
      command: 'npx create-react-app my-app',
      description:
        'Create A New Single Page Application Folder with all the configurations and setup for you. Requires project name',
    },
    {
      commandName: 'Create React App In Current Directory',
      command: 'create-react-app .',
      description:
        'Create A New Single Page Application In the current directory you are in.',
    },
  ],
};

export default reactCommands;
