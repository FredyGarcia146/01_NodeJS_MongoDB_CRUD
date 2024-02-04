# 01_Learning_CRUD_MongoDB_NodeJS



## Map application

![](Abstraction/Diagram_Abstraction.png)

### Comands - Installation

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


#### Home File
* We create the "src" folder and inside the file " index.js "

#### Run Dev

* Configuration package.json

```bash
"scripts": {
"dev": "nodemon src/index.js --exec babel-node",
}
```


