import * as fhirInterfaces from '../strictinterfaces';
/**
 * If there is no discriminator, the content is hard to process, so this should be avoided.
 */
export interface IElementDefinitionSlicingDiscriminator extends fhirInterfaces.IElement {
    /**
     * The only FHIRPath functions that are allowed are as(type), resolve(), and extension(url).
     */
    path: string;
    _path?: fhirInterfaces.IElement | undefined;
    /**
     * How the element value is interpreted when discrimination is evaluated.
     */
    type: ElementDefinitionSlicingDiscriminatorTypeEnum;
    _type?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the ElementDefinition.slicing.discriminator.type field
 */
export declare enum ElementDefinitionSlicingDiscriminatorTypeEnum {
    VALUE = "value",
    EXISTS = "exists",
    PATTERN = "pattern",
    TYPE = "type",
    PROFILE = "profile"
}
/**
 * The first element in the sequence, the one that carries the slicing, is the definition that applies to all the slices. This is based on the unconstrained element, but can apply any constraints as appropriate. This may include the common constraints on the children of the element.
 */
export interface IElementDefinitionSlicing extends fhirInterfaces.IElement {
    /**
     * If it's really not possible to differentiate them, the design should be re-evaluated to make the content usable.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * If there is no discriminator, the content is hard to process, so this should be avoided.
     */
    discriminator?: fhirInterfaces.IElementDefinitionSlicingDiscriminator[] | undefined;
    /**
     * Order should only be required when it is a pressing concern for presentation. Profile authors should consider making the order a feature of the rules about the narrative, not the rules about the data - requiring ordered data makes the profile much less re-usable.
     */
    ordered?: boolean | undefined;
    _ordered?: fhirInterfaces.IElement | undefined;
    /**
     * Allowing additional elements makes for a much for flexible template - it's open for use in wider contexts, but also means that the content of the resource is not closed, and applications have to decide how to handle content not described by the profile.
     */
    rules: ElementDefinitionSlicingRulesEnum;
    _rules?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the ElementDefinition.slicing.rules field
 */
export declare enum ElementDefinitionSlicingRulesEnum {
    CLOSED = "closed",
    OPEN = "open",
    OPENATEND = "openAtEnd"
}
/**
 * The base information does not carry any information that could not be determined from the path and related profiles, but making this determination requires both that the related profiles are available, and that the algorithm to determine them be available. For tooling simplicity, the base information must always be populated in element definitions in snap shots, even if it is the same.
 */
export interface IElementDefinitionBase extends fhirInterfaces.IElement {
    /**
     * This is provided to code generation, since the serialization representation in JSON differs depending on whether the base element has max &gt; 1. Also, some forms of code generation may differ.
     */
    max: string;
    _max?: fhirInterfaces.IElement | undefined;
    /**
     * This is provided for consistency with max, and may affect code generation of mandatory elements of the base resource are generated differently (some reference implementations have done this).
     */
    min: number;
    _min?: fhirInterfaces.IElement | undefined;
    /**
     * The Path that identifies the base element - this matches the ElementDefinition.path for that element. Across FHIR, there is only one base definition of any element - that is, an element definition on a [StructureDefinition](structuredefinition.html#) without a StructureDefinition.base.
     */
    path: string;
    _path?: fhirInterfaces.IElement | undefined;
}
/**
 * The Type of the element can be left blank in a differential constraint, in which case the type is inherited from the resource. Abstract types are not permitted to appear as a type when multiple types are listed.  (I.e. Abstract types cannot be part of a choice).
 */
export interface IElementDefinitionType extends fhirInterfaces.IElement {
    /**
     * See [Aggregation Rules](elementdefinition.html#aggregation) for further clarification.
     */
    aggregation?: ElementDefinitionTypeAggregationEnum[] | undefined;
    _aggregation?: fhirInterfaces.IElement[] | undefined;
    /**
     * If the element is a reference to another resource, this element contains "Reference", and the targetProfile element defines what resources can be referenced. The targetProfile may be a reference to the general definition of a resource (e.g. http://hl7.org/fhir/StructureDefinition/Patient).
     */
    code: string;
    _code?: fhirInterfaces.IElement | undefined;
    /**
     * It is possible to profile  backbone element (e.g. part of a resource), using the [profile-element](extension-elementdefinition-profile-element.html) extension.
     */
    profile?: string[] | undefined;
    _profile?: fhirInterfaces.IElement[] | undefined;
    /**
     * Used when the type is "Reference" or "canonical", and identifies a profile structure or implementation Guide that applies to the target of the reference this element refers to. If any profiles are specified, then the content must conform to at least one of them. The URL can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the target resource SHALL conform to at least one profile defined in the implementation guide.
     */
    targetProfile?: string[] | undefined;
    _targetProfile?: fhirInterfaces.IElement[] | undefined;
    /**
     * The base specification never makes a rule as to which form is allowed, but implementation guides may do this. See [Aggregation Rules](elementdefinition.html#aggregation) for further clarification.
     */
    versioning?: ElementDefinitionTypeVersioningEnum | undefined;
    _versioning?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the ElementDefinition.type.aggregation field
 */
export declare enum ElementDefinitionTypeAggregationEnum {
    CONTAINED = "contained",
    REFERENCED = "referenced",
    BUNDLED = "bundled"
}
/**
 * Code Values for the ElementDefinition.type.versioning field
 */
export declare enum ElementDefinitionTypeVersioningEnum {
    EITHER = "either",
    INDEPENDENT = "independent",
    SPECIFIC = "specific"
}
/**
 * Examples will most commonly be present for data where it's not implicitly obvious from either the data type or value set what the values might be.  (I.e. Example values for dates or quantities would generally be unnecessary.)  If the example value is fully populated, the publication tool can generate an instance automatically.
 */
export interface IElementDefinitionExample extends fhirInterfaces.IElement {
    /**
     * Describes the purpose of this example amoung the set of examples.
     */
    label: string;
    _label?: fhirInterfaces.IElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueBase64Binary?: string | undefined;
    _valueBase64Binary?: fhirInterfaces.IElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhirInterfaces.IElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCanonical?: string | undefined;
    _valueCanonical?: fhirInterfaces.IElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCode?: string | undefined;
    _valueCode?: fhirInterfaces.IElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDate?: string | undefined;
    _valueDate?: fhirInterfaces.IElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDateTime?: string | undefined;
    _valueDateTime?: fhirInterfaces.IElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDecimal?: number | undefined;
    _valueDecimal?: fhirInterfaces.IElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueId?: string | undefined;
    _valueId?: fhirInterfaces.IElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueInstant?: string | undefined;
    _valueInstant?: fhirInterfaces.IElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueInteger?: number | undefined;
    _valueInteger?: fhirInterfaces.IElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueMarkdown?: string | undefined;
    _valueMarkdown?: fhirInterfaces.IElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueOid?: string | undefined;
    _valueOid?: fhirInterfaces.IElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valuePositiveInt?: number | undefined;
    _valuePositiveInt?: fhirInterfaces.IElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueString?: string | undefined;
    _valueString?: fhirInterfaces.IElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueTime?: string | undefined;
    _valueTime?: fhirInterfaces.IElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueUnsignedInt?: number | undefined;
    _valueUnsignedInt?: fhirInterfaces.IElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueUri?: string | undefined;
    _valueUri?: fhirInterfaces.IElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueUrl?: string | undefined;
    _valueUrl?: fhirInterfaces.IElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueUuid?: string | undefined;
    _valueUuid?: fhirInterfaces.IElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueAddress?: fhirInterfaces.IAddress | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueAge?: fhirInterfaces.IAge | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueAnnotation?: fhirInterfaces.IAnnotation | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueAttachment?: fhirInterfaces.IAttachment | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCoding?: fhirInterfaces.ICoding | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueContactPoint?: fhirInterfaces.IContactPoint | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCount?: fhirInterfaces.ICount | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDistance?: fhirInterfaces.IDistance | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDuration?: fhirInterfaces.IDuration | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueHumanName?: fhirInterfaces.IHumanName | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueIdentifier?: fhirInterfaces.IIdentifier | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueMoney?: fhirInterfaces.IMoney | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valuePeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueQuantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueRange?: fhirInterfaces.IRange | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueRatio?: fhirInterfaces.IRatio | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueReference?: fhirInterfaces.IReference | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueSampledData?: fhirInterfaces.ISampledData | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueSignature?: fhirInterfaces.ISignature | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueTiming?: fhirInterfaces.ITiming | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueContactDetail?: fhirInterfaces.IContactDetail | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueContributor?: fhirInterfaces.IContributor | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDataRequirement?: fhirInterfaces.IDataRequirement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueExpression?: fhirInterfaces.IExpression | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueParameterDefinition?: fhirInterfaces.IParameterDefinition | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueRelatedArtifact?: fhirInterfaces.IRelatedArtifact | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueTriggerDefinition?: fhirInterfaces.ITriggerDefinition | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueUsageContext?: fhirInterfaces.IUsageContext | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDosage?: fhirInterfaces.IDosage | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueMeta?: fhirInterfaces.IMeta | undefined;
}
/**
 * Constraints should be declared on the "context" element - the lowest element in the hierarchy that is common to all nodes referenced by the constraint.
 */
export interface IElementDefinitionConstraint extends fhirInterfaces.IElement {
    /**
     * In the absense of an expression, the expression is likely not enforceable by validators, and might be missed by many systems.
     */
    expression?: string | undefined;
    _expression?: fhirInterfaces.IElement | undefined;
    /**
     * Should be expressed in business terms as much as possible.
     */
    human: string;
    _human?: fhirInterfaces.IElement | undefined;
    /**
     * Allows identification of which elements have their cardinalities impacted by the constraint.  Will not be referenced for constraints that do not affect cardinality.
     */
    key: string;
    _key?: fhirInterfaces.IElement | undefined;
    /**
     * To be used if the reason for the constraint might not be intuitive to all implementers.
     */
    requirements?: string | undefined;
    _requirements?: fhirInterfaces.IElement | undefined;
    /**
     * This allows constraints to be asserted as "shall" (error) and "should" (warning).
     */
    severity: ElementDefinitionConstraintSeverityEnum;
    _severity?: fhirInterfaces.IElement | undefined;
    /**
     * This is used when, e.g. rendering, where it is not useful to present inherited constraints when rendering the snapshot.
     */
    source?: string | undefined;
    _source?: fhirInterfaces.IElement | undefined;
    /**
     * Elements SHALL use "f" as the namespace prefix for the FHIR namespace, and "x" for the xhtml namespace, and SHALL NOT use any other prefixes.     Note: XPath is generally considered not useful because it does not apply to JSON and other formats and because of XSLT implementation issues, and may be removed in the future.
     */
    xpath?: string | undefined;
    _xpath?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the ElementDefinition.constraint.severity field
 */
export declare enum ElementDefinitionConstraintSeverityEnum {
    ERROR = "error",
    WARNING = "warning"
}
/**
 * For a CodeableConcept, when no codes are allowed - only text, use a binding of strength "required" with a description explaining that no coded values are allowed and what sort of information to put in the "text" element.
 */
export interface IElementDefinitionBinding extends fhirInterfaces.IElement {
    /**
     * Describes the intended use of this particular set of codes.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * For further discussion, see [Using Terminologies](terminologies.html).
     */
    strength: ElementDefinitionBindingStrengthEnum;
    _strength?: fhirInterfaces.IElement | undefined;
    /**
     * The reference may be version-specific or not (e.g. have a |[version] at the end of the canonical URL).
     */
    valueSet?: string | undefined;
    _valueSet?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the ElementDefinition.binding.strength field
 */
export declare enum ElementDefinitionBindingStrengthEnum {
    REQUIRED = "required",
    EXTENSIBLE = "extensible",
    PREFERRED = "preferred",
    EXAMPLE = "example"
}
/**
 * Mappings are not necessarily specific enough for safe translation.
 */
export interface IElementDefinitionMapping extends fhirInterfaces.IElement {
    /**
     * Comments that provide information about the mapping or its use.
     */
    comment?: string | undefined;
    _comment?: fhirInterfaces.IElement | undefined;
    /**
     * An internal reference to the definition of a mapping.
     */
    identity: string;
    _identity?: fhirInterfaces.IElement | undefined;
    /**
     * If omitted, then there can be no expectation of computational interpretation of the mapping.
     */
    language?: string | undefined;
    _language?: fhirInterfaces.IElement | undefined;
    /**
     * For most mappings, the syntax is undefined.  Syntax will be provided for mappings to the RIM.  Multiple mappings may be possible and may include constraints on other resource elements that identify when a particular mapping applies.
     */
    map: string;
    _map?: fhirInterfaces.IElement | undefined;
}
/**
 * Captures constraints on each element within the resource, profile, or extension.
 */
export interface IElementDefinition extends fhirInterfaces.IBackboneElement {
    /**
     * Identifies additional names by which this element might also be known.
     */
    alias?: string[] | undefined;
    _alias?: fhirInterfaces.IElement[] | undefined;
    /**
     * The base information does not carry any information that could not be determined from the path and related profiles, but making this determination requires both that the related profiles are available, and that the algorithm to determine them be available. For tooling simplicity, the base information must always be populated in element definitions in snap shots, even if it is the same.
     */
    base?: fhirInterfaces.IElementDefinitionBase | undefined;
    /**
     * For a CodeableConcept, when no codes are allowed - only text, use a binding of strength "required" with a description explaining that no coded values are allowed and what sort of information to put in the "text" element.
     */
    binding?: fhirInterfaces.IElementDefinitionBinding | undefined;
    /**
     * The concept SHALL be properly aligned with the data element definition and other constraints, as defined in the code system, including relationships, of any code listed here.  Where multiple codes exist in a terminology that could correspond to the data element, the most granular code(s) should be selected, so long as they are not more restrictive than the data element itself. The mappings may be used to provide more or less granular or structured equivalences in the code system.
     */
    code?: fhirInterfaces.ICoding[] | undefined;
    /**
     * If it is possible to capture usage rules using constraints, that mechanism should be used in preference to this element.
     */
    comment?: string | undefined;
    _comment?: fhirInterfaces.IElement | undefined;
    /**
     * A reference to an invariant that may make additional statements about the cardinality or value in the instance.
     */
    condition?: string[] | undefined;
    _condition?: fhirInterfaces.IElement[] | undefined;
    /**
     * Constraints should be declared on the "context" element - the lowest element in the hierarchy that is common to all nodes referenced by the constraint.
     */
    constraint?: fhirInterfaces.IElementDefinitionConstraint[] | undefined;
    /**
     * ContentReferences can only be defined in specializations, not constrained types, and they cannot be changed and always reference the non-constrained definition.
     */
    contentReference?: string | undefined;
    _contentReference?: fhirInterfaces.IElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueBase64Binary?: string | undefined;
    _defaultValueBase64Binary?: fhirInterfaces.IElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueBoolean?: boolean | undefined;
    _defaultValueBoolean?: fhirInterfaces.IElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueCanonical?: string | undefined;
    _defaultValueCanonical?: fhirInterfaces.IElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueCode?: string | undefined;
    _defaultValueCode?: fhirInterfaces.IElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueDate?: string | undefined;
    _defaultValueDate?: fhirInterfaces.IElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueDateTime?: string | undefined;
    _defaultValueDateTime?: fhirInterfaces.IElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueDecimal?: number | undefined;
    _defaultValueDecimal?: fhirInterfaces.IElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueId?: string | undefined;
    _defaultValueId?: fhirInterfaces.IElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueInstant?: string | undefined;
    _defaultValueInstant?: fhirInterfaces.IElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueInteger?: number | undefined;
    _defaultValueInteger?: fhirInterfaces.IElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueMarkdown?: string | undefined;
    _defaultValueMarkdown?: fhirInterfaces.IElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueOid?: string | undefined;
    _defaultValueOid?: fhirInterfaces.IElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValuePositiveInt?: number | undefined;
    _defaultValuePositiveInt?: fhirInterfaces.IElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueString?: string | undefined;
    _defaultValueString?: fhirInterfaces.IElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueTime?: string | undefined;
    _defaultValueTime?: fhirInterfaces.IElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueUnsignedInt?: number | undefined;
    _defaultValueUnsignedInt?: fhirInterfaces.IElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueUri?: string | undefined;
    _defaultValueUri?: fhirInterfaces.IElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueUrl?: string | undefined;
    _defaultValueUrl?: fhirInterfaces.IElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueUuid?: string | undefined;
    _defaultValueUuid?: fhirInterfaces.IElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueAddress?: fhirInterfaces.IAddress | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueAge?: fhirInterfaces.IAge | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueAnnotation?: fhirInterfaces.IAnnotation | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueAttachment?: fhirInterfaces.IAttachment | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueCoding?: fhirInterfaces.ICoding | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueContactPoint?: fhirInterfaces.IContactPoint | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueCount?: fhirInterfaces.ICount | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueDistance?: fhirInterfaces.IDistance | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueDuration?: fhirInterfaces.IDuration | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueHumanName?: fhirInterfaces.IHumanName | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueIdentifier?: fhirInterfaces.IIdentifier | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueMoney?: fhirInterfaces.IMoney | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValuePeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueQuantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueRange?: fhirInterfaces.IRange | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueRatio?: fhirInterfaces.IRatio | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueReference?: fhirInterfaces.IReference | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueSampledData?: fhirInterfaces.ISampledData | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueSignature?: fhirInterfaces.ISignature | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueTiming?: fhirInterfaces.ITiming | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueContactDetail?: fhirInterfaces.IContactDetail | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueContributor?: fhirInterfaces.IContributor | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueDataRequirement?: fhirInterfaces.IDataRequirement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueExpression?: fhirInterfaces.IExpression | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueParameterDefinition?: fhirInterfaces.IParameterDefinition | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueRelatedArtifact?: fhirInterfaces.IRelatedArtifact | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueTriggerDefinition?: fhirInterfaces.ITriggerDefinition | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueUsageContext?: fhirInterfaces.IUsageContext | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueDosage?: fhirInterfaces.IDosage | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueMeta?: fhirInterfaces.IMeta | undefined;
    /**
     * It is easy for a different definition to change the meaning of an element and this can have nasty downstream consequences. Please be careful when providing definitions in a profile.
     */
    definition?: string | undefined;
    _definition?: fhirInterfaces.IElement | undefined;
    /**
     * Examples will most commonly be present for data where it's not implicitly obvious from either the data type or value set what the values might be.  (I.e. Example values for dates or quantities would generally be unnecessary.)  If the example value is fully populated, the publication tool can generate an instance automatically.
     */
    example?: fhirInterfaces.IElementDefinitionExample[] | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedBase64Binary?: string | undefined;
    _fixedBase64Binary?: fhirInterfaces.IElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedBoolean?: boolean | undefined;
    _fixedBoolean?: fhirInterfaces.IElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedCanonical?: string | undefined;
    _fixedCanonical?: fhirInterfaces.IElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedCode?: string | undefined;
    _fixedCode?: fhirInterfaces.IElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedDate?: string | undefined;
    _fixedDate?: fhirInterfaces.IElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedDateTime?: string | undefined;
    _fixedDateTime?: fhirInterfaces.IElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedDecimal?: number | undefined;
    _fixedDecimal?: fhirInterfaces.IElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedId?: string | undefined;
    _fixedId?: fhirInterfaces.IElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedInstant?: string | undefined;
    _fixedInstant?: fhirInterfaces.IElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedInteger?: number | undefined;
    _fixedInteger?: fhirInterfaces.IElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedMarkdown?: string | undefined;
    _fixedMarkdown?: fhirInterfaces.IElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedOid?: string | undefined;
    _fixedOid?: fhirInterfaces.IElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedPositiveInt?: number | undefined;
    _fixedPositiveInt?: fhirInterfaces.IElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedString?: string | undefined;
    _fixedString?: fhirInterfaces.IElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedTime?: string | undefined;
    _fixedTime?: fhirInterfaces.IElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedUnsignedInt?: number | undefined;
    _fixedUnsignedInt?: fhirInterfaces.IElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedUri?: string | undefined;
    _fixedUri?: fhirInterfaces.IElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedUrl?: string | undefined;
    _fixedUrl?: fhirInterfaces.IElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedUuid?: string | undefined;
    _fixedUuid?: fhirInterfaces.IElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedAddress?: fhirInterfaces.IAddress | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedAge?: fhirInterfaces.IAge | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedAnnotation?: fhirInterfaces.IAnnotation | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedAttachment?: fhirInterfaces.IAttachment | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedCoding?: fhirInterfaces.ICoding | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedContactPoint?: fhirInterfaces.IContactPoint | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedCount?: fhirInterfaces.ICount | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedDistance?: fhirInterfaces.IDistance | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedDuration?: fhirInterfaces.IDuration | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedHumanName?: fhirInterfaces.IHumanName | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedIdentifier?: fhirInterfaces.IIdentifier | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedMoney?: fhirInterfaces.IMoney | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedPeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedQuantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedRange?: fhirInterfaces.IRange | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedRatio?: fhirInterfaces.IRatio | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedReference?: fhirInterfaces.IReference | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedSampledData?: fhirInterfaces.ISampledData | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedSignature?: fhirInterfaces.ISignature | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedTiming?: fhirInterfaces.ITiming | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedContactDetail?: fhirInterfaces.IContactDetail | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedContributor?: fhirInterfaces.IContributor | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedDataRequirement?: fhirInterfaces.IDataRequirement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedExpression?: fhirInterfaces.IExpression | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedParameterDefinition?: fhirInterfaces.IParameterDefinition | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedRelatedArtifact?: fhirInterfaces.IRelatedArtifact | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedTriggerDefinition?: fhirInterfaces.ITriggerDefinition | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedUsageContext?: fhirInterfaces.IUsageContext | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedDosage?: fhirInterfaces.IDosage | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedMeta?: fhirInterfaces.IMeta | undefined;
    /**
     * Only the definition of an element can set IsModifier true - either the specification itself or where an extension is originally defined. Once set, it cannot be changed in derived profiles. An element/extension that has isModifier=true SHOULD also have a minimum cardinality of 1, so that there is no lack of clarity about what to do if it is missing. If it can be missing, the definition SHALL make the meaning of a missing element clear.
     */
    isModifier?: boolean | undefined;
    _isModifier?: fhirInterfaces.IElement | undefined;
    /**
     * Explains how that element affects the interpretation of the resource or element that contains it.
     */
    isModifierReason?: string | undefined;
    _isModifierReason?: fhirInterfaces.IElement | undefined;
    /**
     * Some resources include a set of simple metadata, and some very large data. This element is used to reduce the quantity of data returned in searches. Note that servers may pre-cache summarized resources for optimal performance, so servers might not support per-profile use of the isSummary flag. When a request is made with _summary=true, serailisers only include elements marked as 'isSummary = true'. Other than Attachment.data, all data type properties are included in the summary form. In resource and data type definitions, if an element is at the root or has a parent that is 'mustSupport' and the minimum cardinality is 1 or the element is a modifier, it must be marked as isSummary=true.
     */
    isSummary?: boolean | undefined;
    _isSummary?: fhirInterfaces.IElement | undefined;
    /**
     * See also the extension (http://hl7.org/fhir/StructureDefinition/elementdefinition-question)[extension-elementdefinition-question.html].
     */
    label?: string | undefined;
    _label?: fhirInterfaces.IElement | undefined;
    /**
     * Mappings are not necessarily specific enough for safe translation.
     */
    mapping?: fhirInterfaces.IElementDefinitionMapping[] | undefined;
    /**
     * The maximum number of times this element is permitted to appear in the instance.
     */
    max?: string | undefined;
    _max?: fhirInterfaces.IElement | undefined;
    /**
     * Receivers are not required to reject instances that exceed the maximum length.  The full length could be stored.  In some cases, data might be truncated, though truncation should be undertaken with care and an understanding of the consequences of doing so. If not specified, there is no conformance expectation for length support.
     */
    maxLength?: number | undefined;
    _maxLength?: fhirInterfaces.IElement | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueDate?: string | undefined;
    _maxValueDate?: fhirInterfaces.IElement | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueDateTime?: string | undefined;
    _maxValueDateTime?: fhirInterfaces.IElement | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueInstant?: string | undefined;
    _maxValueInstant?: fhirInterfaces.IElement | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueTime?: string | undefined;
    _maxValueTime?: fhirInterfaces.IElement | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueDecimal?: number | undefined;
    _maxValueDecimal?: fhirInterfaces.IElement | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueInteger?: number | undefined;
    _maxValueInteger?: fhirInterfaces.IElement | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValuePositiveInt?: number | undefined;
    _maxValuePositiveInt?: fhirInterfaces.IElement | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueUnsignedInt?: number | undefined;
    _maxValueUnsignedInt?: fhirInterfaces.IElement | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueQuantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * Implicit meanings for missing values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. An implicit meaning for a missing value can never be changed, and specifying one has the consequence that constraining its use in profiles eliminates use cases as possibilities, not merely moving them out of scope.
     */
    meaningWhenMissing?: string | undefined;
    _meaningWhenMissing?: fhirInterfaces.IElement | undefined;
    /**
     * The minimum number of times this element SHALL appear in the instance.
     */
    min?: number | undefined;
    _min?: fhirInterfaces.IElement | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueDate?: string | undefined;
    _minValueDate?: fhirInterfaces.IElement | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueDateTime?: string | undefined;
    _minValueDateTime?: fhirInterfaces.IElement | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueInstant?: string | undefined;
    _minValueInstant?: fhirInterfaces.IElement | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueTime?: string | undefined;
    _minValueTime?: fhirInterfaces.IElement | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueDecimal?: number | undefined;
    _minValueDecimal?: fhirInterfaces.IElement | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueInteger?: number | undefined;
    _minValueInteger?: fhirInterfaces.IElement | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValuePositiveInt?: number | undefined;
    _minValuePositiveInt?: fhirInterfaces.IElement | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueUnsignedInt?: number | undefined;
    _minValueUnsignedInt?: fhirInterfaces.IElement | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueQuantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * "Something useful" is context dependent and impossible to describe in the base FHIR specification. For this reason, tue mustSupport flag is never set to true by the FHIR specification itself - it is only set to true in profiles.  A profile on a type can always make musSupport = true if it is false in the base type but cannot make mustSupport = false if it is true in the base type.   This is done in [Resource Profiles](profiling.html#mustsupport), where the profile labels an element as mustSupport=true. When a profile does this, it SHALL also make clear exactly what kind of "support" is required, as this can mean many things.    Note that an element that has the property IsModifier is not necessarily a "key" element (e.g. one of the important elements to make use of the resource), nor is it automatically mustSupport - however both of these things are more likely to be true for IsModifier elements than for other elements.
     */
    mustSupport?: boolean | undefined;
    _mustSupport?: fhirInterfaces.IElement | undefined;
    /**
     * This element can only be asserted on repeating elements and can only be introduced when defining resources or data types.  It can be further refined profiled elements but if absent in the base type, a profile cannot assert meaning.
     */
    orderMeaning?: string | undefined;
    _orderMeaning?: fhirInterfaces.IElement | undefined;
    /**
     * The path identifies the element and is expressed as a "."-separated list of ancestor elements, beginning with the name of the resource or extension.
     */
    path: string;
    _path?: fhirInterfaces.IElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternBase64Binary?: string | undefined;
    _patternBase64Binary?: fhirInterfaces.IElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternBoolean?: boolean | undefined;
    _patternBoolean?: fhirInterfaces.IElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternCanonical?: string | undefined;
    _patternCanonical?: fhirInterfaces.IElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternCode?: string | undefined;
    _patternCode?: fhirInterfaces.IElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternDate?: string | undefined;
    _patternDate?: fhirInterfaces.IElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternDateTime?: string | undefined;
    _patternDateTime?: fhirInterfaces.IElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternDecimal?: number | undefined;
    _patternDecimal?: fhirInterfaces.IElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternId?: string | undefined;
    _patternId?: fhirInterfaces.IElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternInstant?: string | undefined;
    _patternInstant?: fhirInterfaces.IElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternInteger?: number | undefined;
    _patternInteger?: fhirInterfaces.IElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternMarkdown?: string | undefined;
    _patternMarkdown?: fhirInterfaces.IElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternOid?: string | undefined;
    _patternOid?: fhirInterfaces.IElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternPositiveInt?: number | undefined;
    _patternPositiveInt?: fhirInterfaces.IElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternString?: string | undefined;
    _patternString?: fhirInterfaces.IElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternTime?: string | undefined;
    _patternTime?: fhirInterfaces.IElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternUnsignedInt?: number | undefined;
    _patternUnsignedInt?: fhirInterfaces.IElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternUri?: string | undefined;
    _patternUri?: fhirInterfaces.IElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternUrl?: string | undefined;
    _patternUrl?: fhirInterfaces.IElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternUuid?: string | undefined;
    _patternUuid?: fhirInterfaces.IElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternAddress?: fhirInterfaces.IAddress | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternAge?: fhirInterfaces.IAge | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternAnnotation?: fhirInterfaces.IAnnotation | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternAttachment?: fhirInterfaces.IAttachment | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternCoding?: fhirInterfaces.ICoding | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternContactPoint?: fhirInterfaces.IContactPoint | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternCount?: fhirInterfaces.ICount | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternDistance?: fhirInterfaces.IDistance | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternDuration?: fhirInterfaces.IDuration | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternHumanName?: fhirInterfaces.IHumanName | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternIdentifier?: fhirInterfaces.IIdentifier | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternMoney?: fhirInterfaces.IMoney | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternPeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternQuantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternRange?: fhirInterfaces.IRange | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternRatio?: fhirInterfaces.IRatio | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternReference?: fhirInterfaces.IReference | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternSampledData?: fhirInterfaces.ISampledData | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternSignature?: fhirInterfaces.ISignature | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternTiming?: fhirInterfaces.ITiming | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternContactDetail?: fhirInterfaces.IContactDetail | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternContributor?: fhirInterfaces.IContributor | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternDataRequirement?: fhirInterfaces.IDataRequirement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternExpression?: fhirInterfaces.IExpression | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternParameterDefinition?: fhirInterfaces.IParameterDefinition | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternRelatedArtifact?: fhirInterfaces.IRelatedArtifact | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternTriggerDefinition?: fhirInterfaces.ITriggerDefinition | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternUsageContext?: fhirInterfaces.IUsageContext | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternDosage?: fhirInterfaces.IDosage | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternMeta?: fhirInterfaces.IMeta | undefined;
    /**
     * In resources, this is rarely used except for special cases where the representation deviates from the normal, and can only be done in the base standard (and profiles must reproduce what the base standard does). This element is used quite commonly in Logical models when the logical models represent a specific serialization format (e.g. CDA, v2 etc.).
     */
    representation?: ElementDefinitionRepresentationEnum[] | undefined;
    _representation?: fhirInterfaces.IElement[] | undefined;
    /**
     * This element does not describe the usage of the element (that's done in comments), rather it's for traceability of *why* the element is either needed or why the constraints exist as they do.  This may be used to point to source materials or specifications that drove the structure of this data element.
     */
    requirements?: string | undefined;
    _requirements?: fhirInterfaces.IElement | undefined;
    /**
     * It is easy for a different short definition to change the meaning of an element and this can have nasty downstream consequences. Please be careful when providing short definitions in a profile.
     */
    short?: string | undefined;
    _short?: fhirInterfaces.IElement | undefined;
    /**
     * If set to true, an ancestor profile SHALL have a slicing definition with this name.  If set to false, no ancestor profile is permitted to have a slicing definition with this name.
     */
    sliceIsConstraining?: boolean | undefined;
    _sliceIsConstraining?: fhirInterfaces.IElement | undefined;
    /**
     * The name SHALL be unique within the structure within the context of the constrained resource element.  (Though to avoid confusion, uniqueness across all elements is recommended.).
     */
    sliceName?: string | undefined;
    _sliceName?: fhirInterfaces.IElement | undefined;
    /**
     * The first element in the sequence, the one that carries the slicing, is the definition that applies to all the slices. This is based on the unconstrained element, but can apply any constraints as appropriate. This may include the common constraints on the children of the element.
     */
    slicing?: fhirInterfaces.IElementDefinitionSlicing | undefined;
    /**
     * The Type of the element can be left blank in a differential constraint, in which case the type is inherited from the resource. Abstract types are not permitted to appear as a type when multiple types are listed.  (I.e. Abstract types cannot be part of a choice).
     */
    type?: fhirInterfaces.IElementDefinitionType[] | undefined;
}
/**
 * Code Values for the ElementDefinition.representation field
 */
export declare enum ElementDefinitionRepresentationEnum {
    XMLATTR = "xmlAttr",
    XMLTEXT = "xmlText",
    TYPEATTR = "typeAttr",
    CDATEXT = "cdaText",
    XHTML = "xhtml"
}
//# sourceMappingURL=IElementDefinition.d.ts.map