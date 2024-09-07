import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  MainContainer,
  ButtonsContainer,
  InputElement,
  Button,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

console.log(gradientDirectionsList)
// Write your code here

class GradientGenerator extends Component {
  state = {
    value: gradientDirectionsList[0].value,
    color1: ' #8ae323',
    color2: '#014f7b',
    generatedGradient: `linear-gradient(to ${gradientDirectionsList[0].value}, #8ae323, #014f7b)`,
  }

  handleColor1 = event => {
    this.setState({color1: event.target.value})
  }

  handleColor2 = event => {
    this.setState({color2: event.target.value})
  }

  onClickButton = direction => {
    this.setState({value: direction})
  }

  handleGenerate = () => {
    const {value, color1, color2} = this.state
    this.setState({
      generatedGradient: `linear-gradient(to ${value}, ${color1}, ${color2})`,
    })
  }

  render() {
    const {color1, color2, value, generatedGradient} = this.state

    return (
      <MainContainer bgColor={generatedGradient}>
        <h1>Generate a CSS Color Gradient</h1>
        <h3>Choose Direction</h3>
        <ButtonsContainer>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              onClickButton={this.onClickButton}
              active={each.value === value}
              key={each.directionId}
              data={each}
            />
          ))}
        </ButtonsContainer>
        <h3>Pick The Colors</h3>
        <div style={{display: 'flex', gap: '20px'}}>
          <div>
            <p>{color1}</p>
            <InputElement
              onChange={this.handleColor1}
              value={color1}
              color={color1}
              type="color"
            />
          </div>
          <div>
            <p>{color2}</p>
            <InputElement
              onChange={this.handleColor2}
              value={color2}
              color={color2}
              type="color"
            />
          </div>
        </div>
        <Button onClick={this.handleGenerate}>Generate</Button>
      </MainContainer>
    )
  }
}

export default GradientGenerator
