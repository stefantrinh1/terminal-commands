import logo from '../assets/logos/gitlogo.png';

const command = {
  name: 'git',
  displayName: 'Git',
  logoUrl: logo,
  description:
    'Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.',
  commands: [
    {
      commandName: 'Initialize Git',
      command: 'git init',
      description: 'Initialize a local Git repository',
    },
    {
      commandName: 'git clone ',
      command: 'cd ../',
      description: 'Create a local copy of a remote repository',
    },
    {
      commandName: 'Git Status',
      command: 'git status',
      description: 'Check current git status',
    },

    {
      commandName: 'Add File For Staging',
      command: 'git add FileName.txt',
      description: 'Adds Single File For Staging',
    },

    {
      commandName: 'Add All Files For Staging',
      command: 'git add .',
      description: 'Stage All Changed Files',
    },

    {
      commandName: 'Commit Staged Files',
      command: 'git commit -m "[commit message]"',
      description: 'Commits the current staged files',
    },
    {
      commandName: 'Commit Staged Files',
      command: 'git commit -m "[commit message]"',
      description: 'Commits the current staged files',
    },

    {
      commandName: 'List Branches',
      command: 'git branch',
      description: 'List branches (the asterisk denotes the current branch)',
    },

    {
      commandName: 'Create New Branch',
      command: 'git branch [branch name]',
      description: 'Create a new branch',
    },
    {
      commandName: 'Delete Branch',
      command: 'git branch -d [branch name]',
      description: 'Delete a branch',
    },

    {
      commandName: 'Delete Remote Branch',
      command: 'git push origin --delete [branchName]',
      description: 'Delete a remote branch',
    },
    {
      commandName: 'Create and Change To New branch',
      command: 'git checkout -b [branch name]',
      description: 'Create a new branch and switch to it',
    },

    {
      commandName: 'Clone And Switch To Remote Branch',
      command: 'git checkout -b [branch name] origin/[branch name]',
      description: 'Clone a remote branch and switch to it',
    },
    {
      commandName: 'Switch To branch',
      command: 'git checkout [branch name]',
      description: 'Switch to a branch by Name',
    },
    {
      commandName: 'Merge Branch Into Current Branch',
      command: 'git merge [branch name]',
      description: 'Merge a branch into the active branch',
    },

    {
      commandName: 'Merge Branch Selected Branches',
      command: 'git merge [source branch] [target branch]',
      description: 'Merge a branch into a target branch',
    },
    {
      commandName: 'Stash All Current Changes',
      command: 'git stash',
      description: 'Delete changes in current branch back to last commit',
    },

    {
      commandName: 'List Git Configurations',
      command: 'git config --list',
      description: 'lists the git config file for current repo',
    },
    {
      commandName: 'List Global Git Configurations',
      command: 'git config --global --list',
      description: 'Lists the git config file for global current repo Settings',
    },
    {
      commandName: 'Push Current Branch Staged Files',
      command: 'git push',
      description: 'Push changes to remote repository (remembered branch)',
    },
    {
      commandName: 'Push Branch To Remote Repo',
      command: 'git push origin [branch name]',
      description: 'Push a branch to your remote repository',
    },

    {
      commandName: 'Push Branch To Remote Repo',
      command: 'git push -u origin [branch name]',
      description:
        'Push changes to remote repository (and remember the branch)',
    },

    {
      commandName: 'Delete Remote Branch',
      command: 'git push origin --delete [branch name]',
      description: 'Delete a remote branch',
    },

    {
      commandName: 'Update Local Repo',
      command: 'git pull',
      description: 'Update local repository to the newest commit',
    },

    {
      commandName: 'Update Local Repo By Branch Name',
      command: 'git pull origin [branch name]',
      description:
        'Update local repository to the newest commit from remote branch',
    },
    {
      commandName: 'Fetch remote origin without merge',
      command: 'git fetch origin',
      description:
        'Gets remote origins most up to date commits without merging',
    },
    {
      commandName: 'rebases the current branch on the latest origin main',
      command: 'git rebase origin/main',
      description:
        'takes the current branch and changes the break off point at the latest origin main',
    },
    {
      commandName: 'Continue Git rebase',
      command: 'git rebase --continue',
      description:
        'when in the middle of a rebase. this finishes off the rebase and confirms it.',
    },
    {
      commandName: 'Push Rebase To Remote',
      command: 'git push --force-with-lease origin HEAD',
      description:
        'This Force pushes rebase to remote location without overwritting any work on that branch. will prevent if there is a commit in the way',
    },
    {
      commandName: 'Abort Rebase',
      command: 'git rebase --abort',
      description:
        'This aborts the rebase process and returns the branch to its original state',
    },

    {
      commandName: 'Add Remote Repo To Local Project',
      command:
        'git remote add origin ssh://git@github.com/[username]/[repository-name].git',
      description: 'Add a remote repository to local project',
    },
    {
      commandName: 'View Changes',
      command: 'git log',
      description: 'View changes',
    },
    {
      commandName: 'View Changes',
      command: 'git log --summary',
      description: 'View changes (detailed)',
    },
  ],
};

export default command;
