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

para subir a una rama remota:
Asegúrate de estar en la rama local temporal-rama. Puedes verificarlo ejecutando el comando:

git checkout temporal-rama

Realiza los cambios necesarios en tu rama local. Asegúrate de haber confirmado todos los cambios relevantes.
Ejecuta el comando git push para cargar la rama local al repositorio remoto. Por defecto, Git utilizará el repositorio remoto llamado origin y la rama actual como destino. En este caso, la sintaxis sería:

git push origin temporal-rama

Esto enviará tus cambios desde la rama local temporal-rama al repositorio remoto en la rama temporal-rama.
Verifica que la rama remota se haya actualizado correctamente. Puedes hacerlo ejecutando:

git branch -r

Deberías ver origin/temporal-rama en la lista de ramas remotas.

Recuerda que si es la primera vez que estás subiendo esta rama, puedes usar la opción -u para establecer la rama remota de seguimiento:

git push -u origin temporal-rama
