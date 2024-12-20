import { useState, useEffect } from "react"
import {Alerta} from "./Alerta"
import usePacientes from "../hooks/usePacientes";

const Formulario = () => {
    const [nombre, setNombre] = useState("")
    const [propietario, setPropietario] = useState("")
    const [email, setEmail] = useState("")
    const [fecha, setFecha] = useState("")
    const [sintomas, setSintomas] = useState("")
    const [id, setId] = useState(null)

    const [alerta, setAlerta] = useState("")

    const { guardarPaciente, paciente } = usePacientes()

    useEffect(() => {
         if(paciente?.nombre) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(new Date(paciente.fecha).toLocaleDateString('en-CA'))
            setSintomas(paciente.sintomas)
            setId(paciente._id)
         }

    }, [paciente])


    const handleSubmit = e => {
        e.preventDefault()

        // validar el formulario
        if([nombre, propietario, email, fecha, sintomas].includes("")) {
            setAlerta({
                msg: "Todos los campos son obligatorios",
                error: true
            })
            return;
        }

        guardarPaciente({ nombre, propietario, email, fecha, sintomas, id })
        setAlerta({
            msg: "Guardado Correctamente"
        })
        setNombre("")
        setPropietario("")
        setEmail("")
        setFecha("")
        setSintomas("")
        setId("")
    }

    const { msg } = alerta
  return (
    <>
        
        <h2 className='font-black text-3xl text-center'>Administrador de Pacientes</h2>
            <p className='text-xl mt-5 mb-10 text-center'>
            Añade tus pacientes y {''}
              <span className='text-indigo-600 font-bold'>Administralos</span>
            </p>

        <form
            className="bg-white py-10 px-5 mb-10 lg:mb-3 shadow-md rounded-md "
            onSubmit={handleSubmit}
        >
            <div className="mb-5">
                <label htmlFor="nombre" className="text-blue-900 font-black uppercase">Nombre Mascota</label>
                <input 
                    id="nombre"
                    type="text"
                    placeholder="Nombre Mascota"
                    className="border-blue-600 border-2 w-full p-2 mt-2 placeholder-blue-800 rounded-lg font-extralight"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                
                />
            </div>

            <div className="mb-5">
                <label htmlFor="propietario" className="text-blue-900 font-black uppercase">Nombre propietario</label>
                <input 
                    id="propietario"
                    type="text"
                    placeholder="Nombre propietario"
                    className="border-blue-600 border-2 w-full p-2 mt-2 placeholder-blue-800 rounded-lg font-extralight"
                    value={propietario}
                    onChange={e => setPropietario(e.target.value)}
                
                />
            </div>

            <div className="mb-5">
                <label htmlFor="email" className="text-blue-900 font-black uppercase">email</label>
                <input 
                    id="email"
                    type="text"
                    placeholder="email"
                    className="border-blue-600 border-2 w-full p-2 mt-2 placeholder-blue-800 rounded-lg font-extralight"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                
                />
            </div>

            <div className="mb-5">
                <label htmlFor="fecha" className="text-blue-900 font-black uppercase">fecha de alta</label>
                <input 
                    id="fecha"
                    type="date"
                    className="border-blue-600 border-2 w-full p-2 mt-2 placeholder-blue-800 rounded-lg font-extralight"
                    value={fecha}
                    onChange={e => setFecha(e.target.value)}
                
                />
            </div>

            <div className="mb-5">
                <label htmlFor="sintomas" className="text-blue-900 font-black uppercase">sintomas</label>
                <textarea 
                    id="sintomas"
                    placeholder="sintomas"
                    className="border-blue-600 border-2 w-full p-2 mt-2 placeholder-blue-800 rounded-lg font-extralight"
                    value={sintomas}
                    onChange={e => setSintomas(e.target.value)}
                
                />
            </div>

            <input
                type="submit"
                className="bg-black border-white border-2 text-white font-light uppercase rounded-md w-full p-3 transition-all hover:border-black hover:bg-white hover:text-black cursor-pointer"
                value={ id ? "Guardar Cambios" : "Agrega Paciente" }
            
            />

        </form>

        {msg && <Alerta alerta={alerta} />}

    </>
    


  )
}

export default Formulario