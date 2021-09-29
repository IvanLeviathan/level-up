import { withFormik } from "formik";
import validations from "../../../utils/validations";
import Registration from "../components";

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: "",
    password: "",
    confirmPassword: ""
  }),
  validate: (values) => {
    let errors = {};
    validations({values, errors});
    return errors;
  },
  handleSubmit: (values) => {
    console.log(values);
  },
  displayName: 'registration'
})(Registration)