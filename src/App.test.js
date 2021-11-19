// import React from 'react';
// import { render, screen } from '@testing-library/react';
import App from "./App";
import React from "react";
import { shallow } from "enzyme";

// it('renders welcome message', () => {
//   render(<App />);
//   expect(screen.getByText('Learn React')).toBeInTheDocument();
// });
describe("App", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App debug />);

    expect(component).toMatchSnapshot();
  });
});
