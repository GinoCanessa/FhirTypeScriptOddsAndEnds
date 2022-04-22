import * as fhir from '../fhir.js';
import { FilterOperatorValueSetType, FilterOperatorValueSetEnum } from '../fhirValueSets/FilterOperatorValueSet.js';
import { ConceptPropertyTypeValueSetType, ConceptPropertyTypeValueSetEnum } from '../fhirValueSets/ConceptPropertyTypeValueSet.js';
import { LanguagesValueSetType } from '../fhirValueSets/LanguagesValueSet.js';
import { DesignationUseValueSetType } from '../fhirValueSets/DesignationUseValueSet.js';
import { PublicationStatusValueSetType, PublicationStatusValueSetEnum } from '../fhirValueSets/PublicationStatusValueSet.js';
import { CodesystemHierarchyMeaningValueSetType, CodesystemHierarchyMeaningValueSetEnum } from '../fhirValueSets/CodesystemHierarchyMeaningValueSet.js';
import { CodesystemContentModeValueSetType, CodesystemContentModeValueSetEnum } from '../fhirValueSets/CodesystemContentModeValueSet.js';
/**
 * Note that filters defined in code systems usually require custom code on the part of any terminology engine that will make them available for use in value set filters. For this reason, they are generally only seen in high value published terminologies.
 */
export declare type ICodeSystemFilter = fhir.IBackboneElement & {
    /**
     * The code that identifies this filter when it is used as a filter in [ValueSet](valueset.html#).compose.include.filter.
     */
    code: string | null;
    /**
     * Extended properties for primitive element: CodeSystem.filter.code
     */
    _code?: fhir.IFhirElement | undefined;
    /**
     * A description of how or why the filter is used.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.filter.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * A list of operators that can be used with the filter.
     */
    operator: FilterOperatorValueSetEnum[] | null;
    /**
     * Extended properties for primitive element: CodeSystem.filter.operator
     */
    _operator?: fhir.IFhirElement[] | undefined;
    /**
     * A description of what the value for the filter should be.
     */
    value: string | null;
    /**
     * Extended properties for primitive element: CodeSystem.filter.value
     */
    _value?: fhir.IFhirElement | undefined;
};
/**
 * A property defines an additional slot through which additional information can be provided about a concept.
 */
export declare type ICodeSystemProperty = fhir.IBackboneElement & {
    /**
     * A code that is used to identify the property. The code is used internally (in CodeSystem.concept.property.code) and also externally, such as in property filters.
     */
    code: string | null;
    /**
     * Extended properties for primitive element: CodeSystem.property.code
     */
    _code?: fhir.IFhirElement | undefined;
    /**
     * Reference to the formal meaning of the property. One possible source of meaning is the [Concept Properties](codesystem-concept-properties.html) code system.
     */
    uri?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.property.uri
     */
    _uri?: fhir.IFhirElement | undefined;
    /**
     * A description of the property- why it is defined, and how its value might be used.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.property.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * The type of the property value. Properties of type "code" contain a code defined by the code system (e.g. a reference to another defined concept).
     */
    type: ConceptPropertyTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: CodeSystem.property.type
     */
    _type?: fhir.IFhirElement | undefined;
};
/**
 * Concepts have both a ```display``` and an array of ```designation```. The display is equivalent to a special designation with an implied ```designation.use``` of "primary code" and a language equal to the [Resource Language](resource.html#language).
 */
export declare type ICodeSystemConceptDesignation = fhir.IBackboneElement & {
    /**
     * In the absence of a language, the resource language applies.
     */
    language?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.concept.designation.language
     */
    _language?: fhir.IFhirElement | undefined;
    /**
     * If no use is provided, the designation can be assumed to be suitable for general display to a human user.
     */
    use?: fhir.ICoding | undefined;
    /**
     * The text value for this designation.
     */
    value: string | null;
    /**
     * Extended properties for primitive element: CodeSystem.concept.designation.value
     */
    _value?: fhir.IFhirElement | undefined;
};
/**
 * A property value for this concept.
 */
