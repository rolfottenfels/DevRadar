# DevRadar
Web and Mobile App that let you catalog your devs friends informing their github username, techs and location (geolocation) and let you find who is near 10km around your location.

### Backend
Where you'll find the all the business-rules.
To start the server type `$ yarn dev` and load **localhost:3000** on your browser.

### WEB
Where you can add devs with their Github Usernames, techs and location (geolocation) to the database. 
This project has websocket set, so when you add a dev to the database and he are 10km closer from your geolocation, if you search for his techs on Mobile App, you will be able to see he apearing live on the map.

**To configure your mongodb on this project**, make sure you already have a mongodb set, then add it access adress at **/backend/src/index.js**
To start the server type `$ yarn start` and load **localhost:3000** on your browser.

### Mobile App
Where you can search for Devs that are around you (10km) and they will pop on the map with their Github username and avatar.
If you touch the dev, more information will load and if touch it again, you can navigate to he's github profile page.
To test the App: 
1) Install EXPO on your mobile;
2) Set your device Base-URL at /mobile/src/services/api.js 
3) Run `$ yarn start` and sync the QR code shown on your web browser with EXPO on your mobile device.

You should be good to go.

### About this app
We developed this app using NodeJS, ReactJS and React Native. 
It uses Nodemon, Axios, Express, Mongoose, Cors and Websocket (socket.io)
