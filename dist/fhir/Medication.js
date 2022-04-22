// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Medication
import * as fhir from '../fhir.js';
import { MedicationCodesValueSet } from '../fhirValueSets/MedicationCodesValueSet.js';
import { MedicationStatusValueSet } from '../fhirValueSets/MedicationStatusValueSet.js';
import { MedicationFormCodesValueSet } from '../fhirValueSets/MedicationFormCodesValueSet.js';
/**
 * The ingredients need not be a complete list.  If an ingredient is not specified, this does not indicate whether an ingredient is present or absent.  If an ingredient is specified it does not mean that all ingredients are specified.  It is possible to specify both inactive and active ingredients.
 */
export class MedicationIngredient extends fhir.BackboneElement {
    /**
     * Default constructor for MedicationIngredient - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source['itemCodeableConcept']) {
            this.itemCodeableConcept = new fhir.CodeableConcept(source.itemCodeableConcept);
        }
        if (source['itemReference']) {
            this.itemReference = new fhir.Reference(source.itemReference);
        }
        if (source['isActive']) {
            this.isActive = source.isActive;
        }
        if (source['_isActive']) {
            this._isActive = new fhir.FhirElement(source._isActive);
        }
        if (source['strength']) {
            this.strength = new fhir.Ratio(source.strength);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (this["itemCodeableConcept"]) {
            results.push(...this.itemCodeableConcept.doModelValidation());
        }
        if (this["itemReference"]) {
            results.push(...this.itemReference.doModelValidation());
        }
        if (this["_isActive"]) {
            results.push(...this._isActive.doModelValidation());
        }
        if (this["strength"]) {
            results.push(...this.strength.doModelValidation());
        }
        return results;
    }
}
/**
 * Information that only applies to packages (not products).
 */
export class MedicationBatch extends fhir.BackboneElement {
    /**
     * Default constructor for MedicationBatch - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source['lotNumber']) {
            this.lotNumber = source.lotNumber;
        }
        if (source['_lotNumber']) {
            this._lotNumber = new fhir.FhirElement(source._lotNumber);
        }
        if (source['expirationDate']) {
            this.expirationDate = source.expirationDate;
        }
        if (source['_expirationDate']) {
            this._expirationDate = new fhir.FhirElement(source._expirationDate);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (this["_lotNumber"]) {
            results.push(...this._lotNumber.doModelValidation());
        }
        if (this["_expirationDate"]) {
            results.push(...this._expirationDate.doModelValidation());
        }
        return results;
    }
}
/**
 * This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use.
 */
export class Medication extends fhir.DomainResource {
    /**
     * Default constructor for Medication - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'Medication';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        if (source['status']) {
            this.status = source.status;
        }
        if (source['_status']) {
            this._status = new fhir.FhirElement(source._status);
        }
        if (source['manufacturer']) {
            this.manufacturer = new fhir.Reference(source.manufacturer);
        }
        if (source['form']) {
            this.form = new fhir.CodeableConcept(source.form);
        }
        if (source['amount']) {
            this.amount = new fhir.Ratio(source.amount);
        }
        if (source['ingredient']) {
            this.ingredient = source.ingredient.map((x) => new fhir.MedicationIngredient(x));
        }
        if (source['batch']) {
            this.batch = new fhir.MedicationBatch(source.batch);
        }
    }
    /**
     * Example-bound Value Set for code
     */
    static codeExampleValueSet() {
        return MedicationCodesValueSet;
    }
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet() {
        return MedicationStatusValueSet;
    }
    /**
     * Example-bound Value Set for form
     */
    static formExampleValueSet() {
        return MedicationFormCodesValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (!this["resourceType"]) {
            results.push(["resourceType", 'Missing required element: Medication.resourceType']);
        }
        if (this["identifier"]) {
            this.identifier.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["code"]) {
            results.push(...this.code.doModelValidation());
        }
        if (this["_status"]) {
            results.push(...this._status.doModelValidation());
        }
        if (this["manufacturer"]) {
            results.push(...this.manufacturer.doModelValidation());
        }
        if (this["form"]) {
            results.push(...this.form.doModelValidation());
        }
        if (this["amount"]) {
            results.push(...this.amount.doModelValidation());
        }
        if (this["ingredient"]) {
            this.ingredient.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["batch"]) {
            results.push(...this.batch.doModelValidation());
        }
        return results;
    }
}
//# sourceMappingURL=Medication.js.map