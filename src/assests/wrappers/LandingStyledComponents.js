import styled from "styled-components";

const LandingStylesComponents = styled.main`
  margin: 20px 20px;
  display: grid;
  column-gap: 10px;
  grid-template-columns: 1fr 1.5fr;
  align-items: center;
  justify-content: space-between;

  .form {
    box-shadow: 0 0 30px -5px rgba(0, 0, 0, 0.174);
    background-color: #fff;
    padding: 80px 60px;
    border-radius: 6px;
    input {
      padding: 8px;
      border-radius: 5px;
      margin-bottom: 10px;
    }
    label {
      font-weight: 700;
      color: #333;
    }
    h2 {
      text-align: center;
      color: #222;
      padding-bottom: 20px;
    }
  }
  .inputfield {
    width: 100%;
    margin-top: 10px;
    position: relative;
  }
  .passwordLabel {
    margin-top: 30px;
  }
  .image {
    width: 90%;
    display: block;
  }
  .eye {
    width: 20px;
    position: absolute;
    margin-left: -40px;
    margin-top: 17px;
    cursor: pointer;
    /* z-index: 1; */
  }
  .eye:hover {
    background-color: #ccc;
    border-radius: 45%;
  }
  .space {
    display: flex;
    grid-template-columns: 1.2fr 1fr;
    align-items: center;
    justify-content: space-between;
  }
  .first {
    display: flex;
  }
  .checkbox {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .checkbox2 {
    display: flex;
    margin-top: -4px;
    margin-bottom: 40px;
  }
  .cpText {
    text-decoration: none;
  }
  a:link,
  a:visited {
    color: #fab005;
  }
  a:hover,
  a:active {
    text-decoration: none;
    color: #4263eb;
  }
  button {
    width: 80%;
    margin-left: 10%;
    padding: 8px 16px;
    border-radius: 7px;
    border: none;
    background-color: #1971c2;
    color: #fff;
    cursor: pointer;
    transition: all 0.4s;
  }
  button:hover {
    background-color: #4dabf7;
  }
  .register {
    text-align: center;
  }

  @media (max-width: 740px) {
    .image {
      display: none;
    }
    grid-template-columns: 1fr;
    margin: 0;
  }
  @media (max-width: 408px) {
    .form {
      padding: 8px 16px;
    }
  }
`;
export default LandingStylesComponents;
