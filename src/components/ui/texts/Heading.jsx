import styled from 'styled-components';
import PropTypes from "prop-types";

const fontSizes = {
    sm: '2rem',
    md: '3rem',
    lg: '4rem'
}
const Heading = styled.p`
  font-family: Arial;
  font-size: ${(props) => fontSizes[props.size] || '2rem'}; 
  font-weight: 100;
  color: rgba(0,0,0,.7);
  margin-bottom: 13px;
  text-align: center;
`;

Heading.propTypes = {
    size: PropTypes.string
}

export default Heading;