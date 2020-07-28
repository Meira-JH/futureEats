import React from "react";
import { shallow } from "enzyme";
import {
  Form,
  LoginWrapper,
  AdressHeader,
  BackIcon,
  Logo,
  MyAddress,
  Inputs,
  SaveButton,
} from "./style";
import { PageAddressRegistration } from "./index";
import renderer from "react-test-renderer";

describe("Testing PageAddressRegistration", () => {
  test("Testando styled do Form", () => {
    const newSnapShot = renderer.create(<Form />).toJSON();

    expect(newSnapShot).toMatchSnapshot();
  });
  test("Testando styled do LoginWrapper", () => {
    const newSnapShot = renderer.create(<LoginWrapper />).toJSON();

    expect(newSnapShot).toMatchSnapshot();
  });
  test("Testando styled do AdressHeader", () => {
    const newSnapShot = renderer.create(<AdressHeader />).toJSON();

    expect(newSnapShot).toMatchSnapshot();
  });
  test("Testando styled do MyAddress", () => {
    const newSnapShot = renderer.create(<MyAddress />).toJSON();

    expect(newSnapShot).toMatchSnapshot();
  });
  test("Testando styled do Inputs", () => {
    const newSnapShot = renderer.create(<Inputs />).toJSON();

    expect(newSnapShot).toMatchSnapshot();
  });
  test("Testando styled do SaveButton", () => {
    const newSnapShot = renderer.create(<SaveButton />).toJSON();

    expect(newSnapShot).toMatchSnapshot();
  });
  test("Testando styled do BackIcon", () => {
    const newSnapShot = renderer.create(<BackIcon />).toJSON();

    expect(newSnapShot).toMatchSnapshot();
  });
});
