// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: AllergyIntolerance

import * as fhir from '../fhir.js';

import { SubstanceCodeValueSet, SubstanceCodeValueSetType,} from '../fhirValueSets/SubstanceCodeValueSet.js';
import { SubstanceCodeValueSetEnum } from '../valueSetEnums.js';
import { ClinicalFindingsValueSet, ClinicalFindingsValueSetType,} from '../fhirValueSets/ClinicalFindingsValueSet.js';
import { ClinicalFindingsValueSetEnum } from '../valueSetEnums.js';
import { ReactionEventSeverityValueSet, ReactionEventSeverityValueSetType,} from '../fhirValueSets/ReactionEventSeverityValueSet.js';
import { ReactionEventSeverityValueSetEnum } from '../valueSetEnums.js';
import { RouteCodesValueSet, RouteCodesValueSetType,} from '../fhirValueSets/RouteCodesValueSet.js';
import { RouteCodesValueSetEnum } from '../valueSetEnums.js';
import { AllergyintoleranceClinicalValueSet, AllergyintoleranceClinicalValueSetType,} from '../fhirValueSets/AllergyintoleranceClinicalValueSet.js';
import { AllergyintoleranceClinicalValueSetEnum } from '../valueSetEnums.js';
import { AllergyintoleranceVerificationValueSet, AllergyintoleranceVerificationValueSetType,} from '../fhirValueSets/AllergyintoleranceVerificationValueSet.js';
import { AllergyintoleranceVerificationValueSetEnum } from '../valueSetEnums.js';
import { AllergyIntoleranceTypeValueSet, AllergyIntoleranceTypeValueSetType,} from '../fhirValueSets/AllergyIntoleranceTypeValueSet.js';
import { AllergyIntoleranceTypeValueSetEnum } from '../valueSetEnums.js';
import { AllergyIntoleranceCategoryValueSet, AllergyIntoleranceCategoryValueSetType,} from '../fhirValueSets/AllergyIntoleranceCategoryValueSet.js';
import { AllergyIntoleranceCategoryValueSetEnum } from '../valueSetEnums.js';
import { AllergyIntoleranceCriticalityValueSet, AllergyIntoleranceCriticalityValueSetType,} from '../fhirValueSets/AllergyIntoleranceCriticalityValueSet.js';
import { AllergyIntoleranceCriticalityValueSetEnum } from '../valueSetEnums.js';
import { AllergyintoleranceCodeValueSet, AllergyintoleranceCodeValueSetType,} from '../fhirValueSets/AllergyintoleranceCodeValueSet.js';
import { AllergyintoleranceCodeValueSetEnum } from '../valueSetEnums.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the AllergyIntoleranceReaction type.
 */
export interface AllergyIntoleranceReactionArgs extends fhir.BackboneElementArgs {
  /**
   * Coding of the specific substance (or pharmaceutical product) with a terminology capable of triggering decision support should be used wherever possible.  The 'code' element allows for the use of a specific substance or pharmaceutical product, or a group or class of substances. In the case of an allergy or intolerance to a class of substances, (for example, "penicillins"), the 'reaction.substance' element could be used to code the specific substance that was identified as having caused the reaction (for example, "amoxycillin"). Duplication of the value in the 'code' and 'reaction.substance' elements is acceptable when a specific substance has been recorded in 'code'.
   */
  substance?: fhir.CodeableConceptArgs|undefined;
  /**
   * Manifestation can be expressed as a single word, phrase or brief description. For example: nausea, rash or no reaction. It is preferable that manifestation should be coded with a terminology, where possible. The values entered here may be used to display on an application screen as part of a list of adverse reactions, as recommended in the UK NHS CUI guidelines.  Terminologies commonly used include, but are not limited to, SNOMED CT or ICD10.
   */
  manifestation: fhir.CodeableConceptArgs[]|null;
  /**
   * Use the description to provide any details of a particular event of the occurred reaction such as circumstances, reaction specifics, what happened before/after. Information, related to the event, but not describing a particular care should be captured in the comment field. For example: at the age of four, the patient was given penicillin for strep throat and subsequently developed severe hives.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Record of the date and/or time of the onset of the Reaction.
   */
  onset?: fhir.FhirDateTime|string|undefined;
  /**
   * It is acknowledged that this assessment is very subjective. There may be some specific practice domains where objective scales have been applied. Objective scales can be included in this model as extensions.
   */
  severity?: ReactionEventSeverityValueSetEnum|undefined;
  /**
   * Coding of the route of exposure with a terminology should be used wherever possible.
   */
  exposureRoute?: fhir.CodeableConceptArgs|undefined;
  /**
   * Use this field to record information indirectly related to a particular event and not captured in the description. For example: Clinical records are no longer available, recorded based on information provided to the patient by her mother and her mother is deceased.
   */
  note?: fhir.AnnotationArgs[]|undefined;
}

