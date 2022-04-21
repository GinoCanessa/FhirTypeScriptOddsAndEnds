import { Coding } from '../fhir.js';
/**
 * The type of response code to use for assertion.
 */
export declare const AssertResponseCodeTypesValueSet: {
    /**
     * bad: Response code is 400.
     */
    readonly Bad: Coding;
    /**
     * conflict: Response code is 409.
     */
    readonly Conflict: Coding;
    /**
     * created: Response code is 201.
     */
    readonly Created: Coding;
    /**
     * forbidden: Response code is 403.
     */
    readonly Forbidden: Coding;
    /**
     * gone: Response code is 410.
     */
    readonly Gone: Coding;
    /**
     * methodNotAllowed: Response code is 405.
     */
    readonly MethodNotAllowed: Coding;
    /**
     * noContent: Response code is 204.
     */
    readonly NoContent: Coding;
    /**
     * notFound: Response code is 404.
     */
    readonly NotFound: Coding;
    /**
     * notModified: Response code is 304.
     */
    readonly NotModified: Coding;
    /**
     * okay: Response code is 200.
     */
    readonly Okay: Coding;
    /**
     * preconditionFailed: Response code is 412.
     */
    readonly PreconditionFailed: Coding;
    /**
     * unprocessable: Response code is 422.
     */
    readonly Unprocessable: Coding;
};
/**
 * The type of response code to use for assertion.
 */
export declare type AssertResponseCodeTypesValueSetType = typeof AssertResponseCodeTypesValueSet;
/**
 * The type of response code to use for assertion.
 */
export declare enum AssertResponseCodeTypesValueSetEnum {
    /**
     * bad: Response code is 400.
     */
    Bad = "bad",
    /**
     * conflict: Response code is 409.
     */
    Conflict = "conflict",
    /**
     * created: Response code is 201.
     */
    Created = "created",
    /**
     * forbidden: Response code is 403.
     */
    Forbidden = "forbidden",
    /**
     * gone: Response code is 410.
     */
    Gone = "gone",
    /**
     * methodNotAllowed: Response code is 405.
     */
    MethodNotAllowed = "methodNotAllowed",
    /**
     * noContent: Response code is 204.
     */
    NoContent = "noContent",
    /**
     * notFound: Response code is 404.
     */
    NotFound = "notFound",
    /**
     * notModified: Response code is 304.
     */
    NotModified = "notModified",
    /**
     * okay: Response code is 200.
     */
    Okay = "okay",
    /**
     * preconditionFailed: Response code is 412.
     */
    PreconditionFailed = "preconditionFailed",
    /**
     * unprocessable: Response code is 422.
     */
    Unprocessable = "unprocessable"
}
//# sourceMappingURL=AssertResponseCodeTypesValueSet.d.ts.map