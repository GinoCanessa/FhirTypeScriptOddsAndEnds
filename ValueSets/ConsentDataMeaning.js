/**
 * How a resource reference is interpreted when testing consent restrictions.
 */
export var ConsentDataMeaning = {
    /**
     * The consent applies to instances of resources that are authored by.
     */
    consent_data_meaning_AuthoredBy: {
        code: "authoredby",
        display: "AuthoredBy",
        system: "http://hl7.org/fhir/consent-data-meaning"
    },
    /**
     * The consent applies directly to the instance of the resource and instances that refer to it.
     */
    consent_data_meaning_Dependents: {
        code: "dependents",
        display: "Dependents",
        system: "http://hl7.org/fhir/consent-data-meaning"
    },
    /**
     * The consent applies directly to the instance of the resource.
     */
    consent_data_meaning_Instance: {
        code: "instance",
        display: "Instance",
        system: "http://hl7.org/fhir/consent-data-meaning"
    },
    /**
     * The consent applies directly to the instance of the resource and instances it refers to.
     */
    consent_data_meaning_Related: {
        code: "related",
        display: "Related",
        system: "http://hl7.org/fhir/consent-data-meaning"
    }
};
