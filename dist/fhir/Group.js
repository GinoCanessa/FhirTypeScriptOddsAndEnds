// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Group
import * as fhir from '../fhir.js';
import { GroupTypeValueSet } from '../fhirValueSets/GroupTypeValueSet.js';
/**
 * All the identified characteristics must be true for an entity to a member of the group.
 */
export class GroupCharacteristic extends fhir.BackboneElement {
    /**
     * Default constructor for GroupCharacteristic - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        else {
            this.code = null;
        }
        if (source['valueCodeableConcept']) {
            this.valueCodeableConcept = new fhir.CodeableConcept(source.valueCodeableConcept);
        }
        if (source['valueBoolean']) {
            this.valueBoolean = source.valueBoolean;
        }
        if (source['_valueBoolean']) {
            this._valueBoolean = new fhir.FhirElement(source._valueBoolean);
        }
        if (source['valueQuantity']) {
            this.valueQuantity = new fhir.Quantity(source.valueQuantity);
        }
        if (source['valueRange']) {
            this.valueRange = new fhir.Range(source.valueRange);
        }
        if (source['valueReference']) {
            this.valueReference = new fhir.Reference(source.valueReference);
        }
        if (source['exclude']) {
            this.exclude = source.exclude;
        }
        else {
            this.exclude = null;
        }
        if (source['_exclude']) {
            this._exclude = new fhir.FhirElement(source._exclude);
        }
        if (source['period']) {
            this.period = new fhir.Period(source.period);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (!this["code"]) {
            results.push(["code", 'Missing required element: Group.characteristic.code']);
        }
        if (this["code"]) {
            results.push(...this.code.doModelValidation());
        }
        if (this["valueCodeableConcept"]) {
            results.push(...this.valueCodeableConcept.doModelValidation());
        }
        if (this["_valueBoolean"]) {
            results.push(...this._valueBoolean.doModelValidation());
        }
        if (this["valueQuantity"]) {
            results.push(...this.valueQuantity.doModelValidation());
        }
        if (this["valueRange"]) {
            results.push(...this.valueRange.doModelValidation());
        }
        if (this["valueReference"]) {
            results.push(...this.valueReference.doModelValidation());
        }
        if (!this["exclude"]) {
            results.push(["exclude", 'Missing required element: Group.characteristic.exclude']);
        }
        if (this["_exclude"]) {
            results.push(...this._exclude.doModelValidation());
        }
        if (this["period"]) {
            results.push(...this.period.doModelValidation());
        }
        return results;
    }
}
/**
 * Identifies the resource instances that are members of the group.
 */
export class GroupMember extends fhir.BackboneElement {
    /**
     * Default constructor for GroupMember - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source['entity']) {
            this.entity = new fhir.Reference(source.entity);
        }
        else {
            this.entity = null;
        }
        if (source['period']) {
            this.period = new fhir.Period(source.period);
        }
        if (source['inactive']) {
            this.inactive = source.inactive;
        }
        if (source['_inactive']) {
            this._inactive = new fhir.FhirElement(source._inactive);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (!this["entity"]) {
            results.push(["entity", 'Missing required element: Group.member.entity']);
        }
        if (this["entity"]) {
            results.push(...this.entity.doModelValidation());
        }
        if (this["period"]) {
            results.push(...this.period.doModelValidation());
        }
        if (this["_inactive"]) {
            results.push(...this._inactive.doModelValidation());
        }
        return results;
    }
}
/**
 * Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization.
 */
export class Group extends fhir.DomainResource {
    /**
     * Default constructor for Group - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'Group';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source['active']) {
            this.active = source.active;
        }
        if (source['_active']) {
            this._active = new fhir.FhirElement(source._active);
        }
        if (source['type']) {
            this.type = source.type;
        }
        else {
            this.type = null;
        }
        if (source['_type']) {
            this._type = new fhir.FhirElement(source._type);
        }
        if (source['actual']) {
            this.actual = source.actual;
        }
        else {
            this.actual = null;
        }
        if (source['_actual']) {
            this._actual = new fhir.FhirElement(source._actual);
        }
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        if (source['name']) {
            this.name = source.name;
        }
        if (source['_name']) {
            this._name = new fhir.FhirElement(source._name);
        }
        if (source['quantity']) {
            this.quantity = source.quantity;
        }
        if (source['_quantity']) {
            this._quantity = new fhir.FhirElement(source._quantity);
        }
        if (source['managingEntity']) {
            this.managingEntity = new fhir.Reference(source.managingEntity);
        }
        if (source['characteristic']) {
            this.characteristic = source.characteristic.map((x) => new fhir.GroupCharacteristic(x));
        }
        if (source['member']) {
            this.member = source.member.map((x) => new fhir.GroupMember(x));
        }
    }
    /**
     * Required-bound Value Set for type
     */
    static typeRequiredValueSet() {
        return GroupTypeValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (!this["resourceType"]) {
            results.push(["resourceType", 'Missing required element: Group.resourceType']);
        }
        if (this["identifier"]) {
            this.identifier.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["_active"]) {
            results.push(...this._active.doModelValidation());
        }
        if (!this["type"]) {
            results.push(["type", 'Missing required element: Group.type']);
        }
        if (this["_type"]) {
            results.push(...this._type.doModelValidation());
        }
        if (!this["actual"]) {
            results.push(["actual", 'Missing required element: Group.actual']);
        }
        if (this["_actual"]) {
            results.push(...this._actual.doModelValidation());
        }
        if (this["code"]) {
            results.push(...this.code.doModelValidation());
        }
        if (this["_name"]) {
            results.push(...this._name.doModelValidation());
        }
        if (this["_quantity"]) {
            results.push(...this._quantity.doModelValidation());
        }
        if (this["managingEntity"]) {
            results.push(...this.managingEntity.doModelValidation());
        }
        if (this["characteristic"]) {
            this.characteristic.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["member"]) {
            this.member.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        return results;
    }
}
//# sourceMappingURL=Group.js.map