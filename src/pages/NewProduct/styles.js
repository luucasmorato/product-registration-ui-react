import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #111;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;

    div.form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background: #fff;
      width: 100%;
      border-radius: 4px;
      padding: 7px;
      height: 400px;

      div {
        width: 360px;
        padding: 15px 0;

        label {
          width: 100%;
        }
      }

      input {
        height: 45px;
        width: 100%;
        padding: 0 10px;
        border-radius: 4px;
        border: 1px solid #7159c1;
      }
    }
  }

  footer {
    button {
      margin: 25px 12px;
    }
  }
`;
