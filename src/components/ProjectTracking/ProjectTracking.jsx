import Accordions from "../../helpers/Accordions/Accordions";

const ProjectTracking = ({ handleBacktoLeads, userDetail }) => {
  return (
    <div>
      <button className="btn_back" onClick={handleBacktoLeads}>
        <span className="me-2">
          <i className="fa-solid fa-left-long"></i>
        </span>
        Back to Leads
      </button>
      <div className="section_header row g-0">
        <div className="col-12 col-lg-4">
          <h2 className="section_title">Project Tracking</h2>
          <div className="d-flex mb-3">
            <p className="subtext">{userDetail.leadId}</p>
            <span className="mx-3">|</span>
            <p className="subtext text_danger">Project Tracking</p>
          </div>
        </div>
        <div className="search_input_container col-12 col-lg-8 flex-wrap flex-md-nowrap">
          <input type="text" className="search_input" placeholder="Search" />
          <button className="btn_custom btn_primary_red me-3 mb-3 mb-md-0 mx-md-3">
            <span className="me-2">
              <i className="fa-solid fa-plus"></i>
            </span>
            Add New
          </button>
          <button className="btn_custom btn_primary_red mb-3 mb-md-0">
            Assign to Admin
          </button>
        </div>
      </div>
      <div className="accordions_container">
        <Accordions userObj={userDetail} />
      </div>
    </div>
  );
};

export default ProjectTracking;
