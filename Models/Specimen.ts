// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../models'
import * as fhirInterfaces from '../interfaces'
/**
 * Details concerning the specimen collection.
 */
export class SpecimenCollection extends fhirModels.BackboneElement implements fhirInterfaces.ISpecimenCollection {
  /**
   * If the use case requires  BodySite to be handled as a separate resource instead of an inline coded element (e.g. to identify and track separately)  then use the standard extension [bodySite](extension-bodysite.html).
   */
  bodySite?: fhirModels.CodeableConcept|undefined;
  /**
   * Time when specimen was collected from subject - the physiologically relevant time.
   */
  collectedDateTime?: string|undefined;
  _collectedDateTime?: fhirModels.Element|undefined;
  /**
   * Time when specimen was collected from subject - the physiologically relevant time.
   */
  collectedPeriod?: fhirModels.Period|undefined;
  /**
   * Person who collected the specimen.
   */
  collector?: fhirModels.Reference|undefined;
  /**
   * The span of time over which the collection of a specimen occurred.
   */
  duration?: fhirModels.Duration|undefined;
  /**
   * Representing fasting status using this element is preferred to representing it with an observation using a 'pre-coordinated code'  such as  LOINC 2005-7 (Calcium [Moles/​time] in 2 hour Urine --12 hours fasting), or  using  a component observation ` such as `Observation.component code`  = LOINC 49541-6 (Fasting status - Reported).
   */
  fastingStatusCodeableConcept?: fhirModels.CodeableConcept|undefined;
  /**
   * Representing fasting status using this element is preferred to representing it with an observation using a 'pre-coordinated code'  such as  LOINC 2005-7 (Calcium [Moles/​time] in 2 hour Urine --12 hours fasting), or  using  a component observation ` such as `Observation.component code`  = LOINC 49541-6 (Fasting status - Reported).
   */
  fastingStatusDuration?: fhirModels.Duration|undefined;
  /**
   * A coded value specifying the technique that is used to perform the procedure.
   */
  method?: fhirModels.CodeableConcept|undefined;
  /**
   * The quantity of specimen collected; for instance the volume of a blood sample, or the physical measurement of an anatomic pathology sample.
   */
  quantity?: fhirModels.Quantity|undefined;
  /**
   * Default constructor for SpecimenCollection from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.ISpecimenCollection>) {
    super(source);
    if (source["bodySite"] !== undefined) { this.bodySite = new fhirModels.CodeableConcept(source.bodySite); }
    if (source["collectedDateTime"] !== undefined) { this.collectedDateTime = source.collectedDateTime; }
    if (source["_collectedDateTime"] !== undefined) { this._collectedDateTime = new fhirModels.Element(source._collectedDateTime); }
    if (source["collectedPeriod"] !== undefined) { this.collectedPeriod = new fhirModels.Period(source.collectedPeriod); }
    if (source["collector"] !== undefined) { this.collector = new fhirModels.Reference(source.collector); }
    if (source["duration"] !== undefined) { this.duration = new fhirModels.Duration(source.duration); }
    if (source["fastingStatusCodeableConcept"] !== undefined) { this.fastingStatusCodeableConcept = new fhirModels.CodeableConcept(source.fastingStatusCodeableConcept); }
    if (source["fastingStatusDuration"] !== undefined) { this.fastingStatusDuration = new fhirModels.Duration(source.fastingStatusDuration); }
    if (source["method"] !== undefined) { this.method = new fhirModels.CodeableConcept(source.method); }
    if (source["quantity"] !== undefined) { this.quantity = new fhirModels.Quantity(source.quantity); }
  }
  /**
   * Check if the current SpecimenCollection contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a SpecimenCollection from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.ISpecimenCollection):SpecimenCollection {
    var dest:SpecimenCollection = new SpecimenCollection(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `SpecimenCollection is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
}
/**
 * Details concerning processing and processing steps for the specimen.
 */
export class SpecimenProcessing extends fhirModels.BackboneElement implements fhirInterfaces.ISpecimenProcessing {
  /**
   * Material used in the processing step.
   */
  additive?: fhirModels.Reference[]|undefined;
  /**
   * Textual description of procedure.
   */
  description?: string|undefined;
  _description?: fhirModels.Element|undefined;
  /**
   * A coded value specifying the procedure used to process the specimen.
   */
  procedure?: fhirModels.CodeableConcept|undefined;
  /**
   * A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
   */
  timeDateTime?: string|undefined;
  _timeDateTime?: fhirModels.Element|undefined;
  /**
   * A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
   */
  timePeriod?: fhirModels.Period|undefined;
  /**
   * Default constructor for SpecimenProcessing from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.ISpecimenProcessing>) {
    super(source);
    if (source["additive"] !== undefined) { this.additive = source.additive.map((x) => new fhirModels.Reference(x)); }
    if (source["description"] !== undefined) { this.description = source.description; }
    if (source["_description"] !== undefined) { this._description = new fhirModels.Element(source._description); }
    if (source["procedure"] !== undefined) { this.procedure = new fhirModels.CodeableConcept(source.procedure); }
    if (source["timeDateTime"] !== undefined) { this.timeDateTime = source.timeDateTime; }
    if (source["_timeDateTime"] !== undefined) { this._timeDateTime = new fhirModels.Element(source._timeDateTime); }
    if (source["timePeriod"] !== undefined) { this.timePeriod = new fhirModels.Period(source.timePeriod); }
  }
  /**
   * Check if the current SpecimenProcessing contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a SpecimenProcessing from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.ISpecimenProcessing):SpecimenProcessing {
    var dest:SpecimenProcessing = new SpecimenProcessing(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `SpecimenProcessing is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
}
/**
 * The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
 */
export class SpecimenContainer extends fhirModels.BackboneElement implements fhirInterfaces.ISpecimenContainer {
  /**
   * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
   */
  additiveCodeableConcept?: fhirModels.CodeableConcept|undefined;
  /**
   * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
   */
  additiveReference?: fhirModels.Reference|undefined;
  /**
   * The capacity (volume or other measure) the container may contain.
   */
  capacity?: fhirModels.Quantity|undefined;
  /**
   * Textual description of the container.
   */
  description?: string|undefined;
  _description?: fhirModels.Element|undefined;
  /**
   * Id for container. There may be multiple; a manufacturer's bar code, lab assigned identifier, etc. The container ID may differ from the specimen id in some circumstances.
   */
  identifier?: fhirModels.Identifier[]|undefined;
  /**
   * The quantity of specimen in the container; may be volume, dimensions, or other appropriate measurements, depending on the specimen type.
   */
  specimenQuantity?: fhirModels.Quantity|undefined;
  /**
   * The type of container associated with the specimen (e.g. slide, aliquot, etc.).
   */
  type?: fhirModels.CodeableConcept|undefined;
  /**
   * Default constructor for SpecimenContainer from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.ISpecimenContainer>) {
    super(source);
    if (source["additiveCodeableConcept"] !== undefined) { this.additiveCodeableConcept = new fhirModels.CodeableConcept(source.additiveCodeableConcept); }
    if (source["additiveReference"] !== undefined) { this.additiveReference = new fhirModels.Reference(source.additiveReference); }
    if (source["capacity"] !== undefined) { this.capacity = new fhirModels.Quantity(source.capacity); }
    if (source["description"] !== undefined) { this.description = source.description; }
    if (source["_description"] !== undefined) { this._description = new fhirModels.Element(source._description); }
    if (source["identifier"] !== undefined) { this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x)); }
    if (source["specimenQuantity"] !== undefined) { this.specimenQuantity = new fhirModels.Quantity(source.specimenQuantity); }
    if (source["type"] !== undefined) { this.type = new fhirModels.CodeableConcept(source.type); }
  }
  /**
   * Check if the current SpecimenContainer contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a SpecimenContainer from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.ISpecimenContainer):SpecimenContainer {
    var dest:SpecimenContainer = new SpecimenContainer(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `SpecimenContainer is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
}
/**
 * A sample to be used for analysis.
 */
export class Specimen extends fhirModels.DomainResource implements fhirInterfaces.ISpecimen {
  /**
   * Resource Type Name
   */
  readonly resourceType = "Specimen";
  /**
   * The identifier assigned by the lab when accessioning specimen(s). This is not necessarily the same as the specimen identifier, depending on local lab procedures.
   */
  accessionIdentifier?: fhirModels.Identifier|undefined;
  /**
   * Details concerning the specimen collection.
   */
  collection?: fhirModels.SpecimenCollection|undefined;
  /**
   * Specimen condition is an observation made about the specimen.  It's a point-in-time assessment.  It can be used to assess its quality or appropriateness for a specific test.
   */
  condition?: fhirModels.CodeableConcept[]|undefined;
  /**
   * The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
   */
  container?: fhirModels.SpecimenContainer[]|undefined;
  /**
   * Id for specimen.
   */
  identifier?: fhirModels.Identifier[]|undefined;
  /**
   * To communicate any details or issues about the specimen or during the specimen collection. (for example: broken vial, sent with patient, frozen).
   */
  note?: fhirModels.Annotation[]|undefined;
  /**
   * The parent specimen could be the source from which the current specimen is derived by some processing step (e.g. an aliquot or isolate or extracted nucleic acids from clinical samples) or one of many specimens that were combined to create a pooled sample.
   */
  parent?: fhirModels.Reference[]|undefined;
  /**
   * Details concerning processing and processing steps for the specimen.
   */
  processing?: fhirModels.SpecimenProcessing[]|undefined;
  /**
   * Time when specimen was received for processing or testing.
   */
  receivedTime?: string|undefined;
  _receivedTime?: fhirModels.Element|undefined;
  /**
   * The request may be explicit or implied such with a ServiceRequest that requires a blood draw.
   */
  request?: fhirModels.Reference[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status?: SpecimenStatusEnum|undefined;
  _status?: fhirModels.Element|undefined;
  /**
   * Where the specimen came from. This may be from patient(s), from a location (e.g., the source of an environmental sample), or a sampling of a substance or a device.
   */
  subject?: fhirModels.Reference|undefined;
  /**
   * The type can change the way that a specimen is handled and drives what kind of analyses can properly be performed on the specimen. It is frequently used in diagnostic work flow decision making systems.
   */
  type?: fhirModels.CodeableConcept|undefined;
  /**
   * Default constructor for Specimen from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.ISpecimen>) {
    super(source);
    if ((source['resourceType'] !== "Specimen") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a Specimen'; }
    if (source["accessionIdentifier"] !== undefined) { this.accessionIdentifier = new fhirModels.Identifier(source.accessionIdentifier); }
    if (source["collection"] !== undefined) { this.collection = new fhirModels.SpecimenCollection(source.collection); }
    if (source["condition"] !== undefined) { this.condition = source.condition.map((x) => new fhirModels.CodeableConcept(x)); }
    if (source["container"] !== undefined) { this.container = source.container.map((x) => new fhirModels.SpecimenContainer(x)); }
    if (source["identifier"] !== undefined) { this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x)); }
    if (source["note"] !== undefined) { this.note = source.note.map((x) => new fhirModels.Annotation(x)); }
    if (source["parent"] !== undefined) { this.parent = source.parent.map((x) => new fhirModels.Reference(x)); }
    if (source["processing"] !== undefined) { this.processing = source.processing.map((x) => new fhirModels.SpecimenProcessing(x)); }
    if (source["receivedTime"] !== undefined) { this.receivedTime = source.receivedTime; }
    if (source["_receivedTime"] !== undefined) { this._receivedTime = new fhirModels.Element(source._receivedTime); }
    if (source["request"] !== undefined) { this.request = source.request.map((x) => new fhirModels.Reference(x)); }
    if (source["status"] !== undefined) { this.status = source.status; }
    if (source["_status"] !== undefined) { this._status = new fhirModels.Element(source._status); }
    if (source["subject"] !== undefined) { this.subject = new fhirModels.Reference(source.subject); }
    if (source["type"] !== undefined) { this.type = new fhirModels.CodeableConcept(source.type); }
  }
  /**
   * Check if the current Specimen contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a Specimen from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.ISpecimen):Specimen {
    var dest:Specimen = new Specimen(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `Specimen is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
}
/**
 * Code Values for the Specimen.status field
 */
export enum SpecimenStatusEnum {
  AVAILABLE = "available",
  UNAVAILABLE = "unavailable",
  UNSATISFACTORY = "unsatisfactory",
  ENTERED_IN_ERROR = "entered-in-error",
}
