/**
 * Identifies the style of unique identifier used to identify a namespace.
 */
export var NamingsystemIdentifierType = {
    /**
     * An ISO object identifier; e.g. 1.2.3.4.5.
     */
    namingsystem_identifier_type_OID: {
        code: "oid",
        display: "OID",
        system: "http://hl7.org/fhir/namingsystem-identifier-type"
    },
    /**
     * Some other type of unique identifier; e.g. HL7-assigned reserved string such as LN for LOINC.
     */
    namingsystem_identifier_type_Other: {
        code: "other",
        display: "Other",
        system: "http://hl7.org/fhir/namingsystem-identifier-type"
    },
    /**
     * A uniform resource identifier (ideally a URL - uniform resource locator); e.g. http://unitsofmeasure.org.
     */
    namingsystem_identifier_type_URI: {
        code: "uri",
        display: "URI",
        system: "http://hl7.org/fhir/namingsystem-identifier-type"
    },
    /**
     * A universally unique identifier of the form a5afddf4-e880-459b-876e-e4591b0acc11.
     */
    namingsystem_identifier_type_UUID: {
        code: "uuid",
        display: "UUID",
        system: "http://hl7.org/fhir/namingsystem-identifier-type"
    }
};
