import styled from 'styled-components'

export const Wrapper = styled.div`
    padding: 7% 5%;
    .category-product{
    h3{
        color: var(--primary-color);
        font-size: 18px;
    }
    .products {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: space-between;
        @media screen and (max-width:768px){
            flex-direction: column;
            flex-wrap: nowrap;
            /* justify-content: center; */
        }
    }

    .link{
        padding-top: 2.5rem;
        padding-bottom: 3rem;
        display: flex;
        justify-content: center;
        gap: 8px;
        a{
            color: #000;
        }
        .icon{
            font-weight: thin;
            align-self: center;
        }
        
    }
    .pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
}

.paginationItem {
  background: #fff;
  padding: 10px 15px;
  border-radius: 50%;
  height: 45px;
  width: 45px;
  position: relative;
  margin: 0 5px;
  color: #000;
  cursor: pointer;
}

.paginationItem span {
  position: absolute;
  top: 50%;
  left: 50%;
  /* color: #c4c4c4; */
  transform: translate(-50%, -50%);
}

.span-color{
  color: var(--primary-color);
}

.prev,
.next {
  background: #fff;
  border: none;
  padding: 10px;
  color: var(--primary-color);
  width: 35px;
  height: 35px;
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
  margin: 0 5px;
  cursor: pointer;
}

.paginationItem.active {
  pointer-events: none;
}

.prev.disabled,
.next.disabled {
  pointer-events: none;
  box-shadow: none;
  color: #999;
}
  }
`;



export const Content = styled.div`

`;