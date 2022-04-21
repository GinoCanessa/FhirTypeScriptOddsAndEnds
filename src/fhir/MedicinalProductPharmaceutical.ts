// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: MedicinalProductPharmaceutical

import * as fhir from '../fhir.js'


/**
 * Characteristics e.g. a products onset of action.
 */
export type IMedicinalProductPharmaceuticalCharacteristics = fhir.IBackboneElement & { 
  /**
   * A coded characteristic.
   */
  code: fhir.ICodeableConcept|null;
  /**
   * The status of characteristic e.g. assigned or pending.
   */
  status?: fhir.ICodeableConcept|undefined;
}

/**
 * A species specific time during which consumption of animal product is not appropriate.
 */
export type IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod = fhir.IBackboneElement & { 
  /**
   * Coded expression for the type of tissue for which the withdrawal period applues, e.g. meat, milk.
   */
  tissue: fhir.ICodeableConcept|null;
  /**
   * A value for the time.
   */
  value: fhir.IQuantity|null;
  /**
   * Extra information about the withdrawal period.
   */
  supportingInformation?: string|undefined;
  /**
   * Extended properties for primitive element: MedicinalProductPharmaceutical.routeOfAdministration.targetSpecies.withdrawalPeriod.supportingInformation
   */
  _supportingInformation?: fhir.IFhirElement|undefined;
}

/**
 * A species for which this route applies.
 */
export type IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies = fhir.IBackboneElement & { 
  /**
   * Coded expression for the species.
   */
  code: fhir.ICodeableConcept|null;
  /**
   * A species specific time during which consumption of animal product is not appropriate.
   */
  withdrawalPeriod?: fhir.IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod[]|undefined;
}

/**
 * The path by which the pharmaceutical product is taken into or makes contact with the body.
 */
export type IMedicinalProductPharmaceuticalRouteOfAdministration = fhir.IBackboneElement & { 
  /**
   * Coded expression for the route.
   */
  code: fhir.ICodeableConcept|null;
  /**
   * The first dose (dose quantity) administered in humans can be specified, for a product under investigation, using a numerical value and its unit of measurement.
   */
  firstDose?: fhir.IQuantity|undefined;
  /**
   * The maximum single dose that can be administered as per the protocol of a clinical trial can be specified using a numerical value and its unit of measurement.
   */
  maxSingleDose?: fhir.IQuantity|undefined;
  /**
   * The maximum dose per day (maximum dose quantity to be administered in any one 24-h period) that can be administered as per the protocol referenced in the clinical trial authorisation.
   */
  maxDosePerDay?: fhir.IQuantity|undefined;
  /**
   * The maximum dose per treatment period that can be administered as per the protocol referenced in the clinical trial authorisation.
   */
  maxDosePerTreatmentPeriod?: fhir.IRatio|undefined;
  /**
   * The maximum treatment period during which an Investigational Medicinal Product can be administered as per the protocol referenced in the clinical trial authorisation.
   */
  maxTreatmentPeriod?: fhir.IDuration|undefined;
  /**
   * A species for which this route applies.
   */
  targetSpecies?: fhir.IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies[]|undefined;
}

/**
 * A pharmaceutical product described in terms of its composition and dose form.
 */
export type IMedicinalProductPharmaceutical = fhir.IDomainResource & { 
  /**
   * Resource Type Name
   */
  resourceType: "MedicinalProductPharmaceutical";
  /**
   * An identifier for the pharmaceutical medicinal product.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * The administrable dose form, after necessary reconstitution.
   */
  administrableDoseForm: fhir.ICodeableConcept|null;
  /**
   * Todo.
   */
  unitOfPresentation?: fhir.ICodeableConcept|undefined;
  /**
   * Ingredient.
   */
  ingredient?: fhir.IReference[]|undefined;
  /**
   * Accompanying device.
   */
  device?: fhir.IReference[]|undefined;
  /**
   * Characteristics e.g. a products onset of action.
   */
  characteristics?: fhir.IMedicinalProductPharmaceuticalCharacteristics[]|undefined;
  /**
   * The path by which the pharmaceutical product is taken into or makes contact with the body.
   */
  routeOfAdministration: fhir.IMedicinalProductPharmaceuticalRouteOfAdministration[]|null;
}

/**
 * Characteristics e.g. a products onset of action.
 */
export class MedicinalProductPharmaceuticalCharacteristics extends fhir.BackboneElement implements IMedicinalProductPharmaceuticalCharacteristics {
  /**
   * A coded characteristic.
   */
  public code: fhir.CodeableConcept|null;
  /**
   * The status of characteristic e.g. assigned or pending.
   */
  public status?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for MedicinalProductPharmaceuticalCharacteristics - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IMedicinalProductPharmaceuticalCharacteristics> = { }) {
    super(source);
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code!); }
    else { this.code = null; }
    if (source['status']) { this.status = new fhir.CodeableConcept(source.status!); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["code"]) { results.push(["code",'Missing required element: MedicinalProductPharmaceutical.characteristics.code']); }
    if (this["code"]) { results.push(...this.code.doModelValidation()); }
    if (this["status"]) { results.push(...this.status.doModelValidation()); }
    return results;
  }
}

