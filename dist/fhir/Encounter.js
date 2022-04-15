var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Restricted to: Patient|Encounter|Observation
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * The current status is always found in the current version of the resource, not the status history.
 */
var EncounterStatusHistory = /** @class */ (function (_super) {
    __extends(EncounterStatusHistory, _super);
    /**
     * Default constructor for EncounterStatusHistory - initializes required elements to null.
     */
    function EncounterStatusHistory() {
        var _this = _super.call(this) || this;
        _this.period = null;
        _this.status = null;
        return _this;
    }
    /**
     * Factory function to create a EncounterStatusHistory from an object that MAY NOT contain all required elements.
     */
    EncounterStatusHistory.FactoryCreate = function (source) {
        var dest = _super.FactoryCreate.call(this, source);
        if (source["period"] !== undefined) {
            dest.period = fhir.Period.FactoryCreate(source.period);
        }
        if (source["status"] !== undefined) {
            dest.status = source.status;
        }
        if (source["_status"] !== undefined) {
            dest._status = fhir.FhirElement.FactoryCreate(source._status);
        }
        return dest;
    };
    /**
     * Check if the current EncounterStatusHistory contains all required elements.
     */
    EncounterStatusHistory.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["period"] === undefined) {
            missingElements.push("period");
        }
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    /**
     * Factory function to create a EncounterStatusHistory from an object that MUST contain all required elements.
     */
    EncounterStatusHistory.FactoryCreateStrict = function (source) {
        var dest = this.FactoryCreate(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "EncounterStatusHistory is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    return EncounterStatusHistory;
}(fhir.BackboneElement));
export { EncounterStatusHistory };
/**
 * The class history permits the tracking of the encounters transitions without needing to go  through the resource history.  This would be used for a case where an admission starts of as an emergency encounter, then transitions into an inpatient scenario. Doing this and not restarting a new encounter ensures that any lab/diagnostic results can more easily follow the patient and not require re-processing and not get lost or cancelled during a kind of discharge from emergency to inpatient.
 */
var EncounterClassHistory = /** @class */ (function (_super) {
    __extends(EncounterClassHistory, _super);
    /**
     * Default constructor for EncounterClassHistory - initializes required elements to null.
     */
    function EncounterClassHistory() {
        var _this = _super.call(this) || this;
        _this.class = null;
        _this.period = null;
        return _this;
    }
    /**
     * Factory function to create a EncounterClassHistory from an object that MAY NOT contain all required elements.
     */
    EncounterClassHistory.FactoryCreate = function (source) {
        var dest = _super.FactoryCreate.call(this, source);
        if (source["class"] !== undefined) {
            dest.class = fhir.Coding.FactoryCreate(source.class);
        }
        if (source["period"] !== undefined) {
            dest.period = fhir.Period.FactoryCreate(source.period);
        }
        return dest;
    };
    /**
     * Check if the current EncounterClassHistory contains all required elements.
     */
    EncounterClassHistory.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["class"] === undefined) {
            missingElements.push("class");
        }
        if (this["period"] === undefined) {
            missingElements.push("period");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    /**
     * Factory function to create a EncounterClassHistory from an object that MUST contain all required elements.
     */
    EncounterClassHistory.FactoryCreateStrict = function (source) {
        var dest = this.FactoryCreate(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "EncounterClassHistory is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    return EncounterClassHistory;
}(fhir.BackboneElement));
export { EncounterClassHistory };
/**
 * The list of people responsible for providing the service.
 */
var EncounterParticipant = /** @class */ (function (_super) {
    __extends(EncounterParticipant, _super);
    /**
     * Default constructor for EncounterParticipant - initializes required elements to null.
     */
    function EncounterParticipant() {
        return _super.call(this) || this;
    }
    /**
     * Factory function to create a EncounterParticipant from an object that MAY NOT contain all required elements.
     */
    EncounterParticipant.FactoryCreate = function (source) {
        var dest = _super.FactoryCreate.call(this, source);
        if (source["individual"] !== undefined) {
            dest.individual = fhir.Reference.FactoryCreate(source.individual);
        }
        if (source["period"] !== undefined) {
            dest.period = fhir.Period.FactoryCreate(source.period);
        }
        if (source["type"] !== undefined) {
            dest.type = source.type.map(function (x) { return fhir.CodeableConcept.FactoryCreate(x); });
        }
        return dest;
    };
    /**
     * Check if the current EncounterParticipant contains all required elements.
     */
    EncounterParticipant.prototype.checkRequiredElements = function () {
        var missingElements = [];
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    /**
     * Factory function to create a EncounterParticipant from an object that MUST contain all required elements.
     */
    EncounterParticipant.FactoryCreateStrict = function (source) {
        var dest = this.FactoryCreate(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "EncounterParticipant is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    return EncounterParticipant;
}(fhir.BackboneElement));
export { EncounterParticipant };
/**
 * The list of diagnosis relevant to this encounter.
 */
var EncounterDiagnosis = /** @class */ (function (_super) {
    __extends(EncounterDiagnosis, _super);
    /**
     * Default constructor for EncounterDiagnosis - initializes required elements to null.
     */
    function EncounterDiagnosis() {
        var _this = _super.call(this) || this;
        _this.condition = null;
        return _this;
    }
    /**
     * Factory function to create a EncounterDiagnosis from an object that MAY NOT contain all required elements.
     */
    EncounterDiagnosis.FactoryCreate = function (source) {
        var dest = _super.FactoryCreate.call(this, source);
        if (source["condition"] !== undefined) {
            dest.condition = fhir.Reference.FactoryCreate(source.condition);
        }
        if (source["rank"] !== undefined) {
            dest.rank = source.rank;
        }
        if (source["_rank"] !== undefined) {
            dest._rank = fhir.FhirElement.FactoryCreate(source._rank);
        }
        if (source["use"] !== undefined) {
            dest.use = fhir.CodeableConcept.FactoryCreate(source.use);
        }
        return dest;
    };
    /**
     * Check if the current EncounterDiagnosis contains all required elements.
     */
    EncounterDiagnosis.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["condition"] === undefined) {
            missingElements.push("condition");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    /**
     * Factory function to create a EncounterDiagnosis from an object that MUST contain all required elements.
     */
    EncounterDiagnosis.FactoryCreateStrict = function (source) {
        var dest = this.FactoryCreate(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "EncounterDiagnosis is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    return EncounterDiagnosis;
}(fhir.BackboneElement));
export { EncounterDiagnosis };
/**
 * An Encounter may cover more than just the inpatient stay. Contexts such as outpatients, community clinics, and aged care facilities are also included.
 * The duration recorded in the period of this encounter covers the entire scope of this hospitalization record.
 */
var EncounterHospitalization = /** @class */ (function (_super) {
    __extends(EncounterHospitalization, _super);
    /**
     * Default constructor for EncounterHospitalization - initializes required elements to null.
     */
    function EncounterHospitalization() {
        return _super.call(this) || this;
    }
    /**
     * Factory function to create a EncounterHospitalization from an object that MAY NOT contain all required elements.
     */
    EncounterHospitalization.FactoryCreate = function (source) {
        var dest = _super.FactoryCreate.call(this, source);
        if (source["admitSource"] !== undefined) {
            dest.admitSource = fhir.CodeableConcept.FactoryCreate(source.admitSource);
        }
        if (source["destination"] !== undefined) {
            dest.destination = fhir.Reference.FactoryCreate(source.destination);
        }
        if (source["dietPreference"] !== undefined) {
            dest.dietPreference = source.dietPreference.map(function (x) { return fhir.CodeableConcept.FactoryCreate(x); });
        }
        if (source["dischargeDisposition"] !== undefined) {
            dest.dischargeDisposition = fhir.CodeableConcept.FactoryCreate(source.dischargeDisposition);
        }
        if (source["origin"] !== undefined) {
            dest.origin = fhir.Reference.FactoryCreate(source.origin);
        }
        if (source["preAdmissionIdentifier"] !== undefined) {
            dest.preAdmissionIdentifier = fhir.Identifier.FactoryCreate(source.preAdmissionIdentifier);
        }
        if (source["reAdmission"] !== undefined) {
            dest.reAdmission = fhir.CodeableConcept.FactoryCreate(source.reAdmission);
        }
        if (source["specialArrangement"] !== undefined) {
            dest.specialArrangement = source.specialArrangement.map(function (x) { return fhir.CodeableConcept.FactoryCreate(x); });
        }
        if (source["specialCourtesy"] !== undefined) {
            dest.specialCourtesy = source.specialCourtesy.map(function (x) { return fhir.CodeableConcept.FactoryCreate(x); });
        }
        return dest;
    };
    /**
     * Check if the current EncounterHospitalization contains all required elements.
     */
    EncounterHospitalization.prototype.checkRequiredElements = function () {
        var missingElements = [];
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    /**
     * Factory function to create a EncounterHospitalization from an object that MUST contain all required elements.
     */
    EncounterHospitalization.FactoryCreateStrict = function (source) {
        var dest = this.FactoryCreate(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "EncounterHospitalization is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    return EncounterHospitalization;
}(fhir.BackboneElement));
export { EncounterHospitalization };
/**
 * Virtual encounters can be recorded in the Encounter by specifying a location reference to a location of type "kind" such as "client's home" and an encounter.class = "virtual".
 */
var EncounterLocation = /** @class */ (function (_super) {
    __extends(EncounterLocation, _super);
    /**
     * Default constructor for EncounterLocation - initializes required elements to null.
     */
    function EncounterLocation() {
        var _this = _super.call(this) || this;
        _this.location = null;
        return _this;
    }
    /**
     * Factory function to create a EncounterLocation from an object that MAY NOT contain all required elements.
     */
    EncounterLocation.FactoryCreate = function (source) {
        var dest = _super.FactoryCreate.call(this, source);
        if (source["location"] !== undefined) {
            dest.location = fhir.Reference.FactoryCreate(source.location);
        }
        if (source["period"] !== undefined) {
            dest.period = fhir.Period.FactoryCreate(source.period);
        }
        if (source["physicalType"] !== undefined) {
            dest.physicalType = fhir.CodeableConcept.FactoryCreate(source.physicalType);
        }
        if (source["status"] !== undefined) {
            dest.status = source.status;
        }
        if (source["_status"] !== undefined) {
            dest._status = fhir.FhirElement.FactoryCreate(source._status);
        }
        return dest;
    };
    /**
     * Check if the current EncounterLocation contains all required elements.
     */
    EncounterLocation.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["location"] === undefined) {
            missingElements.push("location");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    /**
     * Factory function to create a EncounterLocation from an object that MUST contain all required elements.
     */
    EncounterLocation.FactoryCreateStrict = function (source) {
        var dest = this.FactoryCreate(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "EncounterLocation is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    return EncounterLocation;
}(fhir.BackboneElement));
export { EncounterLocation };
/**
 * An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.
 */
var Encounter = /** @class */ (function (_super) {
    __extends(Encounter, _super);
    /**
     * Default constructor for Encounter - initializes required elements to null.
     */
    function Encounter() {
        var _this = _super.call(this) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "Encounter";
        _this.class = null;
        _this.status = null;
        return _this;
    }
    /**
     * Factory function to create a Encounter from an object that MAY NOT contain all required elements.
     */
    Encounter.FactoryCreate = function (source) {
        var dest = _super.FactoryCreate.call(this, source);
        if ((source['resourceType'] !== "Encounter") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a Encounter';
        }
        if (source["account"] !== undefined) {
            dest.account = source.account.map(function (x) { return fhir.Reference.FactoryCreate(x); });
        }
        if (source["appointment"] !== undefined) {
            dest.appointment = source.appointment.map(function (x) { return fhir.Reference.FactoryCreate(x); });
        }
        if (source["basedOn"] !== undefined) {
            dest.basedOn = source.basedOn.map(function (x) { return fhir.Reference.FactoryCreate(x); });
        }
        if (source["class"] !== undefined) {
            dest.class = fhir.Coding.FactoryCreate(source.class);
        }
        if (source["classHistory"] !== undefined) {
            dest.classHistory = source.classHistory.map(function (x) { return fhir.EncounterClassHistory.FactoryCreate(x); });
        }
        if (source["diagnosis"] !== undefined) {
            dest.diagnosis = source.diagnosis.map(function (x) { return fhir.EncounterDiagnosis.FactoryCreate(x); });
        }
        if (source["episodeOfCare"] !== undefined) {
            dest.episodeOfCare = source.episodeOfCare.map(function (x) { return fhir.Reference.FactoryCreate(x); });
        }
        if (source["hospitalization"] !== undefined) {
            dest.hospitalization = fhir.EncounterHospitalization.FactoryCreate(source.hospitalization);
        }
        if (source["identifier"] !== undefined) {
            dest.identifier = source.identifier.map(function (x) { return fhir.Identifier.FactoryCreate(x); });
        }
        if (source["length"] !== undefined) {
            dest.length = fhir.Duration.FactoryCreate(source.length);
        }
        if (source["location"] !== undefined) {
            dest.location = source.location.map(function (x) { return fhir.EncounterLocation.FactoryCreate(x); });
        }
        if (source["participant"] !== undefined) {
            dest.participant = source.participant.map(function (x) { return fhir.EncounterParticipant.FactoryCreate(x); });
        }
        if (source["partOf"] !== undefined) {
            dest.partOf = fhir.Reference.FactoryCreate(source.partOf);
        }
        if (source["period"] !== undefined) {
            dest.period = fhir.Period.FactoryCreate(source.period);
        }
        if (source["priority"] !== undefined) {
            dest.priority = fhir.CodeableConcept.FactoryCreate(source.priority);
        }
        if (source["reasonCode"] !== undefined) {
            dest.reasonCode = source.reasonCode.map(function (x) { return fhir.CodeableConcept.FactoryCreate(x); });
        }
        if (source["reasonReference"] !== undefined) {
            dest.reasonReference = source.reasonReference.map(function (x) { return fhir.Reference.FactoryCreate(x); });
        }
        if (source["serviceProvider"] !== undefined) {
            dest.serviceProvider = fhir.Reference.FactoryCreate(source.serviceProvider);
        }
        if (source["serviceType"] !== undefined) {
            dest.serviceType = fhir.CodeableConcept.FactoryCreate(source.serviceType);
        }
        if (source["status"] !== undefined) {
            dest.status = source.status;
        }
        if (source["_status"] !== undefined) {
            dest._status = fhir.FhirElement.FactoryCreate(source._status);
        }
        if (source["statusHistory"] !== undefined) {
            dest.statusHistory = source.statusHistory.map(function (x) { return fhir.EncounterStatusHistory.FactoryCreate(x); });
        }
        if (source["subject"] !== undefined) {
            dest.subject = fhir.Reference.FactoryCreate(source.subject);
        }
        if (source["type"] !== undefined) {
            dest.type = source.type.map(function (x) { return fhir.CodeableConcept.FactoryCreate(x); });
        }
        return dest;
    };
    /**
     * Check if the current Encounter contains all required elements.
     */
    Encounter.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["class"] === undefined) {
            missingElements.push("class");
        }
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    /**
     * Factory function to create a Encounter from an object that MUST contain all required elements.
     */
    Encounter.FactoryCreateStrict = function (source) {
        var dest = this.FactoryCreate(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "Encounter is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    return Encounter;
}(fhir.DomainResource));
export { Encounter };
/**
 * Code Values for the Encounter.statusHistory.status field
 */
export var EncounterStatusHistoryStatusEnum;
(function (EncounterStatusHistoryStatusEnum) {
    EncounterStatusHistoryStatusEnum["PLANNED"] = "planned";
    EncounterStatusHistoryStatusEnum["ARRIVED"] = "arrived";
    EncounterStatusHistoryStatusEnum["TRIAGED"] = "triaged";
    EncounterStatusHistoryStatusEnum["IN_PROGRESS"] = "in-progress";
    EncounterStatusHistoryStatusEnum["ONLEAVE"] = "onleave";
    EncounterStatusHistoryStatusEnum["FINISHED"] = "finished";
    EncounterStatusHistoryStatusEnum["CANCELLED"] = "cancelled";
    EncounterStatusHistoryStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
    EncounterStatusHistoryStatusEnum["UNKNOWN"] = "unknown";
})(EncounterStatusHistoryStatusEnum || (EncounterStatusHistoryStatusEnum = {}));
/**
 * Code Values for the Encounter.location.status field
 */
export var EncounterLocationStatusEnum;
(function (EncounterLocationStatusEnum) {
    EncounterLocationStatusEnum["PLANNED"] = "planned";
    EncounterLocationStatusEnum["ACTIVE"] = "active";
    EncounterLocationStatusEnum["RESERVED"] = "reserved";
    EncounterLocationStatusEnum["COMPLETED"] = "completed";
})(EncounterLocationStatusEnum || (EncounterLocationStatusEnum = {}));
/**
 * Code Values for the Encounter.status field
 */
export var EncounterStatusEnum;
(function (EncounterStatusEnum) {
    EncounterStatusEnum["PLANNED"] = "planned";
    EncounterStatusEnum["ARRIVED"] = "arrived";
    EncounterStatusEnum["TRIAGED"] = "triaged";
    EncounterStatusEnum["IN_PROGRESS"] = "in-progress";
    EncounterStatusEnum["ONLEAVE"] = "onleave";
    EncounterStatusEnum["FINISHED"] = "finished";
    EncounterStatusEnum["CANCELLED"] = "cancelled";
    EncounterStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
    EncounterStatusEnum["UNKNOWN"] = "unknown";
})(EncounterStatusEnum || (EncounterStatusEnum = {}));
//# sourceMappingURL=Encounter.js.map