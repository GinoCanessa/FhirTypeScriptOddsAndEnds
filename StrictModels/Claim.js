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
 * For example,  for the original treatment and follow-up exams.
 */
var ClaimRelated = /** @class */ (function (_super) {
    __extends(ClaimRelated, _super);
    /**
     * Default constructor for ClaimRelated from an object that MAY NOT contain all required elements.
     */
    function ClaimRelated(source) {
        var _this = _super.call(this, source) || this;
        if (source["claim"] !== undefined) {
            _this.claim = new fhirModels.Reference(source.claim);
        }
        if (source["reference"] !== undefined) {
            _this.reference = new fhirModels.Identifier(source.reference);
        }
        if (source["relationship"] !== undefined) {
            _this.relationship = new fhirModels.CodeableConcept(source.relationship);
        }
        return _this;
    }
    return ClaimRelated;
}(fhirModels.BackboneElement));
export { ClaimRelated };
/**
 * Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decline to pay the provider and choose to pay the subscriber instead.
 */
var ClaimPayee = /** @class */ (function (_super) {
    __extends(ClaimPayee, _super);
    /**
     * Default constructor for ClaimPayee from an object that MAY NOT contain all required elements.
     */
    function ClaimPayee(source) {
        var _this = _super.call(this, source) || this;
        if (source["party"] !== undefined) {
            _this.party = new fhirModels.Reference(source.party);
        }
        {
            _this.type = new fhirModels.CodeableConcept(source.type);
        }
        return _this;
    }
    return ClaimPayee;
}(fhirModels.BackboneElement));
export { ClaimPayee };
/**
 * The members of the team who provided the products and services.
 */
var ClaimCareTeam = /** @class */ (function (_super) {
    __extends(ClaimCareTeam, _super);
    /**
     * Default constructor for ClaimCareTeam from an object that MAY NOT contain all required elements.
     */
    function ClaimCareTeam(source) {
        var _this = _super.call(this, source) || this;
        {
            _this.provider = new fhirModels.Reference(source.provider);
        }
        if (source["qualification"] !== undefined) {
            _this.qualification = new fhirModels.CodeableConcept(source.qualification);
        }
        if (source["responsible"] !== undefined) {
            _this.responsible = source.responsible;
        }
        if (source["_responsible"] !== undefined) {
            _this._responsible = new fhirModels.Element(source._responsible);
        }
        if (source["role"] !== undefined) {
            _this.role = new fhirModels.CodeableConcept(source.role);
        }
        {
            _this.sequence = source.sequence;
        }
        if (source["_sequence"] !== undefined) {
            _this._sequence = new fhirModels.Element(source._sequence);
        }
        return _this;
    }
    return ClaimCareTeam;
}(fhirModels.BackboneElement));
export { ClaimCareTeam };
/**
 * Often there are multiple jurisdiction specific valuesets which are required.
 */
var ClaimSupportingInfo = /** @class */ (function (_super) {
    __extends(ClaimSupportingInfo, _super);
    /**
     * Default constructor for ClaimSupportingInfo from an object that MAY NOT contain all required elements.
     */
    function ClaimSupportingInfo(source) {
        var _this = _super.call(this, source) || this;
        {
            _this.category = new fhirModels.CodeableConcept(source.category);
        }
        if (source["code"] !== undefined) {
            _this.code = new fhirModels.CodeableConcept(source.code);
        }
        if (source["reason"] !== undefined) {
            _this.reason = new fhirModels.CodeableConcept(source.reason);
        }
        {
            _this.sequence = source.sequence;
        }
        if (source["_sequence"] !== undefined) {
            _this._sequence = new fhirModels.Element(source._sequence);
        }
        if (source["timingDate"] !== undefined) {
            _this.timingDate = source.timingDate;
        }
        if (source["_timingDate"] !== undefined) {
            _this._timingDate = new fhirModels.Element(source._timingDate);
        }
        if (source["timingPeriod"] !== undefined) {
            _this.timingPeriod = new fhirModels.Period(source.timingPeriod);
        }
        if (source["valueBoolean"] !== undefined) {
            _this.valueBoolean = source.valueBoolean;
        }
        if (source["_valueBoolean"] !== undefined) {
            _this._valueBoolean = new fhirModels.Element(source._valueBoolean);
        }
        if (source["valueString"] !== undefined) {
            _this.valueString = source.valueString;
        }
        if (source["_valueString"] !== undefined) {
            _this._valueString = new fhirModels.Element(source._valueString);
        }
        if (source["valueQuantity"] !== undefined) {
            _this.valueQuantity = new fhirModels.Quantity(source.valueQuantity);
        }
        if (source["valueAttachment"] !== undefined) {
            _this.valueAttachment = new fhirModels.Attachment(source.valueAttachment);
        }
        if (source["valueReference"] !== undefined) {
            _this.valueReference = new fhirModels.Reference(source.valueReference);
        }
        return _this;
    }
    return ClaimSupportingInfo;
}(fhirModels.BackboneElement));
export { ClaimSupportingInfo };
/**
 * Information about diagnoses relevant to the claim items.
 */
