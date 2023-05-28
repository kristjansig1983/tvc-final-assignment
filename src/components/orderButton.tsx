import styled from 'styled-components'

interface OrderButtonProps {
  selected?: boolean
}

export const OrderButton = styled.button<OrderButtonProps>`
  justify-self: center;
  height: 50px;
  width: 130px;
  color: white;
  background-color: ${({ selected }) => (selected ? '#1d1c1c' : '#2F2E2E')};
  color: ${({ selected }) => (selected ? 'white' : 'white')};
  border: 3px solid var(--clr-primary);
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 30px;
  border-radius: 20px;
  font-family: 'Varela Round';
  font-size: medium;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #1d1c1c;
    color: white;
  }
`
