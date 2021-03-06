// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/identity-assuranceLevel|4.0.1
import { Coding } from '../fhir.js';
/**
 * The level of confidence that this link represents the same actual person, based on NIST Authentication Levels.
 */
export const IdentityAssuranceLevelValueSet = {
    /**
     * level1: Little or no confidence in the asserted identity's accuracy.
     */
    Level1: new Coding({
        display: "Level 1",
        code: "level1",
        system: "http://hl7.org/fhir/identity-assuranceLevel",
    }),
    /**
     * level2: Some confidence in the asserted identity's accuracy.
     */
    Level2: new Coding({
        display: "Level 2",
        code: "level2",
        system: "http://hl7.org/fhir/identity-assuranceLevel",
    }),
    /**
     * level3: High confidence in the asserted identity's accuracy.
     */
    Level3: new Coding({
        display: "Level 3",
        code: "level3",
        system: "http://hl7.org/fhir/identity-assuranceLevel",
    }),
    /**
     * level4: Very high confidence in the asserted identity's accuracy.
     */
    Level4: new Coding({
        display: "Level 4",
        code: "level4",
        system: "http://hl7.org/fhir/identity-assuranceLevel",
    }),
};
/**
 * The level of confidence that this link represents the same actual person, based on NIST Authentication Levels.
 */
//# sourceMappingURL=IdentityAssuranceLevelValueSet.js.map