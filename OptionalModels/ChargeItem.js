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
exports.ChargeItemStatusEnum = exports.ChargeItem = exports.ChargeItemPerformer = void 0;
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
const fhirModels = __importStar(require("../optionalmodels"));
/**
 * Indicates who or what performed or participated in the charged service.
 */
class ChargeItemPerformer extends fhirModels.BackboneElement {
    /**
     * Default constructor for ChargeItemPerformer from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["actor"] !== undefined) {
            this.actor = new fhirModels.Reference(source.actor);
        }
        if (source["function"] !== undefined) {
            this.function = new fhirModels.CodeableConcept(source.function);
        }
    }
    /**
     * Factory function to create a ChargeItemPerformer from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new ChargeItemPerformer(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `ChargeItemPerformer is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current ChargeItemPerformer contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["actor"] === undefined) {
            missingElements.push("actor");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
}
exports.ChargeItemPerformer = ChargeItemPerformer;
/**
 * The resource ChargeItem describes the provision of healthcare provider products for a certain patient, therefore referring not only to the product, but containing in addition details of the provision, like date, time, amounts and participating organizations and persons. Main Usage of the ChargeItem is to enable the billing process and internal cost allocation.
 */
class ChargeItem extends fhirModels.DomainResource {
    /**
     * Default constructor for ChargeItem from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        /**
         * Resource Type Name
         */
        this.resourceType = "ChargeItem";
        if ((source['resourceType'] !== "ChargeItem") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a ChargeItem';
        }
        if (source["account"] !== undefined) {
            this.account = source.account.map((x) => new fhirModels.Reference(x));
        }
        if (source["bodysite"] !== undefined) {
            this.bodysite = source.bodysite.map((x) => new fhirModels.CodeableConcept(x));
        }
        if (source["code"] !== undefined) {
            this.code = new fhirModels.CodeableConcept(source.code);
        }
        if (source["context"] !== undefined) {
            this.context = new fhirModels.Reference(source.context);
        }
        if (source["costCenter"] !== undefined) {
            this.costCenter = new fhirModels.Reference(source.costCenter);
        }
        if (source["definitionCanonical"] !== undefined) {
            this.definitionCanonical = source.definitionCanonical.map((x) => (x));
        }
        if (source["_definitionCanonical"] !== undefined) {
            this._definitionCanonical = source._definitionCanonical.map((x) => new fhirModels.Element(x));
        }
        if (source["definitionUri"] !== undefined) {
            this.definitionUri = source.definitionUri.map((x) => (x));
        }
        if (source["_definitionUri"] !== undefined) {
            this._definitionUri = source._definitionUri.map((x) => new fhirModels.Element(x));
        }
        if (source["enteredDate"] !== undefined) {
            this.enteredDate = source.enteredDate;
        }
        if (source["_enteredDate"] !== undefined) {
            this._enteredDate = new fhirModels.Element(source._enteredDate);
        }
        if (source["enterer"] !== undefined) {
            this.enterer = new fhirModels.Reference(source.enterer);
        }
        if (source["factorOverride"] !== undefined) {
            this.factorOverride = source.factorOverride;
        }
        if (source["_factorOverride"] !== undefined) {
            this._factorOverride = new fhirModels.Element(source._factorOverride);
        }
        if (source["identifier"] !== undefined) {
            this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x));
        }
        if (source["note"] !== undefined) {
            this.note = source.note.map((x) => new fhirModels.Annotation(x));
        }
        if (source["occurrenceDateTime"] !== undefined) {
            this.occurrenceDateTime = source.occurrenceDateTime;
        }
        if (source["_occurrenceDateTime"] !== undefined) {
            this._occurrenceDateTime = new fhirModels.Element(source._occurrenceDateTime);
        }
        if (source["occurrencePeriod"] !== undefined) {
            this.occurrencePeriod = new fhirModels.Period(source.occurrencePeriod);
        }
        if (source["occurrenceTiming"] !== undefined) {
            this.occurrenceTiming = new fhirModels.Timing(source.occurrenceTiming);
        }
        if (source["overrideReason"] !== undefined) {
            this.overrideReason = source.overrideReason;
        }
        if (source["_overrideReason"] !== undefined) {
            this._overrideReason = new fhirModels.Element(source._overrideReason);
        }
        if (source["partOf"] !== undefined) {
            this.partOf = source.partOf.map((x) => new fhirModels.Reference(x));
        }
        if (source["performer"] !== undefined) {
            this.performer = source.performer.map((x) => new fhirModels.ChargeItemPerformer(x));
        }
        if (source["performingOrganization"] !== undefined) {
            this.performingOrganization = new fhirModels.Reference(source.performingOrganization);
        }
        if (source["priceOverride"] !== undefined) {
            this.priceOverride = new fhirModels.Money(source.priceOverride);
        }
        if (source["productReference"] !== undefined) {
            this.productReference = new fhirModels.Reference(source.productReference);
        }
        if (source["productCodeableConcept"] !== undefined) {
            this.productCodeableConcept = new fhirModels.CodeableConcept(source.productCodeableConcept);
        }
        if (source["quantity"] !== undefined) {
            this.quantity = new fhirModels.Quantity(source.quantity);
        }
        if (source["reason"] !== undefined) {
            this.reason = source.reason.map((x) => new fhirModels.CodeableConcept(x));
        }
        if (source["requestingOrganization"] !== undefined) {
            this.requestingOrganization = new fhirModels.Reference(source.requestingOrganization);
        }
        if (source["service"] !== undefined) {
            this.service = source.service.map((x) => new fhirModels.Reference(x));
        }
        if (source["status"] !== undefined) {
            this.status = source.status;
        }
        if (source["_status"] !== undefined) {
            this._status = new fhirModels.Element(source._status);
        }
        if (source["subject"] !== undefined) {
            this.subject = new fhirModels.Reference(source.subject);
        }
        if (source["supportingInformation"] !== undefined) {
            this.supportingInformation = source.supportingInformation.map((x) => new fhirModels.Reference(x));
        }
    }
    /**
     * Factory function to create a ChargeItem from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new ChargeItem(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `ChargeItem is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current ChargeItem contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["code"] === undefined) {
            missingElements.push("code");
        }
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        if (this["subject"] === undefined) {
            missingElements.push("subject");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
}
exports.ChargeItem = ChargeItem;
/**
 * Code Values for the ChargeItem.status field
 */
var ChargeItemStatusEnum;
(function (ChargeItemStatusEnum) {
    ChargeItemStatusEnum["PLANNED"] = "planned";
    ChargeItemStatusEnum["BILLABLE"] = "billable";
    ChargeItemStatusEnum["NOT_BILLABLE"] = "not-billable";
    ChargeItemStatusEnum["ABORTED"] = "aborted";
    ChargeItemStatusEnum["BILLED"] = "billed";
    ChargeItemStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
    ChargeItemStatusEnum["UNKNOWN"] = "unknown";
})(ChargeItemStatusEnum = exports.ChargeItemStatusEnum || (exports.ChargeItemStatusEnum = {}));
//# sourceMappingURL=ChargeItem.js.map