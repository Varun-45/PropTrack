import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getallproperties } from '../../../Actions/propertyaction'
import './Owner_Properties.css'
import Container from './Container.jsx'

const Owner_Properties = () => {
  const dispatch = useDispatch()
  const {properties,loading,propertycount,resultPerPage,filteredpropertyCount,error} = useSelector(state=>state.AllOwnerProperties)
  console.log(properties)
  useEffect(() => {
    dispatch(getallproperties())
  }, [dispatch])
  
  return (
    <>
      <Container/>
    </>
  )
}

export default Owner_Properties