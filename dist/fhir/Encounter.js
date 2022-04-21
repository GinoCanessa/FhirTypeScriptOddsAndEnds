// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Encounter
import * as fhir from '../fhir.js';
import { EncounterStatusValueSet } from '../fhirValueSets/EncounterStatusValueSet.js';
import { V3ActEncounterCodeValueSet } from '../fhirValueSets/V3ActEncounterCodeValueSet.js';
import { EncounterParticipantTypeValueSet } from '../fhirValueSets/EncounterParticipantTypeValueSet.js';
import { DiagnosisRoleValueSet } from '../fhirValueSets/DiagnosisRoleValueSet.js';
import { EncounterAdmitSourceValueSet } from '../fhirValueSets/EncounterAdmitSourceValueSet.js';
import { V20092ValueSet } from '../fhirValueSets/V20092ValueSet.js';
import { EncounterDietValueSet } from '../fhirValueSets/EncounterDietValueSet.js';
import { EncounterSpecialCourtesyValueSet } from '../fhirValueSets/EncounterSpecialCourtesyValueSet.js';
import { EncounterSpecialArrangementsValueSet } from '../fhirValueSets/EncounterSpecialArrangementsValueSet.js';
import { EncounterDischargeDispositionValueSet } from '../fhirValueSets/EncounterDischargeDispositionValueSet.js';
import { EncounterLocationStatusValueSet } from '../fhirValueSets/EncounterLocationStatusValueSet.js';
import { LocationPhysicalTypeValueSet } from '../fhirValueSets/LocationPhysicalTypeValueSet.js';
import { EncounterTypeValueSet } from '../fhirValueSets/EncounterTypeValueSet.js';
import { ServiceTypeValueSet } from '../fhirValueSets/ServiceTypeValueSet.js';
import { V3ActPriorityValueSet } from '../fhirValueSets/V3ActPriorityValueSet.js';
import { EncounterReasonValueSet } from '../fhirValueSets/EncounterReasonValueSet.js';
/**
 * The current status is always found in the current version of the resource, not the status history.
 */
