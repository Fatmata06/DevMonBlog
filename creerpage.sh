 #!/bin/bash
 
if [ -z "$1" ]; then
  echo "./creerpage.sh monDossier"
  exit 1
 fi

 Dossier=$1;
 Page="src/pages/$Dossier";
 Fichier="$Page/$Dossier.js"

 mkdir -p "$Page"

 
 cat > "$Fichier" << EOF
 function ${Dossier}(){
    return \`<h1>Bienvenue : PAGE $Dossier </h1>
    \`;
 }
 export default ${Dossier};
EOF
 echo "Page $Dossier creer avec succes";