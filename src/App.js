import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import logo from "./assets/logo_kmk.png";
import DropdownCollapse from "./components/helpers/DropdownCollapse/DropdownCollapse";
import DataTable from "./components/helpers/DataTable/DataTable";

function App() {
  return (
    <div className="App">
      <Tab.Container defaultActiveKey="tab-leads">
        <Row className="mx-0 home_tab_container">
          <Col sm={3} xl={2} className="panel_left">
            <Nav variant="pills" className="flex-column nav_container">
              <Nav.Item>
                <img
                  src={logo}
                  className="logo_img img-fluid mt-3"
                  alt="logo kmk"
                />
              </Nav.Item>
              <Nav.Item>
                <DropdownCollapse />
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="tab-dashboard">
                  <span className="nav_icon">
                    <i className="fa-solid fa-chart-line"></i>
                  </span>
                  Dashboard
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="tab-leads">
                  <span className="nav_icon">
                    <i className="fa-solid fa-house"></i>
                  </span>
                  Leads
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="tab-completedProjects">
                  <span className="nav_icon">
                    <i className="fa-solid fa-diagram-project"></i>
                  </span>
                  Completed Projects
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="tab-scheduleMeetings">
                  <span className="nav_icon">
                    <i className="fa-regular fa-handshake"></i>
                  </span>
                  Schedule Meetings
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="tab-settings">
                  <span className="nav_icon">
                    <i className="fa-solid fa-gears"></i>
                  </span>
                  Settings
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9} xl={10} className="panel_right">
            <Tab.Content>
              <Tab.Pane eventKey="tab-dashboard">
                <p>Dashboard</p>
              </Tab.Pane>
              <Tab.Pane eventKey="tab-leads">
                <DataTable />
              </Tab.Pane>
              <Tab.Pane eventKey="tab-completedProjects">
                <p>Completed Projects</p>
              </Tab.Pane>
              <Tab.Pane eventKey="tab-scheduleMeetings">
                <p>Schedule Meetings</p>
              </Tab.Pane>
              <Tab.Pane eventKey="tab-settings">
                <p>Settings</p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default App;
