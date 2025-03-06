import Categoria from "./Categoria";

export default interface Produto{
    id: number;
    nome: string;
    preco: number;
    foto: string;
    calorias: number;
    gorduraSaturada: number;
    acucar: number;
    sodio: number;
    nutriScore: string;
    categoria: Categoria [] | null;
}