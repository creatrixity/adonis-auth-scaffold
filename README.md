![Banner](https://i.ibb.co/n1tJ5wD/Shots-grid.jpg)

# Adonis Auth Scaffold.

Adonis auth scaffold offers you painless authentication built on top [Persona.js](https://github.com/adonisjs/persona) available within seconds.

Spend those minutes you'd use in setting up authentication doing awesome stuff within your app. 

## Index

- [Introduction](#introduction)
- [Installation](#installation)
- [Getting Started](#getting-started)

## Introduction

### Directory Structure

```
app
└── Controllers
    └── HTTP
        ├── AuthController.js
        ├── ApiAuthController.js
config
    ├── adonis-auth-scaffold.js
public
    └── auth
        ├── auth-styles.css
resources
    └── views
        └── auth
            └── emails
                ├── password.edge
                ├── welcome-mail.edge
            └── partials
                ├── password-change-form.edge
                ├── password-reset-request-form.edge
            └── layouts
                ├── auth.edge
            ├── dashboard.edge
            ├── login.edge
            ├── password-reset.edge
            ├── register.edge
start
    ├── authEvents.js
    ├── authRoutes.js
    ├── apiAuthRoutes.js
```

## About Adonis Auth Scaffold.

Adonis Auth Scaffold is a CLI utility that gives you a functional authentication system in Adonis.js
within seconds.

## Getting Started

### Installation

Install `adonis-auth-scaffold` by running the below command.

__NPM__

```bash
npm install adonis-auth-scaffold --save-dev
npm install @adonisjs/mail @adonisjs/persona @adonisjs/validator
```

__Yarn__

```bash
yarn add adonis-auth-scaffold --save-dev
yarn add @adonisjs/mail @adonisjs/persona @adonisjs/validator
```

### Register providers.

The `adonis-auth-scaffold` provider must be registered as an `aceProvider`.
We are running CLI commands after all!

```js
const aceProviders = [
  'adonis-auth-scaffold/providers/AdonisAuthScaffoldProvider'
];
```

Also add providers for the newly installed dependencies.

```js
const providers = [
  "@adonisjs/validator/providers/ValidatorProvider",
  "@adonisjs/mail/providers/MailProvider",
  "@adonisjs/persona/providers/PersonaProvider"
]
```

### Register Middleware

Register the below middleware in `start/kernel.js`

```js
const globalMiddleware = [
  "App/Middleware/ViewHelper"
]
```

### Generating auth scaffold.

![Auth Scaffold Gif](https://user-images.githubusercontent.com/5021686/54365412-10485200-466f-11e9-8fb5-cbaa920c6950.gif)

Please run the below command to scaffold authentication.

```js
adonis make:auth
```

A prompt to choose between generating code for a RESTful Api or a HTTP client allows you customize the generated files for your specific use case.
Alternative versions of this command involves passing either the `--api-only` or `--http-only` flags.

To generate auth files for a REST Api, you may run:

```js
adonis make:auth --api-only
```

### Events

Please add the following line at the beginning of `start/events.js`.

```js
require('./authEvents');
```

### Migrations

Run the following command to run startup migrations.
Please remember to add the `status` column to your User migration.

```js
adonis migration:run
```

## Contributing

Contributions are welcome! Check out the [issues](https://github.com/creatrixity/adonis-auth-scaffold/issues) or the [PRs](https://github.com/creatrixity/adonis-auth-scaffold/pull-requests), and make your own if you want something that you don't see there.

## License

[GPLv3.0](https://github.com/creatrixity/adonis-auth-scaffold)
