import { Coding } from '../fhir.js';
/**
 * The type of direction to use for assertion.
 */
export declare const AssertDirectionCodesValueSet: {
    /**
     * request: The assertion is evaluated on the request.
     */
    readonly Request: Coding;
    /**
     * response: The assertion is evaluated on the response. This is the default value.
     */
    readonly Response: Coding;
};
/**
 * The type of direction to use for assertion.
 */
export declare type AssertDirectionCodesValueSetType = typeof AssertDirectionCodesValueSet;
/**
 * The type of direction to use for assertion.
 */
export declare enum AssertDirectionCodesValueSetEnum {
    /**
     * request: The assertion is evaluated on the request.
     */
    Request = "request",
    /**
     * response: The assertion is evaluated on the response. This is the default value.
     */
    Response = "response"
}
//# sourceMappingURL=AssertDirectionCodesValueSet.d.ts.map