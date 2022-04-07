/**
 * This value set defines a set of codes that are used to indicate the profile type of a test system when acting as the origin within a TestScript.
 */
export var TestscriptProfileOriginTypes = {
    /**
     * General FHIR client used to initiate operations against a FHIR server.
     */
    testscript_profile_origin_types_FHIRClient: {
        code: "FHIR-Client",
        display: "FHIR Client",
        system: "http://terminology.hl7.org/CodeSystem/testscript-profile-origin-types"
    },
    /**
     * A FHIR client acting as a Structured Data Capture Form Filler.
     */
    testscript_profile_origin_types_FHIRSDCFormFiller: {
        code: "FHIR-SDC-FormFiller",
        display: "FHIR SDC FormFiller",
        system: "http://terminology.hl7.org/CodeSystem/testscript-profile-origin-types"
    }
};
