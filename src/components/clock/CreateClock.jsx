import React from "react";
import PropTypes from "prop-types";
import Text from "../ui/texts/Text";
import InputGroup from "../shared/forms/InputGroup";
import Button from "../ui/buttons/Button";
import Form from "../shared/forms/Form";
import useForm from "../../hooks/useForm";

const initial = {
  title: "",
  timezone: "",
};

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = "Title is Required";
  }
  if (!values.timezone) {
    errors.timezone = "Timezone is Required";
  }
  return errors;
};

const CreateClockForm = ({ getClockInfo }) => {
  const {
    formState: state,
    handleChange,
    handleFocus,
    handleBlur,
    handleSubmit,
    clear,
  } = useForm({ initial, validate });

  const cb = ({ hasError, values, errors }) => {
    if (hasError) {
      alert("[ERROR]" + JSON.stringify(errors));
    } else {
      getClockInfo(values)
    }
  };
  
  return (
    <>
      <Text size={"lg"} line={"lg"}>
        Create Clock
      </Text>
      <Form onSubmit={(e) => handleSubmit(e, cb)}>
          <InputGroup
            type={"text"}
            value={state.title.value}
            label={"Title"}
            name={"title"}
            placeholder={"Enter Title"}
            error={state.title.error}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <InputGroup
            type={"text"}
            value={state.timezone.value}
            label={"Timezone"}
            name={"timezone"}
            error={state.timezone.error}
            placeholder={"Enter Timezone"}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <Button size={'lg'} type="submit">Submit</Button>
          <Button size={'lg'} type="reset" onClick={clear}>Clear</Button>
      </Form>
    </>
  );
};

CreateClockForm.proptypes = {
  getClockInfo: PropTypes.func.isRequired,
};

export default CreateClockForm;
