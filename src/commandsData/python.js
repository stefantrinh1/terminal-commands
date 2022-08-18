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
      description: 'Check local python version. this maybe python2 or python3 but you may have two versions of python installed',
    },
    {
      commandName: 'Check Local Python3 Version',
      command: 'python3 --version',
      description: 'Check local python version. this maybe python2 or python3 but you may have two versions of python installed',
    },
    {
      commandName: 'Create a Virtual ENV',
      command: 'python3 -m venv venv',
      description: 'Using in built python env manager VENV create a virtual environment, creates a venv folder in your directory.',
    },
    {
      commandName: 'Activate The Current Directory VENV',
      command: 'source venv/bin/activate',
      description: 'Activates Virtual ENV - Your terminal directory should look like - (venv) user@computername foldername %',
    },
    {
      commandName: 'Install Package Example',
      command: 'pip install django',
      description: 'Installs Django package in your env',
    },
  ],
};

export default command;
