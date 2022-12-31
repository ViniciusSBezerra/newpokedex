
import React from "react"

import styled from "styled-components"

import {
  Types, TypeBug, TypeDark,
  TypeDragon, TypeElectric, TypeFairy, TypeFighting, TypeFire, TypeFlying, TypeGhost, TypeGrass, TypeGround,
  TypeIce, TypeNormal, TypePoison, TypePsychic, TypeRock, TypeSteel, TypeWater
} from "./ConteinerTypesPokemon";

interface TypePokemon {
  type: string
}
export const TypePokemon = ({ type }: TypePokemon) => {
  const Types = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;
  `;

  return <Types>

    {type === "grass" ? <TypeGrass>{type}</TypeGrass> : <Types>{type}</Types> &&
      type === "fire" ? <TypeFire>{type}</TypeFire> : <Types>{type}</Types> &&
        type === "poison" ? <TypePoison>{type}</TypePoison> : <Types>{type}</Types> &&
          type === "flying" ? <TypeFlying>{type}</TypeFlying> : <Types>{type}</Types> &&
            type === "bug" ? <TypeBug>{type}</TypeBug> : <Types>{type}</Types> &&
              type === "poison" ? <TypePoison>{type}</TypePoison> : <Types>{type}</Types> &&
                type === "water" ? <TypeWater>{type}</TypeWater> : <Types>{type}</Types> &&
                  type === "rock" ? <TypeRock>{type}</TypeRock> : <Types>{type}</Types> &&
                    type === "electric" ? <TypeElectric>{type}</TypeElectric> : <Types>{type}</Types> &&
                      type === "ghost" ? <TypeGhost>{type}</TypeGhost> : <Types>{type}</Types> &&
                        type === "ice" ? <TypeIce>{type}</TypeIce> : <Types>{type}</Types> &&
                          type === "psychic" ? <TypePsychic>{type}</TypePsychic> : <Types>{type}</Types> &&
                            type === "fairy" ? <TypeFairy>{type}</TypeFairy> : <Types>{type}</Types> &&
                              type === "normal" ? <TypeNormal>{type}</TypeNormal> : <Types>{type}</Types> &&
                                type === "ground" ? <TypeGround>{type}</TypeGround> : <Types>{type}</Types> &&
                                  type === "steel" ? <TypeSteel>{type}</TypeSteel> : <Types>{type}</Types> &&
                                    type === "fighting" ? <TypeFighting>{type}</TypeFighting> : <Types>{type}</Types> &&
                                      type === "dark" ? <TypeDark>{type}</TypeDark> : <Types>{type}</Types> &&
                                        type === "dragon" ? <TypeDragon>{type}</TypeDragon> : <Types>{type}</Types>
    }
  </Types>

}


