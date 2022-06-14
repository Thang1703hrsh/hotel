# Hotel Project

## Dependencies

All the dependencies can be found in `package.json` file
```bash
"@reduxjs/toolkit": "^1.8.1",
"bcryptjs": "^2.4.3",
"color": "^4.2.3",
"colors": "^1.4.0",
"concurrently": "^7.1.0",
"cors": "^2.8.5",
"dotenv": "^16.0.0",
"express": "^4.17.3",
"express-async-handler": "^1.2.0",
"http-proxy-middleware": "^2.0.6",
"jsonwebtoken": "^8.5.1",
"mongoose": "^6.2.11",
"mysql": "^2.18.1",
"mysql2": "^1.7.0",
"path": "^0.12.7",
"react-icons": "^4.3.1",
"react-redux": "^8.0.1",
"sequelize": "^6.20.0",
"sequelize-auto": "^0.8.8",
"sequelize-auto-models": "^0.2.14",
"sequelize-cli": "^6.4.1",
"stream": "^0.0.2"
```



# Deploy tutorial
## Database deployment on railway.
We deploy our database one railway.app - a free hosting for mysql.
https://railway.app/
### Register railway
Just like any website : create an account, create project, choose mysql. And here we go.
![image](https://user-images.githubusercontent.com/53325621/170161083-db49f103-311b-4ee1-b9e0-aae6a788a198.png)
### Change authentication protocol
Our framework `sequelize` is not support mysql 's new authentication protocol, so we have to change that. Connect to databse by terminal and do following command :  
```
ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'yourpassword';
```
### Connect database from local PC
Connecting from local PC make it easy to doing stuff on database like running database script, add rows, collumns,...  
We use mysql workbench - a GUI software.  
Config connection with given parameter.  
![image](https://user-images.githubusercontent.com/53325621/170161700-8123c732-2d5e-4930-b10b-c70f3fd9d334.png)
Connect to database from mysql workbench and run initial database script `script_tao_db.sql` (create table, primary key, constraint,...)  
### Setting `.env`
Copy database's URL on railway and paste it to `.env` file.  
```
MYSQL_URI = mysql://root:SI4v2BLTdmUIQRHCQBwO@containers-us-west-45.railway.app:7311/railway
```
Replace by your own URL or use our URL.  
# How to use (local PC)
Open terminal at project folder and do following step : 
## First time running 
When you running server for the first time, you need to install package by using :  
```
  npm install 
```
Make sure that you have installed **npm** and **nodeJS** .
## Developement mode
### Set `.env`
At `.env` file, make sure that 
```
NODE_ENV = developement
```
### Start back-end server
At project folder, run server :   
 ``` 
  npm run server
```
### Start front-end server
```
cd frontend
npm install
npm start
```

