function ItemListContainer(props) {
  return (
    <>
      <div className="bg-white dark:bg-transparent pt-[80px] flex-grow">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-14 lg:px-8">
          <div className="text-center">
            {props.mensaje}
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemListContainer