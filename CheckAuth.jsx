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
      checkCookie(dispatch, () => {})  
    }
  }, [])  

  if (!isAdminLogged.isLogged) {
    return <Navigate to="/login" />
  }

  return <Component {...rest} />
}

export default CheckAuth 