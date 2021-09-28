#!/bin/bash

set -ex

rm -rf .git
git init
git config user.name "screw-hand"
git config user.email "screwhand0@gmail.com"
git checkout -b master
git add .
git commit -m "feat $(date) commit by $(whoami)"
git checkout -b main
git remote add origin git@github.com:Fifth-Patient/note_dev.git
git push origin main -f
rm -rf .git