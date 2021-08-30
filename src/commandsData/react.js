export default {
  name: 'react',
  displayName: 'React JS',
  logoUrl: '',
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
}
