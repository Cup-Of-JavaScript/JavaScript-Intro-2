# GitHub

# Primary Workflow
- Identify the branch you are on: `git branch`
- Create a branch from the branch you are currently on: `git checkout -b dev-{your initials}-{context}`
- Code Ninja
  - Write code
  - Run code 
  - Test code
- See what has changed: `git status`
  - ProTip: Always run `git status` before you make a commit (to make sure you are not adding "junk" to your commit)
- Stage all files: `git add --all`
- Create a commit: `git commit -m "YOUR_MESSAGE_HERE"`
- Push to GitHub: `git push origin YOUR_BRANCH_NAME`
- ProTip:  chain all these commands: `git add --all && git commit -m "YOUR_MESSAGE_HERE" && git push origin YOUR_BRANCH_NAME`
- Create Pull Request (PR)
- Wait for team lead to review PR
- Once PR has been reviewed, team lead (or you) merges PR
- Update your local dev branch: `git checkout dev && git pull origin dev`
- Delete your local branch that you just pushed: `git branch -D YOUR_BRANCH_NAME`

# Videos
- [Git Tutorial for Beginners: Learn Git in (1h)](https://youtu.be/8JJ101D3knE)
- [Command Prompt Basics: How to use CMD (18m)](https://youtu.be/A3nwRCV-bTU)
- [Learn Git In 15 Minutes (15m)](https://youtu.be/USjZcfj8yxE)
- [Git Tutorial for Beginners: Command-Line Fundamentals (30m)](https://youtu.be/HVsySz-h9r4)

# Links
- [Atlassian What is Git?](https://www.atlassian.com/git/tutorials/what-is-git)
- [How Teams Use GitHub](./docs/Intro-to-GitHub.pptx) (Download only)
- [Atlassian Git Cheat Sheet](./docs/SWTM-2088_Atlassian-Git-Cheatsheet.pdf)
- [Official Git Reference](https://git-scm.com/docs)

# Common Git Commands
```
git init
git clone <url>
git fetch --all
git push origin <branch name>
git pull origin <branch name>
git remote add origin <url>
git add --all
git branch
git checkout -b <new branch name>
git checkout
git commit -m “your message”
git status
git reset --hard
git clean -f
git stash
```
