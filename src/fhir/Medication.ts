// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Medication

import * as fhir from '../fhir.js'

import { MedicationCodesValueSet, MedicationCodesValueSetType, MedicationCodesValueSetEnum } from '../fhirValueSets/MedicationCodesValueSet.js'
import { MedicationStatusValueSet, MedicationStatusValueSetType, MedicationStatusValueSetEnum } from '../fhirValueSets/MedicationStatusValueSet.js'
import { MedicationFormCodesValueSet, MedicationFormCodesValueSetType, MedicationFormCodesValueSetEnum } from '../fhirValueSets/MedicationFormCodesValueSet.js'

/**
 * The ingredients need not be a complete list.  If an ingredient is not specified, this does not indicate whether an ingredient is present or absent.  If an ingredient is specified it does not mean that all ingredients are specified.  It is possible to specify both inactive and active ingredients.
 */
export type IMedicationIngredient = fhir.IBackboneElement & { 
  /**
   * The actual ingredient - either a substance (simple ingredient) or another medication of a medication.
   */
  itemCodeableConcept?: fhir.ICodeableConcept|undefined;
  /**
   * The actual ingredient - either a substance (simple ingredient) or another medication of a medication.
   */
  itemReference?: fhir.IReference|undefined;
  /**
   * Indication of whether this ingredient affects the therapeutic action of the drug.
   */
  isActive?: boolean|undefined;
  /**
   * Extended properties for primitive element: Medication.ingredient.isActive
   */
  _isActive?: fhir.IFhirElement|undefined;
  /**
   * Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.  This is expressed as a ratio where the numerator is 250mg and the denominator is 1 tablet.
   */
  strength?: fhir.IRatio|undefined;
}

/**
 * Information that only applies to packages (not products).
 */
export type IMedicationBatch = fhir.IBackboneElement & { 
  /**
   * The assigned lot number of a batch of the specified product.
   */
  lotNumber?: string|undefined;
  /**
   * Extended properties for primitive element: Medication.batch.lotNumber
   */
  _lotNumber?: fhir.IFhirElement|undefined;
  /**
   * When this specific batch of product will expire.
   */
  expirationDate?: string|undefined;
  /**
   * Extended properties for primitive element: Medication.batch.expirationDate
   */
  _expirationDate?: fhir.IFhirElement|undefined;
}

/**
 * This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use.
 */
export type IMedication = fhir.IDomainResource & { 
  /**
   * Resource Type Name
   */
  resourceType: "Medication";
  /**
   * The serial number could be included as an identifier.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * Depending on the context of use, the code that was actually selected by the user (prescriber, dispenser, etc.) will have the coding.userSelected set to true.  As described in the coding datatype: "A coding may be marked as a "userSelected" if a user selected the particular coded value in a user interface (e.g. the user selects an item in a pick-list). If a user selected coding exists, it is the preferred choice for performing translations etc. Other codes can only be literal translations to alternative code systems, or codes at a lower level of granularity (e.g. a generic code for a vendor-specific primary one).
   */
  code?: fhir.ICodeableConcept|undefined;
  /**
   * This status is intended to identify if the medication in a local system is in active use within a drug database or inventory.  For example, a pharmacy system may create a new drug file record for a compounded product "ABC Hospital Special Cream" with an active status.  At some point in the future, it may be determined that the drug record was created with an error and the status is changed to "entered in error".   This status is not intended to specify if a medication is part of a particular formulary.  It is possible that the drug record may be referenced by multiple formularies or catalogues and each of those entries would have a separate status.
   */
  status?: MedicationStatusValueSetEnum|undefined;
  /**
   * Extended properties for primitive element: Medication.status
   */
  _status?: fhir.IFhirElement|undefined;
  /**
   * Describes the details of the manufacturer of the medication product.  This is not intended to represent the distributor of a medication product.
   */
  manufacturer?: fhir.IReference|undefined;
  /**
   * When Medication is referenced from MedicationRequest, this is the ordered form.  When Medication is referenced within MedicationDispense, this is the dispensed form.  When Medication is referenced within MedicationAdministration, this is administered form.
   */
  form?: fhir.ICodeableConcept|undefined;
  /**
   * Specific amount of the drug in the packaged product.  For example, when specifying a product that has the same strength (For example, Insulin glargine 100 unit per mL solution for injection), this attribute provides additional clarification of the package amount (For example, 3 mL, 10mL, etc.).
   */
  amount?: fhir.IRatio|undefined;
  /**
   * The ingredients need not be a complete list.  If an ingredient is not specified, this does not indicate whether an ingredient is present or absent.  If an ingredient is specified it does not mean that all ingredients are specified.  It is possible to specify both inactive and active ingredients.
   */
  ingredient?: fhir.IMedicationIngredient[]|undefined;
  /**
   * Information that only applies to packages (not products).
   */
  batch?: fhir.IMedicationBatch|undefined;
}

