import React, { Component } from 'react';
console.clear();
const { PureComponent } = React;

class Registerform extends Component {
  state = {
    formState: {
       id: '',
       firstName: "",
       lastName: "",
       email: "",
       mode: "submit"
    },
    users: [
       {
          id: 0,
          firstName: "david",
          lastName: "guerrero",
          email: "david_xc3@hotmail.com",
          password:"GreenApple56*",
          updating: false
       }
    ]
 };

 resetFormState = () => {
    this.setState({
       formState: {
          firstName: "",
          lastName: "",
          email: "",
          mode: "submit",
          id: ""
       }
    });
 };

 onChange = event => {
    this.setState({
       formState: {
          ...this.state.formState,
          [event.target.name]: event.target.value
       }
    });
 };

 onSubmit = event => {
    const { users, formState } = this.state;
    event.preventDefault();
    alert("Registered Successfully!");
    const firstName = event.target.querySelector("input[name='firstName']")
       .value;
    const lastName = event.target.querySelector("input[name='lastName']")
       .value;
    const email = event.target.querySelector("input[name='email']").value;
    const password = event.target.querySelector("input[name='password']").value;
    if (formState.mode === "submit") {
       this.setState({
          users: [
             ...this.state.users,
             {
                firstName,
                lastName,
                email,
                password,
                updating: false,
                id: this.state.users[this.state.users.length - 1].id + 1
             }
          ]
       });
    } else if (formState.mode === "edit") {
       const index = users.find((user)=> user.id === formState.id).id;
       users[index] = {
                firstName,
                lastName,
                email,
                password,
                updating: false,
                id: users[index].id
             }
       this.setState({
          users: [...users]
       });
    }

    this.resetFormState();
 };

 updateUser = key => {
    let { users } = this.state;
    users[key].updating = true;

    this.setState({
       formState: { ...this.state.users[key], mode: "edit" },
       users
    });
 };

 deleteUser = key => {
    let { users } = this.state;
    users.splice(key, 1);
    this.setState({
       users: [...users]
    });
 };

 render() {
    const { users, formState } = this.state;
    return (
       <div>
          <Form
             formState={formState}
             onChange={this.onChange}
             onSubmit={this.onSubmit}
          />
          <br />
          <Table
             users={users}
             updateUser={this.updateUser}
             deleteUser={this.deleteUser}
          />
       </div>
    );
 }
}

const Table = ({ users = [], updateUser, deleteUser }) => {
 return (

    <div className="table">
       <div className="table-header">
          <div className="row">
             <div className="column">First Name</div>
             <div className="column">Last Name</div>
             <div className="column">Email</div>
             <div className="column">Password</div>
             <div className="column">Options</div>
          </div>
       </div>
       <div className="table-body">
          {users.map((user, key) => {
             return (
                <div className={`row ${user.updating ? "updating" : ""}`}>
                   <div className="column">{user.firstName}</div>
                   <div className="column">{user.lastName}</div>
                   <div className="column">{user.email}</div>
                   <div className="column">{user.password}</div>
                   <div className="column">
                      <button
                         className="icon"
                         onClick={() => updateUser(key)} // tried to implement update and delete features for each registration
                      >
                         <i class="far fa-edit" />
                      </button>
                      <button className="icon">
                         <i
                            class="fas fa-user-minus"
                            onClick={() => deleteUser(key)}
                         />
                      </button>
                   </div>
                </div>
             );
          })}
       </div>
    </div>
 );
};

const Field = ({ label = "", name = "", value = "",password="",onChange }) => {
 return (
    <div className="field">
       <label htmlFOR={name}>{label}</label>
       <input type="text" name={name} value={value} onChange={onChange} />
    </div>
 );
};

const Form = ({ formState, onChange, onSubmit }) => {
 return (
    <form className="form" onSubmit={onSubmit}>
      <div className="Appheader">
      <br /><br/>Registration Form<br /><br /></div>
      <br />
      <br />
       <fieldset>
          <Field
             name="firstName"
             label="First Name"
             value={formState.firstName}
             onChange={onChange}
          />
          <Field
             name="lastName"
             label="last name"
             value={formState.lastName}
             onChange={onChange}
          />
          <Field
             name="email"
             label="email"
             value={formState.email}
             onChange={onChange}
          />
          <Field
             name="password"
             label="password"
             value={formState.password}
             onChange={onChange}
          />
       
       
       <button className="submitButton" type="submit" >
        Submit
      </button><br /><br />
      <center>Already Registered? Click below to Login </center><br /><br />
      <div className="regbutton">
      <center>
       <a href="/"><button type="button">Login </button></a>
        </center>
        </div>
        </fieldset>
    </form>
 );
};

//ReactDOM.render(<App />, document.getElementById("container"));
export default Registerform;
