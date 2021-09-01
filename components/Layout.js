import Header from './Header'
import Sidebar from './contents/Sidebar'
import { Col, Container, Row } from 'react-bootstrap'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <Sidebar />
          </Col>
          <Col xs={9}>{children}</Col>
        </Row>
      </Container>
    </>
  )
}

export default Layout
