// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Linkage
import * as fhir from '../fhir.js';
import { LinkageTypeValueSet } from '../fhirValueSets/LinkageTypeValueSet.js';
/**
 * Identifies which record considered as the reference to the same real-world occurrence as well as how the items should be evaluated within the collection of linked items.
 */
export class LinkageItem extends fhir.BackboneElement {
    /**
     * Default constructor for LinkageItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source['type']) {
            this.type = source.type;
        }
        else {
            this.type = null;
        }
        if (source['_type']) {
            this._type = new fhir.FhirElement(source._type);
        }
        if (source['resource']) {
            this.resource = new fhir.Reference(source.resource);
        }
        else {
            this.resource = null;
        }
    }
    /**
     * Required-bound Value Set for type
     */
    typeRequiredValueSet() {
        return LinkageTypeValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (!this["type"]) {
            results.push(["type", 'Missing required element: Linkage.item.type']);
        }
        if (this["_type"]) {
            results.push(...this._type.doModelValidation());
        }
        if (!this["resource"]) {
            results.push(["resource", 'Missing required element: Linkage.item.resource']);
        }
        if (this["resource"]) {
            results.push(...this.resource.doModelValidation());
        }
        return results;
    }
}
/**
 * Identifies two or more records (resource instances) that refer to the same real-world "occurrence".
 */
export class Linkage extends fhir.DomainResource {
    /**
     * Default constructor for Linkage - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'Linkage';
        if (source['active']) {
            this.active = source.active;
        }
        if (source['_active']) {
            this._active = new fhir.FhirElement(source._active);
        }
        if (source['author']) {
            this.author = new fhir.Reference(source.author);
        }
        if (source['item']) {
            this.item = source.item.map((x) => new fhir.LinkageItem(x));
        }
        else {
            this.item = null;
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (!this["resourceType"]) {
            results.push(["resourceType", 'Missing required element: Linkage.resourceType']);
        }
        if (this["_active"]) {
            results.push(...this._active.doModelValidation());
        }
        if (this["author"]) {
            results.push(...this.author.doModelValidation());
        }
        if ((!this["item"]) || (this["item"].length === 0)) {
            results.push(["item", 'Missing required element: Linkage.item']);
        }
        if (this["item"]) {
            this.item.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        return results;
    }
}
//# sourceMappingURL=Linkage.js.map