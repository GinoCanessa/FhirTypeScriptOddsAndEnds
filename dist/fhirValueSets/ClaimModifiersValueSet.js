// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * This value set includes sample Modifier type codes.
 */
export const ClaimModifiersValueSet = {
    /**
     * Repair of prior service or installation.
     */
    claim_modifiers_RepairOfPriorServiceOrInstallation: Coding.FromStrict({
        code: "a",
        display: "Repair of prior service or installation",
        system: "http://terminology.hl7.org/CodeSystem/modifiers"
    }),
    /**
     * Temporary service or installation.
     */
    claim_modifiers_TemporaryServiceOrInstallation: Coding.FromStrict({
        code: "b",
        display: "Temporary service or installation",
        system: "http://terminology.hl7.org/CodeSystem/modifiers"
    }),
    /**
     * Treatment associated with TMJ.
     */
    claim_modifiers_TMJTreatment: Coding.FromStrict({
        code: "c",
        display: "TMJ treatment",
        system: "http://terminology.hl7.org/CodeSystem/modifiers"
    }),
    /**
     * Implant or associated with an implant.
     */
    claim_modifiers_ImplantOrAssociatedWithAnImplant: Coding.FromStrict({
        code: "e",
        display: "Implant or associated with an implant",
        system: "http://terminology.hl7.org/CodeSystem/modifiers"
    }),
    /**
     * A Rush service or service performed outside of normal office hours.
     */
    claim_modifiers_RushOrOutsideOfOfficeHours: Coding.FromStrict({
        code: "rooh",
        display: "Rush or Outside of office hours",
        system: "http://terminology.hl7.org/CodeSystem/modifiers"
    }),
    /**
     * None.
     */
    claim_modifiers_None: Coding.FromStrict({
        code: "x",
        display: "None",
        system: "http://terminology.hl7.org/CodeSystem/modifiers"
    }),
};
//# sourceMappingURL=ClaimModifiersValueSet.js.map