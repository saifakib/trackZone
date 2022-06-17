import styled from 'styled-components';
import PropsTypes from 'prop-types';

const fontSizes = {
    sm: '0.8rem',
    md: '1rem',
    lg: '1.2rem'
}

const lineHeight = {
    sm: 1.2,
    md: 1.4,
    lg: 1.6
}
const Text = styled.p`
  font-family: Arial;
  font-size: ${(props) => fontSizes[props.size] ?? '1rem'};  
  color: #222;
  line-height: ${(props) => lineHeight[props.line] ?? 1.3}  
`;

Text.propTypes = {
  size: PropsTypes.string,
  line: PropsTypes.number
}

export default Text;