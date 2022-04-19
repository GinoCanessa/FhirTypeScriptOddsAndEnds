// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * A list of all the definition resource types defined in this version of the FHIR specification.
 */
export const DefinitionResourceTypesValueSet = {
    /**
     * This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context.
     */
    definition_resource_types_ActivityDefinition: Coding.FromStrict({
        code: "ActivityDefinition",
        display: "ActivityDefinition",
        system: "http://hl7.org/fhir/definition-resource-types"
    }),
    /**
     * The EventDefinition resource provides a reusable description of when a particular event can occur.
     */
    definition_resource_types_EventDefinition: Coding.FromStrict({
        code: "EventDefinition",
        display: "EventDefinition",
        system: "http://hl7.org/fhir/definition-resource-types"
    }),
    /**
     * The Measure resource provides the definition of a quality measure.
     */
    definition_resource_types_Measure: Coding.FromStrict({
        code: "Measure",
        display: "Measure",
        system: "http://hl7.org/fhir/definition-resource-types"
    }),
    /**
     * A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).
     */
    definition_resource_types_OperationDefinition: Coding.FromStrict({
        code: "OperationDefinition",
        display: "OperationDefinition",
        system: "http://hl7.org/fhir/definition-resource-types"
    }),
    /**
     * This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols.
     */
    definition_resource_types_PlanDefinition: Coding.FromStrict({
        code: "PlanDefinition",
        display: "PlanDefinition",
        system: "http://hl7.org/fhir/definition-resource-types"
    }),
    /**
     * A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.
     */
    definition_resource_types_Questionnaire: Coding.FromStrict({
        code: "Questionnaire",
        display: "Questionnaire",
        system: "http://hl7.org/fhir/definition-resource-types"
    }),
};
//# sourceMappingURL=DefinitionResourceTypesValueSet.js.map