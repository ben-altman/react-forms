import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={(event) => this.props.handleFirstNameChange(event)}
            value={this.props.formData.firstName}
          />
          <input
            type="text"
            onChange={(event) => this.props.handleLastNameChange(event)}
            value={this.props.formData.lastName}
          />
        </form>
      </div>
    )
  }

  // state = {
  //   firstName: "John",
  //   lastName: "Henry",
  //   submittedData: [],
  // }

  // handleFirstNameChange = event => {
  //   this.setState({
  //     firstName: event.target.value
  //   })
  // }

  // handleLastNameChange = event => {
  //   this.setState({
  //     lastName: event.target.value
  //   })
  // }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   let formData = {
  //     firstName: this.state.firstName,
  //     lastName: this.state.lastName,
  //   };
  //   // the next line represents a function passed in as a prop that will handle sending data off
  //   // this.sendFormDataSomewhere(formdata);
  //   let dataArray = this.state.submittedData.concat(formData);
  //   this.setState({ submittedData: dataArray });
  // };

  // listOfSubmissions = () => {
  //   return this.state.submittedData.map((data, idx) => {
  //     return (
  //       <div key={idx}>
  //         <span>{data.firstName}</span> <span>{data.lastName}</span>
  //       </div>
  //     );
  //   });
  // };

  // render() {
  //   return (
  //     <div>
  //       <form onSubmit={event => this.handleSubmit(event)}>
  //         <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
  //         <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
  //         <input type="submit" />
  //       </form>
  //       {this.listOfSubmissions()}
  //     </div>
  //   )
  // }
}

export default Form;