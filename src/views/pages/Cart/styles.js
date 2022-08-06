import styled from 'styled-components'

export const Wrapper = styled.div`
padding-top: 2rem;
.title {
    padding: 0 5%;
    font-weight: 500;
    font-size: 18px;
}
table {
  font-family: arial, sans-serif;
  border-spacing:  0px 24px;
  width: 100%;
}

td, th {
  text-align: left;
  padding: 30px 5%;
}

.product {
  background-color: #FFF5FB; 
  .shoe{
    display: flex;
    gap: 10px;
    .shoe-img{
        width: 75px;
    }
    .shoe-name{
        align-self: center;
    }
  }
  .quantity{
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 5px;
    span{
        display: flex;
        gap: 2rem;
        padding: 7px;
        border: 1px solid #000;
    }
  }

}
.end{
    text-align: right;
 }
.total{
    display: flex;
    justify-content: end;
    align-items: flex-end;
    padding: 1rem 5%;
    .subtotal{
        h3{
        color: var(--primary-color);
        font-size: 18px;
        font-weight: 400;
        padding-bottom: 10px;
    }
        display: flex;
        justify-content: space-between;
        
    }
    button {
            width: 100%;
            margin: 1rem 0;
        }
  }
  .sug-product{
     padding: 5%;
    h3{
        color: #000;
        font-size: 18px;
        font-weight: 500;
    }
    .products {
        display: flex;
        flex-wrap: wrap;
        /* gap: 1rem; */
        justify-content: space-between;
        @media screen and (max-width:768px){
            flex-direction: column;
            flex-wrap: nowrap;
            /* justify-content: center; */
        }
    }
    }
    .cart-empty{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 50vh;
        span{
            padding-top: 0.5rem;
            display: flex;
            align-items: center;
            gap: 0.3rem;
            color: var(--primary-color);
        }
    }
`;



export const Content = styled.div`

`;