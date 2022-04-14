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
 * Todo.
 */
export class SubstancePolymerMonomerSetStartingMaterial extends fhirModels.BackboneElement implements fhirInterfaces.ISubstancePolymerMonomerSetStartingMaterial {
  /**
   * Todo.
   */
  amount?: fhirModels.SubstanceAmount|undefined;
  /**
   * Todo.
   */
  isDefining?: boolean|undefined;
  _isDefining?: fhirModels.Element|undefined;
  /**
   * Todo.
   */
  material?: fhirModels.CodeableConcept|undefined;
  /**
   * Todo.
   */
  type?: fhirModels.CodeableConcept|undefined;
  /**
   * Default constructor for SubstancePolymerMonomerSetStartingMaterial from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.ISubstancePolymerMonomerSetStartingMaterial>) {
    super(source);
    if (source["amount"] !== undefined) { this.amount = new fhirModels.SubstanceAmount(source.amount); }
    if (source["isDefining"] !== undefined) { this.isDefining = source.isDefining; }
    if (source["_isDefining"] !== undefined) { this._isDefining = new fhirModels.Element(source._isDefining); }
    if (source["material"] !== undefined) { this.material = new fhirModels.CodeableConcept(source.material); }
    if (source["type"] !== undefined) { this.type = new fhirModels.CodeableConcept(source.type); }
  }
  /**
   * Factory function to create a SubstancePolymerMonomerSetStartingMaterial from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.ISubstancePolymerMonomerSetStartingMaterial):SubstancePolymerMonomerSetStartingMaterial {
    var dest:SubstancePolymerMonomerSetStartingMaterial = new SubstancePolymerMonomerSetStartingMaterial(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `SubstancePolymerMonomerSetStartingMaterial is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current SubstancePolymerMonomerSetStartingMaterial contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * Todo.
 */
export class SubstancePolymerMonomerSet extends fhirModels.BackboneElement implements fhirInterfaces.ISubstancePolymerMonomerSet {
  /**
   * Todo.
   */
  ratioType?: fhirModels.CodeableConcept|undefined;
  /**
   * Todo.
   */
  startingMaterial?: fhirModels.SubstancePolymerMonomerSetStartingMaterial[]|undefined;
  /**
   * Default constructor for SubstancePolymerMonomerSet from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.ISubstancePolymerMonomerSet>) {
    super(source);
    if (source["ratioType"] !== undefined) { this.ratioType = new fhirModels.CodeableConcept(source.ratioType); }
    if (source["startingMaterial"] !== undefined) { this.startingMaterial = source.startingMaterial.map((x) => new fhirModels.SubstancePolymerMonomerSetStartingMaterial(x)); }
  }
  /**
   * Factory function to create a SubstancePolymerMonomerSet from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.ISubstancePolymerMonomerSet):SubstancePolymerMonomerSet {
    var dest:SubstancePolymerMonomerSet = new SubstancePolymerMonomerSet(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `SubstancePolymerMonomerSet is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current SubstancePolymerMonomerSet contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * Todo.
 */
export class SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation extends fhirModels.BackboneElement implements fhirInterfaces.ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation {
  /**
   * Todo.
   */
  amount?: fhirModels.SubstanceAmount|undefined;
  /**
   * Todo.
   */
  degree?: fhirModels.CodeableConcept|undefined;
  /**
   * Default constructor for SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation>) {
    super(source);
    if (source["amount"] !== undefined) { this.amount = new fhirModels.SubstanceAmount(source.amount); }
    if (source["degree"] !== undefined) { this.degree = new fhirModels.CodeableConcept(source.degree); }
  }
  /**
   * Factory function to create a SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation):SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation {
    var dest:SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation = new SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * Todo.
 */
export class SubstancePolymerRepeatRepeatUnitStructuralRepresentation extends fhirModels.BackboneElement implements fhirInterfaces.ISubstancePolymerRepeatRepeatUnitStructuralRepresentation {
  /**
   * Todo.
   */
  attachment?: fhirModels.Attachment|undefined;
  /**
   * Todo.
   */
  representation?: string|undefined;
  _representation?: fhirModels.Element|undefined;
  /**
   * Todo.
   */
  type?: fhirModels.CodeableConcept|undefined;
  /**
   * Default constructor for SubstancePolymerRepeatRepeatUnitStructuralRepresentation from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.ISubstancePolymerRepeatRepeatUnitStructuralRepresentation>) {
    super(source);
    if (source["attachment"] !== undefined) { this.attachment = new fhirModels.Attachment(source.attachment); }
    if (source["representation"] !== undefined) { this.representation = source.representation; }
    if (source["_representation"] !== undefined) { this._representation = new fhirModels.Element(source._representation); }
    if (source["type"] !== undefined) { this.type = new fhirModels.CodeableConcept(source.type); }
  }
  /**
   * Factory function to create a SubstancePolymerRepeatRepeatUnitStructuralRepresentation from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.ISubstancePolymerRepeatRepeatUnitStructuralRepresentation):SubstancePolymerRepeatRepeatUnitStructuralRepresentation {
    var dest:SubstancePolymerRepeatRepeatUnitStructuralRepresentation = new SubstancePolymerRepeatRepeatUnitStructuralRepresentation(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `SubstancePolymerRepeatRepeatUnitStructuralRepresentation is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current SubstancePolymerRepeatRepeatUnitStructuralRepresentation contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * Todo.
 */
export class SubstancePolymerRepeatRepeatUnit extends fhirModels.BackboneElement implements fhirInterfaces.ISubstancePolymerRepeatRepeatUnit {
  /**
   * Todo.
   */
  amount?: fhirModels.SubstanceAmount|undefined;
  /**
   * Todo.
   */
  degreeOfPolymerisation?: fhirModels.SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation[]|undefined;
  /**
   * Todo.
   */
  orientationOfPolymerisation?: fhirModels.CodeableConcept|undefined;
  /**
   * Todo.
   */
  repeatUnit?: string|undefined;
  _repeatUnit?: fhirModels.Element|undefined;
  /**
   * Todo.
   */
  structuralRepresentation?: fhirModels.SubstancePolymerRepeatRepeatUnitStructuralRepresentation[]|undefined;
  /**
   * Default constructor for SubstancePolymerRepeatRepeatUnit from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.ISubstancePolymerRepeatRepeatUnit>) {
    super(source);
    if (source["amount"] !== undefined) { this.amount = new fhirModels.SubstanceAmount(source.amount); }
    if (source["degreeOfPolymerisation"] !== undefined) { this.degreeOfPolymerisation = source.degreeOfPolymerisation.map((x) => new fhirModels.SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation(x)); }
    if (source["orientationOfPolymerisation"] !== undefined) { this.orientationOfPolymerisation = new fhirModels.CodeableConcept(source.orientationOfPolymerisation); }
    if (source["repeatUnit"] !== undefined) { this.repeatUnit = source.repeatUnit; }
    if (source["_repeatUnit"] !== undefined) { this._repeatUnit = new fhirModels.Element(source._repeatUnit); }
    if (source["structuralRepresentation"] !== undefined) { this.structuralRepresentation = source.structuralRepresentation.map((x) => new fhirModels.SubstancePolymerRepeatRepeatUnitStructuralRepresentation(x)); }
  }
  /**
   * Factory function to create a SubstancePolymerRepeatRepeatUnit from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.ISubstancePolymerRepeatRepeatUnit):SubstancePolymerRepeatRepeatUnit {
    var dest:SubstancePolymerRepeatRepeatUnit = new SubstancePolymerRepeatRepeatUnit(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `SubstancePolymerRepeatRepeatUnit is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current SubstancePolymerRepeatRepeatUnit contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * Todo.
 */
export class SubstancePolymerRepeat extends fhirModels.BackboneElement implements fhirInterfaces.ISubstancePolymerRepeat {
  /**
   * Todo.
   */
  averageMolecularFormula?: string|undefined;
  _averageMolecularFormula?: fhirModels.Element|undefined;
  /**
   * Todo.
   */
  numberOfUnits?: number|undefined;
  _numberOfUnits?: fhirModels.Element|undefined;
  /**
   * Todo.
   */
  repeatUnit?: fhirModels.SubstancePolymerRepeatRepeatUnit[]|undefined;
  /**
   * Todo.
   */
  repeatUnitAmountType?: fhirModels.CodeableConcept|undefined;
  /**
   * Default constructor for SubstancePolymerRepeat from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.ISubstancePolymerRepeat>) {
    super(source);
    if (source["averageMolecularFormula"] !== undefined) { this.averageMolecularFormula = source.averageMolecularFormula; }
    if (source["_averageMolecularFormula"] !== undefined) { this._averageMolecularFormula = new fhirModels.Element(source._averageMolecularFormula); }
    if (source["numberOfUnits"] !== undefined) { this.numberOfUnits = source.numberOfUnits; }
    if (source["_numberOfUnits"] !== undefined) { this._numberOfUnits = new fhirModels.Element(source._numberOfUnits); }
    if (source["repeatUnit"] !== undefined) { this.repeatUnit = source.repeatUnit.map((x) => new fhirModels.SubstancePolymerRepeatRepeatUnit(x)); }
    if (source["repeatUnitAmountType"] !== undefined) { this.repeatUnitAmountType = new fhirModels.CodeableConcept(source.repeatUnitAmountType); }
  }
  /**
   * Factory function to create a SubstancePolymerRepeat from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.ISubstancePolymerRepeat):SubstancePolymerRepeat {
    var dest:SubstancePolymerRepeat = new SubstancePolymerRepeat(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `SubstancePolymerRepeat is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current SubstancePolymerRepeat contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * Todo.
 */
export class SubstancePolymer extends fhirModels.DomainResource implements fhirInterfaces.ISubstancePolymer {
  /**
   * Resource Type Name
   */
  readonly resourceType = "SubstancePolymer";
  /**
   * Todo.
   */
  class?: fhirModels.CodeableConcept|undefined;
  /**
   * Todo.
   */
  copolymerConnectivity?: fhirModels.CodeableConcept[]|undefined;
  /**
   * Todo.
   */
  geometry?: fhirModels.CodeableConcept|undefined;
  /**
   * Todo.
   */
  modification?: string[]|undefined;
  _modification?: fhirModels.Element[]|undefined;
  /**
   * Todo.
   */
  monomerSet?: fhirModels.SubstancePolymerMonomerSet[]|undefined;
  /**
   * Todo.
   */
  repeat?: fhirModels.SubstancePolymerRepeat[]|undefined;
  /**
   * Default constructor for SubstancePolymer from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.ISubstancePolymer>) {
    super(source);
    if ((source['resourceType'] !== "SubstancePolymer") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a SubstancePolymer'; }
    if (source["class"] !== undefined) { this.class = new fhirModels.CodeableConcept(source.class); }
    if (source["copolymerConnectivity"] !== undefined) { this.copolymerConnectivity = source.copolymerConnectivity.map((x) => new fhirModels.CodeableConcept(x)); }
    if (source["geometry"] !== undefined) { this.geometry = new fhirModels.CodeableConcept(source.geometry); }
    if (source["modification"] !== undefined) { this.modification = source.modification.map((x) => (x)); }
    if (source["_modification"] !== undefined) { this._modification = source._modification.map((x) => new fhirModels.Element(x)); }
    if (source["monomerSet"] !== undefined) { this.monomerSet = source.monomerSet.map((x) => new fhirModels.SubstancePolymerMonomerSet(x)); }
    if (source["repeat"] !== undefined) { this.repeat = source.repeat.map((x) => new fhirModels.SubstancePolymerRepeat(x)); }
  }
  /**
   * Factory function to create a SubstancePolymer from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.ISubstancePolymer):SubstancePolymer {
    var dest:SubstancePolymer = new SubstancePolymer(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `SubstancePolymer is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current SubstancePolymer contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
