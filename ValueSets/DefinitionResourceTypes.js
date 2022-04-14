"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefinitionResourceTypes = void 0;
/**
 * A list of all the definition resource types defined in this version of the FHIR specification.
 */
exports.DefinitionResourceTypes = {
    /**
     * This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context.
     */
    definition_resource_types_ActivityDefinition: {
        code: "ActivityDefinition",
        display: "ActivityDefinition",
        system: "http://hl7.org/fhir/definition-resource-types"
    },
    /**
     * The EventDefinition resource provides a reusable description of when a particular event can occur.
     */
    definition_resource_types_EventDefinition: {
        code: "EventDefinition",
        display: "EventDefinition",
        system: "http://hl7.org/fhir/definition-resource-types"
    },
    /**
     * The Measure resource provides the definition of a quality measure.
     */
    definition_resource_types_Measure: {
        code: "Measure",
        display: "Measure",
        system: "http://hl7.org/fhir/definition-resource-types"
    },
    /**
     * A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).
     */
    definition_resource_types_OperationDefinition: {
        code: "OperationDefinition",
        display: "OperationDefinition",
        system: "http://hl7.org/fhir/definition-resource-types"
    },
    /**
     * This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols.
     */
    definition_resource_types_PlanDefinition: {
        code: "PlanDefinition",
        display: "PlanDefinition",
        system: "http://hl7.org/fhir/definition-resource-types"
    },
    /**
     * A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.
     */
    definition_resource_types_Questionnaire: {
        code: "Questionnaire",
        display: "Questionnaire",
        system: "http://hl7.org/fhir/definition-resource-types"
    },
};
//# sourceMappingURL=DefinitionResourceTypes.js.map