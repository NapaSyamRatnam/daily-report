import React, { useState } from 'react';

const DailyReport = () => {
  const [report, setReport] = useState({
    date: '',
    employeeId: '',
    name: '',
    // Add other fields as necessary
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReport({ ...report, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    console.log(report);
  };

  return (
    <div className="daily-report">
    {/* <h1>Daily Report</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="date" name="date" value={report.date} onChange={handleChange} />
        </label>
        <label>
          Employee ID:
          <input type="text" name="employeeId" value={report.employeeId} onChange={handleChange} />
        </label>
        <label>
          Name:
          <input type="text" name="name" value={report.name} onChange={handleChange} />
        </label>
        <button type="submit">ADD ENTRY</button>
        <button type="button">CANCEL</button>
      </form> */}
      {/* Add table component here */}
      <div className="daily-report">
  <h1>Daily Report</h1>
  <div className="form-container"><br/><br/>
  <pre>
  Fullname: <input type="text" id="Full Name" placeholder="name"/>
    <input type="date" id="date" name="date" />
    <input type="text" id="employeeId" name="employeeId" placeholder="Employee ID" />
    <input type="text" id="name" name="name" placeholder="Name" />
    <button>Add Entry</button>
    </pre>
  </div>
  <table style="border:no">
    <thead>
      <tr>
        <th>Report ID</th>
        <th>Employee</th>
        <th>Date</th>
        <th>Shift</th>
        <th>Location</th>
        <th>Hours Worked</th>
        <th>Job Code</th>
      </tr>
    </thead>
    <tbody>
      {/* Table rows will be populated here */}
    </tbody>
  </table>
</div>


    </div>
  );
};

export default DailyReport;



