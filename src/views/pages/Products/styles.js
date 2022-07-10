import styled from 'styled-components'

export const Wrapper = styled.div`
    padding: 7% 5%;
    .category-product{
    h3{
        color: var(--primary-color);
        font-size: 18px;
    }
    .products {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: space-between;
        @media screen and (max-width:768px){
            flex-direction: column;
            flex-wrap: nowrap;
            /* justify-content: center; */
        }
    }

    .link{
        padding-top: 2.5rem;
        padding-bottom: 3rem;
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