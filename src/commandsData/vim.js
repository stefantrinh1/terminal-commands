import logo from '../assets/logos/vimlogo.png';

const command = {
  name: 'vimEditor',
  displayName: 'Vim Editor',
  logoUrl: logo,
  description:
    'Vim is a highly configurable text editor built to enable efficient text editing. It is an improved version of the vi editor distributed with most UNIX systems.',
  commands: [
    {
      commandName: 'Insert Mode',
      command: 'i',
      description:
        'Press i to enter insert mode. You can now type in the text. In Editor',
    },
    {
      commandName: 'Exit Insert Mode',
      command: 'esc',
      description: 'Press esc to exit insert mode and return to normal mode',
    },
    {
      commandName: 'Save Changes',
      command: ':w',
      description: 'Save changes to the file',
    },
    {
      commandName: 'Save and Exit',
      command: ':wq',
      description: 'Save changes and exit the editor',
    },

    {
      commandName: 'Exit Without Saving',
      command: ':q!',
      description: 'Exit the editor without saving changes',
    },
    {
      commandName: 'Undo',
      command: 'u',
      description: 'Undo the last change',
    },

    {
      commandName: 'Redo',
      command: 'ctrl + r',
      description: 'Redo the last change',
    },

    {
      commandName: 'Exit and Quit All',
      command: ':qa!',
      description: 'Exit and quit all files without saving changes',
    },
  ],
};

export default command;
