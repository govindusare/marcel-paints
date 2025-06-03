import React from 'react'

async function  ProductD({params}) {
    const { id } = await params
  return (
    <div>{id}</div>
  )
}

export default ProductD