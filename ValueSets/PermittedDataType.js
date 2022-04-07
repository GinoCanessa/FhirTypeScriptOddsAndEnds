/**
 * Permitted data type for observation value.
 */
export var PermittedDataType = {
    /**
     * true or false.
     */
    permitted_data_type_Boolean: {
        code: "boolean",
        display: "boolean",
        system: "http://hl7.org/fhir/permitted-data-type"
    },
    /**
     * A coded concept from a reference terminology and/or text.
     */
    permitted_data_type_CodeableConcept: {
        code: "CodeableConcept",
        display: "CodeableConcept",
        system: "http://hl7.org/fhir/permitted-data-type"
    },
    /**
     * A date, date-time or partial date (e.g. just year or year + month) as used in human communication.
     */
    permitted_data_type_DateTime: {
        code: "dateTime",
        display: "dateTime",
        system: "http://hl7.org/fhir/permitted-data-type"
    },
    /**
     * A signed integer.
     */
    permitted_data_type_Integer: {
        code: "integer",
        display: "integer",
        system: "http://hl7.org/fhir/permitted-data-type"
    },
    /**
     * A time range defined by start and end date/time.
     */
    permitted_data_type_Period: {
        code: "Period",
        display: "Period",
        system: "http://hl7.org/fhir/permitted-data-type"
    },
    /**
     * A measured amount.
     */
    permitted_data_type_Quantity: {
        code: "Quantity",
        display: "Quantity",
        system: "http://hl7.org/fhir/permitted-data-type"
    },
    /**
     * A set of values bounded by low and high.
     */
    permitted_data_type_Range: {
        code: "Range",
        display: "Range",
        system: "http://hl7.org/fhir/permitted-data-type"
    },
    /**
     * A ratio of two Quantity values - a numerator and a denominator.
     */
    permitted_data_type_Ratio: {
        code: "Ratio",
        display: "Ratio",
        system: "http://hl7.org/fhir/permitted-data-type"
    },
    /**
     * A series of measurements taken by a device.
     */
    permitted_data_type_SampledData: {
        code: "SampledData",
        display: "SampledData",
        system: "http://hl7.org/fhir/permitted-data-type"
    },
    /**
     * A sequence of Unicode characters.
     */
    permitted_data_type_String: {
        code: "string",
        display: "string",
        system: "http://hl7.org/fhir/permitted-data-type"
    },
    /**
     * A time during the day, in the format hh:mm:ss.
     */
    permitted_data_type_Time: {
        code: "time",
        display: "time",
        system: "http://hl7.org/fhir/permitted-data-type"
    }
};
