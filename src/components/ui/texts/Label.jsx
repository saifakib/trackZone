import styled from 'styled-components';
import PropsTypes from 'prop-types';

const fontSizes = {
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem'
}

const Label = styled.p`
  font-family: Arial;
  font-size: ${(props) => fontSizes[props.size] ?? fontSizes[md]};  
  color: #222; 
  padding-top: 5px;
`;

Text.propTypes = {
  size: PropsTypes.string
}

export default Label;