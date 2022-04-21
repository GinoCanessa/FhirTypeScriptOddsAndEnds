import { Coding } from '../fhir.js';
/**
 * Permitted data type for observation value.
 */
export declare const PermittedDataTypeValueSet: {
    /**
     * boolean: true or false.
     */
    readonly VALBoolean: Coding;
    /**
     * CodeableConcept: A coded concept from a reference terminology and/or text.
     */
    readonly CodeableConcept: Coding;
    /**
     * dateTime: A date, date-time or partial date (e.g. just year or year + month) as used in human communication.
     */
    readonly DateTime: Coding;
    /**
     * integer: A signed integer.
     */
    readonly Integer: Coding;
    /**
     * Period: A time range defined by start and end date/time.
     */
    readonly Period: Coding;
    /**
     * Quantity: A measured amount.
     */
    readonly Quantity: Coding;
    /**
     * Range: A set of values bounded by low and high.
     */
    readonly Range: Coding;
    /**
     * Ratio: A ratio of two Quantity values - a numerator and a denominator.
     */
    readonly Ratio: Coding;
    /**
     * SampledData: A series of measurements taken by a device.
     */
    readonly SampledData: Coding;
    /**
     * string: A sequence of Unicode characters.
     */
    readonly VALString: Coding;
    /**
     * time: A time during the day, in the format hh:mm:ss.
     */
    readonly Time: Coding;
};
/**
 * Permitted data type for observation value.
 */
export declare type PermittedDataTypeValueSetType = typeof PermittedDataTypeValueSet;
/**
 * Permitted data type for observation value.
 */
export declare enum PermittedDataTypeValueSetEnum {
    /**
     * boolean: true or false.
     */
    VALBoolean = "boolean",
    /**
     * CodeableConcept: A coded concept from a reference terminology and/or text.
     */
    CodeableConcept = "CodeableConcept",
    /**
     * dateTime: A date, date-time or partial date (e.g. just year or year + month) as used in human communication.
     */
    DateTime = "dateTime",
    /**
     * integer: A signed integer.
     */
    Integer = "integer",
    /**
     * Period: A time range defined by start and end date/time.
     */
    Period = "Period",
    /**
     * Quantity: A measured amount.
     */
    Quantity = "Quantity",
    /**
     * Range: A set of values bounded by low and high.
     */
    Range = "Range",
    /**
     * Ratio: A ratio of two Quantity values - a numerator and a denominator.
     */
    Ratio = "Ratio",
    /**
     * SampledData: A series of measurements taken by a device.
     */
    SampledData = "SampledData",
    /**
     * string: A sequence of Unicode characters.
     */
    VALString = "string",
    /**
     * time: A time during the day, in the format hh:mm:ss.
     */
    Time = "time"
}
//# sourceMappingURL=PermittedDataTypeValueSet.d.ts.map