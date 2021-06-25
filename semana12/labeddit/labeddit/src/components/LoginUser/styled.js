import styled from 'styled-components'
import {textPrimaryColor} from '../../constants/colors'

export const InputsContainer = styled.div`
    max-width: 400px;
    width: 80vw;
    padding: 20px;
`
export const ButtonSignUp = styled.div`
    max-width: 400px;
    width: 80vw;
    padding: 20px;
`

export const PresentationContainer = styled.div`
    max-width: 400px;
    width: 80vw;
    color: ${textPrimaryColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    img {
        max-width: 400px;
        width: 80vh;
    }
`

