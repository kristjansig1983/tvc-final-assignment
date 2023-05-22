import styled from 'styled-components'

interface MenuButtonProps {
  selected?: boolean
}

export const MenuButton = styled.button<MenuButtonProps>`
  height: 50px;
  width: 130px;
  color: white;
  background-color: ${({ selected }) =>
    selected ? 'var(--clr-selected)' : '#100f0f'};
  color: ${({ selected }) => (selected ? 'white' : 'white')};
  border: 3px solid var(--clr-primary);
  margin-left: 30px;
  margin-right: 30px;
  border-radius: 20px;
  font-family: 'Varela Round';
  font-size: medium;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: var(--clr-hover);
    color: white;
  }
`
