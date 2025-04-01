import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import ItemsContainer from '../ItemsContainer'
import {
  MainBg,
  ScoreCard,
  Card,
  Score,
  Image,
  ResultContainer,
  ImageContainer,
  CustomButton,
  Heading,
  CloseBox,
  CloseIcon,
  DisplayPopImage,
  DisplayPopContainer,
  MainHeading,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class MainContainer extends Component {
  state = {
    selectedChoice: null,
    randomChoice: null,
    isDisplay: true,
    count: 0, // Track score
    result: '',
  }

  clickedUserChoice = id => {
    const selectedChoice = choicesList.find(eachChoice => eachChoice.id === id)
    const index = Math.floor(Math.random() * 3)
    const randomChoice = choicesList[index]
    if (selectedChoice.id === randomChoice.id) {
      this.setState({result: 'IT IS DRAW'})
    } else if (
      (selectedChoice.id === 'PAPER' && randomChoice.id === 'ROCK') ||
      (selectedChoice.id === 'ROCK' && randomChoice.id === 'SCISSORS') ||
      (selectedChoice.id === 'SCISSORS' && randomChoice.id === 'PAPER')
    ) {
      this.setState(prevState => ({
        count: prevState.count + 1,
        result: 'YOU WON', // Increase score when user wins
      }))
    } else {
      this.setState(prevState => ({
        count: prevState.count - 1,
        result: 'YOU LOSE',
      }))
    }

    this.setState({selectedChoice, randomChoice, isDisplay: false})
  }

  renderSelectedChoice = () => {
    const {selectedChoice} = this.state
    if (!selectedChoice) return null
    return (
      <Image
        src={selectedChoice.imageUrl}
        alt="your choice"
        id={selectedChoice.id}
      />
    )
  }

  renderRandomImage = () => {
    const {randomChoice} = this.state
    return (
      <Image
        src={randomChoice.imageUrl}
        alt="opponent choice"
        id={randomChoice.id}
      />
    )
  }

  renderPopUp = () => (
    <CloseBox>
      <Popup modal trigger={<CustomButton type="button">Rules</CustomButton>}>
        {close => (
          <>
            <DisplayPopContainer>
              <CloseIcon
                type="button"
                className="trigger-button"
                onClick={() => close()}
              >
                <RiCloseLine />
              </CloseIcon>
              <DisplayPopImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </DisplayPopContainer>
          </>
        )}
      </Popup>
    </CloseBox>
  )

  // Reset the game for "Play Again"
  playAgain = () => {
    this.setState({selectedChoice: null, randomChoice: null, isDisplay: true})
  }

  render() {
    const {isDisplay, count, result} = this.state
    return (
      <MainBg>
        <Card>
          <MainHeading>
            <h1>Rock Paper Scissors</h1>
          </MainHeading>
          <ScoreCard>
            <p>Score</p>
            <Score>{count}</Score>
          </ScoreCard>
        </Card>
        {isDisplay ? (
          <ItemsContainer clickedUserChoice={this.clickedUserChoice} />
        ) : (
          <ResultContainer>
            <ImageContainer>
              <div>
                <Heading>YOU</Heading>
                {this.renderSelectedChoice()}
              </div>
              <div>
                <Heading>OPPONENT</Heading>
                {this.renderRandomImage()}
              </div>
            </ImageContainer>
            <Heading>{result}</Heading>
            <CustomButton type="button" onClick={this.playAgain}>
              PLAY AGAIN
            </CustomButton>
          </ResultContainer>
        )}
        {this.renderPopUp()}
      </MainBg>
    )
  }
}

export default MainContainer
