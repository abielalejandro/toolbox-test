import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import store from "../../redux/store";

import Page01 from "./index";
import FormData from "../Form/FormData";
import ItemResultList from "../ItemResultList/ItemResultList";

describe("<Page01 />", () => {
  it("Expect to not log errors in console", () => {
    // eslint-disable-next-line
    const spy = jest.spyOn(global.console, "error");
    const wrapper = shallow(
      <Provider store={store}>
        <Page01 />
      </Provider>
    );
    expect(wrapper).not.toBeNull();
    expect(spy).not.toHaveBeenCalled();
  });

  it("Should render and match the snapshot", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Page01 />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("renders page", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Page01 />
      </Provider>
    );
    expect(wrapper.find(FormData)).toHaveLength(1);
    expect(wrapper.find(ItemResultList)).toHaveLength(1);
  });
});
