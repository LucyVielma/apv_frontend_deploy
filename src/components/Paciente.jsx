import usePacientes from "../hooks/usePacientes"

const Paciente = ({paciente}) => {

    const { setEdicion, eliminarPaciente } = usePacientes()

    const { email, fecha, nombre, propietario, sintomas, _id } = paciente


    const formatearFecha = (fecha) => {
        const nuevaFecha = new Date(fecha)
        nuevaFecha.setMinutes(nuevaFecha.getMinutes() + nuevaFecha.getTimezoneOffset())
        return new Intl.DateTimeFormat("en-CA", {dateStyle: "long"}).format(nuevaFecha)

    }

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold uppercase text-black my-2">Nombre: {""}
            <span className="font-normal normal-case text-blue-700">{nombre}</span>
        </p>

        <p className="font-bold uppercase text-black my-2">Propietario: {""}
            <span className="font-normal normal-case text-blue-700">{propietario}</span>
        </p>

        <p className="font-bold uppercase text-black my-2">Email Contacto: {""}
            <span className="font-normal normal-case text-blue-700">{email}</span>
        </p>

        <p className="font-bold uppercase text-black my-2">Fecha de Alta: {""}
            <span className="font-normal normal-case text-blue-700">{formatearFecha(fecha)}</span>
        </p>
        
        <p className="font-bold uppercase text-black my-2">Sintomas: {""}
            <span className="font-normal normal-case text-blue-700">{sintomas}</span>
        </p>

        <div className="flex justify-between my-5">
            <button
                type="button"
                className="bg-black border-white border-2 py-2 px-10 text-white font-light mb-5 uppercase p-3 rounded-md transition-all hover:px-5 hover:border-black hover:bg-white hover:text-black cursor-pointer"
                onClick={() => setEdicion(paciente)}
            >Editar</button>

            <button
                type="button"
                className="bg-black border-red-600 border-2 py-2 px-10 text-red-600 font-bold mb-5 uppercase p-3 rounded-md transition-all hover:font-light hover:px-5 hover:border-white hover:bg-red-600 hover:text-white cursor-pointer"
                onClick={() => eliminarPaciente(_id)}
            >Eliminar</button>
        </div>
    </div>
  )
}

export default Paciente