import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

class Landing extends Component {
  constructor(props) {
    super(props)

    this.state = {
      header: 'Graphic',
      prefix: 'Your next starts',
      suffix: 'design with us'
    }
  }
  render() {
    let {header, prefix, suffix} = this.state

    return (
      <Container fluid>
        <Row>
          <Col lg={3}>
            <h3>Paper Huts</h3>
            <p>{prefix}</p>
          </Col>
          <Col>
            <h1>{header}</h1>
            <p>{suffix}</p>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Landing