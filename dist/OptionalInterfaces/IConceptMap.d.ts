import * as fhirInterfaces from '../optionalinterfaces';
/**
 * A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.
 */
export interface IConceptMapGroupElementTargetDependsOn extends fhirInterfaces.IBackboneElement {
    /**
     * The display is ignored when processing the map.
     */
    display?: string | undefined;
    _display?: fhirInterfaces.IElement | undefined;
    /**
     * A reference to an element that holds a coded value that corresponds to a code system property. The idea is that the information model carries an element somewhere that is labeled to correspond with a code system property.
     */
    property?: string | undefined;
    _property?: fhirInterfaces.IElement | undefined;
    /**
     * An absolute URI that identifies the code system of the dependency code (if the source/dependency is a value set that crosses code systems).
     */
    system?: string | undefined;
    _system?: fhirInterfaces.IElement | undefined;
    /**
     * Identity (code or path) or the element/item/ValueSet/text that the map depends on / refers to.
     */
    value?: string | undefined;
    _value?: fhirInterfaces.IElement | undefined;
}
/**
 * Ideally there would only be one map, with equal or equivalent mapping. But multiple maps are allowed for several narrower options, or to assert that other concepts are unmatched.
 */
export interface IConceptMapGroupElementTarget extends fhirInterfaces.IBackboneElement {
    /**
     * Identity (code or path) or the element/item that the map refers to.
     */
    code?: string | undefined;
    _code?: fhirInterfaces.IElement | undefined;
    /**
     * A description of status/issues in mapping that conveys additional information not represented in  the structured data.
     */
    comment?: string | undefined;
    _comment?: fhirInterfaces.IElement | undefined;
    /**
     * A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.
     */
    dependsOn?: fhirInterfaces.IConceptMapGroupElementTargetDependsOn[] | undefined;
    /**
     * The display is ignored when processing the map.
     */
    display?: string | undefined;
    _display?: fhirInterfaces.IElement | undefined;
    /**
     * This element is labeled as a modifier because it may indicate that a target does not apply.
     */
    equivalence?: ConceptMapGroupElementTargetEquivalenceEnum | undefined;
    _equivalence?: fhirInterfaces.IElement | undefined;
    /**
     * A set of additional outcomes from this mapping to other elements. To properly execute this mapping, the specified element must be mapped to some data element or source that is in context. The mapping may still be useful without a place for the additional data elements, but the equivalence cannot be relied on.
     */
    product?: fhirInterfaces.IConceptMapGroupElementTargetDependsOn[] | undefined;
}
/**
 * Code Values for the ConceptMap.group.element.target.equivalence field
 */
export declare enum ConceptMapGroupElementTargetEquivalenceEnum {
    RELATEDTO = "relatedto",
    EQUIVALENT = "equivalent",
    EQUAL = "equal",
    WIDER = "wider",
    SUBSUMES = "subsumes",
    NARROWER = "narrower",
    SPECIALIZES = "specializes",
    INEXACT = "inexact",
    UNMATCHED = "unmatched",
    DISJOINT = "disjoint"
}
/**
 * Generally, the ideal is that there would only be one mapping for each concept in the source value set, but a given concept may be mapped multiple times with different comments or dependencies.
 */
export interface IConceptMapGroupElement extends fhirInterfaces.IBackboneElement {
    /**
     * Identity (code or path) or the element/item being mapped.
     */
    code?: string | undefined;
    _code?: fhirInterfaces.IElement | undefined;
    /**
     * The display is ignored when processing the map.
     */
    display?: string | undefined;
    _display?: fhirInterfaces.IElement | undefined;
    /**
     * Ideally there would only be one map, with equal or equivalent mapping. But multiple maps are allowed for several narrower options, or to assert that other concepts are unmatched.
     */
    target?: fhirInterfaces.IConceptMapGroupElementTarget[] | undefined;
}
/**
 * This only applies if the source code has a system value that matches the system defined for the group.
 */
