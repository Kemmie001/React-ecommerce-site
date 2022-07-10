import styled from 'styled-components'

export const Wrapper = styled.div`
  .male-collection{
    .advert{
        background: #FFF5FB;
        height: 85px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        padding: 0 5%;
    }
    .title{
        background: #9E005D;
        color: #fff;
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
    }
    .products {
        h4{
            color: #9E005D;
            padding: 0.5rem 0;
        }
        padding: 2rem 5%;
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        justify-content: center;
        
        .spec-col{
            align-self: center;
        }
        @media screen and (max-width:768px){
            justify-content: center;
            gap: 0;
        }

    }
    .link{
        padding: 2rem 0;
        display: flex;
        justify-content: center;
        gap: 8px;
        a{
            color: #000;
        }
        .icon{
            font-weight: thin;
            align-self: center;
        }
        
    }
    
  }
`;



export const Content = styled.div`

`;