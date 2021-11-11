import { renderHook, act } from "@testing-library/react-hooks";
import { useInputValue } from "./useInputValue";

describe("when rendered", () => {
  it("returns current initial value", () => {
    const { result } = renderHook(() => useInputValue("Test string"));
    expect(result.current.value).toEqual("Test string");
  });
});

describe("when called the update method", () => {
  it("changes the value and input it", () => {
    const { result } = renderHook(() => useInputValue("Test string"));
    act(() => result.current.onChange({ target: { value: "Updated" } }));
    expect(result.current.value).toEqual("Updated");
  });
});

describe("when re-rendered with another inintial value", () => {
  it("updates the value", () => {
    const { result, rerender } = renderHook(({ text }) => useInputValue(text), {
      initialValue: { text: "Test String" },
    });

    rerender({ text: "New updated!!" });
    expect(result.current.value).toEqual("New updated!!");
  });
});
