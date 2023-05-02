import styled, { css } from 'styled-components'

export const MenuButton = styled.button`
  height: 50px;
  width: 130px;
  background-color: #4c19a3;
  color: var(--clr-primary);
  border: 3px solid var(--clr-primary);
  margin-left: 30px;
  margin-right: 30px;
  border-radius: 20px;
  font-family: 'Varela Round';
  font-size: medium;
  font-weight: bold;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: var(--clr-hover);
  }
`
