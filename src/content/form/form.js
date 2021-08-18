import React from "react";
import "../form/form.css";
import { Button, Form, FormGroup, Label, Input} from "reactstrap";
function form() {
  return (
    <div>
        <Form>
          <FormGroup className="grp">
            <Label for="name">Full Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Full Name"
            />
          </FormGroup>
          <FormGroup className="grp">
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Enter Email address"
            />
          </FormGroup>
          <FormGroup className="grp">
            <Label for="exampleText">About Me</Label>
            <Input
              type="textarea"
              name="text"
              id="exampleText"
              placeholder="Write about yourself"
            />
          </FormGroup>
          <FormGroup className="grp">
            <Label for="name">Designation</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Designation"
            />
          </FormGroup>
          <FormGroup className="grp">
            <Label for="name">Designation</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Designation"
            />
          </FormGroup>
    
          <Button>Preview</Button>
        </Form>
    </div>
  );
}

export default form;
