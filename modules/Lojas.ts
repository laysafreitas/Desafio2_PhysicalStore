import mongoose, { Schema, Document } from "mongoose";

export interface ILoja extends Document {
  name: string;
  cep: string;
  city:string;
  bairro: string;
  logradouro:string;
  estado: string;
  ddd:string;
  latitude: number;
  longitude: number;
}

const LojasSchema: Schema = new Schema({
  name: { type: String, required: true },
  cep: { type: String, required: true },
  city:{type: String, require:true},
  bairro:{type: String, require:true},
  logrqdouro:{type: String, require: true},
  estado:{type: String, require:true},
  ddd:{type: String, require:true},
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true }
});

const Loja =  mongoose.model<ILoja>("Loja", LojasSchema);
export default Loja;