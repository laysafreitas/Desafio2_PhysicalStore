import { Request,Response } from "express";
import axios, {AxiosResponse} from "axios";
import interfaceApi from "../help/interfaceApi";
import { promises } from "dns";
import ViacepResponse from "../help/interfaceApi";

export default async function GetCep(
    cep:string,
    req:Request,
    res:Response
):Promise<void> {
    try{
    const response = await axios.get<ViacepResponse>(`https://viacep.com.br/ws/${cep}`)

    }catch{

    }
}