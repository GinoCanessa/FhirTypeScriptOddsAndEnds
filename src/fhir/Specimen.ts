// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Specimen

import * as fhir from '../fhir.js'

import { SpecimenCollectionMethodValueSet, SpecimenCollectionMethodValueSetType, SpecimenCollectionMethodValueSetEnum } from '../fhirValueSets/SpecimenCollectionMethodValueSet.js'
import { BodySiteValueSet, BodySiteValueSetType, BodySiteValueSetEnum } from '../fhirValueSets/BodySiteValueSet.js'
import { V20916ValueSet, V20916ValueSetType, V20916ValueSetEnum } from '../fhirValueSets/V20916ValueSet.js'
import { SpecimenProcessingProcedureValueSet, SpecimenProcessingProcedureValueSetType, SpecimenProcessingProcedureValueSetEnum } from '../fhirValueSets/SpecimenProcessingProcedureValueSet.js'
import { SpecimenContainerTypeValueSet, SpecimenContainerTypeValueSetType, SpecimenContainerTypeValueSetEnum } from '../fhirValueSets/SpecimenContainerTypeValueSet.js'
import { V20371ValueSet, V20371ValueSetType, V20371ValueSetEnum } from '../fhirValueSets/V20371ValueSet.js'
import { SpecimenStatusValueSet, SpecimenStatusValueSetType, SpecimenStatusValueSetEnum } from '../fhirValueSets/SpecimenStatusValueSet.js'
import { V20487ValueSet, V20487ValueSetType, V20487ValueSetEnum } from '../fhirValueSets/V20487ValueSet.js'
import { V20493ValueSet, V20493ValueSetType, V20493ValueSetEnum } from '../fhirValueSets/V20493ValueSet.js'

/**
 * Details concerning the specimen collection.
 */
export type ISpecimenCollection = fhir.IBackboneElement & { 
  /**
   * Person who collected the specimen.
   */
  collector?: fhir.IReference|undefined;
  /**
   * Time when specimen was collected from subject - the physiologically relevant time.
   */
  collectedDateTime?: string|undefined;
  /**
   * Extended properties for primitive element: Specimen.collection.collected[x]
   */
  _collectedDateTime?: fhir.IFhirElement|undefined;
  /**
   * Time when specimen was collected from subject - the physiologically relevant time.
   */
  collectedPeriod?: fhir.IPeriod|undefined;
  /**
   * The span of time over which the collection of a specimen occurred.
   */
  duration?: fhir.IDuration|undefined;
  /**
   * The quantity of specimen collected; for instance the volume of a blood sample, or the physical measurement of an anatomic pathology sample.
   */
  quantity?: fhir.IQuantity|undefined;
  /**
   * A coded value specifying the technique that is used to perform the procedure.
   */
  method?: fhir.ICodeableConcept|undefined;
  /**
   * If the use case requires  BodySite to be handled as a separate resource instead of an inline coded element (e.g. to identify and track separately)  then use the standard extension [bodySite](extension-bodysite.html).
   */
  bodySite?: fhir.ICodeableConcept|undefined;
  /**
   * Representing fasting status using this element is preferred to representing it with an observation using a 'pre-coordinated code'  such as  LOINC 2005-7 (Calcium [Moles/​time] in 2 hour Urine --12 hours fasting), or  using  a component observation ` such as `Observation.component code`  = LOINC 49541-6 (Fasting status - Reported).
   */
  fastingStatusCodeableConcept?: fhir.ICodeableConcept|undefined;
  /**
   * Representing fasting status using this element is preferred to representing it with an observation using a 'pre-coordinated code'  such as  LOINC 2005-7 (Calcium [Moles/​time] in 2 hour Urine --12 hours fasting), or  using  a component observation ` such as `Observation.component code`  = LOINC 49541-6 (Fasting status - Reported).
   */
  fastingStatusDuration?: fhir.IDuration|undefined;
}

/**
 * Details concerning processing and processing steps for the specimen.
 */
