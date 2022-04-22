import * as fhir from '../fhir.js';
import { DiscriminatorTypeValueSetType, DiscriminatorTypeValueSetEnum } from '../fhirValueSets/DiscriminatorTypeValueSet.js';
import { ResourceSlicingRulesValueSetType, ResourceSlicingRulesValueSetEnum } from '../fhirValueSets/ResourceSlicingRulesValueSet.js';
import { DefinedTypesValueSetType } from '../fhirValueSets/DefinedTypesValueSet.js';
import { ResourceAggregationModeValueSetType, ResourceAggregationModeValueSetEnum } from '../fhirValueSets/ResourceAggregationModeValueSet.js';
import { ReferenceVersionRulesValueSetType, ReferenceVersionRulesValueSetEnum } from '../fhirValueSets/ReferenceVersionRulesValueSet.js';
import { ConstraintSeverityValueSetType, ConstraintSeverityValueSetEnum } from '../fhirValueSets/ConstraintSeverityValueSet.js';
import { BindingStrengthValueSetType, BindingStrengthValueSetEnum } from '../fhirValueSets/BindingStrengthValueSet.js';
import { PropertyRepresentationValueSetType, PropertyRepresentationValueSetEnum } from '../fhirValueSets/PropertyRepresentationValueSet.js';
import { ObservationCodesValueSetType } from '../fhirValueSets/ObservationCodesValueSet.js';
/**
 * If there is no discriminator, the content is hard to process, so this should be avoided.
 */
export declare type IElementDefinitionSlicingDiscriminator = fhir.IFhirElement & {
    /**
     * How the element value is interpreted when discrimination is evaluated.
     */
    type: DiscriminatorTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: ElementDefinition.slicing.discriminator.type
     */
    _type?: fhir.IFhirElement | undefined;
    /**
     * The only FHIRPath functions that are allowed are as(type), resolve(), and extension(url).
     */
    path: string | null;
    /**
     * Extended properties for primitive element: ElementDefinition.slicing.discriminator.path
     */
    _path?: fhir.IFhirElement | undefined;
};
/**
 * The first element in the sequence, the one that carries the slicing, is the definition that applies to all the slices. This is based on the unconstrained element, but can apply any constraints as appropriate. This may include the common constraints on the children of the element.
 */
export declare type IElementDefinitionSlicing = fhir.IFhirElement & {
    /**
     * If there is no discriminator, the content is hard to process, so this should be avoided.
     */
    discriminator?: fhir.IElementDefinitionSlicingDiscriminator[] | undefined;
    /**
     * If it's really not possible to differentiate them, the design should be re-evaluated to make the content usable.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.slicing.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * Order should only be required when it is a pressing concern for presentation. Profile authors should consider making the order a feature of the rules about the narrative, not the rules about the data - requiring ordered data makes the profile much less re-usable.
     */
    ordered?: boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.slicing.ordered
     */
    _ordered?: fhir.IFhirElement | undefined;
    /**
     * Allowing additional elements makes for a much for flexible template - it's open for use in wider contexts, but also means that the content of the resource is not closed, and applications have to decide how to handle content not described by the profile.
     */
    rules: ResourceSlicingRulesValueSetEnum | null;
    /**
     * Extended properties for primitive element: ElementDefinition.slicing.rules
     */
    _rules?: fhir.IFhirElement | undefined;
};
/**
 * The base information does not carry any information that could not be determined from the path and related profiles, but making this determination requires both that the related profiles are available, and that the algorithm to determine them be available. For tooling simplicity, the base information must always be populated in element definitions in snap shots, even if it is the same.
 */
export declare type IElementDefinitionBase = fhir.IFhirElement & {
    /**
     * The Path that identifies the base element - this matches the ElementDefinition.path for that element. Across FHIR, there is only one base definition of any element - that is, an element definition on a [StructureDefinition](structuredefinition.html#) without a StructureDefinition.base.
     */
    path: string | null;
    /**
     * Extended properties for primitive element: ElementDefinition.base.path
     */
    _path?: fhir.IFhirElement | undefined;
    /**
     * This is provided for consistency with max, and may affect code generation of mandatory elements of the base resource are generated differently (some reference implementations have done this).
     */
    min: number | null;
    /**
     * Extended properties for primitive element: ElementDefinition.base.min
     */
    _min?: fhir.IFhirElement | undefined;
    /**
     * This is provided to code generation, since the serialization representation in JSON differs depending on whether the base element has max &gt; 1. Also, some forms of code generation may differ.
     */
    max: string | null;
    /**
     * Extended properties for primitive element: ElementDefinition.base.max
     */
    _max?: fhir.IFhirElement | undefined;
};
/**
 * The Type of the element can be left blank in a differential constraint, in which case the type is inherited from the resource. Abstract types are not permitted to appear as a type when multiple types are listed.  (I.e. Abstract types cannot be part of a choice).
 */
export declare type IElementDefinitionType = fhir.IFhirElement & {
    /**
     * If the element is a reference to another resource, this element contains "Reference", and the targetProfile element defines what resources can be referenced. The targetProfile may be a reference to the general definition of a resource (e.g. http://hl7.org/fhir/StructureDefinition/Patient).
     */
    code: string | null;
    /**
     * Extended properties for primitive element: ElementDefinition.type.code
     */
    _code?: fhir.IFhirElement | undefined;
    /**
     * It is possible to profile  backbone element (e.g. part of a resource), using the [profile-element](extension-elementdefinition-profile-element.html) extension.
     */
    profile?: string[] | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.type.profile
     */
    _profile?: fhir.IFhirElement[] | undefined;
    /**
     * Used when the type is "Reference" or "canonical", and identifies a profile structure or implementation Guide that applies to the target of the reference this element refers to. If any profiles are specified, then the content must conform to at least one of them. The URL can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the target resource SHALL conform to at least one profile defined in the implementation guide.
     */
    targetProfile?: string[] | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.type.targetProfile
     */
    _targetProfile?: fhir.IFhirElement[] | undefined;
    /**
     * See [Aggregation Rules](elementdefinition.html#aggregation) for further clarification.
     */
    aggregation?: ResourceAggregationModeValueSetEnum[] | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.type.aggregation
     */
    _aggregation?: fhir.IFhirElement[] | undefined;
    /**
     * The base specification never makes a rule as to which form is allowed, but implementation guides may do this. See [Aggregation Rules](elementdefinition.html#aggregation) for further clarification.
     */
    versioning?: ReferenceVersionRulesValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.type.versioning
     */
    _versioning?: fhir.IFhirElement | undefined;
};
/**
 * Examples will most commonly be present for data where it's not implicitly obvious from either the data type or value set what the values might be.  (I.e. Example values for dates or quantities would generally be unnecessary.)  If the example value is fully populated, the publication tool can generate an instance automatically.
 */
