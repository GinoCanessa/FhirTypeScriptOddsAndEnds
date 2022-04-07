/**
 * Defines the types of relationships between actions.
 */
export var ActionRelationshipType = {
    /**
     * The action must be performed after the related action.
     */
    action_relationship_type_After: {
        code: "after",
        display: "After",
        system: "http://hl7.org/fhir/action-relationship-type"
    },
    /**
     * The action must be performed after the end of the related action.
     */
    action_relationship_type_AfterEnd: {
        code: "after-end",
        display: "After End",
        system: "http://hl7.org/fhir/action-relationship-type"
    },
    /**
     * The action must be performed after the start of the related action.
     */
    action_relationship_type_AfterStart: {
        code: "after-start",
        display: "After Start",
        system: "http://hl7.org/fhir/action-relationship-type"
    },
    /**
     * The action must be performed before the related action.
     */
    action_relationship_type_Before: {
        code: "before",
        display: "Before",
        system: "http://hl7.org/fhir/action-relationship-type"
    },
    /**
     * The action must be performed before the end of the related action.
     */
    action_relationship_type_BeforeEnd: {
        code: "before-end",
        display: "Before End",
        system: "http://hl7.org/fhir/action-relationship-type"
    },
    /**
     * The action must be performed before the start of the related action.
     */
    action_relationship_type_BeforeStart: {
        code: "before-start",
        display: "Before Start",
        system: "http://hl7.org/fhir/action-relationship-type"
    },
    /**
     * The action must be performed concurrent with the related action.
     */
    action_relationship_type_Concurrent: {
        code: "concurrent",
        display: "Concurrent",
        system: "http://hl7.org/fhir/action-relationship-type"
    },
    /**
     * The action must be performed concurrent with the end of the related action.
     */
    action_relationship_type_ConcurrentWithEnd: {
        code: "concurrent-with-end",
        display: "Concurrent With End",
        system: "http://hl7.org/fhir/action-relationship-type"
    },
    /**
     * The action must be performed concurrent with the start of the related action.
     */
    action_relationship_type_ConcurrentWithStart: {
        code: "concurrent-with-start",
        display: "Concurrent With Start",
        system: "http://hl7.org/fhir/action-relationship-type"
    }
};
