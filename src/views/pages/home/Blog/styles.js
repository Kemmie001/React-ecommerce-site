import styled from 'styled-components'

export const Wrapper = styled.div`
  .blog{
    .title{
        background: #9E005D;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
    }
 .posts{
    padding: 0 5%;
    display: flex;
    gap: 40px;
    margin: 0 auto;
    width: fit-content;
    @media screen and (max-width: 768px){
        display: block;
    }
 }
  .features{
    margin-top: 5%;
    padding: 2rem 5%;
    text-align: center;
    color: #9E005D;
    h3{
      font-size: 18px;
    }
    div{
      padding: 0.5rem 0;
      display: flex;
      justify-content: space-between;
      .feature{
        width: 27%;
        align-self: center;
      }
    }
  }
  }
`;



export const Content = styled.div`

`;