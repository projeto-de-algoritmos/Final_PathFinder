import NavButton from '@components/NavComponents/NavButton';

import * as S from './styles';

export default function ControlButtons(props) {
  const { generateMaze, resetSearch, removeWalls } = props;
  return (
    <S.ControlButtons>
      <NavButton text="Gerar Labirinto" clicked={generateMaze} />
      <NavButton text="Reset" clicked={resetSearch} />
      <NavButton text="Remover Paredes" clicked={removeWalls} />
    </S.ControlButtons>
  );
}