/**
 * A species specific time during which consumption of animal product is not appropriate.
 */
export class MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod extends fhir.BackboneElement implements IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod {
  /**
   * Coded expression for the type of tissue for which the withdrawal period applues, e.g. meat, milk.
   */
  public tissue: fhir.CodeableConcept|null;
  /**
   * A value for the time.
   */
  public value: fhir.Quantity|null;
  /**
   * Extra information about the withdrawal period.
   */
  public supportingInformation?: string|undefined;
  /**
   * Extended properties for primitive element: MedicinalProductPharmaceutical.routeOfAdministration.targetSpecies.withdrawalPeriod.supportingInformation
   */
  public _supportingInformation?: fhir.FhirElement|undefined;
  /**
   * Default constructor for MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod> = { }) {
    super(source);
    if (source['tissue']) { this.tissue = new fhir.CodeableConcept(source.tissue!); }
    else { this.tissue = null; }
    if (source['value']) { this.value = new fhir.Quantity(source.value!); }
    else { this.value = null; }
    if (source['supportingInformation']) { this.supportingInformation = source.supportingInformation; }
    if (source['_supportingInformation']) { this._supportingInformation = new fhir.FhirElement(source._supportingInformation!); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["tissue"]) { results.push(["tissue",'Missing required element: MedicinalProductPharmaceutical.routeOfAdministration.targetSpecies.withdrawalPeriod.tissue']); }
    if (this["tissue"]) { results.push(...this.tissue.doModelValidation()); }
    if (!this["value"]) { results.push(["value",'Missing required element: MedicinalProductPharmaceutical.routeOfAdministration.targetSpecies.withdrawalPeriod.value']); }
    if (this["value"]) { results.push(...this.value.doModelValidation()); }
    if (this["_supportingInformation"]) { results.push(...this._supportingInformation.doModelValidation()); }
    return results;
  }
}

/**
 * A species for which this route applies.
 */
export class MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies extends fhir.BackboneElement implements IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies {
  /**
   * Coded expression for the species.
   */
  public code: fhir.CodeableConcept|null;
  /**
   * A species specific time during which consumption of animal product is not appropriate.
   */
  public withdrawalPeriod?: fhir.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod[]|undefined;
  /**
   * Default constructor for MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies> = { }) {
    super(source);
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code!); }
    else { this.code = null; }
    if (source['withdrawalPeriod']) { this.withdrawalPeriod = source.withdrawalPeriod.map((x) => new fhir.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod(x)); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["code"]) { results.push(["code",'Missing required element: MedicinalProductPharmaceutical.routeOfAdministration.targetSpecies.code']); }
    if (this["code"]) { results.push(...this.code.doModelValidation()); }
    if (this["withdrawalPeriod"]) { this.withdrawalPeriod.forEach((x) => { results.push(...x.doModelValidation()); }) }
    return results;
  }
}

/**
 * The path by which the pharmaceutical product is taken into or makes contact with the body.
 */
export class MedicinalProductPharmaceuticalRouteOfAdministration extends fhir.BackboneElement implements IMedicinalProductPharmaceuticalRouteOfAdministration {
  /**
   * Coded expression for the route.
   */
  public code: fhir.CodeableConcept|null;
  /**
   * The first dose (dose quantity) administered in humans can be specified, for a product under investigation, using a numerical value and its unit of measurement.
   */
  public firstDose?: fhir.Quantity|undefined;
  /**
   * The maximum single dose that can be administered as per the protocol of a clinical trial can be specified using a numerical value and its unit of measurement.
   */
  public maxSingleDose?: fhir.Quantity|undefined;
  /**
   * The maximum dose per day (maximum dose quantity to be administered in any one 24-h period) that can be administered as per the protocol referenced in the clinical trial authorisation.
   */
  public maxDosePerDay?: fhir.Quantity|undefined;
  /**
   * The maximum dose per treatment period that can be administered as per the protocol referenced in the clinical trial authorisation.
   */
  public maxDosePerTreatmentPeriod?: fhir.Ratio|undefined;
  /**
   * The maximum treatment period during which an Investigational Medicinal Product can be administered as per the protocol referenced in the clinical trial authorisation.
   */
  public maxTreatmentPeriod?: fhir.Duration|undefined;
  /**
   * A species for which this route applies.
   */
  public targetSpecies?: fhir.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies[]|undefined;
  /**
   * Default constructor for MedicinalProductPharmaceuticalRouteOfAdministration - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IMedicinalProductPharmaceuticalRouteOfAdministration> = { }) {
    super(source);
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code!); }
    else { this.code = null; }
    if (source['firstDose']) { this.firstDose = new fhir.Quantity(source.firstDose!); }
    if (source['maxSingleDose']) { this.maxSingleDose = new fhir.Quantity(source.maxSingleDose!); }
    if (source['maxDosePerDay']) { this.maxDosePerDay = new fhir.Quantity(source.maxDosePerDay!); }
    if (source['maxDosePerTreatmentPeriod']) { this.maxDosePerTreatmentPeriod = new fhir.Ratio(source.maxDosePerTreatmentPeriod!); }
    if (source['maxTreatmentPeriod']) { this.maxTreatmentPeriod = new fhir.Duration(source.maxTreatmentPeriod!); }
    if (source['targetSpecies']) { this.targetSpecies = source.targetSpecies.map((x) => new fhir.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies(x)); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["code"]) { results.push(["code",'Missing required element: MedicinalProductPharmaceutical.routeOfAdministration.code']); }
    if (this["code"]) { results.push(...this.code.doModelValidation()); }
    if (this["firstDose"]) { results.push(...this.firstDose.doModelValidation()); }
    if (this["maxSingleDose"]) { results.push(...this.maxSingleDose.doModelValidation()); }
    if (this["maxDosePerDay"]) { results.push(...this.maxDosePerDay.doModelValidation()); }
    if (this["maxDosePerTreatmentPeriod"]) { results.push(...this.maxDosePerTreatmentPeriod.doModelValidation()); }
    if (this["maxTreatmentPeriod"]) { results.push(...this.maxTreatmentPeriod.doModelValidation()); }
    if (this["targetSpecies"]) { this.targetSpecies.forEach((x) => { results.push(...x.doModelValidation()); }) }
    return results;
  }
}

/**
 * A pharmaceutical product described in terms of its composition and dose form.
 */
export class MedicinalProductPharmaceutical extends fhir.DomainResource implements IMedicinalProductPharmaceutical {
  /**
   * Resource Type Name
   */
  public resourceType: "MedicinalProductPharmaceutical";
  /**
   * An identifier for the pharmaceutical medicinal product.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * The administrable dose form, after necessary reconstitution.
   */
  public administrableDoseForm: fhir.CodeableConcept|null;
  /**
   * Todo.
   */
  public unitOfPresentation?: fhir.CodeableConcept|undefined;
  /**
   * Ingredient.
   */
  public ingredient?: fhir.Reference[]|undefined;
  /**
   * Accompanying device.
   */
  public device?: fhir.Reference[]|undefined;
  /**
   * Characteristics e.g. a products onset of action.
   */
  public characteristics?: fhir.MedicinalProductPharmaceuticalCharacteristics[]|undefined;
  /**
   * The path by which the pharmaceutical product is taken into or makes contact with the body.
   */
  public routeOfAdministration: fhir.MedicinalProductPharmaceuticalRouteOfAdministration[]|null;
  /**
   * Default constructor for MedicinalProductPharmaceutical - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IMedicinalProductPharmaceutical> = { }) {
    super(source);
    this.resourceType = 'MedicinalProductPharmaceutical';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['administrableDoseForm']) { this.administrableDoseForm = new fhir.CodeableConcept(source.administrableDoseForm!); }
    else { this.administrableDoseForm = null; }
    if (source['unitOfPresentation']) { this.unitOfPresentation = new fhir.CodeableConcept(source.unitOfPresentation!); }
    if (source['ingredient']) { this.ingredient = source.ingredient.map((x) => new fhir.Reference(x)); }
    if (source['device']) { this.device = source.device.map((x) => new fhir.Reference(x)); }
    if (source['characteristics']) { this.characteristics = source.characteristics.map((x) => new fhir.MedicinalProductPharmaceuticalCharacteristics(x)); }
    if (source['routeOfAdministration']) { this.routeOfAdministration = source.routeOfAdministration.map((x) => new fhir.MedicinalProductPharmaceuticalRouteOfAdministration(x)); }
    else { this.routeOfAdministration = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["resourceType"]) { results.push(["resourceType",'Missing required element: MedicinalProductPharmaceutical.resourceType']); }
    if (this["identifier"]) { this.identifier.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (!this["administrableDoseForm"]) { results.push(["administrableDoseForm",'Missing required element: MedicinalProductPharmaceutical.administrableDoseForm']); }
    if (this["administrableDoseForm"]) { results.push(...this.administrableDoseForm.doModelValidation()); }
    if (this["unitOfPresentation"]) { results.push(...this.unitOfPresentation.doModelValidation()); }
    if (this["ingredient"]) { this.ingredient.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["device"]) { this.device.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["characteristics"]) { this.characteristics.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if ((!this["routeOfAdministration"]) || (this["routeOfAdministration"].length === 0)) { results.push(["routeOfAdministration",'Missing required element: MedicinalProductPharmaceutical.routeOfAdministration']); }
    if (this["routeOfAdministration"]) { this.routeOfAdministration.forEach((x) => { results.push(...x.doModelValidation()); }) }
    return results;
  }
}
