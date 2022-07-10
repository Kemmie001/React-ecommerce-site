import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    .head-ad{
        width: 100%;
        background-color: #9E005D;
        color: #fff;
        font-weight: 500;
        padding: 1rem 5%;
        display: flex;
        justify-content: space-between;
        h3{
            display: none;
            align-self: center;
        }
        marquee{
            align-self: center;
        }
        .head-signin {
            display: flex;
            .btn-primary{
            background: #FFEA05;
            border-radius: 4px;
            color: #9E005D;
        }
        }
        
        
        @media screen and (min-width: 768px) {
            marquee {
                display: none;
            }
            h3{
            display: flex;
            font-weight: 400;
        }
        }
    }
    .head-logo{
        padding: 0.8rem 5%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .logo{
            display: block;
            width: 100px;
            img{
                display: block;
                width: 100%;
            }
            @media screen and (min-width: 768px){
                width: 200px;
            }
        }
        .search-wrapper {
            display: flex;
            margin-left: 10px;

            input {
                flex: 1;
                width: 100%;
                margin-right: 10px;
                padding: 10px 10px;
                border: 1px solid var(--primary-color);
                border-radius: 4px;
                outline: var(--primary-color);
            }
            .search-icon{
                display: none;
            }

            .bar{
                display: none;
            }

        }
        @media screen and (max-width: 768px) {
            .search-wrapper{
                position: relative;
                flex: 1;
                 .bar{
                    display: block;
                    align-self: center;
                    font-weight: thin;
                    font-size: 20px;
                    color: var(--primary-color);
                }
                .search-icon{
                    display: block;
                    position: absolute;
                    right: 18px;
                    top: 10px;
                    color: var(--primary-color);
                }
            }
            button {
                display: none;
            }
            
        }
        button {
            flex-basis: 70px;
            cursor: pointer;
            color: #fff;
            border-radius: 4px;
            font-weight: 400;
            padding: 0.5rem;
            background-color: #9E005D;
        }
    }
`;



export const Content = styled.div`

`;