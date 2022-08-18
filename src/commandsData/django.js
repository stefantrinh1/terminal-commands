import logo from '../assets/logos/djangologo.png';

const command = {
  name: 'django',
  displayName: 'Django',
  logoUrl: logo,
  description:
    'Django is a python framework to make web applications',
  commands: [
    {
      commandName: 'Create Django Project',
      command: 'django-admin startproject movies',
      description: 'Creates a django project in a nested folder called movies',
    },
    {
      commandName: 'Create Django Project in current directory',
      command: 'django-admin startproject movies .',
      description: 'creates the django project in the current directory.',
    },
    {
      commandName: 'Creates App Within Project',
      command: 'django-admin startapp api',
      description: 'Your Prject can have multiple apps in one project. running start app creates a new app called api',
    },
    {
      commandName: 'Run Django Server',
      command: 'python3 manage.py runserver',
      description: 'Runs the Django server',
    },
  ],
};

export default command;
