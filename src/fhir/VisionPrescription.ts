// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * Allows for adjustment on two axis.
 */
export type IVisionPrescriptionLensSpecificationPrism = fhir.IBackboneElement & {
  /**
   * Amount of prism to compensate for eye alignment in fractional units.
   */
  amount: number|null;
  _amount?: fhir.IFhirElement|undefined;
  /**
   * The relative base, or reference lens edge, for the prism.
   */
  base: VisionPrescriptionLensSpecificationPrismBaseEnum|null;
  _base?: fhir.IFhirElement|undefined;
}
/**
 * Contain the details of  the individual lens specifications and serves as the authorization for the fullfillment by certified professionals.
 */
export type IVisionPrescriptionLensSpecification = fhir.IBackboneElement & {
  /**
   * Power adjustment for multifocal lenses measured in dioptres (0.25 units).
   */
  add?: number|undefined;
  _add?: fhir.IFhirElement|undefined;
  /**
   * The limits are +180 and -180 degrees.
   */
  axis?: number|undefined;
  _axis?: fhir.IFhirElement|undefined;
  /**
   * Back curvature measured in millimetres.
   */
  backCurve?: number|undefined;
  _backCurve?: fhir.IFhirElement|undefined;
  /**
   * Brand recommendations or restrictions.
   */
  brand?: string|undefined;
  _brand?: fhir.IFhirElement|undefined;
  /**
   * Special color or pattern.
   */
  color?: string|undefined;
  _color?: fhir.IFhirElement|undefined;
  /**
   * Power adjustment for astigmatism measured in dioptres (0.25 units).
   */
  cylinder?: number|undefined;
  _cylinder?: fhir.IFhirElement|undefined;
  /**
   * Contact lens diameter measured in millimetres.
   */
  diameter?: number|undefined;
  _diameter?: fhir.IFhirElement|undefined;
  /**
   * The recommended maximum wear period for the lens.
   */
  duration?: fhir.IQuantity|undefined;
  /**
   * May also appear as OD (oculus dexter) for the right eye and OS (oculus siniter) for the left eye.
   */
  eye: VisionPrescriptionLensSpecificationEyeEnum|null;
  _eye?: fhir.IFhirElement|undefined;
  /**
   * Notes for special requirements such as coatings and lens materials.
   */
  note?: fhir.IAnnotation[]|undefined;
  /**
   * Contact lens power measured in dioptres (0.25 units).
   */
  power?: number|undefined;
  _power?: fhir.IFhirElement|undefined;
  /**
   * Allows for adjustment on two axis.
   */
  prism?: fhir.IVisionPrescriptionLensSpecificationPrism[]|undefined;
  /**
   * Identifies the type of vision correction product which is required for the patient.
   */
  product: fhir.ICodeableConcept|null;
  /**
   * The value is negative for near-sighted and positive for far sighted.
   * Often insurance will not cover a lens with power between +75 and -75.
   */
  sphere?: number|undefined;
  _sphere?: fhir.IFhirElement|undefined;
}
/**
 * An authorization for the provision of glasses and/or contact lenses to a patient.
 */
export type IVisionPrescription = fhir.IDomainResource & {
  /**
   * Resource Type Name
   */
  resourceType: "VisionPrescription";
  /**
   * The date this resource was created.
   */
  created: string|null;
  _created?: fhir.IFhirElement|undefined;
  /**
   * Jurisdictions determine the valid lifetime of a prescription. Typically vision prescriptions are valid for two years from the date written.
   */
  dateWritten: string|null;
  _dateWritten?: fhir.IFhirElement|undefined;
  /**
   * A reference to a resource that identifies the particular occurrence of contact between patient and health care provider during which the prescription was issued.
   */
  encounter?: fhir.IReference|undefined;
  /**
   * A unique identifier assigned to this vision prescription.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * Contain the details of  the individual lens specifications and serves as the authorization for the fullfillment by certified professionals.
   */
  lensSpecification: fhir.IVisionPrescriptionLensSpecification[]|null;
  /**
   * A resource reference to the person to whom the vision prescription applies.
   */
  patient: fhir.IReference|null;
  /**
   * The healthcare professional responsible for authorizing the prescription.
   */
  prescriber: fhir.IReference|null;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: VisionPrescriptionStatusEnum|null;
  _status?: fhir.IFhirElement|undefined;
}
/**
 * Allows for adjustment on two axis.
 */
