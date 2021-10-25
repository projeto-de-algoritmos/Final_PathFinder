import NavDropdown from '@components/NavComponents/NavDropdown';

import * as S from './styles';

export default function DropdownMenu(props) {
  const { changeAlgo, searchAlgo } = props;
  const algoOptions = {
    dijkstra: "Dijkstra's",
    GBS: 'Greedy Best-first Search',
  };

  return (
    <S.DropdownMenu className="DropdownMenu">
      <NavDropdown
        id="algo-select"
        label="Algoritimo"
        value={searchAlgo}
        handleChange={(e) => changeAlgo(e.target.value)}
        options={algoOptions}
      />
    </S.DropdownMenu>
  );
}
