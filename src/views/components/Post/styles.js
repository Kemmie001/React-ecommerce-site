import styled from 'styled-components'

export const Wrapper = styled.div`
  .post{
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    padding: 2rem 1rem;
    background: linear-gradient(194.26deg, #FFF5FB 10.13%, rgba(255, 245, 251, 0) 77.83%);
    border: 1px solid #9E005D;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    .post-title{
        align-self: center;
       
    }
    h5{
        font-size: 18px;
        font-weight: 500;
        padding-bottom: 1rem;
        color: #9E005D;
    }
    .link{
        display: flex;
        align-items: center;
    }
    a{
        padding-right: 3px;
        font-weight: 500;
        color: #000;
    }
    .post-img{
            width: 250px;
            align-self: center;
        }
  }
`;



export const Content = styled.div`

`;