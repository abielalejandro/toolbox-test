import React from "react";
import { shallow } from "enzyme";
import ItemResult from "./ItemResult";

describe("<ItemResult />", () => {
  it("Expect to not log errors in console", () => {
    // eslint-disable-next-line
    const spy = jest.spyOn(global.console, "error");
    const wrapper = shallow(
      <ItemResult
        result={{ isPalindrome: true, origin: "ana", text: "ana" }}
      ></ItemResult>
    );
    expect(wrapper).not.toBeNull();
    expect(spy).not.toHaveBeenCalled();
  });

  it("Should render and match the snapshot", () => {
    const wrapper = shallow(
      <ItemResult
        result={{ isPalindrome: true, origin: "ana", text: "ana" }}
      ></ItemResult>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("renders an `.alert`", () => {
    const wrapper = shallow(
      <ItemResult
        result={{ isPalindrome: true, origin: "ana", text: "ana" }}
      ></ItemResult>
    );
    expect(wrapper.find("div.alert")).toBeTruthy();
  });
});