export declare type ICodeSystemConceptProperty = fhir.IBackboneElement & {
    /**
     * A code that is a reference to CodeSystem.property.code.
     */
    code: string | null;
    /**
     * Extended properties for primitive element: CodeSystem.concept.property.code
     */
    _code?: fhir.IFhirElement | undefined;
    /**
     * The value of this property.
     */
    valueCode?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.concept.property.value[x]
     */
    _valueCode?: fhir.IFhirElement | undefined;
    /**
     * The value of this property.
     */
    valueCoding?: fhir.ICoding | undefined;
    /**
     * The value of this property.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.concept.property.value[x]
     */
    _valueString?: fhir.IFhirElement | undefined;
    /**
     * The value of this property.
     */
    valueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.concept.property.value[x]
     */
    _valueInteger?: fhir.IFhirElement | undefined;
    /**
     * The value of this property.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.concept.property.value[x]
     */
    _valueBoolean?: fhir.IFhirElement | undefined;
    /**
     * The value of this property.
     */
    valueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.concept.property.value[x]
     */
    _valueDateTime?: fhir.IFhirElement | undefined;
    /**
     * The value of this property.
     */
    valueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.concept.property.value[x]
     */
    _valueDecimal?: fhir.IFhirElement | undefined;
};
/**
 * If this is empty, it means that the code system resource does not represent the content of the code system.
 */
export declare type ICodeSystemConcept = fhir.IBackboneElement & {
    /**
     * A code - a text symbol - that uniquely identifies the concept within the code system.
     */
    code: string | null;
    /**
     * Extended properties for primitive element: CodeSystem.concept.code
     */
    _code?: fhir.IFhirElement | undefined;
    /**
     * A human readable string that is the recommended default way to present this concept to a user.
     */
    display?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.concept.display
     */
    _display?: fhir.IFhirElement | undefined;
    /**
     * The formal definition of the concept. The code system resource does not make formal definitions required, because of the prevalence of legacy systems. However, they are highly recommended, as without them there is no formal meaning associated with the concept.
     */
    definition?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.concept.definition
     */
    _definition?: fhir.IFhirElement | undefined;
    /**
     * Concepts have both a ```display``` and an array of ```designation```. The display is equivalent to a special designation with an implied ```designation.use``` of "primary code" and a language equal to the [Resource Language](resource.html#language).
     */
    designation?: fhir.ICodeSystemConceptDesignation[] | undefined;
    /**
     * A property value for this concept.
     */
    property?: fhir.ICodeSystemConceptProperty[] | undefined;
    /**
     * Defines children of a concept to produce a hierarchy of concepts. The nature of the relationships is variable (is-a/contains/categorizes) - see hierarchyMeaning.
     */
    concept?: fhir.ICodeSystemConcept[] | undefined;
};
/**
 * The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content.
 */
