import styled from 'styled-components'

export const Wrapper = styled.div`
  .checkout{
    padding: 5%;
    display: flex;
        flex-direction: row;
        /* flex-wrap: wrap; */
        /* gap: 1rem; */
        justify-content: space-between;
        @media screen and (max-width:768px){
            flex-direction: column;
            flex-wrap: nowrap;
            /* justify-content: center; */
        }
        .cart{
            color: var(--primary-color);
        }
        .checkout-input{
            width: 50%;
            padding: 2rem 1rem;
            background-color: #FFF5FB;
            @media screen and (max-width:768px){
            width: 100%;
        }
            h3{
                font-size: 18px;
                font-weight: 600;
            }
            .nav{
                padding: 0.5rem 0;
                div{
                    display: flex;
                    flex-wrap: wrap;
                }
                .checkout-link{
                    display: flex;
                    align-items: center;
                    color: #000;
                    cursor: pointer;
                    .icon{
                        font-size: 10px;
                        margin: 0 0.5rem;
                    }
                }
                .link{
                    color: var(--primary-color);
                }
            }
            .user{
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                padding: 1.5rem 0;
            }
            .news{
                display: flex;
                gap: 0.5rem;
                padding-bottom: 1rem;
            }
            h5{
                font-size: 18px;
                font-weight: 600;
                padding: 1rem 0;
            }
            form{
                input{
                    border: 1px solid #c4c4c4;
                    padding: 1rem 5px;
                    margin-top: 1rem;
                    width: 100%;
                    background-color: transparent;
                    outline: none;
                }
                div{
                    display: flex;
                    gap: 0.5rem;
                }
                .btn{
                    padding: 1rem 0;
                    button{
                        width: 100%;
                    }
                    .btn-next{
                        border: 1px solid #FBF35C;
                    }
                }
                section{
                    margin-top: 2rem;
                }
                article{
                    position: relative;
                    p{
                        position: absolute;
                        font-size: 12px;
                        right: 10px;
                        top: 2rem;
                        color: var(--primary-color);
                    }
                    .price{
                        font-weight: 500;
                    }
                }
            }
        }
        .order-bg{
            width: 45%;
            padding:5% 3%;
            background-color: #FAFAFA;
            @media screen and (max-width:768px){
            width: 100%;
            margin-top: 1.5rem;
        }
            .order{
                display: flex;
                gap: 1rem;
                width: 100%;
                margin-bottom: 1rem;
                /* margin: 1rem 0; */
                .order-img{
                    width: 120px;
                }
                .order-detail{
                    width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            }
            .sub-total{
                display: flex;
                justify-content: space-between;
                margin-top: 2rem;
                padding: 1rem 0;
                border-top: 1px solid var(--primary-color);;
            }
        }
        input[type=email],
        input[type=tel],
        input[type=text]{
                width: 80%;
                margin-right: 10px;
                padding: 10px 10px;
                border: 1px solid #c4c4c4;
                border-radius: 4px;
                outline: none;
                margin-top: 1rem;
        }
        .btn{
            margin-top:1.5rem;
        }
  }
`;



export const Content = styled.div`

`;