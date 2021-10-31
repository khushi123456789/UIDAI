import express  from 'express';
import bodyParser from 'body-parser';
import  usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;


app.use(express.json());

app.use('/users',usersRoutes);

app.get('/',(req,res)=>{
    res.send("Hello from homepage!");
});

// var test ="hey";
// var test2 = "there";
// var test = test.concat(" ");
// var test = test.concat(test2);
// console.log(test);


app.listen(PORT,()=> console.log(`Server Running on port: http://localhost:${PORT} `));