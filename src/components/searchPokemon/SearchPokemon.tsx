import React from "react";

export const SearchPokemon = () => {


  const onChangeInput = (e: any) =>{



  }
  return (
    <div>
      <input type="text" name="searchPokemon" id="searchPokemon" onChange={onChangeInput} />
    </div>
  );
};
