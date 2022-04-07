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
 * A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).
 */
var DiagnosticReportMedia = /** @class */ (function (_super) {
    __extends(DiagnosticReportMedia, _super);
    /**
     * Default constructor for DiagnosticReportMedia from an object that MAY NOT contain all required elements.
     */
    function DiagnosticReportMedia(source) {
        var _this = _super.call(this, source) || this;
        if (source["comment"] !== undefined) {
            _this.comment = source.comment;
        }
        if (source["_comment"] !== undefined) {
            _this._comment = new fhirModels.Element(source._comment);
        }
        {
            _this.link = new fhirModels.Reference(source.link);
        }
        return _this;
    }
    return DiagnosticReportMedia;
}(fhirModels.BackboneElement));
export { DiagnosticReportMedia };
/**
 * The findings and interpretation of diagnostic  tests performed on patients, groups of patients, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting and provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports.
 */
var DiagnosticReport = /** @class */ (function (_super) {
    __extends(DiagnosticReport, _super);
    /**
     * Default constructor for DiagnosticReport from an object that MAY NOT contain all required elements.
     */
    function DiagnosticReport(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "DiagnosticReport";
        if ((source['resourceType'] !== "DiagnosticReport") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a DiagnosticReport';
        }
        if (source["basedOn"] !== undefined) {
            _this.basedOn = source.basedOn.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["category"] !== undefined) {
            _this.category = source.category.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        {
            _this.code = new fhirModels.CodeableConcept(source.code);
        }
        if (source["conclusion"] !== undefined) {
            _this.conclusion = source.conclusion;
        }
        if (source["_conclusion"] !== undefined) {
            _this._conclusion = new fhirModels.Element(source._conclusion);
        }
        if (source["conclusionCode"] !== undefined) {
            _this.conclusionCode = source.conclusionCode.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["effectiveDateTime"] !== undefined) {
            _this.effectiveDateTime = source.effectiveDateTime;
        }
        if (source["_effectiveDateTime"] !== undefined) {
            _this._effectiveDateTime = new fhirModels.Element(source._effectiveDateTime);
        }
        if (source["effectivePeriod"] !== undefined) {
            _this.effectivePeriod = new fhirModels.Period(source.effectivePeriod);
        }
        if (source["encounter"] !== undefined) {
            _this.encounter = new fhirModels.Reference(source.encounter);
        }
        if (source["identifier"] !== undefined) {
            _this.identifier = source.identifier.map(function (x) { return new fhirModels.Identifier(x); });
        }
        if (source["imagingStudy"] !== undefined) {
            _this.imagingStudy = source.imagingStudy.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["issued"] !== undefined) {
            _this.issued = source.issued;
        }
        if (source["_issued"] !== undefined) {
            _this._issued = new fhirModels.Element(source._issued);
        }
        if (source["media"] !== undefined) {
            _this.media = source.media.map(function (x) { return new fhirModels.DiagnosticReportMedia(x); });
        }
        if (source["performer"] !== undefined) {
            _this.performer = source.performer.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["presentedForm"] !== undefined) {
            _this.presentedForm = source.presentedForm.map(function (x) { return new fhirModels.Attachment(x); });
        }
        if (source["result"] !== undefined) {
            _this.result = source.result.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["resultsInterpreter"] !== undefined) {
            _this.resultsInterpreter = source.resultsInterpreter.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["specimen"] !== undefined) {
            _this.specimen = source.specimen.map(function (x) { return new fhirModels.Reference(x); });
        }
        {
            _this.status = source.status;
        }
        if (source["_status"] !== undefined) {
            _this._status = new fhirModels.Element(source._status);
        }
        if (source["subject"] !== undefined) {
            _this.subject = new fhirModels.Reference(source.subject);
        }
        return _this;
    }
    return DiagnosticReport;
}(fhirModels.DomainResource));
export { DiagnosticReport };
/**
 * Code Values for the DiagnosticReport.status field
 */
export var DiagnosticReportStatusEnum;
(function (DiagnosticReportStatusEnum) {
    DiagnosticReportStatusEnum["REGISTERED"] = "registered";
    DiagnosticReportStatusEnum["PARTIAL"] = "partial";
    DiagnosticReportStatusEnum["PRELIMINARY"] = "preliminary";
    DiagnosticReportStatusEnum["FINAL"] = "final";
    DiagnosticReportStatusEnum["AMENDED"] = "amended";
    DiagnosticReportStatusEnum["CORRECTED"] = "corrected";
    DiagnosticReportStatusEnum["APPENDED"] = "appended";
    DiagnosticReportStatusEnum["CANCELLED"] = "cancelled";
    DiagnosticReportStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
    DiagnosticReportStatusEnum["UNKNOWN"] = "unknown";
})(DiagnosticReportStatusEnum || (DiagnosticReportStatusEnum = {}));
