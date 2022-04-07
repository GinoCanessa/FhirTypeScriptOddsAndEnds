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
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../strictmodels';
/**
 * Text, attachment(s), or resource(s) to be communicated to the recipient.
 */
var CommunicationRequestPayload = /** @class */ (function (_super) {
    __extends(CommunicationRequestPayload, _super);
    /**
     * Default constructor for CommunicationRequestPayload from an object that MAY NOT contain all required elements.
     */
    function CommunicationRequestPayload(source) {
        var _this = _super.call(this, source) || this;
        if (source["contentString"] !== undefined) {
            _this.contentString = source.contentString;
        }
        if (source["_contentString"] !== undefined) {
            _this._contentString = new fhirModels.Element(source._contentString);
        }
        if (source["contentAttachment"] !== undefined) {
            _this.contentAttachment = new fhirModels.Attachment(source.contentAttachment);
        }
        if (source["contentReference"] !== undefined) {
            _this.contentReference = new fhirModels.Reference(source.contentReference);
        }
        return _this;
    }
    return CommunicationRequestPayload;
}(fhirModels.BackboneElement));
export { CommunicationRequestPayload };
/**
 * A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition.
 */
var CommunicationRequest = /** @class */ (function (_super) {
    __extends(CommunicationRequest, _super);
    /**
     * Default constructor for CommunicationRequest from an object that MAY NOT contain all required elements.
     */
    function CommunicationRequest(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "CommunicationRequest";
        if ((source['resourceType'] !== "CommunicationRequest") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a CommunicationRequest';
        }
        if (source["about"] !== undefined) {
            _this.about = source.about.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["authoredOn"] !== undefined) {
            _this.authoredOn = source.authoredOn;
        }
        if (source["_authoredOn"] !== undefined) {
            _this._authoredOn = new fhirModels.Element(source._authoredOn);
        }
        if (source["basedOn"] !== undefined) {
            _this.basedOn = source.basedOn.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["category"] !== undefined) {
            _this.category = source.category.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["doNotPerform"] !== undefined) {
            _this.doNotPerform = source.doNotPerform;
        }
        if (source["_doNotPerform"] !== undefined) {
            _this._doNotPerform = new fhirModels.Element(source._doNotPerform);
        }
        if (source["encounter"] !== undefined) {
            _this.encounter = new fhirModels.Reference(source.encounter);
        }
        if (source["groupIdentifier"] !== undefined) {
            _this.groupIdentifier = new fhirModels.Identifier(source.groupIdentifier);
        }
        if (source["identifier"] !== undefined) {
            _this.identifier = source.identifier.map(function (x) { return new fhirModels.Identifier(x); });
        }
        if (source["medium"] !== undefined) {
            _this.medium = source.medium.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["note"] !== undefined) {
            _this.note = source.note.map(function (x) { return new fhirModels.Annotation(x); });
        }
        if (source["occurrenceDateTime"] !== undefined) {
            _this.occurrenceDateTime = source.occurrenceDateTime;
        }
        if (source["_occurrenceDateTime"] !== undefined) {
            _this._occurrenceDateTime = new fhirModels.Element(source._occurrenceDateTime);
        }
        if (source["occurrencePeriod"] !== undefined) {
            _this.occurrencePeriod = new fhirModels.Period(source.occurrencePeriod);
        }
        if (source["payload"] !== undefined) {
            _this.payload = source.payload.map(function (x) { return new fhirModels.CommunicationRequestPayload(x); });
        }
        if (source["priority"] !== undefined) {
            _this.priority = source.priority;
        }
        if (source["_priority"] !== undefined) {
            _this._priority = new fhirModels.Element(source._priority);
        }
        if (source["reasonCode"] !== undefined) {
            _this.reasonCode = source.reasonCode.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["reasonReference"] !== undefined) {
            _this.reasonReference = source.reasonReference.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["recipient"] !== undefined) {
            _this.recipient = source.recipient.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["replaces"] !== undefined) {
            _this.replaces = source.replaces.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["requester"] !== undefined) {
            _this.requester = new fhirModels.Reference(source.requester);
        }
        if (source["sender"] !== undefined) {
            _this.sender = new fhirModels.Reference(source.sender);
        }
        {
            _this.status = source.status;
        }
        if (source["_status"] !== undefined) {
            _this._status = new fhirModels.Element(source._status);
        }
        if (source["statusReason"] !== undefined) {
            _this.statusReason = new fhirModels.CodeableConcept(source.statusReason);
        }
        if (source["subject"] !== undefined) {
            _this.subject = new fhirModels.Reference(source.subject);
        }
        return _this;
    }
    return CommunicationRequest;
}(fhirModels.DomainResource));
export { CommunicationRequest };
/**
 * Code Values for the CommunicationRequest.priority field
 */
export var CommunicationRequestPriorityEnum;
(function (CommunicationRequestPriorityEnum) {
    CommunicationRequestPriorityEnum["ROUTINE"] = "routine";
    CommunicationRequestPriorityEnum["URGENT"] = "urgent";
    CommunicationRequestPriorityEnum["ASAP"] = "asap";
    CommunicationRequestPriorityEnum["STAT"] = "stat";
})(CommunicationRequestPriorityEnum || (CommunicationRequestPriorityEnum = {}));
/**
 * Code Values for the CommunicationRequest.status field
 */
export var CommunicationRequestStatusEnum;
(function (CommunicationRequestStatusEnum) {
    CommunicationRequestStatusEnum["DRAFT"] = "draft";
    CommunicationRequestStatusEnum["ACTIVE"] = "active";
    CommunicationRequestStatusEnum["ON_HOLD"] = "on-hold";
    CommunicationRequestStatusEnum["REVOKED"] = "revoked";
    CommunicationRequestStatusEnum["COMPLETED"] = "completed";
    CommunicationRequestStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
    CommunicationRequestStatusEnum["UNKNOWN"] = "unknown";
})(CommunicationRequestStatusEnum || (CommunicationRequestStatusEnum = {}));
