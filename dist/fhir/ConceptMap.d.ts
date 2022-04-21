import * as fhir from '../fhir.js';
import { ConceptMapEquivalenceValueSetType, ConceptMapEquivalenceValueSetEnum } from '../fhirValueSets/ConceptMapEquivalenceValueSet.js';
import { ConceptmapUnmappedModeValueSetType, ConceptmapUnmappedModeValueSetEnum } from '../fhirValueSets/ConceptmapUnmappedModeValueSet.js';
import { PublicationStatusValueSetType, PublicationStatusValueSetEnum } from '../fhirValueSets/PublicationStatusValueSet.js';
/**
 * A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.
 */
export declare type IConceptMapGroupElementTargetDependsOn = fhir.IBackboneElement & {
    /**
     * A reference to an element that holds a coded value that corresponds to a code system property. The idea is that the information model carries an element somewhere that is labeled to correspond with a code system property.
     */
    property: string | null;
    /**
     * Extended properties for primitive element: ConceptMap.group.element.target.dependsOn.property
     */
    _property?: fhir.IFhirElement | undefined;
    /**
     * An absolute URI that identifies the code system of the dependency code (if the source/dependency is a value set that crosses code systems).
     */
    system?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.element.target.dependsOn.system
     */
    _system?: fhir.IFhirElement | undefined;
    /**
     * Identity (code or path) or the element/item/ValueSet/text that the map depends on / refers to.
     */
    value: string | null;
    /**
     * Extended properties for primitive element: ConceptMap.group.element.target.dependsOn.value
     */
    _value?: fhir.IFhirElement | undefined;
    /**
     * The display is ignored when processing the map.
     */
    display?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.element.target.dependsOn.display
     */
    _display?: fhir.IFhirElement | undefined;
};
/**
 * Ideally there would only be one map, with equal or equivalent mapping. But multiple maps are allowed for several narrower options, or to assert that other concepts are unmatched.
 */
export declare type IConceptMapGroupElementTarget = fhir.IBackboneElement & {
    /**
     * Identity (code or path) or the element/item that the map refers to.
     */
    code?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.element.target.code
     */
    _code?: fhir.IFhirElement | undefined;
    /**
     * The display is ignored when processing the map.
     */
    display?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.element.target.display
     */
    _display?: fhir.IFhirElement | undefined;
    /**
     * This element is labeled as a modifier because it may indicate that a target does not apply.
     */
    equivalence: ConceptMapEquivalenceValueSetEnum | null;
    /**
     * Extended properties for primitive element: ConceptMap.group.element.target.equivalence
     */
    _equivalence?: fhir.IFhirElement | undefined;
    /**
     * A description of status/issues in mapping that conveys additional information not represented in  the structured data.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.element.target.comment
     */
    _comment?: fhir.IFhirElement | undefined;
    /**
     * A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.
     */
    dependsOn?: fhir.IConceptMapGroupElementTargetDependsOn[] | undefined;
    /**
     * A set of additional outcomes from this mapping to other elements. To properly execute this mapping, the specified element must be mapped to some data element or source that is in context. The mapping may still be useful without a place for the additional data elements, but the equivalence cannot be relied on.
     */
    product?: fhir.IConceptMapGroupElementTargetDependsOn[] | undefined;
};
/**
 * Generally, the ideal is that there would only be one mapping for each concept in the source value set, but a given concept may be mapped multiple times with different comments or dependencies.
 */
export declare type IConceptMapGroupElement = fhir.IBackboneElement & {
    /**
     * Identity (code or path) or the element/item being mapped.
     */
    code?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.element.code
     */
    _code?: fhir.IFhirElement | undefined;
    /**
     * The display is ignored when processing the map.
     */
    display?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.element.display
     */
    _display?: fhir.IFhirElement | undefined;
    /**
     * Ideally there would only be one map, with equal or equivalent mapping. But multiple maps are allowed for several narrower options, or to assert that other concepts are unmatched.
     */
    target?: fhir.IConceptMapGroupElementTarget[] | undefined;
};
/**
 * This only applies if the source code has a system value that matches the system defined for the group.
 */
