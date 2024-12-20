import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Alerta } from "../components/Alerta";
import clienteAxios from "../config/axios";

const NuevoPassword = () => {
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});
  const [tokenValido, setTokenValido] = useState(false);
  const [ passwordModificado, setPasswordModificado ] = useState(false);

  const params = useParams();
  const { token } = params;

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        await clienteAxios(`/veterinarios/olvide-password/${token}`);
        setTokenValido(true);
        setAlerta({
          msg: "Coloca tu Nuevo password",
        });
      } catch (error) {
        setAlerta({
          msg: "Hubo un error con el enlace",
          error: true,
        });
      }
    };
    comprobarToken();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(password.length < 6) {
      setAlerta({
        msg: "El Password debe ser minimo de 6 caracteres",
        error: true
      })
    }

    try {
      const url = `/veterinarios/olvide-password/${token}`
      const { data } = await clienteAxios.post(url, { password } )

      setAlerta({
        msg: data.msg
      })
      setPasswordModificado(true)
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
      return
    }
  }

  const { msg } = alerta;

  return (
    <>
      <div>
        <h1 className="text-blue-600 font-black text-6xl">
          Reestablece tu password y no pierdas acceso a {""}
          <span className="text-black">tus Pacientes</span>
        </h1>
      </div>

      <div className="mt-20 md:mt-5 shadow-lg px-9 py-9 rounded-lg bg-white">
        {msg && <Alerta alerta={alerta} />}

        {tokenValido && (
          <>
            <form onSubmit={handleSubmit}>
              <div className="my-5">
                <label className="uppercase text-black block text-xl font-bold">
                  Nuevo Password
                </label>
                <input
                  type="password"
                  placeholder="Tu Nuevo Password"
                  className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <input
                type="submit"
                value="Guardar Nuevo Password"
                className="bg-blue-600 text-white w-full py-3 px-10 rounded-xl uppercase font-bold mt-5 hover:cursor-pointer hover:bg-black md:w-auto"
              />
            </form>


          
            </>
        )}

        {passwordModificado && 
          <Link 
            className="block text-center my-5 text-blue-700"
            to="/"
          >Inicia sesion</Link>
        }
      </div>
    </>
  );
};

export default NuevoPassword;
