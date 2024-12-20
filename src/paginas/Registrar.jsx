import { useState } from "react"
import { Link } from "react-router-dom"
import { Alerta } from "../components/Alerta";
import clienteAxios from "../config/axios";

const Registrar = () => {
  const [ nombre, setNombre ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ repetirPassword, setRepetirPassword ] = useState("")

  const [alerta, setAlerta] = useState({})

  const handleSubmit = async e => {
    e.preventDefault();

    if([nombre, email, password, repetirPassword].includes("")) {
        setAlerta({ msg: "hay campos vacios", error: true });
        return;
    }

    if(password !== repetirPassword) {
        setAlerta({ msg:"Los Password no son iguales", error: true })
        return
    }

    if(password.length < 6) {
        setAlerta({ msg:"El Password es muy corto, agrega minimo 6 caracteres", error: true })
        return
    }

    setAlerta({})

    // crear el usuario en la api
    try {
        await clienteAxios.post("/veterinarios", { nombre, email, password })
        setAlerta({
            msg: "creado correctamente, revisa tu email",
            error: false
        })
    } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
      })
    }

}

  const { msg } = alerta

  return (
    <>
        <div>
            <h1 className="text-blue-600 font-black text-6xl">Crea tu Cuenta y Administra {""}<span className="text-black">tus Pacientes</span></h1>
        </div>
        <div className="mt-20 md:mt-5 shadow-lg px-9 py-9 rounded-lg bg-white">

            {msg && <Alerta
              alerta = {alerta}
            />}
            <form
              onSubmit={handleSubmit}
            >
                
            <div className="my-5">
                    <label className="uppercase text-black block text-xl font-bold">
                      Nombre
                    </label>
                  <input
                    type="text"
                    placeholder="Tu Nombre"
                    className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                    value={nombre}
                    onChange={ e => setNombre(e.target.value)}
                  />
                </div>

                <div className="my-5">
                    <label className="uppercase text-black block text-xl font-bold">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Email de Registro"
                      className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                      value={email}
                      onChange={ e => setEmail(e.target.value)}
                    />
                </div>

                <div className="my-5">
                    <label className="uppercase text-black block text-xl font-bold">
                      Password
                    </label>
                  <input
                    type="password"
                    placeholder="Tu Password"
                    className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                    value={password}
                    onChange={ e => setPassword(e.target.value)}
                  />
                </div>

                <div className="my-5">
                    <label className="uppercase text-black block text-xl font-bold">
                      Repetir Password
                    </label>
                  <input
                    type="password"
                    placeholder="Repite Tu Password"
                    className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                    value={repetirPassword}
                    onChange={ e => setRepetirPassword(e.target.value)}
                  />
                </div>
                
                <input
                  type="submit"
                  value="Crear Cuenta"
                  className="bg-blue-600 text-white w-full py-3 px-10 rounded-xl uppercase font-bold mt-5 hover:cursor-pointer hover:bg-black md:w-auto"/>

                <nav className="mt-10 lg:flex lg:justify-between">
                  <Link 
                    className="block text-center my-5 text-blue-700"
                    to="/">¿Ya tienes una cuenta? Inicia sesion</Link>
                   <Link 
                    className="block text-center my-5 text-blue-700"
                    to="/olvide-password"> olvide mi password</Link>
                </nav>
          </form>


          
      </div>

      
    </>
  )
}

export default Registrar