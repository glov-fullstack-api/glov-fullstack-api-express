
# Built With

[![Node.js][Node.js]][Node.js-url] 
[![npm][npm]][Npm-url]
[![TypeScript][TypeScript]][TypeScript-url]

# Curl Request Examples

**Base URL**: `https://glov-fullstack-api-express-xwefxrs5fq-ew.a.run.app`

---

### 1. Requests with `stream=false`

```sh
curl -X GET "https://glov-fullstack-api-express-xwefxrs5fq-ew.a.run.app?stream=false" \
-H "Authorization: Bearer USER222"
```

```json
{
  "message": "Welcome USER_222, this is your visit #2",
  "group": 4,
  "rate_limit_left": 2,
  "stream_seq": 0
}
```

---

### 2. Requests with `stream=true`

```sh
curl -X GET "https://glov-fullstack-api-express-xwefxrs5fq-ew.a.run.app?stream=true" \
-H "Authorization: Bearer USER222"
```


```json
{
  "message": "Welcome USER_222, this is your visit #1",
  "group": 4,
  "rate_limit_left": 3,
  "stream_seq": 1
}
{
  ..,
  "stream_seq": 2
},
{
  ..,
  "stream_seq": 3
},
{
  ..,
  "stream_seq": 4
},
```

---

### 3. Requests without Authorization Header

```sh
curl -X GET "https://glov-fullstack-api-express-xwefxrs5fq-ew.a.run.app?stream=false"
```

```json
{
  "status": 401,
  "body": "Unauthorized"
}
```

---

### 4. Requests without `stream` parameter

```sh
curl -X GET "https://glov-fullstack-api-express-xwefxrs5fq-ew.a.run.app" \
-H "Authorization: Bearer USER222"
```

```json
{
  "status": 400,
  "body": "stream parameter is required"
}
```

---

## How To Install and Run The Project

### 1. Clone the repository

```bash
git clone https://github.com/glov-fullstack-api/glov-fullstack-api-express.git
```


### 2. Setup Node.js version

This project built with Node.js version `20.5.0`. To use the same version for seamless development, you can use [NVM]((https://github.com/nvm-sh/nvm#installation-and-update)).

Once NVM is installed, navigate to project directory and run the following command to automatically switch to the required Node.js version:

```bash
nvm use
```

To verify that you have the correct version of Node.js installed, run the following command:

```bash
node --version
```

### 3. Install the dependencies
```bash
npm install
```

### 4. Run the project
```bash
npm start
```
---

## Technologies Used

- [typescript](https://www.npmjs.com/package/typescript)
- [express](https://www.npmjs.com/package/express)
- [jest](https://www.npmjs.com/package/jest)
- [supertest](https://www.npmjs.com/package/supertest)
- [cors](https://www.npmjs.com/package/cors)
- [ts-jest](https://www.npmjs.com/package/ts-jest)
- [ts-node](https://www.npmjs.com/package/ts-node)

---

## Contact

- Oğuzhan Kuşlar - [@kushadige](https://github.com/kushadige) -
  oguzhankuslar@gmail.com


[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node.js-url]: https://nodejs.org/
[Npm]: https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white
[Npm-url]: https://www.npmjs.com/
[TypeScript]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
