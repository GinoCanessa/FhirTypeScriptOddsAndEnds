/**
 * Which type a compartment definition describes.
 */
export var CompartmentType = {
    /**
     * The compartment definition is for the device compartment.
     */
    compartment_type_Device: {
        code: "Device",
        display: "Device",
        system: "http://hl7.org/fhir/compartment-type"
    },
    /**
     * The compartment definition is for the encounter compartment.
     */
    compartment_type_Encounter: {
        code: "Encounter",
        display: "Encounter",
        system: "http://hl7.org/fhir/compartment-type"
    },
    /**
     * The compartment definition is for the patient compartment.
     */
    compartment_type_Patient: {
        code: "Patient",
        display: "Patient",
        system: "http://hl7.org/fhir/compartment-type"
    },
    /**
     * The compartment definition is for the practitioner compartment.
     */
    compartment_type_Practitioner: {
        code: "Practitioner",
        display: "Practitioner",
        system: "http://hl7.org/fhir/compartment-type"
    },
    /**
     * The compartment definition is for the related-person compartment.
     */
    compartment_type_RelatedPerson: {
        code: "RelatedPerson",
        display: "RelatedPerson",
        system: "http://hl7.org/fhir/compartment-type"
    }
};
