import * as fhir from '../fhir';
/**
 * A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.
 */
export declare type IConceptMapGroupElementTargetDependsOn = fhir.IBackboneElement & {
    /**
     * The display is ignored when processing the map.
     */
    display?: string | undefined;
    _display?: fhir.IFhirElement | undefined;
    /**
     * A reference to an element that holds a coded value that corresponds to a code system property. The idea is that the information model carries an element somewhere that is labeled to correspond with a code system property.
     */
    property: string | null;
    _property?: fhir.IFhirElement | undefined;
    /**
     * An absolute URI that identifies the code system of the dependency code (if the source/dependency is a value set that crosses code systems).
     */
    system?: string | undefined;
    _system?: fhir.IFhirElement | undefined;
    /**
     * Identity (code or path) or the element/item/ValueSet/text that the map depends on / refers to.
     */
    value: string | null;
    _value?: fhir.IFhirElement | undefined;
};
/**
 * Ideally there would only be one map, with equal or equivalent mapping. But multiple maps are allowed for several narrower options, or to assert that other concepts are unmatched.
 */
export declare type IConceptMapGroupElementTarget = fhir.IBackboneElement & {
    /**
     * Identity (code or path) or the element/item that the map refers to.
     */
    code?: string | undefined;
    _code?: fhir.IFhirElement | undefined;
    /**
     * A description of status/issues in mapping that conveys additional information not represented in  the structured data.
     */
    comment?: string | undefined;
    _comment?: fhir.IFhirElement | undefined;
    /**
     * A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.
     */
    dependsOn?: fhir.IConceptMapGroupElementTargetDependsOn[] | undefined;
    /**
     * The display is ignored when processing the map.
     */
    display?: string | undefined;
    _display?: fhir.IFhirElement | undefined;
    /**
     * This element is labeled as a modifier because it may indicate that a target does not apply.
     */
    equivalence: ConceptMapGroupElementTargetEquivalenceEnum | null;
    _equivalence?: fhir.IFhirElement | undefined;
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
    _code?: fhir.IFhirElement | undefined;
    /**
     * The display is ignored when processing the map.
     */
    display?: string | undefined;
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
     * The fixed code to use when the mode = 'fixed'  - all unmapped codes are mapped to a single fixed code.
     */
    code?: string | undefined;
    _code?: fhir.IFhirElement | undefined;
    /**
     * The display is ignored when processing the map.
     */
    display?: string | undefined;
    _display?: fhir.IFhirElement | undefined;
    /**
     * Defines which action to take if there is no match for the source concept in the target system designated for the group. One of 3 actions are possible: use the unmapped code (this is useful when doing a mapping between versions, and only a few codes have changed), use a fixed code (a default code), or alternatively, a reference to a different concept map can be provided (by canonical URL).
     */
    mode: ConceptMapGroupUnmappedModeEnum | null;
    _mode?: fhir.IFhirElement | undefined;
    /**
     * The canonical reference to an additional ConceptMap resource instance to use for mapping if this ConceptMap resource contains no matching mapping for the source concept.
     */
    url?: string | undefined;
    _url?: fhir.IFhirElement | undefined;
};
/**
 * A group of mappings that all have the same source and target system.
 */
