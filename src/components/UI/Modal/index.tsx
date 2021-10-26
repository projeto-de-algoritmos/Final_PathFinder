import * as S from './styles';

export default function Modal({ children, modalOpen, clicked }) {
  return (
    <>
      {modalOpen && (
        <S.Modal className="Modal" onClick={clicked}>
          {children}
        </S.Modal>
      )}
    </>
  );
}
