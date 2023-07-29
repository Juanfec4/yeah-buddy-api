# Yeah Buddy REST API

This project is an API made for another front-end project. The main goal is to create a server that can update a mongoDB database and serve as a middleman for my react front-end site.

#### Disclaimer

The API Has a **rate limit of 10 requests every 1 minute**, this is in place to avoid a server overload as I am hosting it on a free plan.

## #TODO

- Deploy

## Tech Stack

**Website:** Node.js, Express, ES6(Modules), Mongoose, MongoDB

**Tools:** Morgan, Nodemon, Dotenv

## Initialization

To start the development server.

```
npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_URI`=' YOUR DB <mongodb> '

`FRONT_END_ORIGIN`=' YOUR FRONT-END ORIGIN'

## API Reference

### Exercises

#### Get all exercises

```http
  GET /api/exercises
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get exercise

```http
  GET /api/exercises/${id}
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `api_key` | `string` | **Required**. Your API key            |
| `id`      | `string` | **Required**. Id of exercise to fetch |

#### Create exercise

```http
  POST /api/exercises
```

| Parameter  | Type     | Description                      |
| :--------- | :------- | :------------------------------- |
| `api_key`  | `string` | **Required**. Your API key       |
| `name`     | `string` | **Required**. Exercise name.     |
| `category` | `string` | **Required**. Exercise category. |
| `bodyPart` | `string` | **Required**. Muscle group.      |
| `sets`     | `array`  | Array of `sets`.                 |
| `notes`    | `array`  | Array of `notes`.                |

#### Update exercise

```http
  PATCH /api/exercises/${id}
```

| Parameter  | Type     | Description                             |
| :--------- | :------- | :-------------------------------------- |
| `api_key`  | `string` | **Required**. Your API key              |
| `id`       | `string` | **Required**. Id of exercise to update. |
| `name`     | `string` | New exercise name                       |
| `category` | `string` | New exercise category.                  |
| `bodyPart` | `string` | New muscle group.                       |
| `sets`     | `array`  | Array of `sets`.                        |
| `notes`    | `array`  | Array of `notes`.                       |

\*Note: All update parameters are optional, only include fields you want to update.

#### Delete exercise

```http
  DELETE /api/exercises/${id}
```

| Parameter | Type     | Description                             |
| :-------- | :------- | :-------------------------------------- |
| `api_key` | `string` | **Required**. Your API key              |
| `id`      | `string` | **Required**. Id of exercise to delete. |

### Plans

#### Get all plans

```http
  GET /api/plans
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get plan

```http
  GET /api/plans/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key` | `string` | **Required**. Your API key        |
| `id`      | `string` | **Required**. Id of plan to fetch |

#### Create plan

```http
  POST /api/plans
```

| Parameter   | Type     | Description                |
| :---------- | :------- | :------------------------- |
| `api_key`   | `string` | **Required**. Your API key |
| `name`      | `string` | **Required**. Plan name.   |
| `exercises` | `array`  | Array of `exercises`.      |

#### Update plan

```http
  PATCH /api/plans/${id}
```

| Parameter   | Type     | Description                             |
| :---------- | :------- | :-------------------------------------- |
| `api_key`   | `string` | **Required**. Your API key              |
| `id`        | `string` | **Required**. Id of exercise to update. |
| `name`      | `string` | **Required**. Plan name.                |
| `exercises` | `array`  | Array of `exercises`.                   |

\*Note: All update parameters are optional, only include fields you want to update.

#### Delete plan

```http
  DELETE /api/plans/${id}
```

| Parameter | Type     | Description                         |
| :-------- | :------- | :---------------------------------- |
| `api_key` | `string` | **Required**. Your API key          |
| `id`      | `string` | **Required**. Id of plan to delete. |