export declare type IConceptMapGroup = fhir.IBackboneElement & {
    /**
     * Generally, the ideal is that there would only be one mapping for each concept in the source value set, but a given concept may be mapped multiple times with different comments or dependencies.
     */
    element: fhir.IConceptMapGroupElement[] | null;
    /**
     * This is not needed if the source value set is specified and it contains concepts from only a single system.
     */
    source?: string | undefined;
    _source?: fhir.IFhirElement | undefined;
    /**
     * The specification of a particular code system version may be required for code systems which lack concept permanence.
     */
    sourceVersion?: string | undefined;
    _sourceVersion?: fhir.IFhirElement | undefined;
    /**
     * This is not needed if the target value set is specified and it contains concepts from only a single system. The group target may also be omitted if all of the target element equivalence values are 'unmatched'.
     */
    target?: string | undefined;
    _target?: fhir.IFhirElement | undefined;
    /**
     * The specification of a particular code system version may be required for code systems which lack concept permanence.
     */
    targetVersion?: string | undefined;
    _targetVersion?: fhir.IFhirElement | undefined;
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
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.IContactDetail[] | undefined;
    /**
     * Frequently the copyright differs between the concept map and codes that are included. The copyright statement should clearly differentiate between these when required.
     */
    copyright?: string | undefined;
    _copyright?: fhir.IFhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the concept map. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhir.IFhirElement | undefined;
    /**
     * The description is not intended to describe the semantics of the concept map. The description should capture its intended use, which is needed for ensuring integrity for its use in models across future changes.
     */
    description?: string | undefined;
    _description?: fhir.IFhirElement | undefined;
    /**
     * Allows filtering of concept maps that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    _experimental?: fhir.IFhirElement | undefined;
    /**
     * A group of mappings that all have the same source and target system.
     */
    group?: fhir.IConceptMapGroup[] | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this concept map outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IIdentifier | undefined;
    /**
     * It may be possible for the concept map to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.ICodeableConcept[] | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    _name?: fhir.IFhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the concept map is the organization or individual primarily responsible for the maintenance and upkeep of the concept map. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the concept map. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhir.IFhirElement | undefined;
    /**
     * This element does not describe the usage of the concept map. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this concept map.
     */
    purpose?: string | undefined;
    _purpose?: fhir.IFhirElement | undefined;
    /**
     * Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, there is no specified context for the map (not recommended).  The source value set may select codes from either an explicit (standard or local) or implicit code system.
     */
    sourceUri?: string | undefined;
    _sourceUri?: fhir.IFhirElement | undefined;
    /**
     * Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, there is no specified context for the map (not recommended).  The source value set may select codes from either an explicit (standard or local) or implicit code system.
     */
    sourceCanonical?: string | undefined;
    _sourceCanonical?: fhir.IFhirElement | undefined;
    /**
     * Allows filtering of concept maps that are appropriate for use versus not.
     */
    status: ConceptMapStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, the is no specified context for the map.
     */
    targetUri?: string | undefined;
    _targetUri?: fhir.IFhirElement | undefined;
    /**
     * Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, the is no specified context for the map.
     */
    targetCanonical?: string | undefined;
    _targetCanonical?: fhir.IFhirElement | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    _title?: fhir.IFhirElement | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    _url?: fhir.IFhirElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.IUsageContext[] | undefined;
    /**
     * There may be different concept map instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the concept map with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhir.IFhirElement | undefined;
};
/**
 * A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.
 */
export declare class ConceptMapGroupElementTargetDependsOn extends fhir.BackboneElement implements fhir.IConceptMapGroupElementTargetDependsOn {
    /**
     * The display is ignored when processing the map.
     */
    display?: string | undefined;
    _display?: fhir.FhirElement | undefined;
    /**
     * A reference to an element that holds a coded value that corresponds to a code system property. The idea is that the information model carries an element somewhere that is labeled to correspond with a code system property.
     */
    property: string | null;
    _property?: fhir.FhirElement | undefined;
    /**
     * An absolute URI that identifies the code system of the dependency code (if the source/dependency is a value set that crosses code systems).
     */
    system?: string | undefined;
    _system?: fhir.FhirElement | undefined;
    /**
     * Identity (code or path) or the element/item/ValueSet/text that the map depends on / refers to.
     */
    value: string | null;
    _value?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ConceptMapGroupElementTargetDependsOn - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IConceptMapGroupElementTargetDependsOn>);
    /**
     * Check if the current ConceptMapGroupElementTargetDependsOn contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ConceptMapGroupElementTargetDependsOn from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IConceptMapGroupElementTargetDependsOn): ConceptMapGroupElementTargetDependsOn;
}
/**
 * Ideally there would only be one map, with equal or equivalent mapping. But multiple maps are allowed for several narrower options, or to assert that other concepts are unmatched.
 */
export declare class ConceptMapGroupElementTarget extends fhir.BackboneElement implements fhir.IConceptMapGroupElementTarget {
    /**
     * Identity (code or path) or the element/item that the map refers to.
     */
    code?: string | undefined;
    _code?: fhir.FhirElement | undefined;
    /**
     * A description of status/issues in mapping that conveys additional information not represented in  the structured data.
     */
    comment?: string | undefined;
    _comment?: fhir.FhirElement | undefined;
    /**
     * A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.
     */
    dependsOn?: fhir.ConceptMapGroupElementTargetDependsOn[] | undefined;
    /**
     * The display is ignored when processing the map.
     */
    display?: string | undefined;
    _display?: fhir.FhirElement | undefined;
    /**
     * This element is labeled as a modifier because it may indicate that a target does not apply.
     */
    equivalence: ConceptMapGroupElementTargetEquivalenceEnum | null;
    _equivalence?: fhir.FhirElement | undefined;
    /**
     * A set of additional outcomes from this mapping to other elements. To properly execute this mapping, the specified element must be mapped to some data element or source that is in context. The mapping may still be useful without a place for the additional data elements, but the equivalence cannot be relied on.
     */
    product?: fhir.ConceptMapGroupElementTargetDependsOn[] | undefined;
    /**
     * Default constructor for ConceptMapGroupElementTarget - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IConceptMapGroupElementTarget>);
    /**
     * Check if the current ConceptMapGroupElementTarget contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ConceptMapGroupElementTarget from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IConceptMapGroupElementTarget): ConceptMapGroupElementTarget;
}
/**
 * Generally, the ideal is that there would only be one mapping for each concept in the source value set, but a given concept may be mapped multiple times with different comments or dependencies.
 */
export declare class ConceptMapGroupElement extends fhir.BackboneElement implements fhir.IConceptMapGroupElement {
    /**
     * Identity (code or path) or the element/item being mapped.
     */
    code?: string | undefined;
    _code?: fhir.FhirElement | undefined;
    /**
     * The display is ignored when processing the map.
     */
    display?: string | undefined;
    _display?: fhir.FhirElement | undefined;
    /**
     * Ideally there would only be one map, with equal or equivalent mapping. But multiple maps are allowed for several narrower options, or to assert that other concepts are unmatched.
     */
    target?: fhir.ConceptMapGroupElementTarget[] | undefined;
    /**
     * Default constructor for ConceptMapGroupElement - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IConceptMapGroupElement>);
    /**
     * Check if the current ConceptMapGroupElement contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ConceptMapGroupElement from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IConceptMapGroupElement): ConceptMapGroupElement;
}
/**
 * This only applies if the source code has a system value that matches the system defined for the group.
 */
export declare class ConceptMapGroupUnmapped extends fhir.BackboneElement implements fhir.IConceptMapGroupUnmapped {
    /**
     * The fixed code to use when the mode = 'fixed'  - all unmapped codes are mapped to a single fixed code.
     */
    code?: string | undefined;
    _code?: fhir.FhirElement | undefined;
    /**
     * The display is ignored when processing the map.
     */
    display?: string | undefined;
    _display?: fhir.FhirElement | undefined;
    /**
     * Defines which action to take if there is no match for the source concept in the target system designated for the group. One of 3 actions are possible: use the unmapped code (this is useful when doing a mapping between versions, and only a few codes have changed), use a fixed code (a default code), or alternatively, a reference to a different concept map can be provided (by canonical URL).
     */
    mode: ConceptMapGroupUnmappedModeEnum | null;
    _mode?: fhir.FhirElement | undefined;
    /**
     * The canonical reference to an additional ConceptMap resource instance to use for mapping if this ConceptMap resource contains no matching mapping for the source concept.
     */
    url?: string | undefined;
    _url?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ConceptMapGroupUnmapped - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IConceptMapGroupUnmapped>);
    /**
     * Check if the current ConceptMapGroupUnmapped contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ConceptMapGroupUnmapped from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IConceptMapGroupUnmapped): ConceptMapGroupUnmapped;
}
/**
 * A group of mappings that all have the same source and target system.
 */
export declare class ConceptMapGroup extends fhir.BackboneElement implements fhir.IConceptMapGroup {
    /**
     * Generally, the ideal is that there would only be one mapping for each concept in the source value set, but a given concept may be mapped multiple times with different comments or dependencies.
     */
    element: fhir.ConceptMapGroupElement[] | null;
    /**
     * This is not needed if the source value set is specified and it contains concepts from only a single system.
     */
    source?: string | undefined;
    _source?: fhir.FhirElement | undefined;
    /**
     * The specification of a particular code system version may be required for code systems which lack concept permanence.
     */
    sourceVersion?: string | undefined;
    _sourceVersion?: fhir.FhirElement | undefined;
    /**
     * This is not needed if the target value set is specified and it contains concepts from only a single system. The group target may also be omitted if all of the target element equivalence values are 'unmatched'.
     */
    target?: string | undefined;
    _target?: fhir.FhirElement | undefined;
    /**
     * The specification of a particular code system version may be required for code systems which lack concept permanence.
     */
    targetVersion?: string | undefined;
    _targetVersion?: fhir.FhirElement | undefined;
    /**
     * This only applies if the source code has a system value that matches the system defined for the group.
     */
    unmapped?: fhir.ConceptMapGroupUnmapped | undefined;
    /**
     * Default constructor for ConceptMapGroup - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IConceptMapGroup>);
    /**
     * Check if the current ConceptMapGroup contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ConceptMapGroup from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IConceptMapGroup): ConceptMapGroup;
}
/**
 * A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models.
 */
export declare class ConceptMap extends fhir.DomainResource implements fhir.IConceptMap {
    /**
     * Resource Type Name
     */
    resourceType: "ConceptMap";
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * Frequently the copyright differs between the concept map and codes that are included. The copyright statement should clearly differentiate between these when required.
     */
    copyright?: string | undefined;
    _copyright?: fhir.FhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the concept map. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhir.FhirElement | undefined;
    /**
     * The description is not intended to describe the semantics of the concept map. The description should capture its intended use, which is needed for ensuring integrity for its use in models across future changes.
     */
    description?: string | undefined;
    _description?: fhir.FhirElement | undefined;
    /**
     * Allows filtering of concept maps that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    _experimental?: fhir.FhirElement | undefined;
    /**
     * A group of mappings that all have the same source and target system.
     */
    group?: fhir.ConceptMapGroup[] | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this concept map outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * It may be possible for the concept map to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[] | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    _name?: fhir.FhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the concept map is the organization or individual primarily responsible for the maintenance and upkeep of the concept map. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the concept map. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhir.FhirElement | undefined;
    /**
     * This element does not describe the usage of the concept map. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this concept map.
     */
    purpose?: string | undefined;
    _purpose?: fhir.FhirElement | undefined;
    /**
     * Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, there is no specified context for the map (not recommended).  The source value set may select codes from either an explicit (standard or local) or implicit code system.
     */
    sourceUri?: string | undefined;
    _sourceUri?: fhir.FhirElement | undefined;
    /**
     * Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, there is no specified context for the map (not recommended).  The source value set may select codes from either an explicit (standard or local) or implicit code system.
     */
    sourceCanonical?: string | undefined;
    _sourceCanonical?: fhir.FhirElement | undefined;
    /**
     * Allows filtering of concept maps that are appropriate for use versus not.
     */
    status: ConceptMapStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, the is no specified context for the map.
     */
    targetUri?: string | undefined;
    _targetUri?: fhir.FhirElement | undefined;
    /**
     * Should be a version specific reference. URIs SHOULD be absolute. If there is no source or target value set, the is no specified context for the map.
     */
    targetCanonical?: string | undefined;
    _targetCanonical?: fhir.FhirElement | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    _title?: fhir.FhirElement | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    _url?: fhir.FhirElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[] | undefined;
    /**
     * There may be different concept map instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the concept map with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ConceptMap - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IConceptMap>);
    /**
     * Check if the current ConceptMap contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a ConceptMap from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IConceptMap): ConceptMap;
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
 * Code Values for the ConceptMap.group.unmapped.mode field
 */
export declare enum ConceptMapGroupUnmappedModeEnum {
    PROVIDED = "provided",
    FIXED = "fixed",
    OTHER_MAP = "other-map"
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
//# sourceMappingURL=ConceptMap.d.ts.map