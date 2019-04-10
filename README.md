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

## Next Steps
This is just the beginning. There are a few things I would do if I had more time:

* **Add better build tools (asset compilation)** - I'm used to SCSS/SASS running as part of frontend asset compilation, so I felt a bit slowed down writing conventional CSS.
* **Add a state manager (Redux)** - I used this as an opportunity to try out [Hooks](https://overreacted.io/a-complete-guide-to-useeffect/) in a small application. I like this new paradigm however I can see where I could implement `actions` to get the same behavior but with fewer lines of code (I think).
* **Routing** - a frontend router like React Router would give us easy access browser history. This would allow a user to navigate through their browser history on the site with their native back/forward browser buttons. Each track could be accessible via its own route, making it easy to share your fave tunes with your friends.
* **Breakpoints for smaller screen sizes** - no breakpoints yet, but CSS grid should make it easy to restyle and resize for various devices.