import { Link } from 'react-router-dom'

const AdminNav = () => {
  return (
    <nav className='flex gap-3'>
        <Link 
            to="/admin/perfil"
            className='font-bold uppercase text-blue-700'
        >Perfil</Link>

        <Link 
            to="/admin/cambiar-password"
            className='font-bold uppercase text-blue-700'
        >Cambiar Password</Link>
    </nav>
  )
}

export default AdminNav;