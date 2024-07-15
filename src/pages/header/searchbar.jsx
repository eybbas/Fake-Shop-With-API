import { observer } from "mobx-react";
import MobxSearch from "./MobxSearch";
import { Link } from "react-router-dom";
import './searchbar.css'


const SearchBar = observer(() =>  {

  return (
  <>
    <div className="search-result-div">
        {MobxSearch.newState.map((product) => {
                return(
                  <Link to={`/products/${product.id}`} className='link-to-product-page' >
                    <div className='search-result-card-div'>
                        <div className='search-result-info-div'>
                          <span className='search-result-name-span'>{product.title}</span>
                        </div>
                      </div>
                  </Link>
                )
              })}  
    </div>
  </>
  );
})

export default SearchBar;