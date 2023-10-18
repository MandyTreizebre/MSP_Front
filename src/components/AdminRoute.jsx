import {Route, Navigate} from 'react-router-dom'
import { useAdmin } from './AdminContext'

function AdminRoute({ path, children}) {
    const {admin} = useAdmin()

    return (
        <Route 
            path={path} 
            element={
                admin ? children : <Navigate to="/" />
            } 
        />
    )
}

export default AdminRoute