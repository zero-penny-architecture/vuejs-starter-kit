# vuejs-typescript-starter-kit

A VueJS project which includes Navigation (vue-router), State management (vuex) all in an OOP Typescript flavour.

## Prerequisites

- Having a [Gitlab Account](https://gitlab.com) and deploy this project to a repository hosted on Gitlab (for [.gitlab-ci.yml](./.gitlab-ci.yml) to work properly)
- Having an [Heroku account](https://heroku.com) and setup an Heroku application for your project.
- [Docker](https://docker.io) installed on your system.

## Installing

Install all dependencies

``` bash
yarn install
```

Install heroku CLI

``` bash
snap install heroku --classic
```

## Making the boilerplate work for your project

***NOTE: see the `README.md` of the internal folder for tips on how to proceed.***

Replace the values with the ones for your project (e.g. any `example.com` or `myawesomeapp` variants) with the actual values for your project:

this includes the references to gitlab repositories and heroku applications in the [`.gitlab-ci.yml`](./.gitlab-ci.yml) file.

like in a normal VueJS project, use `yarn serve` and `yarn build`.

To push to heroku manually use `yarn deploy`.

The boilerplate is set to work with two Gitlab environments: `development` and `production`, so be sure you created them. It also leverages the `Gitlab registry` to store docker images.

## References

- **VueJS**: https://vuejs.org
- **Vuex**: https://vuex.vuejs.org
- **Vuex Class Component**: https://github.com/michaelolof/vuex-class-component
- **Vue Router**: https://router.vuejs.org

## Credits

This project is one application of what can be found in the [**Zero Penny Architecture Pattern**](https://medium.com/@saniales/the-0-penny-architecture-explained-how-i-created-a-complete-development-environment-composing-4f1318c71a17) article I wrote on medium.
