import React from 'react'

async function  ProductD({params}) {
    const { id } = await params
  return (
    <div>page{id}</div>
  )
}

export default ProductD