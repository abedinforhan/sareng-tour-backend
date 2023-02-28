import express, { Application } from 'express';
import dbConnect from './loaders/mongoose';
import routes from './routes'

const app: Application = express();

const port: number = 5000 || process.env.PORT;

//database conection
try {
  dbConnect()
} catch (err) {
  console.log(err);
}

//Applicatinon Parsers
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//Application routes
app.use('/',routes)


app.listen(port, () => {
  console.log(`Port is running on ${port}`);
});
