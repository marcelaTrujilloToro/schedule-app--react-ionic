import React, { useState } from 'react'
import ActividadesContext, { Actividad, ActividadesContextModel, ActividadType } from './actividades-context';

const ActividadesContextProvider: React.FC = (props) => {
    
    const [actividades, setActividades] = useState<Actividad[]>(
        [{
            id: Math.random().toString(),
            titulo: "SIESTA DEL DIA",
            descripcion: "Siesta luego del trabajo y antes de clase",
            hora: "18:00",
            actividadType: "descanso",
            imagenUrl: "/assets/images/descanso.jpg",
            siCompleta: false
        },
        {
            id: Math.random().toString(),
            titulo: "TRABAJO DURO",
            descripcion: "Trabajar en aplicacion Actividades con IONIC",
            hora: "8:00",
            actividadType: "trabajo",
            imagenUrl: "/assets/images/trabajo.jpg",
            siCompleta: false
        },
        {
            id: Math.random().toString(),
            titulo: "TIEMPO DE PELICULA",
            descripcion: "Ver End Game por decima vez",
            hora: "12:00",
            actividadType: "hobby",
            imagenUrl: "/assets/images/cinee.jpg",
            siCompleta: false
        },
        {
            id: Math.random().toString(),
            titulo: "APRENDER IONIC 5",
            descripcion: "Completar el tutorial con Hooks, React, Context, Ionic...",
            hora: "14:00",
            actividadType: "trabajo",
            imagenUrl: "/assets/images/trabajo.jpg",
            siCompleta: false
        }
    ]);

    const agregarActividad = (titulo: string, descripcion: string, hora: string, actividadType: ActividadType) => {
        let imagenUrl = "";
        switch (actividadType) {
            case "descanso":
                imagenUrl = "/assets/images/descanso.jpg"
                break;

            case "trabajo":
                imagenUrl = "/assets/images/trabajo.jpg"
                break;

            case "hobby":
                imagenUrl = "/assets/images/cinee.jpg"
                break;
                
            default:
                imagenUrl = "/assets/images/descanso.jpg"

                break;
        };

        const newActividad: Actividad = {
            id: Math.random().toString(),
            titulo,
            descripcion,
            hora,
            actividadType,
            imagenUrl,
            siCompleta:false
        };

        setActividades(listaActividades => {
            return [ ...listaActividades, newActividad];
        });

    };
    
    const completarActividad = (actividadId: string) => {

        setActividades(listaActividades => {
            const actividadesActualizadas = [...listaActividades];
            const obtIndexActividad = actividades.findIndex(act => act.id === actividadId);
            const actualizarActividad = { ...actividadesActualizadas[obtIndexActividad], siCompleta: true};
            actividadesActualizadas[obtIndexActividad] = actualizarActividad;
            return actividadesActualizadas;

        })
    }

    const actividadesContext: ActividadesContextModel = {

        actividades,
        agregarActividad,
        completarActividad
    }
    
    return (

        <ActividadesContext.Provider value = {actividadesContext}>
            {props.children}
        </ActividadesContext.Provider>   
    );
};

export default ActividadesContextProvider;