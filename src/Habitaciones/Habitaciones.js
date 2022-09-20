import { ServicioHabitacion } from "../services/ServicioHabitacion.js"
import { useEffect,useState } from "react"//HOOKS
export function Habitaciones(){

    //USANDO EL USESTATE
    //(FUNCION ESPECIAL PARA CREAR VARIABLE GLOBALDENTRO DEL COMPONENTE)

    const[estadoCarga,setEstadoCarga]=useState(true)
    const[habitaciones,setHabitaciones]=useState(null)

    //USANDO EL USEEFECT
    //FUNCION QUE CONTROLA EL RENDER(EL PINTADO)DE UN COMPONENTE
    useEffect(function(){
        ServicioHabitacion()
        .then(function(respuesta){
            setHabitaciones(respuesta)
            setEstadoCarga(false)
       
    })

    },[])

    //EVALUANDO LA CARGA PARA RENDERIZAR RESPUESTA
    if(estadoCarga){

        return(
            <>
            <h1>ESTOY CARGANDO</h1>
            </>
        )

    }else{
        return(
            <div>
                {
                    habitaciones.datos.map(function(habitacion){
                        return(
                            <div>
                                <h1>{habitacion.nombre}</h1>
                                <img src={habitacion.imagenes[0]}></img>
                            </div>
                        )
                    })
                }
            </div>

   
    )
}
}