export interface IConceptMapGroupUnmapped extends fhirInterfaces.IBackboneElement {
    /**
     * The fixed code to use when the mode = 'fixed'  - all unmapped codes are mapped to a single fixed code.
     */
    code?: string | undefined;
    _code?: fhirInterfaces.IElement | undefined;
    /**
     * The display is ignored when processing the map.
     */
    display?: string | undefined;
    _display?: fhirInterfaces.IElement | undefined;
    /**
     * Defines which action to take if there is no match for the source concept in the target system designated for the group. One of 3 actions are possible: use the unmapped code (this is useful when doing a mapping between versions, and only a few codes have changed), use a fixed code (a default code), or alternatively, a reference to a different concept map can be provided (by canonical URL).
     */
    mode?: ConceptMapGroupUnmappedModeEnum | undefined;
    _mode?: fhirInterfaces.IElement | undefined;
    /**
     * The canonical reference to an additional ConceptMap resource instance to use for mapping if this ConceptMap resource contains no matching mapping for the source concept.
     */
    url?: string | undefined;
    _url?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the ConceptMap.group.unmapped.mode field
 */
export declare enum ConceptMapGroupUnmappedModeEnum {
    PROVIDED = "provided",
    FIXED = "fixed",
    OTHER_MAP = "other-map"
}
/**
 * A group of mappings that all have the same source and target system.
 */
export interface IConceptMapGroup extends fhirInterfaces.IBackboneElement {
    /**
     * Generally, the ideal is that there would only be one mapping for each concept in the source value set, but a given concept may be mapped multiple times with different comments or dependencies.
     */
    element?: fhirInterfaces.IConceptMapGroupElement[] | undefined;
    /**
     * This is not needed if the source value set is specified and it contains concepts from only a single system.
     */
    source?: string | undefined;
    _source?: fhirInterfaces.IElement | undefined;
    /**
     * The specification of a particular code system version may be required for code systems which lack concept permanence.
     */
    sourceVersion?: string | undefined;
    _sourceVersion?: fhirInterfaces.IElement | undefined;
    /**
     * This is not needed if the target value set is specified and it contains concepts from only a single system. The group target may also be omitted if all of the target element equivalence values are 'unmatched'.
     */
    target?: string | undefined;
    _target?: fhirInterfaces.IElement | undefined;
    /**
     * The specification of a particular code system version may be required for code systems which lack concept permanence.
     */
    targetVersion?: string | undefined;
    _targetVersion?: fhirInterfaces.IElement | undefined;
    /**
     * This only applies if the source code has a system value that matches the system defined for the group.
     */
    unmapped?: fhirInterfaces.IConceptMapGroupUnmapped | undefined;
}
/**
 * A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models.
 */
export interface IConceptMap extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "ConceptMap";
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhirInterfaces.IContactDetail[] | undefined;
    /**
     * Frequently the copyright differs between the concept map and codes that are included. The copyright statement should clearly differentiate between these when required.
     */
    copyright?: string | undefined;
    _copyright?: fhirInterfaces.IElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the concept map. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhirInterfaces.IElement | undefined;
    /**
     * The description is not intended to describe the semantics of the concept map. The description should capture its intended use, which is needed for ensuring integrity for its use in models across future changes.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * Allows filtering of concept maps that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    _experimental?: fhirInterfaces.IElement | undefined;
    /**
     * A group of mappings that all have the same source and target system.
     */
    group?: fhirInterfaces.IConceptMapGroup[] | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this concept map outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhirInterfaces.IIdentifier | undefined;
    /**
     * It may be possible for the concept map to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the concept map is the organization or individual primarily responsible for the maintenance and upkeep of the concept map. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the concept map. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhirInterfaces.IElement | undefined;
    /**
     * This element does not describe the usage of the concept map. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this concept map.
     */
    purpose?: string | undefined;
    _purpose?: fhirInterfaces.IElement | undefined;
    /**
     * Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, there is no specified context for the map (not recommended).  The source value set may select codes from either an explicit (standard or local) or implicit code system.
     */
    sourceUri?: string | undefined;
    _sourceUri?: fhirInterfaces.IElement | undefined;
    /**
     * Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, there is no specified context for the map (not recommended).  The source value set may select codes from either an explicit (standard or local) or implicit code system.
     */
    sourceCanonical?: string | undefined;
    _sourceCanonical?: fhirInterfaces.IElement | undefined;
    /**
     * Allows filtering of concept maps that are appropriate for use versus not.
     */
    status?: ConceptMapStatusEnum | undefined;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, the is no specified context for the map.
     */
    targetUri?: string | undefined;
    _targetUri?: fhirInterfaces.IElement | undefined;
    /**
     * Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, the is no specified context for the map.
     */
    targetCanonical?: string | undefined;
    _targetCanonical?: fhirInterfaces.IElement | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    _title?: fhirInterfaces.IElement | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    _url?: fhirInterfaces.IElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhirInterfaces.IUsageContext[] | undefined;
    /**
     * There may be different concept map instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the concept map with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the ConceptMap.status field
 */
export declare enum ConceptMapStatusEnum {
    DRAFT = "draft",
    ACTIVE = "active",
    RETIRED = "retired",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=IConceptMap.d.ts.map