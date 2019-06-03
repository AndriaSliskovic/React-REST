import React, {useState} from 'react';

//Potrebno za redirekciju
import { Redirect } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default (props)=>{
  // Koristi se hooks sistem
  // prima parametar url-a na koji se vrsi redirekcija
  const [redirect,setRedirect]=useState(null);

  const onCancel = () => {
    if (redirect) {
      return <Redirect to={redirect} />;
    }
  };
    return(
        <Container>
          <Row>
            <Col md={4}>
              <Button type="submit">Submituj formu</Button>
            </Col>
            <Col md={{ span: 4, offset: 4 }}>
              <Button variant="secondary" onClick={()=>{setRedirect(props.redirect)}}>
                Cancel
              </Button>
              {onCancel()}
            </Col>
          </Row>
        </Container>
    )
}