import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    input {
      height: 35px;
      padding: 0 7px;
      margin: 10px;
      border-radius: 4px;
      border: 1px solid #7159c1;
    }

    button {
      height: 35px;
      background: #7159c1;
      color: #fff;
      border: none;
      border-radius: 4px;
      padding: 0 20px;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(255, 255, 255, 0.9);
    width: 100%;
    border-radius: 4px;
    padding: 10px;

    table {
      width: 100%;

      thead {
        tr {
          td {
            color: #7159c1;
            font-weight: bold;
            text-align: center;
            font-size: 1.4rem;
            padding: 0 0 30px 0;
          }
        }
      }
      tbody {
        tr {
          td {
            color: #333;
            padding: 8px 0;
            font-size: 1.1rem;
            text-align: center;
            button {
              margin-right: 15px;
              background: transparent;
              border: none;
              img {
                height: 23px;
              }
            }
          }
        }
      }
    }
  }

  #loading {
    color: #7159c1;
    padding: 80px 0;
  }
`;
