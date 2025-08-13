import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function gerarSlug(texto) {
  return texto
    .toLowerCase()                       // deixa tudo minúsculo
    .normalize('NFD')                   // separa acentos
    .replace(/[\u0300-\u036f]/g, '')   // remove acentos
    .replace(/\s+/g, '-')               // troca espaços por hífen
    .replace(/[^\w\-]+/g, '')           // remove caracteres não alfanuméricos (exceto hífen)
    .replace(/\-\-+/g, '-')             // remove hífens repetidos
    .replace(/^-+/, '')                 // remove hífens do começo
    .replace(/-+$/, '');                // remove hífens do fim
}