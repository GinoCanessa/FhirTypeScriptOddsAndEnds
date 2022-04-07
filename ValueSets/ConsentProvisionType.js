/**
 * How a rule statement is applied, such as adding additional consent or removing consent.
 */
export var ConsentProvisionType = {
    /**
     * Consent is denied for actions meeting these rules.
     */
    consent_provision_type_OptOut: {
        code: "deny",
        display: "Opt Out",
        system: "http://hl7.org/fhir/consent-provision-type"
    },
    /**
     * Consent is provided for actions meeting these rules.
     */
    consent_provision_type_OptIn: {
        code: "permit",
        display: "Opt In",
        system: "http://hl7.org/fhir/consent-provision-type"
    }
};