/**
 * Details about each adverse reaction event linked to exposure to the identified substance.
 */
export class AllergyIntoleranceReaction extends fhir.BackboneElement {
  readonly __dataType:string = 'AllergyIntoleranceReaction';
  /**
   * Coding of the specific substance (or pharmaceutical product) with a terminology capable of triggering decision support should be used wherever possible.  The 'code' element allows for the use of a specific substance or pharmaceutical product, or a group or class of substances. In the case of an allergy or intolerance to a class of substances, (for example, "penicillins"), the 'reaction.substance' element could be used to code the specific substance that was identified as having caused the reaction (for example, "amoxycillin"). Duplication of the value in the 'code' and 'reaction.substance' elements is acceptable when a specific substance has been recorded in 'code'.
   */
  public substance?: fhir.CodeableConcept|undefined;
  /**
   * Manifestation can be expressed as a single word, phrase or brief description. For example: nausea, rash or no reaction. It is preferable that manifestation should be coded with a terminology, where possible. The values entered here may be used to display on an application screen as part of a list of adverse reactions, as recommended in the UK NHS CUI guidelines.  Terminologies commonly used include, but are not limited to, SNOMED CT or ICD10.
   */
  public manifestation: fhir.CodeableConcept[]|null = [];
  /**
   * Use the description to provide any details of a particular event of the occurred reaction such as circumstances, reaction specifics, what happened before/after. Information, related to the event, but not describing a particular care should be captured in the comment field. For example: at the age of four, the patient was given penicillin for strep throat and subsequently developed severe hives.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * Record of the date and/or time of the onset of the Reaction.
   */
  public onset?: fhir.FhirDateTime|undefined;
  /**
   * It is acknowledged that this assessment is very subjective. There may be some specific practice domains where objective scales have been applied. Objective scales can be included in this model as extensions.
   */
  public severity?: ReactionEventSeverityValueSetEnum|undefined;
  /**
   * Coding of the route of exposure with a terminology should be used wherever possible.
   */
  public exposureRoute?: fhir.CodeableConcept|undefined;
  /**
   * Use this field to record information indirectly related to a particular event and not captured in the description. For example: Clinical records are no longer available, recorded based on information provided to the patient by her mother and her mother is deceased.
   */
  public note?: fhir.Annotation[]|undefined = [];
  /**
   * Default constructor for AllergyIntoleranceReaction - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<AllergyIntoleranceReactionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['substance']) { this.substance = new fhir.CodeableConcept(source.substance); }
    if (source['manifestation']) { this.manifestation = source.manifestation.map((x) => new fhir.CodeableConcept(x)); }
    else { this.manifestation = null; }
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['onset']) { this.onset = new fhir.FhirDateTime({value: source.onset}); }
    if (source['severity']) { this.severity = source.severity; }
    if (source['exposureRoute']) { this.exposureRoute = new fhir.CodeableConcept(source.exposureRoute); }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
  }
  /**
   * Example-bound Value Set for substance
   */
  public static substanceExampleValueSet():SubstanceCodeValueSetType {
    return SubstanceCodeValueSet;
  }
  /**
   * Example-bound Value Set for manifestation
   */
  public static manifestationExampleValueSet():ClinicalFindingsValueSetType {
    return ClinicalFindingsValueSet;
  }
  /**
   * Required-bound Value Set for severity
   */
  public static severityRequiredValueSet():ReactionEventSeverityValueSetType {
    return ReactionEventSeverityValueSet;
  }
  /**
   * Example-bound Value Set for exposureRoute
   */
  public static exposureRouteExampleValueSet():RouteCodesValueSetType {
    return RouteCodesValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["substance"]) { outcome.issue!.push(...this.substance.doModelValidation().issue!); }
    if (!this['manifestation']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property manifestation:fhir.CodeableConcept[] fhir: AllergyIntolerance.reaction.manifestation:CodeableConcept", }));
    } else if (!Array.isArray(this.manifestation)) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.StructuralIssue,  diagnostics: "Found scalar in array property manifestation:fhir.CodeableConcept[] fhir: AllergyIntolerance.reaction.manifestation:CodeableConcept", }));
    } else if (this.manifestation.length === 0) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property manifestation:fhir.CodeableConcept[] fhir: AllergyIntolerance.reaction.manifestation:CodeableConcept", }));
    }
    if (this["manifestation"]) { this.manifestation.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["description"]) { outcome.issue!.push(...this.description.doModelValidation().issue!); }
    if (this["onset"]) { outcome.issue!.push(...this.onset.doModelValidation().issue!); }
    if (this["exposureRoute"]) { outcome.issue!.push(...this.exposureRoute.doModelValidation().issue!); }
    if (this["note"]) { this.note.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
/**
 * Valid arguments for the AllergyIntolerance type.
 */
export interface AllergyIntoleranceArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "AllergyIntolerance"|undefined;
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * Refer to [discussion](extensibility.html#Special-Case) if clincalStatus is missing data.
   * The data type is CodeableConcept because clinicalStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.
   */
  clinicalStatus?: fhir.CodeableConceptArgs|undefined;
  /**
   * The data type is CodeableConcept because verificationStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.
   */
  verificationStatus?: fhir.CodeableConceptArgs|undefined;
  /**
   * Allergic (typically immune-mediated) reactions have been traditionally regarded as an indicator for potential escalation to significant future risk. Contemporary knowledge suggests that some reactions previously thought to be immune-mediated are, in fact, non-immune, but in some cases can still pose a life threatening risk. It is acknowledged that many clinicians might not be in a position to distinguish the mechanism of a particular reaction. Often the term "allergy" is used rather generically and may overlap with the use of "intolerance" - in practice the boundaries between these two concepts might not be well-defined or understood. This data element is included nevertheless, because many legacy systems have captured this attribute. Immunologic testing may provide supporting evidence for the basis of the reaction and the causative substance, but no tests are 100% sensitive or specific for sensitivity to a particular substance. If, as is commonly the case, it is unclear whether the reaction is due to an allergy or an intolerance, then the type element should be omitted from the resource.
   */
  type?: AllergyIntoleranceTypeValueSetEnum|undefined;
  /**
   * This data element has been included because it is currently being captured in some clinical systems. This data can be derived from the substance where coding systems are used, and is effectively redundant in that situation.  When searching on category, consider the implications of AllergyIntolerance resources without a category.  For example, when searching on category = medication, medication allergies that don't have a category valued will not be returned.  Refer to [search](search.html) for more information on how to search category with a :missing modifier to get allergies that don't have a category.  Additionally, category should be used with caution because category can be subjective based on the sender.
   */
  category?: AllergyIntoleranceCategoryValueSetEnum[]|undefined;
  /**
   * The default criticality value for any propensity to an adverse reaction should be 'Low Risk', indicating at the very least a relative contraindication to deliberate or voluntary exposure to the substance. 'High Risk' is flagged if the clinician has identified a propensity for a more serious or potentially life-threatening reaction, such as anaphylaxis, and implies an absolute contraindication to deliberate or voluntary exposure to the substance. If this element is missing, the criticality is unknown (though it may be known elsewhere).  Systems that capture a severity at the condition level are actually representing the concept of criticality whereas the severity documented at the reaction level is representing the true reaction severity.  Existing systems that are capturing both condition criticality and reaction severity may use the term "severity" to represent both.  Criticality is the worst it could be in the future (i.e. situation-agnostic) whereas severity is situation-dependent.
   */
  criticality?: AllergyIntoleranceCriticalityValueSetEnum|undefined;
  /**
   * It is strongly recommended that this element be populated using a terminology, where possible. For example, some terminologies used include RxNorm, SNOMED CT, DM+D, NDFRT, ICD-9, IDC-10, UNII, and ATC. Plain text should only be used if there is no appropriate terminology available. Additional details can be specified in the text.
   * When a substance or product code is specified for the 'code' element, the "default" semantic context is that this is a positive statement of an allergy or intolerance (depending on the value of the 'type' element, if present) condition to the specified substance/product.  In the corresponding SNOMED CT allergy model, the specified substance/product is the target (destination) of the "Causative agent" relationship.
   * The 'substanceExposureRisk' extension is available as a structured and more flexible alternative to the 'code' element for making positive or negative allergy or intolerance statements.  This extension provides the capability to make "no known allergy" (or "no risk of adverse reaction") statements regarding any coded substance/product (including cases when a pre-coordinated "no allergy to x" concept for that substance/product does not exist).  If the 'substanceExposureRisk' extension is present, the AllergyIntolerance.code element SHALL be omitted.
   */
  code?: fhir.CodeableConceptArgs|undefined;
  /**
   * The patient who has the allergy or intolerance.
   */
  patient: fhir.ReferenceArgs|null;
  /**
   * The encounter when the allergy or intolerance was asserted.
   */
  encounter?: fhir.ReferenceArgs|undefined;
  /**
   * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   */
  onset?: fhir.FhirDateTime|fhir.Age|fhir.Period|fhir.Range|fhir.FhirString|undefined;
  /**
   * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   */
  onsetDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   */
  onsetAge?: fhir.AgeArgs|undefined;
  /**
   * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   */
  onsetPeriod?: fhir.PeriodArgs|undefined;
  /**
   * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   */
  onsetRange?: fhir.RangeArgs|undefined;
  /**
   * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   */
  onsetString?: fhir.FhirString|string|undefined;
  /**
   * The recordedDate represents when this particular AllergyIntolerance record was created in the system, which is often a system-generated date.
   */
  recordedDate?: fhir.FhirDateTime|string|undefined;
  /**
   * Individual who recorded the record and takes responsibility for its content.
   */
  recorder?: fhir.ReferenceArgs|undefined;
  /**
   * The recorder takes responsibility for the content, but can reference the source from where they got it.
   */
  asserter?: fhir.ReferenceArgs|undefined;
  /**
   * This date may be replicated by one of the Onset of Reaction dates. Where a textual representation of the date of last occurrence is required e.g. 'In Childhood, '10 years ago' the Comment element should be used.
   */
  lastOccurrence?: fhir.FhirDateTime|string|undefined;
  /**
   * For example: including reason for flagging a seriousness of 'High Risk'; and instructions related to future exposure or administration of the substance, such as administration within an Intensive Care Unit or under corticosteroid cover. The notes should be related to an allergy or intolerance as a condition in general and not related to any particular episode of it. For episode notes and descriptions, use AllergyIntolerance.event.description and  AllergyIntolerance.event.notes.
   */
  note?: fhir.AnnotationArgs[]|undefined;
  /**
   * Details about each adverse reaction event linked to exposure to the identified substance.
   */
  reaction?: fhir.AllergyIntoleranceReactionArgs[]|undefined;
}

/**
 * Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance.
 */
export class AllergyIntolerance extends fhir.DomainResource {
  readonly __dataType:string = 'AllergyIntolerance';
  /**
   * Resource Type Name
   */
  public resourceType: "AllergyIntolerance";
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  public identifier?: fhir.Identifier[]|undefined = [];
  /**
   * Refer to [discussion](extensibility.html#Special-Case) if clincalStatus is missing data.
   * The data type is CodeableConcept because clinicalStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.
   */
  public clinicalStatus?: fhir.CodeableConcept|undefined;
  /**
   * The data type is CodeableConcept because verificationStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.
   */
  public verificationStatus?: fhir.CodeableConcept|undefined;
  /**
   * Allergic (typically immune-mediated) reactions have been traditionally regarded as an indicator for potential escalation to significant future risk. Contemporary knowledge suggests that some reactions previously thought to be immune-mediated are, in fact, non-immune, but in some cases can still pose a life threatening risk. It is acknowledged that many clinicians might not be in a position to distinguish the mechanism of a particular reaction. Often the term "allergy" is used rather generically and may overlap with the use of "intolerance" - in practice the boundaries between these two concepts might not be well-defined or understood. This data element is included nevertheless, because many legacy systems have captured this attribute. Immunologic testing may provide supporting evidence for the basis of the reaction and the causative substance, but no tests are 100% sensitive or specific for sensitivity to a particular substance. If, as is commonly the case, it is unclear whether the reaction is due to an allergy or an intolerance, then the type element should be omitted from the resource.
   */
  public type?: AllergyIntoleranceTypeValueSetEnum|undefined;
  /**
   * This data element has been included because it is currently being captured in some clinical systems. This data can be derived from the substance where coding systems are used, and is effectively redundant in that situation.  When searching on category, consider the implications of AllergyIntolerance resources without a category.  For example, when searching on category = medication, medication allergies that don't have a category valued will not be returned.  Refer to [search](search.html) for more information on how to search category with a :missing modifier to get allergies that don't have a category.  Additionally, category should be used with caution because category can be subjective based on the sender.
   */
  public category?: AllergyIntoleranceCategoryValueSetEnum[]|undefined = [];
  /**
   * The default criticality value for any propensity to an adverse reaction should be 'Low Risk', indicating at the very least a relative contraindication to deliberate or voluntary exposure to the substance. 'High Risk' is flagged if the clinician has identified a propensity for a more serious or potentially life-threatening reaction, such as anaphylaxis, and implies an absolute contraindication to deliberate or voluntary exposure to the substance. If this element is missing, the criticality is unknown (though it may be known elsewhere).  Systems that capture a severity at the condition level are actually representing the concept of criticality whereas the severity documented at the reaction level is representing the true reaction severity.  Existing systems that are capturing both condition criticality and reaction severity may use the term "severity" to represent both.  Criticality is the worst it could be in the future (i.e. situation-agnostic) whereas severity is situation-dependent.
   */
  public criticality?: AllergyIntoleranceCriticalityValueSetEnum|undefined;
  /**
   * It is strongly recommended that this element be populated using a terminology, where possible. For example, some terminologies used include RxNorm, SNOMED CT, DM+D, NDFRT, ICD-9, IDC-10, UNII, and ATC. Plain text should only be used if there is no appropriate terminology available. Additional details can be specified in the text.
   * When a substance or product code is specified for the 'code' element, the "default" semantic context is that this is a positive statement of an allergy or intolerance (depending on the value of the 'type' element, if present) condition to the specified substance/product.  In the corresponding SNOMED CT allergy model, the specified substance/product is the target (destination) of the "Causative agent" relationship.
   * The 'substanceExposureRisk' extension is available as a structured and more flexible alternative to the 'code' element for making positive or negative allergy or intolerance statements.  This extension provides the capability to make "no known allergy" (or "no risk of adverse reaction") statements regarding any coded substance/product (including cases when a pre-coordinated "no allergy to x" concept for that substance/product does not exist).  If the 'substanceExposureRisk' extension is present, the AllergyIntolerance.code element SHALL be omitted.
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * The patient who has the allergy or intolerance.
   */
  public patient: fhir.Reference|null;
  /**
   * The encounter when the allergy or intolerance was asserted.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   */
  public onset?: (fhir.FhirDateTime|fhir.Age|fhir.Period|fhir.Range|fhir.FhirString)|undefined;
  readonly __onsetIsChoice:true = true;
  /**
   * The recordedDate represents when this particular AllergyIntolerance record was created in the system, which is often a system-generated date.
   */
  public recordedDate?: fhir.FhirDateTime|undefined;
  /**
   * Individual who recorded the record and takes responsibility for its content.
   */
  public recorder?: fhir.Reference|undefined;
  /**
   * The recorder takes responsibility for the content, but can reference the source from where they got it.
   */
  public asserter?: fhir.Reference|undefined;
  /**
   * This date may be replicated by one of the Onset of Reaction dates. Where a textual representation of the date of last occurrence is required e.g. 'In Childhood, '10 years ago' the Comment element should be used.
   */
  public lastOccurrence?: fhir.FhirDateTime|undefined;
  /**
   * For example: including reason for flagging a seriousness of 'High Risk'; and instructions related to future exposure or administration of the substance, such as administration within an Intensive Care Unit or under corticosteroid cover. The notes should be related to an allergy or intolerance as a condition in general and not related to any particular episode of it. For episode notes and descriptions, use AllergyIntolerance.event.description and  AllergyIntolerance.event.notes.
   */
  public note?: fhir.Annotation[]|undefined = [];
  /**
   * Details about each adverse reaction event linked to exposure to the identified substance.
   */
  public reaction?: fhir.AllergyIntoleranceReaction[]|undefined = [];
  /**
   * Default constructor for AllergyIntolerance - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<AllergyIntoleranceArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'AllergyIntolerance';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['clinicalStatus']) { this.clinicalStatus = new fhir.CodeableConcept(source.clinicalStatus); }
    if (source['verificationStatus']) { this.verificationStatus = new fhir.CodeableConcept(source.verificationStatus); }
    if (source['type']) { this.type = source.type; }
    if (source['category']) { this.category = source.category.map((x) => x); }
    if (source['criticality']) { this.criticality = source.criticality; }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    if (source['patient']) { this.patient = new fhir.Reference(source.patient); }
    else { this.patient = null; }
    if (source['encounter']) { this.encounter = new fhir.Reference(source.encounter); }
    if (source['onset']) { this.onset = source.onset; }
    else if (source['onsetDateTime']) { this.onset = new fhir.FhirDateTime({value: source.onsetDateTime}); }
    else if (source['onsetAge']) { this.onset = new fhir.Age(source.onsetAge); }
    else if (source['onsetPeriod']) { this.onset = new fhir.Period(source.onsetPeriod); }
    else if (source['onsetRange']) { this.onset = new fhir.Range(source.onsetRange); }
    else if (source['onsetString']) { this.onset = new fhir.FhirString({value: source.onsetString}); }
    if (source['recordedDate']) { this.recordedDate = new fhir.FhirDateTime({value: source.recordedDate}); }
    if (source['recorder']) { this.recorder = new fhir.Reference(source.recorder); }
    if (source['asserter']) { this.asserter = new fhir.Reference(source.asserter); }
    if (source['lastOccurrence']) { this.lastOccurrence = new fhir.FhirDateTime({value: source.lastOccurrence}); }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
    if (source['reaction']) { this.reaction = source.reaction.map((x) => new fhir.AllergyIntoleranceReaction(x)); }
  }
  /**
   * Required-bound Value Set for clinicalStatus
   */
  public static clinicalStatusRequiredValueSet():AllergyintoleranceClinicalValueSetType {
    return AllergyintoleranceClinicalValueSet;
  }
  /**
   * Required-bound Value Set for verificationStatus
   */
  public static verificationStatusRequiredValueSet():AllergyintoleranceVerificationValueSetType {
    return AllergyintoleranceVerificationValueSet;
  }
  /**
   * Required-bound Value Set for type
   */
  public static typeRequiredValueSet():AllergyIntoleranceTypeValueSetType {
    return AllergyIntoleranceTypeValueSet;
  }
  /**
   * Required-bound Value Set for category
   */
  public static categoryRequiredValueSet():AllergyIntoleranceCategoryValueSetType {
    return AllergyIntoleranceCategoryValueSet;
  }
  /**
   * Required-bound Value Set for criticality
   */
  public static criticalityRequiredValueSet():AllergyIntoleranceCriticalityValueSetType {
    return AllergyIntoleranceCriticalityValueSet;
  }
  /**
   * Example-bound Value Set for code
   */
  public static codeExampleValueSet():AllergyintoleranceCodeValueSetType {
    return AllergyintoleranceCodeValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['resourceType']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property resourceType:'AllergyIntolerance' fhir: AllergyIntolerance.resourceType:'AllergyIntolerance'", }));
    }
    if (this["identifier"]) { this.identifier.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["clinicalStatus"]) { outcome.issue!.push(...this.clinicalStatus.doModelValidation().issue!); }
    if (this["verificationStatus"]) { outcome.issue!.push(...this.verificationStatus.doModelValidation().issue!); }
    if (this["code"]) { outcome.issue!.push(...this.code.doModelValidation().issue!); }
    if (!this['patient']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property patient:fhir.Reference fhir: AllergyIntolerance.patient:Reference", }));
    }
    if (this["patient"]) { outcome.issue!.push(...this.patient.doModelValidation().issue!); }
    if (this["encounter"]) { outcome.issue!.push(...this.encounter.doModelValidation().issue!); }
    if (this["recordedDate"]) { outcome.issue!.push(...this.recordedDate.doModelValidation().issue!); }
    if (this["recorder"]) { outcome.issue!.push(...this.recorder.doModelValidation().issue!); }
    if (this["asserter"]) { outcome.issue!.push(...this.asserter.doModelValidation().issue!); }
    if (this["lastOccurrence"]) { outcome.issue!.push(...this.lastOccurrence.doModelValidation().issue!); }
    if (this["note"]) { this.note.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["reaction"]) { this.reaction.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
