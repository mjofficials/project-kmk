const ProjectTracking = ({ handleBacktoLeads, userDetail }) => {
  return (
    <div>
      <button className="btn_back" onClick={handleBacktoLeads}>
        <span className="me-2">
          <i class="fa-solid fa-left-long"></i>
        </span>
        Back to Leads
      </button>
      <div className="section_header row g-0">
        <h2 className="section_title col-12 col-lg-2">Project Tracking</h2>
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
      <div className="d-flex">
        <p className="subtext">{userDetail.leadId}</p>
        <span className="mx-3">|</span>
        <p className="subtext text_danger">Project Tracking</p>
      </div>
    </div>
  );
};

export default ProjectTracking;
