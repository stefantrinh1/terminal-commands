import logo from '../assets/logos/yarnlogo.png';

const command = {
  name: 'yarn',
  displayName: 'Yarn',
  logoUrl: logo,
  description:
    "Yarn is a package manager that doubles down as project manager. Whether you work on one-shot projects or large monorepos, as a hobbyist or an enterprise user, we've got you covered.",
  commands: [
    {
      commandName: 'Check Yarn Version',
      command: 'yarn -v',
      description: 'Prints the current version of yarn you are using',
    },
    {
      commandName: 'Initialize Node Project',
      command: 'yarn init',
      description: 'Initialize Node Project',
    },
    {
      commandName: 'Install All Dependencies',
      command: 'yarn install',
      description:
        'Install all the dependencies listed within package.json in the local node_modules folder.',
    },
    {
      commandName: 'Start Project',
      command: 'yarn start',
      description: 'Default command for Starts Project',
    },
    {
      commandName: 'Install Node Package',
      command: 'yarn add packagename',
      description: 'Installs package locally',
    },
    {
      commandName: 'Install Node Package By Version',
      command: 'yarn add package@version',
      description: 'Installs specific version of package locally',
    },
    {
      commandName: 'Install Node Package By Version',
      command: 'yarn add package --dev',
      description: 'Installs package as dev dependencies',
    },
    {
      commandName: 'Remove Package',
      command: 'yarn remove package-name',
      description: 'Yarn Removes package from project',
    },
    {
      commandName: 'Upgrades All Packages',
      command: 'yarn upgrade',
      description:
        'Upgrades all major package changes does not upgrade small number versioning',
    },
    {
      commandName: 'Upgrades Package',
      command: 'yarn upgrade package',
      description: 'Upgrades a speficied package',
    },
  ],
};

export default command;
