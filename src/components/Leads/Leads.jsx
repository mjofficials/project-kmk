import DataTable from "../helpers/DataTable/DataTable";
import "./Leads.scss";
const Leads = () => {
  return (
    <>
      <div className="section_header row g-0 mb-5">
        <h2 className="section_title col-12 col-lg-2">Leads</h2>
        <div className="search_input_container col-12 col-lg-10">
          <input type="text" className="search_input" placeholder="Search" />
          <button className="btn_custom btn_primary_red mx-3">
            <span className="me-2">
              <i className="fa-solid fa-plus"></i>
            </span>
            Add New
          </button>
          <button className="btn_custom btn_primary_red">
            Assign to Admin
          </button>
        </div>
      </div>
      <DataTable />
    </>
  );
};

export default Leads;
