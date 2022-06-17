import styled from "styled-components";
import PropTypes from "prop-types";

const fontSizes = {
  sm: "0.8rem",
  md: "1rem",
  lg: "1.2rem",
};

const Button = styled.button`
  border: none;
  outline: none;
  background: #e1e1e1;
  color: ${(props) => props.color ? props.color : '#333'};
  border-radius: 0.15rem;
  padding: 0.25rem 1rem;
  font-size: ${(props) => fontSizes[props.size] ?? "1rem"};
  font-family: Arial;
  font-weight: 500;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background: #efefef;
  }
`;

Button.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string
}

export default Button;