export declare type IConceptMapGroupUnmapped = fhir.IBackboneElement & {
    /**
     * Defines which action to take if there is no match for the source concept in the target system designated for the group. One of 3 actions are possible: use the unmapped code (this is useful when doing a mapping between versions, and only a few codes have changed), use a fixed code (a default code), or alternatively, a reference to a different concept map can be provided (by canonical URL).
     */
    mode: ConceptmapUnmappedModeValueSetEnum | null;
    /**
     * Extended properties for primitive element: ConceptMap.group.unmapped.mode
     */
    _mode?: fhir.IFhirElement | undefined;
    /**
     * The fixed code to use when the mode = 'fixed'  - all unmapped codes are mapped to a single fixed code.
     */
    code?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.unmapped.code
     */
    _code?: fhir.IFhirElement | undefined;
    /**
     * The display is ignored when processing the map.
     */
    display?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.unmapped.display
     */
    _display?: fhir.IFhirElement | undefined;
    /**
     * The canonical reference to an additional ConceptMap resource instance to use for mapping if this ConceptMap resource contains no matching mapping for the source concept.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.unmapped.url
     */
    _url?: fhir.IFhirElement | undefined;
};
/**
 * A group of mappings that all have the same source and target system.
 */
export declare type IConceptMapGroup = fhir.IBackboneElement & {
    /**
     * This is not needed if the source value set is specified and it contains concepts from only a single system.
     */
    source?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.source
     */
    _source?: fhir.IFhirElement | undefined;
    /**
     * The specification of a particular code system version may be required for code systems which lack concept permanence.
     */
    sourceVersion?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.sourceVersion
     */
    _sourceVersion?: fhir.IFhirElement | undefined;
    /**
     * This is not needed if the target value set is specified and it contains concepts from only a single system. The group target may also be omitted if all of the target element equivalence values are 'unmatched'.
     */
    target?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.target
     */
    _target?: fhir.IFhirElement | undefined;
    /**
     * The specification of a particular code system version may be required for code systems which lack concept permanence.
     */
    targetVersion?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.targetVersion
     */
    _targetVersion?: fhir.IFhirElement | undefined;
    /**
     * Generally, the ideal is that there would only be one mapping for each concept in the source value set, but a given concept may be mapped multiple times with different comments or dependencies.
     */
    element: fhir.IConceptMapGroupElement[] | null;
    /**
     * This only applies if the source code has a system value that matches the system defined for the group.
     */
    unmapped?: fhir.IConceptMapGroupUnmapped | undefined;
};
/**
 * A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models.
 */
export declare type IConceptMap = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "ConceptMap";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.url
     */
    _url?: fhir.IFhirElement | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this concept map outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IIdentifier | undefined;
    /**
     * There may be different concept map instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the concept map with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.version
     */
    _version?: fhir.IFhirElement | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.title
     */
    _title?: fhir.IFhirElement | undefined;
    /**
     * Allows filtering of concept maps that are appropriate for use versus not.
     */
    status: PublicationStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: ConceptMap.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * Allows filtering of concept maps that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.experimental
     */
    _experimental?: fhir.IFhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the concept map. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.date
     */
    _date?: fhir.IFhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the concept map is the organization or individual primarily responsible for the maintenance and upkeep of the concept map. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the concept map. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.publisher
     */
    _publisher?: fhir.IFhirElement | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.IContactDetail[] | undefined;
    /**
     * The description is not intended to describe the semantics of the concept map. The description should capture its intended use, which is needed for ensuring integrity for its use in models across future changes.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.IUsageContext[] | undefined;
    /**
     * It may be possible for the concept map to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.ICodeableConcept[] | undefined;
    /**
     * This element does not describe the usage of the concept map. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this concept map.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.purpose
     */
    _purpose?: fhir.IFhirElement | undefined;
    /**
     * Frequently the copyright differs between the concept map and codes that are included. The copyright statement should clearly differentiate between these when required.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.copyright
     */
    _copyright?: fhir.IFhirElement | undefined;
    /**
     * Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, there is no specified context for the map (not recommended).  The source value set may select codes from either an explicit (standard or local) or implicit code system.
     */
    sourceUri?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.source[x]
     */
    _sourceUri?: fhir.IFhirElement | undefined;
    /**
     * Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, there is no specified context for the map (not recommended).  The source value set may select codes from either an explicit (standard or local) or implicit code system.
     */
    sourceCanonical?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.source[x]
     */
    _sourceCanonical?: fhir.IFhirElement | undefined;
    /**
     * Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, the is no specified context for the map.
     */
    targetUri?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.target[x]
     */
    _targetUri?: fhir.IFhirElement | undefined;
    /**
     * Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, the is no specified context for the map.
     */
    targetCanonical?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.target[x]
     */
    _targetCanonical?: fhir.IFhirElement | undefined;
    /**
     * A group of mappings that all have the same source and target system.
     */
    group?: fhir.IConceptMapGroup[] | undefined;
};
/**
 * A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.
 */
