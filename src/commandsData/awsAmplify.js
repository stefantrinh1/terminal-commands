import logo from '../assets/logos/amplifylogo.png';

const command = {
  name: 'awsAmplify',
  displayName: 'AWS Amplify',
  logoUrl: logo,
  description:
    'Aws Amplify is a framework that is used in web and mobile developement that provides useful tools and libraries such as auth, data storage, analytics for backend functionaility',
  commands: [
    {
      commandName: 'Install AWS Amplify CLI',
      command: 'npm install -g @aws-amplify/cli',
      description:
        'Installs the aws amplify cli as a global package. require nodejs and npm to be installed',
    },

    {
      commandName: 'Configures The CLI (Credentials and Settings)',
      command: 'amplify configure',
      description:
        'This command will set up your cli for use. by asking questions and logging into your aws account',
    },

    {
      commandName: 'Initialize Amplify Project In Current Project',
      command: 'npm install -g gatsby-cli',
      description: 'Installs gatsby cli as a global package',
    },
    {
      commandName: 'Add Auth Feature To Your Amplify App',
      command: 'amplify add auth',
      description:
        'In An Existing amplify project you an add auth configurations and package to the project',
    },

    {
      commandName: 'Remove Auth Feature From Your Amplify App',
      command: 'amplify remove auth',
      description:
        'In an existing amplify project you can remove the auth feature with this command',
    },

    {
      commandName: 'Update Auth Configurations',
      command: 'amplify update auth',
      description:
        'Brings up the auth feature configurations for you to update',
    },

    {
      commandName: 'Push Amplify Configurations Changes To The Cloud',
      command: 'amplify push',
      description:
        'Any configurations changes in the cli need to pushed to the cloud to go live',
    },
  ],
};

export default command;