export declare type ICodeSystem = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "CodeSystem";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.url
     */
    _url?: fhir.IFhirElement | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this code system outside of FHIR, where it is not possible to use the logical URI.  Note that HL7 defines at least three identifiers for many of its code systems - the FHIR canonical URL, the OID and the V2 Table 0396 mnemonic code.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * There may be different code system instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the code system with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.version
     */
    _version?: fhir.IFhirElement | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.title
     */
    _title?: fhir.IFhirElement | undefined;
    /**
     * Allows filtering of code systems that are appropriate for use versus not.
     */
    status: PublicationStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: CodeSystem.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * Allows filtering of code systems that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.experimental
     */
    _experimental?: fhir.IFhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the code system. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.date
     */
    _date?: fhir.IFhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the code system is the organization or individual primarily responsible for the maintenance and upkeep of the code system. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the code system. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.publisher
     */
    _publisher?: fhir.IFhirElement | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.IContactDetail[] | undefined;
    /**
     * This description can be used to capture details such as why the code system was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the code system as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the code system is presumed to be the predominant language in the place the code system was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.IUsageContext[] | undefined;
    /**
     * It may be possible for the code system to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.ICodeableConcept[] | undefined;
    /**
     * This element does not describe the usage of the code system. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this code system.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.purpose
     */
    _purpose?: fhir.IFhirElement | undefined;
    /**
     * ... Sometimes, the copyright differs between the code system and the codes that are included. The copyright statement should clearly differentiate between these when required.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.copyright
     */
    _copyright?: fhir.IFhirElement | undefined;
    /**
     * If this value is missing, then it is not specified whether a code system is case sensitive or not. When the rule is not known, Postel's law should be followed: produce codes with the correct case, and accept codes in any case. This element is primarily provided to support validation software.
     */
    caseSensitive?: boolean | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.caseSensitive
     */
    _caseSensitive?: fhir.IFhirElement | undefined;
    /**
     * The definition of the value set SHALL include all codes from this code system and only codes from this code system, and it SHALL be immutable.
     */
    valueSet?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.valueSet
     */
    _valueSet?: fhir.IFhirElement | undefined;
    /**
     * Note that other representations might have a different hierarchy or none at all, and represent the information using properties.
     */
    hierarchyMeaning?: CodesystemHierarchyMeaningValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.hierarchyMeaning
     */
    _hierarchyMeaning?: fhir.IFhirElement | undefined;
    /**
     * Note that the code system resource does not define what the compositional grammar is, only whether or not there is one.
     */
    compositional?: boolean | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.compositional
     */
    _compositional?: fhir.IFhirElement | undefined;
    /**
     * Best practice is that code systems do not redefine concepts, or that if concepts are redefined, a new code system definition is created. But this is not always possible, so some code systems may be defined as 'versionNeeded'.
     * Most code systems occasionally refine the displays defined for concepts between versions. Contexts in which the concept display values are validated may require that the version be specified for some code systems irrespective of the value of this property.
     */
    versionNeeded?: boolean | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.versionNeeded
     */
    _versionNeeded?: fhir.IFhirElement | undefined;
    /**
     * The extent of the content of the code system (the concepts and codes it defines) are represented in this resource instance.
     */
    content: CodesystemContentModeValueSetEnum | null;
    /**
     * Extended properties for primitive element: CodeSystem.content
     */
    _content?: fhir.IFhirElement | undefined;
    /**
     * The most common use of a code system supplement is to add additional language support.
     */
    supplements?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.supplements
     */
    _supplements?: fhir.IFhirElement | undefined;
    /**
     * The count of concepts defined in this resource cannot be more than this value but may be less for several reasons - see the content element.
     */
    count?: number | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.count
     */
    _count?: fhir.IFhirElement | undefined;
    /**
     * Note that filters defined in code systems usually require custom code on the part of any terminology engine that will make them available for use in value set filters. For this reason, they are generally only seen in high value published terminologies.
     */
    filter?: fhir.ICodeSystemFilter[] | undefined;
    /**
     * A property defines an additional slot through which additional information can be provided about a concept.
     */
    property?: fhir.ICodeSystemProperty[] | undefined;
    /**
     * If this is empty, it means that the code system resource does not represent the content of the code system.
     */
    concept?: fhir.ICodeSystemConcept[] | undefined;
};
/**
 * Note that filters defined in code systems usually require custom code on the part of any terminology engine that will make them available for use in value set filters. For this reason, they are generally only seen in high value published terminologies.
 */
