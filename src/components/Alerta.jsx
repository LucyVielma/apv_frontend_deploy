export const Alerta = ({alerta}) => {
  return (
    <div className={`${alerta.error ? "from-red-400 to-red-600" : "from-teal-300 to-teal-500"} bg-gradient-to-br px-4 py-3 font-bold text-center rounded-lg text-white uppercase text-sm mb-10`}>
        {alerta.msg}
    </div>
  )
}
