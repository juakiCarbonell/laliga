import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Header";
const mockStore = configureMockStore([thunk]);

Enzyme.configure({ adapter: new Adapter() });

describe("<Header /> Logged in", () => {
  const store = mockStore({
    userLogin: { token: "123" },
  });
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );
  });
  it("should should render a logout button if logged in", () => {
    expect(wrapper.find("button").text()).toEqual("Logout");
  });
});

describe("<Header /> Logged out", () => {
  const store = mockStore({
    userLogin: { token: null },
  });
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );
  });
  it("should should render a login button if logged out", () => {
    expect(wrapper.find("a").text()).toEqual("Login");
  });
});
