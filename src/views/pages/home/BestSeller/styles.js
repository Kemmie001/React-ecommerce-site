import styled from 'styled-components'

export const Wrapper = styled.div`
  .best-seller{
    .title{
        background: linear-gradient(95.27deg, #9E005D 14.36%, rgba(182, 6, 64, 0) 162.44%);
        color: #fff;
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
    }
    .products {
        padding: 0 5%;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: space-between;
        @media screen and (max-width:768px){
            justify-content: center;
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