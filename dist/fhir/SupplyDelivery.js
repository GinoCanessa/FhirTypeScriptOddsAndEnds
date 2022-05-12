// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: SupplyDelivery
import * as fhir from '../fhir.js';
import { SupplydeliveryStatusValueSet, } from '../fhirValueSets/SupplydeliveryStatusValueSet.js';
import { SupplydeliveryTypeValueSet, } from '../fhirValueSets/SupplydeliveryTypeValueSet.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * The item that is being delivered or has been supplied.
 */
export class SupplyDeliverySuppliedItem extends fhir.BackboneElement {
    /**
     * Default constructor for SupplyDeliverySuppliedItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'SupplyDeliverySuppliedItem';
        this.__itemIsChoice = true;
        if (source['quantity']) {
            this.quantity = new fhir.Quantity(source.quantity);
        }
        if (source['item']) {
            this.item = source.item;
        }
        else if (source['itemCodeableConcept']) {
            this.item = new fhir.CodeableConcept(source.itemCodeableConcept);
        }
        else if (source['itemReference']) {
            this.item = new fhir.Reference(source.itemReference);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["quantity"]) {
            outcome.issue.push(...this.quantity.doModelValidation().issue);
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
/**
 * Record of delivery of what is supplied.
 */
export class SupplyDelivery extends fhir.DomainResource {
    /**
     * Default constructor for SupplyDelivery - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'SupplyDelivery';
        /**
         * This identifier is typically assigned by the dispenser, and may be used to reference the delivery when exchanging information about it with other systems.
         */
        this.identifier = [];
        /**
         * A plan, proposal or order that is fulfilled in whole or in part by this event.
         */
        this.basedOn = [];
        /**
         * Not to be used to link an event to an Encounter - use Event.context for that.
         * [The allowed reference resources may be adjusted as appropriate for the event resource].
         */
        this.partOf = [];
        this.__occurrenceIsChoice = true;
        /**
         * Identifies the person who picked up the Supply.
         */
        this.receiver = [];
        this.resourceType = 'SupplyDelivery';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source['basedOn']) {
            this.basedOn = source.basedOn.map((x) => new fhir.Reference(x));
        }
        if (source['partOf']) {
            this.partOf = source.partOf.map((x) => new fhir.Reference(x));
        }
        if (source['status']) {
            this.status = source.status;
        }
        if (source['patient']) {
            this.patient = new fhir.Reference(source.patient);
        }
        if (source['type']) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        if (source['suppliedItem']) {
            this.suppliedItem = new fhir.SupplyDeliverySuppliedItem(source.suppliedItem);
        }
        if (source['occurrence']) {
            this.occurrence = source.occurrence;
        }
        else if (source['occurrenceDateTime']) {
            this.occurrence = new fhir.FhirDateTime({ value: source.occurrenceDateTime });
        }
        else if (source['occurrencePeriod']) {
            this.occurrence = new fhir.Period(source.occurrencePeriod);
        }
        else if (source['occurrenceTiming']) {
            this.occurrence = new fhir.Timing(source.occurrenceTiming);
        }
        if (source['supplier']) {
            this.supplier = new fhir.Reference(source.supplier);
        }
        if (source['destination']) {
            this.destination = new fhir.Reference(source.destination);
        }
        if (source['receiver']) {
            this.receiver = source.receiver.map((x) => new fhir.Reference(x));
        }
    }
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet() {
        return SupplydeliveryStatusValueSet;
    }
    /**
     * Required-bound Value Set for type
     */
    static typeRequiredValueSet() {
        return SupplydeliveryTypeValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['resourceType']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property resourceType:'SupplyDelivery' fhir: SupplyDelivery.resourceType:'SupplyDelivery'", }));
        }
        if (this["identifier"]) {
            this.identifier.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["basedOn"]) {
            this.basedOn.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["partOf"]) {
            this.partOf.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["patient"]) {
            outcome.issue.push(...this.patient.doModelValidation().issue);
        }
        if (this["type"]) {
            outcome.issue.push(...this.type.doModelValidation().issue);
        }
        if (this["suppliedItem"]) {
            outcome.issue.push(...this.suppliedItem.doModelValidation().issue);
        }
        if (this["supplier"]) {
            outcome.issue.push(...this.supplier.doModelValidation().issue);
        }
        if (this["destination"]) {
            outcome.issue.push(...this.destination.doModelValidation().issue);
        }
        if (this["receiver"]) {
            this.receiver.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
//# sourceMappingURL=SupplyDelivery.js.map