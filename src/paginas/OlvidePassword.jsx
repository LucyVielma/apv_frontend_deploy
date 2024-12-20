import { useState } from "react"
import { Link } from "react-router-dom"
import { Alerta } from "../components/Alerta";
import clienteAxios from "../config/axios";

const OlvidePassword = () => {
    const [email, setEmail] = useState("")
    const [alerta, setAlerta] = useState({})


    const handleSubmit = async e => {
      e.preventDefault()

      if(email === "" || email.length < 6) {
        setAlerta({msg: "El Email es obligatorio", error: true})
        return
      }

      try {
          const { data } = await clienteAxios.post("/veterinarios/olvide-password", { email })

          setAlerta({msg: data.msg})
      } catch (error) {
        setAlerta({
            msg: error.response.data.msg,
            error: true
        })
      }

    }

    const msg = alerta

  return (
    <>
        <div>
            <h1 className="text-blue-600 font-black text-6xl">Recupera tu Acceso y no pierdas {""}<span className="text-black">tus Pacientes</span></h1>
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
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email de Registro"
                    className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
              </div>

              <input
                  type="submit"
                  value="Enviar Instrucciones"
                  className="bg-blue-600 text-white w-full py-3 px-10 rounded-xl uppercase font-bold mt-5 hover:cursor-pointer hover:bg-black md:w-auto"/>

                <nav className="mt-10 lg:flex lg:justify-between">
                  <Link 
                    className="block text-center my-5 text-blue-700"
                    to="/">¿Ya tienes una cuenta? Inicia sesion</Link>
                   <Link 
                    className="block text-center my-5 text-blue-700"
                    to="/registrar">¿No tienes una cuenta? Registrate</Link>
                </nav>
          </form>
      </div>
    </>
  )
}

export default OlvidePassword