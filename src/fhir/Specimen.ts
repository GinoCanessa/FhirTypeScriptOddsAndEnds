// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Specimen

import * as fhir from '../fhir.js';

import { SpecimenCollectionMethodValueSet, SpecimenCollectionMethodValueSetType,} from '../fhirValueSets/SpecimenCollectionMethodValueSet.js';
import { SpecimenCollectionMethodValueSetEnum } from '../valueSetEnums.js';
import { BodySiteValueSet, BodySiteValueSetType,} from '../fhirValueSets/BodySiteValueSet.js';
import { BodySiteValueSetEnum } from '../valueSetEnums.js';
import { SpecimenProcessingProcedureValueSet, SpecimenProcessingProcedureValueSetType,} from '../fhirValueSets/SpecimenProcessingProcedureValueSet.js';
import { SpecimenProcessingProcedureValueSetEnum } from '../valueSetEnums.js';
import { SpecimenContainerTypeValueSet, SpecimenContainerTypeValueSetType,} from '../fhirValueSets/SpecimenContainerTypeValueSet.js';
import { SpecimenContainerTypeValueSetEnum } from '../valueSetEnums.js';
import { SpecimenStatusValueSet, SpecimenStatusValueSetType,} from '../fhirValueSets/SpecimenStatusValueSet.js';
import { SpecimenStatusValueSetEnum } from '../valueSetEnums.js';
import { V20487ValueSet, V20487ValueSetType,} from '../fhirValueSets/V20487ValueSet.js';
import { V20487ValueSetEnum } from '../valueSetEnums.js';
import { V20493ValueSet, V20493ValueSetType,} from '../fhirValueSets/V20493ValueSet.js';
import { V20493ValueSetEnum } from '../valueSetEnums.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the SpecimenCollection type.
 */
