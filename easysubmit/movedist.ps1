rm -r ../backend/public/dist

# modify backend url
$content = Get-Content "./dist/assets/index-*.js"
$newContent = $content -replace "http://127.0.0.1:3000", "https://easysubmit.cpolar.top"
$newContent | Set-Content "./dist/assets/index-*.js"

cp -r ./dist ../backend/public
mkdir ../backend/public/dist/src
cp -r ./src/assets ../backend/public/dist/src/assets
echo "move to backend!"