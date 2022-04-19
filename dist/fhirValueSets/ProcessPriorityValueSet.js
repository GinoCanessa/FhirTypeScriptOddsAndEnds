// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * This value set includes the financial processing priority codes.
 */
export const ProcessPriorityValueSet = {
    /**
     * Later, when possible.
     */
    process_priority_Deferred: new Coding({
        code: "deferred",
        display: "Deferred",
        system: "http://terminology.hl7.org/CodeSystem/processpriority"
    }),
    /**
     * With best effort.
     */
    process_priority_Normal: new Coding({
        code: "normal",
        display: "Normal",
        system: "http://terminology.hl7.org/CodeSystem/processpriority"
    }),
    /**
     * Immediately in real time.
     */
    process_priority_Immediate: new Coding({
        code: "stat",
        display: "Immediate",
        system: "http://terminology.hl7.org/CodeSystem/processpriority"
    }),
};
//# sourceMappingURL=ProcessPriorityValueSet.js.map