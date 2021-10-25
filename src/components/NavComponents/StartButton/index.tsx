/* eslint-disable react/button-has-type */
import * as S from './styles';

export default function StartButton({ text, isDark, clicked }) {
  return (
    <S.StartButton
      className={isDark ? 'StartButton Dark' : 'StartButton Light'}
      onClick={clicked}
    >
      {text}
    </S.StartButton>
  );
}
