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
 * This resource provides the insurance enrollment details to the insurer regarding a specified coverage.
 */
var EnrollmentRequest = /** @class */ (function (_super) {
    __extends(EnrollmentRequest, _super);
    /**
     * Default constructor for EnrollmentRequest from an object that MAY NOT contain all required elements.
     */
    function EnrollmentRequest(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "EnrollmentRequest";
        if ((source['resourceType'] !== "EnrollmentRequest") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a EnrollmentRequest';
        }
        if (source["candidate"] !== undefined) {
            _this.candidate = new fhirModels.Reference(source.candidate);
        }
        if (source["coverage"] !== undefined) {
            _this.coverage = new fhirModels.Reference(source.coverage);
        }
        if (source["created"] !== undefined) {
            _this.created = source.created;
        }
        if (source["_created"] !== undefined) {
            _this._created = new fhirModels.Element(source._created);
        }
        if (source["identifier"] !== undefined) {
            _this.identifier = source.identifier.map(function (x) { return new fhirModels.Identifier(x); });
        }
        if (source["insurer"] !== undefined) {
            _this.insurer = new fhirModels.Reference(source.insurer);
        }
        if (source["provider"] !== undefined) {
            _this.provider = new fhirModels.Reference(source.provider);
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
     * Factory function to create a EnrollmentRequest from an object that MUST contain all required elements.
     */
    EnrollmentRequest.CreateStrict = function (source) {
        var dest = new EnrollmentRequest(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "EnrollmentRequest is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current EnrollmentRequest contains all required elements.
     */
    EnrollmentRequest.prototype.checkRequiredElements = function () {
        var missingElements = [];
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return EnrollmentRequest;
}(fhirModels.DomainResource));
export { EnrollmentRequest };
/**
 * Code Values for the EnrollmentRequest.status field
 */
export var EnrollmentRequestStatusEnum;
(function (EnrollmentRequestStatusEnum) {
    EnrollmentRequestStatusEnum["ACTIVE"] = "active";
    EnrollmentRequestStatusEnum["CANCELLED"] = "cancelled";
    EnrollmentRequestStatusEnum["DRAFT"] = "draft";
    EnrollmentRequestStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(EnrollmentRequestStatusEnum || (EnrollmentRequestStatusEnum = {}));
