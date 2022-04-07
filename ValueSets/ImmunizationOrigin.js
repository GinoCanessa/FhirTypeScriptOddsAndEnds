/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the source of the data when the report of the immunization event is not based on information from the person, entity or organization who administered the vaccine. This value set is provided as a suggestive example.
 */
export var ImmunizationOrigin = {
    /**
     * The data for the immunization event originated with another provider.
     */
    immunization_origin_OtherProvider: {
        code: "provider",
        display: "Other Provider",
        system: "http://terminology.hl7.org/CodeSystem/immunization-origin"
    },
    /**
     * The data for the immunization event originated from the recollection of the patient or parent/guardian of the patient.
     */
    immunization_origin_ParentGuardianPatientRecall: {
        code: "recall",
        display: "Parent/Guardian/Patient Recall",
        system: "http://terminology.hl7.org/CodeSystem/immunization-origin"
    },
    /**
     * The data for the immunization event originated with a written record for the patient.
     */
    immunization_origin_WrittenRecord: {
        code: "record",
        display: "Written Record",
        system: "http://terminology.hl7.org/CodeSystem/immunization-origin"
    },
    /**
     * The data for the immunization event originated with a school record for the patient.
     */
    immunization_origin_SchoolRecord: {
        code: "school",
        display: "School Record",
        system: "http://terminology.hl7.org/CodeSystem/immunization-origin"
    }
};
