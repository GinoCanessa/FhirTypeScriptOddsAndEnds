// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../optionalmodels'
import * as fhirInterfaces from '../optionalinterfaces'
/**
 * Details about each adverse reaction event linked to exposure to the identified substance.
 */
export class AllergyIntoleranceReaction extends fhirModels.BackboneElement implements fhirInterfaces.IAllergyIntoleranceReaction {
  /**
   * Use the description to provide any details of a particular event of the occurred reaction such as circumstances, reaction specifics, what happened before/after. Information, related to the event, but not describing a particular care should be captured in the comment field. For example: at the age of four, the patient was given penicillin for strep throat and subsequently developed severe hives.
   */
  description?: string|undefined;
  _description?: fhirModels.Element|undefined;
  /**
   * Coding of the route of exposure with a terminology should be used wherever possible.
   */
  exposureRoute?: fhirModels.CodeableConcept|undefined;
  /**
   * Manifestation can be expressed as a single word, phrase or brief description. For example: nausea, rash or no reaction. It is preferable that manifestation should be coded with a terminology, where possible. The values entered here may be used to display on an application screen as part of a list of adverse reactions, as recommended in the UK NHS CUI guidelines.  Terminologies commonly used include, but are not limited to, SNOMED CT or ICD10.
   */
  manifestation?: fhirModels.CodeableConcept[]|undefined;
  /**
   * Use this field to record information indirectly related to a particular event and not captured in the description. For example: Clinical records are no longer available, recorded based on information provided to the patient by her mother and her mother is deceased.
   */
  note?: fhirModels.Annotation[]|undefined;
  /**
   * Record of the date and/or time of the onset of the Reaction.
   */
  onset?: string|undefined;
  _onset?: fhirModels.Element|undefined;
  /**
   * It is acknowledged that this assessment is very subjective. There may be some specific practice domains where objective scales have been applied. Objective scales can be included in this model as extensions.
   */
  severity?: AllergyIntoleranceReactionSeverityEnum|undefined;
  _severity?: fhirModels.Element|undefined;
  /**
   * Coding of the specific substance (or pharmaceutical product) with a terminology capable of triggering decision support should be used wherever possible.  The 'code' element allows for the use of a specific substance or pharmaceutical product, or a group or class of substances. In the case of an allergy or intolerance to a class of substances, (for example, "penicillins"), the 'reaction.substance' element could be used to code the specific substance that was identified as having caused the reaction (for example, "amoxycillin"). Duplication of the value in the 'code' and 'reaction.substance' elements is acceptable when a specific substance has been recorded in 'code'.
   */
  substance?: fhirModels.CodeableConcept|undefined;
  /**
   * Default constructor for AllergyIntoleranceReaction from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IAllergyIntoleranceReaction>) {
    super(source);
    if (source["description"] !== undefined) { this.description = source.description; }
    if (source["_description"] !== undefined) { this._description = new fhirModels.Element(source._description); }
    if (source["exposureRoute"] !== undefined) { this.exposureRoute = new fhirModels.CodeableConcept(source.exposureRoute); }
    if (source["manifestation"] !== undefined) { this.manifestation = source.manifestation.map((x) => new fhirModels.CodeableConcept(x)); }
    if (source["note"] !== undefined) { this.note = source.note.map((x) => new fhirModels.Annotation(x)); }
    if (source["onset"] !== undefined) { this.onset = source.onset; }
    if (source["_onset"] !== undefined) { this._onset = new fhirModels.Element(source._onset); }
    if (source["severity"] !== undefined) { this.severity = source.severity; }
    if (source["_severity"] !== undefined) { this._severity = new fhirModels.Element(source._severity); }
    if (source["substance"] !== undefined) { this.substance = new fhirModels.CodeableConcept(source.substance); }
  }
  /**
   * Factory function to create a AllergyIntoleranceReaction from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IAllergyIntoleranceReaction):AllergyIntoleranceReaction {
    var dest:AllergyIntoleranceReaction = new AllergyIntoleranceReaction(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `AllergyIntoleranceReaction is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current AllergyIntoleranceReaction contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if ((this["manifestation"] === undefined) || (this["manifestation"].length === 0)) { missingElements.push("manifestation"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * Code Values for the AllergyIntolerance.reaction.severity field
 */
export enum AllergyIntoleranceReactionSeverityEnum {
  MILD = "mild",
  MODERATE = "moderate",
  SEVERE = "severe",
}
/**
 * Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance.
 */
export class AllergyIntolerance extends fhirModels.DomainResource implements fhirInterfaces.IAllergyIntolerance {
  /**
   * Resource Type Name
   */
  readonly resourceType = "AllergyIntolerance";
  /**
   * The recorder takes responsibility for the content, but can reference the source from where they got it.
   */
  asserter?: fhirModels.Reference|undefined;
  /**
   * This data element has been included because it is currently being captured in some clinical systems. This data can be derived from the substance where coding systems are used, and is effectively redundant in that situation.  When searching on category, consider the implications of AllergyIntolerance resources without a category.  For example, when searching on category = medication, medication allergies that don't have a category valued will not be returned.  Refer to [search](search.html) for more information on how to search category with a :missing modifier to get allergies that don't have a category.  Additionally, category should be used with caution because category can be subjective based on the sender.
   */
  category?: AllergyIntoleranceCategoryEnum[]|undefined;
  _category?: fhirModels.Element[]|undefined;
  /**
   * Refer to [discussion](extensibility.html#Special-Case) if clincalStatus is missing data.
   * The data type is CodeableConcept because clinicalStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.
   */
  clinicalStatus?: fhirModels.CodeableConcept|undefined;
  /**
   * It is strongly recommended that this element be populated using a terminology, where possible. For example, some terminologies used include RxNorm, SNOMED CT, DM+D, NDFRT, ICD-9, IDC-10, UNII, and ATC. Plain text should only be used if there is no appropriate terminology available. Additional details can be specified in the text.
   * When a substance or product code is specified for the 'code' element, the "default" semantic context is that this is a positive statement of an allergy or intolerance (depending on the value of the 'type' element, if present) condition to the specified substance/product.  In the corresponding SNOMED CT allergy model, the specified substance/product is the target (destination) of the "Causative agent" relationship.
   * The 'substanceExposureRisk' extension is available as a structured and more flexible alternative to the 'code' element for making positive or negative allergy or intolerance statements.  This extension provides the capability to make "no known allergy" (or "no risk of adverse reaction") statements regarding any coded substance/product (including cases when a pre-coordinated "no allergy to x" concept for that substance/product does not exist).  If the 'substanceExposureRisk' extension is present, the AllergyIntolerance.code element SHALL be omitted.
   */
  code?: fhirModels.CodeableConcept|undefined;
  /**
   * The default criticality value for any propensity to an adverse reaction should be 'Low Risk', indicating at the very least a relative contraindication to deliberate or voluntary exposure to the substance. 'High Risk' is flagged if the clinician has identified a propensity for a more serious or potentially life-threatening reaction, such as anaphylaxis, and implies an absolute contraindication to deliberate or voluntary exposure to the substance. If this element is missing, the criticality is unknown (though it may be known elsewhere).  Systems that capture a severity at the condition level are actually representing the concept of criticality whereas the severity documented at the reaction level is representing the true reaction severity.  Existing systems that are capturing both condition criticality and reaction severity may use the term "severity" to represent both.  Criticality is the worst it could be in the future (i.e. situation-agnostic) whereas severity is situation-dependent.
   */
  criticality?: AllergyIntoleranceCriticalityEnum|undefined;
  _criticality?: fhirModels.Element|undefined;
  /**
   * The encounter when the allergy or intolerance was asserted.
   */
  encounter?: fhirModels.Reference|undefined;
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  identifier?: fhirModels.Identifier[]|undefined;
  /**
   * This date may be replicated by one of the Onset of Reaction dates. Where a textual representation of the date of last occurrence is required e.g. 'In Childhood, '10 years ago' the Comment element should be used.
   */
  lastOccurrence?: string|undefined;
  _lastOccurrence?: fhirModels.Element|undefined;
  /**
   * For example: including reason for flagging a seriousness of 'High Risk'; and instructions related to future exposure or administration of the substance, such as administration within an Intensive Care Unit or under corticosteroid cover. The notes should be related to an allergy or intolerance as a condition in general and not related to any particular episode of it. For episode notes and descriptions, use AllergyIntolerance.event.description and  AllergyIntolerance.event.notes.
   */
  note?: fhirModels.Annotation[]|undefined;
  /**
   * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   */
  onsetDateTime?: string|undefined;
  _onsetDateTime?: fhirModels.Element|undefined;
  /**
   * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   */
  onsetAge?: fhirModels.Age|undefined;
  /**
   * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   */
  onsetPeriod?: fhirModels.Period|undefined;
  /**
   * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   */
  onsetRange?: fhirModels.Range|undefined;
  /**
   * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   */
  onsetString?: string|undefined;
  _onsetString?: fhirModels.Element|undefined;
  /**
   * The patient who has the allergy or intolerance.
   */
  patient?: fhirModels.Reference|undefined;
  /**
   * Details about each adverse reaction event linked to exposure to the identified substance.
   */
  reaction?: fhirModels.AllergyIntoleranceReaction[]|undefined;
  /**
   * The recordedDate represents when this particular AllergyIntolerance record was created in the system, which is often a system-generated date.
   */
  recordedDate?: string|undefined;
  _recordedDate?: fhirModels.Element|undefined;
  /**
   * Individual who recorded the record and takes responsibility for its content.
   */
  recorder?: fhirModels.Reference|undefined;
  /**
   * Allergic (typically immune-mediated) reactions have been traditionally regarded as an indicator for potential escalation to significant future risk. Contemporary knowledge suggests that some reactions previously thought to be immune-mediated are, in fact, non-immune, but in some cases can still pose a life threatening risk. It is acknowledged that many clinicians might not be in a position to distinguish the mechanism of a particular reaction. Often the term "allergy" is used rather generically and may overlap with the use of "intolerance" - in practice the boundaries between these two concepts might not be well-defined or understood. This data element is included nevertheless, because many legacy systems have captured this attribute. Immunologic testing may provide supporting evidence for the basis of the reaction and the causative substance, but no tests are 100% sensitive or specific for sensitivity to a particular substance. If, as is commonly the case, it is unclear whether the reaction is due to an allergy or an intolerance, then the type element should be omitted from the resource.
   */
  type?: AllergyIntoleranceTypeEnum|undefined;
  _type?: fhirModels.Element|undefined;
  /**
   * The data type is CodeableConcept because verificationStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.
   */
  verificationStatus?: fhirModels.CodeableConcept|undefined;
  /**
   * Default constructor for AllergyIntolerance from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IAllergyIntolerance>) {
    super(source);
    if ((source['resourceType'] !== "AllergyIntolerance") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a AllergyIntolerance'; }
    if (source["asserter"] !== undefined) { this.asserter = new fhirModels.Reference(source.asserter); }
    if (source["category"] !== undefined) { this.category = source.category.map((x) => (x)); }
    if (source["_category"] !== undefined) { this._category = source._category.map((x) => new fhirModels.Element(x)); }
    if (source["clinicalStatus"] !== undefined) { this.clinicalStatus = new fhirModels.CodeableConcept(source.clinicalStatus); }
    if (source["code"] !== undefined) { this.code = new fhirModels.CodeableConcept(source.code); }
    if (source["criticality"] !== undefined) { this.criticality = source.criticality; }
    if (source["_criticality"] !== undefined) { this._criticality = new fhirModels.Element(source._criticality); }
    if (source["encounter"] !== undefined) { this.encounter = new fhirModels.Reference(source.encounter); }
    if (source["identifier"] !== undefined) { this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x)); }
    if (source["lastOccurrence"] !== undefined) { this.lastOccurrence = source.lastOccurrence; }
    if (source["_lastOccurrence"] !== undefined) { this._lastOccurrence = new fhirModels.Element(source._lastOccurrence); }
    if (source["note"] !== undefined) { this.note = source.note.map((x) => new fhirModels.Annotation(x)); }
    if (source["onsetDateTime"] !== undefined) { this.onsetDateTime = source.onsetDateTime; }
    if (source["_onsetDateTime"] !== undefined) { this._onsetDateTime = new fhirModels.Element(source._onsetDateTime); }
    if (source["onsetAge"] !== undefined) { this.onsetAge = new fhirModels.Age(source.onsetAge); }
    if (source["onsetPeriod"] !== undefined) { this.onsetPeriod = new fhirModels.Period(source.onsetPeriod); }
    if (source["onsetRange"] !== undefined) { this.onsetRange = new fhirModels.Range(source.onsetRange); }
    if (source["onsetString"] !== undefined) { this.onsetString = source.onsetString; }
    if (source["_onsetString"] !== undefined) { this._onsetString = new fhirModels.Element(source._onsetString); }
    if (source["patient"] !== undefined) { this.patient = new fhirModels.Reference(source.patient); }
    if (source["reaction"] !== undefined) { this.reaction = source.reaction.map((x) => new fhirModels.AllergyIntoleranceReaction(x)); }
    if (source["recordedDate"] !== undefined) { this.recordedDate = source.recordedDate; }
    if (source["_recordedDate"] !== undefined) { this._recordedDate = new fhirModels.Element(source._recordedDate); }
    if (source["recorder"] !== undefined) { this.recorder = new fhirModels.Reference(source.recorder); }
    if (source["type"] !== undefined) { this.type = source.type; }
    if (source["_type"] !== undefined) { this._type = new fhirModels.Element(source._type); }
    if (source["verificationStatus"] !== undefined) { this.verificationStatus = new fhirModels.CodeableConcept(source.verificationStatus); }
  }
  /**
   * Factory function to create a AllergyIntolerance from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IAllergyIntolerance):AllergyIntolerance {
    var dest:AllergyIntolerance = new AllergyIntolerance(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `AllergyIntolerance is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current AllergyIntolerance contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["patient"] === undefined) { missingElements.push("patient"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * Code Values for the AllergyIntolerance.category field
 */
export enum AllergyIntoleranceCategoryEnum {
  FOOD = "food",
  MEDICATION = "medication",
  ENVIRONMENT = "environment",
  BIOLOGIC = "biologic",
}
/**
 * Code Values for the AllergyIntolerance.criticality field
 */
export enum AllergyIntoleranceCriticalityEnum {
  LOW = "low",
  HIGH = "high",
  UNABLE_TO_ASSESS = "unable-to-assess",
}
/**
 * Code Values for the AllergyIntolerance.type field
 */
export enum AllergyIntoleranceTypeEnum {
  ALLERGY = "allergy",
  INTOLERANCE = "intolerance",
}
