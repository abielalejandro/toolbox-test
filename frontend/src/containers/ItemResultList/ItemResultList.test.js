import React from "react";
import { shallow } from "enzyme";
import ItemResultList from "./ItemResultList";
import ItemResult from "../../components/ItemResult/ItemResult";

import mockData from "./mockData.json";

describe("<ItemResultList />", () => {
  it("Expect to not log errors in console", () => {
    // eslint-disable-next-line
    const spy = jest.spyOn(global.console, "error");
    const wrapper = shallow(<ItemResultList items={mockData}></ItemResultList>);
    expect(wrapper).not.toBeNull();
    expect(spy).not.toHaveBeenCalled();
  });

  it("Should render and match the snapshot", () => {
    const wrapper = shallow(<ItemResultList items={mockData}></ItemResultList>);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders items", () => {
    const wrapper = shallow(<ItemResultList items={mockData}></ItemResultList>);
    expect(wrapper.find(ItemResult)).toHaveLength(mockData.length);
  });
});
