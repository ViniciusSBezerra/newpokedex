import React, { useEffect, useState } from "react";

import axios from "axios";

import styled from "styled-components";
import { SearchPokemon } from "./components/searchPokemon/SearchPokemon";

function App() {
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
  }, []);

  if (!kantoPokemons) return <p>Carregando...</p>;

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
  `;

  const ImagePokemon = styled.img``;

  const NamePokemon = styled.p`
    font-size: 18px;
    color: white;

    font-family: sans-serif;
  `;
  const TypePokemon = styled.p`
    width: 100%;
    font-size: 14px;
    color: white;
    display: flex;
    justify-content: space-evenly;
    font-family: sans-serif;
  `;

  const ContainerTypes = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
  `;
  return (
    <Container>

      {kantoPokemons.map((data: any) => (
        <CardContainer key={data.data.name}>
          <ImagePokemon
            src={data.data.sprites.front_default}
            alt={data.data.name}
          />

          <NamePokemon>{data.data.name}</NamePokemon>

          <div>
            <ContainerTypes>
              {data.data.types.map((types: any) => (
                <TypePokemon>{types.type.name}</TypePokemon>
              ))}
            </ContainerTypes>
          </div>
        </CardContainer>
      ))}
    </Container>
  );
}

export default App;
