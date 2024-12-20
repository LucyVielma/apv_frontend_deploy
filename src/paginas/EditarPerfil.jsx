import { useEffect, useState } from "react"
import AdminNav from "../components/AdminNav"
import useAuth from "../hooks/useAuth"
import { Alerta } from "../components/Alerta"

const EditarPerfil = () => {


    const { auth, actualizarPerfil } = useAuth()
    const [perfil, setPerfil] = useState({})
    const [alerta, setAlerta] = useState({})

    console.log(auth)

    useEffect( () => {
        setPerfil(auth)
    }, [auth])

    const handleSubmit = async e => {
        e.preventDefault()

        const { nombre, email } = perfil

        if([nombre, email].includes("")) {
            setAlerta({
                msg: "Email y Nombre son obligatorios",
                error: true
            })
            return
        }
        const resultado = await actualizarPerfil(perfil)

        setAlerta(resultado)
    }

    const { msg } = alerta


  return (
    <>
        <AdminNav/>

        <h2 className="font-black text-black text-3xl text-center mt-10 transition-all hover:text-blue-800 hover:font-thin">Editar Perfil</h2>
            <p className="text-xl mt-5 mb-10 text-center">Modifica tu {""} <span className="font-bold text-blue-700">Informacion aqui</span> </p>

        <div className="flex justify-center">
            <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">

                {msg && <Alerta alerta={alerta} />}
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="my-3">
                        <label className="uppercase font-bold text-blue-600">Nombre</label>
                        <input
                            type="text"
                            className="border bg-blue-50 w-full p-2 mt-5 rounded-md"
                            name="nombre"
                            value={perfil.nombre || ""}
                            onChange={ e => setPerfil({
                                ...perfil,
                                [e.target.name] : e.target.value
                            })}
                        />
                    </div>

                    <div className="my-3">
                        <label className="uppercase font-bold text-blue-600">sitio web</label>
                        <input
                            type="text"
                            className="border bg-blue-50 w-full p-2 mt-5 rounded-md"
                            name="web"
                            value={perfil.web || ""}
                            onChange={ e => setPerfil({
                                ...perfil,
                                [e.target.name] : e.target.value
                            })}
                        />
                    </div>

                    <div className="my-3">
                        <label className="uppercase font-bold text-blue-600">Telefono</label>
                        <input
                            type="text"
                            className="border bg-blue-50 w-full p-2 mt-5 rounded-md"
                            name="telefono"
                            value={perfil.telefono || ""}
                            onChange={ e => setPerfil({
                                ...perfil,
                                [e.target.name] : e.target.value
                            })}
                        />
                    </div>

                    <div className="my-3">
                        <label className="uppercase font-bold text-blue-600">Email</label>
                        <input
                            type="text"
                            className="border bg-blue-50 w-full p-2 mt-5 rounded-md"
                            name="email"
                            value={perfil.email || ""}
                            onChange={ e => setPerfil({
                                ...perfil,
                                [e.target.name] : e.target.value
                            })}
                        />
                    </div>

                    <input
                        type="submit"
                        value="Guardar cambios"
                        className="bg-black border-white border-2 py-2 px-10 text-white font-light mb-5 uppercase p-3 rounded-md w-full mt-5 transition-all hover:px-5 hover:border-black hover:bg-white hover:text-black cursor-pointer"
                    />

                </form>
            </div>
        </div>

    </>
  )
}

export default EditarPerfil