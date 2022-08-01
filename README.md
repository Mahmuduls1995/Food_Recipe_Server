<div align="center">
  <img align="center" src="./images/logo.png" alt="Error 404" height="150">
  <h1 align="center">Food Recipe</h1>
</div>

<h2>Do you any interesting Food?</h2>
<h2>Don't wait! Go and post it on: </h2>

## About Memories:
Food Recipe is an Web Application where individuals can post their daily interesting Food Ingredients. It's a social platform where people can enjoy, share, read, like or dislike the stories of their friends and other people from all around the world.

Backend API:
<br>
Get() Endpoint: /posts
<br>

### Steps to Run on Local Machine

***

#### Note: You need to have Node.Js installed in your Local Machine if not, first install it from <a href="https://nodejs.org/en/">here</a>.
run the following command (It will install all the Dependencies needed to run):
```
npm i
```
#### Step 4) Once all the dependencies are successfully installed, Run the following Command:
```
npm start
```
#### Step 5) Once the above steps are done you should get the message:
    You can now view client in the browser.
      Local:            http://localhost:3000 
      webpack compiled successfully
#### Step 6) Open Browser and go to http://localhost:3000
#### Step 7) Open Memories-Backend Directory in Command Prompt and run the following command:
```
npm i
```
#### Step 8) Inside the directory create a new file with the name .env and add the following line of code:
```
CONNECTION__URL = 'mongodb+srv://<Your-User-Name>:<Your-Password>@<Your-MongoDB-Cluster-Name>'
```
#### Step 9) Next Run the following Command: 
```
npm start
```
#### Step 10) Once the Above steps are completed successfully you should get the message:
  ```Server Running Successfully on port: 5000```
#### Note: At this point the App that you are running on your local machine is using online deployed API of our Backend to change that go into src/api/index.js and change the URL to the http://localhost:5000/posts, this line should look like:
```
const url = "http://localhost:5000/posts";
```
instead of: 
```
const url = "posts";
```
***

<h1 align="center">Thank You</h1>

***