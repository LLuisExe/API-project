FROM node:18
# Create app directory
WORKDIR /app
# Install app dependencies
# A wilcard is used to ensure bot package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building you code for production
# RUN npm ci --only=production
# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "node", "bin/wwww"]