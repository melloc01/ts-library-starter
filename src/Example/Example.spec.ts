"use strict";

import "jest";
import "babel-core/register";
import "babel-polyfill";

import { Example } from "./Example";

describe("Example", () => {
    it("Should be pass sanity", () => {
        const obj = new Example();

        expect(typeof(Example)).toBe("function");
        expect(typeof obj.coverageTest).toBe("function");

        expect(obj.getCovered()).toBe(false);
        expect(obj.coverageTest()).toBe(undefined);
        expect(obj.getCovered()).toBe(true);
    });

    it("Should be able to create new instance", () => {
        expect(typeof new Example()).toBe("object");
    });
});
