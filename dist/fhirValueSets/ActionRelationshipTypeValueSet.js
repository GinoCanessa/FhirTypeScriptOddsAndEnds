// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * Defines the types of relationships between actions.
 */
export const ActionRelationshipTypeValueSet = {
    /**
     * The action must be performed after the related action.
     */
    action_relationship_type_After: new Coding({
        code: "after",
        display: "After",
        system: "http://hl7.org/fhir/action-relationship-type"
    }),
    /**
     * The action must be performed after the end of the related action.
     */
    action_relationship_type_AfterEnd: new Coding({
        code: "after-end",
        display: "After End",
        system: "http://hl7.org/fhir/action-relationship-type"
    }),
    /**
     * The action must be performed after the start of the related action.
     */
    action_relationship_type_AfterStart: new Coding({
        code: "after-start",
        display: "After Start",
        system: "http://hl7.org/fhir/action-relationship-type"
    }),
    /**
     * The action must be performed before the related action.
     */
    action_relationship_type_Before: new Coding({
        code: "before",
        display: "Before",
        system: "http://hl7.org/fhir/action-relationship-type"
    }),
    /**
     * The action must be performed before the end of the related action.
     */
    action_relationship_type_BeforeEnd: new Coding({
        code: "before-end",
        display: "Before End",
        system: "http://hl7.org/fhir/action-relationship-type"
    }),
    /**
     * The action must be performed before the start of the related action.
     */
    action_relationship_type_BeforeStart: new Coding({
        code: "before-start",
        display: "Before Start",
        system: "http://hl7.org/fhir/action-relationship-type"
    }),
    /**
     * The action must be performed concurrent with the related action.
     */
    action_relationship_type_Concurrent: new Coding({
        code: "concurrent",
        display: "Concurrent",
        system: "http://hl7.org/fhir/action-relationship-type"
    }),
    /**
     * The action must be performed concurrent with the end of the related action.
     */
    action_relationship_type_ConcurrentWithEnd: new Coding({
        code: "concurrent-with-end",
        display: "Concurrent With End",
        system: "http://hl7.org/fhir/action-relationship-type"
    }),
    /**
     * The action must be performed concurrent with the start of the related action.
     */
    action_relationship_type_ConcurrentWithStart: new Coding({
        code: "concurrent-with-start",
        display: "Concurrent With Start",
        system: "http://hl7.org/fhir/action-relationship-type"
    }),
};
//# sourceMappingURL=ActionRelationshipTypeValueSet.js.map