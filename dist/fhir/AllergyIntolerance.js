// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: AllergyIntolerance
import * as fhir from '../fhir.js';
import { SubstanceCodeValueSet } from '../fhirValueSets/SubstanceCodeValueSet.js';
import { ClinicalFindingsValueSet } from '../fhirValueSets/ClinicalFindingsValueSet.js';
import { ReactionEventSeverityValueSet } from '../fhirValueSets/ReactionEventSeverityValueSet.js';
import { RouteCodesValueSet } from '../fhirValueSets/RouteCodesValueSet.js';
import { AllergyintoleranceClinicalValueSet } from '../fhirValueSets/AllergyintoleranceClinicalValueSet.js';
import { AllergyintoleranceVerificationValueSet } from '../fhirValueSets/AllergyintoleranceVerificationValueSet.js';
import { AllergyIntoleranceTypeValueSet } from '../fhirValueSets/AllergyIntoleranceTypeValueSet.js';
import { AllergyIntoleranceCategoryValueSet } from '../fhirValueSets/AllergyIntoleranceCategoryValueSet.js';
import { AllergyIntoleranceCriticalityValueSet } from '../fhirValueSets/AllergyIntoleranceCriticalityValueSet.js';
import { AllergyintoleranceCodeValueSet } from '../fhirValueSets/AllergyintoleranceCodeValueSet.js';
/**
 * Details about each adverse reaction event linked to exposure to the identified substance.
 */
