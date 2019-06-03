import React from "react";
import { Field, reduxForm } from "redux-form";

// Bootstrap-ove komponente
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import SubmitGrupa from '../../../customComponents/SubmitGrupa';

import { Redirect } from "react-router-dom";
import history from "../../../../history";

// Validacija
// 1. nacin inline validacije ugradjena fja u Reduxu
import * as validacija from "../ValidacijaPolja";
// 2. nacin sa cusomizovanim spoljnim fajlom
import { validiranjePodataka } from "../validiranjePodataka";
// 3. nacin spoljna biblioteka redux-form-validators
import { required, email } from "redux-form-validators";

class UserForm extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state={redirect:false}
  // }

  state = {
    redirect: false
  };

  renderError = formProps => {
    console.log(formProps.meta.error);

    return (
      <div>
        <Alert variant="danger">{formProps.meta.error}</Alert>
      </div>
    );
  };

  renderInput = formProps => {
    return (
      <div>
        <Col md={8}>
          <Form.Group>
            <Form.Label>{formProps.label}</Form.Label>
            <Form.Control
              {...formProps.input}
              size="sm"
              type={formProps.type}
              placeholder={formProps.placeholder}
              id={formProps.id}
            />
            {/* <div>{formProps.meta.error}</div> */}
            {!formProps.meta.valid && formProps.meta.touched
              ? this.renderError(formProps)
              : null}
          </Form.Group>
        </Col>
      </div>
    );
  };

  onSubmit = (formValues, formProps) => {
    // console.log(this.props)
    this.props.onFormSubmit(formValues);
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  onCancel = location => {
    if (this.state.redirect) {
      return <Redirect to={location} />;
    }
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        encType="multipart/form-data"
      >
        <Field
          name="name"
          id="name"
          type="text"
          className="form-control"
          label="Ime usera"
          placeholder="Ime korisnika"
          component={this.renderInput}
          validate={[validacija.required, validacija.minLength4]}
        />
        <Field
          name="email"
          id="email"
          type="email"
          className="form-control"
          label="Email"
          placeholder="Email usera"
          component={this.renderInput}
          validate={[validacija.required, validacija.emailAdresa]}
          // validate={email()}
        />
        {/* Ako je edit form ne treba polje za password */}
        {this.props.formType !== "EDIT" ? (
          <Field
            name="password"
            id="password"
            type="password"
            className="form-control"
            label="Lozinka"
            component={this.renderInput}
            validate={[validacija.required, validacija.password]}
          />
        ) : null}

        {/* <Field
                name="avatar"
                id="avatar"
                type="file"
                className="form-control"
                label="Ubaci sliku"
                component={this.renderInput}
              /> */}

            
            {/* Submit grupa  uneti url za redirekciju*/}
            <SubmitGrupa redirect="/users/list"/>
      </form>
    );
  }
}

// const validiranjePodataka = formValues => {
//   const errors = {};
//   const email = formValues.email;
//   const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
//   const name = formValues.name;
//   const minBrKaraktera = 4;
//   const pass = formValues.password;
//   const passRegex = /^[a-zA-Z]\w{3,14}$/;
//   if (!email) {
//     errors.email = "Polje za email ne sme ostati prazno";
//   }
//   if (email && !emailRegex.test(email)) {
//     errors.email = "Unesite ispravnu email adresu";
//   }
//   if (!name) {
//     errors.name = "Polje za name ne sme ostati prazno";
//   }
//   if (name && name.length < minBrKaraktera) {
//     errors.name = `Polje za name ne sme biti manje od ${minBrKaraktera} karaktera`;
//   }
//   if (!pass) {
//     errors.pass = "Morate popuniti polje za lozinku";
//   }
//   if (pass && !passRegex.test(pass)) {
//     errors.pass =
//       "Lozinka mora imati izmedju 4 i 15 karaktera i prvo slovo mora biti veliko";
//   }

//   return errors;
// };

export default reduxForm({
  form: "userForm"
  // validate ugradjena fja, drugi parametar sluzi za custimizaciju
  // validate: validiranjePodataka
})(UserForm);
