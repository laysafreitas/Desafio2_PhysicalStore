export interface ViacepResponse{
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
    erro?: boolean;
}

export interface location {
    lat: number;
    lon: number;
}

export interface ILoja {
    id: number;
    name: string;
    cep: string;
    latitude?: number;
    longitude?: number;
  }