import React from "react";
import { screen, render } from "@testing-library/react";
import { Sidebar } from ".";

describe("<SideBar />", () => {
  it("should be child content correctly", () => {
    render(
      <Sidebar>
        <div>This is a sidebar</div>
      </Sidebar>
    );

    expect(screen.findAllByText("This is a sidebar")).toBeTruthy();
  });
});
