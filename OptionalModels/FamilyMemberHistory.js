"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyMemberHistoryStatusEnum = exports.FamilyMemberHistory = exports.FamilyMemberHistoryCondition = void 0;
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
const fhirModels = __importStar(require("../optionalmodels"));
/**
 * The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition.
 */
class FamilyMemberHistoryCondition extends fhirModels.BackboneElement {
    /**
     * Default constructor for FamilyMemberHistoryCondition from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["code"] !== undefined) {
            this.code = new fhirModels.CodeableConcept(source.code);
        }
        if (source["contributedToDeath"] !== undefined) {
            this.contributedToDeath = source.contributedToDeath;
        }
        if (source["_contributedToDeath"] !== undefined) {
            this._contributedToDeath = new fhirModels.Element(source._contributedToDeath);
        }
        if (source["note"] !== undefined) {
            this.note = source.note.map((x) => new fhirModels.Annotation(x));
        }
        if (source["onsetAge"] !== undefined) {
            this.onsetAge = new fhirModels.Age(source.onsetAge);
        }
        if (source["onsetRange"] !== undefined) {
            this.onsetRange = new fhirModels.Range(source.onsetRange);
        }
        if (source["onsetPeriod"] !== undefined) {
            this.onsetPeriod = new fhirModels.Period(source.onsetPeriod);
        }
        if (source["onsetString"] !== undefined) {
            this.onsetString = source.onsetString;
        }
        if (source["_onsetString"] !== undefined) {
            this._onsetString = new fhirModels.Element(source._onsetString);
        }
        if (source["outcome"] !== undefined) {
            this.outcome = new fhirModels.CodeableConcept(source.outcome);
        }
    }
    /**
     * Factory function to create a FamilyMemberHistoryCondition from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new FamilyMemberHistoryCondition(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `FamilyMemberHistoryCondition is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current FamilyMemberHistoryCondition contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["code"] === undefined) {
            missingElements.push("code");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
}
exports.FamilyMemberHistoryCondition = FamilyMemberHistoryCondition;
/**
 * Significant health conditions for a person related to the patient relevant in the context of care for the patient.
 */
class FamilyMemberHistory extends fhirModels.DomainResource {
    /**
     * Default constructor for FamilyMemberHistory from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        /**
         * Resource Type Name
         */
        this.resourceType = "FamilyMemberHistory";
        if ((source['resourceType'] !== "FamilyMemberHistory") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a FamilyMemberHistory';
        }
        if (source["ageAge"] !== undefined) {
            this.ageAge = new fhirModels.Age(source.ageAge);
        }
        if (source["ageRange"] !== undefined) {
            this.ageRange = new fhirModels.Range(source.ageRange);
        }
        if (source["ageString"] !== undefined) {
            this.ageString = source.ageString;
        }
        if (source["_ageString"] !== undefined) {
            this._ageString = new fhirModels.Element(source._ageString);
        }
        if (source["bornPeriod"] !== undefined) {
            this.bornPeriod = new fhirModels.Period(source.bornPeriod);
        }
        if (source["bornDate"] !== undefined) {
            this.bornDate = source.bornDate;
        }
        if (source["_bornDate"] !== undefined) {
            this._bornDate = new fhirModels.Element(source._bornDate);
        }
        if (source["bornString"] !== undefined) {
            this.bornString = source.bornString;
        }
        if (source["_bornString"] !== undefined) {
            this._bornString = new fhirModels.Element(source._bornString);
        }
        if (source["condition"] !== undefined) {
            this.condition = source.condition.map((x) => new fhirModels.FamilyMemberHistoryCondition(x));
        }
        if (source["dataAbsentReason"] !== undefined) {
            this.dataAbsentReason = new fhirModels.CodeableConcept(source.dataAbsentReason);
        }
        if (source["date"] !== undefined) {
            this.date = source.date;
        }
        if (source["_date"] !== undefined) {
            this._date = new fhirModels.Element(source._date);
        }
        if (source["deceasedBoolean"] !== undefined) {
            this.deceasedBoolean = source.deceasedBoolean;
        }
        if (source["_deceasedBoolean"] !== undefined) {
            this._deceasedBoolean = new fhirModels.Element(source._deceasedBoolean);
        }
        if (source["deceasedAge"] !== undefined) {
            this.deceasedAge = new fhirModels.Age(source.deceasedAge);
        }
        if (source["deceasedRange"] !== undefined) {
            this.deceasedRange = new fhirModels.Range(source.deceasedRange);
        }
        if (source["deceasedDate"] !== undefined) {
            this.deceasedDate = source.deceasedDate;
        }
        if (source["_deceasedDate"] !== undefined) {
            this._deceasedDate = new fhirModels.Element(source._deceasedDate);
        }
        if (source["deceasedString"] !== undefined) {
            this.deceasedString = source.deceasedString;
        }
        if (source["_deceasedString"] !== undefined) {
            this._deceasedString = new fhirModels.Element(source._deceasedString);
        }
        if (source["estimatedAge"] !== undefined) {
            this.estimatedAge = source.estimatedAge;
        }
        if (source["_estimatedAge"] !== undefined) {
            this._estimatedAge = new fhirModels.Element(source._estimatedAge);
        }
        if (source["identifier"] !== undefined) {
            this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x));
        }
        if (source["instantiatesCanonical"] !== undefined) {
            this.instantiatesCanonical = source.instantiatesCanonical.map((x) => (x));
        }
        if (source["_instantiatesCanonical"] !== undefined) {
            this._instantiatesCanonical = source._instantiatesCanonical.map((x) => new fhirModels.Element(x));
        }
        if (source["instantiatesUri"] !== undefined) {
            this.instantiatesUri = source.instantiatesUri.map((x) => (x));
        }
        if (source["_instantiatesUri"] !== undefined) {
            this._instantiatesUri = source._instantiatesUri.map((x) => new fhirModels.Element(x));
        }
        if (source["name"] !== undefined) {
            this.name = source.name;
        }
        if (source["_name"] !== undefined) {
            this._name = new fhirModels.Element(source._name);
        }
        if (source["note"] !== undefined) {
            this.note = source.note.map((x) => new fhirModels.Annotation(x));
        }
        if (source["patient"] !== undefined) {
            this.patient = new fhirModels.Reference(source.patient);
        }
        if (source["reasonCode"] !== undefined) {
            this.reasonCode = source.reasonCode.map((x) => new fhirModels.CodeableConcept(x));
        }
        if (source["reasonReference"] !== undefined) {
            this.reasonReference = source.reasonReference.map((x) => new fhirModels.Reference(x));
        }
        if (source["relationship"] !== undefined) {
            this.relationship = new fhirModels.CodeableConcept(source.relationship);
        }
        if (source["sex"] !== undefined) {
            this.sex = new fhirModels.CodeableConcept(source.sex);
        }
        if (source["status"] !== undefined) {
            this.status = source.status;
        }
        if (source["_status"] !== undefined) {
            this._status = new fhirModels.Element(source._status);
        }
    }
    /**
     * Factory function to create a FamilyMemberHistory from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new FamilyMemberHistory(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `FamilyMemberHistory is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current FamilyMemberHistory contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["patient"] === undefined) {
            missingElements.push("patient");
        }
        if (this["relationship"] === undefined) {
            missingElements.push("relationship");
        }
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
}
exports.FamilyMemberHistory = FamilyMemberHistory;
/**
 * Code Values for the FamilyMemberHistory.status field
 */
var FamilyMemberHistoryStatusEnum;
(function (FamilyMemberHistoryStatusEnum) {
    FamilyMemberHistoryStatusEnum["PARTIAL"] = "partial";
    FamilyMemberHistoryStatusEnum["COMPLETED"] = "completed";
    FamilyMemberHistoryStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
    FamilyMemberHistoryStatusEnum["HEALTH_UNKNOWN"] = "health-unknown";
})(FamilyMemberHistoryStatusEnum = exports.FamilyMemberHistoryStatusEnum || (exports.FamilyMemberHistoryStatusEnum = {}));
//# sourceMappingURL=FamilyMemberHistory.js.map