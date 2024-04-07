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
  ],
};

export default command;