export declare type IElementDefinitionExample = fhir.IFhirElement & {
    /**
     * Describes the purpose of this example amoung the set of examples.
     */
    label: string | null;
    /**
     * Extended properties for primitive element: ElementDefinition.example.label
     */
    _label?: fhir.IFhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueBase64Binary?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueBase64Binary?: fhir.IFhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueBoolean?: fhir.IFhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCanonical?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueCanonical?: fhir.IFhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCode?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueCode?: fhir.IFhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDate?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueDate?: fhir.IFhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueDateTime?: fhir.IFhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueDecimal?: fhir.IFhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueId?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueId?: fhir.IFhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueInstant?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueInstant?: fhir.IFhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueInteger?: fhir.IFhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueMarkdown?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueMarkdown?: fhir.IFhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueOid?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueOid?: fhir.IFhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valuePositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valuePositiveInt?: fhir.IFhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueString?: fhir.IFhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueTime?: fhir.IFhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueUnsignedInt?: fhir.IFhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueUri?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueUri?: fhir.IFhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueUrl?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueUrl?: fhir.IFhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueUuid?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueUuid?: fhir.IFhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueAddress?: fhir.IAddress | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueAge?: fhir.IAge | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueAnnotation?: fhir.IAnnotation | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueAttachment?: fhir.IAttachment | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCoding?: fhir.ICoding | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueContactPoint?: fhir.IContactPoint | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCount?: fhir.ICount | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDistance?: fhir.IDistance | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDuration?: fhir.IDuration | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueHumanName?: fhir.IHumanName | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueIdentifier?: fhir.IIdentifier | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueMoney?: fhir.IMoney | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valuePeriod?: fhir.IPeriod | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueQuantity?: fhir.IQuantity | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueRange?: fhir.IRange | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueRatio?: fhir.IRatio | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueReference?: fhir.IReference | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueSampledData?: fhir.ISampledData | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueSignature?: fhir.ISignature | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueTiming?: fhir.ITiming | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueContactDetail?: fhir.IContactDetail | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueContributor?: fhir.IContributor | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDataRequirement?: fhir.IDataRequirement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueExpression?: fhir.IExpression | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueParameterDefinition?: fhir.IParameterDefinition | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueRelatedArtifact?: fhir.IRelatedArtifact | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueTriggerDefinition?: fhir.ITriggerDefinition | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueUsageContext?: fhir.IUsageContext | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDosage?: fhir.IDosage | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueMeta?: fhir.IMeta | undefined;
};
/**
 * Constraints should be declared on the "context" element - the lowest element in the hierarchy that is common to all nodes referenced by the constraint.
 */
export declare type IElementDefinitionConstraint = fhir.IFhirElement & {
    /**
     * Allows identification of which elements have their cardinalities impacted by the constraint.  Will not be referenced for constraints that do not affect cardinality.
     */
    key: string | null;
    /**
     * Extended properties for primitive element: ElementDefinition.constraint.key
     */
    _key?: fhir.IFhirElement | undefined;
    /**
     * To be used if the reason for the constraint might not be intuitive to all implementers.
     */
    requirements?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.constraint.requirements
     */
    _requirements?: fhir.IFhirElement | undefined;
    /**
     * This allows constraints to be asserted as "shall" (error) and "should" (warning).
     */
    severity: ConstraintSeverityValueSetEnum | null;
    /**
     * Extended properties for primitive element: ElementDefinition.constraint.severity
     */
    _severity?: fhir.IFhirElement | undefined;
    /**
     * Should be expressed in business terms as much as possible.
     */
    human: string | null;
    /**
     * Extended properties for primitive element: ElementDefinition.constraint.human
     */
    _human?: fhir.IFhirElement | undefined;
    /**
     * In the absense of an expression, the expression is likely not enforceable by validators, and might be missed by many systems.
     */
    expression?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.constraint.expression
     */
    _expression?: fhir.IFhirElement | undefined;
    /**
     * Elements SHALL use "f" as the namespace prefix for the FHIR namespace, and "x" for the xhtml namespace, and SHALL NOT use any other prefixes.     Note: XPath is generally considered not useful because it does not apply to JSON and other formats and because of XSLT implementation issues, and may be removed in the future.
     */
    xpath?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.constraint.xpath
     */
    _xpath?: fhir.IFhirElement | undefined;
    /**
     * This is used when, e.g. rendering, where it is not useful to present inherited constraints when rendering the snapshot.
     */
    source?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.constraint.source
     */
    _source?: fhir.IFhirElement | undefined;
};
/**
 * For a CodeableConcept, when no codes are allowed - only text, use a binding of strength "required" with a description explaining that no coded values are allowed and what sort of information to put in the "text" element.
 */
export declare type IElementDefinitionBinding = fhir.IFhirElement & {
    /**
     * For further discussion, see [Using Terminologies](terminologies.html).
     */
    strength: BindingStrengthValueSetEnum | null;
    /**
     * Extended properties for primitive element: ElementDefinition.binding.strength
     */
    _strength?: fhir.IFhirElement | undefined;
    /**
     * Describes the intended use of this particular set of codes.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.binding.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * The reference may be version-specific or not (e.g. have a |[version] at the end of the canonical URL).
     */
    valueSet?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.binding.valueSet
     */
    _valueSet?: fhir.IFhirElement | undefined;
};
/**
 * Mappings are not necessarily specific enough for safe translation.
 */
export declare type IElementDefinitionMapping = fhir.IFhirElement & {
    /**
     * An internal reference to the definition of a mapping.
     */
    identity: string | null;
    /**
     * Extended properties for primitive element: ElementDefinition.mapping.identity
     */
    _identity?: fhir.IFhirElement | undefined;
    /**
     * If omitted, then there can be no expectation of computational interpretation of the mapping.
     */
    language?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.mapping.language
     */
    _language?: fhir.IFhirElement | undefined;
    /**
     * For most mappings, the syntax is undefined.  Syntax will be provided for mappings to the RIM.  Multiple mappings may be possible and may include constraints on other resource elements that identify when a particular mapping applies.
     */
    map: string | null;
    /**
     * Extended properties for primitive element: ElementDefinition.mapping.map
     */
    _map?: fhir.IFhirElement | undefined;
    /**
     * Comments that provide information about the mapping or its use.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.mapping.comment
     */
    _comment?: fhir.IFhirElement | undefined;
};
/**
 * Captures constraints on each element within the resource, profile, or extension.
 */
