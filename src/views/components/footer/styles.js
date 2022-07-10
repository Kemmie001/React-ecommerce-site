import styled from 'styled-components'

export const Wrapper = styled.div`
  .footer{
    padding: 5%;
    background-color: var(--primary-color);
    color: #fff;
    h4{
        font-size: 20px;
        font-weight: 600;
        padding: 1rem 0;
    }
    a{
        font-weight: 200;
        color: #fff;
        text-decoration: none;
        padding-bottom: 1rem;
    }
    .section1{
        display: flex;
        justify-content: space-between;
        /* flex-wrap: wrap; */
        gap: 1rem;
        @media screen and (max-width: 768px) {
            flex-direction: column;
        }
        div{
            display: flex;
            flex-direction: column;
        }
        .form-group{
            input{
                border: 1px solid #FFEA05;
                border-radius: 4px;
                margin: 0.5rem 0;
                background-color: transparent;
                padding: 0.7rem 4px;
                outline: none;
                color: #fff;
                font-size: 1rem;
            }
            button{
                width: 120px;
                padding: 0.7rem 0;
                margin-bottom: 1rem;
            }
        }
    }
    .section2{
        display: flex;
        justify-content: space-between;
        margin-top: 5%;
        gap: 1rem;
        @media screen and (max-width: 768px) {
            margin-top: 0;
            flex-direction: column;
        }
        div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            
        }
        .mid{
            width: 33%;
            margin: 0 auto;
            @media screen and (max-width: 768px) {
            width: 100%;
        }
        }
        .social-link{
            display: flex;
            gap: 1rem;
        }
        button{
            width: 130px;
            margin-top: 1rem;
        }
        p{
            font-size: 14px;
            line-height: 24px;
        }
        span{
            padding-bottom:0.5rem;
        }
    }
  }
`;



export const Content = styled.div`

`;