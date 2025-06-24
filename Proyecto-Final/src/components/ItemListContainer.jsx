import ItemCell from './ItemCell.jsx'
import getProducts from '../services/mockService.js'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ItemListContainer(props) {

  const [allProducts, setAllProducts] = useState([])
  const [products, setProducts] = useState([])

  const { brand } = useParams()

  const filterByBrand = (arrayProducts, category) => {
    if (brand) {
      setProducts(arrayProducts.filter(el => el.brand === brand))
    } else {
      setProducts(arrayProducts)
    }
  }

  useEffect(() => {
    if (allProducts.length === 0) {
      getProducts()
        .then(result => {
            setAllProducts(result)
            filterByBrand(result, brand)
          }).catch((err) => { alert(err) })
    } else {
        filterByBrand(allProducts, brand)
    };
}, [brand]);

  return (
    <>
      <div className="bg-white mt-[154px] flex-grow">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:pt-0 lg:px-8">
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 lg:gap-x-8 [&:has(>_:only-child)]:grid-cols-1 [&:has(>_:only-child)]:justify-items-center'>
            {
              products.length > 0
                ?
                  products.map(item => <ItemCell key={item.id} {...item}/>)
                :
                <div className='flex items-center justify-center gap-2 bg-red-50 p-4 rounded-lg text-sm text-red-700 text-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                    <path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd"></path>
                  </svg>
                  No se encontraron productos
                </div>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemListContainer