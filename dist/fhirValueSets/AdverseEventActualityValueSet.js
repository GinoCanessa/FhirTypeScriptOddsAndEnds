// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * Overall nature of the adverse event, e.g. real or potential.
 */
export const AdverseEventActualityValueSet = {
    /**
     * The adverse event actually happened regardless of whether anyone was affected or harmed.
     */
    adverse_event_actuality_AdverseEvent: new Coding({
        code: "actual",
        display: "Adverse Event",
        system: "http://hl7.org/fhir/adverse-event-actuality"
    }),
    /**
     * A potential adverse event.
     */
    adverse_event_actuality_PotentialAdverseEvent: new Coding({
        code: "potential",
        display: "Potential Adverse Event",
        system: "http://hl7.org/fhir/adverse-event-actuality"
    }),
};
//# sourceMappingURL=AdverseEventActualityValueSet.js.map