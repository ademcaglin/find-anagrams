import { assert } from "chai";
import { find_diff } from "../src/find_diff";


describe("Diff test", function () {
    it("should find diff", () => {
        assert.equal(
            find_diff("aabaacd", "aacb"), "aad"
        );
    });
});