import { GetViaCep } from "./GetViaCep";
import { Request,Response } from "express";
import {haversineDistance} from "../modules/haversineDistance"
import Loja from "../modules/Lojas";

export async function GetLocation(
    req:Request,
    res:Response
):Promise<void>{
    const cep = req.params.cep;

    if (!cep) {
      res.status(400).json({ message: 'CEP é obrigatório' });
      return;
    }
try{

const coordinates = await GetViaCep(cep);

if (!coordinates) {
    res.status(404).json({ message: 'CEP não encontrado' })
    return;
  }

const { lat, lon } = coordinates;
coordinates;

    const stores = await Loja.find();
    const storesWithinRadius = stores.filter(stores => {
      const distance = haversineDistance(
        { latitude: lat, longitude: lon },
        { latitude: stores.latitude, longitude: stores.longitude }
      );
      return distance <= 100;
    }).sort((a:any, b:any) => {
      const distanceA = haversineDistance(
        { latitude: lat, longitude: lon },
        { latitude: a.latitude, longitude: a.longitude }
      );
      const distanceB = haversineDistance(
        { latitude: lat, longitude: lon },
        { latitude: b.latitude, longitude: b.longitude }
      );
      return distanceA - distanceB;
    });

    if (storesWithinRadius.length === 0) {
        res.status(404).json({ message: 'Nenhuma loja encontrada no raio de 100 km' });
        return;
      }
  
      res.json(storesWithinRadius);
}catch(error: any){
    console.error(error);
    res.status(500).json({ message: 'Erro ao processar a requisição', error: error.message});
}
}

