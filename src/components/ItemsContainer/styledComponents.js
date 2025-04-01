import styled from 'styled-components'

export const Image = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 10px;
`

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: ${props => (props.cond ? 'row' : 'column')};
    align-items: center;
    justify-content: center;
    margin-top: 100px
`
export const CustomButton = styled.button`
    background-color: transparent;
    border: none;
`
