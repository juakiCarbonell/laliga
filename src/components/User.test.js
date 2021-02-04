import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";

import User from "./User";
const mockStore = configureMockStore([thunk]);

Enzyme.configure({ adapter: new Adapter() });

describe("<User /> Logged in", () => {
  const store = mockStore({
    userLogin: { token: "123" },
  });
  const user = { first_name: "Test" };
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <User user={user} />
        </Router>
      </Provider>
    );
  });
  it("should should render a show button if logged in", () => {
    expect(wrapper.find("a")).toHaveLength(1);
  });
});

describe("<User /> Logged out", () => {
  const store = mockStore({
    userLogin: { token: null },
  });
  const user = { first_name: "Test" };
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <User user={user} />
        </Router>
      </Provider>
    );
  });
  it("should should render a show button if logged in", () => {
    expect(wrapper.find("a")).toHaveLength(0);
  });
});
