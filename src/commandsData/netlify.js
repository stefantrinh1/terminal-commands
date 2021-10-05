import logo from '../assets/logos/netlifylogo.png'

const command = {
  name: 'netlify',
  displayName: 'Netlify',
  logoUrl: logo,
  description:
    'A New Approach To Faster, More Secure Websites. All Sites Are Prebuilt For Performance & Deployed Directly To Our Global Edge Network. Collaborate & Integrate. Ultra Fast Frontends. Serverless Functions. Instant Backend APIs.',
  commands: [
    {
      commandName: 'Install Netlify Cli',
      command: 'npm install netlify-cli -g',
      description: "Install Netlify's CLI with NPM",
    },
    {
      commandName: 'Lists Netlify Commands',
      command: 'netlify help',
      description: 'Lists all netlifys cli commands',
    },

    {
      commandName: 'Login In',
      command: 'netlify login',
      description: 'Login into netlify using Cli',
    },
    {
      commandName: 'Initialize Netlify Site',
      command: 'netlify init',
      description: 'Initializes A Netlify Site on the Folder',
    },
    {
      commandName: 'Share Live Development Server',
      command: 'netlify dev --live',
      description: 'Pushes a Live Development Server Project To A Live Url',
    },
    {
      commandName: 'Kill Live Development Server',
      command: 'npx kill-port 8000',
      description: 'How to kill the server on the port created by netlify',
    },
    {
      commandName: 'Build Netlify Site Locally',
      command: 'netlify build',
      description:
        'Build A Production Environment Locally using netlify cli. ready for deployment',
    },
    {
      commandName: 'Deploy Preview Netlify Site',
      command: 'netlify deploy',
      description: 'deploys a netlify site as a preview link not production',
    },
    {
      commandName: 'Deploy Netlify Site To Prod',
      command: 'netlify deploy --prod',
      description: 'Deploys a netlify site to the production url',
    },

    {
      commandName: 'Link Folder To Netlify Site',
      command: 'netlify link',
      description: 'links a folder to a current netlify site',
    },
    {
      commandName: 'Unlink Site From Folder',
      command: 'netlify unlink',
      description: 'Unlink netlify site from folder',
    },
    {
      commandName: 'Switch Netlify Account',
      command: 'netlify switch',
      description: 'Switches To Chosen Netlify Account',
    },
  ],
}

export default command
