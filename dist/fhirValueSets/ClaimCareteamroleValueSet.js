// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * This value set includes sample Claim Care Team Role codes.
 */
export const ClaimCareteamroleValueSet = {
    /**
     * Assisting care provider.
     */
    claim_careteamrole_AssistingProvider: Coding.FromStrict({
        code: "assist",
        display: "Assisting Provider",
        system: "http://terminology.hl7.org/CodeSystem/claimcareteamrole"
    }),
    /**
     * Other role on the care team.
     */
    claim_careteamrole_Other: Coding.FromStrict({
        code: "other",
        display: "Other",
        system: "http://terminology.hl7.org/CodeSystem/claimcareteamrole"
    }),
    /**
     * The primary care provider.
     */
    claim_careteamrole_PrimaryProvider: Coding.FromStrict({
        code: "primary",
        display: "Primary provider",
        system: "http://terminology.hl7.org/CodeSystem/claimcareteamrole"
    }),
    /**
     * Supervising care provider.
     */
    claim_careteamrole_SupervisingProvider: Coding.FromStrict({
        code: "supervisor",
        display: "Supervising Provider",
        system: "http://terminology.hl7.org/CodeSystem/claimcareteamrole"
    }),
};
//# sourceMappingURL=ClaimCareteamroleValueSet.js.map