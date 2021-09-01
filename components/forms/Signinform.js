import { Button, Form } from 'react-bootstrap'

import styles from '../styles/Forms.module.css'

const Signinform = () => {
  return (
    <div className={styles.bgColor}>
      <Form className='px-5 py-3'>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email :</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password :</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>
        <Button className={styles.btnColor} type='submit'>
          Sign in
        </Button>
      </Form>
    </div>
  )
}
export default Signinform
