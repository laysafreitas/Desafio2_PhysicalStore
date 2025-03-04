import dotenv from "dotenv";
import mongoose from "mongoose";
import express,{ Express, Request,Response } from "express";
import  {GetViaCep} from "./Service/GetViaCep.ts";
import Loja from "./modules/Lojas";
import router from "./index.ts";

dotenv.config();

export const app: Express = express();

app.use(express.json());

app.use('/api', router);

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



 app.post('/lojas', async (req: Request, res: Response) => {
    const { name, cep, city,bairro,logradouro,estado,ddd} = req.body;
  

    try {
      const coordinates = await GetViaCep(cep);
      if (coordinates) {
        const loja = new Loja({
          name,
          cep,
          city,
          bairro,
         logradouro,
          estado,
          ddd,
          latitude: coordinates.lat,
          longitude: coordinates.lon,
        });
  
        const result = await loja.save();
        res.status(201).json(result);
      } else {
        res.status(404).json({ message: 'CEP não encontrado' });
      }
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: 'Erro ao inserir a loja', error: error.message });
          } else {
            res.status(500).json({ message: 'Erro desconhecido ao inserir a loja' });
          }
        }
  });

app.listen(27017,()=>{
console.log("server is running in http://localhost:27017")
});

export default (app);
