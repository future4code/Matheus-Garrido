import styled from "styled-components";
import backGroundImg from "../../img/ListTripsPage.png"

export const Main = styled.div`
    background-image: url(${backGroundImg});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
`
export const GridTrips = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    column-gap: 20px;
    row-gap: 20px;
    padding: 50px 30px;
    position: relative;
`

export const CardTrip = styled.div`
    border-radius: 30px;
    height: 100%;
    background-color: #858585; 
    display: grid;
    grid-template-rows: 135px 1fr 80px;
`

export const PicAndButton = styled.div`
    padding: 10px 0 10px 20px;
`
export const DetailsTrip = styled.div`
    padding: 5px;
`
export const ButtonSubm = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 0 20px 0;
`