import "./BudgetInfo.scss";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import DecorationTab from "../DecorationTab/DecorationTab";

const BudgetInfo = () => {
  return (
    <Tab.Container defaultActiveKey="tab-decoration">
      <Row className="mx-0 budget_tab_container g-0">
        <Col sm={12}>
          <Nav variant="pills" className="flex-row mb-4">
            <Nav.Item>
              <Nav.Link eventKey="tab-decoration">Decoration</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="tab-foods">Foods</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="tab-vas">VAS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="tab-others">Others</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={12}>
          <Tab.Content>
            <Tab.Pane eventKey="tab-decoration">
              <DecorationTab />
            </Tab.Pane>
            <Tab.Pane eventKey="tab-foods">
              <p>foods content</p>
            </Tab.Pane>
            <Tab.Pane eventKey="tab-vas">
              <p>vas content</p>
            </Tab.Pane>
            <Tab.Pane eventKey="tab-others">
              <p>others content</p>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default BudgetInfo;
