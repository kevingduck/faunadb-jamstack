import React from 'react';

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item_numer: '',
      vendor: '',
      quantity: '',
      description: '',
      unit_cost: '',
      unit_sales_price: '',
      insurance_needed: '',
      sales_tax_needed: ''
    }

    this.handleChange = this.handleChange.bind(this);
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

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value }, () => {
      const {
        item_numer,
        vendor,
        quantity,
        description,
        unit_cost,
        unit_sales_price,
        insurance_needed,
        sales_tax_needed
      } = this.state;
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = this.objectifyForm(form);
    if (window.confirm("Ready to save?" + JSON.stringify(data))) {
      fetch('./.netlify/functions/items', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      event.target.reset();
      console.log('created' + JSON.stringify(data));
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col main-form item-form form-inline">
            <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
              <ul>
                <li>
                  <label htmlFor="item_number">Item Number:</label>
                  <input id="item_number" name="item_number" type="text" />
                </li>
                <li>
                  <label htmlFor="vendor">Vendor:</label>
                  <input id="vendor" name="vendor" type="text" />
                </li>
                <li>
                  <label htmlFor="quantity">Quantity:</label>
                  <input id="quantity" name="quantity" type="text" />
                </li>
                <li>
                  <label htmlFor="description">Description:</label>
                  <input id="description" name="description" type="text" />
                </li>
                <li>
                  <label htmlFor="unit_cost">Unit Cost:</label>
                  <input id="unit_cost" name="unit_cost" type="text" />
                </li>
                <li>
                  <label htmlFor="unit_sales_price">Unit Sales Price:</label>
                  <input id="unit_sales_price" name="unit_sales_price" type="text" />
                </li>
                <li>
                  <label htmlFor="insurance_needed">Insurance?:</label>
                  <input id="insurance_needed" name="insurance_needed" type="checkbox" />
                </li>
                <li>
                  <label htmlFor="sales_tax_needed">Sales Tax?:</label>
                  <input id="sales_tax_needed" name="sales_tax_needed" type="checkbox" />
                </li>
              </ul>
              <button type='submit'>
                Add Another Item
            </button>
            </form>
          </div>
          <div className="col preview">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th>Item Number</th>
                  <th>Vendor</th>
                  <th>Quantity</th>
                  <th>Description</th>
                  <th>Unit Cost</th>
                  <th>Unit Sales Price</th>
                  <th>Insurance Needed?</th>
                  <th>Salex tax Needed?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.item_number}</td>
                  <td>{this.state.vendor}</td>
                  <td>{this.state.quantity}</td>
                  <td>{this.state.description}</td>
                  <td>{this.state.unit_cost}</td>
                  <td>{this.state.unit_sales_price}</td>
                  <td>{this.state.insurance_needed}</td>
                  <td>{this.state.sales_tax_needed}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}


export default ItemForm