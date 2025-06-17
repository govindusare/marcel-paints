import ProductD from '@/components/products/ProductD'
import React from 'react'
import { coatingProductsData, constructionChemicalProductsData, paintProductsData, rawMaterialProductsData } from '@/lib/data'

async function ProductDescPage({ params }) {
    const { category, id } = await params
    return (
        <div>
            {category == "paints" ?
                <ProductD productsData={paintProductsData} id={id} />
                :
                category == "construction-chemicals" ? <ProductD productsData={constructionChemicalProductsData} id={id} /> :
                    category == "coatings" ? <ProductD productsData={coatingProductsData} id={id} /> :
                        category == "raw-materials" ? <ProductD productsData={rawMaterialProductsData} id={id} /> :
                            <p>Invalid Category</p>}
        </div>
    )
}

export default ProductDescPage