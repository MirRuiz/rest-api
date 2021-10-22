import { Character } from './character.api-model';
// import { Lookup } from 'common/models';
// import { mockCities, mockHotelCollection } from './hotel.mock-data';
// import { RepeatOneSharp } from '@material-ui/icons';

export const getCharacter = (id: number): Promise<Character> => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`).then((response) => response.json())
}



export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
