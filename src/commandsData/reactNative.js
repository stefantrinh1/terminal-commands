import logo from '../assets/logos/reactnativelogo.png'

const command = {
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
      commandName: 'Clean Android Project',
      command: 'cd android &&./gradlew clean && cd ../',
      description:
        'From The Root Of Your project run this commands to remove build files and clean the android project',
    },
    {
      commandName: 'Clean IOS Project',
      command: 'cd ios && xcodebuild clean && cd ../',
      description:
        'From The Root Of Your project run this commands to remove build files and clean the IOS project',
    },

    {
      commandName: 'Run A Android Release Version Of Your App',
      command: 'npx react-native run-android --variant=release',
      description:
        'From The Root Of Your project run this commands to remove build files and clean the IOS project',
    },

    {
      commandName: 'Run A Android APK Release Version Of Your App',
      command: 'cd android && ./gradlew assembleRelease && cd ../',
      description:
        'From The Root Of Your project run this commands to create build APK Files. found in android/app/build/outputs/apk',
    },
    {
      commandName: 'Run A Android ABB Release Version Of Your App',
      command: 'cd android && ./gradlew bundleRelease && cd ../',
      description:
        'From The Root Of Your project run this commands to create build ABB Files. found in android/app/build/outputs/bundle/release/app-release.aab',
    },

    {
      commandName: 'Get Android Signing Report - Contains SHA Keys',
      command: './gradlew signingReport',
      description:
        'Log To The Console Android Apps Signing Report - Contains A Bunch Of SHA Keys, validity',
    },

    {
      commandName: 'Run App',
      command: 'yarn start',
      description: 'Starts the Native App',
    },
  ],
}

export default command