export interface SpecimenCollectionArgs extends fhir.BackboneElementArgs {
  /**
   * Person who collected the specimen.
   */
  collector?: fhir.ReferenceArgs|undefined;
  /**
   * Time when specimen was collected from subject - the physiologically relevant time.
   */
  collected?: fhir.FhirDateTime|fhir.Period|undefined;
  /**
   * Time when specimen was collected from subject - the physiologically relevant time.
   */
  collectedDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * Time when specimen was collected from subject - the physiologically relevant time.
   */
  collectedPeriod?: fhir.PeriodArgs|undefined;
  /**
   * The span of time over which the collection of a specimen occurred.
   */
  duration?: fhir.DurationArgs|undefined;
  /**
   * The quantity of specimen collected; for instance the volume of a blood sample, or the physical measurement of an anatomic pathology sample.
   */
  quantity?: fhir.QuantityArgs|undefined;
  /**
   * A coded value specifying the technique that is used to perform the procedure.
   */
  method?: fhir.CodeableConceptArgs|undefined;
  /**
   * If the use case requires  BodySite to be handled as a separate resource instead of an inline coded element (e.g. to identify and track separately)  then use the standard extension [bodySite](extension-bodysite.html).
   */
  bodySite?: fhir.CodeableConceptArgs|undefined;
  /**
   * Representing fasting status using this element is preferred to representing it with an observation using a 'pre-coordinated code'  such as  LOINC 2005-7 (Calcium [Moles/???time] in 2 hour Urine --12 hours fasting), or  using  a component observation ` such as `Observation.component code`  = LOINC 49541-6 (Fasting status - Reported).
   */
  fastingStatus?: fhir.CodeableConcept|fhir.Duration|undefined;
  /**
   * Representing fasting status using this element is preferred to representing it with an observation using a 'pre-coordinated code'  such as  LOINC 2005-7 (Calcium [Moles/???time] in 2 hour Urine --12 hours fasting), or  using  a component observation ` such as `Observation.component code`  = LOINC 49541-6 (Fasting status - Reported).
   */
  fastingStatusCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * Representing fasting status using this element is preferred to representing it with an observation using a 'pre-coordinated code'  such as  LOINC 2005-7 (Calcium [Moles/???time] in 2 hour Urine --12 hours fasting), or  using  a component observation ` such as `Observation.component code`  = LOINC 49541-6 (Fasting status - Reported).
   */
  fastingStatusDuration?: fhir.DurationArgs|undefined;
}

/**
 * Details concerning the specimen collection.
 */
export class SpecimenCollection extends fhir.BackboneElement {
  readonly __dataType:string = 'SpecimenCollection';
  /**
   * Person who collected the specimen.
   */
  public collector?: fhir.Reference|undefined;
  /**
   * Time when specimen was collected from subject - the physiologically relevant time.
   */
  public collected?: (fhir.FhirDateTime|fhir.Period)|undefined;
  readonly __collectedIsChoice:true = true;
  /**
   * The span of time over which the collection of a specimen occurred.
   */
  public duration?: fhir.Duration|undefined;
  /**
   * The quantity of specimen collected; for instance the volume of a blood sample, or the physical measurement of an anatomic pathology sample.
   */
  public quantity?: fhir.Quantity|undefined;
  /**
   * A coded value specifying the technique that is used to perform the procedure.
   */
  public method?: fhir.CodeableConcept|undefined;
  /**
   * If the use case requires  BodySite to be handled as a separate resource instead of an inline coded element (e.g. to identify and track separately)  then use the standard extension [bodySite](extension-bodysite.html).
   */
  public bodySite?: fhir.CodeableConcept|undefined;
  /**
   * Representing fasting status using this element is preferred to representing it with an observation using a 'pre-coordinated code'  such as  LOINC 2005-7 (Calcium [Moles/???time] in 2 hour Urine --12 hours fasting), or  using  a component observation ` such as `Observation.component code`  = LOINC 49541-6 (Fasting status - Reported).
   */
  public fastingStatus?: (fhir.CodeableConcept|fhir.Duration)|undefined;
  readonly __fastingStatusIsChoice:true = true;
  /**
   * Default constructor for SpecimenCollection - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SpecimenCollectionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['collector']) { this.collector = new fhir.Reference(source.collector); }
    if (source['collected']) { this.collected = source.collected; }
    else if (source['collectedDateTime']) { this.collected = new fhir.FhirDateTime({value: source.collectedDateTime}); }
    else if (source['collectedPeriod']) { this.collected = new fhir.Period(source.collectedPeriod); }
    if (source['duration']) { this.duration = new fhir.Duration(source.duration); }
    if (source['quantity']) { this.quantity = new fhir.Quantity(source.quantity); }
    if (source['method']) { this.method = new fhir.CodeableConcept(source.method); }
    if (source['bodySite']) { this.bodySite = new fhir.CodeableConcept(source.bodySite); }
    if (source['fastingStatus']) { this.fastingStatus = source.fastingStatus; }
    else if (source['fastingStatusCodeableConcept']) { this.fastingStatus = new fhir.CodeableConcept(source.fastingStatusCodeableConcept); }
    else if (source['fastingStatusDuration']) { this.fastingStatus = new fhir.Duration(source.fastingStatusDuration); }
  }
  /**
   * Example-bound Value Set for method
   */
  public static methodExampleValueSet():SpecimenCollectionMethodValueSetType {
    return SpecimenCollectionMethodValueSet;
  }
  /**
   * Example-bound Value Set for bodySite
   */
  public static bodySiteExampleValueSet():BodySiteValueSetType {
    return BodySiteValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["collector"]) { outcome.issue!.push(...this.collector.doModelValidation().issue!); }
    if (this["duration"]) { outcome.issue!.push(...this.duration.doModelValidation().issue!); }
    if (this["quantity"]) { outcome.issue!.push(...this.quantity.doModelValidation().issue!); }
    if (this["method"]) { outcome.issue!.push(...this.method.doModelValidation().issue!); }
    if (this["bodySite"]) { outcome.issue!.push(...this.bodySite.doModelValidation().issue!); }
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
 * Valid arguments for the SpecimenProcessing type.
 */
export interface SpecimenProcessingArgs extends fhir.BackboneElementArgs {
  /**
   * Textual description of procedure.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * A coded value specifying the procedure used to process the specimen.
   */
  procedure?: fhir.CodeableConceptArgs|undefined;
  /**
   * Material used in the processing step.
   */
  additive?: fhir.ReferenceArgs[]|undefined;
  /**
   * A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
   */
  time?: fhir.FhirDateTime|fhir.Period|undefined;
  /**
   * A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
   */
  timeDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
   */
  timePeriod?: fhir.PeriodArgs|undefined;
}

/**
 * Details concerning processing and processing steps for the specimen.
 */
export class SpecimenProcessing extends fhir.BackboneElement {
  readonly __dataType:string = 'SpecimenProcessing';
  /**
   * Textual description of procedure.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * A coded value specifying the procedure used to process the specimen.
   */
  public procedure?: fhir.CodeableConcept|undefined;
  /**
   * Material used in the processing step.
   */
  public additive?: fhir.Reference[]|undefined = [];
  /**
   * A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
   */
  public time?: (fhir.FhirDateTime|fhir.Period)|undefined;
  readonly __timeIsChoice:true = true;
  /**
   * Default constructor for SpecimenProcessing - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SpecimenProcessingArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['procedure']) { this.procedure = new fhir.CodeableConcept(source.procedure); }
    if (source['additive']) { this.additive = source.additive.map((x) => new fhir.Reference(x)); }
    if (source['time']) { this.time = source.time; }
    else if (source['timeDateTime']) { this.time = new fhir.FhirDateTime({value: source.timeDateTime}); }
    else if (source['timePeriod']) { this.time = new fhir.Period(source.timePeriod); }
  }
  /**
   * Example-bound Value Set for procedure
   */
  public static procedureExampleValueSet():SpecimenProcessingProcedureValueSetType {
    return SpecimenProcessingProcedureValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["description"]) { outcome.issue!.push(...this.description.doModelValidation().issue!); }
    if (this["procedure"]) { outcome.issue!.push(...this.procedure.doModelValidation().issue!); }
    if (this["additive"]) { this.additive.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
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
 * Valid arguments for the SpecimenContainer type.
 */
export interface SpecimenContainerArgs extends fhir.BackboneElementArgs {
  /**
   * Id for container. There may be multiple; a manufacturer's bar code, lab assigned identifier, etc. The container ID may differ from the specimen id in some circumstances.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * Textual description of the container.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * The type of container associated with the specimen (e.g. slide, aliquot, etc.).
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * The capacity (volume or other measure) the container may contain.
   */
  capacity?: fhir.QuantityArgs|undefined;
  /**
   * The quantity of specimen in the container; may be volume, dimensions, or other appropriate measurements, depending on the specimen type.
   */
  specimenQuantity?: fhir.QuantityArgs|undefined;
  /**
   * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
   */
  additive?: fhir.CodeableConcept|fhir.Reference|undefined;
  /**
   * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
   */
  additiveCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
   */
  additiveReference?: fhir.ReferenceArgs|undefined;
}

/**
 * The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
 */
export class SpecimenContainer extends fhir.BackboneElement {
  readonly __dataType:string = 'SpecimenContainer';
  /**
   * Id for container. There may be multiple; a manufacturer's bar code, lab assigned identifier, etc. The container ID may differ from the specimen id in some circumstances.
   */
  public identifier?: fhir.Identifier[]|undefined = [];
  /**
   * Textual description of the container.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * The type of container associated with the specimen (e.g. slide, aliquot, etc.).
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * The capacity (volume or other measure) the container may contain.
   */
  public capacity?: fhir.Quantity|undefined;
  /**
   * The quantity of specimen in the container; may be volume, dimensions, or other appropriate measurements, depending on the specimen type.
   */
  public specimenQuantity?: fhir.Quantity|undefined;
  /**
   * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
   */
  public additive?: (fhir.CodeableConcept|fhir.Reference)|undefined;
  readonly __additiveIsChoice:true = true;
  /**
   * Default constructor for SpecimenContainer - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SpecimenContainerArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    if (source['capacity']) { this.capacity = new fhir.Quantity(source.capacity); }
    if (source['specimenQuantity']) { this.specimenQuantity = new fhir.Quantity(source.specimenQuantity); }
    if (source['additive']) { this.additive = source.additive; }
    else if (source['additiveCodeableConcept']) { this.additive = new fhir.CodeableConcept(source.additiveCodeableConcept); }
    else if (source['additiveReference']) { this.additive = new fhir.Reference(source.additiveReference); }
  }
  /**
   * Example-bound Value Set for type
   */
  public static typeExampleValueSet():SpecimenContainerTypeValueSetType {
    return SpecimenContainerTypeValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["identifier"]) { this.identifier.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["description"]) { outcome.issue!.push(...this.description.doModelValidation().issue!); }
    if (this["type"]) { outcome.issue!.push(...this.type.doModelValidation().issue!); }
    if (this["capacity"]) { outcome.issue!.push(...this.capacity.doModelValidation().issue!); }
    if (this["specimenQuantity"]) { outcome.issue!.push(...this.specimenQuantity.doModelValidation().issue!); }
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
 * Valid arguments for the Specimen type.
 */
export interface SpecimenArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Specimen"|undefined;
  /**
   * Id for specimen.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * The identifier assigned by the lab when accessioning specimen(s). This is not necessarily the same as the specimen identifier, depending on local lab procedures.
   */
  accessionIdentifier?: fhir.IdentifierArgs|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status?: SpecimenStatusValueSetEnum|undefined;
  /**
   * The type can change the way that a specimen is handled and drives what kind of analyses can properly be performed on the specimen. It is frequently used in diagnostic work flow decision making systems.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * Where the specimen came from. This may be from patient(s), from a location (e.g., the source of an environmental sample), or a sampling of a substance or a device.
   */
  subject?: fhir.ReferenceArgs|undefined;
  /**
   * Time when specimen was received for processing or testing.
   */
  receivedTime?: fhir.FhirDateTime|string|undefined;
  /**
   * The parent specimen could be the source from which the current specimen is derived by some processing step (e.g. an aliquot or isolate or extracted nucleic acids from clinical samples) or one of many specimens that were combined to create a pooled sample.
   */
  parent?: fhir.ReferenceArgs[]|undefined;
  /**
   * The request may be explicit or implied such with a ServiceRequest that requires a blood draw.
   */
  request?: fhir.ReferenceArgs[]|undefined;
  /**
   * Details concerning the specimen collection.
   */
  collection?: fhir.SpecimenCollectionArgs|undefined;
  /**
   * Details concerning processing and processing steps for the specimen.
   */
  processing?: fhir.SpecimenProcessingArgs[]|undefined;
  /**
   * The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
   */
  container?: fhir.SpecimenContainerArgs[]|undefined;
  /**
   * Specimen condition is an observation made about the specimen.  It's a point-in-time assessment.  It can be used to assess its quality or appropriateness for a specific test.
   */
  condition?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * To communicate any details or issues about the specimen or during the specimen collection. (for example: broken vial, sent with patient, frozen).
   */
  note?: fhir.AnnotationArgs[]|undefined;
}

/**
 * A sample to be used for analysis.
 */
export class Specimen extends fhir.DomainResource {
  readonly __dataType:string = 'Specimen';
  /**
   * Resource Type Name
   */
  public resourceType: "Specimen";
  /**
   * Id for specimen.
   */
  public identifier?: fhir.Identifier[]|undefined = [];
  /**
   * The identifier assigned by the lab when accessioning specimen(s). This is not necessarily the same as the specimen identifier, depending on local lab procedures.
   */
  public accessionIdentifier?: fhir.Identifier|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status?: SpecimenStatusValueSetEnum|undefined;
  /**
   * The type can change the way that a specimen is handled and drives what kind of analyses can properly be performed on the specimen. It is frequently used in diagnostic work flow decision making systems.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * Where the specimen came from. This may be from patient(s), from a location (e.g., the source of an environmental sample), or a sampling of a substance or a device.
   */
  public subject?: fhir.Reference|undefined;
  /**
   * Time when specimen was received for processing or testing.
   */
  public receivedTime?: fhir.FhirDateTime|undefined;
  /**
   * The parent specimen could be the source from which the current specimen is derived by some processing step (e.g. an aliquot or isolate or extracted nucleic acids from clinical samples) or one of many specimens that were combined to create a pooled sample.
   */
  public parent?: fhir.Reference[]|undefined = [];
  /**
   * The request may be explicit or implied such with a ServiceRequest that requires a blood draw.
   */
  public request?: fhir.Reference[]|undefined = [];
  /**
   * Details concerning the specimen collection.
   */
  public collection?: fhir.SpecimenCollection|undefined;
  /**
   * Details concerning processing and processing steps for the specimen.
   */
  public processing?: fhir.SpecimenProcessing[]|undefined = [];
  /**
   * The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
   */
  public container?: fhir.SpecimenContainer[]|undefined = [];
  /**
   * Specimen condition is an observation made about the specimen.  It's a point-in-time assessment.  It can be used to assess its quality or appropriateness for a specific test.
   */
  public condition?: fhir.CodeableConcept[]|undefined = [];
  /**
   * To communicate any details or issues about the specimen or during the specimen collection. (for example: broken vial, sent with patient, frozen).
   */
  public note?: fhir.Annotation[]|undefined = [];
  /**
   * Default constructor for Specimen - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SpecimenArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Specimen';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['accessionIdentifier']) { this.accessionIdentifier = new fhir.Identifier(source.accessionIdentifier); }
    if (source['status']) { this.status = source.status; }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    if (source['receivedTime']) { this.receivedTime = new fhir.FhirDateTime({value: source.receivedTime}); }
    if (source['parent']) { this.parent = source.parent.map((x) => new fhir.Reference(x)); }
    if (source['request']) { this.request = source.request.map((x) => new fhir.Reference(x)); }
    if (source['collection']) { this.collection = new fhir.SpecimenCollection(source.collection); }
    if (source['processing']) { this.processing = source.processing.map((x) => new fhir.SpecimenProcessing(x)); }
    if (source['container']) { this.container = source.container.map((x) => new fhir.SpecimenContainer(x)); }
    if (source['condition']) { this.condition = source.condition.map((x) => new fhir.CodeableConcept(x)); }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
  }
  /**
   * Required-bound Value Set for status
   */
  public static statusRequiredValueSet():SpecimenStatusValueSetType {
    return SpecimenStatusValueSet;
  }
  /**
   * Example-bound Value Set for type
   */
  public static typeExampleValueSet():V20487ValueSetType {
    return V20487ValueSet;
  }
  /**
   * Extensible-bound Value Set for condition
   */
  public static conditionExtensibleValueSet():V20493ValueSetType {
    return V20493ValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['resourceType']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property resourceType:'Specimen' fhir: Specimen.resourceType:'Specimen'", }));
    }
    if (this["identifier"]) { this.identifier.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["accessionIdentifier"]) { outcome.issue!.push(...this.accessionIdentifier.doModelValidation().issue!); }
    if (this["type"]) { outcome.issue!.push(...this.type.doModelValidation().issue!); }
    if (this["subject"]) { outcome.issue!.push(...this.subject.doModelValidation().issue!); }
    if (this["receivedTime"]) { outcome.issue!.push(...this.receivedTime.doModelValidation().issue!); }
    if (this["parent"]) { this.parent.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["request"]) { this.request.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["collection"]) { outcome.issue!.push(...this.collection.doModelValidation().issue!); }
    if (this["processing"]) { this.processing.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["container"]) { this.container.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["condition"]) { this.condition.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
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
