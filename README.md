
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
curl -X GET "https://api.example.com/your-endpoint?stream=true" \
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
  ...,
  "stream_seq": 2
},
{
  ...,
  "stream_seq": 3
},
{
  ...,
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
curl -X GET "https://glov-fullstack-api-express-xwefxrs5fq-ew.a.run.app"
```

```json
{
  "status": 400,
  "body": "stream parameter is required"
}
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

## Contact

- Oğuzhan Kuşlar - [@kushadige](https://github.com/kushadige) -
  oguzhankuslar@gmail.com


[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node.js-url]: https://nodejs.org/
[Npm]: https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white
[Npm-url]: https://www.npmjs.com/
[TypeScript]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
