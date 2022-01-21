import React from "react";
import "../form/form.css";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
function form() {
  return (
    <div className="container">
      <Form>
        <FormGroup className="grp">
          <Label for="image">Profile Picture</Label>
          <Input type="file" name="image" id="image" />
          <FormText className="FormText" color="muted">
            Please upload your picture. Formate: jpg or png
          </FormText>
        </FormGroup>
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
          <Label for="examplephone">Phone</Label>
          <Input
            type="tel"
            name="phone"
            id="examplephone"
            placeholder="Enter Your Phone Number"
          />
        </FormGroup>
        <FormGroup className="grp">
          <Label for="exampleFb">Facebook</Label>
          <Input
            type="text"
            name="fb"
            id="exampleFb"
            placeholder="Enter Your Facebook Id Url"
          />
        </FormGroup>
        <FormGroup className="grp">
          <Label for="exampleInsta">Instagram</Label>
          <Input
            type="text"
            name="insta"
            id="exampleInsta"
            placeholder="Enter Your Instagram Id Url"
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

        <Button className="btn" color="primary">Preview</Button>
      </Form>
    </div>
  );
}

export default form;
