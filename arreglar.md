netstat -ano | findstr :3306

taskkill /F /PID 5064 (el numero de pid que te salga)

como actualizar mi rama local con las remotas

git remote update origin --prune
git branch -a
//ramas
main

- temporal-rama
  remotes/origin/HEAD -> origin/main
  remotes/origin/main
  remotes/origin/temporal-rama
  remotes/origin/temporal-rama-c
  //
  git pull origin temporal-rama