export declare type IElementDefinition = fhir.IBackboneElement & {
    /**
     * The path identifies the element and is expressed as a "."-separated list of ancestor elements, beginning with the name of the resource or extension.
     */
    path: string | null;
    /**
     * Extended properties for primitive element: ElementDefinition.path
     */
    _path?: fhir.IFhirElement | undefined;
    /**
     * In resources, this is rarely used except for special cases where the representation deviates from the normal, and can only be done in the base standard (and profiles must reproduce what the base standard does). This element is used quite commonly in Logical models when the logical models represent a specific serialization format (e.g. CDA, v2 etc.).
     */
    representation?: PropertyRepresentationValueSetEnum[] | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.representation
     */
    _representation?: fhir.IFhirElement[] | undefined;
    /**
     * The name SHALL be unique within the structure within the context of the constrained resource element.  (Though to avoid confusion, uniqueness across all elements is recommended.).
     */
    sliceName?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.sliceName
     */
    _sliceName?: fhir.IFhirElement | undefined;
    /**
     * If set to true, an ancestor profile SHALL have a slicing definition with this name.  If set to false, no ancestor profile is permitted to have a slicing definition with this name.
     */
    sliceIsConstraining?: boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.sliceIsConstraining
     */
    _sliceIsConstraining?: fhir.IFhirElement | undefined;
    /**
     * See also the extension (http://hl7.org/fhir/StructureDefinition/elementdefinition-question)[extension-elementdefinition-question.html].
     */
    label?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.label
     */
    _label?: fhir.IFhirElement | undefined;
    /**
     * The concept SHALL be properly aligned with the data element definition and other constraints, as defined in the code system, including relationships, of any code listed here.  Where multiple codes exist in a terminology that could correspond to the data element, the most granular code(s) should be selected, so long as they are not more restrictive than the data element itself. The mappings may be used to provide more or less granular or structured equivalences in the code system.
     */
    code?: fhir.ICoding[] | undefined;
    /**
     * The first element in the sequence, the one that carries the slicing, is the definition that applies to all the slices. This is based on the unconstrained element, but can apply any constraints as appropriate. This may include the common constraints on the children of the element.
     */
    slicing?: fhir.IElementDefinitionSlicing | undefined;
    /**
     * It is easy for a different short definition to change the meaning of an element and this can have nasty downstream consequences. Please be careful when providing short definitions in a profile.
     */
    short?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.short
     */
    _short?: fhir.IFhirElement | undefined;
    /**
     * It is easy for a different definition to change the meaning of an element and this can have nasty downstream consequences. Please be careful when providing definitions in a profile.
     */
    definition?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.definition
     */
    _definition?: fhir.IFhirElement | undefined;
    /**
     * If it is possible to capture usage rules using constraints, that mechanism should be used in preference to this element.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.comment
     */
    _comment?: fhir.IFhirElement | undefined;
    /**
     * This element does not describe the usage of the element (that's done in comments), rather it's for traceability of *why* the element is either needed or why the constraints exist as they do.  This may be used to point to source materials or specifications that drove the structure of this data element.
     */
    requirements?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.requirements
     */
    _requirements?: fhir.IFhirElement | undefined;
    /**
     * Identifies additional names by which this element might also be known.
     */
    alias?: string[] | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.alias
     */
    _alias?: fhir.IFhirElement[] | undefined;
    /**
     * The minimum number of times this element SHALL appear in the instance.
     */
    min?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.min
     */
    _min?: fhir.IFhirElement | undefined;
    /**
     * The maximum number of times this element is permitted to appear in the instance.
     */
    max?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.max
     */
    _max?: fhir.IFhirElement | undefined;
    /**
     * The base information does not carry any information that could not be determined from the path and related profiles, but making this determination requires both that the related profiles are available, and that the algorithm to determine them be available. For tooling simplicity, the base information must always be populated in element definitions in snap shots, even if it is the same.
     */
    base?: fhir.IElementDefinitionBase | undefined;
    /**
     * ContentReferences can only be defined in specializations, not constrained types, and they cannot be changed and always reference the non-constrained definition.
     */
    contentReference?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.contentReference
     */
    _contentReference?: fhir.IFhirElement | undefined;
    /**
     * The Type of the element can be left blank in a differential constraint, in which case the type is inherited from the resource. Abstract types are not permitted to appear as a type when multiple types are listed.  (I.e. Abstract types cannot be part of a choice).
     */
    type?: fhir.IElementDefinitionType[] | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueBase64Binary?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueBase64Binary?: fhir.IFhirElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueBoolean?: fhir.IFhirElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueCanonical?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueCanonical?: fhir.IFhirElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueCode?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueCode?: fhir.IFhirElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueDate?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueDate?: fhir.IFhirElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueDateTime?: fhir.IFhirElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueDecimal?: fhir.IFhirElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueId?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueId?: fhir.IFhirElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueInstant?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueInstant?: fhir.IFhirElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueInteger?: fhir.IFhirElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueMarkdown?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueMarkdown?: fhir.IFhirElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueOid?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueOid?: fhir.IFhirElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValuePositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValuePositiveInt?: fhir.IFhirElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueString?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueString?: fhir.IFhirElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueTime?: fhir.IFhirElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueUnsignedInt?: fhir.IFhirElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueUri?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueUri?: fhir.IFhirElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueUrl?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueUrl?: fhir.IFhirElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueUuid?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueUuid?: fhir.IFhirElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueAddress?: fhir.IAddress | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueAge?: fhir.IAge | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueAnnotation?: fhir.IAnnotation | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueAttachment?: fhir.IAttachment | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueCoding?: fhir.ICoding | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueContactPoint?: fhir.IContactPoint | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueCount?: fhir.ICount | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueDistance?: fhir.IDistance | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueDuration?: fhir.IDuration | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueHumanName?: fhir.IHumanName | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueIdentifier?: fhir.IIdentifier | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueMoney?: fhir.IMoney | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValuePeriod?: fhir.IPeriod | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueQuantity?: fhir.IQuantity | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueRange?: fhir.IRange | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueRatio?: fhir.IRatio | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueReference?: fhir.IReference | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueSampledData?: fhir.ISampledData | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueSignature?: fhir.ISignature | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueTiming?: fhir.ITiming | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueContactDetail?: fhir.IContactDetail | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueContributor?: fhir.IContributor | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueDataRequirement?: fhir.IDataRequirement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueExpression?: fhir.IExpression | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueParameterDefinition?: fhir.IParameterDefinition | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueRelatedArtifact?: fhir.IRelatedArtifact | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueTriggerDefinition?: fhir.ITriggerDefinition | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueUsageContext?: fhir.IUsageContext | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueDosage?: fhir.IDosage | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueMeta?: fhir.IMeta | undefined;
    /**
     * Implicit meanings for missing values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. An implicit meaning for a missing value can never be changed, and specifying one has the consequence that constraining its use in profiles eliminates use cases as possibilities, not merely moving them out of scope.
     */
    meaningWhenMissing?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.meaningWhenMissing
     */
    _meaningWhenMissing?: fhir.IFhirElement | undefined;
    /**
     * This element can only be asserted on repeating elements and can only be introduced when defining resources or data types.  It can be further refined profiled elements but if absent in the base type, a profile cannot assert meaning.
     */
    orderMeaning?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.orderMeaning
     */
    _orderMeaning?: fhir.IFhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedBase64Binary?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedBase64Binary?: fhir.IFhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedBoolean?: fhir.IFhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedCanonical?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedCanonical?: fhir.IFhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedCode?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedCode?: fhir.IFhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedDate?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedDate?: fhir.IFhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedDateTime?: fhir.IFhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedDecimal?: fhir.IFhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedId?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedId?: fhir.IFhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedInstant?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedInstant?: fhir.IFhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedInteger?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedInteger?: fhir.IFhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedMarkdown?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedMarkdown?: fhir.IFhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedOid?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedOid?: fhir.IFhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedPositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedPositiveInt?: fhir.IFhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedString?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedString?: fhir.IFhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedTime?: fhir.IFhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedUnsignedInt?: fhir.IFhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedUri?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedUri?: fhir.IFhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedUrl?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedUrl?: fhir.IFhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedUuid?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedUuid?: fhir.IFhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedAddress?: fhir.IAddress | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedAge?: fhir.IAge | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedAnnotation?: fhir.IAnnotation | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedAttachment?: fhir.IAttachment | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedCoding?: fhir.ICoding | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedContactPoint?: fhir.IContactPoint | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedCount?: fhir.ICount | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedDistance?: fhir.IDistance | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedDuration?: fhir.IDuration | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedHumanName?: fhir.IHumanName | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedIdentifier?: fhir.IIdentifier | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedMoney?: fhir.IMoney | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedPeriod?: fhir.IPeriod | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedQuantity?: fhir.IQuantity | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedRange?: fhir.IRange | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedRatio?: fhir.IRatio | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedReference?: fhir.IReference | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedSampledData?: fhir.ISampledData | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedSignature?: fhir.ISignature | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedTiming?: fhir.ITiming | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedContactDetail?: fhir.IContactDetail | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedContributor?: fhir.IContributor | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedDataRequirement?: fhir.IDataRequirement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedExpression?: fhir.IExpression | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedParameterDefinition?: fhir.IParameterDefinition | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedRelatedArtifact?: fhir.IRelatedArtifact | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedTriggerDefinition?: fhir.ITriggerDefinition | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedUsageContext?: fhir.IUsageContext | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedDosage?: fhir.IDosage | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedMeta?: fhir.IMeta | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternBase64Binary?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternBase64Binary?: fhir.IFhirElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternBoolean?: fhir.IFhirElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternCanonical?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternCanonical?: fhir.IFhirElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternCode?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternCode?: fhir.IFhirElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternDate?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternDate?: fhir.IFhirElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternDateTime?: fhir.IFhirElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternDecimal?: fhir.IFhirElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternId?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternId?: fhir.IFhirElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternInstant?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternInstant?: fhir.IFhirElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternInteger?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternInteger?: fhir.IFhirElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternMarkdown?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternMarkdown?: fhir.IFhirElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternOid?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternOid?: fhir.IFhirElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternPositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternPositiveInt?: fhir.IFhirElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternString?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternString?: fhir.IFhirElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternTime?: fhir.IFhirElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternUnsignedInt?: fhir.IFhirElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternUri?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternUri?: fhir.IFhirElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternUrl?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternUrl?: fhir.IFhirElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternUuid?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternUuid?: fhir.IFhirElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternAddress?: fhir.IAddress | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternAge?: fhir.IAge | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternAnnotation?: fhir.IAnnotation | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternAttachment?: fhir.IAttachment | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternCoding?: fhir.ICoding | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternContactPoint?: fhir.IContactPoint | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternCount?: fhir.ICount | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternDistance?: fhir.IDistance | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternDuration?: fhir.IDuration | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternHumanName?: fhir.IHumanName | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternIdentifier?: fhir.IIdentifier | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternMoney?: fhir.IMoney | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternPeriod?: fhir.IPeriod | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternQuantity?: fhir.IQuantity | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternRange?: fhir.IRange | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternRatio?: fhir.IRatio | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternReference?: fhir.IReference | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternSampledData?: fhir.ISampledData | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternSignature?: fhir.ISignature | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternTiming?: fhir.ITiming | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternContactDetail?: fhir.IContactDetail | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternContributor?: fhir.IContributor | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternDataRequirement?: fhir.IDataRequirement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternExpression?: fhir.IExpression | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternParameterDefinition?: fhir.IParameterDefinition | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternRelatedArtifact?: fhir.IRelatedArtifact | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternTriggerDefinition?: fhir.ITriggerDefinition | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternUsageContext?: fhir.IUsageContext | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternDosage?: fhir.IDosage | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternMeta?: fhir.IMeta | undefined;
    /**
     * Examples will most commonly be present for data where it's not implicitly obvious from either the data type or value set what the values might be.  (I.e. Example values for dates or quantities would generally be unnecessary.)  If the example value is fully populated, the publication tool can generate an instance automatically.
     */
    example?: fhir.IElementDefinitionExample[] | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueDate?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValueDate?: fhir.IFhirElement | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValueDateTime?: fhir.IFhirElement | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueInstant?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValueInstant?: fhir.IFhirElement | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValueTime?: fhir.IFhirElement | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValueDecimal?: fhir.IFhirElement | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValueInteger?: fhir.IFhirElement | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValuePositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValuePositiveInt?: fhir.IFhirElement | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValueUnsignedInt?: fhir.IFhirElement | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueQuantity?: fhir.IQuantity | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueDate?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValueDate?: fhir.IFhirElement | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValueDateTime?: fhir.IFhirElement | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueInstant?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValueInstant?: fhir.IFhirElement | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValueTime?: fhir.IFhirElement | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValueDecimal?: fhir.IFhirElement | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValueInteger?: fhir.IFhirElement | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValuePositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValuePositiveInt?: fhir.IFhirElement | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValueUnsignedInt?: fhir.IFhirElement | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueQuantity?: fhir.IQuantity | undefined;
    /**
     * Receivers are not required to reject instances that exceed the maximum length.  The full length could be stored.  In some cases, data might be truncated, though truncation should be undertaken with care and an understanding of the consequences of doing so. If not specified, there is no conformance expectation for length support.
     */
    maxLength?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxLength
     */
    _maxLength?: fhir.IFhirElement | undefined;
    /**
     * A reference to an invariant that may make additional statements about the cardinality or value in the instance.
     */
    condition?: string[] | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.condition
     */
    _condition?: fhir.IFhirElement[] | undefined;
    /**
     * Constraints should be declared on the "context" element - the lowest element in the hierarchy that is common to all nodes referenced by the constraint.
     */
    constraint?: fhir.IElementDefinitionConstraint[] | undefined;
    /**
     * "Something useful" is context dependent and impossible to describe in the base FHIR specification. For this reason, tue mustSupport flag is never set to true by the FHIR specification itself - it is only set to true in profiles.  A profile on a type can always make musSupport = true if it is false in the base type but cannot make mustSupport = false if it is true in the base type.   This is done in [Resource Profiles](profiling.html#mustsupport), where the profile labels an element as mustSupport=true. When a profile does this, it SHALL also make clear exactly what kind of "support" is required, as this can mean many things.    Note that an element that has the property IsModifier is not necessarily a "key" element (e.g. one of the important elements to make use of the resource), nor is it automatically mustSupport - however both of these things are more likely to be true for IsModifier elements than for other elements.
     */
    mustSupport?: boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.mustSupport
     */
    _mustSupport?: fhir.IFhirElement | undefined;
    /**
     * Only the definition of an element can set IsModifier true - either the specification itself or where an extension is originally defined. Once set, it cannot be changed in derived profiles. An element/extension that has isModifier=true SHOULD also have a minimum cardinality of 1, so that there is no lack of clarity about what to do if it is missing. If it can be missing, the definition SHALL make the meaning of a missing element clear.
     */
    isModifier?: boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.isModifier
     */
    _isModifier?: fhir.IFhirElement | undefined;
    /**
     * Explains how that element affects the interpretation of the resource or element that contains it.
     */
    isModifierReason?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.isModifierReason
     */
    _isModifierReason?: fhir.IFhirElement | undefined;
    /**
     * Some resources include a set of simple metadata, and some very large data. This element is used to reduce the quantity of data returned in searches. Note that servers may pre-cache summarized resources for optimal performance, so servers might not support per-profile use of the isSummary flag. When a request is made with _summary=true, serailisers only include elements marked as 'isSummary = true'. Other than Attachment.data, all data type properties are included in the summary form. In resource and data type definitions, if an element is at the root or has a parent that is 'mustSupport' and the minimum cardinality is 1 or the element is a modifier, it must be marked as isSummary=true.
     */
    isSummary?: boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.isSummary
     */
    _isSummary?: fhir.IFhirElement | undefined;
    /**
     * For a CodeableConcept, when no codes are allowed - only text, use a binding of strength "required" with a description explaining that no coded values are allowed and what sort of information to put in the "text" element.
     */
    binding?: fhir.IElementDefinitionBinding | undefined;
    /**
     * Mappings are not necessarily specific enough for safe translation.
     */
    mapping?: fhir.IElementDefinitionMapping[] | undefined;
};
/**
 * If there is no discriminator, the content is hard to process, so this should be avoided.
 */
