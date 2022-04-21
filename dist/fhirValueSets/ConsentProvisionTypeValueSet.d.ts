import { Coding } from '../fhir.js';
/**
 * How a rule statement is applied, such as adding additional consent or removing consent.
 */
export declare const ConsentProvisionTypeValueSet: {
    /**
     * deny: Consent is denied for actions meeting these rules.
     */
    readonly OptOut: Coding;
    /**
     * permit: Consent is provided for actions meeting these rules.
     */
    readonly OptIn: Coding;
};
/**
 * How a rule statement is applied, such as adding additional consent or removing consent.
 */
export declare type ConsentProvisionTypeValueSetType = typeof ConsentProvisionTypeValueSet;
/**
 * How a rule statement is applied, such as adding additional consent or removing consent.
 */
export declare enum ConsentProvisionTypeValueSetEnum {
    /**
     * deny: Consent is denied for actions meeting these rules.
     */
    OptOut = "deny",
    /**
     * permit: Consent is provided for actions meeting these rules.
     */
    OptIn = "permit"
}
//# sourceMappingURL=ConsentProvisionTypeValueSet.d.ts.map