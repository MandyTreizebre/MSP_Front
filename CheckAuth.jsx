import React, { useEffect } from "react" 
import { useSelector, useDispatch } from "react-redux" 
import { Navigate } from "react-router-dom" 
import { selectAdmin } from "./src/slices/adminSlice" 
import { checkCookie } from "./auth"

const CheckAuth = ({ component: Component, ...rest }) => {
  const isAdminLogged = useSelector(selectAdmin) 
  const dispatch = useDispatch() 

  useEffect(() => {
    if (isAdminLogged.isLogged) {
      checkCookie(dispatch, () => {})  // Assurez-vous que checkCookie prend `dispatch` en tant qu'argument pour pouvoir dispatch des actions
    }
  }, [])  // Le tableau de dépendances vide garantit que cela ne s'exécute qu'au montage

  if (!isAdminLogged.isLogged) {
    return <Navigate to="/login" />
  }

  return <Component {...rest} />
}

export default CheckAuth 