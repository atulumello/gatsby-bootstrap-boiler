import React from "react"

import FontAwesome from 'react-fontawesome'
import {  Container , Row , Col , ListGroup , ListGroupItem } from "reactstrap"
import Seo from '../components/seo'
import Navibar from '../components/navibar'
import Footer from '../components/footer'

import '../../node_modules/animate.css/animate.min.css'
import '../scss/styles.scss'

export default function Home() {
  return (
    <div>
    <Seo />
    <div id="page-container">
      <div id ="content-wrap">

        <Navibar/>
        
        <Container>
            <Row>
                <Col xs="12" className="text-center mt-5">
                  <FontAwesome className="d-inline" name="rocket" size="2x" style={{marginRight: '5px'}} />
                  <h3 className="d-inline">Simple Gatsby Bootstrap Boiler Plate</h3>
                </Col>
            </Row>
              <hr style={{maxWidth: '300px'}}/>
            <Row>
              <Col xs="12" className="text-center mt-5 mb-3">
                <h3>Plugins in use</h3>
              </Col>
              <Col className="text-center">
                  <ListGroup>
                    <a href="https://reactstrap.github.io/"><ListGroupItem color="primary">reactstrap</ListGroupItem></a>
                    <a href="https://getbootstrap.com/"><ListGroupItem color="secondary">Bootstrap</ListGroupItem></a>
                    <a href="https://animate.style/"><ListGroupItem color="success">Animate.css</ListGroupItem></a>
                    <a href="https://www.npmjs.com/package/animate-hover"><ListGroupItem color="danger">animate-hover</ListGroupItem></a>
                  </ListGroup>
              </Col>
              <Col className="text-center">
                  <ListGroup>
                    <a href="https://www.npmjs.com/package/react-helmet"><ListGroupItem color="primary">react-helmet</ListGroupItem></a>
                    <a href="https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sass"><ListGroupItem color="secondary">gatsby-plugin-sass</ListGroupItem></a>
                    <a href="https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt/"><ListGroupItem color="success">gatsby-robots-txt</ListGroupItem></a>
                    <a href="https://www.npmjs.com/package/react-fontawesome"><ListGroupItem color="danger">react-fontawesome</ListGroupItem></a>
                  </ListGroup>
              </Col>
            </Row>
            <Row>
              <Col className="text-center mt-5">
                <p>Features</p>
              </Col>
            </Row>
        </Container>


      </div>
     </div>
    <Footer />
    </div>
  )
}
