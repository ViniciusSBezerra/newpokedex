import React, { useEffect, useState } from "react";
import axios from "axios";

import styled from "styled-components";
import { Types, TypeBug, TypeDark,
  TypeDragon, TypeElectric, TypeFairy, TypeFighting, TypeFire, TypeFlying, TypeGhost, TypeGrass, TypeGround,
  TypeIce, TypeNormal, TypePoison, TypePsychic, TypeRock, TypeSteel, TypeWater } from "./ConteinerTypesPokemon";

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
    padding: 5px;
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

    border: solid 1px white;

    border-radius: 50px;
    padding: 5px;
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

          <>
            <ContainerTypes>
              {data.data.types.map((types: any) => (
                <>{types.type.name === "grass" ? <TypeGrass>{types.type.name}</TypeGrass> : <Types>{types.type.name}</Types> &&
                types.type.name === "fire" ? <TypeFire>{types.type.name}</TypeFire> : <Types>{types.type.name}</Types> &&
                types.type.name === "poison" ? <TypePoison>{types.type.name}</TypePoison> : <Types>{types.type.name}</Types>&&
                types.type.name === "flying" ? <TypeFlying>{types.type.name}</TypeFlying> : <Types>{types.type.name}</Types>&&
                types.type.name === "bug" ? <TypeBug>{types.type.name}</TypeBug> : <Types>{types.type.name}</Types>&&
                types.type.name === "poison" ? <TypePoison>{types.type.name}</TypePoison> : <Types>{types.type.name}</Types>&&
                types.type.name === "water" ? <TypeWater>{types.type.name}</TypeWater> : <Types>{types.type.name}</Types> &&
                types.type.name === "rock" ? <TypeRock>{types.type.name}</TypeRock> : <Types>{types.type.name}</Types> &&
                types.type.name === "electric" ? <TypeElectric>{types.type.name}</TypeElectric> : <Types>{types.type.name}</Types>&&
                types.type.name === "ghost" ? <TypeGhost>{types.type.name}</TypeGhost> : <Types>{types.type.name}</Types>&&
                types.type.name === "ice" ? <TypeIce>{types.type.name}</TypeIce> : <Types>{types.type.name}</Types>&&
                types.type.name === "psychic" ? <TypePsychic>{types.type.name}</TypePsychic> : <Types>{types.type.name}</Types> &&
                types.type.name === "fairy" ? <TypeFairy>{types.type.name}</TypeFairy> : <Types>{types.type.name}</Types>&&
                types.type.name === "normal" ? <TypeNormal>{types.type.name}</TypeNormal> : <Types>{types.type.name}</Types>&&
                types.type.name === "ground" ? <TypeGround>{types.type.name}</TypeGround> : <Types>{types.type.name}</Types>&&
                types.type.name === "steel" ? <TypeSteel>{types.type.name}</TypeSteel> : <Types>{types.type.name}</Types>&&
                types.type.name === "fighting" ? <TypeFighting>{types.type.name}</TypeFighting> : <Types>{types.type.name}</Types>&&
                types.type.name === "dark" ? <TypeDark>{types.type.name}</TypeDark> : <Types>{types.type.name}</Types>&&
                types.type.name === "dragon" ? <TypeDragon>{types.type.name}</TypeDragon> : <Types>{types.type.name}</Types>
              }</>


              ))}
            </ContainerTypes>
          </>
        </CardContainer>
      ))}
    </Container>
  );
}

export default App;
