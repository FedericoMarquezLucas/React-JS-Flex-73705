import Item from '../Item/Item.jsx'

const products = [
  "Hola", "React", "Coder", "Otra Cosa"
]

function ItemListContainer(props) {
  return (
    <>
      <div className="bg-white pt-[79px] flex-grow">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:pt-0 lg:px-8">
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 lg:gap-x-8'>
            {
              products.map( (elem, index) => <Item key={elem} number={index+1} name={elem}/> )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemListContainer