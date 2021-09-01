import { Breadcrumb, Button, Col, Row } from 'react-bootstrap'

import styles from '../styles/Main.module.css'

const Main = () => {
  return (
    <>
      <main>
        <Breadcrumb>
          <Breadcrumb.Item href='#'>Home</Breadcrumb.Item>
          <Breadcrumb.Item href='#'>BOOKSTORE</Breadcrumb.Item>
          <Breadcrumb.Item active>Tags</Breadcrumb.Item>
        </Breadcrumb>
        <Row lg={5}>
          <Col>
            <div className={styles.boxitem}>
              <div className={styles.item}></div>
              <p>NameBook</p>
              <p>PriceBook</p>
              <Button type='submit'>Add to Cart</Button>
            </div>
          </Col>
          <Col>
            <div className={styles.boxitem}>
              <div className={styles.item}></div>
              <p>NameBook</p>
              <p>PriceBook</p>
              <Button type='submit'>Add to Cart</Button>
            </div>
          </Col>
          <Col>
            <div className={styles.boxitem}>
              <div className={styles.item}></div>
              <p>NameBook</p>
              <p>PriceBook</p>
              <Button type='submit'>Add to Cart</Button>
            </div>
          </Col>
          <Col>
            <div className={styles.boxitem}>
              <div className={styles.item}></div>
              <p>NameBook</p>
              <p>PriceBook</p>
              <Button type='submit'>Add to Cart</Button>
            </div>
          </Col>
          <Col>
            <div className={styles.boxitem}>
              <div className={styles.item}></div>
              <p>NameBook</p>
              <p>PriceBook</p>
              <Button type='submit'>Add to Cart</Button>
            </div>
          </Col>
          <Col>
            <div className={styles.boxitem}>
              <div className={styles.item}></div>
              <p>NameBook</p>
              <p>PriceBook</p>
              <Button type='submit'>Add to Cart</Button>
            </div>
          </Col>
          <Col>
            <div className={styles.boxitem}>
              <div className={styles.item}></div>
              <p>NameBook</p>
              <p>PriceBook</p>
              <Button type='submit'>Add to Cart</Button>
            </div>
          </Col>
          <Col>
            <div className={styles.boxitem}>
              <div className={styles.item}></div>
              <p>NameBook</p>
              <p>PriceBook</p>
              <Button type='submit'>Add to Cart</Button>
            </div>
          </Col>
          <Col>
            <div className={styles.boxitem}>
              <div className={styles.item}></div>
              <p>NameBook</p>
              <p>PriceBook</p>
              <Button type='submit'>Add to Cart</Button>
            </div>
          </Col>
          <Col>
            <div className={styles.boxitem}>
              <div className={styles.item}></div>
              <p>NameBook</p>
              <p>PriceBook</p>
              <Button type='submit'>Add to Cart</Button>
            </div>
          </Col>
        </Row>
      </main>
    </>
  )
}
export default Main
