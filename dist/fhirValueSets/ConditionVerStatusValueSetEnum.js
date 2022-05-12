// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://hl7.org/fhir/ValueSet/condition-ver-status|4.0.1
/**
 * The verification status to support or decline the clinical status of the condition or diagnosis.
 */
export var ConditionVerStatusValueSetEnum;
(function (ConditionVerStatusValueSetEnum) {
    /**
     * confirmed: There is sufficient diagnostic and/or clinical evidence to treat this as a confirmed condition.
     */
    ConditionVerStatusValueSetEnum["Confirmed"] = "confirmed";
    /**
     * differential: One of a set of potential (and typically mutually exclusive) diagnoses asserted to further guide the diagnostic process and preliminary treatment.
     */
    ConditionVerStatusValueSetEnum["Differential"] = "differential";
    /**
     * entered-in-error: The statement was entered in error and is not valid.
     */
    ConditionVerStatusValueSetEnum["EnteredInError"] = "entered-in-error";
    /**
     * provisional: This is a tentative diagnosis - still a candidate that is under consideration.
     */
    ConditionVerStatusValueSetEnum["Provisional"] = "provisional";
    /**
     * refuted: This condition has been ruled out by diagnostic and clinical evidence.
     */
    ConditionVerStatusValueSetEnum["Refuted"] = "refuted";
    /**
     * unconfirmed: There is not sufficient diagnostic and/or clinical evidence to treat this as a confirmed condition.
     */
    ConditionVerStatusValueSetEnum["Unconfirmed"] = "unconfirmed";
})(ConditionVerStatusValueSetEnum || (ConditionVerStatusValueSetEnum = {}));
//# sourceMappingURL=ConditionVerStatusValueSetEnum.js.map