export declare class ElementDefinitionSlicingDiscriminator extends fhir.FhirElement implements IElementDefinitionSlicingDiscriminator {
    /**
     * How the element value is interpreted when discrimination is evaluated.
     */
    type: DiscriminatorTypeValueSetEnum | null;
    /**
     * Extended properties for primitive element: ElementDefinition.slicing.discriminator.type
     */
    _type?: fhir.FhirElement | undefined;
    /**
     * The only FHIRPath functions that are allowed are as(type), resolve(), and extension(url).
     */
    path: string | null;
    /**
     * Extended properties for primitive element: ElementDefinition.slicing.discriminator.path
     */
    _path?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ElementDefinitionSlicingDiscriminator - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IElementDefinitionSlicingDiscriminator>);
    /**
     * Required-bound Value Set for type
     */
    static typeRequiredValueSet(): DiscriminatorTypeValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The first element in the sequence, the one that carries the slicing, is the definition that applies to all the slices. This is based on the unconstrained element, but can apply any constraints as appropriate. This may include the common constraints on the children of the element.
 */
export declare class ElementDefinitionSlicing extends fhir.FhirElement implements IElementDefinitionSlicing {
    /**
     * If there is no discriminator, the content is hard to process, so this should be avoided.
     */
    discriminator?: fhir.ElementDefinitionSlicingDiscriminator[] | undefined;
    /**
     * If it's really not possible to differentiate them, the design should be re-evaluated to make the content usable.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.slicing.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * Order should only be required when it is a pressing concern for presentation. Profile authors should consider making the order a feature of the rules about the narrative, not the rules about the data - requiring ordered data makes the profile much less re-usable.
     */
    ordered?: boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.slicing.ordered
     */
    _ordered?: fhir.FhirElement | undefined;
    /**
     * Allowing additional elements makes for a much for flexible template - it's open for use in wider contexts, but also means that the content of the resource is not closed, and applications have to decide how to handle content not described by the profile.
     */
    rules: ResourceSlicingRulesValueSetEnum | null;
    /**
     * Extended properties for primitive element: ElementDefinition.slicing.rules
     */
    _rules?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ElementDefinitionSlicing - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IElementDefinitionSlicing>);
    /**
     * Required-bound Value Set for rules
     */
    static rulesRequiredValueSet(): ResourceSlicingRulesValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The base information does not carry any information that could not be determined from the path and related profiles, but making this determination requires both that the related profiles are available, and that the algorithm to determine them be available. For tooling simplicity, the base information must always be populated in element definitions in snap shots, even if it is the same.
 */
