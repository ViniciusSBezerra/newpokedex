
import styled from "styled-components";

interface NamePokemon {
  name: string
}

export const NamePokemon = ({ name }: NamePokemon) => {
  const NamePokemon = styled.p`
    font-size: 18px;
    color: white;

    font-family: sans-serif;
  `;

  return (
    <NamePokemon>{name}</NamePokemon>
  )

}
