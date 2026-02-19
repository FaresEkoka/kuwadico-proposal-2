# PowerShell script to commit and push to GitHub
# Run this script in PowerShell from the project directory

# Navigate to project directory
cd H:\Proposal

# Initialize git repository (if not already initialized)
if (-not (Test-Path .git)) {
    git init
}

# Add remote repository
git remote remove origin 2>$null
git remote add origin https://github.com/moradbasha/Proposal-.git

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Next.js proposal website with custom fonts and responsive layout"

# Push to main branch (or master if that's the default)
git branch -M main
git push -u origin main

Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