export type ISpecimenProcessing = fhir.IBackboneElement & { 
  /**
   * Textual description of procedure.
   */
  description?: string|undefined;
  /**
   * Extended properties for primitive element: Specimen.processing.description
   */
  _description?: fhir.IFhirElement|undefined;
  /**
   * A coded value specifying the procedure used to process the specimen.
   */
  procedure?: fhir.ICodeableConcept|undefined;
  /**
   * Material used in the processing step.
   */
  additive?: fhir.IReference[]|undefined;
  /**
   * A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
   */
  timeDateTime?: string|undefined;
  /**
   * Extended properties for primitive element: Specimen.processing.time[x]
   */
  _timeDateTime?: fhir.IFhirElement|undefined;
  /**
   * A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
   */
  timePeriod?: fhir.IPeriod|undefined;
}

/**
 * The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
 */
export type ISpecimenContainer = fhir.IBackboneElement & { 
  /**
   * Id for container. There may be multiple; a manufacturer's bar code, lab assigned identifier, etc. The container ID may differ from the specimen id in some circumstances.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * Textual description of the container.
   */
  description?: string|undefined;
  /**
   * Extended properties for primitive element: Specimen.container.description
   */
  _description?: fhir.IFhirElement|undefined;
  /**
   * The type of container associated with the specimen (e.g. slide, aliquot, etc.).
   */
  type?: fhir.ICodeableConcept|undefined;
  /**
   * The capacity (volume or other measure) the container may contain.
   */
  capacity?: fhir.IQuantity|undefined;
  /**
   * The quantity of specimen in the container; may be volume, dimensions, or other appropriate measurements, depending on the specimen type.
   */
  specimenQuantity?: fhir.IQuantity|undefined;
  /**
   * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
   */
  additiveCodeableConcept?: fhir.ICodeableConcept|undefined;
  /**
   * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
   */
  additiveReference?: fhir.IReference|undefined;
}

/**
 * A sample to be used for analysis.
 */
export type ISpecimen = fhir.IDomainResource & { 
  /**
   * Resource Type Name
   */
  resourceType: "Specimen";
  /**
   * Id for specimen.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * The identifier assigned by the lab when accessioning specimen(s). This is not necessarily the same as the specimen identifier, depending on local lab procedures.
   */
  accessionIdentifier?: fhir.IIdentifier|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status?: SpecimenStatusValueSetEnum|undefined;
  /**
   * Extended properties for primitive element: Specimen.status
   */
  _status?: fhir.IFhirElement|undefined;
  /**
   * The type can change the way that a specimen is handled and drives what kind of analyses can properly be performed on the specimen. It is frequently used in diagnostic work flow decision making systems.
   */
  type?: fhir.ICodeableConcept|undefined;
  /**
   * Where the specimen came from. This may be from patient(s), from a location (e.g., the source of an environmental sample), or a sampling of a substance or a device.
   */
  subject?: fhir.IReference|undefined;
  /**
   * Time when specimen was received for processing or testing.
   */
  receivedTime?: string|undefined;
  /**
   * Extended properties for primitive element: Specimen.receivedTime
   */
  _receivedTime?: fhir.IFhirElement|undefined;
  /**
   * The parent specimen could be the source from which the current specimen is derived by some processing step (e.g. an aliquot or isolate or extracted nucleic acids from clinical samples) or one of many specimens that were combined to create a pooled sample.
   */
  parent?: fhir.IReference[]|undefined;
  /**
   * The request may be explicit or implied such with a ServiceRequest that requires a blood draw.
   */
  request?: fhir.IReference[]|undefined;
  /**
   * Details concerning the specimen collection.
   */
  collection?: fhir.ISpecimenCollection|undefined;
  /**
   * Details concerning processing and processing steps for the specimen.
   */
  processing?: fhir.ISpecimenProcessing[]|undefined;
  /**
   * The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
   */
  container?: fhir.ISpecimenContainer[]|undefined;
  /**
   * Specimen condition is an observation made about the specimen.  It's a point-in-time assessment.  It can be used to assess its quality or appropriateness for a specific test.
   */
  condition?: fhir.ICodeableConcept[]|undefined;
  /**
   * To communicate any details or issues about the specimen or during the specimen collection. (for example: broken vial, sent with patient, frozen).
   */
  note?: fhir.IAnnotation[]|undefined;
}

