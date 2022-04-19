import { Coding } from '../fhir';
/**
 * Permitted data type for observation value.
 */
export declare const PermittedDataTypeValueSet: {
    /**
     * true or false.
     */
    permitted_data_type_Boolean: Coding;
    /**
     * A coded concept from a reference terminology and/or text.
     */
    permitted_data_type_CodeableConcept: Coding;
    /**
     * A date, date-time or partial date (e.g. just year or year + month) as used in human communication.
     */
    permitted_data_type_DateTime: Coding;
    /**
     * A signed integer.
     */
    permitted_data_type_Integer: Coding;
    /**
     * A time range defined by start and end date/time.
     */
    permitted_data_type_Period: Coding;
    /**
     * A measured amount.
     */
    permitted_data_type_Quantity: Coding;
    /**
     * A set of values bounded by low and high.
     */
    permitted_data_type_Range: Coding;
    /**
     * A ratio of two Quantity values - a numerator and a denominator.
     */
    permitted_data_type_Ratio: Coding;
    /**
     * A series of measurements taken by a device.
     */
    permitted_data_type_SampledData: Coding;
    /**
     * A sequence of Unicode characters.
     */
    permitted_data_type_String: Coding;
    /**
     * A time during the day, in the format hh:mm:ss.
     */
    permitted_data_type_Time: Coding;
};
//# sourceMappingURL=PermittedDataTypeValueSet.d.ts.map