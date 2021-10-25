import * as S from './styles';

export default function NavButton({ text, clicked }) {
  return (
    <S.NavButton className="NavButton" onClick={clicked}>
      {text}
    </S.NavButton>
  );
}
