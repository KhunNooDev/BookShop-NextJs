import Link from 'next/link'
import {
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
  Container,
} from 'react-bootstrap'

import styles from './styles/Header.module.css'

const Header = () => {
  return (
    <>
      <Navbar expand='lg' className={styles.bgColor}>
        <Container>
          <Navbar.Brand href='#home'>
            <img
              alt=''
              src='/favicon.ico'
              width='30'
              height='30'
              className='d-inline-block align-top'
            />{' '}
            BookShop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              // style={{ maxHeight: '100px' }}
              // navbarScroll
            >
              <Link href='/'>
                <a className='nav-link'>HOME</a>
              </Link>
              <Link href='/'>
                <a className='nav-link'>BOOKSTORE</a>
              </Link>
              <Link href='/'>
                <a className='nav-link'>PROMOTION</a>
              </Link>
            </Nav>
            <Nav>
              <Link href='/signin'>
                <a className='nav-link'>SIGN IN</a>
              </Link>
              <Link href='/signup'>
                <a className='nav-link'>SIGN UP</a>
              </Link>
            </Nav>
            <Form className='d-flex'>
              <FormControl
                type='search'
                placeholder='Search'
                className='me-2'
                aria-label='Search'
              />
              <Button variant='outline-success'>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
