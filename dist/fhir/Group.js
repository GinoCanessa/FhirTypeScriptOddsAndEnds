// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * All the identified characteristics must be true for an entity to a member of the group.
 */
export class GroupCharacteristic extends fhir.BackboneElement {
    /**
     * Default constructor for GroupCharacteristic - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.code = null;
        if (source["code"]) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        if (this.code === undefined) {
            this.code = null;
        }
        this.exclude = null;
        if (source["exclude"]) {
            this.exclude = source.exclude;
        }
        if (this.exclude === undefined) {
            this.exclude = null;
        }
        if (source["_exclude"]) {
            this._exclude = new fhir.FhirElement(source._exclude);
        }
        if (source["period"]) {
            this.period = new fhir.Period(source.period);
        }
        if (source["valueCodeableConcept"]) {
            this.valueCodeableConcept = new fhir.CodeableConcept(source.valueCodeableConcept);
        }
        if (source["valueBoolean"]) {
            this.valueBoolean = source.valueBoolean;
        }
        if (source["_valueBoolean"]) {
            this._valueBoolean = new fhir.FhirElement(source._valueBoolean);
        }
        if (source["valueQuantity"]) {
            this.valueQuantity = new fhir.Quantity(source.valueQuantity);
        }
        if (source["valueRange"]) {
            this.valueRange = new fhir.Range(source.valueRange);
        }
        if (source["valueReference"]) {
            this.valueReference = new fhir.Reference(source.valueReference);
        }
    }
    /**
     * Check if the current GroupCharacteristic contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["code"] === undefined) {
            missingElements.push("code");
        }
        if (this["exclude"] === undefined) {
            missingElements.push("exclude");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a GroupCharacteristic from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new GroupCharacteristic(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `GroupCharacteristic is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
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
        this.entity = null;
        if (source["entity"]) {
            this.entity = new fhir.Reference(source.entity);
        }
        if (this.entity === undefined) {
            this.entity = null;
        }
        if (source["inactive"]) {
            this.inactive = source.inactive;
        }
        if (source["_inactive"]) {
            this._inactive = new fhir.FhirElement(source._inactive);
        }
        if (source["period"]) {
            this.period = new fhir.Period(source.period);
        }
    }
    /**
     * Check if the current GroupMember contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["entity"] === undefined) {
            missingElements.push("entity");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a GroupMember from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new GroupMember(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `GroupMember is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
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
        if (source["active"]) {
            this.active = source.active;
        }
        if (source["_active"]) {
            this._active = new fhir.FhirElement(source._active);
        }
        this.actual = null;
        if (source["actual"]) {
            this.actual = source.actual;
        }
        if (this.actual === undefined) {
            this.actual = null;
        }
        if (source["_actual"]) {
            this._actual = new fhir.FhirElement(source._actual);
        }
        if (source["characteristic"]) {
            this.characteristic = source.characteristic.map((x) => new fhir.GroupCharacteristic(x));
        }
        if (source["code"]) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        if (source["identifier"]) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source["managingEntity"]) {
            this.managingEntity = new fhir.Reference(source.managingEntity);
        }
        if (source["member"]) {
            this.member = source.member.map((x) => new fhir.GroupMember(x));
        }
        if (source["name"]) {
            this.name = source.name;
        }
        if (source["_name"]) {
            this._name = new fhir.FhirElement(source._name);
        }
        if (source["quantity"]) {
            this.quantity = source.quantity;
        }
        if (source["_quantity"]) {
            this._quantity = new fhir.FhirElement(source._quantity);
        }
        this.type = null;
        if (source["type"]) {
            this.type = source.type;
        }
        if (this.type === undefined) {
            this.type = null;
        }
        if (source["_type"]) {
            this._type = new fhir.FhirElement(source._type);
        }
    }
    /**
     * Check if the current Group contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["actual"] === undefined) {
            missingElements.push("actual");
        }
        if (this["type"] === undefined) {
            missingElements.push("type");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a Group from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new Group(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `Group is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Code Values for the Group.type field
 */
export var GroupTypeEnum;
(function (GroupTypeEnum) {
    GroupTypeEnum["PERSON"] = "person";
    GroupTypeEnum["ANIMAL"] = "animal";
    GroupTypeEnum["PRACTITIONER"] = "practitioner";
    GroupTypeEnum["DEVICE"] = "device";
    GroupTypeEnum["MEDICATION"] = "medication";
    GroupTypeEnum["SUBSTANCE"] = "substance";
})(GroupTypeEnum || (GroupTypeEnum = {}));
//# sourceMappingURL=Group.js.map