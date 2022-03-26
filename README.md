# Hotel Project
# How to use
## Create database
Install mysql
https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04
## Config localhost database (before deployment, for developer only!)  
```backend/src/config/db.json```
filling your database information at localhost!  
(default infomation is Duy's database)  
** Make sure your database's port is 3306!Im too lazy to change that shit**

## Start back-end server
First, direct to backend folder  
 ``` 
  cd backend 
```
### First time running 
When you running server for the first time, you need to install package by using :  
```
  npm install 
```
Make sure that you have installed npm.
### Starting backend server  
```
  npm start
```
## Start front-end server
