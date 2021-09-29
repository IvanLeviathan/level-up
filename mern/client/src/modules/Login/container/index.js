import { withFormik } from "formik";
import validations from "../../../utils/validations";
import Login from "../components";

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: "",
    password: ""
  }),
  validate: (values) => {
    let errors = {};
    validations({values, errors});
    return errors;
  },
  handleSubmit: (values) => {
    console.log(values);
  },
  displayName: 'Login'
})(Login)