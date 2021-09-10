import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import store from "./redux/store";

import App from "./App";
import Base from "./components/Layout/Base";

describe("<App />", () => {
  it("Expect to not log errors in console", () => {
    // eslint-disable-next-line
    const spy = jest.spyOn(global.console, "error");
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper).not.toBeNull();
    expect(spy).not.toHaveBeenCalled();
  });

  it("Should render and match the snapshot", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("renders page", () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper.find(Base)).toHaveLength(1);
  });
});
