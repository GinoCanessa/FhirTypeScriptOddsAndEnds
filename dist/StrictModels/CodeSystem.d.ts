import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * Note that filters defined in code systems usually require custom code on the part of any terminology engine that will make them available for use in value set filters. For this reason, they are generally only seen in high value published terminologies.
 */
export declare class CodeSystemFilter extends fhirModels.BackboneElement implements fhirInterfaces.ICodeSystemFilter {
    /**
     * The code that identifies this filter when it is used as a filter in [ValueSet](valueset.html#).compose.include.filter.
     */
    code: string;
    _code?: fhirModels.Element | undefined;
    /**
     * A description of how or why the filter is used.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * A list of operators that can be used with the filter.
     */
    operator: CodeSystemFilterOperatorEnum[];
    _operator?: fhirModels.Element[] | undefined;
    /**
     * A description of what the value for the filter should be.
     */
    value: string;
    _value?: fhirModels.Element | undefined;
    /**
     * Default constructor for CodeSystemFilter from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ICodeSystemFilter);
}
/**
 * Code Values for the CodeSystem.filter.operator field
 */
export declare enum CodeSystemFilterOperatorEnum {
    EQUALS = "=",
    IS_A = "is-a",
    DESCENDENT_OF = "descendent-of",
    IS_NOT_A = "is-not-a",
    REGEX = "regex",
    IN = "in",
    NOT_IN = "not-in",
    GENERALIZES = "generalizes",
    EXISTS = "exists"
}
/**
 * A property defines an additional slot through which additional information can be provided about a concept.
 */
export declare class CodeSystemProperty extends fhirModels.BackboneElement implements fhirInterfaces.ICodeSystemProperty {
    /**
     * A code that is used to identify the property. The code is used internally (in CodeSystem.concept.property.code) and also externally, such as in property filters.
     */
    code: string;
    _code?: fhirModels.Element | undefined;
    /**
     * A description of the property- why it is defined, and how its value might be used.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * The type of the property value. Properties of type "code" contain a code defined by the code system (e.g. a reference to another defined concept).
     */
    type: CodeSystemPropertyTypeEnum;
    _type?: fhirModels.Element | undefined;
    /**
     * Reference to the formal meaning of the property. One possible source of meaning is the [Concept Properties](codesystem-concept-properties.html) code system.
     */
    uri?: string | undefined;
    _uri?: fhirModels.Element | undefined;
    /**
     * Default constructor for CodeSystemProperty from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ICodeSystemProperty);
}
/**
 * Code Values for the CodeSystem.property.type field
 */
export declare enum CodeSystemPropertyTypeEnum {
    CODE = "code",
    CODING = "Coding",
    STRING = "string",
    INTEGER = "integer",
    BOOLEAN = "boolean",
    DATETIME = "dateTime",
    DECIMAL = "decimal"
}
/**
 * Concepts have both a ```display``` and an array of ```designation```. The display is equivalent to a special designation with an implied ```designation.use``` of "primary code" and a language equal to the [Resource Language](resource.html#language).
 */
export declare class CodeSystemConceptDesignation extends fhirModels.BackboneElement implements fhirInterfaces.ICodeSystemConceptDesignation {
    /**
     * In the absence of a language, the resource language applies.
     */
    language?: string | undefined;
    _language?: fhirModels.Element | undefined;
    /**
     * If no use is provided, the designation can be assumed to be suitable for general display to a human user.
     */
    use?: fhirModels.Coding | undefined;
    /**
     * The text value for this designation.
     */
    value: string;
    _value?: fhirModels.Element | undefined;
    /**
     * Default constructor for CodeSystemConceptDesignation from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ICodeSystemConceptDesignation);
}
/**
 * A property value for this concept.
 */
export declare class CodeSystemConceptProperty extends fhirModels.BackboneElement implements fhirInterfaces.ICodeSystemConceptProperty {
    /**
     * A code that is a reference to CodeSystem.property.code.
     */
    code: string;
    _code?: fhirModels.Element | undefined;
    /**
     * The value of this property.
     */
    valueCode?: string | undefined;
    _valueCode?: fhirModels.Element | undefined;
    /**
     * The value of this property.
     */
    valueCoding?: fhirModels.Coding | undefined;
    /**
     * The value of this property.
     */
    valueString?: string | undefined;
    _valueString?: fhirModels.Element | undefined;
    /**
     * The value of this property.
     */
    valueInteger?: number | undefined;
    _valueInteger?: fhirModels.Element | undefined;
    /**
     * The value of this property.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhirModels.Element | undefined;
    /**
     * The value of this property.
     */
    valueDateTime?: string | undefined;
    _valueDateTime?: fhirModels.Element | undefined;
    /**
     * The value of this property.
     */
    valueDecimal?: number | undefined;
    _valueDecimal?: fhirModels.Element | undefined;
    /**
     * Default constructor for CodeSystemConceptProperty from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ICodeSystemConceptProperty);
}
/**
 * If this is empty, it means that the code system resource does not represent the content of the code system.
 */
export declare class CodeSystemConcept extends fhirModels.BackboneElement implements fhirInterfaces.ICodeSystemConcept {
    /**
     * A code - a text symbol - that uniquely identifies the concept within the code system.
     */
    code: string;
    _code?: fhirModels.Element | undefined;
    /**
     * Defines children of a concept to produce a hierarchy of concepts. The nature of the relationships is variable (is-a/contains/categorizes) - see hierarchyMeaning.
     */
    concept?: fhirModels.CodeSystemConcept[] | undefined;
    /**
     * The formal definition of the concept. The code system resource does not make formal definitions required, because of the prevalence of legacy systems. However, they are highly recommended, as without them there is no formal meaning associated with the concept.
     */
    definition?: string | undefined;
    _definition?: fhirModels.Element | undefined;
    /**
     * Concepts have both a ```display``` and an array of ```designation```. The display is equivalent to a special designation with an implied ```designation.use``` of "primary code" and a language equal to the [Resource Language](resource.html#language).
     */
    designation?: fhirModels.CodeSystemConceptDesignation[] | undefined;
    /**
     * A human readable string that is the recommended default way to present this concept to a user.
     */
    display?: string | undefined;
    _display?: fhirModels.Element | undefined;
    /**
     * A property value for this concept.
     */
    property?: fhirModels.CodeSystemConceptProperty[] | undefined;
    /**
     * Default constructor for CodeSystemConcept from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ICodeSystemConcept);
}
/**
 * The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content.
 */
export declare class CodeSystem extends fhirModels.DomainResource implements fhirInterfaces.ICodeSystem {
    /**
     * Resource Type Name
     */
    readonly resourceType = "CodeSystem";
    /**
     * If this value is missing, then it is not specified whether a code system is case sensitive or not. When the rule is not known, Postel's law should be followed: produce codes with the correct case, and accept codes in any case. This element is primarily provided to support validation software.
     */
    caseSensitive?: boolean | undefined;
    _caseSensitive?: fhirModels.Element | undefined;
    /**
     * Note that the code system resource does not define what the compositional grammar is, only whether or not there is one.
     */
    compositional?: boolean | undefined;
    _compositional?: fhirModels.Element | undefined;
    /**
     * If this is empty, it means that the code system resource does not represent the content of the code system.
     */
    concept?: fhirModels.CodeSystemConcept[] | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhirModels.ContactDetail[] | undefined;
    /**
     * The extent of the content of the code system (the concepts and codes it defines) are represented in this resource instance.
     */
    content: CodeSystemContentEnum;
    _content?: fhirModels.Element | undefined;
    /**
     * ... Sometimes, the copyright differs between the code system and the codes that are included. The copyright statement should clearly differentiate between these when required.
     */
    copyright?: string | undefined;
    _copyright?: fhirModels.Element | undefined;
    /**
     * The count of concepts defined in this resource cannot be more than this value but may be less for several reasons - see the content element.
     */
    count?: number | undefined;
    _count?: fhirModels.Element | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the code system. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhirModels.Element | undefined;
    /**
     * This description can be used to capture details such as why the code system was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the code system as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the code system is presumed to be the predominant language in the place the code system was created).
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * Allows filtering of code systems that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    _experimental?: fhirModels.Element | undefined;
    /**
     * Note that filters defined in code systems usually require custom code on the part of any terminology engine that will make them available for use in value set filters. For this reason, they are generally only seen in high value published terminologies.
     */
    filter?: fhirModels.CodeSystemFilter[] | undefined;
    /**
     * Note that other representations might have a different hierarchy or none at all, and represent the information using properties.
     */
    hierarchyMeaning?: CodeSystemHierarchyMeaningEnum | undefined;
    _hierarchyMeaning?: fhirModels.Element | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this code system outside of FHIR, where it is not possible to use the logical URI.  Note that HL7 defines at least three identifiers for many of its code systems - the FHIR canonical URL, the OID and the V2 Table 0396 mnemonic code.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * It may be possible for the code system to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhirModels.CodeableConcept[] | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * A property defines an additional slot through which additional information can be provided about a concept.
     */
    property?: fhirModels.CodeSystemProperty[] | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the code system is the organization or individual primarily responsible for the maintenance and upkeep of the code system. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the code system. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhirModels.Element | undefined;
    /**
     * This element does not describe the usage of the code system. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this code system.
     */
    purpose?: string | undefined;
    _purpose?: fhirModels.Element | undefined;
    /**
     * Allows filtering of code systems that are appropriate for use versus not.
     */
    status: CodeSystemStatusEnum;
    _status?: fhirModels.Element | undefined;
    /**
     * The most common use of a code system supplement is to add additional language support.
     */
    supplements?: string | undefined;
    _supplements?: fhirModels.Element | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    _title?: fhirModels.Element | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    _url?: fhirModels.Element | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhirModels.UsageContext[] | undefined;
    /**
     * The definition of the value set SHALL include all codes from this code system and only codes from this code system, and it SHALL be immutable.
     */
    valueSet?: string | undefined;
    _valueSet?: fhirModels.Element | undefined;
    /**
     * There may be different code system instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the code system with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhirModels.Element | undefined;
    /**
     * Best practice is that code systems do not redefine concepts, or that if concepts are redefined, a new code system definition is created. But this is not always possible, so some code systems may be defined as 'versionNeeded'.
     * Most code systems occasionally refine the displays defined for concepts between versions. Contexts in which the concept display values are validated may require that the version be specified for some code systems irrespective of the value of this property.
     */
    versionNeeded?: boolean | undefined;
    _versionNeeded?: fhirModels.Element | undefined;
    /**
     * Default constructor for CodeSystem from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ICodeSystem);
}
/**
 * Code Values for the CodeSystem.content field
 */
export declare enum CodeSystemContentEnum {
    NOT_PRESENT = "not-present",
    EXAMPLE = "example",
    FRAGMENT = "fragment",
    COMPLETE = "complete",
    SUPPLEMENT = "supplement"
}
/**
 * Code Values for the CodeSystem.hierarchyMeaning field
 */
export declare enum CodeSystemHierarchyMeaningEnum {
    GROUPED_BY = "grouped-by",
    IS_A = "is-a",
    PART_OF = "part-of",
    CLASSIFIED_WITH = "classified-with"
}
/**
 * Code Values for the CodeSystem.status field
 */
export declare enum CodeSystemStatusEnum {
    DRAFT = "draft",
    ACTIVE = "active",
    RETIRED = "retired",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=CodeSystem.d.ts.map