export class VisionPrescriptionLensSpecificationPrism extends fhir.BackboneElement implements fhir.IVisionPrescriptionLensSpecificationPrism {
  /**
   * Amount of prism to compensate for eye alignment in fractional units.
   */
  public amount: number|null;
  public _amount?: fhir.FhirElement|undefined;
  /**
   * The relative base, or reference lens edge, for the prism.
   */
  public base: VisionPrescriptionLensSpecificationPrismBaseEnum|null;
  public _base?: fhir.FhirElement|undefined;
  /**
   * Default constructor for VisionPrescriptionLensSpecificationPrism - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IVisionPrescriptionLensSpecificationPrism> = {}) {
    super(source);
    this.amount = null;
    if (source["amount"]) { this.amount = source.amount; }
    if (this.amount === undefined) { this.amount = null }
    if (source["_amount"]) { this._amount = new fhir.FhirElement(source._amount!); }
    this.base = null;
    if (source["base"]) { this.base = source.base; }
    if (this.base === undefined) { this.base = null }
    if (source["_base"]) { this._base = new fhir.FhirElement(source._base!); }
  }
  /**
   * Check if the current VisionPrescriptionLensSpecificationPrism contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["amount"] === undefined) { missingElements.push("amount"); }
    if (this["base"] === undefined) { missingElements.push("base"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a VisionPrescriptionLensSpecificationPrism from an object that MUST contain all required elements.
   */
  static override fromStrict(source:fhir.IVisionPrescriptionLensSpecificationPrism):VisionPrescriptionLensSpecificationPrism {
    var dest:VisionPrescriptionLensSpecificationPrism = new VisionPrescriptionLensSpecificationPrism(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) { throw `VisionPrescriptionLensSpecificationPrism is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Contain the details of  the individual lens specifications and serves as the authorization for the fullfillment by certified professionals.
 */
export class VisionPrescriptionLensSpecification extends fhir.BackboneElement implements fhir.IVisionPrescriptionLensSpecification {
  /**
   * Power adjustment for multifocal lenses measured in dioptres (0.25 units).
   */
  public add?: number|undefined;
  public _add?: fhir.FhirElement|undefined;
  /**
   * The limits are +180 and -180 degrees.
   */
  public axis?: number|undefined;
  public _axis?: fhir.FhirElement|undefined;
  /**
   * Back curvature measured in millimetres.
   */
  public backCurve?: number|undefined;
  public _backCurve?: fhir.FhirElement|undefined;
  /**
   * Brand recommendations or restrictions.
   */
  public brand?: string|undefined;
  public _brand?: fhir.FhirElement|undefined;
  /**
   * Special color or pattern.
   */
  public color?: string|undefined;
  public _color?: fhir.FhirElement|undefined;
  /**
   * Power adjustment for astigmatism measured in dioptres (0.25 units).
   */
  public cylinder?: number|undefined;
  public _cylinder?: fhir.FhirElement|undefined;
  /**
   * Contact lens diameter measured in millimetres.
   */
  public diameter?: number|undefined;
  public _diameter?: fhir.FhirElement|undefined;
  /**
   * The recommended maximum wear period for the lens.
   */
  public duration?: fhir.Quantity|undefined;
  /**
   * May also appear as OD (oculus dexter) for the right eye and OS (oculus siniter) for the left eye.
   */
  public eye: VisionPrescriptionLensSpecificationEyeEnum|null;
  public _eye?: fhir.FhirElement|undefined;
  /**
   * Notes for special requirements such as coatings and lens materials.
   */
  public note?: fhir.Annotation[]|undefined;
  /**
   * Contact lens power measured in dioptres (0.25 units).
   */
  public power?: number|undefined;
  public _power?: fhir.FhirElement|undefined;
  /**
   * Allows for adjustment on two axis.
   */
  public prism?: fhir.VisionPrescriptionLensSpecificationPrism[]|undefined;
  /**
   * Identifies the type of vision correction product which is required for the patient.
   */
  public product: fhir.CodeableConcept|null;
  /**
   * The value is negative for near-sighted and positive for far sighted.
   * Often insurance will not cover a lens with power between +75 and -75.
   */
  public sphere?: number|undefined;
  public _sphere?: fhir.FhirElement|undefined;
  /**
   * Default constructor for VisionPrescriptionLensSpecification - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IVisionPrescriptionLensSpecification> = {}) {
    super(source);
    if (source["add"]) { this.add = source.add; }
    if (source["_add"]) { this._add = new fhir.FhirElement(source._add!); }
    if (source["axis"]) { this.axis = source.axis; }
    if (source["_axis"]) { this._axis = new fhir.FhirElement(source._axis!); }
    if (source["backCurve"]) { this.backCurve = source.backCurve; }
    if (source["_backCurve"]) { this._backCurve = new fhir.FhirElement(source._backCurve!); }
    if (source["brand"]) { this.brand = source.brand; }
    if (source["_brand"]) { this._brand = new fhir.FhirElement(source._brand!); }
    if (source["color"]) { this.color = source.color; }
    if (source["_color"]) { this._color = new fhir.FhirElement(source._color!); }
    if (source["cylinder"]) { this.cylinder = source.cylinder; }
    if (source["_cylinder"]) { this._cylinder = new fhir.FhirElement(source._cylinder!); }
    if (source["diameter"]) { this.diameter = source.diameter; }
    if (source["_diameter"]) { this._diameter = new fhir.FhirElement(source._diameter!); }
    if (source["duration"]) { this.duration = new fhir.Quantity(source.duration!); }
    this.eye = null;
    if (source["eye"]) { this.eye = source.eye; }
    if (this.eye === undefined) { this.eye = null }
    if (source["_eye"]) { this._eye = new fhir.FhirElement(source._eye!); }
    if (source["note"]) { this.note = source.note.map((x:Partial<fhir.IAnnotation>) => new fhir.Annotation(x)); }
    if (source["power"]) { this.power = source.power; }
    if (source["_power"]) { this._power = new fhir.FhirElement(source._power!); }
    if (source["prism"]) { this.prism = source.prism.map((x:Partial<fhir.IVisionPrescriptionLensSpecificationPrism>) => new fhir.VisionPrescriptionLensSpecificationPrism(x)); }
    this.product = null;
    if (source["product"]) { this.product = new fhir.CodeableConcept(source.product!); }
    if (this.product === undefined) { this.product = null }
    if (source["sphere"]) { this.sphere = source.sphere; }
    if (source["_sphere"]) { this._sphere = new fhir.FhirElement(source._sphere!); }
  }
  /**
   * Check if the current VisionPrescriptionLensSpecification contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["eye"] === undefined) { missingElements.push("eye"); }
    if (this["product"] === undefined) { missingElements.push("product"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a VisionPrescriptionLensSpecification from an object that MUST contain all required elements.
   */
  static override fromStrict(source:fhir.IVisionPrescriptionLensSpecification):VisionPrescriptionLensSpecification {
    var dest:VisionPrescriptionLensSpecification = new VisionPrescriptionLensSpecification(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) { throw `VisionPrescriptionLensSpecification is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * An authorization for the provision of glasses and/or contact lenses to a patient.
 */
export class VisionPrescription extends fhir.DomainResource implements fhir.IVisionPrescription {
  /**
   * Resource Type Name
   */
  public override resourceType: "VisionPrescription";
  /**
   * The date this resource was created.
   */
  public created: string|null;
  public _created?: fhir.FhirElement|undefined;
  /**
   * Jurisdictions determine the valid lifetime of a prescription. Typically vision prescriptions are valid for two years from the date written.
   */
  public dateWritten: string|null;
  public _dateWritten?: fhir.FhirElement|undefined;
  /**
   * A reference to a resource that identifies the particular occurrence of contact between patient and health care provider during which the prescription was issued.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * A unique identifier assigned to this vision prescription.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * Contain the details of  the individual lens specifications and serves as the authorization for the fullfillment by certified professionals.
   */
  public lensSpecification: fhir.VisionPrescriptionLensSpecification[]|null;
  /**
   * A resource reference to the person to whom the vision prescription applies.
   */
  public patient: fhir.Reference|null;
  /**
   * The healthcare professional responsible for authorizing the prescription.
   */
  public prescriber: fhir.Reference|null;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status: VisionPrescriptionStatusEnum|null;
  public _status?: fhir.FhirElement|undefined;
  /**
   * Default constructor for VisionPrescription - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IVisionPrescription> = {}) {
    super(source);
    this.resourceType = 'VisionPrescription';
    this.created = null;
    if (source["created"]) { this.created = source.created; }
    if (this.created === undefined) { this.created = null }
    if (source["_created"]) { this._created = new fhir.FhirElement(source._created!); }
    this.dateWritten = null;
    if (source["dateWritten"]) { this.dateWritten = source.dateWritten; }
    if (this.dateWritten === undefined) { this.dateWritten = null }
    if (source["_dateWritten"]) { this._dateWritten = new fhir.FhirElement(source._dateWritten!); }
    if (source["encounter"]) { this.encounter = new fhir.Reference(source.encounter!); }
    if (source["identifier"]) { this.identifier = source.identifier.map((x:Partial<fhir.IIdentifier>) => new fhir.Identifier(x)); }
    this.lensSpecification = null;
    if (source["lensSpecification"]) { this.lensSpecification = source.lensSpecification.map((x:Partial<fhir.IVisionPrescriptionLensSpecification>) => new fhir.VisionPrescriptionLensSpecification(x)); }
    if (this.lensSpecification === undefined) { this.lensSpecification = null }
    this.patient = null;
    if (source["patient"]) { this.patient = new fhir.Reference(source.patient!); }
    if (this.patient === undefined) { this.patient = null }
    this.prescriber = null;
    if (source["prescriber"]) { this.prescriber = new fhir.Reference(source.prescriber!); }
    if (this.prescriber === undefined) { this.prescriber = null }
    this.status = null;
    if (source["status"]) { this.status = source.status; }
    if (this.status === undefined) { this.status = null }
    if (source["_status"]) { this._status = new fhir.FhirElement(source._status!); }
  }
  /**
   * Check if the current VisionPrescription contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["created"] === undefined) { missingElements.push("created"); }
    if (this["dateWritten"] === undefined) { missingElements.push("dateWritten"); }
    if ((!this["lensSpecification"]) || (this["lensSpecification"].length === 0)) { missingElements.push("lensSpecification"); }
    if (this["patient"] === undefined) { missingElements.push("patient"); }
    if (this["prescriber"] === undefined) { missingElements.push("prescriber"); }
    if (this["status"] === undefined) { missingElements.push("status"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a VisionPrescription from an object that MUST contain all required elements.
   */
  static override fromStrict(source:fhir.IVisionPrescription):VisionPrescription {
    var dest:VisionPrescription = new VisionPrescription(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) { throw `VisionPrescription is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Code Values for the VisionPrescription.lensSpecification.prism.base field
 */
export enum VisionPrescriptionLensSpecificationPrismBaseEnum {
  UP = "up",
  DOWN = "down",
  IN = "in",
  OUT = "out",
}
/**
 * Code Values for the VisionPrescription.lensSpecification.eye field
 */
export enum VisionPrescriptionLensSpecificationEyeEnum {
  RIGHT = "right",
  LEFT = "left",
}
/**
 * Code Values for the VisionPrescription.status field
 */
export enum VisionPrescriptionStatusEnum {
  ACTIVE = "active",
  CANCELLED = "cancelled",
  DRAFT = "draft",
  ENTERED_IN_ERROR = "entered-in-error",
}
