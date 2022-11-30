import BootstrapTable from "react-bootstrap-table-next";

const products = [
  {
    id: 0,
    name: "asdf",
    leadId: "00765454",
    location: "Hyderabad",
    eventDate: "2-8-2022",
    status: 0,
  },
];

const handleTableView = (e) => {
  console.log(e);
};
const ViewButton = () => {
  return <button onClick={(e) => handleTableView(e)}>view</button>;
};

const columns = [
  {
    dataField: "name",
    text: "Customer Name",
  },
  {
    dataField: "leadId",
    text: "Lead Id",
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
  },
  {
    dataField: "view",
    text: "",
    formatter: ViewButton,
    sort: true,
  },
];
const selectRow = {
  mode: "checkbox",
  clickToSelect: true,
};

const DataTable = () => {
  return (
    <>
      <BootstrapTable
        keyField="id"
        data={products}
        columns={columns}
        selectRow={selectRow}
      />
    </>
  );
};

export default DataTable;
