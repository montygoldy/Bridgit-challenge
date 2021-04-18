import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow, mount } from "enzyme";
import App from "../App";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("../i18n");

const tempConfig = {
  "categories": ["all", "fruit", "vegetables"],
  "allow_clearing": true,
  "allow_filtering": true,
  "sorting_blacklist": ["actions"],
  "table_categories": [{
      "label": "item", "value": "entry_table__item_column_heading_text"
  }, {
      "label": "category", "value": "entry_table__category_column_heading_text"
  }, {
      "label": "price", "value": "entry_table__price_column_heading_text"
  }, {
      "label": "actions", "value": "entry_table__actions_text"
  }],
  "table_row_action": ["DELETE"]
}

it("triggers componentDidMount", async () => {
  var mock = new MockAdapter(axios);
  mock.onGet(`${process.env.PUBLIC_URL}/config/config.json`).reply(200, tempConfig);

  const wrapper = shallow(<App />);

  await wrapper.instance().componentDidMount();
  
  expect(window.config.allow_clearing).toBe(true);
  expect(wrapper.state("isReady")).toBe(true);
});