import styled from 'styled-components';

const TextInput = styled.input`
  width: 100%;
  border: 1px solid #efefef;
  outline: none;
  padding: 0.50rem .50rem;
  background: transparent;
  font-size: 0.9rem;
  font-family: Arial;
  color: #444;

  &:focus {
      border: 2px solid skyblue;
  }
`;

export default TextInput;
