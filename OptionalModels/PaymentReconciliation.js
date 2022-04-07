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
import * as fhirModels from '../optionalmodels';
/**
 * Distribution of the payment amount for a previously acknowledged payable.
 */
var PaymentReconciliationDetail = /** @class */ (function (_super) {
    __extends(PaymentReconciliationDetail, _super);
    /**
     * Default constructor for PaymentReconciliationDetail from an object that MAY NOT contain all required elements.
     */
    function PaymentReconciliationDetail(source) {
        var _this = _super.call(this, source) || this;
        if (source["amount"] !== undefined) {
            _this.amount = new fhirModels.Money(source.amount);
        }
        if (source["date"] !== undefined) {
            _this.date = source.date;
        }
        if (source["_date"] !== undefined) {
            _this._date = new fhirModels.Element(source._date);
        }
        if (source["identifier"] !== undefined) {
            _this.identifier = new fhirModels.Identifier(source.identifier);
        }
        if (source["payee"] !== undefined) {
            _this.payee = new fhirModels.Reference(source.payee);
        }
        if (source["predecessor"] !== undefined) {
            _this.predecessor = new fhirModels.Identifier(source.predecessor);
        }
        if (source["request"] !== undefined) {
            _this.request = new fhirModels.Reference(source.request);
        }
        if (source["response"] !== undefined) {
            _this.response = new fhirModels.Reference(source.response);
        }
        if (source["responsible"] !== undefined) {
            _this.responsible = new fhirModels.Reference(source.responsible);
        }
        if (source["submitter"] !== undefined) {
            _this.submitter = new fhirModels.Reference(source.submitter);
        }
        if (source["type"] !== undefined) {
            _this.type = new fhirModels.CodeableConcept(source.type);
        }
        return _this;
    }
    /**
     * Factory function to create a PaymentReconciliationDetail from an object that MUST contain all required elements.
     */
    PaymentReconciliationDetail.CreateStrict = function (source) {
        var dest = new PaymentReconciliationDetail(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "PaymentReconciliationDetail is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current PaymentReconciliationDetail contains all required elements.
     */
    PaymentReconciliationDetail.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["type"] === undefined) {
            missingElements.push("type");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return PaymentReconciliationDetail;
}(fhirModels.BackboneElement));
export { PaymentReconciliationDetail };
/**
 * A note that describes or explains the processing in a human readable form.
 */
var PaymentReconciliationProcessNote = /** @class */ (function (_super) {
    __extends(PaymentReconciliationProcessNote, _super);
    /**
     * Default constructor for PaymentReconciliationProcessNote from an object that MAY NOT contain all required elements.
     */
    function PaymentReconciliationProcessNote(source) {
        var _this = _super.call(this, source) || this;
        if (source["text"] !== undefined) {
            _this.text = source.text;
        }
        if (source["_text"] !== undefined) {
            _this._text = new fhirModels.Element(source._text);
        }
        if (source["type"] !== undefined) {
            _this.type = source.type;
        }
        if (source["_type"] !== undefined) {
            _this._type = new fhirModels.Element(source._type);
        }
        return _this;
    }
    /**
     * Factory function to create a PaymentReconciliationProcessNote from an object that MUST contain all required elements.
     */
    PaymentReconciliationProcessNote.CreateStrict = function (source) {
        var dest = new PaymentReconciliationProcessNote(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "PaymentReconciliationProcessNote is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current PaymentReconciliationProcessNote contains all required elements.
     */
    PaymentReconciliationProcessNote.prototype.checkRequiredElements = function () {
        var missingElements = [];
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return PaymentReconciliationProcessNote;
}(fhirModels.BackboneElement));
export { PaymentReconciliationProcessNote };
/**
 * Code Values for the PaymentReconciliation.processNote.type field
 */
export var PaymentReconciliationProcessNoteTypeEnum;
(function (PaymentReconciliationProcessNoteTypeEnum) {
    PaymentReconciliationProcessNoteTypeEnum["DISPLAY"] = "display";
    PaymentReconciliationProcessNoteTypeEnum["PRINT"] = "print";
    PaymentReconciliationProcessNoteTypeEnum["PRINTOPER"] = "printoper";
})(PaymentReconciliationProcessNoteTypeEnum || (PaymentReconciliationProcessNoteTypeEnum = {}));
/**
 * This resource provides the details including amount of a payment and allocates the payment items being paid.
 */
var PaymentReconciliation = /** @class */ (function (_super) {
    __extends(PaymentReconciliation, _super);
    /**
     * Default constructor for PaymentReconciliation from an object that MAY NOT contain all required elements.
     */
    function PaymentReconciliation(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "PaymentReconciliation";
        if ((source['resourceType'] !== "PaymentReconciliation") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a PaymentReconciliation';
        }
        if (source["created"] !== undefined) {
            _this.created = source.created;
        }
        if (source["_created"] !== undefined) {
            _this._created = new fhirModels.Element(source._created);
        }
        if (source["detail"] !== undefined) {
            _this.detail = source.detail.map(function (x) { return new fhirModels.PaymentReconciliationDetail(x); });
        }
        if (source["disposition"] !== undefined) {
            _this.disposition = source.disposition;
        }
        if (source["_disposition"] !== undefined) {
            _this._disposition = new fhirModels.Element(source._disposition);
        }
        if (source["formCode"] !== undefined) {
            _this.formCode = new fhirModels.CodeableConcept(source.formCode);
        }
        if (source["identifier"] !== undefined) {
            _this.identifier = source.identifier.map(function (x) { return new fhirModels.Identifier(x); });
        }
        if (source["outcome"] !== undefined) {
            _this.outcome = source.outcome;
        }
        if (source["_outcome"] !== undefined) {
            _this._outcome = new fhirModels.Element(source._outcome);
        }
        if (source["paymentAmount"] !== undefined) {
            _this.paymentAmount = new fhirModels.Money(source.paymentAmount);
        }
        if (source["paymentDate"] !== undefined) {
            _this.paymentDate = source.paymentDate;
        }
        if (source["_paymentDate"] !== undefined) {
            _this._paymentDate = new fhirModels.Element(source._paymentDate);
        }
        if (source["paymentIdentifier"] !== undefined) {
            _this.paymentIdentifier = new fhirModels.Identifier(source.paymentIdentifier);
        }
        if (source["paymentIssuer"] !== undefined) {
            _this.paymentIssuer = new fhirModels.Reference(source.paymentIssuer);
        }
        if (source["period"] !== undefined) {
            _this.period = new fhirModels.Period(source.period);
        }
        if (source["processNote"] !== undefined) {
            _this.processNote = source.processNote.map(function (x) { return new fhirModels.PaymentReconciliationProcessNote(x); });
        }
        if (source["request"] !== undefined) {
            _this.request = new fhirModels.Reference(source.request);
        }
        if (source["requestor"] !== undefined) {
            _this.requestor = new fhirModels.Reference(source.requestor);
        }
        if (source["status"] !== undefined) {
            _this.status = source.status;
        }
        if (source["_status"] !== undefined) {
            _this._status = new fhirModels.Element(source._status);
        }
        return _this;
    }
    /**
     * Factory function to create a PaymentReconciliation from an object that MUST contain all required elements.
     */
    PaymentReconciliation.CreateStrict = function (source) {
        var dest = new PaymentReconciliation(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "PaymentReconciliation is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current PaymentReconciliation contains all required elements.
     */
    PaymentReconciliation.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["created"] === undefined) {
            missingElements.push("created");
        }
        if (this["paymentAmount"] === undefined) {
            missingElements.push("paymentAmount");
        }
        if (this["paymentDate"] === undefined) {
            missingElements.push("paymentDate");
        }
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return PaymentReconciliation;
}(fhirModels.DomainResource));
export { PaymentReconciliation };
/**
 * Code Values for the PaymentReconciliation.outcome field
 */
export var PaymentReconciliationOutcomeEnum;
(function (PaymentReconciliationOutcomeEnum) {
    PaymentReconciliationOutcomeEnum["QUEUED"] = "queued";
    PaymentReconciliationOutcomeEnum["COMPLETE"] = "complete";
    PaymentReconciliationOutcomeEnum["ERROR"] = "error";
    PaymentReconciliationOutcomeEnum["PARTIAL"] = "partial";
})(PaymentReconciliationOutcomeEnum || (PaymentReconciliationOutcomeEnum = {}));
/**
 * Code Values for the PaymentReconciliation.status field
 */
export var PaymentReconciliationStatusEnum;
(function (PaymentReconciliationStatusEnum) {
    PaymentReconciliationStatusEnum["ACTIVE"] = "active";
    PaymentReconciliationStatusEnum["CANCELLED"] = "cancelled";
    PaymentReconciliationStatusEnum["DRAFT"] = "draft";
    PaymentReconciliationStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(PaymentReconciliationStatusEnum || (PaymentReconciliationStatusEnum = {}));