export class AllergyIntoleranceReaction extends fhir.BackboneElement {
    /**
     * Default constructor for AllergyIntoleranceReaction - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source['substance']) {
            this.substance = new fhir.CodeableConcept(source.substance);
        }
        if (source['manifestation']) {
            this.manifestation = source.manifestation.map((x) => new fhir.CodeableConcept(x));
        }
        else {
            this.manifestation = null;
        }
        if (source['description']) {
            this.description = source.description;
        }
        if (source['_description']) {
            this._description = new fhir.FhirElement(source._description);
        }
        if (source['onset']) {
            this.onset = source.onset;
        }
        if (source['_onset']) {
            this._onset = new fhir.FhirElement(source._onset);
        }
        if (source['severity']) {
            this.severity = source.severity;
        }
        if (source['_severity']) {
            this._severity = new fhir.FhirElement(source._severity);
        }
        if (source['exposureRoute']) {
            this.exposureRoute = new fhir.CodeableConcept(source.exposureRoute);
        }
        if (source['note']) {
            this.note = source.note.map((x) => new fhir.Annotation(x));
        }
    }
    /**
     * Example-bound Value Set for substance
     */
    static substanceExampleValueSet() {
        return SubstanceCodeValueSet;
    }
    /**
     * Example-bound Value Set for manifestation
     */
    static manifestationExampleValueSet() {
        return ClinicalFindingsValueSet;
    }
    /**
     * Required-bound Value Set for severity
     */
    static severityRequiredValueSet() {
        return ReactionEventSeverityValueSet;
    }
    /**
     * Example-bound Value Set for exposureRoute
     */
    static exposureRouteExampleValueSet() {
        return RouteCodesValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (this["substance"]) {
            results.push(...this.substance.doModelValidation());
        }
        if ((!this["manifestation"]) || (this["manifestation"].length === 0)) {
            results.push(["manifestation", 'Missing required element: AllergyIntolerance.reaction.manifestation']);
        }
        if (this["manifestation"]) {
            this.manifestation.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["_description"]) {
            results.push(...this._description.doModelValidation());
        }
        if (this["_onset"]) {
            results.push(...this._onset.doModelValidation());
        }
        if (this["_severity"]) {
            results.push(...this._severity.doModelValidation());
        }
        if (this["exposureRoute"]) {
            results.push(...this.exposureRoute.doModelValidation());
        }
        if (this["note"]) {
            this.note.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        return results;
    }
}
/**
 * Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance.
 */
export class AllergyIntolerance extends fhir.DomainResource {
    /**
     * Default constructor for AllergyIntolerance - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'AllergyIntolerance';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source['clinicalStatus']) {
            this.clinicalStatus = new fhir.CodeableConcept(source.clinicalStatus);
        }
        if (source['verificationStatus']) {
            this.verificationStatus = new fhir.CodeableConcept(source.verificationStatus);
        }
        if (source['type']) {
            this.type = source.type;
        }
        if (source['_type']) {
            this._type = new fhir.FhirElement(source._type);
        }
        if (source['category']) {
            this.category = source.category.map((x) => (x));
        }
        if (source['_category']) {
            this._category = source._category.map((x) => new fhir.FhirElement(x));
        }
        if (source['criticality']) {
            this.criticality = source.criticality;
        }
        if (source['_criticality']) {
            this._criticality = new fhir.FhirElement(source._criticality);
        }
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        if (source['patient']) {
            this.patient = new fhir.Reference(source.patient);
        }
        else {
            this.patient = null;
        }
        if (source['encounter']) {
            this.encounter = new fhir.Reference(source.encounter);
        }
        if (source['onsetDateTime']) {
            this.onsetDateTime = source.onsetDateTime;
        }
        if (source['_onsetDateTime']) {
            this._onsetDateTime = new fhir.FhirElement(source._onsetDateTime);
        }
        if (source['onsetAge']) {
            this.onsetAge = new fhir.Age(source.onsetAge);
        }
        if (source['onsetPeriod']) {
            this.onsetPeriod = new fhir.Period(source.onsetPeriod);
        }
        if (source['onsetRange']) {
            this.onsetRange = new fhir.Range(source.onsetRange);
        }
        if (source['onsetString']) {
            this.onsetString = source.onsetString;
        }
        if (source['_onsetString']) {
            this._onsetString = new fhir.FhirElement(source._onsetString);
        }
        if (source['recordedDate']) {
            this.recordedDate = source.recordedDate;
        }
        if (source['_recordedDate']) {
            this._recordedDate = new fhir.FhirElement(source._recordedDate);
        }
        if (source['recorder']) {
            this.recorder = new fhir.Reference(source.recorder);
        }
        if (source['asserter']) {
            this.asserter = new fhir.Reference(source.asserter);
        }
        if (source['lastOccurrence']) {
            this.lastOccurrence = source.lastOccurrence;
        }
        if (source['_lastOccurrence']) {
            this._lastOccurrence = new fhir.FhirElement(source._lastOccurrence);
        }
        if (source['note']) {
            this.note = source.note.map((x) => new fhir.Annotation(x));
        }
        if (source['reaction']) {
            this.reaction = source.reaction.map((x) => new fhir.AllergyIntoleranceReaction(x));
        }
    }
    /**
     * Required-bound Value Set for clinicalStatus
     */
    static clinicalStatusRequiredValueSet() {
        return AllergyintoleranceClinicalValueSet;
    }
    /**
     * Required-bound Value Set for verificationStatus
     */
    static verificationStatusRequiredValueSet() {
        return AllergyintoleranceVerificationValueSet;
    }
    /**
     * Required-bound Value Set for type
     */
    static typeRequiredValueSet() {
        return AllergyIntoleranceTypeValueSet;
    }
    /**
     * Required-bound Value Set for category
     */
    static categoryRequiredValueSet() {
        return AllergyIntoleranceCategoryValueSet;
    }
    /**
     * Required-bound Value Set for criticality
     */
    static criticalityRequiredValueSet() {
        return AllergyIntoleranceCriticalityValueSet;
    }
    /**
     * Example-bound Value Set for code
     */
    static codeExampleValueSet() {
        return AllergyintoleranceCodeValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (!this["resourceType"]) {
            results.push(["resourceType", 'Missing required element: AllergyIntolerance.resourceType']);
        }
        if (this["identifier"]) {
            this.identifier.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["clinicalStatus"]) {
            results.push(...this.clinicalStatus.doModelValidation());
        }
        if (this["verificationStatus"]) {
            results.push(...this.verificationStatus.doModelValidation());
        }
        if (this["_type"]) {
            results.push(...this._type.doModelValidation());
        }
        if (this["_category"]) {
            this._category.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["_criticality"]) {
            results.push(...this._criticality.doModelValidation());
        }
        if (this["code"]) {
            results.push(...this.code.doModelValidation());
        }
        if (!this["patient"]) {
            results.push(["patient", 'Missing required element: AllergyIntolerance.patient']);
        }
        if (this["patient"]) {
            results.push(...this.patient.doModelValidation());
        }
        if (this["encounter"]) {
            results.push(...this.encounter.doModelValidation());
        }
        if (this["_onsetDateTime"]) {
            results.push(...this._onsetDateTime.doModelValidation());
        }
        if (this["onsetAge"]) {
            results.push(...this.onsetAge.doModelValidation());
        }
        if (this["onsetPeriod"]) {
            results.push(...this.onsetPeriod.doModelValidation());
        }
        if (this["onsetRange"]) {
            results.push(...this.onsetRange.doModelValidation());
        }
        if (this["_onsetString"]) {
            results.push(...this._onsetString.doModelValidation());
        }
        if (this["_recordedDate"]) {
            results.push(...this._recordedDate.doModelValidation());
        }
        if (this["recorder"]) {
            results.push(...this.recorder.doModelValidation());
        }
        if (this["asserter"]) {
            results.push(...this.asserter.doModelValidation());
        }
        if (this["_lastOccurrence"]) {
            results.push(...this._lastOccurrence.doModelValidation());
        }
        if (this["note"]) {
            this.note.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["reaction"]) {
            this.reaction.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        return results;
    }
}
//# sourceMappingURL=AllergyIntolerance.js.map