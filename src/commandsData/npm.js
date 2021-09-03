import logo from '../assets/logos/npmlogo.png';

export default {
  name: 'npm',
  displayName: 'NPM',
  logoUrl: logo,
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
      command: 'npm install [package_name] -D',
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
      command: 'npm update [package_name]',
      description: 'Updates the local specified package to the newest version',
    },
    {
      commandName: 'Uninstall Package',
      command: 'npm uninstall [package_name]',
      description: 'Uninstalls the specified package',
    },
    {
      commandName: 'Uninstall Global Package',
      command: 'npm uninstall [package_name] -g',
      description: 'Uninstalls the specified package globally',
    },
  ],
};
