import styled from 'styled-components'

export const Wrapper = styled.div`
  .register{
    background: url('/assets/signup-bg.png');
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem 0;
    .register-form{
        width: 50%;
        padding: 2rem 4%;
        background-color: #fff;
    
        text-align: center;
        
        h3{
            margin-top: 1rem;
            color: var(--primary-color);
        }
        p{
          font-weight: 400;
          font-family: 14px;
          line-height: 24px;
          padding-top: 0.5rem;
          padding-bottom: 1rem;
        }
        input{
            display: block;
            width: 100%;
            border: 1px solid var(--primary-color);
            padding: 0.7rem 5px;
            margin-top: 1.52em;
            outline: none;
        }
        .terms{
          padding: 1rem 0;
          line-height: 30px;
          font-size: 14px;
          font-weight: 500;
        }
        button{
          margin-bottom: 1.5rem;
          width: 100%;
          border-radius: 4px;
          color: #fff;
          padding: 0.9rem 0;
          background-color: var(--primary-color);

        }
        @media screen and (max-width: 768px) {
            width: 90%;
        }
        @media screen and (min-width: 1080px) {
            width: 35%;
            padding: 2rem 3%;
        }
    }
  }
`;



export const Content = styled.div`

`;