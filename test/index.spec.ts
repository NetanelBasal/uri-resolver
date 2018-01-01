import {
    resolve
} from "../src";

describe("resolve", () => {
    it("should replace the placeholders", () => {
        const resolved = resolve('/path/:id/path/:test', {id: 'replacedID', test: 'replacedTest'});
        expect(resolved).toEqual('/path/replacedID/path/replacedTest');
    });

    it("should not throw when the object empty", () => {
        expect(resolve.bind('/path/:id/path/:test')).not.toThrow();
    });
});