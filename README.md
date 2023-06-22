# gantri-exercise

To run the server you will first need to pull the code locally with:

git clone

Then you will need to install the packages:

npm install

Then you need to create an .env file in the root of the project and insert the MONGODB_URL that i have provided you.

Then you can run:

npm run dev

Available endpoints are:

-- GET http://localhost:4000/api/v1/art

-- GET http://localhost:4000/api/v1/art/:id

-- POST http://localhost:4000/api/v1/art/:id/comments required body to be posted:

{
   "content": "Very Very cool paiting",
   "userId": "fTJYXwYhvJoVQ_6ijEjIc"
}

-- POST http://localhost:4000/api/v1/users required body to be posted:

{
   "age": 200,
   "name": "Bob",
   "location": "San Francisco"
}

-- GET http://localhost:4000/api/v1/users
