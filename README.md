# Simple REST
<div align="center">
  <a href="#">
    <img src="https://img.shields.io/badge/npm-6.9.2-brightgreen.svg?style=flat-square" alt="npm version">
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/node.js-10.15.2-blue.svg?style=flat-square" alt="node.js version">
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/express-4.17.1-red.svg?style=flat-square" alt="express version">
  </a>
   <a href="#">
    <img src="https://img.shields.io/badge/mysql-2.17.1-blue.svg?style=flat-square" alt="mysql version">
  </a>
</div>

<p align="center">
  <a href="https://nodejs.org/">
    <img src="https://cdn-images-1.medium.com/max/871/1*d2zLEjERsrs1Rzk_95QU9A.png">
  </a>
</p>


## Prerequiste
- Node.js - Download and Install [Node.js](https://nodejs.org/en/) with [NVM](https://github.com/creationix/nvm) (Node Version Manager) - Simple bash script to manage multiple active node.js versions.
- MySQL - Download and Install [MySQL](https://www.mysql.com/downloads/) - Make sure it's running on the default port.  

## Installation
### Clone
```
$ git clone https://github.com/rizkigumilar/Backend-DrumHore.git
$ cd Backend-DrumHore
$ npm install
```

### Create Environment Variable
```
$ touch .env
$ nano .env
```

```
DB_HOST="Your_Host"
DB_USER="Your_Username"
DB_PASSWORD="Your_Password"
DB_NAME="Your_Database"

SERVER_PORT=9999

SECRET_KEY = "Your SECRET_KEY"

REQUEST_HEADERS = "YOUR HEADERS"
```
### Start Development Server
```
$ npm start
```

### Thank you
