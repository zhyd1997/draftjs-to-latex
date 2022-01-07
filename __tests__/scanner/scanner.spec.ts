import { convertFromRaw, RawDraftContentState } from "draft-js";
import { scan } from "../../src/scanner";
import {
  testUnStyledSample1,
  testUnStyledSample2,
  testUnStyledSample3,
  testUnStyledSample4,
} from "../__mocks__/unstyled";
import {
  noPreviousBlock,
  testSample2,
  testSample3,
  testSample4,
  testSample5,
  testSample6,
} from "../__mocks__/list-item";
import { testAtomicSample1 } from "../__mocks__/atomic";
import { testBlockSample1 } from "../__mocks__/blocks";

describe("Scanner", () => {
  describe("unstyled", () => {
    describe("plain text", () => {
      it("should return the correct tex", () => {
        const { contentState, generatedTex } = testUnStyledSample1;

        const mockedContentState = convertFromRaw(contentState);

        const tex = scan(mockedContentState);

        expect(tex).toBe(generatedTex);
      });
    });

    describe("no overlapping styles", () => {
      it("should return the correct tex", () => {
        const { contentState, generatedTex } = testUnStyledSample2;

        const mockedContentState = convertFromRaw(
          contentState as RawDraftContentState
        );

        const tex = scan(mockedContentState);

        expect(tex).toBe(generatedTex);
      });
    });

    describe("overlapping styles", () => {
      it.todo("should return the correct tex");
    });

    describe("escape especial symbols", () => {
      it("should return the correct tex", () => {
        const { contentState, generatedTex } = testUnStyledSample4;

        const mockedContentState = convertFromRaw(
          contentState as RawDraftContentState
        );

        const tex = scan(mockedContentState);

        expect(tex).toBe(generatedTex);
      });
    });
  });

  describe("atomatic", () => {
    describe("math equation", () => {
      it("should return the correct tex", () => {
        const { contentState, generatedTex } = testAtomicSample1;

        const mockedContentState = convertFromRaw(contentState);

        const tex = scan(mockedContentState);

        expect(tex).toBe(generatedTex);
      });
    });
  });

  describe("code block", () => {
    it.todo("should return the correct tex");
  });

  describe("list-item", () => {
    describe("case 1", () => {
      it("should return the correct tex", () => {
        const { contentState, generatedTex } = noPreviousBlock;

        const mockedContentState = convertFromRaw(contentState);

        const tex = scan(mockedContentState);

        expect(tex).toBe(generatedTex);
      });
    });

    describe("case 2", () => {
      it("should return the correct tex", () => {
        const { contentState, generatedTex } = testSample2;

        const mockedContentState = convertFromRaw(contentState);

        const tex = scan(mockedContentState);

        expect(tex).toBe(generatedTex);
      });
    });

    describe("case 3", () => {
      it("should return the correct tex", () => {
        const { contentState, generatedTex } = testSample3;

        const mockedContentState = convertFromRaw(contentState);

        const tex = scan(mockedContentState);

        expect(tex).toBe(generatedTex);
      });
    });

    describe("case 4", () => {
      it("should return the correct tex", () => {
        const { contentState, generatedTex } = testSample4;

        const mockedContentState = convertFromRaw(contentState);

        const tex = scan(mockedContentState);

        expect(tex).toBe(generatedTex);
      });
    });

    describe("case 5", () => {
      it("should return the correct tex", () => {
        const { contentState, generatedTex } = testSample5;

        const mockedContentState = convertFromRaw(contentState);

        const tex = scan(mockedContentState);

        expect(tex).toBe(generatedTex);
      });
    });

    describe("case 6", () => {
      it.todo("should return the correct tex");
    });
  });

  describe("other case", () => {
    describe("heading", () => {
      it("should return the correct tex", () => {
        const { contentState, generatedTex } = testBlockSample1;

        const mockedContentState = convertFromRaw(contentState);

        const tex = scan(mockedContentState);

        expect(tex).toBe(generatedTex);
      });
    });
  });
});
