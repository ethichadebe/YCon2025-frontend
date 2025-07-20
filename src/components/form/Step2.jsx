import { Field, ErrorMessage } from 'formik'

function Step2() {
  return (
    <div>
      <h2>Church Details</h2>
      <div className="form-group">
        <label>Church/Corps</label>
        <Field name="church" placeholder="Enter church" />
        <ErrorMessage name="church" component="div" className="error" />
      </div>
      <div className="form-group">
        <label>Division</label>
        <Field name="division" placeholder="Central Division" />
        <ErrorMessage name="division" component="div" className="error" />
      </div>
      <div className="form-group">
        <label>Phone Number</label>
        <Field name="phone" placeholder="Enter phone number" />
        <ErrorMessage name="phone" component="div" className="error" />
      </div>
      <div className="form-group">
        <label>Email</label>
        <Field name="email" placeholder="Enter email" />
        <ErrorMessage name="email" component="div" className="error" />
      </div>
    </div>
  )
}

export default Step2
