

const  Category = ({ onCategoryChanged }) => {
  
  
  const handleCategoryChanged = (e) =>{
    const selectedCategory = e.target.value
      onCategoryChanged(selectedCategory)
  }





  return (
    <>
       <div className="bg-gray-100  px-5 py-2 h-screen rounded leading-10">
        <h2 className="text-center font-semibold mb-5">Filters</h2>
        <h3>Category: </h3>
        <form>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="" value="Shoes" id="shoes"  onChange={handleCategoryChanged}/>
            <label htmlFor="shoes" className="hover:text-gray-600">Shoes</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="" value="kid play" id="kid play"  onChange={handleCategoryChanged} />
            <label htmlFor="kid play"  className="hover:text-gray-600">Kid Play</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="" value="baby clothes" id="babyClothes"  onChange={handleCategoryChanged} />
            <label htmlFor="babyClothes"  className="hover:text-gray-600">Baby Clothes</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="" value="electronics" id="electronics"  onChange={handleCategoryChanged} />
            <label htmlFor="electronics"  className="hover:text-gray-600">Electronics</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="" value="Men shoes" id="menShoes"  onChange={handleCategoryChanged} />
            <label htmlFor="menShoes">Men shoes</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="" value="Women shoes" id="womenShoes"  onChange={handleCategoryChanged} />
            <label htmlFor="womenShoes"  className="hover:text-gray-600">Women shoes</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="" value="bottle" id="bottles"  onChange={handleCategoryChanged} />
            <label htmlFor="bottles"  className="hover:text-gray-600">Bottles</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="" value="Clothes" id="womenDress"  onChange={handleCategoryChanged} />
            <label htmlFor="womenDress"  className="hover:text-gray-600">Women dress</label>
          </div>
        </form>
      </div>
    </>
  );
};

export default Category;
