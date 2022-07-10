import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
   .banner {
    background-image:
    linear-gradient(to right, rgba(158, 0, 92, 0.4), rgba(158, 0, 92, 0.4)),
    url('/assets/banner-bg.png');
    height: calc(100vh - 200px);
    background-size: cover;
    color: #fff;
    font-weight: 500;
    padding: 0 5%;
    display: flex;
    align-items: center;
    
    .yellow{
        color: #FFF200;
        font-weight: 700;
    }
    p{
        width: 100%;
        padding-top: 1rem;
        padding-bottom: 1.5rem;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
    }
    button{
        width: 115px;
        padding: 1rem;
    }
   }
   .feats{
    padding: 0 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .feat{
        padding: 2rem 0;
        display: flex;
        .feat-img {
            width: 40px;
            margin-right: 1rem;
            img{
                width: 100%;
            }
        }
        div{
            align-self: center;
        }
        h6{
            font-size: 16px;
        }
        p{
            font-size: 14px;
        }
    }
   }
   @media screen and (min-width: 768px){
    .banner-head{
        font-size: 32px;
        width: 60%;
    }
   }
   @media screen and (min-width: 1080px){
    .banner-head{
        font-size: 48px;
        width: 70%;
    }
   
`;



export const Content = styled.div`

`;