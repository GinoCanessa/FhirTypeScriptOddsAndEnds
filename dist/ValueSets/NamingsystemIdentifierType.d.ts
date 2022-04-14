import { Coding } from '../strictmodels';
/**
 * Identifies the style of unique identifier used to identify a namespace.
 */
export declare const NamingsystemIdentifierType: {
    /**
     * An ISO object identifier; e.g. 1.2.3.4.5.
     */
    namingsystem_identifier_type_OID: Coding;
    /**
     * Some other type of unique identifier; e.g. HL7-assigned reserved string such as LN for LOINC.
     */
    namingsystem_identifier_type_Other: Coding;
    /**
     * A uniform resource identifier (ideally a URL - uniform resource locator); e.g. http://unitsofmeasure.org.
     */
    namingsystem_identifier_type_URI: Coding;
    /**
     * A universally unique identifier of the form a5afddf4-e880-459b-876e-e4591b0acc11.
     */
    namingsystem_identifier_type_UUID: Coding;
};
//# sourceMappingURL=NamingsystemIdentifierType.d.ts.map