export default {
  name: 'git',
  displayName: 'Git',
  logoUrl: '',
  commands: [
    {
      commandName: 'Initialize Git',
      command: 'git init',
      description: 'Initialize a local Git repository',
    },
    {
      commandName: 'git clone ',
      command: 'cd ../',
      description:
        'Moves Back One Folder level from your current directory position.',
    },
    {
      commandName: 'Change Directory To Root',
      command: 'cd',
      description: 'Changes Current Directory To The Root Level',
    },
  ],
}
