import "./DataTable.scss";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import useFetch from "../../hooks/useFetch";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Loader from "../Loader/Loader";
const { SearchBar } = Search;

const DataTable = ({ handleUserId }) => {
  const {
    data: users,
    isPending,
    error,
  } = useFetch(
    `https://my-json-server.typicode.com/mjofficials/fakeusers/users`
  );
  const handleTableView = (e, row) => {
    console.log("view", row);
    handleUserId(row.id);
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
          <>
            <OverlayTrigger
              key={row.id}
              placement="bottom"
              overlay={<Tooltip id={`tooltip-${row.id}`}>View</Tooltip>}
            >
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
            </OverlayTrigger>
          </>
        );
      },
      sort: true,
    },
    {
      dataField: "edit",
      text: "",
      formatter: (cell, row) => {
        return (
          <OverlayTrigger
            key={row.id}
            placement="bottom"
            overlay={<Tooltip id={`tooltip-${row.id}`}>Edit</Tooltip>}
          >
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
          </OverlayTrigger>
        );
      },
      sort: true,
    },
    {
      dataField: "delete",
      text: "",
      formatter: (cell, row) => {
        return (
          <OverlayTrigger
            key={row.id}
            placement="bottom"
            overlay={<Tooltip id={`tooltip-${row.id}`}>Delete</Tooltip>}
          >
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
          </OverlayTrigger>
        );
      },
      sort: true,
    },
    {
      dataField: "search",
      text: "",
      formatter: (cell, row) => {
        return (
          <OverlayTrigger
            key={row.id}
            placement="bottom"
            overlay={<Tooltip id={`tooltip-${row.id}`}>Search</Tooltip>}
          >
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
          </OverlayTrigger>
        );
      },
      sort: true,
    },
  ];
  const selectRow = {
    mode: "checkbox",
    clickToSelect: true,
    style: { backgroundColor: "#d3d3d3" },
  };
  return (
    <>
      {error && <p>{error}</p>}
      {isPending && <Loader />}

      <ToolkitProvider
        keyField="id"
        data={users}
        columns={columns}
        selectRow={selectRow}
        search
      >
        {(props) => (
          <div>
            <div className="section_header row g-0 mb-3 mb-md-5">
              <h2 className="section_title col-12 col-lg-2">Leads</h2>
              <div className="search_input_container col-12 col-lg-10 flex-wrap flex-md-nowrap">
                <SearchBar {...props.searchProps} className="search_input" />
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
            <hr />
            {users && (
              <BootstrapTable
                {...props.baseProps}
                selectRow={selectRow}
                noDataIndication="Table is Empty"
                bordered={false}
                wrapperClasses="table-responsive"
              />
            )}
          </div>
        )}
      </ToolkitProvider>
    </>
  );
};

export default DataTable;
