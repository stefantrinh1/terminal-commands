import logo from '../assets/logos/awsclilogo.png';

const command = {
  name: 'awsCli',
  displayName: 'AWS CLI',
  logoUrl: logo,
  description:
    'Aws Command Line Interface (CLI) is a unified tool to manage your AWS services. With just one tool to download and configure, you can control multiple AWS services from the command line and automate them through scripts.',
  commands: [
    {
      commandName: 'AWS Configure',
      command: 'aws configure',
      description:
        'Configures your AWS CLI with your AWS Access Key ID, Secret Access Key, Default region name, and Default output format',
    },

    {
      commandName: 'Open AWS Config File',
      command: 'open ~/.aws/config',
      description: 'Opens the AWS config file in your default text editor',
    },
    {
      commandName: 'Open AWS Credentials File',
      command: 'open ~/.aws/credentials',
      description: 'Opens the AWS credentials file in your default text editor',
    },
    {
      commandName: 'Switch AWS Profile',
      command: 'export AWS_PROFILE=profileName',
      description: 'Switches the AWS profile to the specified profile name',
    },
    {
      commandName: 'Reverse AWS Profile',
      command: 'export AWS_PROFILE=default',
      description: 'Switches the AWS profile to the default profile',
    },
    {
      commandName: 'List Profiles',
      command: 'aws configure list-profiles',
      description: 'Lists all the profiles configured in the AWS CLI',
    },
    {
      commandName: 'List Configured Profile Stats',
      command: 'aws configure list',
      description: 'Lists the configured profile stats',
    },
  ],
};

export default command;
