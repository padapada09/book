export interface Book {
    titulo: string,
    descripcion: string,
    id: string
};

export interface Content {
    titulo: string,
    descripcion: string,
    id: string,
    puntaje_maximo: number,
    dependencias: string[],
    recomended?: boolean
};

export interface Block {
    id: string,
    id_contenido?: string,
    tipo: "Texto" | "Imagen" | "Titulo",
    orden?: number
};

export interface Text extends Block {
    texto: string
};

export interface Image extends Block {
    src: string
};

export interface Title extends Block {
    titulo: string
};

export interface Answer {
    id: string,
    id_pregunta: string,
    descripcion: string,
    valoracion: number,
    feedback: string
};

export interface Question {
    id: string,
    id_contenido: string,
    titulo: string,
    descripcion?: string,
    respuestas: Answer[],
    dificultad: number
};

export interface Revision {
    id: string,
    preguntas: Question[],
    dificultad: number
};

export interface ServerResponse<T = void> {
    success: boolean,
    error?: string,
    data: T extends void ? undefined : T
};