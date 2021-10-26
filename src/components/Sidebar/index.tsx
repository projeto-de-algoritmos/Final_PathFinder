/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import ControlButtons from '@components/ControlButtons';
import DropdownMenu from '@components/DropdownMenu';
import Modal from '@components/UI/Modal';

import * as S from './styles';

export default function Sidebar(props) {
  const {
    toggleSidebar,
    isOpen,
    searchSpeed,
    changeSpeed,
    changeAlgo,
    searchAlgo,
    reset,
    resetSearch,
    removeWalls,
    generateMaze,
    toggleHelp,
  } = props;
  return (
    <>
      <Modal clicked={toggleSidebar} modalOpen={isOpen}>
        <></>
      </Modal>
      <S.Sidebar
        className={isOpen ? 'Sidebar Sidebar-open' : 'Sidebar Sidebar-closed'}
      >
        <div className="Sidebar-header">
          <button className="Sidebar-backbutton" onClick={toggleSidebar} />
        </div>
        <div className="Sidebar-items">
          <DropdownMenu
            searchSpeed={searchSpeed}
            changeSpeed={changeSpeed}
            changeAlgo={changeAlgo}
            searchAlgo={searchAlgo}
          />
          <ControlButtons
            reset={reset}
            resetSearch={resetSearch}
            removeWalls={removeWalls}
            generateMaze={generateMaze}
            toggleHelp={toggleHelp}
          />
        </div>
      </S.Sidebar>
    </>
  );
}
