import { render } from "@testing-library/react";
import List from "./List";

describe("List", () => {
  it("render tasks", () => {
    const tasks = [
      { id: 1, title: "아무 일도 하기 싫다" },
      { id: 2, title: "건물 매입" },
    ];
    const { container } = render(<List tasks={tasks} />);

    expect(container).toHaveTextContent("아무 일도 하기 싫다");
    expect(container).toHaveTextContent("건물 매입");
  });
});