var ClaimDiagnosis = /** @class */ (function (_super) {
    __extends(ClaimDiagnosis, _super);
    /**
     * Default constructor for ClaimDiagnosis from an object that MAY NOT contain all required elements.
     */
    function ClaimDiagnosis(source) {
        var _this = _super.call(this, source) || this;
        if (source["diagnosisCodeableConcept"] !== undefined) {
            _this.diagnosisCodeableConcept = new fhirModels.CodeableConcept(source.diagnosisCodeableConcept);
        }
        if (source["diagnosisReference"] !== undefined) {
            _this.diagnosisReference = new fhirModels.Reference(source.diagnosisReference);
        }
        if (source["onAdmission"] !== undefined) {
            _this.onAdmission = new fhirModels.CodeableConcept(source.onAdmission);
        }
        if (source["packageCode"] !== undefined) {
            _this.packageCode = new fhirModels.CodeableConcept(source.packageCode);
        }
        {
            _this.sequence = source.sequence;
        }
        if (source["_sequence"] !== undefined) {
            _this._sequence = new fhirModels.Element(source._sequence);
        }
        if (source["type"] !== undefined) {
            _this.type = source.type.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        return _this;
    }
    return ClaimDiagnosis;
}(fhirModels.BackboneElement));
export { ClaimDiagnosis };
/**
 * Procedures performed on the patient relevant to the billing items with the claim.
 */
var ClaimProcedure = /** @class */ (function (_super) {
    __extends(ClaimProcedure, _super);
    /**
     * Default constructor for ClaimProcedure from an object that MAY NOT contain all required elements.
     */
    function ClaimProcedure(source) {
        var _this = _super.call(this, source) || this;
        if (source["date"] !== undefined) {
            _this.date = source.date;
        }
        if (source["_date"] !== undefined) {
            _this._date = new fhirModels.Element(source._date);
        }
        if (source["procedureCodeableConcept"] !== undefined) {
            _this.procedureCodeableConcept = new fhirModels.CodeableConcept(source.procedureCodeableConcept);
        }
        if (source["procedureReference"] !== undefined) {
            _this.procedureReference = new fhirModels.Reference(source.procedureReference);
        }
        {
            _this.sequence = source.sequence;
        }
        if (source["_sequence"] !== undefined) {
            _this._sequence = new fhirModels.Element(source._sequence);
        }
        if (source["type"] !== undefined) {
            _this.type = source.type.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["udi"] !== undefined) {
            _this.udi = source.udi.map(function (x) { return new fhirModels.Reference(x); });
        }
        return _this;
    }
    return ClaimProcedure;
}(fhirModels.BackboneElement));
export { ClaimProcedure };
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'Coverage.subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
var ClaimInsurance = /** @class */ (function (_super) {
    __extends(ClaimInsurance, _super);
    /**
     * Default constructor for ClaimInsurance from an object that MAY NOT contain all required elements.
     */
    function ClaimInsurance(source) {
        var _this = _super.call(this, source) || this;
        if (source["businessArrangement"] !== undefined) {
            _this.businessArrangement = source.businessArrangement;
        }
        if (source["_businessArrangement"] !== undefined) {
            _this._businessArrangement = new fhirModels.Element(source._businessArrangement);
        }
        if (source["claimResponse"] !== undefined) {
            _this.claimResponse = new fhirModels.Reference(source.claimResponse);
        }
        {
            _this.coverage = new fhirModels.Reference(source.coverage);
        }
        {
            _this.focal = source.focal;
        }
        if (source["_focal"] !== undefined) {
            _this._focal = new fhirModels.Element(source._focal);
        }
        if (source["identifier"] !== undefined) {
            _this.identifier = new fhirModels.Identifier(source.identifier);
        }
        if (source["preAuthRef"] !== undefined) {
            _this.preAuthRef = source.preAuthRef.map(function (x) { return (x); });
        }
        if (source["_preAuthRef"] !== undefined) {
            _this._preAuthRef = source._preAuthRef.map(function (x) { return new fhirModels.Element(x); });
        }
        {
            _this.sequence = source.sequence;
        }
        if (source["_sequence"] !== undefined) {
            _this._sequence = new fhirModels.Element(source._sequence);
        }
        return _this;
    }
    return ClaimInsurance;
}(fhirModels.BackboneElement));
export { ClaimInsurance };
/**
 * Details of an accident which resulted in injuries which required the products and services listed in the claim.
 */
var ClaimAccident = /** @class */ (function (_super) {
    __extends(ClaimAccident, _super);
    /**
     * Default constructor for ClaimAccident from an object that MAY NOT contain all required elements.
     */
    function ClaimAccident(source) {
        var _this = _super.call(this, source) || this;
        {
            _this.date = source.date;
        }
        if (source["_date"] !== undefined) {
            _this._date = new fhirModels.Element(source._date);
        }
        if (source["locationAddress"] !== undefined) {
            _this.locationAddress = new fhirModels.Address(source.locationAddress);
        }
        if (source["locationReference"] !== undefined) {
            _this.locationReference = new fhirModels.Reference(source.locationReference);
        }
        if (source["type"] !== undefined) {
            _this.type = new fhirModels.CodeableConcept(source.type);
        }
        return _this;
    }
    return ClaimAccident;
}(fhirModels.BackboneElement));
export { ClaimAccident };
/**
 * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
 */
var ClaimItemDetailSubDetail = /** @class */ (function (_super) {
    __extends(ClaimItemDetailSubDetail, _super);
    /**
     * Default constructor for ClaimItemDetailSubDetail from an object that MAY NOT contain all required elements.
     */
    function ClaimItemDetailSubDetail(source) {
        var _this = _super.call(this, source) || this;
        if (source["category"] !== undefined) {
            _this.category = new fhirModels.CodeableConcept(source.category);
        }
        if (source["factor"] !== undefined) {
            _this.factor = source.factor;
        }
        if (source["_factor"] !== undefined) {
            _this._factor = new fhirModels.Element(source._factor);
        }
        if (source["modifier"] !== undefined) {
            _this.modifier = source.modifier.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["net"] !== undefined) {
            _this.net = new fhirModels.Money(source.net);
        }
        {
            _this.productOrService = new fhirModels.CodeableConcept(source.productOrService);
        }
        if (source["programCode"] !== undefined) {
            _this.programCode = source.programCode.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["quantity"] !== undefined) {
            _this.quantity = new fhirModels.Quantity(source.quantity);
        }
        if (source["revenue"] !== undefined) {
            _this.revenue = new fhirModels.CodeableConcept(source.revenue);
        }
        {
            _this.sequence = source.sequence;
        }
        if (source["_sequence"] !== undefined) {
            _this._sequence = new fhirModels.Element(source._sequence);
        }
        if (source["udi"] !== undefined) {
            _this.udi = source.udi.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["unitPrice"] !== undefined) {
            _this.unitPrice = new fhirModels.Money(source.unitPrice);
        }
        return _this;
    }
    return ClaimItemDetailSubDetail;
}(fhirModels.BackboneElement));
export { ClaimItemDetailSubDetail };
/**
 * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
 */
var ClaimItemDetail = /** @class */ (function (_super) {
    __extends(ClaimItemDetail, _super);
    /**
     * Default constructor for ClaimItemDetail from an object that MAY NOT contain all required elements.
     */
    function ClaimItemDetail(source) {
        var _this = _super.call(this, source) || this;
        if (source["category"] !== undefined) {
            _this.category = new fhirModels.CodeableConcept(source.category);
        }
        if (source["factor"] !== undefined) {
            _this.factor = source.factor;
        }
        if (source["_factor"] !== undefined) {
            _this._factor = new fhirModels.Element(source._factor);
        }
        if (source["modifier"] !== undefined) {
            _this.modifier = source.modifier.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["net"] !== undefined) {
            _this.net = new fhirModels.Money(source.net);
        }
        {
            _this.productOrService = new fhirModels.CodeableConcept(source.productOrService);
        }
        if (source["programCode"] !== undefined) {
            _this.programCode = source.programCode.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["quantity"] !== undefined) {
            _this.quantity = new fhirModels.Quantity(source.quantity);
        }
        if (source["revenue"] !== undefined) {
            _this.revenue = new fhirModels.CodeableConcept(source.revenue);
        }
        {
            _this.sequence = source.sequence;
        }
        if (source["_sequence"] !== undefined) {
            _this._sequence = new fhirModels.Element(source._sequence);
        }
        if (source["subDetail"] !== undefined) {
            _this.subDetail = source.subDetail.map(function (x) { return new fhirModels.ClaimItemDetailSubDetail(x); });
        }
        if (source["udi"] !== undefined) {
            _this.udi = source.udi.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["unitPrice"] !== undefined) {
            _this.unitPrice = new fhirModels.Money(source.unitPrice);
        }
        return _this;
    }
    return ClaimItemDetail;
}(fhirModels.BackboneElement));
export { ClaimItemDetail };
/**
 * A claim line. Either a simple  product or service or a 'group' of details which can each be a simple items or groups of sub-details.
 */
var ClaimItem = /** @class */ (function (_super) {
    __extends(ClaimItem, _super);
    /**
     * Default constructor for ClaimItem from an object that MAY NOT contain all required elements.
     */
    function ClaimItem(source) {
        var _this = _super.call(this, source) || this;
        if (source["bodySite"] !== undefined) {
            _this.bodySite = new fhirModels.CodeableConcept(source.bodySite);
        }
        if (source["careTeamSequence"] !== undefined) {
            _this.careTeamSequence = source.careTeamSequence.map(function (x) { return (x); });
        }
        if (source["_careTeamSequence"] !== undefined) {
            _this._careTeamSequence = source._careTeamSequence.map(function (x) { return new fhirModels.Element(x); });
        }
        if (source["category"] !== undefined) {
            _this.category = new fhirModels.CodeableConcept(source.category);
        }
        if (source["detail"] !== undefined) {
            _this.detail = source.detail.map(function (x) { return new fhirModels.ClaimItemDetail(x); });
        }
        if (source["diagnosisSequence"] !== undefined) {
            _this.diagnosisSequence = source.diagnosisSequence.map(function (x) { return (x); });
        }
        if (source["_diagnosisSequence"] !== undefined) {
            _this._diagnosisSequence = source._diagnosisSequence.map(function (x) { return new fhirModels.Element(x); });
        }
        if (source["encounter"] !== undefined) {
            _this.encounter = source.encounter.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["factor"] !== undefined) {
            _this.factor = source.factor;
        }
        if (source["_factor"] !== undefined) {
            _this._factor = new fhirModels.Element(source._factor);
        }
        if (source["informationSequence"] !== undefined) {
            _this.informationSequence = source.informationSequence.map(function (x) { return (x); });
        }
        if (source["_informationSequence"] !== undefined) {
            _this._informationSequence = source._informationSequence.map(function (x) { return new fhirModels.Element(x); });
        }
        if (source["locationCodeableConcept"] !== undefined) {
            _this.locationCodeableConcept = new fhirModels.CodeableConcept(source.locationCodeableConcept);
        }
        if (source["locationAddress"] !== undefined) {
            _this.locationAddress = new fhirModels.Address(source.locationAddress);
        }
        if (source["locationReference"] !== undefined) {
            _this.locationReference = new fhirModels.Reference(source.locationReference);
        }
        if (source["modifier"] !== undefined) {
            _this.modifier = source.modifier.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["net"] !== undefined) {
            _this.net = new fhirModels.Money(source.net);
        }
        if (source["procedureSequence"] !== undefined) {
            _this.procedureSequence = source.procedureSequence.map(function (x) { return (x); });
        }
        if (source["_procedureSequence"] !== undefined) {
            _this._procedureSequence = source._procedureSequence.map(function (x) { return new fhirModels.Element(x); });
        }
        {
            _this.productOrService = new fhirModels.CodeableConcept(source.productOrService);
        }
        if (source["programCode"] !== undefined) {
            _this.programCode = source.programCode.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["quantity"] !== undefined) {
            _this.quantity = new fhirModels.Quantity(source.quantity);
        }
        if (source["revenue"] !== undefined) {
            _this.revenue = new fhirModels.CodeableConcept(source.revenue);
        }
        {
            _this.sequence = source.sequence;
        }
        if (source["_sequence"] !== undefined) {
            _this._sequence = new fhirModels.Element(source._sequence);
        }
        if (source["servicedDate"] !== undefined) {
            _this.servicedDate = source.servicedDate;
        }
        if (source["_servicedDate"] !== undefined) {
            _this._servicedDate = new fhirModels.Element(source._servicedDate);
        }
        if (source["servicedPeriod"] !== undefined) {
            _this.servicedPeriod = new fhirModels.Period(source.servicedPeriod);
        }
        if (source["subSite"] !== undefined) {
            _this.subSite = source.subSite.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["udi"] !== undefined) {
            _this.udi = source.udi.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["unitPrice"] !== undefined) {
            _this.unitPrice = new fhirModels.Money(source.unitPrice);
        }
        return _this;
    }
    return ClaimItem;
}(fhirModels.BackboneElement));
export { ClaimItem };
/**
 * A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.
 */
var Claim = /** @class */ (function (_super) {
    __extends(Claim, _super);
    /**
     * Default constructor for Claim from an object that MAY NOT contain all required elements.
     */
    function Claim(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "Claim";
        if ((source['resourceType'] !== "Claim") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a Claim';
        }
        if (source["accident"] !== undefined) {
            _this.accident = new fhirModels.ClaimAccident(source.accident);
        }
        if (source["billablePeriod"] !== undefined) {
            _this.billablePeriod = new fhirModels.Period(source.billablePeriod);
        }
        if (source["careTeam"] !== undefined) {
            _this.careTeam = source.careTeam.map(function (x) { return new fhirModels.ClaimCareTeam(x); });
        }
        {
            _this.created = source.created;
        }
        if (source["_created"] !== undefined) {
            _this._created = new fhirModels.Element(source._created);
        }
        if (source["diagnosis"] !== undefined) {
            _this.diagnosis = source.diagnosis.map(function (x) { return new fhirModels.ClaimDiagnosis(x); });
        }
        if (source["enterer"] !== undefined) {
            _this.enterer = new fhirModels.Reference(source.enterer);
        }
        if (source["facility"] !== undefined) {
            _this.facility = new fhirModels.Reference(source.facility);
        }
        if (source["fundsReserve"] !== undefined) {
            _this.fundsReserve = new fhirModels.CodeableConcept(source.fundsReserve);
        }
        if (source["identifier"] !== undefined) {
            _this.identifier = source.identifier.map(function (x) { return new fhirModels.Identifier(x); });
        }
        {
            _this.insurance = source.insurance.map(function (x) { return new fhirModels.ClaimInsurance(x); });
        }
        if (source["insurer"] !== undefined) {
            _this.insurer = new fhirModels.Reference(source.insurer);
        }
        if (source["item"] !== undefined) {
            _this.item = source.item.map(function (x) { return new fhirModels.ClaimItem(x); });
        }
        if (source["originalPrescription"] !== undefined) {
            _this.originalPrescription = new fhirModels.Reference(source.originalPrescription);
        }
        {
            _this.patient = new fhirModels.Reference(source.patient);
        }
        if (source["payee"] !== undefined) {
            _this.payee = new fhirModels.ClaimPayee(source.payee);
        }
        if (source["prescription"] !== undefined) {
            _this.prescription = new fhirModels.Reference(source.prescription);
        }
        {
            _this.priority = new fhirModels.CodeableConcept(source.priority);
        }
        if (source["procedure"] !== undefined) {
            _this.procedure = source.procedure.map(function (x) { return new fhirModels.ClaimProcedure(x); });
        }
        {
            _this.provider = new fhirModels.Reference(source.provider);
        }
        if (source["referral"] !== undefined) {
            _this.referral = new fhirModels.Reference(source.referral);
        }
        if (source["related"] !== undefined) {
            _this.related = source.related.map(function (x) { return new fhirModels.ClaimRelated(x); });
        }
        {
            _this.status = source.status;
        }
        if (source["_status"] !== undefined) {
            _this._status = new fhirModels.Element(source._status);
        }
        if (source["subType"] !== undefined) {
            _this.subType = new fhirModels.CodeableConcept(source.subType);
        }
        if (source["supportingInfo"] !== undefined) {
            _this.supportingInfo = source.supportingInfo.map(function (x) { return new fhirModels.ClaimSupportingInfo(x); });
        }
        if (source["total"] !== undefined) {
            _this.total = new fhirModels.Money(source.total);
        }
        {
            _this.type = new fhirModels.CodeableConcept(source.type);
        }
        {
            _this.use = source.use;
        }
        if (source["_use"] !== undefined) {
            _this._use = new fhirModels.Element(source._use);
        }
        return _this;
    }
    return Claim;
}(fhirModels.DomainResource));
export { Claim };
/**
 * Code Values for the Claim.status field
 */
export var ClaimStatusEnum;
(function (ClaimStatusEnum) {
    ClaimStatusEnum["ACTIVE"] = "active";
    ClaimStatusEnum["CANCELLED"] = "cancelled";
    ClaimStatusEnum["DRAFT"] = "draft";
    ClaimStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(ClaimStatusEnum || (ClaimStatusEnum = {}));
/**
 * Code Values for the Claim.use field
 */
export var ClaimUseEnum;
(function (ClaimUseEnum) {
    ClaimUseEnum["CLAIM"] = "claim";
    ClaimUseEnum["PREAUTHORIZATION"] = "preauthorization";
    ClaimUseEnum["PREDETERMINATION"] = "predetermination";
})(ClaimUseEnum || (ClaimUseEnum = {}));