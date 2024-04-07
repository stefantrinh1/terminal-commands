import logo from '../assets/logos/amplifylogo.png';

const command = {
  name: 'awsAmplify',
  displayName: 'AWS Amplify',
  logoUrl: logo,
  description:
    'Aws Amplify is a framework that is used in web and mobile developement that provides useful tools and libraries such as auth, data storage, analytics for backend functionaility',
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
