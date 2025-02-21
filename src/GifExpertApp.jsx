import { useState } from "react";
import { AddCategory,GifGrid} from "./components/";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Nuit']);

    const onAddCategory = (category) =>{
        if (categories.includes(category) )return;
        setCategories( [...categories,category] );
    }


  return (
    <>
    <div className="container text-center">
        {/* Titulo */}
        <h1>GifExpertApp</h1>
        {/* Input */}
        <div className="row justify-content-md-center">
          <AddCategory 
           // onAddCategory={setCategories}  
           onNewCategory={event => onAddCategory(event)}
          ></AddCategory>
        </div>
        {/* Listado de Gif */}
        <div className="row g-2">
          {categories.map( category =>  
            <GifGrid key={category} category={category}></GifGrid>
          )}
        </div>
            {/* Gif Item */}
    </div>

    </>
  )
}

