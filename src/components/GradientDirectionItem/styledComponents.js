// Style your elements here
import styled from 'styled-components'

export const Button = styled.button`
  width: 120px;
  height: 35px;
  margin: 5px;
  border: none;
  background-color: ${props => (props.active ? 'white' : '#ededed')};
  border-radius: 6px;
  opacity: ${props => (props.active ? 1 : 0.5)};
  cursor: pointer;
  font-weight: bold;
`
