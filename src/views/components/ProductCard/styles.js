import styled from 'styled-components'

export const Wrapper = styled.div`
padding-top: 2rem;
 .product-card {
    background: rgba(255, 245, 251, 0.44);
    padding: 0.7rem;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
@media screen and (max-width: 768px) {
    width: 280px;
    margin: 0 auto;
}
@media screen and (min-width: 1080px) {
    width: 280px;
}
color: #9E005D;
.discount {
padding: 0.5rem 1rem;
margin: 1rem 0;
color: #9E005D;
text-align: center;
background: #FBF35C;
}
.product-img{
    margin: 1rem 0;
        height: 180px;
        overflow-y: hidden;
        display: flex;
        align-items: center;
    }
.price{
    font-size: 16px;
}
.product{
    padding: 5px 0;
}
.cart{
    padding: 5px 0;
    display: flex;
    justify-content: space-between;
    .slash-price{
        text-decoration-line: line-through;
    }
}
 }
`;



export const Content = styled.div`

`;