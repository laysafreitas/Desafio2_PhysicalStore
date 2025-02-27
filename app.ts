import dotenv from "dotenv";
import mongoose from "mongoose";
import express  from "express";



dotenv.config();
const app = express();

app.use(express.json());


if (!process.env.DATABASE) {
    throw new Error("A variável de ambiente DATABASE não está definida!");
  }

const connectionDB = mongoose
.connect(process.env.DATABASE,{
serverSelectionTimeoutMS: 5000,
maxPoolSize: 10,
family: 4,

}).then(con =>{
    console.log(con.connections);
    console.log('DB conectado com sucesso');
})


app.listen(27017,()=>{
console.log("server is running in https://localhost:27017")
});

export default (app);
