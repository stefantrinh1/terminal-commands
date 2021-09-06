import logo from '../assets/logos/npmlogo.png';

export default {
  name: 'npm',
  displayName: 'NPM',
  logoUrl: logo,
  description:
    'npm is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js.',
  commands: [
    {
      commandName: 'Initialize Node Project',
      command: 'npm init',
      description: 'Initialize a local node project',
    },
    {
      commandName: 'List Npm packages',
      command: 'npm [command] help',
      description:
        'Shows all the Npm packages installed locally in the project',
    },
    {
      commandName: 'List Global Npm Packages',
      command: 'npm list -g',
      description:
        'Shows all the Npm packages installed globally on your system',
    },

    {
      commandName: 'Install All Npm packages',
      command: 'npm install',
      description:
        'Checks for package.json file and installs all the packages in the package.json manifesto',
    },

    {
      commandName: 'Install Package Locally',
      command: 'npm install package_name',
      description: 'Installs npm package locally',
    },
    {
      commandName: 'Install Package Globally',
      command: 'npm install -g package_name',
      description: 'Installs npm package globally',
    },

    {
      commandName: 'Install Dev Package Locally',
      command: 'npm install package_name -D',
      description: 'Install Dev Dependancy Package Locally',
    },
    {
      commandName: 'Update Packages',
      command: 'npm update',
      description:
        'Updates all the local specified package to the newest version',
    },
    {
      commandName: 'Update Package',
      command: 'npm update package_name',
      description: 'Updates the local specified package to the newest version',
    },
    {
      commandName: 'Uninstall Package',
      command: 'npm uninstall package_name',
      description: 'Uninstalls the specified package',
    },
    {
      commandName: 'Uninstall Global Package',
      command: 'npm uninstall package_name -g',
      description: 'Uninstalls the specified package globally',
    },
    {
      commandName: 'Launch Package',
      command: 'npm start',
      description: 'Start a package/project',
    },
    {
      commandName: 'Add User',
      command: 'npm adduser',
      description: 'Adds User to local Npm installation',
    },
    {
      commandName: 'Check Npm User',
      command: 'npm whoami',
      description: 'Gets the username of the account that is logged in',
    },
    {
      commandName: 'Publish package',
      command: 'npm publish',
      description: 'publishes the current project/package to npm registry.',
    },
  ],
};
