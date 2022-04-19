// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * This value set includes a smattering of Unit type codes.
 */
export const BenefitUnitValueSet = {
    /**
     * A family, typically includes self, spouse(s) and children to a defined age
     */
    benefit_unit_Family: new Coding({
        code: "family",
        display: "Family",
        system: "http://terminology.hl7.org/CodeSystem/benefit-unit"
    }),
    /**
     * A single individual
     */
    benefit_unit_Individual: new Coding({
        code: "individual",
        display: "Individual",
        system: "http://terminology.hl7.org/CodeSystem/benefit-unit"
    }),
};
//# sourceMappingURL=BenefitUnitValueSet.js.map