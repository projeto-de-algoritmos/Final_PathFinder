/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import * as S from './styles';

export default function NavDropdown(props) {
  const { id, value, handleChange, options, label } = props;
  const getOptions = () => {
    const optionVals = [];
    for (const key in options) {
      optionVals.push(
        <option key={key} value={key}>
          {options[key]}
        </option>
      );
    }
    return optionVals;
  };

  return (
    <>
      <S.NavDropdownLabel className="NavDropdown-label" htmlFor={id}>
        {`${label}:`}
      </S.NavDropdownLabel>
      <S.NavDropdown className="NavDropdown">
        <select id={id} value={value} onChange={handleChange}>
          {getOptions()}
        </select>
      </S.NavDropdown>
    </>
  );
}
