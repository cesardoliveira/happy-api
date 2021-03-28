# Happy API
`happy-api` is a REST API implementation built with `Node.js` + `Express.js` with TypeScript. This project was built during the event Next Level Week 3 by Rocketseat.

# Packages & Libs
* [Express](https://expressjs.com/)
* [dotenv](https://github.com/motdotla/dotenv#readme)
* [Multer](https://github.com/expressjs/multer#readme)
* [Cors](https://github.com/expressjs/cors#readme)
* [sqlite3](https://github.com/mapbox/node-sqlite3#readme)
* [TypeORM](https://github.com/typeorm/typeorm#readme)
* [Yup](https://github.com/jquense/yup#readme)

## Clone `happy-api`
Clone repo, in the project directory, you can run:

```
git clone git@github.com:cesardoliveira/happy-api.git
cd happy-api
```
## Install Dependencies

### npm

```git
npm install
```

### Yarn

```git
yarn install
```

This command installs a package, and any packages that it depends on.


# Getting Started
Before you start in Dev or Test enviroment make sure you have installed:
* [`Node.js`](https://nodejs.org)

Also, check the file `.env.example` with all environment variables in the project and examples of how to fill up your `.env` file.

```bash
# .env

SERVER_PORT
```

### Development

`npm dev` or `yarn dev`

Runs the API in the development mode.<br />
Open [`http://localhost:3001`](http://localhost:3001/orphanages) to view it in the browser.

You will also see any lint errors in the console.