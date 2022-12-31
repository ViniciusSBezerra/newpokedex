import React, { useEffect, useState } from "react";
import axios from "axios";

import styled from "styled-components";
import { ImagePokemon } from "./imagePokemon/ImagePokemon";
import { NamePokemon } from "./namePokemon/NamePokemon";
import { TypePokemon } from "./typePokemon/TypePokemon";


export const CardPokemon = () => {
  const [kantoPokemons, setKantoPokemons] = useState<[]>();
  const KantoPokemons = () => {
    let idPokemon = [];

    for (let i = 1; i <= 150; i++) {
      idPokemon.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }

    axios
      .all(idPokemon.map((urls) => axios.get(urls)))
      .then((res: any) => setKantoPokemons(res));
  };

  useEffect(() => {
    KantoPokemons();
  }, [kantoPokemons]);

  if (!kantoPokemons) return <h1>Carregando...</h1>

  const Container = styled.div`
    width: 100%;
    display: flex;

    justify-content: center;

    flex-wrap: wrap;
    gap: 25px;
  `;
  const CardContainer = styled.div`
    width: 150px;

    background-color: #1f1d1d;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 5px;
  `;


  const ContainerTypes = styled.div`
    display: flex;
    width: 100% ;
    gap: 10px;
  `
  return (

    <Container>
      {kantoPokemons.map((data: any) => (
        <CardContainer key={data.data.name}>

          <ImagePokemon image={data.data.sprites.front_default} alt={data.data.name} />
          <NamePokemon name={data.data.name} />
          <ContainerTypes>
            {data.data.types.map((types: any) => (
              <TypePokemon key={types.type.name} type={types.type.name} />
            ))}

          </ContainerTypes>
        </CardContainer>
      ))}
    </Container>
  );
}

export default CardPokemon;
