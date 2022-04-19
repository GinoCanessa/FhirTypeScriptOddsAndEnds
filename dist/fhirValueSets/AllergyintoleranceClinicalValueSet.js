// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * Preferred value set for AllergyIntolerance Clinical Status.
 */
export const AllergyintoleranceClinicalValueSet = {
    /**
     * The subject is currently experiencing, or is at risk of, a reaction to the identified substance.
     */
    allergyintolerance_clinical_Active: new Coding({
        code: "active",
        display: "Active",
        system: "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical"
    }),
    /**
     * The subject is no longer at risk of a reaction to the identified substance.
     */
    allergyintolerance_clinical_Inactive: new Coding({
        code: "inactive",
        display: "Inactive",
        system: "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical"
    }),
    /**
     * A reaction to the identified substance has been clinically reassessed by testing or re-exposure and is considered no longer to be present. Re-exposure could be accidental, unplanned, or outside of any clinical setting.
     */
    allergyintolerance_clinical_Resolved: new Coding({
        code: "resolved",
        display: "Resolved",
        system: "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical"
    }),
};
//# sourceMappingURL=AllergyintoleranceClinicalValueSet.js.map