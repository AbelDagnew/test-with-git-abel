import React from 'react';
import FormCode from './FormCode';


class App extends React.Component {
  submit = (values) => {
    console.log(values);
  }
  render() {
    return (
      <div className="container">
        <h3 className="jumbotron">Redux Form Validation</h3>
        <h2>dshjdhhddhdhdh</h2>
        <h3>gfgf</h3>
        <FormCode onSubmit={this.submit} />
      </div>      
    )
  }
}

export default App;