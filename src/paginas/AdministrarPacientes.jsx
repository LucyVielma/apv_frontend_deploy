import { useState } from "react";
import Formulario from "../components/Formulario";
import ListadoPacientes from "../components/ListadoPacientes";

export const AdministrarPacientes = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  return (
    <div className="flex flex-col md:flex-row">
      {/* Botón para mostrar/ocultar formulario en móviles */}
      <button
        type="button"
        className="bg-black border-white border-2 text-white font-light mb-5 uppercase p-3 rounded-md md:hidden transition-all hover:border-black hover:bg-white hover:text-black cursor-pointer"
        onClick={() => setMostrarFormulario(!mostrarFormulario)}
      >
        {mostrarFormulario ? "Ocultar Formulario" : "Mostrar Formulario"}
      </button>

      {/* Sección del formulario */}
      <div
        className={`${
          mostrarFormulario ? "block" : "hidden"
        } md:block md:w-1/2 lg:w-2/5 px-4`}
      >
        <Formulario />
      </div>

      {/* Sección del listado de pacientes */}
      <div className="md:w-1/2 lg:w-3/5 px-4">
        <ListadoPacientes />
      </div>
    </div>
  );
};

export default AdministrarPacientes;

