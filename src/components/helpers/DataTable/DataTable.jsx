import "./DataTable.scss";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
const { SearchBar } = Search;

const users = [
  {
    id: 0,
    name: "Akash Kumar",
    leadId: "00765454",
    location: "Hyderabad",
    eventDate: "2-8-2022",
    status: 0,
    canEdit: true,
    canDelete: true,
  },
  {
    id: 1,
    name: "Manohar H",
    leadId: "00765455",
    location: "Vijayavada",
    eventDate: "2-8-2022",
    status: 1,
    canEdit: false,
    canDelete: false,
  },
  {
    id: 2,
    name: "Raghavendar",
    leadId: "00765456",
    location: "Bangalore",
    eventDate: "2-8-2022",
    status: 1,
    canEdit: false,
    canDelete: false,
  },
  {
    id: 3,
    name: "Abhishek K",
    leadId: "00765457",
    location: "Hyderabad",
    eventDate: "2-8-2022",
    status: 1,
    canEdit: false,
    canDelete: false,
  },
  {
    id: 4,
    name: "Udith Kumar",
    leadId: "00765458",
    location: "Pune",
    eventDate: "2-8-2022",
    status: 2,
    canEdit: false,
    canDelete: false,
  },
  {
    id: 5,
    name: "Akash Kumar",
    leadId: "00765459",
    location: "Bangalore",
    eventDate: "2-8-2022",
    status: 1,
    canEdit: false,
    canDelete: false,
  },
  {
    id: 6,
    name: "Akash Kumar",
    leadId: "00765460",
    location: "Bangalore",
    eventDate: "2-8-2022",
    status: 1,
    canEdit: false,
    canDelete: false,
  },
  {
    id: 7,
    name: "Manohar H",
    leadId: "00765461",
    location: "Hyderabad",
    eventDate: "2-8-2022",
    status: 1,
    canEdit: false,
    canDelete: false,
  },
  {
    id: 8,
    name: "Raghavendar",
    leadId: "00765462",
    location: "Delhi",
    eventDate: "2-8-2022",
    status: 1,
    canEdit: false,
    canDelete: false,
  },
  {
    id: 9,
    name: "Abhishek K",
    leadId: "00765463",
    location: "Bangalore",
    eventDate: "2-8-2022",
    status: 1,
    canEdit: false,
    canDelete: false,
  },
  {
    id: 10,
    name: "Udith Kumar",
    leadId: "00765464",
    location: "Hyderabad",
    eventDate: "2-8-2022",
    status: 2,
    canEdit: false,
    canDelete: false,
  },
  {
    id: 11,
    name: "Raghavendar",
    leadId: "00765465",
    location: "Delhi",
    eventDate: "2-8-2022",
    status: 1,
    canEdit: false,
    canDelete: false,
  },
  {
    id: 12,
    name: "Abhishek K",
    leadId: "00765466",
    location: "Bangalore",
    eventDate: "2-8-2022",
    status: 1,
    canEdit: false,
    canDelete: false,
  },
];

const DataTable = () => {
  const handleTableView = (e, row) => {
    console.log("view", row);
  };

  const handleTableEdit = (e, row) => {
    console.log("edit", row);
  };

  const handleTableDelete = (e, row) => {
    console.log("delete", row);
  };

  const handleTableSearch = (e, row) => {
    console.log("search", row);
  };
  const columns = [
    {
      dataField: "name",
      text: "Customer Name",
      formatter: (cell, row) => {
        return <span className="fw-bold">{row.name}</span>;
      },
    },
    {
      dataField: "leadId",
      text: "Lead Id",
      formatter: (cell, row) => {
        return <span className="fw-bold text_danger">{row.leadId}</span>;
      },
    },
    {
      dataField: "location",
      text: "Location",
    },
    {
      dataField: "eventDate",
      text: "Event Date",
    },
    {
      dataField: "status",
      text: "Status",
      formatter: (cell, row) => {
        if (row.status === 0) {
          return <span className="status0">New</span>;
        }
        if (row.status === 1) {
          return <span className="status1">Pipeline</span>;
        }
        if (row.status === 2) {
          return <span className="status2">Assigned TO SP</span>;
        }
      },
    },
    {
      dataField: "view",
      text: "",
      formatter: (cell, row) => {
        return (
          <button
            className="table_btn"
            onClick={(e) => {
              handleTableView(e, row);
            }}
          >
            <span>
              <i className="fa-solid fa-eye"></i>
            </span>
          </button>
        );
      },
      sort: true,
    },
    {
      dataField: "edit",
      text: "",
      formatter: (cell, row) => {
        return (
          <button
            className="table_btn"
            onClick={(e) => {
              handleTableEdit(e, row);
            }}
            disabled={row.canEdit ? false : true}
          >
            <span>
              <i className="fa-solid fa-pen"></i>
            </span>
          </button>
        );
      },
      sort: true,
    },
    {
      dataField: "delete",
      text: "",
      formatter: (cell, row) => {
        return (
          <button
            className="table_btn"
            onClick={(e) => {
              handleTableDelete(e, row);
            }}
            disabled={row.canDelete ? false : true}
          >
            <span>
              <i className="fa-regular fa-trash-can"></i>
            </span>
          </button>
        );
      },
      sort: true,
    },
    {
      dataField: "search",
      text: "",
      formatter: (cell, row) => {
        return (
          <button
            className="table_btn"
            onClick={(e) => {
              handleTableSearch(e, row);
            }}
          >
            <span>
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </button>
        );
      },
      sort: true,
    },
  ];
  const selectRow = {
    mode: "checkbox",
    clickToSelect: true,
    style: { backgroundColor: "#fcb6b7" },
  };
  return (
    <>
      <ToolkitProvider
        keyField="id"
        data={users}
        columns={columns}
        selectRow={selectRow}
        search
      >
        {(props) => (
          <div>
            <div className="section_header row g-0 mb-5">
              <h2 className="section_title col-12 col-lg-2">Leads</h2>
              <div className="search_input_container col-12 col-lg-10">
                <SearchBar {...props.searchProps} className="search_input" />
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
            <hr />
            <BootstrapTable
              {...props.baseProps}
              selectRow={selectRow}
              noDataIndication="Table is Empty"
              bordered={false}
              wrapperClasses="table-responsive"
            />
          </div>
        )}
      </ToolkitProvider>
    </>
  );
};

export default DataTable;
