#!/bin/bash

git add .
git commit -m "تحديث تلقائي" 
git push origin main

npm run release
npm publish

echo ""
echo -e " 📦 ${green} OK : Github & npm ${rest} "
echo ""
