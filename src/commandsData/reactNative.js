import logo from '../assets/logos/reactnativelogo.png';

const reactNative = {
  name: 'react-native',
  displayName: 'React Native',
  logoUrl: logo,
  description:
    'React Native is an open-source UI software framework created by Facebook, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities.',
  commands: [
    {
      commandName: 'Install The React Native Cli using NPM',
      command: 'npm install -g react-native-cli',
      description:
        'Installs the react native cli globally, used to run the mobile environment and dev tools using npm',
    },
    {
      commandName: 'Install The React Native Cli using Yarn',
      command: 'yarn add -g react-native-cli',
      description:
        'Installs the react native cli globally, used to run the mobile environment and dev tools using yarn',
    },
    {
      commandName: 'Create React Native App',
      command: 'react-native init myApp',
      description: 'Using React Native CLI, create a new react native project',
    },
    {
      commandName: 'Run Default Ios Emulator',
      command: 'react-native run-ios',
      description:
        'Runs The emulator on MacOS for Mac, "must have emulator installed via X-code"',
    },
    {
      commandName: 'Run Default Android Emulator',
      command: 'react-native run-android',
      description:
        'Runs The emulator on Android Studio For Windows, "Must have Android Studio Installed and a mobile downloaded"',
    },
    {
      commandName: 'Run App',
      command: 'yarn start',
      description: 'Starts the Native App',
    },
  ],
};

export default reactNative;
