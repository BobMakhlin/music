import { Form, useFormikContext } from "formik";
import { isEmpty } from "lodash";
import { useEffect } from "react";

const AutosubmitForm = ({children, ...otherProps}) => {
  return <Form {...otherProps}>
    <SubmitFormOnValuesChange />
    {children}
  </Form>;
}

function SubmitFormOnValuesChange() {
  const { values, touched, isValid, submitForm } = useFormikContext();
  const isTouched = !isEmpty(touched);

  useEffect(() => {
    if (isTouched && isValid) {
      submitForm();
    }
  }, [values, isTouched, isValid, submitForm]);

  return null;
}

export default AutosubmitForm;

