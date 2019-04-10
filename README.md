# BSB: The Media Player
Antonio's tech challenge Spring 2019

## Getting Started
These instructions should help you get a copy of the project up and running on your local machine for development purposes.

```
$ yarn install
$ yarn start
```

You should see a development build in your browser at http://localhost:3000.

### Directory Structure
This is a pretty standard [create-react-app](https://github.com/facebook/create-react-app) housed in the `client` directory. An additional Express server, `index.js`, sits at the directory root. This Express server fetches media data and makes it available to the client.

## Deployment
**Note** Heroku Buildpack is a prerequisite to deploy. [Learn how to deploy with Git on Heroku](https://devcenter.heroku.com/articles/git).
 
This project is hosted on Heroku! Deployment begins when pushing to our remote Heroku git repository. So long as you've followed the Heroku Buildpack instructions above, it should be as simple as: 
```
$ git add .
$ git commit -m "makes player larger than life"
$ git push heroku master
```