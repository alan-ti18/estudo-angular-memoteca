export interface IPensamento {
    id?: number
    conteudo: string
    autoria: string
    modelo: string
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