export declare class CodeSystemFilter extends fhir.BackboneElement implements ICodeSystemFilter {
    /**
     * The code that identifies this filter when it is used as a filter in [ValueSet](valueset.html#).compose.include.filter.
     */
    code: string | null;
    /**
     * Extended properties for primitive element: CodeSystem.filter.code
     */
    _code?: fhir.FhirElement | undefined;
    /**
     * A description of how or why the filter is used.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.filter.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * A list of operators that can be used with the filter.
     */
    operator: FilterOperatorValueSetEnum[] | null;
    /**
     * Extended properties for primitive element: CodeSystem.filter.operator
     */
    _operator?: fhir.FhirElement[] | undefined;
    /**
     * A description of what the value for the filter should be.
     */
    value: string | null;
    /**
     * Extended properties for primitive element: CodeSystem.filter.value
     */
    _value?: fhir.FhirElement | undefined;
    /**
     * Default constructor for CodeSystemFilter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ICodeSystemFilter>);
    /**
     * Required-bound Value Set for operator
     */
    static operatorRequiredValueSet(): FilterOperatorValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A property defines an additional slot through which additional information can be provided about a concept.
 */
export declare class CodeSystemProperty extends fhir.BackboneElement implements ICodeSystemProperty {
    /**
     * A code that is used to identify the property. The code is used internally (in CodeSystem.concept.property.code) and also externally, such as in property filters.
     */
    code: string | null;
    /**
     * Extended properties for primitive element: CodeSystem.property.code
     */
    _code?: fhir.FhirElement | undefined;
    /**
     * Reference to the formal meaning of the property. One possible source of meaning is the [Concept Properties](codesystem-concept-properties.html) code system.
     */
    uri?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.property.uri
     */
    _uri?: fhir.FhirElement | undefined;
    /**
     * A description of the property- why it is defined, and how its value might be used.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.property.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * The type of the property value. Properties of type "code" contain a code defined by the code system (e.g. a reference to another defined concept).
     */
    type: ConceptPropertyTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: CodeSystem.property.type
     */
    _type?: fhir.FhirElement | undefined;
    /**
     * Default constructor for CodeSystemProperty - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ICodeSystemProperty>);
    /**
     * Required-bound Value Set for type
     */
    static typeRequiredValueSet(): ConceptPropertyTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Concepts have both a ```display``` and an array of ```designation```. The display is equivalent to a special designation with an implied ```designation.use``` of "primary code" and a language equal to the [Resource Language](resource.html#language).
 */
export declare class CodeSystemConceptDesignation extends fhir.BackboneElement implements ICodeSystemConceptDesignation {
    /**
     * In the absence of a language, the resource language applies.
     */
    language?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.concept.designation.language
     */
    _language?: fhir.FhirElement | undefined;
    /**
     * If no use is provided, the designation can be assumed to be suitable for general display to a human user.
     */
    use?: fhir.Coding | undefined;
    /**
     * The text value for this designation.
     */
    value: string | null;
    /**
     * Extended properties for primitive element: CodeSystem.concept.designation.value
     */
    _value?: fhir.FhirElement | undefined;
    /**
     * Default constructor for CodeSystemConceptDesignation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ICodeSystemConceptDesignation>);
    /**
     * Preferred-bound Value Set for language
     */
    static languagePreferredValueSet(): LanguagesValueSetType;
    /**
     * Extensible-bound Value Set for use
     */
    static useExtensibleValueSet(): DesignationUseValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A property value for this concept.
 */
export declare class CodeSystemConceptProperty extends fhir.BackboneElement implements ICodeSystemConceptProperty {
    /**
     * A code that is a reference to CodeSystem.property.code.
     */
    code: string | null;
    /**
     * Extended properties for primitive element: CodeSystem.concept.property.code
     */
    _code?: fhir.FhirElement | undefined;
    /**
     * The value of this property.
     */
    valueCode?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.concept.property.value[x]
     */
    _valueCode?: fhir.FhirElement | undefined;
    /**
     * The value of this property.
     */
    valueCoding?: fhir.Coding | undefined;
    /**
     * The value of this property.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.concept.property.value[x]
     */
    _valueString?: fhir.FhirElement | undefined;
    /**
     * The value of this property.
     */
    valueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.concept.property.value[x]
     */
    _valueInteger?: fhir.FhirElement | undefined;
    /**
     * The value of this property.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.concept.property.value[x]
     */
    _valueBoolean?: fhir.FhirElement | undefined;
    /**
     * The value of this property.
     */
    valueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.concept.property.value[x]
     */
    _valueDateTime?: fhir.FhirElement | undefined;
    /**
     * The value of this property.
     */
    valueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.concept.property.value[x]
     */
    _valueDecimal?: fhir.FhirElement | undefined;
    /**
     * Default constructor for CodeSystemConceptProperty - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ICodeSystemConceptProperty>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * If this is empty, it means that the code system resource does not represent the content of the code system.
 */
export declare class CodeSystemConcept extends fhir.BackboneElement implements ICodeSystemConcept {
    /**
     * A code - a text symbol - that uniquely identifies the concept within the code system.
     */
    code: string | null;
    /**
     * Extended properties for primitive element: CodeSystem.concept.code
     */
    _code?: fhir.FhirElement | undefined;
    /**
     * A human readable string that is the recommended default way to present this concept to a user.
     */
    display?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.concept.display
     */
    _display?: fhir.FhirElement | undefined;
    /**
     * The formal definition of the concept. The code system resource does not make formal definitions required, because of the prevalence of legacy systems. However, they are highly recommended, as without them there is no formal meaning associated with the concept.
     */
    definition?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.concept.definition
     */
    _definition?: fhir.FhirElement | undefined;
    /**
     * Concepts have both a ```display``` and an array of ```designation```. The display is equivalent to a special designation with an implied ```designation.use``` of "primary code" and a language equal to the [Resource Language](resource.html#language).
     */
    designation?: fhir.CodeSystemConceptDesignation[] | undefined;
    /**
     * A property value for this concept.
     */
    property?: fhir.CodeSystemConceptProperty[] | undefined;
    /**
     * Defines children of a concept to produce a hierarchy of concepts. The nature of the relationships is variable (is-a/contains/categorizes) - see hierarchyMeaning.
     */
    concept?: fhir.CodeSystemConcept[] | undefined;
    /**
     * Default constructor for CodeSystemConcept - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ICodeSystemConcept>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content.
 */
export declare class CodeSystem extends fhir.DomainResource implements ICodeSystem {
    /**
     * Resource Type Name
     */
    resourceType: "CodeSystem";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.url
     */
    _url?: fhir.FhirElement | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this code system outside of FHIR, where it is not possible to use the logical URI.  Note that HL7 defines at least three identifiers for many of its code systems - the FHIR canonical URL, the OID and the V2 Table 0396 mnemonic code.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * There may be different code system instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the code system with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.version
     */
    _version?: fhir.FhirElement | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.title
     */
    _title?: fhir.FhirElement | undefined;
    /**
     * Allows filtering of code systems that are appropriate for use versus not.
     */
    status: PublicationStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: CodeSystem.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * Allows filtering of code systems that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.experimental
     */
    _experimental?: fhir.FhirElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the code system. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.date
     */
    _date?: fhir.FhirElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the code system is the organization or individual primarily responsible for the maintenance and upkeep of the code system. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the code system. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.publisher
     */
    _publisher?: fhir.FhirElement | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * This description can be used to capture details such as why the code system was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the code system as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the code system is presumed to be the predominant language in the place the code system was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[] | undefined;
    /**
     * It may be possible for the code system to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[] | undefined;
    /**
     * This element does not describe the usage of the code system. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this code system.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.purpose
     */
    _purpose?: fhir.FhirElement | undefined;
    /**
     * ... Sometimes, the copyright differs between the code system and the codes that are included. The copyright statement should clearly differentiate between these when required.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.copyright
     */
    _copyright?: fhir.FhirElement | undefined;
    /**
     * If this value is missing, then it is not specified whether a code system is case sensitive or not. When the rule is not known, Postel's law should be followed: produce codes with the correct case, and accept codes in any case. This element is primarily provided to support validation software.
     */
    caseSensitive?: boolean | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.caseSensitive
     */
    _caseSensitive?: fhir.FhirElement | undefined;
    /**
     * The definition of the value set SHALL include all codes from this code system and only codes from this code system, and it SHALL be immutable.
     */
    valueSet?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.valueSet
     */
    _valueSet?: fhir.FhirElement | undefined;
    /**
     * Note that other representations might have a different hierarchy or none at all, and represent the information using properties.
     */
    hierarchyMeaning?: CodesystemHierarchyMeaningValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.hierarchyMeaning
     */
    _hierarchyMeaning?: fhir.FhirElement | undefined;
    /**
     * Note that the code system resource does not define what the compositional grammar is, only whether or not there is one.
     */
    compositional?: boolean | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.compositional
     */
    _compositional?: fhir.FhirElement | undefined;
    /**
     * Best practice is that code systems do not redefine concepts, or that if concepts are redefined, a new code system definition is created. But this is not always possible, so some code systems may be defined as 'versionNeeded'.
     * Most code systems occasionally refine the displays defined for concepts between versions. Contexts in which the concept display values are validated may require that the version be specified for some code systems irrespective of the value of this property.
     */
    versionNeeded?: boolean | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.versionNeeded
     */
    _versionNeeded?: fhir.FhirElement | undefined;
    /**
     * The extent of the content of the code system (the concepts and codes it defines) are represented in this resource instance.
     */
    content: CodesystemContentModeValueSetEnum | null;
    /**
     * Extended properties for primitive element: CodeSystem.content
     */
    _content?: fhir.FhirElement | undefined;
    /**
     * The most common use of a code system supplement is to add additional language support.
     */
    supplements?: string | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.supplements
     */
    _supplements?: fhir.FhirElement | undefined;
    /**
     * The count of concepts defined in this resource cannot be more than this value but may be less for several reasons - see the content element.
     */
    count?: number | undefined;
    /**
     * Extended properties for primitive element: CodeSystem.count
     */
    _count?: fhir.FhirElement | undefined;
    /**
     * Note that filters defined in code systems usually require custom code on the part of any terminology engine that will make them available for use in value set filters. For this reason, they are generally only seen in high value published terminologies.
     */
    filter?: fhir.CodeSystemFilter[] | undefined;
    /**
     * A property defines an additional slot through which additional information can be provided about a concept.
     */
    property?: fhir.CodeSystemProperty[] | undefined;
    /**
     * If this is empty, it means that the code system resource does not represent the content of the code system.
     */
    concept?: fhir.CodeSystemConcept[] | undefined;
    /**
     * Default constructor for CodeSystem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ICodeSystem>);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): PublicationStatusValueSetType;
    /**
     * Required-bound Value Set for hierarchyMeaning
     */
    static hierarchyMeaningRequiredValueSet(): CodesystemHierarchyMeaningValueSetType;
    /**
     * Required-bound Value Set for content
     */
    static contentRequiredValueSet(): CodesystemContentModeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=CodeSystem.d.ts.map