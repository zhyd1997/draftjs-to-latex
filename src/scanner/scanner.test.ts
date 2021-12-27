import { convertFromRaw } from "draft-js";
import { scan } from "./scanner";
import { noPreviousBlock } from "./__mocks__/list-item";

describe("Scanner", () => {
  describe("unstyled", () => {
    it.todo("should return the correct tex");
  });

  describe("atomatic", () => {
    it.todo("should return the correct tex");
  });

  describe("code block", () => {
    it.todo("should return the correct tex");
  });

  describe("list-item", () => {
    describe("continous depth", () => {
      it("should return the correct tex", () => {
        const { contentState, generatedTex } = noPreviousBlock;

        const mockedContentState = convertFromRaw(contentState);

        const tex = scan(mockedContentState);

        expect(tex).toBe(generatedTex);
      });
    });
  });

  describe("other case", () => {
    it.todo("should return the correct tex");
  });
});
