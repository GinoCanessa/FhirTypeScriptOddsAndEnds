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
 * A record of a medication that is being consumed by a patient.   A MedicationStatement may indicate that the patient may be taking the medication now or has taken the medication in the past or will be taking the medication in the future.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay.   The medication information may come from sources such as the patient's memory, from a prescription bottle,  or from a list of medications the patient, clinician or other party maintains.
 * The primary difference between a medication statement and a medication administration is that the medication administration has complete administration information and is based on actual administration information from the person who administered the medication.  A medication statement is often, if not always, less specific.  There is no required date/time when the medication was administered, in fact we only know that a source has reported the patient is taking this medication, where details such as time, quantity, or rate or even medication product may be incomplete or missing or less precise.  As stated earlier, the medication statement information may come from the patient's memory, from a prescription bottle or from a list of medications the patient, clinician or other party maintains.  Medication administration is more formal and is not missing detailed information.
 */
var MedicationStatement = /** @class */ (function (_super) {
    __extends(MedicationStatement, _super);
    /**
     * Default constructor for MedicationStatement from an object that MAY NOT contain all required elements.
     */
    function MedicationStatement(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "MedicationStatement";
        if ((source['resourceType'] !== "MedicationStatement") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a MedicationStatement';
        }
        if (source["basedOn"] !== undefined) {
            _this.basedOn = source.basedOn.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["category"] !== undefined) {
            _this.category = new fhirModels.CodeableConcept(source.category);
        }
        if (source["context"] !== undefined) {
            _this.context = new fhirModels.Reference(source.context);
        }
        if (source["dateAsserted"] !== undefined) {
            _this.dateAsserted = source.dateAsserted;
        }
        if (source["_dateAsserted"] !== undefined) {
            _this._dateAsserted = new fhirModels.Element(source._dateAsserted);
        }
        if (source["derivedFrom"] !== undefined) {
            _this.derivedFrom = source.derivedFrom.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["dosage"] !== undefined) {
            _this.dosage = source.dosage.map(function (x) { return new fhirModels.Dosage(x); });
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
        if (source["identifier"] !== undefined) {
            _this.identifier = source.identifier.map(function (x) { return new fhirModels.Identifier(x); });
        }
        if (source["informationSource"] !== undefined) {
            _this.informationSource = new fhirModels.Reference(source.informationSource);
        }
        if (source["medicationCodeableConcept"] !== undefined) {
            _this.medicationCodeableConcept = new fhirModels.CodeableConcept(source.medicationCodeableConcept);
        }
        if (source["medicationReference"] !== undefined) {
            _this.medicationReference = new fhirModels.Reference(source.medicationReference);
        }
        if (source["note"] !== undefined) {
            _this.note = source.note.map(function (x) { return new fhirModels.Annotation(x); });
        }
        if (source["partOf"] !== undefined) {
            _this.partOf = source.partOf.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["reasonCode"] !== undefined) {
            _this.reasonCode = source.reasonCode.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["reasonReference"] !== undefined) {
            _this.reasonReference = source.reasonReference.map(function (x) { return new fhirModels.Reference(x); });
        }
        {
            _this.status = source.status;
        }
        if (source["_status"] !== undefined) {
            _this._status = new fhirModels.Element(source._status);
        }
        if (source["statusReason"] !== undefined) {
            _this.statusReason = source.statusReason.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        {
            _this.subject = new fhirModels.Reference(source.subject);
        }
        return _this;
    }
    return MedicationStatement;
}(fhirModels.DomainResource));
export { MedicationStatement };
/**
 * Code Values for the MedicationStatement.status field
 */
export var MedicationStatementStatusEnum;
(function (MedicationStatementStatusEnum) {
    MedicationStatementStatusEnum["ACTIVE"] = "active";
    MedicationStatementStatusEnum["COMPLETED"] = "completed";
    MedicationStatementStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
    MedicationStatementStatusEnum["INTENDED"] = "intended";
    MedicationStatementStatusEnum["STOPPED"] = "stopped";
    MedicationStatementStatusEnum["ON_HOLD"] = "on-hold";
    MedicationStatementStatusEnum["UNKNOWN"] = "unknown";
    MedicationStatementStatusEnum["NOT_TAKEN"] = "not-taken";
})(MedicationStatementStatusEnum || (MedicationStatementStatusEnum = {}));
