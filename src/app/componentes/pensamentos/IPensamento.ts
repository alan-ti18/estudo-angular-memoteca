export interface IPensamento {
    id?: string
    conteudo: string
    autoria: string
    modelo: string
    favorito: boolean
}

export interface IPensamentoPaginado {
    data: IPensamento[]
    first: number
    last: number
    prev: number
    next: number
    items: number
    pages: number
}