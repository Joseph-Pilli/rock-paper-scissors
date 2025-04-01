import styled from 'styled-components'

export const MainBg = styled.div`
    background-color: #223a5f;
    height: 200vh;
    padding: 70px 100px;
    
    @media (max-width: 576px) and (orientation: portrait) {
        padding: 30px;
    }
`

export const Card = styled.div`
    display: flex;
    justify-content: space-between ;
    padding: 30px;
    color: white;
    border: 1px solid white;
    background-color: transparent;
    border-radius: 10px;
    font-size: 30px;
    font-weight: 500;
    font-family: Bree Serif;
    align-items: center;
`

export const MainHeading = styled.h1`
    width:80px;
    font-size: 20px;
    @media (max-width: 576px) and (orientation: portrait){
        font-size: 15px;
    }
`
export const ScoreCard = styled.div`
    border: none;
    padding-left: 60px;
    padding-right: 60px;
    background-color: white;
    font-size: 30px;
    color: #223a5f;
    text-align: center;
    border-radius: 5px;

`
export const Score = styled.p`
    margin-top: 0px;
    font-weight: bold;
    font-size: 40px;
    font-family: Roboto;
`
export const Image = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 10px;
`
export const ResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    color: white;
    
`
export const ImageContainer = styled.div`
    display: flex;
    gap: 80px;
    justify-content: center;
    align-items: center;
   
`
export const CustomButton = styled.button`
    width: 145px;
    height: 40px;
    background-color:white;
    border: none;
    border-radius: 6px;
    text-align: center;
    padding: 5px;
    font-weight: bold;
    font-size: 17px;
    margin-top: 15px;
  
  
`
export const Heading = styled.p`
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        margin-top: 0px;
        
        
`
export const CloseBox = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-top: 30px;
`
export const CloseIcon = styled.button`
    background-color: transparent;
    border: none;
    color: black;
    margin-left: auto;
    font-size: 30px;
`

export const DisplayPopContainer = styled.div`
  background-color: white; /* White background for the container */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  padding: 50px;
  width: 80%;
  margin: auto;
 
`

export const DisplayPopImage = styled.img`
  width: 80%; /* Scale image to fit inside the container */
  height: auto; /* Maintain image aspect ratio */
`
