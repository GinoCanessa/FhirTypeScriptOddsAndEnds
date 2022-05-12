// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/immunization-funding-source|4.0.1
import { Coding } from '../fhir.js';
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the source of the vaccine administered. This value set is provided as a suggestive example.
 */
export const ImmunizationFundingSourceValueSet = {
    /**
     * private: The vaccine was purchased with private funds.
     */
    Private: new Coding({
        display: "Private",
        code: "private",
        system: "http://terminology.hl7.org/CodeSystem/immunization-funding-source",
    }),
    /**
     * public: The vaccine was purchased with public funds.
     */
    Public: new Coding({
        display: "Public",
        code: "public",
        system: "http://terminology.hl7.org/CodeSystem/immunization-funding-source",
    }),
};
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the source of the vaccine administered. This value set is provided as a suggestive example.
 */
//# sourceMappingURL=ImmunizationFundingSourceValueSet.js.map