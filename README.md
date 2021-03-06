## Demo how the project works by going to 
https://www.youtube.com/watch?v=-UyTvgZIfKE&feature=youtu.be&fbclid=IwAR0l532dyk8Tp4IK1JM9X6MUOsN3ZL7svoOrr2vVb2phMCsCQg81YwXpLsY

## Please read update for new features added to this open source
Install docker for elastic search<br />
create yml file for 3 elastic search nodes<br />
run docker-compose up<br />

## Technology Stack
Front end web application uses React, Redux, React State Hooks, React Effect Hook, Modern Javascripts, CSS, HTML5<br />

Back End uses Express as web server<br />

Host the web application on Firebase. <br />

Use Stripe as payment platform<br />

Use Fire Store as cloud database<br />


## High Level Architecture

![Amazon Ecommerce Fake](Amazon.png?raw=true "Amazon Ecommerce Fake")


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React Components Design

**1-Main Login Page**<br />
![Amazon Login](login.png?raw=true "Amazon Login")


**2-Main Home Page**<br />
![Amazon Home](Home.png?raw=true "Amazon Home")

**3-Checkout Page**<br />
![Amazon Checkout](Checkout.png?raw=true "Amazon Checkout")

**4-Payment Page**<br />
![Amazon Payment](Payment.png?raw=true "Amazon Payment")

**5-Order Complete Page**<br />
![Amazon OrderPaid](OrderPaid.png?raw=true "Amazon OrderPaid")

## Redux Diagram for basket storage

![Amazon Redux](amazonredux.png?raw=true "Amazon Redux")

## Redux Diagram for basket storage

![Amazon Component Tree Diagram](AmazoncomponentsTree.png?raw=true "Amazon Component Tree Diagram")





## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


### How to run locally
1 - CD to amazon-challenage-final <br />
To Run the client<br />
npm install <br />
npm start <br />

2-To Run the Node Server<br />
cd functions<br />
then <br />
node index.js
