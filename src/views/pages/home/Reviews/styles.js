import styled from 'styled-components'

export const Wrapper = styled.div`
.review-sect{
    .title{
        background: #9E005D;
        color: #fff;
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
    }
    .reviews{
        padding: 6% 5%;
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        justify-content: start;
        .review{
            padding: 2rem 1rem;
            width: 30%;
            background: #FFF5FB;
            border-radius: 6px;
            color: #6B0E0E;
            h5{
                font-weight: 600;
                font-size: 18px;
            }
            .location{
                font-weight: 400;
                font-size: 14px;
                margin-top: 4px;
            }
            .stars{
                display: flex;
                gap: 4px;
                padding-top: 3px;
                color: #FFF200;
                margin-bottom: 1rem;
            }
            p{
                font-weight: 300;
                line-height: 24px;
            }
            @media screen and (max-width: 768px){
                width: 100%;
            }
        }
    }
}
`;



export const Content = styled.div`

`;