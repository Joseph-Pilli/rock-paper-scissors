import {Image, ImageContainer, CustomButton} from './styledComponents'

const ItemsContainer = props => {
  const {clickedUserChoice} = props
  const onClickRock = () => {
    clickedUserChoice('ROCK') // Passing string 'Rock'
  }

  const onClickScissor = () => {
    clickedUserChoice('SCISSORS') // Passing string 'Scissor'
  }

  const onClickPaper = () => {
    clickedUserChoice('PAPER') // Passing string 'Paper'
  }

  return (
    <ImageContainer>
      <div>
        <CustomButton
          type="button"
          onClick={onClickRock}
          data-testid="rockButton"
        >
          <Image
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png"
            alt="Rock"
            id="Rock"
          />
        </CustomButton>
        <CustomButton
          type="button"
          onClick={onClickScissor}
          data-testid="scissorsButton"
        >
          <Image
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png"
            alt="Scissor"
            id="Scissor"
          />
        </CustomButton>
      </div>
      <CustomButton
        type="button"
        onClick={onClickPaper}
        data-testid="paperButton"
      >
        <Image
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png"
          alt="Paper"
          id="Paper"
        />
      </CustomButton>
    </ImageContainer>
  )
}

export default ItemsContainer
