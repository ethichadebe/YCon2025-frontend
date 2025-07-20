import { Field } from 'formik'

function Step3() {
  return (
    <div>
      <h2>Special Needs</h2>
      <div className="form-group">
        <label>Any special needs or requests?</label>
        <Field as="textarea" name="specialNeeds" placeholder="Optional" />
      </div>
    </div>
  )
}

export default Step3
