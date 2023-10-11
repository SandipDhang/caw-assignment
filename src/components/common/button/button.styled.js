import styled from "styled-components";

export const RButton = styled.button`
  font-size: 14px;
  border: 1px solid #1e633f;
  outline: none;
  background-color: ${(props) =>
    props.variant === "filled" ? "#1e633f" : "#fff"};
  color: ${(props) => (props.variant === "filled" ? "#fff" : "#1e633f")};
  cursor: pointer;
  font-weight: 500;
`;

