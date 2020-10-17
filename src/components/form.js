import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      po_number: '',
      representative: '',
      customer_name: '',
      shipping_address: '',
      email_address: '',
      invoice_address: '',
      items: {
        item_number: '',
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.objectifyForm = this.objectifyForm.bind(this);
  }

  objectifyForm(formArray) {
    //serialize data function
    var returnArray = {};
    for (var i = 0; i < formArray.length; i++) {
      returnArray[formArray[i]['name']] = formArray[i]['value'];
    }
    return returnArray;
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value }, () => {
      const {
        po_number,
        representative,
        customer_name,
        shipping_address,
        email_address,
        invoice_address,
      } = this.state;
    });
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
      console.log('created' + JSON.stringify(data));
    };
    event.target.reset();
  }

  render() {
    const data = [this.state];

    return (
      <div className="container">
        <h2>New Project</h2>
        <div className="row">
          <div className="col main-form form-inline">
            <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
              <ul>
                <li>
                  <label htmlFor="po_number">PO Number:</label>
                  <input id="po_number" name="po_number" type="text" />
                </li>
                <li>
                  <label htmlFor="representative">Representative:</label>
                  <input id="representative" name="representative" type="text" />
                </li>
                <li>
                  <label htmlFor="customer_name">Customer Name:</label>
                  <input id="customer_name" name="customer_name" type="text" />
                </li>
                <li>
                  <label htmlFor="shipping_address">Shipping Address:</label>
                  <input id="shipping_address" name="shipping_address" type="text" />
                </li>
                <li>
                  <label htmlFor="email_address">Email Address:</label>
                  <input id="email_address" name="email_address" type="email" />
                </li>
                <li>
                  <label htmlFor="invoice_address">Paper Invoice Address:</label>
                  <input id="invoice_address" name="invoice_address" type="text" />
                </li>
              </ul>
            </form>
          </div>
          <div className='col preview'>
            <table className="table">
              <thead>
                <tr>
                  <th>PO Number</th>
                  <th>Representative</th>
                  <th>Customer Name</th>
                  <th>Shipping</th>
                  <th>Email</th>
                  <th>Paper Invoice Address</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.po_number}</td>
                  <td>{this.state.representative}</td>
                  <td>{this.state.customer_name}</td>
                  <td>{this.state.shipping_address}</td>
                  <td>{this.state.email_address}</td>
                  <td>{this.state.invoice_address}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    );
  }
}

export default Form