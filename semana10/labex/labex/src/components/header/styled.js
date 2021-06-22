import styled from "styled-components";

export const Main = styled.div`
    width: 100%;
    background-color: #303030;

    display: flex;
    align-items: center;
    justify-content: space-between;

    img:hover {
        cursor: pointer;
    }

    button {
        margin-right: 20px;
    }

    p {
        padding-right: 20px;
    }
`
export const Logo = styled.img`
    width: 130px;
    margin: 10px 0 10px 20px;
`
export const UserLoggin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`


