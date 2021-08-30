import styled from "styled-components";
import { Link } from "react-scroll";

export const Btn = styled(Link)`
  border-radius: 4px;
  background: #ff66ff;
  padding: 10px 22px;
  font-size: 20px;
  border: none;
  text-decoration: none;
  color: #fff;
  white-space: nowrap;
  outline: none;
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.19);
  &:hover {
    transition: all 0.25s ease-in-out;
    background: #536def;
    color: #fff;
  }
`;
