# Utilisez une image de node officielle comme image de base
FROM node:16

# Définissez le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copiez les fichiers package.json et package-lock.json
COPY package*.json ./

# Installez les dépendances du projet
RUN npm install

# Copiez tout le reste du code source de l'application dans le conteneur
COPY . .

# Donnez les permissions d'exécution au script
RUN chmod +x wait-for-it.sh

# Exposez le port sur lequel l'API va écouter
EXPOSE 3000

# Commande de démarrage de l'API
CMD ["./wait-for-it.sh", "mysql:3306", "--", "npm", "run", "start"]
