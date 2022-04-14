import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * If there is no discriminator, the content is hard to process, so this should be avoided.
 */
export declare class ElementDefinitionSlicingDiscriminator extends fhirModels.Element implements fhirInterfaces.IElementDefinitionSlicingDiscriminator {
    /**
     * The only FHIRPath functions that are allowed are as(type), resolve(), and extension(url).
     */
    path: string;
    _path?: fhirModels.Element | undefined;
    /**
     * How the element value is interpreted when discrimination is evaluated.
     */
    type: ElementDefinitionSlicingDiscriminatorTypeEnum;
    _type?: fhirModels.Element | undefined;
    /**
     * Default constructor for ElementDefinitionSlicingDiscriminator from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IElementDefinitionSlicingDiscriminator);
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
export declare class ElementDefinitionSlicing extends fhirModels.Element implements fhirInterfaces.IElementDefinitionSlicing {
    /**
     * If it's really not possible to differentiate them, the design should be re-evaluated to make the content usable.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * If there is no discriminator, the content is hard to process, so this should be avoided.
     */
    discriminator?: fhirModels.ElementDefinitionSlicingDiscriminator[] | undefined;
    /**
     * Order should only be required when it is a pressing concern for presentation. Profile authors should consider making the order a feature of the rules about the narrative, not the rules about the data - requiring ordered data makes the profile much less re-usable.
     */
    ordered?: boolean | undefined;
    _ordered?: fhirModels.Element | undefined;
    /**
     * Allowing additional elements makes for a much for flexible template - it's open for use in wider contexts, but also means that the content of the resource is not closed, and applications have to decide how to handle content not described by the profile.
     */
    rules: ElementDefinitionSlicingRulesEnum;
    _rules?: fhirModels.Element | undefined;
    /**
     * Default constructor for ElementDefinitionSlicing from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IElementDefinitionSlicing);
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
export declare class ElementDefinitionBase extends fhirModels.Element implements fhirInterfaces.IElementDefinitionBase {
    /**
     * This is provided to code generation, since the serialization representation in JSON differs depending on whether the base element has max &gt; 1. Also, some forms of code generation may differ.
     */
    max: string;
    _max?: fhirModels.Element | undefined;
    /**
     * This is provided for consistency with max, and may affect code generation of mandatory elements of the base resource are generated differently (some reference implementations have done this).
     */
    min: number;
    _min?: fhirModels.Element | undefined;
    /**
     * The Path that identifies the base element - this matches the ElementDefinition.path for that element. Across FHIR, there is only one base definition of any element - that is, an element definition on a [StructureDefinition](structuredefinition.html#) without a StructureDefinition.base.
     */
    path: string;
    _path?: fhirModels.Element | undefined;
    /**
     * Default constructor for ElementDefinitionBase from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IElementDefinitionBase);
}
/**
 * The Type of the element can be left blank in a differential constraint, in which case the type is inherited from the resource. Abstract types are not permitted to appear as a type when multiple types are listed.  (I.e. Abstract types cannot be part of a choice).
 */
export declare class ElementDefinitionType extends fhirModels.Element implements fhirInterfaces.IElementDefinitionType {
    /**
     * See [Aggregation Rules](elementdefinition.html#aggregation) for further clarification.
     */
    aggregation?: ElementDefinitionTypeAggregationEnum[] | undefined;
    _aggregation?: fhirModels.Element[] | undefined;
    /**
     * If the element is a reference to another resource, this element contains "Reference", and the targetProfile element defines what resources can be referenced. The targetProfile may be a reference to the general definition of a resource (e.g. http://hl7.org/fhir/StructureDefinition/Patient).
     */
    code: string;
    _code?: fhirModels.Element | undefined;
    /**
     * It is possible to profile  backbone element (e.g. part of a resource), using the [profile-element](extension-elementdefinition-profile-element.html) extension.
     */
    profile?: string[] | undefined;
    _profile?: fhirModels.Element[] | undefined;
    /**
     * Used when the type is "Reference" or "canonical", and identifies a profile structure or implementation Guide that applies to the target of the reference this element refers to. If any profiles are specified, then the content must conform to at least one of them. The URL can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the target resource SHALL conform to at least one profile defined in the implementation guide.
     */
    targetProfile?: string[] | undefined;
    _targetProfile?: fhirModels.Element[] | undefined;
    /**
     * The base specification never makes a rule as to which form is allowed, but implementation guides may do this. See [Aggregation Rules](elementdefinition.html#aggregation) for further clarification.
     */
    versioning?: ElementDefinitionTypeVersioningEnum | undefined;
    _versioning?: fhirModels.Element | undefined;
    /**
     * Default constructor for ElementDefinitionType from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IElementDefinitionType);
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
export declare class ElementDefinitionExample extends fhirModels.Element implements fhirInterfaces.IElementDefinitionExample {
    /**
     * Describes the purpose of this example amoung the set of examples.
     */
    label: string;
    _label?: fhirModels.Element | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueBase64Binary?: string | undefined;
    _valueBase64Binary?: fhirModels.Element | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhirModels.Element | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCanonical?: string | undefined;
    _valueCanonical?: fhirModels.Element | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCode?: string | undefined;
    _valueCode?: fhirModels.Element | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDate?: string | undefined;
    _valueDate?: fhirModels.Element | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDateTime?: string | undefined;
    _valueDateTime?: fhirModels.Element | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDecimal?: number | undefined;
    _valueDecimal?: fhirModels.Element | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueId?: string | undefined;
    _valueId?: fhirModels.Element | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueInstant?: string | undefined;
    _valueInstant?: fhirModels.Element | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueInteger?: number | undefined;
    _valueInteger?: fhirModels.Element | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueMarkdown?: string | undefined;
    _valueMarkdown?: fhirModels.Element | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueOid?: string | undefined;
    _valueOid?: fhirModels.Element | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valuePositiveInt?: number | undefined;
    _valuePositiveInt?: fhirModels.Element | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueString?: string | undefined;
    _valueString?: fhirModels.Element | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueTime?: string | undefined;
    _valueTime?: fhirModels.Element | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueUnsignedInt?: number | undefined;
    _valueUnsignedInt?: fhirModels.Element | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueUri?: string | undefined;
    _valueUri?: fhirModels.Element | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueUrl?: string | undefined;
    _valueUrl?: fhirModels.Element | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueUuid?: string | undefined;
    _valueUuid?: fhirModels.Element | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueAddress?: fhirModels.Address | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueAge?: fhirModels.Age | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueAnnotation?: fhirModels.Annotation | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueAttachment?: fhirModels.Attachment | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCoding?: fhirModels.Coding | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueContactPoint?: fhirModels.ContactPoint | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCount?: fhirModels.Count | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDistance?: fhirModels.Distance | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDuration?: fhirModels.Duration | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueHumanName?: fhirModels.HumanName | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueIdentifier?: fhirModels.Identifier | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueMoney?: fhirModels.Money | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valuePeriod?: fhirModels.Period | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueQuantity?: fhirModels.Quantity | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueRange?: fhirModels.Range | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueRatio?: fhirModels.Ratio | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueReference?: fhirModels.Reference | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueSampledData?: fhirModels.SampledData | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueSignature?: fhirModels.Signature | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueTiming?: fhirModels.Timing | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueContactDetail?: fhirModels.ContactDetail | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueContributor?: fhirModels.Contributor | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDataRequirement?: fhirModels.DataRequirement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueExpression?: fhirModels.Expression | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueParameterDefinition?: fhirModels.ParameterDefinition | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueRelatedArtifact?: fhirModels.RelatedArtifact | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueTriggerDefinition?: fhirModels.TriggerDefinition | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueUsageContext?: fhirModels.UsageContext | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDosage?: fhirModels.Dosage | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueMeta?: fhirModels.Meta | undefined;
    /**
     * Default constructor for ElementDefinitionExample from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IElementDefinitionExample);
}
/**
 * Constraints should be declared on the "context" element - the lowest element in the hierarchy that is common to all nodes referenced by the constraint.
 */
export declare class ElementDefinitionConstraint extends fhirModels.Element implements fhirInterfaces.IElementDefinitionConstraint {
    /**
     * In the absense of an expression, the expression is likely not enforceable by validators, and might be missed by many systems.
     */
    expression?: string | undefined;
    _expression?: fhirModels.Element | undefined;
    /**
     * Should be expressed in business terms as much as possible.
     */
    human: string;
    _human?: fhirModels.Element | undefined;
    /**
     * Allows identification of which elements have their cardinalities impacted by the constraint.  Will not be referenced for constraints that do not affect cardinality.
     */
    key: string;
    _key?: fhirModels.Element | undefined;
    /**
     * To be used if the reason for the constraint might not be intuitive to all implementers.
     */
    requirements?: string | undefined;
    _requirements?: fhirModels.Element | undefined;
    /**
     * This allows constraints to be asserted as "shall" (error) and "should" (warning).
     */
    severity: ElementDefinitionConstraintSeverityEnum;
    _severity?: fhirModels.Element | undefined;
    /**
     * This is used when, e.g. rendering, where it is not useful to present inherited constraints when rendering the snapshot.
     */
    source?: string | undefined;
    _source?: fhirModels.Element | undefined;
    /**
     * Elements SHALL use "f" as the namespace prefix for the FHIR namespace, and "x" for the xhtml namespace, and SHALL NOT use any other prefixes.     Note: XPath is generally considered not useful because it does not apply to JSON and other formats and because of XSLT implementation issues, and may be removed in the future.
     */
    xpath?: string | undefined;
    _xpath?: fhirModels.Element | undefined;
    /**
     * Default constructor for ElementDefinitionConstraint from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IElementDefinitionConstraint);
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
export declare class ElementDefinitionBinding extends fhirModels.Element implements fhirInterfaces.IElementDefinitionBinding {
    /**
     * Describes the intended use of this particular set of codes.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * For further discussion, see [Using Terminologies](terminologies.html).
     */
    strength: ElementDefinitionBindingStrengthEnum;
    _strength?: fhirModels.Element | undefined;
    /**
     * The reference may be version-specific or not (e.g. have a |[version] at the end of the canonical URL).
     */
    valueSet?: string | undefined;
    _valueSet?: fhirModels.Element | undefined;
    /**
     * Default constructor for ElementDefinitionBinding from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IElementDefinitionBinding);
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
export declare class ElementDefinitionMapping extends fhirModels.Element implements fhirInterfaces.IElementDefinitionMapping {
    /**
     * Comments that provide information about the mapping or its use.
     */
    comment?: string | undefined;
    _comment?: fhirModels.Element | undefined;
    /**
     * An internal reference to the definition of a mapping.
     */
    identity: string;
    _identity?: fhirModels.Element | undefined;
    /**
     * If omitted, then there can be no expectation of computational interpretation of the mapping.
     */
    language?: string | undefined;
    _language?: fhirModels.Element | undefined;
    /**
     * For most mappings, the syntax is undefined.  Syntax will be provided for mappings to the RIM.  Multiple mappings may be possible and may include constraints on other resource elements that identify when a particular mapping applies.
     */
    map: string;
    _map?: fhirModels.Element | undefined;
    /**
     * Default constructor for ElementDefinitionMapping from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IElementDefinitionMapping);
}
/**
 * Captures constraints on each element within the resource, profile, or extension.
 */
export declare class ElementDefinition extends fhirModels.BackboneElement implements fhirInterfaces.IElementDefinition {
    /**
     * Identifies additional names by which this element might also be known.
     */
    alias?: string[] | undefined;
    _alias?: fhirModels.Element[] | undefined;
    /**
     * The base information does not carry any information that could not be determined from the path and related profiles, but making this determination requires both that the related profiles are available, and that the algorithm to determine them be available. For tooling simplicity, the base information must always be populated in element definitions in snap shots, even if it is the same.
     */
    base?: fhirModels.ElementDefinitionBase | undefined;
    /**
     * For a CodeableConcept, when no codes are allowed - only text, use a binding of strength "required" with a description explaining that no coded values are allowed and what sort of information to put in the "text" element.
     */
    binding?: fhirModels.ElementDefinitionBinding | undefined;
    /**
     * The concept SHALL be properly aligned with the data element definition and other constraints, as defined in the code system, including relationships, of any code listed here.  Where multiple codes exist in a terminology that could correspond to the data element, the most granular code(s) should be selected, so long as they are not more restrictive than the data element itself. The mappings may be used to provide more or less granular or structured equivalences in the code system.
     */
    code?: fhirModels.Coding[] | undefined;
    /**
     * If it is possible to capture usage rules using constraints, that mechanism should be used in preference to this element.
     */
    comment?: string | undefined;
    _comment?: fhirModels.Element | undefined;
    /**
     * A reference to an invariant that may make additional statements about the cardinality or value in the instance.
     */
    condition?: string[] | undefined;
    _condition?: fhirModels.Element[] | undefined;
    /**
     * Constraints should be declared on the "context" element - the lowest element in the hierarchy that is common to all nodes referenced by the constraint.
     */
    constraint?: fhirModels.ElementDefinitionConstraint[] | undefined;
    /**
     * ContentReferences can only be defined in specializations, not constrained types, and they cannot be changed and always reference the non-constrained definition.
     */
    contentReference?: string | undefined;
    _contentReference?: fhirModels.Element | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueBase64Binary?: string | undefined;
    _defaultValueBase64Binary?: fhirModels.Element | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueBoolean?: boolean | undefined;
    _defaultValueBoolean?: fhirModels.Element | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueCanonical?: string | undefined;
    _defaultValueCanonical?: fhirModels.Element | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueCode?: string | undefined;
    _defaultValueCode?: fhirModels.Element | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueDate?: string | undefined;
    _defaultValueDate?: fhirModels.Element | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueDateTime?: string | undefined;
    _defaultValueDateTime?: fhirModels.Element | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueDecimal?: number | undefined;
    _defaultValueDecimal?: fhirModels.Element | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueId?: string | undefined;
    _defaultValueId?: fhirModels.Element | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueInstant?: string | undefined;
    _defaultValueInstant?: fhirModels.Element | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueInteger?: number | undefined;
    _defaultValueInteger?: fhirModels.Element | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueMarkdown?: string | undefined;
    _defaultValueMarkdown?: fhirModels.Element | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueOid?: string | undefined;
    _defaultValueOid?: fhirModels.Element | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValuePositiveInt?: number | undefined;
    _defaultValuePositiveInt?: fhirModels.Element | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueString?: string | undefined;
    _defaultValueString?: fhirModels.Element | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueTime?: string | undefined;
    _defaultValueTime?: fhirModels.Element | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueUnsignedInt?: number | undefined;
    _defaultValueUnsignedInt?: fhirModels.Element | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueUri?: string | undefined;
    _defaultValueUri?: fhirModels.Element | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueUrl?: string | undefined;
    _defaultValueUrl?: fhirModels.Element | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueUuid?: string | undefined;
    _defaultValueUuid?: fhirModels.Element | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueAddress?: fhirModels.Address | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueAge?: fhirModels.Age | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueAnnotation?: fhirModels.Annotation | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueAttachment?: fhirModels.Attachment | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueCoding?: fhirModels.Coding | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueContactPoint?: fhirModels.ContactPoint | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueCount?: fhirModels.Count | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueDistance?: fhirModels.Distance | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueDuration?: fhirModels.Duration | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueHumanName?: fhirModels.HumanName | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueIdentifier?: fhirModels.Identifier | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueMoney?: fhirModels.Money | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValuePeriod?: fhirModels.Period | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueQuantity?: fhirModels.Quantity | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueRange?: fhirModels.Range | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueRatio?: fhirModels.Ratio | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueReference?: fhirModels.Reference | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueSampledData?: fhirModels.SampledData | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueSignature?: fhirModels.Signature | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueTiming?: fhirModels.Timing | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueContactDetail?: fhirModels.ContactDetail | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueContributor?: fhirModels.Contributor | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueDataRequirement?: fhirModels.DataRequirement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueExpression?: fhirModels.Expression | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueParameterDefinition?: fhirModels.ParameterDefinition | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueRelatedArtifact?: fhirModels.RelatedArtifact | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueTriggerDefinition?: fhirModels.TriggerDefinition | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueUsageContext?: fhirModels.UsageContext | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueDosage?: fhirModels.Dosage | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueMeta?: fhirModels.Meta | undefined;
    /**
     * It is easy for a different definition to change the meaning of an element and this can have nasty downstream consequences. Please be careful when providing definitions in a profile.
     */
    definition?: string | undefined;
    _definition?: fhirModels.Element | undefined;
    /**
     * Examples will most commonly be present for data where it's not implicitly obvious from either the data type or value set what the values might be.  (I.e. Example values for dates or quantities would generally be unnecessary.)  If the example value is fully populated, the publication tool can generate an instance automatically.
     */
    example?: fhirModels.ElementDefinitionExample[] | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedBase64Binary?: string | undefined;
    _fixedBase64Binary?: fhirModels.Element | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedBoolean?: boolean | undefined;
    _fixedBoolean?: fhirModels.Element | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedCanonical?: string | undefined;
    _fixedCanonical?: fhirModels.Element | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedCode?: string | undefined;
    _fixedCode?: fhirModels.Element | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedDate?: string | undefined;
    _fixedDate?: fhirModels.Element | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedDateTime?: string | undefined;
    _fixedDateTime?: fhirModels.Element | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedDecimal?: number | undefined;
    _fixedDecimal?: fhirModels.Element | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedId?: string | undefined;
    _fixedId?: fhirModels.Element | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedInstant?: string | undefined;
    _fixedInstant?: fhirModels.Element | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedInteger?: number | undefined;
    _fixedInteger?: fhirModels.Element | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedMarkdown?: string | undefined;
    _fixedMarkdown?: fhirModels.Element | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedOid?: string | undefined;
    _fixedOid?: fhirModels.Element | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedPositiveInt?: number | undefined;
    _fixedPositiveInt?: fhirModels.Element | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedString?: string | undefined;
    _fixedString?: fhirModels.Element | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedTime?: string | undefined;
    _fixedTime?: fhirModels.Element | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedUnsignedInt?: number | undefined;
    _fixedUnsignedInt?: fhirModels.Element | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedUri?: string | undefined;
    _fixedUri?: fhirModels.Element | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedUrl?: string | undefined;
    _fixedUrl?: fhirModels.Element | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedUuid?: string | undefined;
    _fixedUuid?: fhirModels.Element | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedAddress?: fhirModels.Address | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedAge?: fhirModels.Age | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedAnnotation?: fhirModels.Annotation | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedAttachment?: fhirModels.Attachment | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedCoding?: fhirModels.Coding | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedContactPoint?: fhirModels.ContactPoint | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedCount?: fhirModels.Count | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedDistance?: fhirModels.Distance | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedDuration?: fhirModels.Duration | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedHumanName?: fhirModels.HumanName | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedIdentifier?: fhirModels.Identifier | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedMoney?: fhirModels.Money | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedPeriod?: fhirModels.Period | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedQuantity?: fhirModels.Quantity | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedRange?: fhirModels.Range | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedRatio?: fhirModels.Ratio | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedReference?: fhirModels.Reference | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedSampledData?: fhirModels.SampledData | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedSignature?: fhirModels.Signature | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedTiming?: fhirModels.Timing | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedContactDetail?: fhirModels.ContactDetail | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedContributor?: fhirModels.Contributor | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedDataRequirement?: fhirModels.DataRequirement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedExpression?: fhirModels.Expression | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedParameterDefinition?: fhirModels.ParameterDefinition | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedRelatedArtifact?: fhirModels.RelatedArtifact | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedTriggerDefinition?: fhirModels.TriggerDefinition | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedUsageContext?: fhirModels.UsageContext | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedDosage?: fhirModels.Dosage | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedMeta?: fhirModels.Meta | undefined;
    /**
     * Only the definition of an element can set IsModifier true - either the specification itself or where an extension is originally defined. Once set, it cannot be changed in derived profiles. An element/extension that has isModifier=true SHOULD also have a minimum cardinality of 1, so that there is no lack of clarity about what to do if it is missing. If it can be missing, the definition SHALL make the meaning of a missing element clear.
     */
    isModifier?: boolean | undefined;
    _isModifier?: fhirModels.Element | undefined;
    /**
     * Explains how that element affects the interpretation of the resource or element that contains it.
     */
    isModifierReason?: string | undefined;
    _isModifierReason?: fhirModels.Element | undefined;
    /**
     * Some resources include a set of simple metadata, and some very large data. This element is used to reduce the quantity of data returned in searches. Note that servers may pre-cache summarized resources for optimal performance, so servers might not support per-profile use of the isSummary flag. When a request is made with _summary=true, serailisers only include elements marked as 'isSummary = true'. Other than Attachment.data, all data type properties are included in the summary form. In resource and data type definitions, if an element is at the root or has a parent that is 'mustSupport' and the minimum cardinality is 1 or the element is a modifier, it must be marked as isSummary=true.
     */
    isSummary?: boolean | undefined;
    _isSummary?: fhirModels.Element | undefined;
    /**
     * See also the extension (http://hl7.org/fhir/StructureDefinition/elementdefinition-question)[extension-elementdefinition-question.html].
     */
    label?: string | undefined;
    _label?: fhirModels.Element | undefined;
    /**
     * Mappings are not necessarily specific enough for safe translation.
     */
    mapping?: fhirModels.ElementDefinitionMapping[] | undefined;
    /**
     * The maximum number of times this element is permitted to appear in the instance.
     */
    max?: string | undefined;
    _max?: fhirModels.Element | undefined;
    /**
     * Receivers are not required to reject instances that exceed the maximum length.  The full length could be stored.  In some cases, data might be truncated, though truncation should be undertaken with care and an understanding of the consequences of doing so. If not specified, there is no conformance expectation for length support.
     */
    maxLength?: number | undefined;
    _maxLength?: fhirModels.Element | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueDate?: string | undefined;
    _maxValueDate?: fhirModels.Element | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueDateTime?: string | undefined;
    _maxValueDateTime?: fhirModels.Element | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueInstant?: string | undefined;
    _maxValueInstant?: fhirModels.Element | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueTime?: string | undefined;
    _maxValueTime?: fhirModels.Element | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueDecimal?: number | undefined;
    _maxValueDecimal?: fhirModels.Element | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueInteger?: number | undefined;
    _maxValueInteger?: fhirModels.Element | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValuePositiveInt?: number | undefined;
    _maxValuePositiveInt?: fhirModels.Element | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueUnsignedInt?: number | undefined;
    _maxValueUnsignedInt?: fhirModels.Element | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueQuantity?: fhirModels.Quantity | undefined;
    /**
     * Implicit meanings for missing values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. An implicit meaning for a missing value can never be changed, and specifying one has the consequence that constraining its use in profiles eliminates use cases as possibilities, not merely moving them out of scope.
     */
    meaningWhenMissing?: string | undefined;
    _meaningWhenMissing?: fhirModels.Element | undefined;
    /**
     * The minimum number of times this element SHALL appear in the instance.
     */
    min?: number | undefined;
    _min?: fhirModels.Element | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueDate?: string | undefined;
    _minValueDate?: fhirModels.Element | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueDateTime?: string | undefined;
    _minValueDateTime?: fhirModels.Element | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueInstant?: string | undefined;
    _minValueInstant?: fhirModels.Element | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueTime?: string | undefined;
    _minValueTime?: fhirModels.Element | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueDecimal?: number | undefined;
    _minValueDecimal?: fhirModels.Element | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueInteger?: number | undefined;
    _minValueInteger?: fhirModels.Element | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValuePositiveInt?: number | undefined;
    _minValuePositiveInt?: fhirModels.Element | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueUnsignedInt?: number | undefined;
    _minValueUnsignedInt?: fhirModels.Element | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueQuantity?: fhirModels.Quantity | undefined;
    /**
     * "Something useful" is context dependent and impossible to describe in the base FHIR specification. For this reason, tue mustSupport flag is never set to true by the FHIR specification itself - it is only set to true in profiles.  A profile on a type can always make musSupport = true if it is false in the base type but cannot make mustSupport = false if it is true in the base type.   This is done in [Resource Profiles](profiling.html#mustsupport), where the profile labels an element as mustSupport=true. When a profile does this, it SHALL also make clear exactly what kind of "support" is required, as this can mean many things.    Note that an element that has the property IsModifier is not necessarily a "key" element (e.g. one of the important elements to make use of the resource), nor is it automatically mustSupport - however both of these things are more likely to be true for IsModifier elements than for other elements.
     */
    mustSupport?: boolean | undefined;
    _mustSupport?: fhirModels.Element | undefined;
    /**
     * This element can only be asserted on repeating elements and can only be introduced when defining resources or data types.  It can be further refined profiled elements but if absent in the base type, a profile cannot assert meaning.
     */
    orderMeaning?: string | undefined;
    _orderMeaning?: fhirModels.Element | undefined;
    /**
     * The path identifies the element and is expressed as a "."-separated list of ancestor elements, beginning with the name of the resource or extension.
     */
    path: string;
    _path?: fhirModels.Element | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternBase64Binary?: string | undefined;
    _patternBase64Binary?: fhirModels.Element | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternBoolean?: boolean | undefined;
    _patternBoolean?: fhirModels.Element | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternCanonical?: string | undefined;
    _patternCanonical?: fhirModels.Element | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternCode?: string | undefined;
    _patternCode?: fhirModels.Element | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternDate?: string | undefined;
    _patternDate?: fhirModels.Element | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternDateTime?: string | undefined;
    _patternDateTime?: fhirModels.Element | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternDecimal?: number | undefined;
    _patternDecimal?: fhirModels.Element | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternId?: string | undefined;
    _patternId?: fhirModels.Element | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternInstant?: string | undefined;
    _patternInstant?: fhirModels.Element | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternInteger?: number | undefined;
    _patternInteger?: fhirModels.Element | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternMarkdown?: string | undefined;
    _patternMarkdown?: fhirModels.Element | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternOid?: string | undefined;
    _patternOid?: fhirModels.Element | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternPositiveInt?: number | undefined;
    _patternPositiveInt?: fhirModels.Element | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternString?: string | undefined;
    _patternString?: fhirModels.Element | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternTime?: string | undefined;
    _patternTime?: fhirModels.Element | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternUnsignedInt?: number | undefined;
    _patternUnsignedInt?: fhirModels.Element | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternUri?: string | undefined;
    _patternUri?: fhirModels.Element | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternUrl?: string | undefined;
    _patternUrl?: fhirModels.Element | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternUuid?: string | undefined;
    _patternUuid?: fhirModels.Element | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternAddress?: fhirModels.Address | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternAge?: fhirModels.Age | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternAnnotation?: fhirModels.Annotation | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternAttachment?: fhirModels.Attachment | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternCoding?: fhirModels.Coding | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternContactPoint?: fhirModels.ContactPoint | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternCount?: fhirModels.Count | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternDistance?: fhirModels.Distance | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternDuration?: fhirModels.Duration | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternHumanName?: fhirModels.HumanName | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternIdentifier?: fhirModels.Identifier | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternMoney?: fhirModels.Money | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternPeriod?: fhirModels.Period | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternQuantity?: fhirModels.Quantity | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternRange?: fhirModels.Range | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternRatio?: fhirModels.Ratio | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternReference?: fhirModels.Reference | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternSampledData?: fhirModels.SampledData | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternSignature?: fhirModels.Signature | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternTiming?: fhirModels.Timing | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternContactDetail?: fhirModels.ContactDetail | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternContributor?: fhirModels.Contributor | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternDataRequirement?: fhirModels.DataRequirement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternExpression?: fhirModels.Expression | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternParameterDefinition?: fhirModels.ParameterDefinition | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternRelatedArtifact?: fhirModels.RelatedArtifact | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternTriggerDefinition?: fhirModels.TriggerDefinition | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternUsageContext?: fhirModels.UsageContext | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternDosage?: fhirModels.Dosage | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternMeta?: fhirModels.Meta | undefined;
    /**
     * In resources, this is rarely used except for special cases where the representation deviates from the normal, and can only be done in the base standard (and profiles must reproduce what the base standard does). This element is used quite commonly in Logical models when the logical models represent a specific serialization format (e.g. CDA, v2 etc.).
     */
    representation?: ElementDefinitionRepresentationEnum[] | undefined;
    _representation?: fhirModels.Element[] | undefined;
    /**
     * This element does not describe the usage of the element (that's done in comments), rather it's for traceability of *why* the element is either needed or why the constraints exist as they do.  This may be used to point to source materials or specifications that drove the structure of this data element.
     */
    requirements?: string | undefined;
    _requirements?: fhirModels.Element | undefined;
    /**
     * It is easy for a different short definition to change the meaning of an element and this can have nasty downstream consequences. Please be careful when providing short definitions in a profile.
     */
    short?: string | undefined;
    _short?: fhirModels.Element | undefined;
    /**
     * If set to true, an ancestor profile SHALL have a slicing definition with this name.  If set to false, no ancestor profile is permitted to have a slicing definition with this name.
     */
    sliceIsConstraining?: boolean | undefined;
    _sliceIsConstraining?: fhirModels.Element | undefined;
    /**
     * The name SHALL be unique within the structure within the context of the constrained resource element.  (Though to avoid confusion, uniqueness across all elements is recommended.).
     */
    sliceName?: string | undefined;
    _sliceName?: fhirModels.Element | undefined;
    /**
     * The first element in the sequence, the one that carries the slicing, is the definition that applies to all the slices. This is based on the unconstrained element, but can apply any constraints as appropriate. This may include the common constraints on the children of the element.
     */
    slicing?: fhirModels.ElementDefinitionSlicing | undefined;
    /**
     * The Type of the element can be left blank in a differential constraint, in which case the type is inherited from the resource. Abstract types are not permitted to appear as a type when multiple types are listed.  (I.e. Abstract types cannot be part of a choice).
     */
    type?: fhirModels.ElementDefinitionType[] | undefined;
    /**
     * Default constructor for ElementDefinition from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IElementDefinition);
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
//# sourceMappingURL=ElementDefinition.d.ts.map