export class EncounterStatusHistory extends fhir.BackboneElement {
    /**
     * Default constructor for EncounterStatusHistory - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source['status']) {
            this.status = source.status;
        }
        else {
            this.status = null;
        }
        if (source['_status']) {
            this._status = new fhir.FhirElement(source._status);
        }
        if (source['period']) {
            this.period = new fhir.Period(source.period);
        }
        else {
            this.period = null;
        }
    }
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet() {
        return EncounterStatusValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (!this["status"]) {
            results.push(["status", 'Missing required element: Encounter.statusHistory.status']);
        }
        if (this["_status"]) {
            results.push(...this._status.doModelValidation());
        }
        if (!this["period"]) {
            results.push(["period", 'Missing required element: Encounter.statusHistory.period']);
        }
        if (this["period"]) {
            results.push(...this.period.doModelValidation());
        }
        return results;
    }
}
/**
 * The class history permits the tracking of the encounters transitions without needing to go  through the resource history.  This would be used for a case where an admission starts of as an emergency encounter, then transitions into an inpatient scenario. Doing this and not restarting a new encounter ensures that any lab/diagnostic results can more easily follow the patient and not require re-processing and not get lost or cancelled during a kind of discharge from emergency to inpatient.
 */
export class EncounterClassHistory extends fhir.BackboneElement {
    /**
     * Default constructor for EncounterClassHistory - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source['class']) {
            this.class = new fhir.Coding(source.class);
        }
        else {
            this.class = null;
        }
        if (source['period']) {
            this.period = new fhir.Period(source.period);
        }
        else {
            this.period = null;
        }
    }
    /**
     * Extensible-bound Value Set for class
     */
    classExtensibleValueSet() {
        return V3ActEncounterCodeValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (!this["class"]) {
            results.push(["class", 'Missing required element: Encounter.classHistory.class']);
        }
        if (this["class"]) {
            results.push(...this.class.doModelValidation());
        }
        if (!this["period"]) {
            results.push(["period", 'Missing required element: Encounter.classHistory.period']);
        }
        if (this["period"]) {
            results.push(...this.period.doModelValidation());
        }
        return results;
    }
}
/**
 * The list of people responsible for providing the service.
 */
export class EncounterParticipant extends fhir.BackboneElement {
    /**
     * Default constructor for EncounterParticipant - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source['type']) {
            this.type = source.type.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['period']) {
            this.period = new fhir.Period(source.period);
        }
        if (source['individual']) {
            this.individual = new fhir.Reference(source.individual);
        }
    }
    /**
     * Extensible-bound Value Set for type
     */
    typeExtensibleValueSet() {
        return EncounterParticipantTypeValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (this["type"]) {
            this.type.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["period"]) {
            results.push(...this.period.doModelValidation());
        }
        if (this["individual"]) {
            results.push(...this.individual.doModelValidation());
        }
        return results;
    }
}
/**
 * The list of diagnosis relevant to this encounter.
 */
export class EncounterDiagnosis extends fhir.BackboneElement {
    /**
     * Default constructor for EncounterDiagnosis - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source['condition']) {
            this.condition = new fhir.Reference(source.condition);
        }
        else {
            this.condition = null;
        }
        if (source['use']) {
            this.use = new fhir.CodeableConcept(source.use);
        }
        if (source['rank']) {
            this.rank = source.rank;
        }
        if (source['_rank']) {
            this._rank = new fhir.FhirElement(source._rank);
        }
    }
    /**
     * Preferred-bound Value Set for use
     */
    usePreferredValueSet() {
        return DiagnosisRoleValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (!this["condition"]) {
            results.push(["condition", 'Missing required element: Encounter.diagnosis.condition']);
        }
        if (this["condition"]) {
            results.push(...this.condition.doModelValidation());
        }
        if (this["use"]) {
            results.push(...this.use.doModelValidation());
        }
        if (this["_rank"]) {
            results.push(...this._rank.doModelValidation());
        }
        return results;
    }
}
/**
 * An Encounter may cover more than just the inpatient stay. Contexts such as outpatients, community clinics, and aged care facilities are also included.
 * The duration recorded in the period of this encounter covers the entire scope of this hospitalization record.
 */
export class EncounterHospitalization extends fhir.BackboneElement {
    /**
     * Default constructor for EncounterHospitalization - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source['preAdmissionIdentifier']) {
            this.preAdmissionIdentifier = new fhir.Identifier(source.preAdmissionIdentifier);
        }
        if (source['origin']) {
            this.origin = new fhir.Reference(source.origin);
        }
        if (source['admitSource']) {
            this.admitSource = new fhir.CodeableConcept(source.admitSource);
        }
        if (source['reAdmission']) {
            this.reAdmission = new fhir.CodeableConcept(source.reAdmission);
        }
        if (source['dietPreference']) {
            this.dietPreference = source.dietPreference.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['specialCourtesy']) {
            this.specialCourtesy = source.specialCourtesy.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['specialArrangement']) {
            this.specialArrangement = source.specialArrangement.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['destination']) {
            this.destination = new fhir.Reference(source.destination);
        }
        if (source['dischargeDisposition']) {
            this.dischargeDisposition = new fhir.CodeableConcept(source.dischargeDisposition);
        }
    }
    /**
     * Preferred-bound Value Set for admitSource
     */
    admitSourcePreferredValueSet() {
        return EncounterAdmitSourceValueSet;
    }
    /**
     * Example-bound Value Set for reAdmission
     */
    reAdmissionExampleValueSet() {
        return V20092ValueSet;
    }
    /**
     * Example-bound Value Set for dietPreference
     */
    dietPreferenceExampleValueSet() {
        return EncounterDietValueSet;
    }
    /**
     * Preferred-bound Value Set for specialCourtesy
     */
    specialCourtesyPreferredValueSet() {
        return EncounterSpecialCourtesyValueSet;
    }
    /**
     * Preferred-bound Value Set for specialArrangement
     */
    specialArrangementPreferredValueSet() {
        return EncounterSpecialArrangementsValueSet;
    }
    /**
     * Example-bound Value Set for dischargeDisposition
     */
    dischargeDispositionExampleValueSet() {
        return EncounterDischargeDispositionValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (this["preAdmissionIdentifier"]) {
            results.push(...this.preAdmissionIdentifier.doModelValidation());
        }
        if (this["origin"]) {
            results.push(...this.origin.doModelValidation());
        }
        if (this["admitSource"]) {
            results.push(...this.admitSource.doModelValidation());
        }
        if (this["reAdmission"]) {
            results.push(...this.reAdmission.doModelValidation());
        }
        if (this["dietPreference"]) {
            this.dietPreference.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["specialCourtesy"]) {
            this.specialCourtesy.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["specialArrangement"]) {
            this.specialArrangement.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["destination"]) {
            results.push(...this.destination.doModelValidation());
        }
        if (this["dischargeDisposition"]) {
            results.push(...this.dischargeDisposition.doModelValidation());
        }
        return results;
    }
}
/**
 * Virtual encounters can be recorded in the Encounter by specifying a location reference to a location of type "kind" such as "client's home" and an encounter.class = "virtual".
 */
export class EncounterLocation extends fhir.BackboneElement {
    /**
     * Default constructor for EncounterLocation - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source['location']) {
            this.location = new fhir.Reference(source.location);
        }
        else {
            this.location = null;
        }
        if (source['status']) {
            this.status = source.status;
        }
        if (source['_status']) {
            this._status = new fhir.FhirElement(source._status);
        }
        if (source['physicalType']) {
            this.physicalType = new fhir.CodeableConcept(source.physicalType);
        }
        if (source['period']) {
            this.period = new fhir.Period(source.period);
        }
    }
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet() {
        return EncounterLocationStatusValueSet;
    }
    /**
     * Example-bound Value Set for physicalType
     */
    physicalTypeExampleValueSet() {
        return LocationPhysicalTypeValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (!this["location"]) {
            results.push(["location", 'Missing required element: Encounter.location.location']);
        }
        if (this["location"]) {
            results.push(...this.location.doModelValidation());
        }
        if (this["_status"]) {
            results.push(...this._status.doModelValidation());
        }
        if (this["physicalType"]) {
            results.push(...this.physicalType.doModelValidation());
        }
        if (this["period"]) {
            results.push(...this.period.doModelValidation());
        }
        return results;
    }
}
/**
 * An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.
 */
export class Encounter extends fhir.DomainResource {
    /**
     * Default constructor for Encounter - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'Encounter';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source['status']) {
            this.status = source.status;
        }
        else {
            this.status = null;
        }
        if (source['_status']) {
            this._status = new fhir.FhirElement(source._status);
        }
        if (source['statusHistory']) {
            this.statusHistory = source.statusHistory.map((x) => new fhir.EncounterStatusHistory(x));
        }
        if (source['class']) {
            this.class = new fhir.Coding(source.class);
        }
        else {
            this.class = null;
        }
        if (source['classHistory']) {
            this.classHistory = source.classHistory.map((x) => new fhir.EncounterClassHistory(x));
        }
        if (source['type']) {
            this.type = source.type.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['serviceType']) {
            this.serviceType = new fhir.CodeableConcept(source.serviceType);
        }
        if (source['priority']) {
            this.priority = new fhir.CodeableConcept(source.priority);
        }
        if (source['subject']) {
            this.subject = new fhir.Reference(source.subject);
        }
        if (source['episodeOfCare']) {
            this.episodeOfCare = source.episodeOfCare.map((x) => new fhir.Reference(x));
        }
        if (source['basedOn']) {
            this.basedOn = source.basedOn.map((x) => new fhir.Reference(x));
        }
        if (source['participant']) {
            this.participant = source.participant.map((x) => new fhir.EncounterParticipant(x));
        }
        if (source['appointment']) {
            this.appointment = source.appointment.map((x) => new fhir.Reference(x));
        }
        if (source['period']) {
            this.period = new fhir.Period(source.period);
        }
        if (source['length']) {
            this.length = new fhir.Duration(source.length);
        }
        if (source['reasonCode']) {
            this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['reasonReference']) {
            this.reasonReference = source.reasonReference.map((x) => new fhir.Reference(x));
        }
        if (source['diagnosis']) {
            this.diagnosis = source.diagnosis.map((x) => new fhir.EncounterDiagnosis(x));
        }
        if (source['account']) {
            this.account = source.account.map((x) => new fhir.Reference(x));
        }
        if (source['hospitalization']) {
            this.hospitalization = new fhir.EncounterHospitalization(source.hospitalization);
        }
        if (source['location']) {
            this.location = source.location.map((x) => new fhir.EncounterLocation(x));
        }
        if (source['serviceProvider']) {
            this.serviceProvider = new fhir.Reference(source.serviceProvider);
        }
        if (source['partOf']) {
            this.partOf = new fhir.Reference(source.partOf);
        }
    }
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet() {
        return EncounterStatusValueSet;
    }
    /**
     * Extensible-bound Value Set for class
     */
    classExtensibleValueSet() {
        return V3ActEncounterCodeValueSet;
    }
    /**
     * Example-bound Value Set for type
     */
    typeExampleValueSet() {
        return EncounterTypeValueSet;
    }
    /**
     * Example-bound Value Set for serviceType
     */
    serviceTypeExampleValueSet() {
        return ServiceTypeValueSet;
    }
    /**
     * Example-bound Value Set for priority
     */
    priorityExampleValueSet() {
        return V3ActPriorityValueSet;
    }
    /**
     * Preferred-bound Value Set for reasonCode
     */
    reasonCodePreferredValueSet() {
        return EncounterReasonValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (!this["resourceType"]) {
            results.push(["resourceType", 'Missing required element: Encounter.resourceType']);
        }
        if (this["identifier"]) {
            this.identifier.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (!this["status"]) {
            results.push(["status", 'Missing required element: Encounter.status']);
        }
        if (this["_status"]) {
            results.push(...this._status.doModelValidation());
        }
        if (this["statusHistory"]) {
            this.statusHistory.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (!this["class"]) {
            results.push(["class", 'Missing required element: Encounter.class']);
        }
        if (this["class"]) {
            results.push(...this.class.doModelValidation());
        }
        if (this["classHistory"]) {
            this.classHistory.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["type"]) {
            this.type.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["serviceType"]) {
            results.push(...this.serviceType.doModelValidation());
        }
        if (this["priority"]) {
            results.push(...this.priority.doModelValidation());
        }
        if (this["subject"]) {
            results.push(...this.subject.doModelValidation());
        }
        if (this["episodeOfCare"]) {
            this.episodeOfCare.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["basedOn"]) {
            this.basedOn.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["participant"]) {
            this.participant.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["appointment"]) {
            this.appointment.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["period"]) {
            results.push(...this.period.doModelValidation());
        }
        if (this["length"]) {
            results.push(...this.length.doModelValidation());
        }
        if (this["reasonCode"]) {
            this.reasonCode.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["reasonReference"]) {
            this.reasonReference.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["diagnosis"]) {
            this.diagnosis.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["account"]) {
            this.account.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["hospitalization"]) {
            results.push(...this.hospitalization.doModelValidation());
        }
        if (this["location"]) {
            this.location.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["serviceProvider"]) {
            results.push(...this.serviceProvider.doModelValidation());
        }
        if (this["partOf"]) {
            results.push(...this.partOf.doModelValidation());
        }
        return results;
    }
}
//# sourceMappingURL=Encounter.js.map