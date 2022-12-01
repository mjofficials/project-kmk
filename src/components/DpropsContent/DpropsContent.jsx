import "./DpropsContent.scss";
import Table from "react-bootstrap/Table";
import { useState } from "react";

const DpropsContent = () => {
  return (
    <div className="dProps_content_container">
      <button className="btn_custom btn_sm btn_primary_red mx-0 d-block ms-auto">
        <span className="me-2">
          <i className="fa-solid fa-plus"></i>
        </span>
        Add
      </button>

      <Table responsive className="dprops_table">
        <thead>
          <tr>
            <th>Particulars</th>
            <th>UOM</th>
            <th>Oty</th>
            <th>Rate</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Main Entry Gate (100'X36'X20')</td>
            <td>
              <DInput />
            </td>
            <td>
              <DInput />
            </td>
            <td>
              <DInput />
            </td>
            <td>
              <DInput />
            </td>
          </tr>
          <tr>
            <td>VIP Entry, Main Road, Second Entry</td>
            <td>
              <DInput />
            </td>
            <td>
              <DInput />
            </td>
            <td>
              <DInput />
            </td>
            <td>
              <DInput />
            </td>
          </tr>
          <tr>
            <td>Passage 100'x30'</td>
            <td>
              <DInput />
            </td>
            <td>
              <DInput />
            </td>
            <td>
              <DInput />
            </td>
            <td>
              <DInput />
            </td>
          </tr>
          <tr>
            <td>VIP Passage & General Passage 250' + 250'</td>
            <td>
              <DInput />
            </td>
            <td>
              <DInput />
            </td>
            <td>
              <DInput />
            </td>
            <td>
              <DInput />
            </td>
          </tr>
          <tr>
            <td>Main Mandap And Backdrop 150'x80'</td>
            <td>
              <DInput />
            </td>
            <td>
              <DInput />
            </td>
            <td>
              <DInput />
            </td>
            <td>
              <DInput />
            </td>
          </tr>
          <tr>
            <td>Water Body including</td>
            <td>
              <DInput />
            </td>
            <td>
              <DInput />
            </td>
            <td>
              <DInput />
            </td>
            <td>
              <DInput />
            </td>
          </tr>
          <tr>
            <td>Lounge 80 x 20</td>
            <td>
              <DInput />
            </td>
            <td>
              <DInput />
            </td>
            <td>
              <DInput />
            </td>
            <td>
              <DInput />
            </td>
          </tr>
          <tr>
            <td>Thematic food courts 36'</td>
            <td>
              <DInput />
            </td>
            <td>
              <DInput />
            </td>
            <td>
              <DInput />
            </td>
            <td>
              <DInput />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" className="fw-bold text_danger">
              Total
            </td>
            <td className="fw-bold text_danger">Rs. 50,000</td>
          </tr>
          <tr>
            <td colSpan="6">
              <hr className="m-0" />
            </td>
          </tr>
          <tr>
            <td colSpan="4" className="fw-bold text_danger">
              Grand Total
            </td>
            <td className="fw-bold text_danger">Rs. 20,00,000</td>
          </tr>
        </tfoot>
      </Table>
      <div className="dprops_table_footer_btns">
        <button className="btn_custom btn_sm mx-2">Cancel</button>
        <button className="btn_custom btn_sm btn_primary_red">Save</button>
      </div>
    </div>
  );
};

export const DInput = () => {
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    // console.log("value: ", e.target.value);
    setValue(e.target.value);
  };

  return <input type="text" value={value} onChange={handleInput} />;
};
export default DpropsContent;
