import React from 'react';
import ItemForm from './itemForm';
import ProjectDetail from './projectDetail';

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
      billing_percentage: ''
    };
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

  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    // const data = this.objectifyForm(form);
    this.setState({[event.target.name]: event.target.value}, () => {
      const {
        po_number,
        representative,
        customer_name,
        shipping_address,
        email_address,
        invoice_address,
        billing_percentage 
      } = this.state;
      // this.setState(); 
    });

    // if (window.confirm("Ready to save?" + JSON.stringify(data))) {
    //   fetch('./.netlify/functions/projects', {
    //     method: 'POST',
    //     body: JSON.stringify(data),
    //   });
    //   event.target.reset();
    //   console.log('created' + JSON.stringify(data));
    // };
  }

  render() {
    return (
      <div>
        <div className="main-form">
          <form onChange={this.handleSubmit}>
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
              <li>
                <label htmlFor="billing_percentage">Billing Percentage:</label>
                <input id="billing_percentage" name="billing_percentage" type="text" defaultValue="100" />
              </li>
              <li>
                <button>Create Project</button>
              </li>
            </ul>
          </form>
        </div>

        <div className='main-form'>
          project: {this.state.po_number} <br/>
          rep: {this.state.representative} <br/>
          customer: {this.state.customer_name} <br/>
          shipping: {this.state.shipping_address} <br/>
          email address: {this.state.email_address} <br/>
          invoice address: {this.state.invoice_address} <br/>
          billing %: {this.state.billing_percentage} <br/>
          {/* {this.state.po_number.map((name, index) => (
            <li key={index}>
              {name}
            </li>
          ))} */}
      </div>
      </div>
    );
  }
}


export default Form