/**
 * Details concerning the specimen collection.
 */
export class SpecimenCollection extends fhir.BackboneElement implements ISpecimenCollection {
  /**
   * Person who collected the specimen.
   */
  public collector?: fhir.Reference|undefined;
  /**
   * Time when specimen was collected from subject - the physiologically relevant time.
   */
  public collectedDateTime?: string|undefined;
  /**
   * Extended properties for primitive element: Specimen.collection.collected[x]
   */
  public _collectedDateTime?: fhir.FhirElement|undefined;
  /**
   * Time when specimen was collected from subject - the physiologically relevant time.
   */
  public collectedPeriod?: fhir.Period|undefined;
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
   * Representing fasting status using this element is preferred to representing it with an observation using a 'pre-coordinated code'  such as  LOINC 2005-7 (Calcium [Moles/​time] in 2 hour Urine --12 hours fasting), or  using  a component observation ` such as `Observation.component code`  = LOINC 49541-6 (Fasting status - Reported).
   */
  public fastingStatusCodeableConcept?: fhir.CodeableConcept|undefined;
  /**
   * Representing fasting status using this element is preferred to representing it with an observation using a 'pre-coordinated code'  such as  LOINC 2005-7 (Calcium [Moles/​time] in 2 hour Urine --12 hours fasting), or  using  a component observation ` such as `Observation.component code`  = LOINC 49541-6 (Fasting status - Reported).
   */
  public fastingStatusDuration?: fhir.Duration|undefined;
  /**
   * Default constructor for SpecimenCollection - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ISpecimenCollection> = { }) {
    super(source);
    if (source['collector']) { this.collector = new fhir.Reference(source.collector!); }
    if (source['collectedDateTime']) { this.collectedDateTime = source.collectedDateTime; }
    if (source['_collectedDateTime']) { this._collectedDateTime = new fhir.FhirElement(source._collectedDateTime!); }
    if (source['collectedPeriod']) { this.collectedPeriod = new fhir.Period(source.collectedPeriod!); }
    if (source['duration']) { this.duration = new fhir.Duration(source.duration!); }
    if (source['quantity']) { this.quantity = new fhir.Quantity(source.quantity!); }
    if (source['method']) { this.method = new fhir.CodeableConcept(source.method!); }
    if (source['bodySite']) { this.bodySite = new fhir.CodeableConcept(source.bodySite!); }
    if (source['fastingStatusCodeableConcept']) { this.fastingStatusCodeableConcept = new fhir.CodeableConcept(source.fastingStatusCodeableConcept!); }
    if (source['fastingStatusDuration']) { this.fastingStatusDuration = new fhir.Duration(source.fastingStatusDuration!); }
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
   * Extensible-bound Value Set for fastingStatusCodeableConcept
   */
  public static fastingStatusCodeableConceptExtensibleValueSet():V20916ValueSetType {
    return V20916ValueSet;
  }
  /**
   * Extensible-bound Value Set for fastingStatusDuration
   */
  public static fastingStatusDurationExtensibleValueSet():V20916ValueSetType {
    return V20916ValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (this["collector"]) { results.push(...this.collector.doModelValidation()); }
    if (this["_collectedDateTime"]) { results.push(...this._collectedDateTime.doModelValidation()); }
    if (this["collectedPeriod"]) { results.push(...this.collectedPeriod.doModelValidation()); }
    if (this["duration"]) { results.push(...this.duration.doModelValidation()); }
    if (this["quantity"]) { results.push(...this.quantity.doModelValidation()); }
    if (this["method"]) { results.push(...this.method.doModelValidation()); }
    if (this["bodySite"]) { results.push(...this.bodySite.doModelValidation()); }
    if (this["fastingStatusCodeableConcept"]) { results.push(...this.fastingStatusCodeableConcept.doModelValidation()); }
    if (this["fastingStatusDuration"]) { results.push(...this.fastingStatusDuration.doModelValidation()); }
    return results;
  }
}

/**
 * Details concerning processing and processing steps for the specimen.
 */
