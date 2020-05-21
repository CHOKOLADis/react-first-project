import React, { Component } from 'react';
import {Container,Col, Row,Media, ListGroup,Card} from "react-bootstrap"

export default class Blog extends Component {
  render() {
    return (
        <Container>
          <Row>
            <Col md="9">
              <Media className="m-5">
                <img
                  width={150}
                  height={150}
                  className="mr-3"
                  src="http://avatars.mds.yandex.net/get-entity_search/57048/168367762/S122x122Fit_2x"
                  />
                  <Media.Body>
                    <h5>Blog post</h5>
                    <p>
                      Sunt excepteur et Lorem mollit duis quis nulla in et irure quis fugiat veniam. Sit minim elit occaecat eu do dolor. Cupidatat duis dolore dolore id pariatur proident et minim mollit dolore cupidatat. Nisi id cupidatat nulla cupidatat occaecat mollit commodo proident et mollit est exercitation dolore nulla. Do dolore voluptate occaecat quis. Adipisicing amet exercitation minim voluptate aliquip Lorem ex voluptate anim excepteur aliquip aliquip qui magna.
                    </p>
                  </Media.Body>
              </Media>
              <Media className="m-5">
                <img
                  width={150}
                  height={150}
                  className="mr-3"
                  src="http://avatars.mds.yandex.net/get-entity_search/57048/168367762/S122x122Fit_2x"
                  />
                  <Media.Body>
                    <h5>Blog post</h5>
                    <p>
                      Sunt excepteur et Lorem mollit duis quis nulla in et irure quis fugiat veniam. Sit minim elit occaecat eu do dolor. Cupidatat duis dolore dolore id pariatur proident et minim mollit dolore cupidatat. Nisi id cupidatat nulla cupidatat occaecat mollit commodo proident et mollit est exercitation dolore nulla. Do dolore voluptate occaecat quis. Adipisicing amet exercitation minim voluptate aliquip Lorem ex voluptate anim excepteur aliquip aliquip qui magna.
                    </p>
                  </Media.Body>
              </Media>
              <Media className="m-5">
                <img
                  width={150}
                  height={150}
                  className="mr-3"
                  src="http://avatars.mds.yandex.net/get-entity_search/57048/168367762/S122x122Fit_2x"
                  />
                  <Media.Body>
                    <h5>Blog post</h5>
                    <p>
                      Sunt excepteur et Lorem mollit duis quis nulla in et irure quis fugiat veniam. Sit minim elit occaecat eu do dolor. Cupidatat duis dolore dolore id pariatur proident et minim mollit dolore cupidatat. Nisi id cupidatat nulla cupidatat occaecat mollit commodo proident et mollit est exercitation dolore nulla. Do dolore voluptate occaecat quis. Adipisicing amet exercitation minim voluptate aliquip Lorem ex voluptate anim excepteur aliquip aliquip qui magna.
                    </p>
                  </Media.Body>
              </Media>
              <Media className="m-5">
                <img
                  width={150}
                  height={150}
                  className="mr-3"
                  src="http://avatars.mds.yandex.net/get-entity_search/57048/168367762/S122x122Fit_2x"
                  />
                  <Media.Body>
                    <h5>Blog post</h5>
                    <p>
                      Sunt excepteur et Lorem mollit duis quis nulla in et irure quis fugiat veniam. Sit minim elit occaecat eu do dolor. Cupidatat duis dolore dolore id pariatur proident et minim mollit dolore cupidatat. Nisi id cupidatat nulla cupidatat occaecat mollit commodo proident et mollit est exercitation dolore nulla. Do dolore voluptate occaecat quis. Adipisicing amet exercitation minim voluptate aliquip Lorem ex voluptate anim excepteur aliquip aliquip qui magna.
                    </p>
                  </Media.Body>
              </Media>
            </Col>
            <Col md="3">
              <h5 className="text-center mt-5">Categories</h5>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>Html/Css</ListGroup.Item>
                  <ListGroup.Item>Javascript</ListGroup.Item>
                  <ListGroup.Item>PHP</ListGroup.Item>
                  <ListGroup.Item>Python</ListGroup.Item>
                </ListGroup>
              </Card>
              <Card bg="info" border="link">
                <Card.Body>
                  <Card.Title>Side widget</Card.Title>
                  <Card.Text>Quis velit laborum irure qui fugiat ex deserunt exercitation laboris. Tempor sunt proident occaecat proident laborum commodo aute elit adipisicing. Ex fugiat mollit laboris nisi exercitation nulla velit enim ad enim culpa dolor.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
    );
  }
}
