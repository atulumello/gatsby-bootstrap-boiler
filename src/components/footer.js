import React from "react"
import './footer.scss'
import {  Container , Row , Col } from "reactstrap"

let date = new Date().getFullYear();

export default function Footer() {
  return (
      <div className="bg-dark" id="footer">
        <Container>
            <Row>
                <Col className="text-center">
                    <p className="text-muted" style={{margin: '0'}}>Copyright&copy; {date} Anthony Tulumello</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}