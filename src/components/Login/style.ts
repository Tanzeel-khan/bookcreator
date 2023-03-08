import styled from "styled-components";
import Theme from "../../constants/theme";

export const Container = styled.div`
  width: 400px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 40px;
`;

export const SignUpPara = styled.p`
  text-align: center;
`;

export const Grids = styled.div`
    display: grid;
`
export const LoginButton = styled.button`
cursor: pointer;
height: 50px;
background: ${Theme.WHITE_COLOR};
box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.12);
border-radius: 4px;
color: ${Theme.BLACK_COLOR};
`;