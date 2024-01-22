echo "-------------------"
git status
echo "-------------------"
git add .
echo "Files added."
echo "-------------------"
git status
echo "-------------------"
git config --global user.email "m13712901684@outlook.jp"
echo "Mail address updated."
echo "-------------------"
git config --global user.name "1106601034"
echo "Username updated."
echo "-------------------"
git commit -m "This update is processed by a shell script."
echo "-------------------"
git checkout main
echo "-------------------"
git branch
echo "-------------------"
git push origin main
echo "-------------------"
git status
echo "-------------------"
