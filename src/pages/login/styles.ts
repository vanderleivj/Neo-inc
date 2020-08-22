import styled from 'styled-components';

export const Form = styled.form`
  padding: 70px 20px;
  background: #182F50 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;

  input {
    width: 100%;
    height: 56px;
    padding: 0 24px;
    background: #17263B 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-color: transparent;
    margin-bottom: 15px;
    margin-top:10px
  }

  button {
    width: 100%;
    height: 56px;
    text-align: center;
    background: #0D1C31 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-color: transparent;
    color: white;
    margin-top:30px;
    margin-bottom:20px;
  }
`;

export const NeoInc = styled.form `
  text-align: center;
  padding-bottom: 20px;
`;

export const TextForm = styled.text `
  font-size: 16px;
  color: white;
  text-align: center;
`;

export const ClickedText = styled.a `
  color: white
`;
