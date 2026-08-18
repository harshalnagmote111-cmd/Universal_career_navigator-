# Export Universal Career Navigator to GitHub (manual push)

Goal: Get the current project codebase into a new GitHub repository that you control.

## Steps

1. Download the codebase from Lovable
   - In the Lovable editor, open the Code Editor view (top left).
   - Click **Download codebase** at the bottom of the file tree sidebar.
   - This exports a ZIP of the current project files.

2. Prepare the local repository
   - Extract the ZIP to a new folder on your machine (e.g., `universal-career-navigator`).
   - Open that folder in your terminal.
   - Check if the folder already contains a `.git` folder. If it does, remove it with `rm -rf .git` so you can start fresh with a new remote.
   - Run `git init` to initialize a new Git repository.
   - Run `git add .` to stage all files.
   - Run `git commit -m "Initial commit - Universal Career Navigator"`.

3. Create the GitHub repository
   - Go to github.com and sign in.
   - Click **New repository** and name it (e.g., `universal-career-navigator`).
   - Choose Public or Private as needed.
   - Do NOT initialize it with a README, .gitignore, or license (you already have the project files).

4. Push the code to GitHub
   - Copy the repository URL from GitHub (HTTPS or SSH).
   - In your terminal, run `git remote add origin <YOUR_GITHUB_REPO_URL>`.
   - Run `git branch -M main`.
   - Run `git push -u origin main`.

5. Verify
   - Refresh the GitHub repository page. You should see all project files, including `src/`, `package.json`, and `README.md`.

## Notes

- This is a one-way manual export. If you later want Lovable changes to sync automatically to GitHub, use the built-in **Plus menu → GitHub → Connect project** option instead.
- Environment variables and secrets are not exported in the ZIP for security. If you need them, you will have to re-add them in the new GitHub repository settings or deployment environment.
