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
 * Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.
 */
var ResearchStudyArm = /** @class */ (function (_super) {
    __extends(ResearchStudyArm, _super);
    /**
     * Default constructor for ResearchStudyArm from an object that MAY NOT contain all required elements.
     */
    function ResearchStudyArm(source) {
        var _this = _super.call(this, source) || this;
        if (source["description"] !== undefined) {
            _this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            _this._description = new fhirModels.Element(source._description);
        }
        {
            _this.name = source.name;
        }
        if (source["_name"] !== undefined) {
            _this._name = new fhirModels.Element(source._name);
        }
        if (source["type"] !== undefined) {
            _this.type = new fhirModels.CodeableConcept(source.type);
        }
        return _this;
    }
    return ResearchStudyArm;
}(fhirModels.BackboneElement));
export { ResearchStudyArm };
/**
 * A goal that the study is aiming to achieve in terms of a scientific question to be answered by the analysis of data collected during the study.
 */
var ResearchStudyObjective = /** @class */ (function (_super) {
    __extends(ResearchStudyObjective, _super);
    /**
     * Default constructor for ResearchStudyObjective from an object that MAY NOT contain all required elements.
     */
    function ResearchStudyObjective(source) {
        var _this = _super.call(this, source) || this;
        if (source["name"] !== undefined) {
            _this.name = source.name;
        }
        if (source["_name"] !== undefined) {
            _this._name = new fhirModels.Element(source._name);
        }
        if (source["type"] !== undefined) {
            _this.type = new fhirModels.CodeableConcept(source.type);
        }
        return _this;
    }
    return ResearchStudyObjective;
}(fhirModels.BackboneElement));
export { ResearchStudyObjective };
/**
 * A process where a researcher or organization plans and then executes a series of steps intended to increase the field of healthcare-related knowledge.  This includes studies of safety, efficacy, comparative effectiveness and other information about medications, devices, therapies and other interventional and investigative techniques.  A ResearchStudy involves the gathering of information about human or animal subjects.
 */
var ResearchStudy = /** @class */ (function (_super) {
    __extends(ResearchStudy, _super);
    /**
     * Default constructor for ResearchStudy from an object that MAY NOT contain all required elements.
     */
    function ResearchStudy(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "ResearchStudy";
        if ((source['resourceType'] !== "ResearchStudy") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a ResearchStudy';
        }
        if (source["arm"] !== undefined) {
            _this.arm = source.arm.map(function (x) { return new fhirModels.ResearchStudyArm(x); });
        }
        if (source["category"] !== undefined) {
            _this.category = source.category.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["condition"] !== undefined) {
            _this.condition = source.condition.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["contact"] !== undefined) {
            _this.contact = source.contact.map(function (x) { return new fhirModels.ContactDetail(x); });
        }
        if (source["description"] !== undefined) {
            _this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            _this._description = new fhirModels.Element(source._description);
        }
        if (source["enrollment"] !== undefined) {
            _this.enrollment = source.enrollment.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["focus"] !== undefined) {
            _this.focus = source.focus.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["identifier"] !== undefined) {
            _this.identifier = source.identifier.map(function (x) { return new fhirModels.Identifier(x); });
        }
        if (source["keyword"] !== undefined) {
            _this.keyword = source.keyword.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["location"] !== undefined) {
            _this.location = source.location.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["note"] !== undefined) {
            _this.note = source.note.map(function (x) { return new fhirModels.Annotation(x); });
        }
        if (source["objective"] !== undefined) {
            _this.objective = source.objective.map(function (x) { return new fhirModels.ResearchStudyObjective(x); });
        }
        if (source["partOf"] !== undefined) {
            _this.partOf = source.partOf.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["period"] !== undefined) {
            _this.period = new fhirModels.Period(source.period);
        }
        if (source["phase"] !== undefined) {
            _this.phase = new fhirModels.CodeableConcept(source.phase);
        }
        if (source["primaryPurposeType"] !== undefined) {
            _this.primaryPurposeType = new fhirModels.CodeableConcept(source.primaryPurposeType);
        }
        if (source["principalInvestigator"] !== undefined) {
            _this.principalInvestigator = new fhirModels.Reference(source.principalInvestigator);
        }
        if (source["protocol"] !== undefined) {
            _this.protocol = source.protocol.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["reasonStopped"] !== undefined) {
            _this.reasonStopped = new fhirModels.CodeableConcept(source.reasonStopped);
        }
        if (source["relatedArtifact"] !== undefined) {
            _this.relatedArtifact = source.relatedArtifact.map(function (x) { return new fhirModels.RelatedArtifact(x); });
        }
        if (source["site"] !== undefined) {
            _this.site = source.site.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["sponsor"] !== undefined) {
            _this.sponsor = new fhirModels.Reference(source.sponsor);
        }
        {
            _this.status = source.status;
        }
        if (source["_status"] !== undefined) {
            _this._status = new fhirModels.Element(source._status);
        }
        if (source["title"] !== undefined) {
            _this.title = source.title;
        }
        if (source["_title"] !== undefined) {
            _this._title = new fhirModels.Element(source._title);
        }
        return _this;
    }
    return ResearchStudy;
}(fhirModels.DomainResource));
export { ResearchStudy };
/**
 * Code Values for the ResearchStudy.status field
 */
export var ResearchStudyStatusEnum;
(function (ResearchStudyStatusEnum) {
    ResearchStudyStatusEnum["ACTIVE"] = "active";
    ResearchStudyStatusEnum["ADMINISTRATIVELY_COMPLETED"] = "administratively-completed";
    ResearchStudyStatusEnum["APPROVED"] = "approved";
    ResearchStudyStatusEnum["CLOSED_TO_ACCRUAL"] = "closed-to-accrual";
    ResearchStudyStatusEnum["CLOSED_TO_ACCRUAL_AND_INTERVENTION"] = "closed-to-accrual-and-intervention";
    ResearchStudyStatusEnum["COMPLETED"] = "completed";
    ResearchStudyStatusEnum["DISAPPROVED"] = "disapproved";
    ResearchStudyStatusEnum["IN_REVIEW"] = "in-review";
    ResearchStudyStatusEnum["TEMPORARILY_CLOSED_TO_ACCRUAL"] = "temporarily-closed-to-accrual";
    ResearchStudyStatusEnum["TEMPORARILY_CLOSED_TO_ACCRUAL_AND_INTERVENTION"] = "temporarily-closed-to-accrual-and-intervention";
    ResearchStudyStatusEnum["WITHDRAWN"] = "withdrawn";
})(ResearchStudyStatusEnum || (ResearchStudyStatusEnum = {}));
