'use client'
import React, { useState } from 'react'
import ProductList from '../../components/ProductList'
import Category from '@/components/Category'

const Product = () => {
  
  return (
    <div className='my-10'>
      {/* <div className='float-left fixed'>
      <Category />
      </div>  */}
     <div>
      <ProductList />
      </div> 
    </div>
  )
}

export default Product
