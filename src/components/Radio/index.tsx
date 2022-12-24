import * as S from './styles';

interface ChekboxProps {
  label: string;
  name: string;
}

export const Radio = ({ label, name }: ChekboxProps) => {
  return (
    <S.Label htmlFor={label}>
      <input type="radio" id={label} name={name} value={label} />
      <span>{label}</span>
    </S.Label>
  );
};
