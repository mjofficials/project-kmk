import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import logo from "./assets/logo_kmk.png";
import DropdownCollapse from "./components/helpers/DropdownCollapse/DropdownCollapse";
import DataTable from "./components/helpers/DataTable/DataTable";
import useFetch from "./hooks/useFetch";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useHistory,
} from "react-router-dom";
import ProjectTracking from "./components/ProjectTracking/ProjectTracking";
// import ProjectTracking from "./components/ProjectTracking/ProjectTracking";

function App() {
  const [userId, setUserId] = useState(0);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const history = useHistory();

  const handleUserId = (id) => {
    setUserId(id);
    setShowUserDetails(true);
  };

  const {
    data: userDetail,
    isPending,
    error,
  } = useFetch(
    `https://my-json-server.typicode.com/mjofficials/fakeusers/users/${userId}`
  );
  const handleBacktoLeads = () => {
    setShowUserDetails(false);
  };
  return (
    <Router>
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
                  <Nav.Link eventKey="tab-dashboard" as={Link} to={`/`}>
                    <span className="nav_icon">
                      <i className="fa-solid fa-chart-line"></i>
                    </span>
                    Dashboard
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab-leads" as={Link} to={`/leads`}>
                    <span className="nav_icon">
                      <i className="fa-solid fa-house"></i>
                    </span>
                    Leads
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="tab-completedProjects"
                    as={Link}
                    to={`/completedProjects`}
                  >
                    <span className="nav_icon">
                      <i className="fa-solid fa-diagram-project"></i>
                    </span>
                    Completed Projects
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="tab-scheduleMeetings"
                    as={Link}
                    to={`/scheduleMeetings`}
                  >
                    <span className="nav_icon">
                      <i className="fa-regular fa-handshake"></i>
                    </span>
                    Schedule Meetings
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tab-settings" as={Link} to={`/settings`}>
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
                <Switch>
                  <Route exact path="/">
                    <Tab.Pane eventKey="tab-dashboard">
                      <p>Dashboard</p>
                    </Tab.Pane>
                  </Route>
                  <Route path="/leads">
                    <Tab.Pane eventKey="tab-leads">
                      {showUserDetails ? (
                        <ProjectTracking
                          handleBacktoLeads={handleBacktoLeads}
                          userDetail={userDetail}
                        />
                      ) : (
                        <DataTable handleUserId={handleUserId} />
                      )}
                    </Tab.Pane>
                  </Route>
                  <Route path="/completedProjects">
                    <Tab.Pane eventKey="tab-completedProjects">
                      <p>Completed Projects</p>
                    </Tab.Pane>
                  </Route>
                  <Route path="/scheduleMeetings">
                    <Tab.Pane eventKey="tab-scheduleMeetings">
                      <p>Schedule Meetings</p>
                    </Tab.Pane>
                  </Route>
                  <Route path="/settings">
                    <Tab.Pane eventKey="tab-settings">
                      <p>Settings</p>
                    </Tab.Pane>
                  </Route>
                </Switch>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </Router>
  );
}

export default App;
