import { Coding } from '../fhir.js';
/**
 * This value set is provided as an example. The value set to instantiate this attribute should be drawn from a robust terminology code system that consists of or contains concepts to support the medication process.
 */
export declare const ReasonMedicationGivenCodesValueSet: {
    /**
     * a: No reason known.
     */
    readonly None: Coding;
    /**
     * b: The administration was following an ordered protocol.
     */
    readonly GivenAsOrdered: Coding;
    /**
     * c: The administration was needed to treat an emergency.
     */
    readonly Emergency: Coding;
};
/**
 * This value set is provided as an example. The value set to instantiate this attribute should be drawn from a robust terminology code system that consists of or contains concepts to support the medication process.
 */
export declare type ReasonMedicationGivenCodesValueSetType = typeof ReasonMedicationGivenCodesValueSet;
/**
 * This value set is provided as an example. The value set to instantiate this attribute should be drawn from a robust terminology code system that consists of or contains concepts to support the medication process.
 */
export declare enum ReasonMedicationGivenCodesValueSetEnum {
    /**
     * a: No reason known.
     */
    None = "a",
    /**
     * b: The administration was following an ordered protocol.
     */
    GivenAsOrdered = "b",
    /**
     * c: The administration was needed to treat an emergency.
     */
    Emergency = "c"
}
//# sourceMappingURL=ReasonMedicationGivenCodesValueSet.d.ts.map