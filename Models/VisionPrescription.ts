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
 * Allows for adjustment on two axis.
 */
export class VisionPrescriptionLensSpecificationPrism extends fhirModels.BackboneElement implements fhirInterfaces.IVisionPrescriptionLensSpecificationPrism {
  /**
   * Amount of prism to compensate for eye alignment in fractional units.
   */
  amount: number|undefined;
  _amount?: fhirModels.Element|undefined;
  /**
   * The relative base, or reference lens edge, for the prism.
   */
  base: VisionPrescriptionLensSpecificationPrismBaseEnum|undefined;
  _base?: fhirModels.Element|undefined;
  /**
   * Default constructor for VisionPrescriptionLensSpecificationPrism from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IVisionPrescriptionLensSpecificationPrism>) {
    super(source);
    if (source["amount"] !== undefined) { this.amount = source.amount; }
    if (source["_amount"] !== undefined) { this._amount = new fhirModels.Element(source._amount); }
    if (source["base"] !== undefined) { this.base = source.base; }
    if (source["_base"] !== undefined) { this._base = new fhirModels.Element(source._base); }
  }
  /**
   * Check if the current VisionPrescriptionLensSpecificationPrism contains all required elements.
   */
  checkRequiredElements():string[] {
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
  static CreateStrict(source:fhirInterfaces.IVisionPrescriptionLensSpecificationPrism):VisionPrescriptionLensSpecificationPrism {
    var dest:VisionPrescriptionLensSpecificationPrism = new VisionPrescriptionLensSpecificationPrism(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `VisionPrescriptionLensSpecificationPrism is missing elements: ${missingElements.join(", ")}`
     }
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
 * Contain the details of  the individual lens specifications and serves as the authorization for the fullfillment by certified professionals.
 */
export class VisionPrescriptionLensSpecification extends fhirModels.BackboneElement implements fhirInterfaces.IVisionPrescriptionLensSpecification {
  /**
   * Power adjustment for multifocal lenses measured in dioptres (0.25 units).
   */
  add?: number|undefined;
  _add?: fhirModels.Element|undefined;
  /**
   * The limits are +180 and -180 degrees.
   */
  axis?: number|undefined;
  _axis?: fhirModels.Element|undefined;
  /**
   * Back curvature measured in millimetres.
   */
  backCurve?: number|undefined;
  _backCurve?: fhirModels.Element|undefined;
  /**
   * Brand recommendations or restrictions.
   */
  brand?: string|undefined;
  _brand?: fhirModels.Element|undefined;
  /**
   * Special color or pattern.
   */
  color?: string|undefined;
  _color?: fhirModels.Element|undefined;
  /**
   * Power adjustment for astigmatism measured in dioptres (0.25 units).
   */
  cylinder?: number|undefined;
  _cylinder?: fhirModels.Element|undefined;
  /**
   * Contact lens diameter measured in millimetres.
   */
  diameter?: number|undefined;
  _diameter?: fhirModels.Element|undefined;
  /**
   * The recommended maximum wear period for the lens.
   */
  duration?: fhirModels.Quantity|undefined;
  /**
   * May also appear as OD (oculus dexter) for the right eye and OS (oculus siniter) for the left eye.
   */
  eye: VisionPrescriptionLensSpecificationEyeEnum|undefined;
  _eye?: fhirModels.Element|undefined;
  /**
   * Notes for special requirements such as coatings and lens materials.
   */
  note?: fhirModels.Annotation[]|undefined;
  /**
   * Contact lens power measured in dioptres (0.25 units).
   */
  power?: number|undefined;
  _power?: fhirModels.Element|undefined;
  /**
   * Allows for adjustment on two axis.
   */
  prism?: fhirModels.VisionPrescriptionLensSpecificationPrism[]|undefined;
  /**
   * Identifies the type of vision correction product which is required for the patient.
   */
  product: fhirModels.CodeableConcept|undefined;
  /**
   * The value is negative for near-sighted and positive for far sighted.
   * Often insurance will not cover a lens with power between +75 and -75.
   */
  sphere?: number|undefined;
  _sphere?: fhirModels.Element|undefined;
  /**
   * Default constructor for VisionPrescriptionLensSpecification from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IVisionPrescriptionLensSpecification>) {
    super(source);
    if (source["add"] !== undefined) { this.add = source.add; }
    if (source["_add"] !== undefined) { this._add = new fhirModels.Element(source._add); }
    if (source["axis"] !== undefined) { this.axis = source.axis; }
    if (source["_axis"] !== undefined) { this._axis = new fhirModels.Element(source._axis); }
    if (source["backCurve"] !== undefined) { this.backCurve = source.backCurve; }
    if (source["_backCurve"] !== undefined) { this._backCurve = new fhirModels.Element(source._backCurve); }
    if (source["brand"] !== undefined) { this.brand = source.brand; }
    if (source["_brand"] !== undefined) { this._brand = new fhirModels.Element(source._brand); }
    if (source["color"] !== undefined) { this.color = source.color; }
    if (source["_color"] !== undefined) { this._color = new fhirModels.Element(source._color); }
    if (source["cylinder"] !== undefined) { this.cylinder = source.cylinder; }
    if (source["_cylinder"] !== undefined) { this._cylinder = new fhirModels.Element(source._cylinder); }
    if (source["diameter"] !== undefined) { this.diameter = source.diameter; }
    if (source["_diameter"] !== undefined) { this._diameter = new fhirModels.Element(source._diameter); }
    if (source["duration"] !== undefined) { this.duration = new fhirModels.Quantity(source.duration); }
    if (source["eye"] !== undefined) { this.eye = source.eye; }
    if (source["_eye"] !== undefined) { this._eye = new fhirModels.Element(source._eye); }
    if (source["note"] !== undefined) { this.note = source.note.map((x) => new fhirModels.Annotation(x)); }
    if (source["power"] !== undefined) { this.power = source.power; }
    if (source["_power"] !== undefined) { this._power = new fhirModels.Element(source._power); }
    if (source["prism"] !== undefined) { this.prism = source.prism.map((x) => new fhirModels.VisionPrescriptionLensSpecificationPrism(x)); }
    if (source["product"] !== undefined) { this.product = new fhirModels.CodeableConcept(source.product); }
    if (source["sphere"] !== undefined) { this.sphere = source.sphere; }
    if (source["_sphere"] !== undefined) { this._sphere = new fhirModels.Element(source._sphere); }
  }
  /**
   * Check if the current VisionPrescriptionLensSpecification contains all required elements.
   */
  checkRequiredElements():string[] {
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
  static CreateStrict(source:fhirInterfaces.IVisionPrescriptionLensSpecification):VisionPrescriptionLensSpecification {
    var dest:VisionPrescriptionLensSpecification = new VisionPrescriptionLensSpecification(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `VisionPrescriptionLensSpecification is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
}
/**
 * Code Values for the VisionPrescription.lensSpecification.eye field
 */
export enum VisionPrescriptionLensSpecificationEyeEnum {
  RIGHT = "right",
  LEFT = "left",
}
/**
 * An authorization for the provision of glasses and/or contact lenses to a patient.
 */
export class VisionPrescription extends fhirModels.DomainResource implements fhirInterfaces.IVisionPrescription {
  /**
   * Resource Type Name
   */
  readonly resourceType = "VisionPrescription";
  /**
   * The date this resource was created.
   */
  created: string|undefined;
  _created?: fhirModels.Element|undefined;
  /**
   * Jurisdictions determine the valid lifetime of a prescription. Typically vision prescriptions are valid for two years from the date written.
   */
  dateWritten: string|undefined;
  _dateWritten?: fhirModels.Element|undefined;
  /**
   * A reference to a resource that identifies the particular occurrence of contact between patient and health care provider during which the prescription was issued.
   */
  encounter?: fhirModels.Reference|undefined;
  /**
   * A unique identifier assigned to this vision prescription.
   */
  identifier?: fhirModels.Identifier[]|undefined;
  /**
   * Contain the details of  the individual lens specifications and serves as the authorization for the fullfillment by certified professionals.
   */
  lensSpecification: fhirModels.VisionPrescriptionLensSpecification[]|undefined;
  /**
   * A resource reference to the person to whom the vision prescription applies.
   */
  patient: fhirModels.Reference|undefined;
  /**
   * The healthcare professional responsible for authorizing the prescription.
   */
  prescriber: fhirModels.Reference|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: VisionPrescriptionStatusEnum|undefined;
  _status?: fhirModels.Element|undefined;
  /**
   * Default constructor for VisionPrescription from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IVisionPrescription>) {
    super(source);
    if ((source['resourceType'] !== "VisionPrescription") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a VisionPrescription'; }
    if (source["created"] !== undefined) { this.created = source.created; }
    if (source["_created"] !== undefined) { this._created = new fhirModels.Element(source._created); }
    if (source["dateWritten"] !== undefined) { this.dateWritten = source.dateWritten; }
    if (source["_dateWritten"] !== undefined) { this._dateWritten = new fhirModels.Element(source._dateWritten); }
    if (source["encounter"] !== undefined) { this.encounter = new fhirModels.Reference(source.encounter); }
    if (source["identifier"] !== undefined) { this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x)); }
    if (source["lensSpecification"] !== undefined) { this.lensSpecification = source.lensSpecification.map((x) => new fhirModels.VisionPrescriptionLensSpecification(x)); }
    if (source["patient"] !== undefined) { this.patient = new fhirModels.Reference(source.patient); }
    if (source["prescriber"] !== undefined) { this.prescriber = new fhirModels.Reference(source.prescriber); }
    if (source["status"] !== undefined) { this.status = source.status; }
    if (source["_status"] !== undefined) { this._status = new fhirModels.Element(source._status); }
  }
  /**
   * Check if the current VisionPrescription contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["created"] === undefined) { missingElements.push("created"); }
    if (this["dateWritten"] === undefined) { missingElements.push("dateWritten"); }
    if ((this["lensSpecification"] === undefined) || (this["lensSpecification"].length === 0)) { missingElements.push("lensSpecification"); }
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
  static CreateStrict(source:fhirInterfaces.IVisionPrescription):VisionPrescription {
    var dest:VisionPrescription = new VisionPrescription(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `VisionPrescription is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
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
