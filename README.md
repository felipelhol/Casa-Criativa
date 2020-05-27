<p align="center">
   <img src="public/logo.png" width="200"/>
</p>


# Casa Criativa

[![Author](https://img.shields.io/badge/author-Felipe%20Lima-red)](https://github.com/felipelhol)

> Página que permite adicionar novas atividades durante a quarentena


<br />
<p align="center"><img src=".github/ideiascriativas.gif?raw=true"/></p>
<p align="center"><img src=".github/pagina1.PNG?raw=true"/></p>

# :pushpin: Table of Contents

* [Installation](#construction_worker-installation)
* [Getting Started](#runner-getting-started)
* [FAQ](#postbox-faq)
* [Found a bug? Missing a specific feature?](#bug-issues)
* [Contributing](#tada-contributing)
* [License](#closed_book-license)



# :construction_worker: Installation

**You need to install [Node.js](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/) first, then in order to clone the project via HTTPS, run this command:**

```git clone https://github.com/felipelhol/foodfy.git```

SSH URLs provide access to a Git repository via SSH, a secure protocol. If you have a SSH key registered in your Github account, clone the project using this command:

```git clone git@github.com:felipelhol/foodfy.git```

**Install dependencies**

```yarn install```

Create your enviroment variables based on the examples of ```.env.example```

```cp .env.example .env```

After copying the examples, make sure to fill the variables with new values.

# :runner: Getting Started

**Running with docker-compose**

In order to prepare the database and also run the application, set your environment variables and then execute docker-compose

```docker-compose up```

With this command, the port seted in your environment `PORT` variable will be available to access the application.

**Manually setup**

You may prefer to manually configure the database and the application.

Install [Postgres](https://www.postgresql.org/) to create a database or if you have [Docker](https://www.docker.com/) in your machine, fill the environment values related to database configurations and the run the following commands in order to create a postgres container.

```docker-compose up postgres```

Execute the follow command to create tables, relationships and procedures:

```yarn db:create```

To start, run the seeds provided in [Seeds](https://github.com/LauraBeatris/foodfy/blob/master/src/database/seeds.js) in order to populate the database with an initial data.

```yarn run:seeds```

Run the following command in order to start the application in a development environment:

```yarn dev```

# :postbox: Faq

**Question:** What are the tecnologies used in this project?

**Answer:** The tecnologies used in this project are [NodeJS](https://nodejs.org/en/) + [Express Framework](http://expressjs.com/en/) to handle the server, [Nunjucks](https://mozilla.github.io/nunjucks/templating.html) to develop amazing views & [SCSS](https://sass-lang.com/documentation/syntax) to handle the styles architecture and a better maintenance than normal CSS.
##
**Question:** How the multi language support is handled by the server?

**Answer:** This application handle multi language support with the help of a library called [i18n-node](https://github.com/mashpie/i18n-node). It has a middleware that gather language settings of visitors and then persist translations from [JSON files](https://github.com/LauraBeatris/foodfy/tree/master/src/locales) related with a specific locale.

The locale is storaged as a cookie named `````` and that can be changed by passing a query string with the value ```?lang=pt```
##

**Question:** Are all kind of users able to create and update chefs or recipes?

**Answer:** The application has two kind of users: Visitors and Administrators. As a administrator, you're able to create, update and view all the data related to recipes, chefs and also other users. Visitors can also access the admin platform but they don't have access to the views responsable to create and update data.


# :bug: Issues

Feel free to **file a new issue** with a respective title and description on the the [Foodfy](https://github.com/felipelhol/.../issues) repository. If you already found a solution to your problem, **i would love to review your pull request**! 

# :tada: Contributing

Check out the [contributing](https://github.com/felipelhol/.../blob/master/CONTRIBUTING.md) page to see the best places to file issues, start discussions and begin contributing.

# :closed_book: License

Released in 2020.
Made with love by [Felipe Lima](https://github.com/felipelhol) 👏🚀



## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
