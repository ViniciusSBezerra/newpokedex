import React from "react";
import styled from "styled-components";

interface ImagePokemon {
  image: string
  alt: string
}

export const ImagePokemon = ({ image, alt }: ImagePokemon) => {
  const ImagePokemon = styled.img`

  `;
  return <ImagePokemon src={image} alt={alt}></ImagePokemon>
}
