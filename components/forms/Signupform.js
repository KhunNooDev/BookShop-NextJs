import { Button, Form } from 'react-bootstrap'

import styles from '../styles/Forms.module.css'

const Signupform = () => {
  return (
    <div className={styles.bgColor}>
      <Form className='px-5 py-3'>
        <Form.Group className='mb-3' controlId='Email'>
          <Form.Label>Email :</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='Password'>
          <Form.Label>Password :</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='CPassword'>
          <Form.Label>Confirm Password :</Form.Label>
          <Form.Control type='password' placeholder='Confirm Password' />
        </Form.Group>
        <Button className={styles.btnColor} variant='primary' type='submit'>
          Sign up
        </Button>
      </Form>
    </div>
  )
}
export default Signupform
