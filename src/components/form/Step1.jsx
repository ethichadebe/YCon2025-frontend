import { Field, ErrorMessage } from 'formik'

function Step1() {
  return (
    <>
      <h2>Tell us about yourself! 👋</h2>
      <p style={{ textAlign: 'center', marginBottom: '1rem', color: '#4a5568' }}>
        Let’s start with the basics so we can get to know you better.
      </p>

      <div className="form-group">
        <label>Full Name</label>
        <Field name="fullName" placeholder="Full Name" />
        <ErrorMessage name="fullName" component="div" className="error" />
      </div>

      <div className="form-group">
        <label>Age</label>
        <Field name="age" type="number" placeholder="Your Age" />
        <ErrorMessage name="age" component="div" className="error" />
      </div>

      <div className="form-group">
        <label>Gender</label>
        <Field as="select" name="gender">
          <option value="">Select Gender</option>
          <option value="Male">👨‍🦱 Male</option>
          <option value="Female">👩‍🦱 Female</option>
          <option value="Other">Other</option>
        </Field>
        <ErrorMessage name="gender" component="div" className="error" />
      </div>
    </>
  )
}

export default Step1
