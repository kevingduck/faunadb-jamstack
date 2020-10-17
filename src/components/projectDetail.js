import React from 'react';

class ProjectDetail extends React.Component {
  constructor() {
    super();
    // this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.objectifyForm = this.objectifyForm.bind(this);
  }

  objectifyForm(formArray) {
    //serialize data function
    var returnArray = {};
    debugger;
    for (var i = 0; i < formArray.length; i++) {
      returnArray[formArray[i]['name']] = formArray[i]['value'];
    }
    return returnArray;
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = this.objectifyForm(form);
    if (window.confirm("Ready to save?" + JSON.stringify(data))) {
      fetch('./.netlify/functions/projects', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      event.target.reset();
      console.log('created' + JSON.stringify(data));
    };
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>PO Number</th>
              <th>Representative </th>
              <th>Customer </th>
              <th>Shipping Address </th>
              <th>Email Address </th>
              <th>Paper Invoice Address </th>
              <th>Billing % </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>test po number</td>
              <td>test rep</td>
              <td>test customer</td>
              <td>test shipping</td>
              <td>test email</td>
              <td>test paper</td>
              <td>test billing</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}


export default ProjectDetail