- Exercise 1 Solution
  - git clone https://github.com/uagc-it-readiness/git-lecture-example.git

- Exercise 2 Solution
  - create folder and cd into it
  - git init
  - create repo on GitHub
  - git remote add origin <repo url>

- Exercise 3 Solution
  - git branch <branch name>
  - git checkout <branch name>
  - touch math.js
  - git add math.js
  - git commit -m 'add math file'
  - git push origin <branch name>

- Exercise 4 Solution
  - edit math.js file in Atom
  - git add math.js
  - git commit -m 'update math file'
  - git push origin <branch name>

- Exercise 5 Solution
  - git fetch
  - git checkout -t origin/feature/bb-merge-no-conflict
  - git checkout <branch name>
  - git merge feature/bb-merge-no-conflict
  - git commit -m 'merge feature/bb-merge-no-conflict'
  - git push origin <branch name>

- Exercise 6 Solution
  - git fetch
  - git checkout -t origin/feature/bb-merge-conflict
  - git checkout <branch name>
  - git merge feature/bb-merge-conflict
  - resolve conflicts in Atom
  - git add math.js
  - git commit -m 'merge feature/bb-merge-conflict'
  - git push origin <branch name>
