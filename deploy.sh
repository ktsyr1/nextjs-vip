#!/bin/bash

git add .
git commit -m "تحديث تلقائي" 
git push origin main
    
npm publish

echo -e " 📦 ${green} تم تحديث ورفعها على Github & npm ${rest} "