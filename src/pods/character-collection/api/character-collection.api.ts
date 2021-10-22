import { CharacterEntityApi } from './character-collection.api-model';

export const getCharacterCollection = (): Promise<CharacterEntityApi[]> => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => data.results);
};
