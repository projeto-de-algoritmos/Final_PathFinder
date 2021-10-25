import ControlButtons from '@components/ControlButtons';
import DropdownMenu from '@components/DropdownMenu';
import NavButton from '@components/NavComponents/NavButton';
import StartButton from '@components/NavComponents/StartButton';

import * as S from './styles';

export default function Navbar(props) {
  const {
    visualize,
    reset,
    removeWalls,
    searchSpeed,
    changeSpeed,
    resetSearch,
    changeAlgo,
    searchAlgo,
    generateMaze,
    toggleHelp,
    toggleSidebar,
  } = props;

  return (
    <S.Navbar className="Navbar">
      <S.NavbarLeft className="Navbar-left">
        <S.Logo className="Navbar-logo">Pathfinder</S.Logo>
        <div className="Navbar-dropdowns">
          <DropdownMenu
            searchSpeed={searchSpeed}
            changeSpeed={changeSpeed}
            changeAlgo={changeAlgo}
            searchAlgo={searchAlgo}
          />
        </div>
      </S.NavbarLeft>
      <StartButton text="Iniciar" isDark clicked={visualize} />
      <S.ButtonContainer className="Navbar-button-container">
        <ControlButtons
          reset={reset}
          resetSearch={resetSearch}
          removeWalls={removeWalls}
          generateMaze={generateMaze}
          toggleHelp={toggleHelp}
        />
      </S.ButtonContainer>
      <S.ButtonsContainerMobile className="Navbar-button-container-mobile">
        <NavButton text="Menu" clicked={toggleSidebar} />
      </S.ButtonsContainerMobile>
    </S.Navbar>
  );
}
