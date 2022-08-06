import styled from 'styled-components'

export const Wrapper = styled.div`
    padding: 5%;
   
    .page-detail {
        .name{
            font-size: 18px;
        }
        display: flex;
        align-items: center;
        flex-direction: row;
        /* flex-wrap: wrap; */
        /* gap: 1rem; */
        justify-content: space-between;
        @media screen and (max-width:768px){
            flex-direction: column;
            flex-wrap: nowrap;
            /* justify-content: center; */
        }
        .images {
            width: 50%;
            @media screen and (max-width:768px){
            width: 100%;
        }
        }
        .big-img{
            height: 270px;
            display: flex;
            align-items: center;
            overflow-y: hidden;
        }
        .small-img{
            margin: 0.5rem 0;
            display: flex;
            gap: 1rem;
            height: 170px;
            justify-content: center;
            align-items: center;
            overflow-y: hidden;
        }
        .product-details{
            width: 45%;
            @media screen and (max-width: 768px){
                width: 100%;
            }
            .price{
                color: var(--primary-color);
                font-size: 18px;
                font-weight: 500;
                padding: 8px 0;
            }
            .slash-price{
                display: flex;
                justify-content: space-between;
                padding: 4px 0;
                width: 70%;
                p{
                    text-decoration: line-through;
                    color: var(--primary-color);
                    align-self: center;
                }
            }
            .discount {
            padding: 0.5rem;
            font-weight: 500;
            color: #9E005D;
            text-align: center;
            background: #FBF35C;
            }
            .story{
                h4{
                    padding: 8px 0;
                    font-size: 18px;
                    font-weight: 600;
                    margin-top: 0.5rem;
                }
                p{
                    font-size: 16px;
                    line-height: 20px;
                }
                li {
                    padding: 0.3rem 0;
                }
                ul{
                    margin-bottom: 1rem;
                }
                button{
                    width: 100%;
                    padding: 12px;
                    margin: 1.5rem 0;
                }
                .sizes {
                    display: flex;
                    flex-wrap: wrap;
                    padding: 1rem 0;
                }
                .size{
                    background-color: #FFF5FB;
                    padding: 8px 1rem;
                    border-radius: 16px;
                    margin-right: 0.8rem;
                    margin-top: 0.5em;
                    cursor: pointer;
                }
                .colors {
                    display: flex;
                    gap: 0.5rem;
                    margin-top: 1rem;
                    padding: 0 0.5rem;
                }
                .color {
                    width: 20px;
                    height: 20px;
                    margin-right: 0.5rem;
                    background-color: #000;
                    cursor: pointer;
                }
                .size-spec {
                    border: 2px solid var(--primary-color);
                }
            }
        }
    }

    .sug-product{
        margin-top: 1rem;
    h3{
        color: #000;
        font-size: 18px;
        font-weight: 500;
    }
    .products {
        display: flex;
        flex-wrap: wrap;
        gap: 2%;
        justify-content: space-between;
        @media screen and (max-width:768px){
            /* flex-direction: column; */
            /* flex-wrap: nowrap; */
            justify-content: center;
        }
    }
    }
`;



export const Content = styled.div`

`;