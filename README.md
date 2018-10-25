# Adonis Auth Scaffold.

## Index

- [Introduction](#introduction)
- [Installation](#installation)
- [Getting Started](#getting-started)

## Introduction

### Directory Structure

```
src
└── Data
    └── Repositories
            ├── UserRepository.js
            ├── Repository.js
    ├── Algorithms
└── Domains
    └── User
            └── Jobs
                ├── CreateUserJob.js
                ├── FetchUserJob.js
                ├── ListUsersJob.js
            └── Validators
                ├── UserValidator.js
├── Foundation
└── Services
    └── Api
        └── Features
            ├── CreateUserFeature.js
            ├── FetchUserFeature.js
            ├── ListUsersFeature.js
        └── Http
            └── Controllers
                ├── UserController.js
        └── Providers
            ├── ApiServiceProvider.js
        ├── Routes.js
```

### About Adonis Auth Scaffold.

## Installation

Simply run,

```bash
npm install adonis-auth-scaffold
```

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

## Getting Started

## Tests

To run the test suite, first install the dependencies, then run npm test:

```bash
npm install
npm test
```

## Contributing

Contributions are welcome! Check out the [issues](https://github.com/creatrixity/adonis-auth-scaffold/issues) or the [PRs](https://github.com/creatrixity/adonis-auth-scaffold/pull-requests), and make your own if you want something that you don't see there.

## License

[GPLv3.0](https://github.com/creatrixity/adonis-auth-scaffold)
