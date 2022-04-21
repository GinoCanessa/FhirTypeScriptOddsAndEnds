import { Coding } from '../fhir.js';
/**
 * The verification status to support or decline the clinical status of the condition or diagnosis.
 */
export declare const ConditionVerStatusValueSet: {
    /**
     * confirmed: There is sufficient diagnostic and/or clinical evidence to treat this as a confirmed condition.
     */
    readonly Confirmed: Coding;
    /**
     * differential: One of a set of potential (and typically mutually exclusive) diagnoses asserted to further guide the diagnostic process and preliminary treatment.
     */
    readonly Differential: Coding;
    /**
     * entered-in-error: The statement was entered in error and is not valid.
     */
    readonly EnteredInError: Coding;
    /**
     * provisional: This is a tentative diagnosis - still a candidate that is under consideration.
     */
    readonly Provisional: Coding;
    /**
     * refuted: This condition has been ruled out by diagnostic and clinical evidence.
     */
    readonly Refuted: Coding;
    /**
     * unconfirmed: There is not sufficient diagnostic and/or clinical evidence to treat this as a confirmed condition.
     */
    readonly Unconfirmed: Coding;
};
/**
 * The verification status to support or decline the clinical status of the condition or diagnosis.
 */
export declare type ConditionVerStatusValueSetType = typeof ConditionVerStatusValueSet;
/**
 * The verification status to support or decline the clinical status of the condition or diagnosis.
 */
export declare enum ConditionVerStatusValueSetEnum {
    /**
     * confirmed: There is sufficient diagnostic and/or clinical evidence to treat this as a confirmed condition.
     */
    Confirmed = "confirmed",
    /**
     * differential: One of a set of potential (and typically mutually exclusive) diagnoses asserted to further guide the diagnostic process and preliminary treatment.
     */
    Differential = "differential",
    /**
     * entered-in-error: The statement was entered in error and is not valid.
     */
    EnteredInError = "entered-in-error",
    /**
     * provisional: This is a tentative diagnosis - still a candidate that is under consideration.
     */
    Provisional = "provisional",
    /**
     * refuted: This condition has been ruled out by diagnostic and clinical evidence.
     */
    Refuted = "refuted",
    /**
     * unconfirmed: There is not sufficient diagnostic and/or clinical evidence to treat this as a confirmed condition.
     */
    Unconfirmed = "unconfirmed"
}
//# sourceMappingURL=ConditionVerStatusValueSet.d.ts.map