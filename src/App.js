import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import logo from "./assets/logo_kmk.png";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ProjectTracking from "./components/ProjectTracking/ProjectTracking";
import DataTable from "./helpers/DataTable/DataTable";
import DropdownCollapse from "./helpers/DropdownCollapse/DropdownCollapse";
import useFetch from "./hooks/useFetch";

function App() {
  const [userId, setUserId] = useState(0);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [sidebarClose, setSidebarClose] = useState(true);

  const handleUserId = (id) => {
    setUserId(id);
    setShowUserDetails(true);
  };

  const { data: userDetail } = useFetch(
    `https://my-json-server.typicode.com/mjofficials/fakeusers/users/${userId}`
  );
  const handleBacktoLeads = () => {
    setShowUserDetails(false);
  };
  const handleSidebarClose = () => {
    setSidebarClose(true);
  };
  const handleSidebarOpen = () => {
    setSidebarClose(false);
  };

  return (
    <Router>
      <div className="App">
        <Tab.Container defaultActiveKey="tab-dashboard">
          <Row className="mx-0 home_tab_container">
            <Col
              sm={4}
              md={3}
              xl={2}
              className={
                sidebarClose ? "panel_left closed" : "panel_left opened"
              }
            >
              <Nav variant="pills" className="flex-column nav_container">
                <Nav.Item>
                  <div className="d-flex">
                    <img
                      src={logo}
                      className="logo_img img-fluid mt-3"
                      alt="logo kmk"
                    />
                    <button
                      className="mobile_sidebarBtn"
                      onClick={handleSidebarClose}
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
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
            <Col sm={8} md={9} xl={10} className="panel_right">
              <header className="mobile_header">
                <div className="d-flex">
                  <img
                    src={logo}
                    className="logo_img img-fluid mt-3"
                    alt="logo kmk"
                  />
                  <button
                    className="mobile_sidebarBtn"
                    onClick={handleSidebarOpen}
                  >
                    <i className="fa-solid fa-bars"></i>
                  </button>
                </div>
              </header>
              <Tab.Content>
                <Switch>
                  <Route exact path="/">
                    <Tab.Pane eventKey="tab-dashboard">
                      <h2 className="section_title">Dashboard</h2>
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
                      <h2 className="section_title">Completed Projects</h2>
                    </Tab.Pane>
                  </Route>
                  <Route path="/scheduleMeetings">
                    <Tab.Pane eventKey="tab-scheduleMeetings">
                      <h2 className="section_title">Schedule Meetings</h2>
                    </Tab.Pane>
                  </Route>
                  <Route path="/settings">
                    <Tab.Pane eventKey="tab-settings">
                      <h2 className="section_title">Settings</h2>
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
