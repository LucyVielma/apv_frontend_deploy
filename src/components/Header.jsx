import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const { cerrarSesion } = useAuth();

  return (
    <header className="py-10 bg-blue-600">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <h1 className="font-black text-3xl text-cyan-100 text-center">
          Administrador de Pacientes de{" "}
          <span className="font-extrabold text-white">Veterinaria</span>
        </h1>

        <nav className="flex flex-col items-center lg:flex-row gap-4 mt-5 lg:mt-0">
          <Link to="/admin" className="font-bold text-2xl text-white">
            Pacientes
          </Link>
          <Link to="/admin/perfil" className="font-bold text-2xl text-white">
            Perfil
          </Link>
          <button
            type="button"
            className="font-bold text-2xl text-white"
            onClick={cerrarSesion}
          >
            Cerrar Sesión
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
