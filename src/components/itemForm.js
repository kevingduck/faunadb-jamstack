import React from 'react';

class ItemForm extends React.Component {
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
      <div className="main-form item-form">
        <form onSubmit={this.handleSubmit}>
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
              <label htmlFor="insurance_needed">Insurance Needed?:</label>
              <input id="insurance_needed" name="insurance_needed" type="checkbox" />
            </li>
            <li>
              <label htmlFor="sales_tax_needed">Sales Tax Needed?:</label>
              <input id="sales_tax_needed" name="sales_tax_needed" type="checkbox"/>
            </li>
            <li>
              <button>Add Item to Project</button>
            </li>
          </ul>
        </form>
      </div>
    );
  }
}


export default ItemForm