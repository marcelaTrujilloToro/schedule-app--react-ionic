import React from 'react'

export type ActividadType = 'descanso' | 'trabajo' | 'hobby';

export interface Actividad {
    id: string,
    titulo: string,
    descripcion: string,
    hora: string
    actividadType: ActividadType;
    imagenUrl: string,
    siCompleta: boolean,
}

export interface ActividadesContextModel{
    actividades: Actividad[];
    agregarActividad: (titulo: string, descripcion: string, hora: string, actividadType: ActividadType) => void;
    completarActividad: (actividadId: string) => void;
}

const ActividadesContext = React.createContext <ActividadesContextModel>({
    actividades: [],
    agregarActividad: () => {},
    completarActividad: () => {},
});

export default ActividadesContext;