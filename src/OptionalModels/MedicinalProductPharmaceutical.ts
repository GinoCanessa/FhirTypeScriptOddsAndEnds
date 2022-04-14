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
 * Characteristics e.g. a products onset of action.
 */
export class MedicinalProductPharmaceuticalCharacteristics extends fhirModels.BackboneElement implements fhirInterfaces.IMedicinalProductPharmaceuticalCharacteristics {
  /**
   * A coded characteristic.
   */
  code?: fhirModels.CodeableConcept|undefined;
  /**
   * The status of characteristic e.g. assigned or pending.
   */
  status?: fhirModels.CodeableConcept|undefined;
  /**
   * Default constructor for MedicinalProductPharmaceuticalCharacteristics from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IMedicinalProductPharmaceuticalCharacteristics>) {
    super(source);
    if (source["code"] !== undefined) { this.code = new fhirModels.CodeableConcept(source.code); }
    if (source["status"] !== undefined) { this.status = new fhirModels.CodeableConcept(source.status); }
  }
  /**
   * Factory function to create a MedicinalProductPharmaceuticalCharacteristics from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IMedicinalProductPharmaceuticalCharacteristics):MedicinalProductPharmaceuticalCharacteristics {
    var dest:MedicinalProductPharmaceuticalCharacteristics = new MedicinalProductPharmaceuticalCharacteristics(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `MedicinalProductPharmaceuticalCharacteristics is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current MedicinalProductPharmaceuticalCharacteristics contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["code"] === undefined) { missingElements.push("code"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * A species specific time during which consumption of animal product is not appropriate.
 */
export class MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod extends fhirModels.BackboneElement implements fhirInterfaces.IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod {
  /**
   * Extra information about the withdrawal period.
   */
  supportingInformation?: string|undefined;
  _supportingInformation?: fhirModels.Element|undefined;
  /**
   * Coded expression for the type of tissue for which the withdrawal period applues, e.g. meat, milk.
   */
  tissue?: fhirModels.CodeableConcept|undefined;
  /**
   * A value for the time.
   */
  value?: fhirModels.Quantity|undefined;
  /**
   * Default constructor for MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod>) {
    super(source);
    if (source["supportingInformation"] !== undefined) { this.supportingInformation = source.supportingInformation; }
    if (source["_supportingInformation"] !== undefined) { this._supportingInformation = new fhirModels.Element(source._supportingInformation); }
    if (source["tissue"] !== undefined) { this.tissue = new fhirModels.CodeableConcept(source.tissue); }
    if (source["value"] !== undefined) { this.value = new fhirModels.Quantity(source.value); }
  }
  /**
   * Factory function to create a MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod):MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod {
    var dest:MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod = new MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["tissue"] === undefined) { missingElements.push("tissue"); }
    if (this["value"] === undefined) { missingElements.push("value"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * A species for which this route applies.
 */
export class MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies extends fhirModels.BackboneElement implements fhirInterfaces.IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies {
  /**
   * Coded expression for the species.
   */
  code?: fhirModels.CodeableConcept|undefined;
  /**
   * A species specific time during which consumption of animal product is not appropriate.
   */
  withdrawalPeriod?: fhirModels.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod[]|undefined;
  /**
   * Default constructor for MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies>) {
    super(source);
    if (source["code"] !== undefined) { this.code = new fhirModels.CodeableConcept(source.code); }
    if (source["withdrawalPeriod"] !== undefined) { this.withdrawalPeriod = source.withdrawalPeriod.map((x) => new fhirModels.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod(x)); }
  }
  /**
   * Factory function to create a MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies):MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies {
    var dest:MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies = new MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["code"] === undefined) { missingElements.push("code"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * The path by which the pharmaceutical product is taken into or makes contact with the body.
 */
export class MedicinalProductPharmaceuticalRouteOfAdministration extends fhirModels.BackboneElement implements fhirInterfaces.IMedicinalProductPharmaceuticalRouteOfAdministration {
  /**
   * Coded expression for the route.
   */
  code?: fhirModels.CodeableConcept|undefined;
  /**
   * The first dose (dose quantity) administered in humans can be specified, for a product under investigation, using a numerical value and its unit of measurement.
   */
  firstDose?: fhirModels.Quantity|undefined;
  /**
   * The maximum dose per day (maximum dose quantity to be administered in any one 24-h period) that can be administered as per the protocol referenced in the clinical trial authorisation.
   */
  maxDosePerDay?: fhirModels.Quantity|undefined;
  /**
   * The maximum dose per treatment period that can be administered as per the protocol referenced in the clinical trial authorisation.
   */
  maxDosePerTreatmentPeriod?: fhirModels.Ratio|undefined;
  /**
   * The maximum single dose that can be administered as per the protocol of a clinical trial can be specified using a numerical value and its unit of measurement.
   */
  maxSingleDose?: fhirModels.Quantity|undefined;
  /**
   * The maximum treatment period during which an Investigational Medicinal Product can be administered as per the protocol referenced in the clinical trial authorisation.
   */
  maxTreatmentPeriod?: fhirModels.Duration|undefined;
  /**
   * A species for which this route applies.
   */
  targetSpecies?: fhirModels.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies[]|undefined;
  /**
   * Default constructor for MedicinalProductPharmaceuticalRouteOfAdministration from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IMedicinalProductPharmaceuticalRouteOfAdministration>) {
    super(source);
    if (source["code"] !== undefined) { this.code = new fhirModels.CodeableConcept(source.code); }
    if (source["firstDose"] !== undefined) { this.firstDose = new fhirModels.Quantity(source.firstDose); }
    if (source["maxDosePerDay"] !== undefined) { this.maxDosePerDay = new fhirModels.Quantity(source.maxDosePerDay); }
    if (source["maxDosePerTreatmentPeriod"] !== undefined) { this.maxDosePerTreatmentPeriod = new fhirModels.Ratio(source.maxDosePerTreatmentPeriod); }
    if (source["maxSingleDose"] !== undefined) { this.maxSingleDose = new fhirModels.Quantity(source.maxSingleDose); }
    if (source["maxTreatmentPeriod"] !== undefined) { this.maxTreatmentPeriod = new fhirModels.Duration(source.maxTreatmentPeriod); }
    if (source["targetSpecies"] !== undefined) { this.targetSpecies = source.targetSpecies.map((x) => new fhirModels.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies(x)); }
  }
  /**
   * Factory function to create a MedicinalProductPharmaceuticalRouteOfAdministration from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IMedicinalProductPharmaceuticalRouteOfAdministration):MedicinalProductPharmaceuticalRouteOfAdministration {
    var dest:MedicinalProductPharmaceuticalRouteOfAdministration = new MedicinalProductPharmaceuticalRouteOfAdministration(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `MedicinalProductPharmaceuticalRouteOfAdministration is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current MedicinalProductPharmaceuticalRouteOfAdministration contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["code"] === undefined) { missingElements.push("code"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * A pharmaceutical product described in terms of its composition and dose form.
 */
export class MedicinalProductPharmaceutical extends fhirModels.DomainResource implements fhirInterfaces.IMedicinalProductPharmaceutical {
  /**
   * Resource Type Name
   */
  readonly resourceType = "MedicinalProductPharmaceutical";
  /**
   * The administrable dose form, after necessary reconstitution.
   */
  administrableDoseForm?: fhirModels.CodeableConcept|undefined;
  /**
   * Characteristics e.g. a products onset of action.
   */
  characteristics?: fhirModels.MedicinalProductPharmaceuticalCharacteristics[]|undefined;
  /**
   * Accompanying device.
   */
  device?: fhirModels.Reference[]|undefined;
  /**
   * An identifier for the pharmaceutical medicinal product.
   */
  identifier?: fhirModels.Identifier[]|undefined;
  /**
   * Ingredient.
   */
  ingredient?: fhirModels.Reference[]|undefined;
  /**
   * The path by which the pharmaceutical product is taken into or makes contact with the body.
   */
  routeOfAdministration?: fhirModels.MedicinalProductPharmaceuticalRouteOfAdministration[]|undefined;
  /**
   * Todo.
   */
  unitOfPresentation?: fhirModels.CodeableConcept|undefined;
  /**
   * Default constructor for MedicinalProductPharmaceutical from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IMedicinalProductPharmaceutical>) {
    super(source);
    if ((source['resourceType'] !== "MedicinalProductPharmaceutical") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a MedicinalProductPharmaceutical'; }
    if (source["administrableDoseForm"] !== undefined) { this.administrableDoseForm = new fhirModels.CodeableConcept(source.administrableDoseForm); }
    if (source["characteristics"] !== undefined) { this.characteristics = source.characteristics.map((x) => new fhirModels.MedicinalProductPharmaceuticalCharacteristics(x)); }
    if (source["device"] !== undefined) { this.device = source.device.map((x) => new fhirModels.Reference(x)); }
    if (source["identifier"] !== undefined) { this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x)); }
    if (source["ingredient"] !== undefined) { this.ingredient = source.ingredient.map((x) => new fhirModels.Reference(x)); }
    if (source["routeOfAdministration"] !== undefined) { this.routeOfAdministration = source.routeOfAdministration.map((x) => new fhirModels.MedicinalProductPharmaceuticalRouteOfAdministration(x)); }
    if (source["unitOfPresentation"] !== undefined) { this.unitOfPresentation = new fhirModels.CodeableConcept(source.unitOfPresentation); }
  }
  /**
   * Factory function to create a MedicinalProductPharmaceutical from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IMedicinalProductPharmaceutical):MedicinalProductPharmaceutical {
    var dest:MedicinalProductPharmaceutical = new MedicinalProductPharmaceutical(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `MedicinalProductPharmaceutical is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current MedicinalProductPharmaceutical contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["administrableDoseForm"] === undefined) { missingElements.push("administrableDoseForm"); }
    if ((this["routeOfAdministration"] === undefined) || (this["routeOfAdministration"].length === 0)) { missingElements.push("routeOfAdministration"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
