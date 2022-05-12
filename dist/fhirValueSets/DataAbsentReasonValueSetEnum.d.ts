/**
 * Used to specify why the normally expected content of the data element is missing.
 */
export declare enum DataAbsentReasonValueSetEnum {
    /**
     * as-text: The content of the data is represented in the resource narrative.
     */
    AsText = "as-text",
    /**
     * asked-declined: The source was asked but declined to answer.
     */
    AskedButDeclined = "asked-declined",
    /**
     * asked-unknown: The source was asked but does not know the value.
     */
    AskedButUnknown = "asked-unknown",
    /**
     * error: Some system or workflow process error means that the information is not available.
     */
    Error = "error",
    /**
     * masked: The information is not available due to security, privacy or related reasons.
     */
    Masked = "masked",
    /**
     * negative-infinity: The numeric value is excessively low and unrepresentable due to a floating point processing error.
     */
    NegativeInfinityNINF = "negative-infinity",
    /**
     * not-a-number: The numeric value is undefined or unrepresentable due to a floating point processing error.
     */
    NotANumberNaN = "not-a-number",
    /**
     * not-applicable: There is no proper value for this element (e.g. last menstrual period for a male).
     */
    NotApplicable = "not-applicable",
    /**
     * not-asked: The workflow didn't lead to this value being known.
     */
    NotAsked = "not-asked",
    /**
     * not-performed: The value is not available because the observation procedure (test, etc.) was not performed.
     */
    NotPerformed = "not-performed",
    /**
     * not-permitted: The value is not permitted in this context (e.g. due to profiles, or the base data types).
     */
    NotPermitted = "not-permitted",
    /**
     * positive-infinity: The numeric value is excessively high and unrepresentable due to a floating point processing error.
     */
    PositiveInfinityPINF = "positive-infinity",
    /**
     * temp-unknown: There is reason to expect (from the workflow) that the value may become known.
     */
    TemporarilyUnknown = "temp-unknown",
    /**
     * unknown: The value is expected to exist but is not known.
     */
    Unknown = "unknown",
    /**
     * unsupported: The source system wasn't capable of supporting this element.
     */
    Unsupported = "unsupported"
}
//# sourceMappingURL=DataAbsentReasonValueSetEnum.d.ts.map