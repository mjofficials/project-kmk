import "./DecorationTab.scss";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import DpropsContent from "../DpropsContent/DpropsContent";
const DecorationTab = () => {
  return (
    <Tab.Container defaultActiveKey="tab-dProps">
      <Row className="mx-0 decoration_tab_container g-0">
        <Col sm={12}>
          <Nav variant="pills" className="flex-row mb-4">
            <Nav.Item>
              <Nav.Link eventKey="tab-dProps">Decoration & Props</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="tab-floral">Floral</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="tab-logistics">Logistics</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="tab-cLighting">Conceptual Lighting</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="tab-sound">Sound</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={12}>
          <Tab.Content>
            <Tab.Pane eventKey="tab-dProps">
              <DpropsContent />
            </Tab.Pane>
            <Tab.Pane eventKey="tab-floral">
              <p>floral content</p>
            </Tab.Pane>
            <Tab.Pane eventKey="tab-logistics">
              <p>logistics content</p>
            </Tab.Pane>
            <Tab.Pane eventKey="tab-cLighting">
              <p>cLighting content</p>
            </Tab.Pane>
            <Tab.Pane eventKey="tab-sound">
              <p>sound content</p>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default DecorationTab;
