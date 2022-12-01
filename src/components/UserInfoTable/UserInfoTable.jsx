import Table from "react-bootstrap/Table";
import "./UserInfoTable.scss";

const UserInfoTable = ({ userObj }) => {
  return (
    <Table responsive borderless className="userInfo_table">
      <tbody>
        <tr>
          <td>Customer Name:</td>
          <td>{userObj.name || "-"}</td>
        </tr>
        <tr>
          <td>Lead ID:</td>
          <td className="text_danger">{userObj.leadId || "-"}</td>
        </tr>
        <tr>
          <td>Location:</td>
          <td>{userObj.location || "-"}</td>
        </tr>
        <tr>
          <td>Event Date:</td>
          <td>{userObj.eventDate || "-"}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default UserInfoTable;
