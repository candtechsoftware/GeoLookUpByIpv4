# GeoLookUpByIpv4

![Image of Yaktocat](https://raw.githubusercontent.com/candtechsoftware/GeoLookUpByIpv4/master/screenshot.png)

### Note 
The database info comes from the free db file not the live database as of 10/07/2020. So the application will may not be up to date in the future. 


### To run 
run `docker-compose up` in root directory
You can also run them locally without docker. Be sure to have node and npm installed. 
run`npm i` in bothdirectories to install the dependencies
run `npm run dev` to run server in "hot reload" mode with nodemon or `npm run start`
run `npm run start` to run the react client side app


## Client Side
Written in react and used Redux for state management
The Essential Functionality to search an Ip Address is there but I have added the 
Ability to save the last 10 searches. they will be on the left hand side. (Note They do no persist after a reload. I could add it to local storage yet
but I can easily add a connection to db and have the searches saved by a user)

## Server Side
Super Simple 1 route to get the data from the binary db file.
Things I would love to add
  - Reddis Caching
  - More Routes to get more than ips that are similar or if someone types something a bit off it can find closest (implmenting elastic search could help with this) 
  - Sharding the data. It was a pretty large data set and I could enchance performance
  - Add Api Versioning


Note: There are ReadMe files for the client and server folders