export declare class ConceptMapGroupElementTargetDependsOn extends fhir.BackboneElement implements IConceptMapGroupElementTargetDependsOn {
    /**
     * A reference to an element that holds a coded value that corresponds to a code system property. The idea is that the information model carries an element somewhere that is labeled to correspond with a code system property.
     */
    property: string | null;
    /**
     * Extended properties for primitive element: ConceptMap.group.element.target.dependsOn.property
     */
    _property?: fhir.FhirElement | undefined;
    /**
     * An absolute URI that identifies the code system of the dependency code (if the source/dependency is a value set that crosses code systems).
     */
    system?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.element.target.dependsOn.system
     */
    _system?: fhir.FhirElement | undefined;
    /**
     * Identity (code or path) or the element/item/ValueSet/text that the map depends on / refers to.
     */
    value: string | null;
    /**
     * Extended properties for primitive element: ConceptMap.group.element.target.dependsOn.value
     */
    _value?: fhir.FhirElement | undefined;
    /**
     * The display is ignored when processing the map.
     */
    display?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.element.target.dependsOn.display
     */
    _display?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ConceptMapGroupElementTargetDependsOn - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IConceptMapGroupElementTargetDependsOn>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Ideally there would only be one map, with equal or equivalent mapping. But multiple maps are allowed for several narrower options, or to assert that other concepts are unmatched.
 */
export declare class ConceptMapGroupElementTarget extends fhir.BackboneElement implements IConceptMapGroupElementTarget {
    /**
     * Identity (code or path) or the element/item that the map refers to.
     */
    code?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.element.target.code
     */
    _code?: fhir.FhirElement | undefined;
    /**
     * The display is ignored when processing the map.
     */
    display?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.element.target.display
     */
    _display?: fhir.FhirElement | undefined;
    /**
     * This element is labeled as a modifier because it may indicate that a target does not apply.
     */
    equivalence: ConceptMapEquivalenceValueSetEnum | null;
    /**
     * Extended properties for primitive element: ConceptMap.group.element.target.equivalence
     */
    _equivalence?: fhir.FhirElement | undefined;
    /**
     * A description of status/issues in mapping that conveys additional information not represented in  the structured data.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.element.target.comment
     */
    _comment?: fhir.FhirElement | undefined;
    /**
     * A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.
     */
    dependsOn?: fhir.ConceptMapGroupElementTargetDependsOn[] | undefined;
    /**
     * A set of additional outcomes from this mapping to other elements. To properly execute this mapping, the specified element must be mapped to some data element or source that is in context. The mapping may still be useful without a place for the additional data elements, but the equivalence cannot be relied on.
     */
    product?: fhir.ConceptMapGroupElementTargetDependsOn[] | undefined;
    /**
     * Default constructor for ConceptMapGroupElementTarget - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IConceptMapGroupElementTarget>);
    /**
     * Required-bound Value Set for equivalence
     */
    equivalenceRequiredValueSet(): ConceptMapEquivalenceValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Generally, the ideal is that there would only be one mapping for each concept in the source value set, but a given concept may be mapped multiple times with different comments or dependencies.
 */
export declare class ConceptMapGroupElement extends fhir.BackboneElement implements IConceptMapGroupElement {
    /**
     * Identity (code or path) or the element/item being mapped.
     */
    code?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.element.code
     */
    _code?: fhir.FhirElement | undefined;
    /**
     * The display is ignored when processing the map.
     */
    display?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.element.display
     */
    _display?: fhir.FhirElement | undefined;
    /**
     * Ideally there would only be one map, with equal or equivalent mapping. But multiple maps are allowed for several narrower options, or to assert that other concepts are unmatched.
     */
    target?: fhir.ConceptMapGroupElementTarget[] | undefined;
    /**
     * Default constructor for ConceptMapGroupElement - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IConceptMapGroupElement>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * This only applies if the source code has a system value that matches the system defined for the group.
 */
export declare class ConceptMapGroupUnmapped extends fhir.BackboneElement implements IConceptMapGroupUnmapped {
    /**
     * Defines which action to take if there is no match for the source concept in the target system designated for the group. One of 3 actions are possible: use the unmapped code (this is useful when doing a mapping between versions, and only a few codes have changed), use a fixed code (a default code), or alternatively, a reference to a different concept map can be provided (by canonical URL).
     */
    mode: ConceptmapUnmappedModeValueSetEnum | null;
    /**
     * Extended properties for primitive element: ConceptMap.group.unmapped.mode
     */
    _mode?: fhir.FhirElement | undefined;
    /**
     * The fixed code to use when the mode = 'fixed'  - all unmapped codes are mapped to a single fixed code.
     */
    code?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.unmapped.code
     */
    _code?: fhir.FhirElement | undefined;
    /**
     * The display is ignored when processing the map.
     */
    display?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.unmapped.display
     */
    _display?: fhir.FhirElement | undefined;
    /**
     * The canonical reference to an additional ConceptMap resource instance to use for mapping if this ConceptMap resource contains no matching mapping for the source concept.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.unmapped.url
     */
    _url?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ConceptMapGroupUnmapped - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IConceptMapGroupUnmapped>);
    /**
     * Required-bound Value Set for mode
     */
    modeRequiredValueSet(): ConceptmapUnmappedModeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A group of mappings that all have the same source and target system.
 */
export declare class ConceptMapGroup extends fhir.BackboneElement implements IConceptMapGroup {
    /**
     * This is not needed if the source value set is specified and it contains concepts from only a single system.
     */
    source?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.source
     */
    _source?: fhir.FhirElement | undefined;
    /**
     * The specification of a particular code system version may be required for code systems which lack concept permanence.
     */
    sourceVersion?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.sourceVersion
     */
    _sourceVersion?: fhir.FhirElement | undefined;
    /**
     * This is not needed if the target value set is specified and it contains concepts from only a single system. The group target may also be omitted if all of the target element equivalence values are 'unmatched'.
     */
    target?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.target
     */
    _target?: fhir.FhirElement | undefined;
    /**
     * The specification of a particular code system version may be required for code systems which lack concept permanence.
     */
    targetVersion?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.group.targetVersion
     */
    _targetVersion?: fhir.FhirElement | undefined;
    /**
     * Generally, the ideal is that there would only be one mapping for each concept in the source value set, but a given concept may be mapped multiple times with different comments or dependencies.
     */
    element: fhir.ConceptMapGroupElement[] | null;
    /**
     * This only applies if the source code has a system value that matches the system defined for the group.
     */
    unmapped?: fhir.ConceptMapGroupUnmapped | undefined;
    /**
     * Default constructor for ConceptMapGroup - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IConceptMapGroup>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models.
 */
export declare class ConceptMap extends fhir.DomainResource implements IConceptMap {
    /**
     * Resource Type Name
     */
    resourceType: "ConceptMap";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.url
     */
    _url?: fhir.FhirElement | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this concept map outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * There may be different concept map instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the concept map with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.version
     */
    _version?: fhir.FhirElement | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.title
     */
    _title?: fhir.FhirElement | undefined;
    /**
     * Allows filtering of concept maps that are appropriate for use versus not.
     */
    status: PublicationStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: ConceptMap.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * Allows filtering of concept maps that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.experimental
     */
    _experimental?: fhir.FhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the concept map. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.date
     */
    _date?: fhir.FhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the concept map is the organization or individual primarily responsible for the maintenance and upkeep of the concept map. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the concept map. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.publisher
     */
    _publisher?: fhir.FhirElement | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * The description is not intended to describe the semantics of the concept map. The description should capture its intended use, which is needed for ensuring integrity for its use in models across future changes.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[] | undefined;
    /**
     * It may be possible for the concept map to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[] | undefined;
    /**
     * This element does not describe the usage of the concept map. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this concept map.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.purpose
     */
    _purpose?: fhir.FhirElement | undefined;
    /**
     * Frequently the copyright differs between the concept map and codes that are included. The copyright statement should clearly differentiate between these when required.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.copyright
     */
    _copyright?: fhir.FhirElement | undefined;
    /**
     * Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, there is no specified context for the map (not recommended).  The source value set may select codes from either an explicit (standard or local) or implicit code system.
     */
    sourceUri?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.source[x]
     */
    _sourceUri?: fhir.FhirElement | undefined;
    /**
     * Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, there is no specified context for the map (not recommended).  The source value set may select codes from either an explicit (standard or local) or implicit code system.
     */
    sourceCanonical?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.source[x]
     */
    _sourceCanonical?: fhir.FhirElement | undefined;
    /**
     * Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, the is no specified context for the map.
     */
    targetUri?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.target[x]
     */
    _targetUri?: fhir.FhirElement | undefined;
    /**
     * Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, the is no specified context for the map.
     */
    targetCanonical?: string | undefined;
    /**
     * Extended properties for primitive element: ConceptMap.target[x]
     */
    _targetCanonical?: fhir.FhirElement | undefined;
    /**
     * A group of mappings that all have the same source and target system.
     */
    group?: fhir.ConceptMapGroup[] | undefined;
    /**
     * Default constructor for ConceptMap - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IConceptMap>);
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet(): PublicationStatusValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=ConceptMap.d.ts.map