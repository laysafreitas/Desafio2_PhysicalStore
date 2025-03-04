import axios from "axios";
import { ViacepResponse } from "../modules/interfaces";
import { location } from "../modules/interfaces";


export async function GetViaCep(cep: string): Promise<location | null> {
try{
const response = await axios.get<ViacepResponse>(`http://viacep.com.br/ws/${cep}/json/`);

if(response.data.erro){
    console.error('Cep não encontrado na api viacep');
    return null;
}

const address = `${response.data.logradouro},${response.data.localidade}, ${response.data.uf}`;

const NominatimResponse = await axios.get<location>(`https://nominatim.openstreetmap.org/search`,{
     params: { q: address, format: "json",limit:1},
});

const data = NominatimResponse.data;

if (!Array.isArray(data) || data.length === 0) {
    console.error("Não foi possível encontrar as coordenadas do CEP.");
    return null;
}

return {
    lat: Number(data[0].lat),
    lon: Number(data[0].lon),
};
}catch(error){
    if(error instanceof Error){
        console.error(`erro ao buscar a informação do cep: ${error.message}`);
    }else{
        console.error('erro desconhecido ao buscar informações do cep');
    }
    return null;
}
}


