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
exports.CommunicationRequestStatusEnum = exports.CommunicationRequestPriorityEnum = exports.CommunicationRequest = exports.CommunicationRequestPayload = void 0;
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
const fhirModels = __importStar(require("../optionalmodels"));
/**
 * Text, attachment(s), or resource(s) to be communicated to the recipient.
 */
class CommunicationRequestPayload extends fhirModels.BackboneElement {
    /**
     * Default constructor for CommunicationRequestPayload from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["contentString"] !== undefined) {
            this.contentString = source.contentString;
        }
        if (source["_contentString"] !== undefined) {
            this._contentString = new fhirModels.Element(source._contentString);
        }
        if (source["contentAttachment"] !== undefined) {
            this.contentAttachment = new fhirModels.Attachment(source.contentAttachment);
        }
        if (source["contentReference"] !== undefined) {
            this.contentReference = new fhirModels.Reference(source.contentReference);
        }
    }
    /**
     * Factory function to create a CommunicationRequestPayload from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new CommunicationRequestPayload(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `CommunicationRequestPayload is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current CommunicationRequestPayload contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
}
exports.CommunicationRequestPayload = CommunicationRequestPayload;
/**
 * A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition.
 */
class CommunicationRequest extends fhirModels.DomainResource {
    /**
     * Default constructor for CommunicationRequest from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        /**
         * Resource Type Name
         */
        this.resourceType = "CommunicationRequest";
        if ((source['resourceType'] !== "CommunicationRequest") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a CommunicationRequest';
        }
        if (source["about"] !== undefined) {
            this.about = source.about.map((x) => new fhirModels.Reference(x));
        }
        if (source["authoredOn"] !== undefined) {
            this.authoredOn = source.authoredOn;
        }
        if (source["_authoredOn"] !== undefined) {
            this._authoredOn = new fhirModels.Element(source._authoredOn);
        }
        if (source["basedOn"] !== undefined) {
            this.basedOn = source.basedOn.map((x) => new fhirModels.Reference(x));
        }
        if (source["category"] !== undefined) {
            this.category = source.category.map((x) => new fhirModels.CodeableConcept(x));
        }
        if (source["doNotPerform"] !== undefined) {
            this.doNotPerform = source.doNotPerform;
        }
        if (source["_doNotPerform"] !== undefined) {
            this._doNotPerform = new fhirModels.Element(source._doNotPerform);
        }
        if (source["encounter"] !== undefined) {
            this.encounter = new fhirModels.Reference(source.encounter);
        }
        if (source["groupIdentifier"] !== undefined) {
            this.groupIdentifier = new fhirModels.Identifier(source.groupIdentifier);
        }
        if (source["identifier"] !== undefined) {
            this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x));
        }
        if (source["medium"] !== undefined) {
            this.medium = source.medium.map((x) => new fhirModels.CodeableConcept(x));
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
        if (source["payload"] !== undefined) {
            this.payload = source.payload.map((x) => new fhirModels.CommunicationRequestPayload(x));
        }
        if (source["priority"] !== undefined) {
            this.priority = source.priority;
        }
        if (source["_priority"] !== undefined) {
            this._priority = new fhirModels.Element(source._priority);
        }
        if (source["reasonCode"] !== undefined) {
            this.reasonCode = source.reasonCode.map((x) => new fhirModels.CodeableConcept(x));
        }
        if (source["reasonReference"] !== undefined) {
            this.reasonReference = source.reasonReference.map((x) => new fhirModels.Reference(x));
        }
        if (source["recipient"] !== undefined) {
            this.recipient = source.recipient.map((x) => new fhirModels.Reference(x));
        }
        if (source["replaces"] !== undefined) {
            this.replaces = source.replaces.map((x) => new fhirModels.Reference(x));
        }
        if (source["requester"] !== undefined) {
            this.requester = new fhirModels.Reference(source.requester);
        }
        if (source["sender"] !== undefined) {
            this.sender = new fhirModels.Reference(source.sender);
        }
        if (source["status"] !== undefined) {
            this.status = source.status;
        }
        if (source["_status"] !== undefined) {
            this._status = new fhirModels.Element(source._status);
        }
        if (source["statusReason"] !== undefined) {
            this.statusReason = new fhirModels.CodeableConcept(source.statusReason);
        }
        if (source["subject"] !== undefined) {
            this.subject = new fhirModels.Reference(source.subject);
        }
    }
    /**
     * Factory function to create a CommunicationRequest from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new CommunicationRequest(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `CommunicationRequest is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current CommunicationRequest contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
}
exports.CommunicationRequest = CommunicationRequest;
/**
 * Code Values for the CommunicationRequest.priority field
 */
var CommunicationRequestPriorityEnum;
(function (CommunicationRequestPriorityEnum) {
    CommunicationRequestPriorityEnum["ROUTINE"] = "routine";
    CommunicationRequestPriorityEnum["URGENT"] = "urgent";
    CommunicationRequestPriorityEnum["ASAP"] = "asap";
    CommunicationRequestPriorityEnum["STAT"] = "stat";
})(CommunicationRequestPriorityEnum = exports.CommunicationRequestPriorityEnum || (exports.CommunicationRequestPriorityEnum = {}));
/**
 * Code Values for the CommunicationRequest.status field
 */
var CommunicationRequestStatusEnum;
(function (CommunicationRequestStatusEnum) {
    CommunicationRequestStatusEnum["DRAFT"] = "draft";
    CommunicationRequestStatusEnum["ACTIVE"] = "active";
    CommunicationRequestStatusEnum["ON_HOLD"] = "on-hold";
    CommunicationRequestStatusEnum["REVOKED"] = "revoked";
    CommunicationRequestStatusEnum["COMPLETED"] = "completed";
    CommunicationRequestStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
    CommunicationRequestStatusEnum["UNKNOWN"] = "unknown";
})(CommunicationRequestStatusEnum = exports.CommunicationRequestStatusEnum || (exports.CommunicationRequestStatusEnum = {}));
//# sourceMappingURL=CommunicationRequest.js.map