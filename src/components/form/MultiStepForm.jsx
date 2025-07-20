import { useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Success from './Success'
import { motion } from 'framer-motion'
import './Form.css'
import { registerUser } from '../../services/api'


const initialValues = {
  fullName: '',
  age: '',
  gender: '',
  church: '',
  division: '',
  phone: '',
  email: '',
  specialNeeds: '',
}

const validationSchemas = [
  Yup.object({
    fullName: Yup.string().required('Required'),
    age: Yup.number().required('Required'),
    gender: Yup.string().required('Required'),
  }),
  Yup.object({
    church: Yup.string().required('Required'),
    division: Yup.string().required('Required'),
    phone: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  }),
  Yup.object({
    specialNeeds: Yup.string(),
  }),
]

function MultiStepForm() {
  const [step, setStep] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const steps = [<Step1 />, <Step2 />, <Step3 />]

  const handleNext = () => setStep(step + 1)
  const handleBack = () => setStep(step - 1)

  const handleSubmit = async (values, actions) => {
    try {
      await registerUser(values)
      setIsSubmitted(true)
    } catch (error) {
      actions.setSubmitting(false)
      alert(error.message || 'Submission Failed')
    }
  }
  
  if (isSubmitted) return <Success />

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemas[step]}
      onSubmit={(values, actions) => {
        if (step === steps.length - 1) handleSubmit(values, actions)
        else handleNext()
      }}
    >
    {formik => (
        <Form>
            {/* Progress Bar */}
            <div className="progress-bar-container">
                <div
                className="progress-bar"
                style={{ width: `${((step + 1) / steps.length) * 100}%` }}
                ></div>
            </div>

            {/* Step Animation */}
            <motion.div
                key={step}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
            >
                {steps[step]}
            </motion.div>

            {/* Buttons */}
            <div className="form-buttons">
                {step > 0 && <button type="button" onClick={handleBack}>Back</button>}
                <button type="submit">{step === steps.length - 1 ? 'Submit' : 'Next'}</button>
            </div>

            <div className="progress-indicator">
                Step {step + 1} of {steps.length}
            </div>
        </Form>      
    )}
    </Formik>
  )
}

export default MultiStepForm
