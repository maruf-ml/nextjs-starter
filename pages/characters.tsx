import Link from 'next/link';
import { nanoid } from 'nanoid';
import { GetServerSideProps, NextPage } from 'next';

import wrapper, { useAppDispatch } from '@store/.';
import useAppSelector from '@hooks/useAppSelector';

import { getCharacters, searchCharacter } from '@utils/redux/slices/characters';

const CharactersPage: NextPage = () => {
  const characters = useAppSelector(state => state.characters.characters);

  const dispatch = useAppDispatch();

  const handleChange = e => {
    dispatch(searchCharacter(e.target.value));
  };

  return (
    <div>
      <h3>characters</h3>

      <input type='text' placeholder='Search' onChange={handleChange} />

      {characters.data.map(character => (
        <p key={character.name}>{character.name}</p>
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  store => async context => {
    console.log('get character props');
    await store.dispatch(getCharacters());

    return {
      props: {},
    };
  },
);

export default CharactersPage;
