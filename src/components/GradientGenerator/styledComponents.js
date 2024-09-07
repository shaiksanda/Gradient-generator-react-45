// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background: ${props => props.bgColor};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: white;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const InputElement = styled.input`
  width: 80px;
  height: 40px;
  cursor: pointer;
  background-color: ${props => props.color};
  border: none;
  border-radius: 8px;
  outline: none;
  -webkit-appearance: none;
`
export const Button = styled.button`
  width: 120px;
  height: 35px;
  margin: 5px;
  border: none;
  background-color: skyblue;
  border-radius: 6px;
  margin-top: 30px;
  color: white;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
`
