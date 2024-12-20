import { useState } from "react"
import AdminNav from "../components/AdminNav"
import { Alerta } from "../components/Alerta"
import useAuth from "../hooks/useAuth"

const CambiarPassword = () => {

    const { guardarPassword } = useAuth()

    const [alerta, setAlerta] = useState({})
    const [password, setPassword] = useState({
        pwd_actual: "",
        pwd_nuevo: ""

    })

    const handleSubmit = async e => {
       e.preventDefault();

       if( Object.values(password).some( campo => campo === "" ) ) {
            setAlerta({
                msg: "Todos los campos son obligatorios",
                error: true
            })

            return
       }

       if(password.pwd_nuevo.length < 6) {
            setAlerta({
                msg: "El password debe tener un minimo de 6 caracteres",
                error: true
            })
       }
       const respuesta = await guardarPassword(password)

       setAlerta(respuesta)
    }

  return (
    <>
        <AdminNav/>

        <h2 className="font-black text-black text-3xl text-center mt-10 transition-all hover:text-blue-800 hover:font-thin">Cambiar Password</h2>
        <p className="text-xl mt-5 mb-10 text-center">Modifica tu {""} <span className="font-bold text-blue-700">Password aqui</span> </p>

        <div className="flex justify-center">
            <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">
         
                {alerta.msg && <Alerta alerta={alerta} />}
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="my-3">
                        <label className="uppercase font-bold text-blue-600">Password Actual</label>
                        <input
                            type="password"
                            className="border bg-blue-50 w-full p-2 mt-5 rounded-md"
                            name="pwd_actual"
                            placeholder="escribe tu password actual"
                            onChange={e => setPassword({
                                ...password,
                                [e.target.name] : e.target.value
                            })}
                        />
                    </div>

                    <div className="my-3">
                        <label className="uppercase font-bold text-blue-600">Nuevo Password</label>
                        <input
                            type="password"
                            className="border bg-blue-50 w-full p-2 mt-5 rounded-md"
                            name="pwd_nuevo"
                            placeholder="escribe tu nuevo password"
                            onChange={e => setPassword({
                                ...password,
                                [e.target.name] : e.target.value
                            })}
                        />
                    </div>
        
         
                    <input
                        type="submit"
                        value="Actualizar password"
                        className="bg-black border-white border-2 py-2 px-10 text-white font-light mb-5 uppercase p-3 rounded-md w-full mt-5 transition-all hover:px-5 hover:border-black hover:bg-white hover:text-black cursor-pointer"
                    />
         
                </form>
          </div>
          </div>
    </>
  )
}

export default CambiarPassword