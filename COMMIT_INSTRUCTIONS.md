# Instructions to Commit to GitHub

Since Git is not available in the current PATH, please follow these steps:

## Option 1: Using Git Bash or Command Prompt

1. Open Git Bash, Command Prompt, or PowerShell
2. Navigate to the project directory:
   ```bash
   cd H:\Proposal
   ```

3. Initialize git (if not already done):
   ```bash
   git init
   ```

4. Add the remote repository:
   ```bash
   git remote add origin https://github.com/moradbasha/Proposal-.git
   ```

5. Add all files:
   ```bash
   git add .
   ```

6. Commit the changes:
   ```bash
   git commit -m "Initial commit: Next.js proposal website with custom fonts and responsive layout"
   ```

7. Push to GitHub:
   ```bash
   git branch -M main
   git push -u origin main
   ```

## Option 2: Using the PowerShell Script

1. Open PowerShell
2. Navigate to the project directory:
   ```powershell
   cd H:\Proposal
   ```

3. Run the script:
   ```powershell
   .\commit-to-github.ps1
   ```

## Note

If you get authentication errors, you may need to:
- Use a Personal Access Token instead of password
- Set up SSH keys
- Use GitHub Desktop or another Git GUI tool
