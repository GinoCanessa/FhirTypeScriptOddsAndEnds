import { Coding } from '../fhir';
/**
 * Used to specify why the normally expected content of the data element is missing.
 */
export declare const DataAbsentReasonValueSet: {
    /**
     * The content of the data is represented in the resource narrative.
     */
    data_absent_reason_AsText: Coding;
    /**
     * The source was asked but declined to answer.
     */
    data_absent_reason_AskedButDeclined: Coding;
    /**
     * The source was asked but does not know the value.
     */
    data_absent_reason_AskedButUnknown: Coding;
    /**
     * Some system or workflow process error means that the information is not available.
     */
    data_absent_reason_Error: Coding;
    /**
     * The information is not available due to security, privacy or related reasons.
     */
    data_absent_reason_Masked: Coding;
    /**
     * The numeric value is excessively low and unrepresentable due to a floating point processing error.
     */
    data_absent_reason_NegativeInfinityNINF: Coding;
    /**
     * The numeric value is undefined or unrepresentable due to a floating point processing error.
     */
    data_absent_reason_NotANumberNaN: Coding;
    /**
     * There is no proper value for this element (e.g. last menstrual period for a male).
     */
    data_absent_reason_NotApplicable: Coding;
    /**
     * The workflow didn't lead to this value being known.
     */
    data_absent_reason_NotAsked: Coding;
    /**
     * The value is not available because the observation procedure (test, etc.) was not performed.
     */
    data_absent_reason_NotPerformed: Coding;
    /**
     * The value is not permitted in this context (e.g. due to profiles, or the base data types).
     */
    data_absent_reason_NotPermitted: Coding;
    /**
     * The numeric value is excessively high and unrepresentable due to a floating point processing error.
     */
    data_absent_reason_PositiveInfinityPINF: Coding;
    /**
     * There is reason to expect (from the workflow) that the value may become known.
     */
    data_absent_reason_TemporarilyUnknown: Coding;
    /**
     * The value is expected to exist but is not known.
     */
    data_absent_reason_Unknown: Coding;
    /**
     * The source system wasn't capable of supporting this element.
     */
    data_absent_reason_Unsupported: Coding;
};
//# sourceMappingURL=DataAbsentReasonValueSet.d.ts.map