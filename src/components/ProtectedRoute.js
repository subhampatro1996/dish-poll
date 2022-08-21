import React from 'react'
import { withRouter } from 'react-router'
const ProtectedRoute = (props) => {
  if(localStorage.getItem('user')){
    return props.children
  }else{
    props.history.push('/login') 
  }
}

export default withRouter(ProtectedRoute)