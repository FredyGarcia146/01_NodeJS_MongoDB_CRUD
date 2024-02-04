# 01_NodeJS_MongoDB_CRUD


## Map application

![](Abstraction/Diagram_Abstraction.png)



### Tools - Installation

#### Node JS - Installation

* <a target="_blank" href="https://nodejs.org/en/download">Installation - Page NodeJS</a>

#### Mongo DB Community Server - Installation

* <a target="_blank" href="https://www.mongodb.com/try/download/community">Installation - Mongo DB Community Server</a>


### Comands - Installation

* Create folder Project

#### Project Start
```bash
npm init -y
```

#### Dependencies
```bash
npm install express express-handlebars mongoose morgan dotenv
```
#### Dev Dependencies
```bash
npm i -D @babel/core @babel/cli @babel/node @babel/preset-env nodemon
```

### Consideration of starting configuration

#### Home File
* We create the "src" folder and inside the file " index.js "

#### Run Dev

* Configuration package.json

```bash
"scripts": {
"dev": "nodemon src/index.js --exec babel-node",
}
```

#### Framework CSS

* Insert in '< head >' - "../src/views/layout/main.hbs"

```bash
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossorigin="anonymous">
 ```

#### Enviroment env

* Create and Configuration ".env"

```bash
MONGODB_URI = '...'
PORT = '...'
```

