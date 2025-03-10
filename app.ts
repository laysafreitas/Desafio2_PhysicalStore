import dotenv from "dotenv";
import mongoose from "mongoose";
import express,{ Express, Request,Response } from "express";
import  {GetViaCep} from "./Service/GetViaCep.ts";
import Loja from "./modules/Lojas.ts";
import router from "./index.ts";
import winston from "winston";


dotenv.config();

export const app: Express = express();

app.use(express.json());

app.use('/api', router);


export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.printf(({ level, message, timestamp }) => {
      return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }), 
    new winston.transports.File({ filename: 'logs/info.log', level: 'info' }) 
  ],
});

if (process.env.NODE_ENV === 'production') {
  logger.remove(new winston.transports.Console());
}


  if (!process.env.DATABASE) {
     throw new Error("A variável de ambiente DATABASE não está definida!");
  }

  const connectionDB = mongoose
 .connect(process.env.DATABASE,{
 serverSelectionTimeoutMS: 5000,
  maxPoolSize: 10,
  family: 4,

 }).then(con =>{
  logger.info('DB conectado com sucesso', 
  { connections: con.connections });
  }).catch(err=>{
    logger.error('Erro ao conectar ao DB',
  { error: err.message });
  });


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
        logger.info('Loja inserida com sucesso', { loja: result });
      } else {
        res.status(404).json({ message: 'CEP não encontrado' });
        logger.error('CEP não encontrado', { cep });
      }
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: 'Erro ao inserir a loja', error: error.message });
            logger.error('Erro ao inserir a loja', { error: error.message });
          } else {
            res.status(500).json({ message: 'Erro desconhecido ao inserir a loja' });
            logger.error('Erro desconhecido ao inserir a loja');
          }
        }
  });

  router.get('/test-error', (req: Request, res: Response) => {
    throw new Error('Erro intencional para teste');
  });

app.listen(27017,()=>{
logger.info("Servidor está rodando em http://localhost:27017");
});

export default (app);
