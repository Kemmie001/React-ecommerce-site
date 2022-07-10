import styled from 'styled-components'

export const Wrapper = styled.div`
padding-top: 1.5rem;
 .collection-card {
    background: #FFF5FB;
    width: 300px;
    padding: 10px;
    color: #9E005D;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    @media screen and (max-width: 768px) {
        width: 100%;
    }
    .discount {
    padding: 0.8rem 1rem;
    width: 125px;
    margin: 0.5rem 0;
    color: #9E005D;
    text-align: center;
    background: #FBF35C;
    }
    .price{
        font-size: 16px;
        padding-top: 2px;
    }
    .product-img{
        margin: 1rem 0;
        width: 100%;
        height: 220px;
        overflow-y: hidden;
        display: flex;
        align-items: center;
    }
    .slash-price{
        padding: 4px 0;
        align-self: center;
        text-decoration-line: line-through;
    }
    
 }
`;



export const Content = styled.div`

`;