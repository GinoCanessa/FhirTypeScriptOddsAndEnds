import { Coding } from '../fhir.js';
/**
 * A list of all the knowledge resource types defined in this version of the FHIR specification.
 */
export declare const KnowledgeResourceTypesValueSet: {
    /**
     * ActivityDefinition: The definition of a specific activity to be taken, independent of any particular patient or context.
     */
    readonly ActivityDefinition: Coding;
    /**
     * CodeSystem: A set of codes drawn from one or more code systems.
     */
    readonly CodeSystem: Coding;
    /**
     * ConceptMap: A map from one set of concepts to one or more other concepts.
     */
    readonly ConceptMap: Coding;
    /**
     * Library: Represents a library of quality improvement components.
     */
    readonly Library: Coding;
    /**
     * Measure: A quality measure definition.
     */
    readonly Measure: Coding;
    /**
     * PlanDefinition: The definition of a plan for a series of actions, independent of any specific patient or context.
     */
    readonly PlanDefinition: Coding;
    /**
     * StructureDefinition: Structural Definition.
     */
    readonly StructureDefinition: Coding;
    /**
     * StructureMap: A Map of relationships between 2 structures that can be used to transform data.
     */
    readonly StructureMap: Coding;
    /**
     * ValueSet: A set of codes drawn from one or more code systems.
     */
    readonly ValueSet: Coding;
};
/**
 * A list of all the knowledge resource types defined in this version of the FHIR specification.
 */
export declare type KnowledgeResourceTypesValueSetType = typeof KnowledgeResourceTypesValueSet;
/**
 * A list of all the knowledge resource types defined in this version of the FHIR specification.
 */
export declare enum KnowledgeResourceTypesValueSetEnum {
    /**
     * ActivityDefinition: The definition of a specific activity to be taken, independent of any particular patient or context.
     */
    ActivityDefinition = "ActivityDefinition",
    /**
     * CodeSystem: A set of codes drawn from one or more code systems.
     */
    CodeSystem = "CodeSystem",
    /**
     * ConceptMap: A map from one set of concepts to one or more other concepts.
     */
    ConceptMap = "ConceptMap",
    /**
     * Library: Represents a library of quality improvement components.
     */
    Library = "Library",
    /**
     * Measure: A quality measure definition.
     */
    Measure = "Measure",
    /**
     * PlanDefinition: The definition of a plan for a series of actions, independent of any specific patient or context.
     */
    PlanDefinition = "PlanDefinition",
    /**
     * StructureDefinition: Structural Definition.
     */
    StructureDefinition = "StructureDefinition",
    /**
     * StructureMap: A Map of relationships between 2 structures that can be used to transform data.
     */
    StructureMap = "StructureMap",
    /**
     * ValueSet: A set of codes drawn from one or more code systems.
     */
    ValueSet = "ValueSet"
}
//# sourceMappingURL=KnowledgeResourceTypesValueSet.d.ts.map