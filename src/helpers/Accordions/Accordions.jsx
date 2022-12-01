import "./Accordions.scss";
import Accordion from "react-bootstrap/Accordion";
import UserInfoTable from "../../components/UserInfoTable/UserInfoTable";
import BudgetInfo from "../../components/BudgetInfo/BudgetInfo";

function Accordions({ userObj }) {
  return (
    <Accordion defaultActiveKey="3" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <span className="accnbtn_text">Client Information</span>
        </Accordion.Header>
        <Accordion.Body>
          <UserInfoTable userObj={userObj} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <span className="accnbtn_text">Event Information</span>
        </Accordion.Header>
        <Accordion.Body>Event Information content</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <span className="accnbtn_text">Kmk Information</span>
        </Accordion.Header>
        <Accordion.Body>Kmk Information content</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          <span className="accnbtn_text">Budget Information</span>
        </Accordion.Header>
        <Accordion.Body>
          <BudgetInfo />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>
          <span className="accnbtn_text">Gallery</span>
        </Accordion.Header>
        <Accordion.Body>Gallery</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Accordions;
