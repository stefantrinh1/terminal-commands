import logo from '../assets/logos/homebrewlogo.png';

const command = {
  name: 'homebrew',
  displayName: 'Homebrew',
  logoUrl: logo,
  description:
    "Homebrew is a free and open-source software package management system that simplifies the installation of software on Apple's operating system, macOS, as well as Linux. The name is intended to suggest the idea of building software on the Mac depending on the user's taste.",
  commands: [
    {
      commandName: 'Current Brew Version',
      command: 'brew --version',
      description: 'returns the current version of brew you are using',
    },
    {
      commandName: 'List Homebrew Packages',
      command: 'brew list',
      description: 'Shows all the packages installed by brew.',
    },
    {
      commandName: 'Update Brew',
      command: 'brew update',
      description: 'Updates your brew package manager',
    },

    {
      commandName: 'Update Brew Packages',
      command: 'brew upgrade',
      description: 'Updates All Packages installed by Brew',
    },

    {
      commandName: 'Hold package Upgrades',
      command: 'brew pin packagename',
      description: 'Prevents that package from being updated',
    },

    {
      commandName: 'Unhold Package Upgrades',
      command: 'brew unpin packagename',
      description: 'unpins the package from being updated',
    },

    {
      commandName: 'Clean Up Old Versions of package',
      command: 'brew cleanup packagename',
      description:
        'uninstalls old versions of that package (brew does not automactically uninstall old versions)',
    },

    {
      commandName: 'Show Clean Up List Before',
      command: 'brew cleanup -n',
      description:
        'Shows the packages that would be cleaned up in ther terminal',
    },

    {
      commandName: 'Clean Up All Old Packages Versions',
      command: 'brew cleanup',
      description:
        'Uninstalls old versions of every package (brew does not automactically uninstall old versions)',
    },
  ],
};

export default command;
