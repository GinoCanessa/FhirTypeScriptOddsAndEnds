/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the source of the vaccine administered. This value set is provided as a suggestive example.
 */
export var ImmunizationFundingSource = {
    /**
     * The vaccine was purchased with private funds.
     */
    immunization_funding_source_Private: {
        code: "private",
        display: "Private",
        system: "http://terminology.hl7.org/CodeSystem/immunization-funding-source"
    },
    /**
     * The vaccine was purchased with public funds.
     */
    immunization_funding_source_Public: {
        code: "public",
        display: "Public",
        system: "http://terminology.hl7.org/CodeSystem/immunization-funding-source"
    }
};
