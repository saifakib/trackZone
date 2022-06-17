import styled from "styled-components";
import PropTypes from "prop-types";
import TextInput from '../../ui/inputs/TextInput';
import Label from "../../ui/texts/Label";

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ErrorMessage = styled.div`
  font-size: 0.8rem;
  color: red;
`;

const InputGroup = ({ label, type, placeholder, name, value, onChange, error, onBlur, onFocus }) => {
  return (
    <Container
    style={{
      display: 'flex',
      flexDirection: 'row',
      gap: '.5rem'
    }}
    >
      <Label size="md">{label}:</Label>
      <TextInput
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        error={error}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      { error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

InputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
export default InputGroup;
