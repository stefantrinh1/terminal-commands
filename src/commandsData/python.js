import logo from '../assets/logos/pythonlogo.png';

const command = {
  name: 'python',
  displayName: 'Python',
  logoUrl: logo,
  description:
    'Python is general programming langugage mainly used on serverside applications',
  commands: [
    {
      commandName: 'Check Local Python Version',
      command: 'python --version',
      description: '',
    },
    {
      commandName: 'Check Local Python3 Version',
      command: 'python3 --version',
      description: 'Check local python version. this maybe python2 or python3 but you may have two versions of python installed',
    },
  ],
};

export default command;
