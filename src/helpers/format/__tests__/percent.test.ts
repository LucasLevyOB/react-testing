import percent from "../percent";

describe("Format Helpers Tests", () => {
  it("Format positive percentage", () => {
    expect(percent(10)).toBe("10,00%");
  });
  it("Format negative percentage", () => {
    expect(percent(-25.34)).toBe("-25,34%");
  });
});
