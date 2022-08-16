import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getallproperties } from '../../../Actions/propertyaction'
import './Owner_Properties.css'
import Container from './Container.jsx'

const Owner_Properties = () => {
  const dispatch = useDispatch()
  const { filteredpropertyCount } = useSelector(state => state.AllOwnerProperties)
  if (filteredpropertyCount === undefined) {
    dispatch(getallproperties());
  }
  
  return (<Container/>)
}

export default Owner_Properties