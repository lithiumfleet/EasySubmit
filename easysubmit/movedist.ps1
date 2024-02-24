@echo off
rm -r ../backend/public/dist
cp -r ./dist ../backend/public
mkdir ../backend/public/dist/src
cp -r ./src/assets ../backend/public/dist/src/assets
echo "move to backend!"