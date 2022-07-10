import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getpropertydetails } from '../../../Actions/propertyaction'
import './PropertyDetails.css'
import Path from './Path'
import PropContainer from './PropContainer'
import './Fontawesome.css'

const PropertyDetails = () => {
  const dispatch = useDispatch()
  const {productid} = useParams()

  const {property, loading, error} = useSelector(state=>state.PropertyDetails)

  useEffect(() => {
    dispatch(getpropertydetails(productid))
  }, [dispatch])
  
  return (
    <>
      <Path/>
      <PropContainer/>
    </>
  )
}

export default PropertyDetails