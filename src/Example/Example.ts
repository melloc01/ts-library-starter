
import Foo from "fingerprintjs2";

export class Example {
    private covered: boolean = false;

    /* Some code in here :) */

    public coverageTest(): void {
        this.covered = true;
        console.info(Foo);
    }

    /**
     * Gets the covered property.
     */
    public getCovered(): boolean {
        return this.covered;
    }
}
