import logo from '../assets/logos/bashlogo.png';

const command = {
  name: 'bash',
  displayName: 'Bash',
  logoUrl: logo,
  description:
    'Bash is a Unix shell and command language written by Brian Fox for the GNU Project as a free software replacement for the Bourne shell. First released in 1989, it has been used as the default login shell for most Linux distributions. A version is also available for Windows 10 via the Windows Subsystem for Linux.',
  commands: [
    {
      commandName: 'Change Directory',
      command: 'cd folderName',
      description: 'Changes Current Directory To Specified Folder',
    },
    {
      commandName: 'Move Back One Directory',
      command: 'cd ../',
      description:
        'Moves Back One Folder level from your current directory position.',
    },
    {
      commandName: 'Change Directory To Root',
      command: 'cd',
      description: 'Changes Current Directory To The Root Level',
    },

    {
      commandName: 'List Directory',
      command: 'ls',
      description: 'Lists all the folders and files in your current directory',
    },

    {
      commandName: 'Print Working Directory',
      command: 'pwd',
      description:
        'Prints Your Current Directory Path in which you are located',
    },

    {
      commandName: 'Create Folder',
      command: 'mkdir folderName',
      description: 'Makes a Folder/ Directory',
    },
    {
      commandName: 'Delete Empty Folder',
      command: 'rmdir folderName',
      description: 'Removes A Directory (must be empty directory)',
    },
    {
      commandName: 'Delete Folder And All Contents',
      command: 'rm -rf folderName',
      description: 'Removes A Directory and all its sub directory contents',
    },

    {
      commandName: 'Create New File',
      command: 'touch fileName',
      description: 'Creates a New File taking a filename as a parameter',
    },
    {
      commandName: 'Delete A File',
      command: 'rm fileName',
      description: 'Deletes a File by name ',
    },

    {
      commandName: 'Create Copy Of File',
      command: 'cp filename1 filename2',
      description:
        'Creates A Copy Of Another File, Takes current File name and new file name, needs to be in the same directory',
    },

    {
      commandName: 'Get All File and Directory Paths',
      command: 'find $(pwd)',
      description:
        'This gets every directory and filepath in the current working and sub directories.',
    },

    {
      commandName: 'Get All File Paths',
      command: 'find $(pwd) -type f',
      description:
        'This gets every filepath in the current working and sub directories',
    },
    {
      commandName: 'Get All Directory Paths',
      command: 'find $(pwd) -type d',
      description:
        'This gets every directory in the current working and sub directories.',
    },

    {
      commandName: 'Lists Folder and File permissions',
      command: 'ls -l',
      description:
        'Lists all the folder and file permissions in the current directory',
    },

    {
      commandName: 'Opens The zshrc File',
      command: 'open ~/.zshrc',
      description: 'Opens The zshrc file',
    },
  ],
};

export default command;
