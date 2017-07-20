# Random User Directory
User directory built with React and Redux made to display data from [the Random User Generator](https://randomuser.me/)

## Summary
I started the project using my own React-Webpack template and Bash script that I've used before for previous projects. I made sure to fetch the users from the client-side instead of requesting from the server and rendering it in the client-side code, to prevent the server from doing extra work.

As a heavily view-focused application, the bulk of the code is in the `client` folder of the application. I'd started development by structuring the client application into their main components, which were the list of sections by letter, a search bar, and a widget for toggling the sorting paradigm. I'd conducted TDD with Jest and Enzyme and implemented continuous integration with TravisCI. I honestly haven't had much experience with Enzyme and mainly had troubles with figuring out the difference between the `shallow` and `mount` methods. For the most part, I was able to test the fundamental presentation logic within each component but would like to have touched more on testing the reducers and UI-driven actions.

I also worked on maintaining understandable code abstractions. This was through higher-level functions in the `client/utils` folder that were shared between the client components and tests. One example of this is the *byName* higher-order function, which returns the sorting function used to organize the user sections.

A number of properties in state affect how users are displayed in the application. For one, the given name type, either first or last, determine the order of the user sections. The name type is the last name by default, which can be switched around using the radio buttons. I derived the sections by checking the first letter of the target name and mapping each user to the corresponding letter. Then those letters are sorted into an ordered array to allow for mapping to React components. The search bar also affects which users are shown or not. It runs a case-insensitive filter across each user, checking if the typed string is within the full name of the user. As the Random User API returns quite a bit of extraneous data, I needed to reduce the payload to only what the individual User component needs. Fittingly, I wrote the `users` reducer to clean up that data.

I applied some responsive styling as well using the `react-grid-system` library since it provides a grid system and interface similar to Bootstrap. Also, decided to spruce up the aesthetics by drawing the page in closer to the center with padding and changing the font to one I preferred.

I also made sure to adjust the application settings for production purposes. By setting the `NODE_ENV` production environment variable on the `start` and `build` scripts, I can have Webpack build different client bundles. The dev version enables Hot Module Replacement and provides sourcemapping and warnings in the browser console. For production, I've disabled the logging and compressed and minified the code to reduce data to send to each client.

## Usage/Deployment Instructions
If you're running this on your own system (assuming you've already cloned the repository), cd into the root of the application and run `npm run build` or `yarn build` (if you use yarn) to build the bundle then `npm start` or `yarn start` to start the service.

The app is configured for Heroku as well since it builds the client bundle upon redeployment. To deploy with Heroku, create an app using `heroku create appname`within the root of the application. Then run `git push heroku master` to deploy the code to Heroku. Once successful, you can visit __appname.herokuapp.com__ to view the app.

## Other Considerations
Some features I would've liked to implement are checking for W3C standards and considering non-Roman characters. The main issue related to W3C standards are making sure the application is accessible. Without accessibility, the application may not reach a good number of people who have alternative ways of experiencing web content. As for non-Roman characters, it would be beneficial to check if these characters have a certain order within their language that may not be covered by Unicode standards or the default JavaScript sorting algorithm.
