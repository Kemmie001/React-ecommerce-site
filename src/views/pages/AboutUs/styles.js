import styled from 'styled-components'

export const Wrapper = styled.div`
 .about{
    padding-top: 4%;
    color: var(--primary-color);
    .about-title {
        background-color: #FFF5FB;
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
        
        h4{
            font-size: 18px;
            font-weight: 500;
        }
    }
    .about-story{
        padding: 10% 5%;
        line-height: 25px;
    }
    .partner{
        padding: 8% 5%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .partner-logo{
            width: 13%;
        }
    }
 }
`;



export const Content = styled.div`

`;