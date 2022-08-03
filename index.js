import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
// Importing Router
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit:"30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit:"30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes);

app.get('/', (req, res) => {
        res.send('Welcome to Recipe API: Created by Mahmudul');
});




// Connecting to MongoDB
// Details of Cluster:


const port = process.env.PORT || 5000;

// Using Mongoose to Connect to the our Database

const uri=`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ly5tw.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(uri, { useNewURLParser: true, useUnifiedTopology: true })
        .then(() => app.listen(port, () => console.log(`Server Running Successfully on port: ${port}`)) )
        .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify',false);