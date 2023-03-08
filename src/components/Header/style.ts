import styled from "styled-components";
import { mobile } from "../../utils/responsive";
import Theme from "../../constants/theme";

export const Container = styled.div`
  height: 100px;
  ${mobile({ height: "50px" })};
`;

export const Wrapper = styled.div`
  padding: 45px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 1000;
  width: -webkit-fill-available;
  width: -moz-available;
  box-shadow: 0px 5px 15px -2px grey;
  ${mobile({ padding: "25px 0px" })}
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

export const Center = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Branding = styled.h1<{ fontColor: string }>`
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 1.5px;
  color: ${(p) => p.fontColor};
  ${mobile({ marginLeft: "160px", fontSize: "18px" })};
`;

export const Logo = styled.img`
  cursor: pointer;
  width: auto;
  height: auto;
  position: absolute;
  ${mobile({
    marginTop: "15px",
    marginLeft: "-40px",
    position: "absolute",
    width: "200px",
    height: "auto",
  })};
`;

export const MenuItem = styled.div`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1.5px;
  cursor: pointer;
  margin-right: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

export const Link = styled.a<{ fontColor: string }>`
  color: ${(p) => p.fontColor};
  list-style: none;
  font-weight: bold;
  letter-spacing: 1px;
  text-decoration: none;
  margin-left: 20px;
  ${mobile({ marginLeft: "8px" })}
`;