export class SpecimenProcessing extends fhir.BackboneElement implements ISpecimenProcessing {
  /**
   * Textual description of procedure.
   */
  public description?: string|undefined;
  /**
   * Extended properties for primitive element: Specimen.processing.description
   */
  public _description?: fhir.FhirElement|undefined;
  /**
   * A coded value specifying the procedure used to process the specimen.
   */
  public procedure?: fhir.CodeableConcept|undefined;
  /**
   * Material used in the processing step.
   */
  public additive?: fhir.Reference[]|undefined;
  /**
   * A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
   */
  public timeDateTime?: string|undefined;
  /**
   * Extended properties for primitive element: Specimen.processing.time[x]
   */
  public _timeDateTime?: fhir.FhirElement|undefined;
  /**
   * A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
   */
  public timePeriod?: fhir.Period|undefined;
  /**
   * Default constructor for SpecimenProcessing - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ISpecimenProcessing> = { }) {
    super(source);
    if (source['description']) { this.description = source.description; }
    if (source['_description']) { this._description = new fhir.FhirElement(source._description!); }
    if (source['procedure']) { this.procedure = new fhir.CodeableConcept(source.procedure!); }
    if (source['additive']) { this.additive = source.additive.map((x) => new fhir.Reference(x)); }
    if (source['timeDateTime']) { this.timeDateTime = source.timeDateTime; }
    if (source['_timeDateTime']) { this._timeDateTime = new fhir.FhirElement(source._timeDateTime!); }
    if (source['timePeriod']) { this.timePeriod = new fhir.Period(source.timePeriod!); }
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
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (this["_description"]) { results.push(...this._description.doModelValidation()); }
    if (this["procedure"]) { results.push(...this.procedure.doModelValidation()); }
    if (this["additive"]) { this.additive.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["_timeDateTime"]) { results.push(...this._timeDateTime.doModelValidation()); }
    if (this["timePeriod"]) { results.push(...this.timePeriod.doModelValidation()); }
    return results;
  }
}

/**
 * The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
 */
export class SpecimenContainer extends fhir.BackboneElement implements ISpecimenContainer {
  /**
   * Id for container. There may be multiple; a manufacturer's bar code, lab assigned identifier, etc. The container ID may differ from the specimen id in some circumstances.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * Textual description of the container.
   */
  public description?: string|undefined;
  /**
   * Extended properties for primitive element: Specimen.container.description
   */
  public _description?: fhir.FhirElement|undefined;
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
  public additiveCodeableConcept?: fhir.CodeableConcept|undefined;
  /**
   * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
   */
  public additiveReference?: fhir.Reference|undefined;
  /**
   * Default constructor for SpecimenContainer - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ISpecimenContainer> = { }) {
    super(source);
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['description']) { this.description = source.description; }
    if (source['_description']) { this._description = new fhir.FhirElement(source._description!); }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type!); }
    if (source['capacity']) { this.capacity = new fhir.Quantity(source.capacity!); }
    if (source['specimenQuantity']) { this.specimenQuantity = new fhir.Quantity(source.specimenQuantity!); }
    if (source['additiveCodeableConcept']) { this.additiveCodeableConcept = new fhir.CodeableConcept(source.additiveCodeableConcept!); }
    if (source['additiveReference']) { this.additiveReference = new fhir.Reference(source.additiveReference!); }
  }
  /**
   * Example-bound Value Set for type
   */
  public static typeExampleValueSet():SpecimenContainerTypeValueSetType {
    return SpecimenContainerTypeValueSet;
  }
  /**
   * Example-bound Value Set for additiveCodeableConcept
   */
  public static additiveCodeableConceptExampleValueSet():V20371ValueSetType {
    return V20371ValueSet;
  }
  /**
   * Example-bound Value Set for additiveReference
   */
  public static additiveReferenceExampleValueSet():V20371ValueSetType {
    return V20371ValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (this["identifier"]) { this.identifier.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["_description"]) { results.push(...this._description.doModelValidation()); }
    if (this["type"]) { results.push(...this.type.doModelValidation()); }
    if (this["capacity"]) { results.push(...this.capacity.doModelValidation()); }
    if (this["specimenQuantity"]) { results.push(...this.specimenQuantity.doModelValidation()); }
    if (this["additiveCodeableConcept"]) { results.push(...this.additiveCodeableConcept.doModelValidation()); }
    if (this["additiveReference"]) { results.push(...this.additiveReference.doModelValidation()); }
    return results;
  }
}

/**
 * A sample to be used for analysis.
 */
export class Specimen extends fhir.DomainResource implements ISpecimen {
  /**
   * Resource Type Name
   */
  public resourceType: "Specimen";
  /**
   * Id for specimen.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * The identifier assigned by the lab when accessioning specimen(s). This is not necessarily the same as the specimen identifier, depending on local lab procedures.
   */
  public accessionIdentifier?: fhir.Identifier|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status?: SpecimenStatusValueSetEnum|undefined;
  /**
   * Extended properties for primitive element: Specimen.status
   */
  public _status?: fhir.FhirElement|undefined;
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
  public receivedTime?: string|undefined;
  /**
   * Extended properties for primitive element: Specimen.receivedTime
   */
  public _receivedTime?: fhir.FhirElement|undefined;
  /**
   * The parent specimen could be the source from which the current specimen is derived by some processing step (e.g. an aliquot or isolate or extracted nucleic acids from clinical samples) or one of many specimens that were combined to create a pooled sample.
   */
  public parent?: fhir.Reference[]|undefined;
  /**
   * The request may be explicit or implied such with a ServiceRequest that requires a blood draw.
   */
  public request?: fhir.Reference[]|undefined;
  /**
   * Details concerning the specimen collection.
   */
  public collection?: fhir.SpecimenCollection|undefined;
  /**
   * Details concerning processing and processing steps for the specimen.
   */
  public processing?: fhir.SpecimenProcessing[]|undefined;
  /**
   * The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
   */
  public container?: fhir.SpecimenContainer[]|undefined;
  /**
   * Specimen condition is an observation made about the specimen.  It's a point-in-time assessment.  It can be used to assess its quality or appropriateness for a specific test.
   */
  public condition?: fhir.CodeableConcept[]|undefined;
  /**
   * To communicate any details or issues about the specimen or during the specimen collection. (for example: broken vial, sent with patient, frozen).
   */
  public note?: fhir.Annotation[]|undefined;
  /**
   * Default constructor for Specimen - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ISpecimen> = { }) {
    super(source);
    this.resourceType = 'Specimen';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['accessionIdentifier']) { this.accessionIdentifier = new fhir.Identifier(source.accessionIdentifier!); }
    if (source['status']) { this.status = source.status; }
    if (source['_status']) { this._status = new fhir.FhirElement(source._status!); }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type!); }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject!); }
    if (source['receivedTime']) { this.receivedTime = source.receivedTime; }
    if (source['_receivedTime']) { this._receivedTime = new fhir.FhirElement(source._receivedTime!); }
    if (source['parent']) { this.parent = source.parent.map((x) => new fhir.Reference(x)); }
    if (source['request']) { this.request = source.request.map((x) => new fhir.Reference(x)); }
    if (source['collection']) { this.collection = new fhir.SpecimenCollection(source.collection!); }
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
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["resourceType"]) { results.push(["resourceType",'Missing required element: Specimen.resourceType']); }
    if (this["identifier"]) { this.identifier.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["accessionIdentifier"]) { results.push(...this.accessionIdentifier.doModelValidation()); }
    if (this["_status"]) { results.push(...this._status.doModelValidation()); }
    if (this["type"]) { results.push(...this.type.doModelValidation()); }
    if (this["subject"]) { results.push(...this.subject.doModelValidation()); }
    if (this["_receivedTime"]) { results.push(...this._receivedTime.doModelValidation()); }
    if (this["parent"]) { this.parent.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["request"]) { this.request.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["collection"]) { results.push(...this.collection.doModelValidation()); }
    if (this["processing"]) { this.processing.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["container"]) { this.container.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["condition"]) { this.condition.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["note"]) { this.note.forEach((x) => { results.push(...x.doModelValidation()); }) }
    return results;
  }
}