/**
 * The ingredients need not be a complete list.  If an ingredient is not specified, this does not indicate whether an ingredient is present or absent.  If an ingredient is specified it does not mean that all ingredients are specified.  It is possible to specify both inactive and active ingredients.
 */
export class MedicationIngredient extends fhir.BackboneElement implements IMedicationIngredient {
  /**
   * The actual ingredient - either a substance (simple ingredient) or another medication of a medication.
   */
  public itemCodeableConcept?: fhir.CodeableConcept|undefined;
  /**
   * The actual ingredient - either a substance (simple ingredient) or another medication of a medication.
   */
  public itemReference?: fhir.Reference|undefined;
  /**
   * Indication of whether this ingredient affects the therapeutic action of the drug.
   */
  public isActive?: boolean|undefined;
  /**
   * Extended properties for primitive element: Medication.ingredient.isActive
   */
  public _isActive?: fhir.FhirElement|undefined;
  /**
   * Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.  This is expressed as a ratio where the numerator is 250mg and the denominator is 1 tablet.
   */
  public strength?: fhir.Ratio|undefined;
  /**
   * Default constructor for MedicationIngredient - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IMedicationIngredient> = { }) {
    super(source);
    if (source['itemCodeableConcept']) { this.itemCodeableConcept = new fhir.CodeableConcept(source.itemCodeableConcept!); }
    if (source['itemReference']) { this.itemReference = new fhir.Reference(source.itemReference!); }
    if (source['isActive']) { this.isActive = source.isActive; }
    if (source['_isActive']) { this._isActive = new fhir.FhirElement(source._isActive!); }
    if (source['strength']) { this.strength = new fhir.Ratio(source.strength!); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (this["itemCodeableConcept"]) { results.push(...this.itemCodeableConcept.doModelValidation()); }
    if (this["itemReference"]) { results.push(...this.itemReference.doModelValidation()); }
    if (this["_isActive"]) { results.push(...this._isActive.doModelValidation()); }
    if (this["strength"]) { results.push(...this.strength.doModelValidation()); }
    return results;
  }
}

/**
 * Information that only applies to packages (not products).
 */
export class MedicationBatch extends fhir.BackboneElement implements IMedicationBatch {
  /**
   * The assigned lot number of a batch of the specified product.
   */
  public lotNumber?: string|undefined;
  /**
   * Extended properties for primitive element: Medication.batch.lotNumber
   */
  public _lotNumber?: fhir.FhirElement|undefined;
  /**
   * When this specific batch of product will expire.
   */
  public expirationDate?: string|undefined;
  /**
   * Extended properties for primitive element: Medication.batch.expirationDate
   */
  public _expirationDate?: fhir.FhirElement|undefined;
  /**
   * Default constructor for MedicationBatch - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IMedicationBatch> = { }) {
    super(source);
    if (source['lotNumber']) { this.lotNumber = source.lotNumber; }
    if (source['_lotNumber']) { this._lotNumber = new fhir.FhirElement(source._lotNumber!); }
    if (source['expirationDate']) { this.expirationDate = source.expirationDate; }
    if (source['_expirationDate']) { this._expirationDate = new fhir.FhirElement(source._expirationDate!); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (this["_lotNumber"]) { results.push(...this._lotNumber.doModelValidation()); }
    if (this["_expirationDate"]) { results.push(...this._expirationDate.doModelValidation()); }
    return results;
  }
}

/**
 * This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use.
 */
export class Medication extends fhir.DomainResource implements IMedication {
  /**
   * Resource Type Name
   */
  public resourceType: "Medication";
  /**
   * The serial number could be included as an identifier.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * Depending on the context of use, the code that was actually selected by the user (prescriber, dispenser, etc.) will have the coding.userSelected set to true.  As described in the coding datatype: "A coding may be marked as a "userSelected" if a user selected the particular coded value in a user interface (e.g. the user selects an item in a pick-list). If a user selected coding exists, it is the preferred choice for performing translations etc. Other codes can only be literal translations to alternative code systems, or codes at a lower level of granularity (e.g. a generic code for a vendor-specific primary one).
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * This status is intended to identify if the medication in a local system is in active use within a drug database or inventory.  For example, a pharmacy system may create a new drug file record for a compounded product "ABC Hospital Special Cream" with an active status.  At some point in the future, it may be determined that the drug record was created with an error and the status is changed to "entered in error".   This status is not intended to specify if a medication is part of a particular formulary.  It is possible that the drug record may be referenced by multiple formularies or catalogues and each of those entries would have a separate status.
   */
  public status?: MedicationStatusValueSetEnum|undefined;
  /**
   * Extended properties for primitive element: Medication.status
   */
  public _status?: fhir.FhirElement|undefined;
  /**
   * Describes the details of the manufacturer of the medication product.  This is not intended to represent the distributor of a medication product.
   */
  public manufacturer?: fhir.Reference|undefined;
  /**
   * When Medication is referenced from MedicationRequest, this is the ordered form.  When Medication is referenced within MedicationDispense, this is the dispensed form.  When Medication is referenced within MedicationAdministration, this is administered form.
   */
  public form?: fhir.CodeableConcept|undefined;
  /**
   * Specific amount of the drug in the packaged product.  For example, when specifying a product that has the same strength (For example, Insulin glargine 100 unit per mL solution for injection), this attribute provides additional clarification of the package amount (For example, 3 mL, 10mL, etc.).
   */
  public amount?: fhir.Ratio|undefined;
  /**
   * The ingredients need not be a complete list.  If an ingredient is not specified, this does not indicate whether an ingredient is present or absent.  If an ingredient is specified it does not mean that all ingredients are specified.  It is possible to specify both inactive and active ingredients.
   */
  public ingredient?: fhir.MedicationIngredient[]|undefined;
  /**
   * Information that only applies to packages (not products).
   */
  public batch?: fhir.MedicationBatch|undefined;
  /**
   * Default constructor for Medication - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IMedication> = { }) {
    super(source);
    this.resourceType = 'Medication';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code!); }
    if (source['status']) { this.status = source.status; }
    if (source['_status']) { this._status = new fhir.FhirElement(source._status!); }
    if (source['manufacturer']) { this.manufacturer = new fhir.Reference(source.manufacturer!); }
    if (source['form']) { this.form = new fhir.CodeableConcept(source.form!); }
    if (source['amount']) { this.amount = new fhir.Ratio(source.amount!); }
    if (source['ingredient']) { this.ingredient = source.ingredient.map((x) => new fhir.MedicationIngredient(x)); }
    if (source['batch']) { this.batch = new fhir.MedicationBatch(source.batch!); }
  }
  /**
   * Example-bound Value Set for code
   */
  public codeExampleValueSet():MedicationCodesValueSetType {
    return MedicationCodesValueSet;
  }
  /**
   * Required-bound Value Set for status
   */
  public statusRequiredValueSet():MedicationStatusValueSetType {
    return MedicationStatusValueSet;
  }
  /**
   * Example-bound Value Set for form
   */
  public formExampleValueSet():MedicationFormCodesValueSetType {
    return MedicationFormCodesValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["resourceType"]) { results.push(["resourceType",'Missing required element: Medication.resourceType']); }
    if (this["identifier"]) { this.identifier.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["code"]) { results.push(...this.code.doModelValidation()); }
    if (this["_status"]) { results.push(...this._status.doModelValidation()); }
    if (this["manufacturer"]) { results.push(...this.manufacturer.doModelValidation()); }
    if (this["form"]) { results.push(...this.form.doModelValidation()); }
    if (this["amount"]) { results.push(...this.amount.doModelValidation()); }
    if (this["ingredient"]) { this.ingredient.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["batch"]) { results.push(...this.batch.doModelValidation()); }
    return results;
  }
}
