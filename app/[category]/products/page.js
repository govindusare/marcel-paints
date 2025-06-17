import Productpage from '@/components/products/Productpage'
import { coatingProductsData, constructionChemicalProductsData, paintProductsData, rawMaterialProductsData } from '@/lib/data'
import React from 'react'

async function ProductsPage({ params }) {
    const { category } = await params
    return (
        <div>
            {category == "paints" ?
                <Productpage category={category} productsData={paintProductsData} />
                :
                category == "construction-chemicals" ? <Productpage category={category} productsData={constructionChemicalProductsData} /> :
                    category == "coatings" ? <Productpage category={category} productsData={coatingProductsData} /> :
                        category == "raw-materials" ? <Productpage category={category} productsData={rawMaterialProductsData} /> :
                            <p>Invalid Category</p>}
        </div>
    )
}

export default ProductsPage