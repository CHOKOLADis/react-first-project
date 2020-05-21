import React, { Component } from 'react';
import {Container, Tab, Nav, Row, Col} from "react-bootstrap"

export default class About extends Component {
  render() {
    return (
        <Container>
          <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="about-tabs flex-column mt-2">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Design</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Team</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Programming</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Framework</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9} className="tab-content">
                <Tab.Content className="tabs">
                  <Tab.Pane eventKey="first">
                    <img src="https://grantist.com/wp-content/uploads/2016/02/The-Golden-Bee-Biennale-of-Graphic-Design-min-1024x576@2x.jpg"/>
                    <p>Enim ut consectetur qui cupidatat excepteur duis ea officia aliquip aliquip amet nostrud velit. Deserunt dolore velit eiusmod officia officia enim. Sit anim elit esse dolor officia labore sunt sint ullamco.</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <img src="https://www.siennaedge.com/wp-content/uploads/2018/03/start-up-programming-team-960x640@2x.jpg"/>
                    <p>Enim ut consectetur qui cupidatat excepteur duis ea officia aliquip aliquip amet nostrud velit. Deserunt dolore velit eiusmod officia officia enim. Sit anim elit esse dolor officia labore sunt sint ullamco.</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <img src="https://professii-online.ru/wp-content/uploads/Java-razrabotchik-kto-takoj-skolko-zarabatyvaet-gde-uchitsya-i-kak-im-stat.jpg"/>
                    <p>Enim ut consectetur qui cupidatat excepteur duis ea officia aliquip aliquip amet nostrud velit. Deserunt dolore velit eiusmod officia officia enim. Sit anim elit esse dolor officia labore sunt sint ullamco.</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <img src="https://it-black.ru/wp-content/uploads/2019/08/apiblogbanner.png"/>
                    <p>Enim ut consectetur qui cupidatat excepteur duis ea officia aliquip aliquip amet nostrud velit. Deserunt dolore velit eiusmod officia officia enim. Sit anim elit esse dolor officia labore sunt sint ullamco.</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth">
                    <img src="https://professii-online.ru/wp-content/uploads/Java-razrabotchik-kto-takoj-skolko-zarabatyvaet-gde-uchitsya-i-kak-im-stat.jpg"/>
                    <p>Enim ut consectetur qui cupidatat excepteur duis ea officia aliquip aliquip amet nostrud velit. Deserunt dolore velit eiusmod officia officia enim. Sit anim elit esse dolor officia labore sunt sint ullamco.</p>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
    );
  }
}
