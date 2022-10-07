import styled from 'styled-components'

export const Wrapper = styled.div`
  .profile{
    display: flex;
    .sidebar{
        background-color: var(--primary-color);
        color: #fff;
        height: 100vh;
        padding-top: 1rem;
        ul{
            margin: 0 1rem;
            li{
                display: flex;
                gap: 0.5rem;
                font-size: 16px;
                cursor: pointer;
                img{
                    width: 120px;
                    background-color: #fff;
                    margin-bottom: 1.5rem;
                }
                font-weight: 500;
                margin-top: 2rem;
                p {
                    
                    padding-right: 16px;
                }
            }
            
        }
    }
    h3{
        color: var(--primary-color);
        padding-top: 1rem;
        padding-bottom: 0.5rem;
        font-size: 22px;
        font-weight: 500;
    }
    h4{
        font-weight: 400;
        padding: 0.8rem 0;
    }
    span{
        display: flex;
        align-items: center;
        gap: 10px;
    }
    i{
        width: 30px;
        height: 30px;
        border-radius: 100%;
        background-color: #fff;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        display: flex;
        align-items: center;
        
        justify-content: center;
        color: var(--primary-color);
    }
    .account-overview{
        display: flex;
        gap: 32px;
        flex-wrap: wrap;
        .account{
            padding: 1rem ;
            border-radius: 10px;
        background-color: #fff;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        }
    }
    .orders{
        ul{
            li{
                display: flex;
                justify-content: space-between;
                width: 100%;
                align-items: center;
                border: 1px solid #c4c4c4;
                padding: 1rem;
                border-radius: 10px;
                margin: 1rem 0;
                .order-detail{
                    display: flex;
                   
                }
                img{
                    width: 150px;
                    height: 150px;
                    border-radius: 10px;
                }
                span{
                    font-weight: 600;
                    font-size: 17px;
                    text-transform: capitalize;
                }
            }
        }
        .order-info{
            align-self: center;
            padding-left: 1rem;
            h4{
                font-family: 20px;
                font-weight: 500; 
            }
            h6{
                font-family: 16px;
                font-weight: 450;
                padding-top: 0.5rem;
            }
        }
    }
    .address-book{
        width: 50%;
    }
    .details{
        margin: 2rem 5%;
        width: 70%;
        input{
            display: block;
            width: 100%;
            border: 1px solid #ccc;
            padding: 0.7rem 5px;
            margin-top: 2em;
            outline: none;
            border-radius: 4px;
        }
        .btn{
            padding: 2rem 0;
            width: 200px;
            button{
                width: 100%;
            }
            .btn-next{
                border: 1px solid #FBF35C;
            }
        }
    }
  }
`;



export const Content = styled.div`

`;