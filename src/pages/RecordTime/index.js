import React from "react";
import EmployeeDetails from "./EmployeeDetails";
import Filters from "./Filters";
import TimeRecords from "./TimeRecords";

function RecordTime() {
  return (
    <>
      <div>
        <EmployeeDetails />
      </div>
      <div style={{ margin: "12px 0" }}>
        <Filters />
      </div>
      <div style={{ margin: "12px 0" }}>
        <TimeRecords />
      </div>
    </>
  );
}

export default RecordTime;
