/**
 * How an element value is interpreted when discrimination is evaluated.
 */
export var DiscriminatorType = {
    /**
     * The slices are differentiated by the presence or absence of the nominated element.
     */
    discriminator_type_Exists: {
        code: "exists",
        display: "Exists",
        system: "http://hl7.org/fhir/discriminator-type"
    },
    /**
     * The slices have different values in the nominated element, as determined by testing them against the applicable ElementDefinition.pattern[x].
     */
    discriminator_type_Pattern: {
        code: "pattern",
        display: "Pattern",
        system: "http://hl7.org/fhir/discriminator-type"
    },
    /**
     * The slices are differentiated by conformance of the nominated element to a specified profile. Note that if the path specifies .resolve() then the profile is the target profile on the reference. In this case, validation by the possible profiles is required to differentiate the slices.
     */
    discriminator_type_Profile: {
        code: "profile",
        display: "Profile",
        system: "http://hl7.org/fhir/discriminator-type"
    },
    /**
     * The slices are differentiated by type of the nominated element.
     */
    discriminator_type_Type: {
        code: "type",
        display: "Type",
        system: "http://hl7.org/fhir/discriminator-type"
    },
    /**
     * The slices have different values in the nominated element.
     */
    discriminator_type_Value: {
        code: "value",
        display: "Value",
        system: "http://hl7.org/fhir/discriminator-type"
    }
};
