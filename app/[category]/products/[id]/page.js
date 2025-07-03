import ProductD from '@/components/products/ProductD'
import React from 'react'
import { coatingProductsData, constructionChemicalProductsData, paintProductsData, rawMaterialProductsData } from '@/lib/data'

async function ProductDescPage({ params }) {
    const { category, id } = await params
    return (
        <div>
            {category == "paints" ?
                <ProductD productsData={paintProductsData} id={id} category={category} />
                :
                category == "construction-chemicals" ? <ProductD productsData={constructionChemicalProductsData} id={id} category={category} /> :
                    category == "coatings" ? <ProductD productsData={coatingProductsData} id={id} category={category} /> :
                        category == "raw-materials" ? <ProductD productsData={rawMaterialProductsData} id={id} category={category} /> :
                            <p>Invalid Category</p>}
        </div>
    )
}

export default ProductDescPage