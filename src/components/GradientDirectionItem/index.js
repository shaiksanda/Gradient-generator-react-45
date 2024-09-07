// Write your code here
import {Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {data, active, onClickButton} = props

  const {displayText, value} = data

  const handleButtonClick = () => {
    onClickButton(value)
  }

  return (
    <div>
      <Button onClick={handleButtonClick} active={active} type="button">
        {displayText}
      </Button>
    </div>
  )
}

export default GradientDirectionItem
