# Jalankan di PowerShell (Git harus terpasang): .\push-to-github.ps1
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

$git = Get-Command git -ErrorAction SilentlyContinue
if (-not $git) {
  Write-Host "Git tidak ditemukan. Pasang dari https://git-scm.com/download/win lalu jalankan ulang."
  exit 1
}

if (-not (Test-Path .git)) { git init }

git remote remove origin 2>$null
git remote add origin https://github.com/asr2900/ritwhual-avatar-costume.git

git add -A
if (git status --porcelain) {
  git commit -m "Initial commit: RITWHUAL AVATAR COSTUME web app"
}

git branch -M main
git push -u origin main

if ($LASTEXITCODE -ne 0) {
  Write-Host "Push gagal — mencoba pull --rebase..."
  git pull origin main --rebase
  git push -u origin main
}

Write-Host "Selesai. Repo: https://github.com/asr2900/ritwhual-avatar-costume"