export declare class ElementDefinitionBase extends fhir.FhirElement implements IElementDefinitionBase {
    /**
     * The Path that identifies the base element - this matches the ElementDefinition.path for that element. Across FHIR, there is only one base definition of any element - that is, an element definition on a [StructureDefinition](structuredefinition.html#) without a StructureDefinition.base.
     */
    path: string | null;
    /**
     * Extended properties for primitive element: ElementDefinition.base.path
     */
    _path?: fhir.FhirElement | undefined;
    /**
     * This is provided for consistency with max, and may affect code generation of mandatory elements of the base resource are generated differently (some reference implementations have done this).
     */
    min: number | null;
    /**
     * Extended properties for primitive element: ElementDefinition.base.min
     */
    _min?: fhir.FhirElement | undefined;
    /**
     * This is provided to code generation, since the serialization representation in JSON differs depending on whether the base element has max &gt; 1. Also, some forms of code generation may differ.
     */
    max: string | null;
    /**
     * Extended properties for primitive element: ElementDefinition.base.max
     */
    _max?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ElementDefinitionBase - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IElementDefinitionBase>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The Type of the element can be left blank in a differential constraint, in which case the type is inherited from the resource. Abstract types are not permitted to appear as a type when multiple types are listed.  (I.e. Abstract types cannot be part of a choice).
 */
export declare class ElementDefinitionType extends fhir.FhirElement implements IElementDefinitionType {
    /**
     * If the element is a reference to another resource, this element contains "Reference", and the targetProfile element defines what resources can be referenced. The targetProfile may be a reference to the general definition of a resource (e.g. http://hl7.org/fhir/StructureDefinition/Patient).
     */
    code: string | null;
    /**
     * Extended properties for primitive element: ElementDefinition.type.code
     */
    _code?: fhir.FhirElement | undefined;
    /**
     * It is possible to profile  backbone element (e.g. part of a resource), using the [profile-element](extension-elementdefinition-profile-element.html) extension.
     */
    profile?: string[] | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.type.profile
     */
    _profile?: fhir.FhirElement[] | undefined;
    /**
     * Used when the type is "Reference" or "canonical", and identifies a profile structure or implementation Guide that applies to the target of the reference this element refers to. If any profiles are specified, then the content must conform to at least one of them. The URL can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the target resource SHALL conform to at least one profile defined in the implementation guide.
     */
    targetProfile?: string[] | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.type.targetProfile
     */
    _targetProfile?: fhir.FhirElement[] | undefined;
    /**
     * See [Aggregation Rules](elementdefinition.html#aggregation) for further clarification.
     */
    aggregation?: ResourceAggregationModeValueSetEnum[] | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.type.aggregation
     */
    _aggregation?: fhir.FhirElement[] | undefined;
    /**
     * The base specification never makes a rule as to which form is allowed, but implementation guides may do this. See [Aggregation Rules](elementdefinition.html#aggregation) for further clarification.
     */
    versioning?: ReferenceVersionRulesValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.type.versioning
     */
    _versioning?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ElementDefinitionType - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IElementDefinitionType>);
    /**
     * Extensible-bound Value Set for code
     */
    static codeExtensibleValueSet(): DefinedTypesValueSetType;
    /**
     * Required-bound Value Set for aggregation
     */
    static aggregationRequiredValueSet(): ResourceAggregationModeValueSetType;
    /**
     * Required-bound Value Set for versioning
     */
    static versioningRequiredValueSet(): ReferenceVersionRulesValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Examples will most commonly be present for data where it's not implicitly obvious from either the data type or value set what the values might be.  (I.e. Example values for dates or quantities would generally be unnecessary.)  If the example value is fully populated, the publication tool can generate an instance automatically.
 */
export declare class ElementDefinitionExample extends fhir.FhirElement implements IElementDefinitionExample {
    /**
     * Describes the purpose of this example amoung the set of examples.
     */
    label: string | null;
    /**
     * Extended properties for primitive element: ElementDefinition.example.label
     */
    _label?: fhir.FhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueBase64Binary?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueBase64Binary?: fhir.FhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueBoolean?: fhir.FhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCanonical?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueCanonical?: fhir.FhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCode?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueCode?: fhir.FhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDate?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueDate?: fhir.FhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueDateTime?: fhir.FhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueDecimal?: fhir.FhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueId?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueId?: fhir.FhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueInstant?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueInstant?: fhir.FhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueInteger?: fhir.FhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueMarkdown?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueMarkdown?: fhir.FhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueOid?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueOid?: fhir.FhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valuePositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valuePositiveInt?: fhir.FhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueString?: fhir.FhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueTime?: fhir.FhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueUnsignedInt?: fhir.FhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueUri?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueUri?: fhir.FhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueUrl?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueUrl?: fhir.FhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueUuid?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueUuid?: fhir.FhirElement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueAddress?: fhir.Address | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueAge?: fhir.Age | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueAnnotation?: fhir.Annotation | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueAttachment?: fhir.Attachment | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCoding?: fhir.Coding | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueContactPoint?: fhir.ContactPoint | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCount?: fhir.Count | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDistance?: fhir.Distance | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDuration?: fhir.Duration | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueHumanName?: fhir.HumanName | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueIdentifier?: fhir.Identifier | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueMoney?: fhir.Money | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valuePeriod?: fhir.Period | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueRange?: fhir.Range | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueRatio?: fhir.Ratio | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueReference?: fhir.Reference | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueSampledData?: fhir.SampledData | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueSignature?: fhir.Signature | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueTiming?: fhir.Timing | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueContactDetail?: fhir.ContactDetail | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueContributor?: fhir.Contributor | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDataRequirement?: fhir.DataRequirement | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueExpression?: fhir.Expression | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueParameterDefinition?: fhir.ParameterDefinition | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueRelatedArtifact?: fhir.RelatedArtifact | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueTriggerDefinition?: fhir.TriggerDefinition | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueUsageContext?: fhir.UsageContext | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDosage?: fhir.Dosage | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueMeta?: fhir.Meta | undefined;
    /**
     * Default constructor for ElementDefinitionExample - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IElementDefinitionExample>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Constraints should be declared on the "context" element - the lowest element in the hierarchy that is common to all nodes referenced by the constraint.
 */
export declare class ElementDefinitionConstraint extends fhir.FhirElement implements IElementDefinitionConstraint {
    /**
     * Allows identification of which elements have their cardinalities impacted by the constraint.  Will not be referenced for constraints that do not affect cardinality.
     */
    key: string | null;
    /**
     * Extended properties for primitive element: ElementDefinition.constraint.key
     */
    _key?: fhir.FhirElement | undefined;
    /**
     * To be used if the reason for the constraint might not be intuitive to all implementers.
     */
    requirements?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.constraint.requirements
     */
    _requirements?: fhir.FhirElement | undefined;
    /**
     * This allows constraints to be asserted as "shall" (error) and "should" (warning).
     */
    severity: ConstraintSeverityValueSetEnum | null;
    /**
     * Extended properties for primitive element: ElementDefinition.constraint.severity
     */
    _severity?: fhir.FhirElement | undefined;
    /**
     * Should be expressed in business terms as much as possible.
     */
    human: string | null;
    /**
     * Extended properties for primitive element: ElementDefinition.constraint.human
     */
    _human?: fhir.FhirElement | undefined;
    /**
     * In the absense of an expression, the expression is likely not enforceable by validators, and might be missed by many systems.
     */
    expression?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.constraint.expression
     */
    _expression?: fhir.FhirElement | undefined;
    /**
     * Elements SHALL use "f" as the namespace prefix for the FHIR namespace, and "x" for the xhtml namespace, and SHALL NOT use any other prefixes.     Note: XPath is generally considered not useful because it does not apply to JSON and other formats and because of XSLT implementation issues, and may be removed in the future.
     */
    xpath?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.constraint.xpath
     */
    _xpath?: fhir.FhirElement | undefined;
    /**
     * This is used when, e.g. rendering, where it is not useful to present inherited constraints when rendering the snapshot.
     */
    source?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.constraint.source
     */
    _source?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ElementDefinitionConstraint - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IElementDefinitionConstraint>);
    /**
     * Required-bound Value Set for severity
     */
    static severityRequiredValueSet(): ConstraintSeverityValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * For a CodeableConcept, when no codes are allowed - only text, use a binding of strength "required" with a description explaining that no coded values are allowed and what sort of information to put in the "text" element.
 */
export declare class ElementDefinitionBinding extends fhir.FhirElement implements IElementDefinitionBinding {
    /**
     * For further discussion, see [Using Terminologies](terminologies.html).
     */
    strength: BindingStrengthValueSetEnum | null;
    /**
     * Extended properties for primitive element: ElementDefinition.binding.strength
     */
    _strength?: fhir.FhirElement | undefined;
    /**
     * Describes the intended use of this particular set of codes.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.binding.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * The reference may be version-specific or not (e.g. have a |[version] at the end of the canonical URL).
     */
    valueSet?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.binding.valueSet
     */
    _valueSet?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ElementDefinitionBinding - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IElementDefinitionBinding>);
    /**
     * Required-bound Value Set for strength
     */
    static strengthRequiredValueSet(): BindingStrengthValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Mappings are not necessarily specific enough for safe translation.
 */
export declare class ElementDefinitionMapping extends fhir.FhirElement implements IElementDefinitionMapping {
    /**
     * An internal reference to the definition of a mapping.
     */
    identity: string | null;
    /**
     * Extended properties for primitive element: ElementDefinition.mapping.identity
     */
    _identity?: fhir.FhirElement | undefined;
    /**
     * If omitted, then there can be no expectation of computational interpretation of the mapping.
     */
    language?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.mapping.language
     */
    _language?: fhir.FhirElement | undefined;
    /**
     * For most mappings, the syntax is undefined.  Syntax will be provided for mappings to the RIM.  Multiple mappings may be possible and may include constraints on other resource elements that identify when a particular mapping applies.
     */
    map: string | null;
    /**
     * Extended properties for primitive element: ElementDefinition.mapping.map
     */
    _map?: fhir.FhirElement | undefined;
    /**
     * Comments that provide information about the mapping or its use.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.mapping.comment
     */
    _comment?: fhir.FhirElement | undefined;
    /**
     * Default constructor for ElementDefinitionMapping - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IElementDefinitionMapping>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Captures constraints on each element within the resource, profile, or extension.
 */
export declare class ElementDefinition extends fhir.BackboneElement implements IElementDefinition {
    /**
     * The path identifies the element and is expressed as a "."-separated list of ancestor elements, beginning with the name of the resource or extension.
     */
    path: string | null;
    /**
     * Extended properties for primitive element: ElementDefinition.path
     */
    _path?: fhir.FhirElement | undefined;
    /**
     * In resources, this is rarely used except for special cases where the representation deviates from the normal, and can only be done in the base standard (and profiles must reproduce what the base standard does). This element is used quite commonly in Logical models when the logical models represent a specific serialization format (e.g. CDA, v2 etc.).
     */
    representation?: PropertyRepresentationValueSetEnum[] | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.representation
     */
    _representation?: fhir.FhirElement[] | undefined;
    /**
     * The name SHALL be unique within the structure within the context of the constrained resource element.  (Though to avoid confusion, uniqueness across all elements is recommended.).
     */
    sliceName?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.sliceName
     */
    _sliceName?: fhir.FhirElement | undefined;
    /**
     * If set to true, an ancestor profile SHALL have a slicing definition with this name.  If set to false, no ancestor profile is permitted to have a slicing definition with this name.
     */
    sliceIsConstraining?: boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.sliceIsConstraining
     */
    _sliceIsConstraining?: fhir.FhirElement | undefined;
    /**
     * See also the extension (http://hl7.org/fhir/StructureDefinition/elementdefinition-question)[extension-elementdefinition-question.html].
     */
    label?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.label
     */
    _label?: fhir.FhirElement | undefined;
    /**
     * The concept SHALL be properly aligned with the data element definition and other constraints, as defined in the code system, including relationships, of any code listed here.  Where multiple codes exist in a terminology that could correspond to the data element, the most granular code(s) should be selected, so long as they are not more restrictive than the data element itself. The mappings may be used to provide more or less granular or structured equivalences in the code system.
     */
    code?: fhir.Coding[] | undefined;
    /**
     * The first element in the sequence, the one that carries the slicing, is the definition that applies to all the slices. This is based on the unconstrained element, but can apply any constraints as appropriate. This may include the common constraints on the children of the element.
     */
    slicing?: fhir.ElementDefinitionSlicing | undefined;
    /**
     * It is easy for a different short definition to change the meaning of an element and this can have nasty downstream consequences. Please be careful when providing short definitions in a profile.
     */
    short?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.short
     */
    _short?: fhir.FhirElement | undefined;
    /**
     * It is easy for a different definition to change the meaning of an element and this can have nasty downstream consequences. Please be careful when providing definitions in a profile.
     */
    definition?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.definition
     */
    _definition?: fhir.FhirElement | undefined;
    /**
     * If it is possible to capture usage rules using constraints, that mechanism should be used in preference to this element.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.comment
     */
    _comment?: fhir.FhirElement | undefined;
    /**
     * This element does not describe the usage of the element (that's done in comments), rather it's for traceability of *why* the element is either needed or why the constraints exist as they do.  This may be used to point to source materials or specifications that drove the structure of this data element.
     */
    requirements?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.requirements
     */
    _requirements?: fhir.FhirElement | undefined;
    /**
     * Identifies additional names by which this element might also be known.
     */
    alias?: string[] | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.alias
     */
    _alias?: fhir.FhirElement[] | undefined;
    /**
     * The minimum number of times this element SHALL appear in the instance.
     */
    min?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.min
     */
    _min?: fhir.FhirElement | undefined;
    /**
     * The maximum number of times this element is permitted to appear in the instance.
     */
    max?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.max
     */
    _max?: fhir.FhirElement | undefined;
    /**
     * The base information does not carry any information that could not be determined from the path and related profiles, but making this determination requires both that the related profiles are available, and that the algorithm to determine them be available. For tooling simplicity, the base information must always be populated in element definitions in snap shots, even if it is the same.
     */
    base?: fhir.ElementDefinitionBase | undefined;
    /**
     * ContentReferences can only be defined in specializations, not constrained types, and they cannot be changed and always reference the non-constrained definition.
     */
    contentReference?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.contentReference
     */
    _contentReference?: fhir.FhirElement | undefined;
    /**
     * The Type of the element can be left blank in a differential constraint, in which case the type is inherited from the resource. Abstract types are not permitted to appear as a type when multiple types are listed.  (I.e. Abstract types cannot be part of a choice).
     */
    type?: fhir.ElementDefinitionType[] | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueBase64Binary?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueBase64Binary?: fhir.FhirElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueBoolean?: fhir.FhirElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueCanonical?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueCanonical?: fhir.FhirElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueCode?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueCode?: fhir.FhirElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueDate?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueDate?: fhir.FhirElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueDateTime?: fhir.FhirElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueDecimal?: fhir.FhirElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueId?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueId?: fhir.FhirElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueInstant?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueInstant?: fhir.FhirElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueInteger?: fhir.FhirElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueMarkdown?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueMarkdown?: fhir.FhirElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueOid?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueOid?: fhir.FhirElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValuePositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValuePositiveInt?: fhir.FhirElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueString?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueString?: fhir.FhirElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueTime?: fhir.FhirElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueUnsignedInt?: fhir.FhirElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueUri?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueUri?: fhir.FhirElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueUrl?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueUrl?: fhir.FhirElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueUuid?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueUuid?: fhir.FhirElement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueAddress?: fhir.Address | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueAge?: fhir.Age | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueAnnotation?: fhir.Annotation | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueAttachment?: fhir.Attachment | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueCoding?: fhir.Coding | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueContactPoint?: fhir.ContactPoint | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueCount?: fhir.Count | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueDistance?: fhir.Distance | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueDuration?: fhir.Duration | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueHumanName?: fhir.HumanName | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueIdentifier?: fhir.Identifier | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueMoney?: fhir.Money | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValuePeriod?: fhir.Period | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueQuantity?: fhir.Quantity | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueRange?: fhir.Range | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueRatio?: fhir.Ratio | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueReference?: fhir.Reference | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueSampledData?: fhir.SampledData | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueSignature?: fhir.Signature | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueTiming?: fhir.Timing | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueContactDetail?: fhir.ContactDetail | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueContributor?: fhir.Contributor | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueDataRequirement?: fhir.DataRequirement | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueExpression?: fhir.Expression | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueParameterDefinition?: fhir.ParameterDefinition | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueRelatedArtifact?: fhir.RelatedArtifact | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueTriggerDefinition?: fhir.TriggerDefinition | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueUsageContext?: fhir.UsageContext | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueDosage?: fhir.Dosage | undefined;
    /**
     * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
     * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
     */
    defaultValueMeta?: fhir.Meta | undefined;
    /**
     * Implicit meanings for missing values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. An implicit meaning for a missing value can never be changed, and specifying one has the consequence that constraining its use in profiles eliminates use cases as possibilities, not merely moving them out of scope.
     */
    meaningWhenMissing?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.meaningWhenMissing
     */
    _meaningWhenMissing?: fhir.FhirElement | undefined;
    /**
     * This element can only be asserted on repeating elements and can only be introduced when defining resources or data types.  It can be further refined profiled elements but if absent in the base type, a profile cannot assert meaning.
     */
    orderMeaning?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.orderMeaning
     */
    _orderMeaning?: fhir.FhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedBase64Binary?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedBase64Binary?: fhir.FhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedBoolean?: fhir.FhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedCanonical?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedCanonical?: fhir.FhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedCode?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedCode?: fhir.FhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedDate?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedDate?: fhir.FhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedDateTime?: fhir.FhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedDecimal?: fhir.FhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedId?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedId?: fhir.FhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedInstant?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedInstant?: fhir.FhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedInteger?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedInteger?: fhir.FhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedMarkdown?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedMarkdown?: fhir.FhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedOid?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedOid?: fhir.FhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedPositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedPositiveInt?: fhir.FhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedString?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedString?: fhir.FhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedTime?: fhir.FhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedUnsignedInt?: fhir.FhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedUri?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedUri?: fhir.FhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedUrl?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedUrl?: fhir.FhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedUuid?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedUuid?: fhir.FhirElement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedAddress?: fhir.Address | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedAge?: fhir.Age | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedAnnotation?: fhir.Annotation | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedAttachment?: fhir.Attachment | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedCoding?: fhir.Coding | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedContactPoint?: fhir.ContactPoint | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedCount?: fhir.Count | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedDistance?: fhir.Distance | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedDuration?: fhir.Duration | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedHumanName?: fhir.HumanName | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedIdentifier?: fhir.Identifier | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedMoney?: fhir.Money | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedPeriod?: fhir.Period | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedQuantity?: fhir.Quantity | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedRange?: fhir.Range | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedRatio?: fhir.Ratio | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedReference?: fhir.Reference | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedSampledData?: fhir.SampledData | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedSignature?: fhir.Signature | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedTiming?: fhir.Timing | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedContactDetail?: fhir.ContactDetail | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedContributor?: fhir.Contributor | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedDataRequirement?: fhir.DataRequirement | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedExpression?: fhir.Expression | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedParameterDefinition?: fhir.ParameterDefinition | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedRelatedArtifact?: fhir.RelatedArtifact | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedTriggerDefinition?: fhir.TriggerDefinition | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedUsageContext?: fhir.UsageContext | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedDosage?: fhir.Dosage | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedMeta?: fhir.Meta | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternBase64Binary?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternBase64Binary?: fhir.FhirElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternBoolean?: fhir.FhirElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternCanonical?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternCanonical?: fhir.FhirElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternCode?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternCode?: fhir.FhirElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternDate?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternDate?: fhir.FhirElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternDateTime?: fhir.FhirElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternDecimal?: fhir.FhirElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternId?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternId?: fhir.FhirElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternInstant?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternInstant?: fhir.FhirElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternInteger?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternInteger?: fhir.FhirElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternMarkdown?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternMarkdown?: fhir.FhirElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternOid?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternOid?: fhir.FhirElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternPositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternPositiveInt?: fhir.FhirElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternString?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternString?: fhir.FhirElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternTime?: fhir.FhirElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternUnsignedInt?: fhir.FhirElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternUri?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternUri?: fhir.FhirElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternUrl?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternUrl?: fhir.FhirElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternUuid?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternUuid?: fhir.FhirElement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternAddress?: fhir.Address | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternAge?: fhir.Age | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternAnnotation?: fhir.Annotation | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternAttachment?: fhir.Attachment | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternCoding?: fhir.Coding | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternContactPoint?: fhir.ContactPoint | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternCount?: fhir.Count | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternDistance?: fhir.Distance | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternDuration?: fhir.Duration | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternHumanName?: fhir.HumanName | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternIdentifier?: fhir.Identifier | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternMoney?: fhir.Money | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternPeriod?: fhir.Period | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternQuantity?: fhir.Quantity | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternRange?: fhir.Range | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternRatio?: fhir.Ratio | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternReference?: fhir.Reference | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternSampledData?: fhir.SampledData | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternSignature?: fhir.Signature | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternTiming?: fhir.Timing | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternContactDetail?: fhir.ContactDetail | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternContributor?: fhir.Contributor | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternDataRequirement?: fhir.DataRequirement | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternExpression?: fhir.Expression | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternParameterDefinition?: fhir.ParameterDefinition | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternRelatedArtifact?: fhir.RelatedArtifact | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternTriggerDefinition?: fhir.TriggerDefinition | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternUsageContext?: fhir.UsageContext | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternDosage?: fhir.Dosage | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
     */
    patternMeta?: fhir.Meta | undefined;
    /**
     * Examples will most commonly be present for data where it's not implicitly obvious from either the data type or value set what the values might be.  (I.e. Example values for dates or quantities would generally be unnecessary.)  If the example value is fully populated, the publication tool can generate an instance automatically.
     */
    example?: fhir.ElementDefinitionExample[] | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueDate?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValueDate?: fhir.FhirElement | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValueDateTime?: fhir.FhirElement | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueInstant?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValueInstant?: fhir.FhirElement | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValueTime?: fhir.FhirElement | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValueDecimal?: fhir.FhirElement | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValueInteger?: fhir.FhirElement | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValuePositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValuePositiveInt?: fhir.FhirElement | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValueUnsignedInt?: fhir.FhirElement | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueQuantity?: fhir.Quantity | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueDate?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValueDate?: fhir.FhirElement | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValueDateTime?: fhir.FhirElement | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueInstant?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValueInstant?: fhir.FhirElement | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValueTime?: fhir.FhirElement | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValueDecimal?: fhir.FhirElement | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValueInteger?: fhir.FhirElement | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValuePositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValuePositiveInt?: fhir.FhirElement | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValueUnsignedInt?: fhir.FhirElement | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueQuantity?: fhir.Quantity | undefined;
    /**
     * Receivers are not required to reject instances that exceed the maximum length.  The full length could be stored.  In some cases, data might be truncated, though truncation should be undertaken with care and an understanding of the consequences of doing so. If not specified, there is no conformance expectation for length support.
     */
    maxLength?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxLength
     */
    _maxLength?: fhir.FhirElement | undefined;
    /**
     * A reference to an invariant that may make additional statements about the cardinality or value in the instance.
     */
    condition?: string[] | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.condition
     */
    _condition?: fhir.FhirElement[] | undefined;
    /**
     * Constraints should be declared on the "context" element - the lowest element in the hierarchy that is common to all nodes referenced by the constraint.
     */
    constraint?: fhir.ElementDefinitionConstraint[] | undefined;
    /**
     * "Something useful" is context dependent and impossible to describe in the base FHIR specification. For this reason, tue mustSupport flag is never set to true by the FHIR specification itself - it is only set to true in profiles.  A profile on a type can always make musSupport = true if it is false in the base type but cannot make mustSupport = false if it is true in the base type.   This is done in [Resource Profiles](profiling.html#mustsupport), where the profile labels an element as mustSupport=true. When a profile does this, it SHALL also make clear exactly what kind of "support" is required, as this can mean many things.    Note that an element that has the property IsModifier is not necessarily a "key" element (e.g. one of the important elements to make use of the resource), nor is it automatically mustSupport - however both of these things are more likely to be true for IsModifier elements than for other elements.
     */
    mustSupport?: boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.mustSupport
     */
    _mustSupport?: fhir.FhirElement | undefined;
    /**
     * Only the definition of an element can set IsModifier true - either the specification itself or where an extension is originally defined. Once set, it cannot be changed in derived profiles. An element/extension that has isModifier=true SHOULD also have a minimum cardinality of 1, so that there is no lack of clarity about what to do if it is missing. If it can be missing, the definition SHALL make the meaning of a missing element clear.
     */
    isModifier?: boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.isModifier
     */
    _isModifier?: fhir.FhirElement | undefined;
    /**
     * Explains how that element affects the interpretation of the resource or element that contains it.
     */
    isModifierReason?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.isModifierReason
     */
    _isModifierReason?: fhir.FhirElement | undefined;
    /**
     * Some resources include a set of simple metadata, and some very large data. This element is used to reduce the quantity of data returned in searches. Note that servers may pre-cache summarized resources for optimal performance, so servers might not support per-profile use of the isSummary flag. When a request is made with _summary=true, serailisers only include elements marked as 'isSummary = true'. Other than Attachment.data, all data type properties are included in the summary form. In resource and data type definitions, if an element is at the root or has a parent that is 'mustSupport' and the minimum cardinality is 1 or the element is a modifier, it must be marked as isSummary=true.
     */
    isSummary?: boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.isSummary
     */
    _isSummary?: fhir.FhirElement | undefined;
    /**
     * For a CodeableConcept, when no codes are allowed - only text, use a binding of strength "required" with a description explaining that no coded values are allowed and what sort of information to put in the "text" element.
     */
    binding?: fhir.ElementDefinitionBinding | undefined;
    /**
     * Mappings are not necessarily specific enough for safe translation.
     */
    mapping?: fhir.ElementDefinitionMapping[] | undefined;
    /**
     * Default constructor for ElementDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IElementDefinition>);
    /**
     * Required-bound Value Set for representation
     */
    static representationRequiredValueSet(): PropertyRepresentationValueSetType;
    /**
     * Example-bound Value Set for code
     */
    static codeExampleValueSet(): ObservationCodesValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=ElementDefinition.d.ts.map