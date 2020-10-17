import React from 'react';
import Form from './form.js';
import ItemForm from './itemForm.js';

class CreateProject extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="create-project">
          <Form></Form>
          <ItemForm></ItemForm>
      </div>
    );
  }
}

export default CreateProject