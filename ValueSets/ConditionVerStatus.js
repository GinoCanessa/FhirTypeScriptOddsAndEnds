"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConditionVerStatus = void 0;
/**
 * The verification status to support or decline the clinical status of the condition or diagnosis.
 */
exports.ConditionVerStatus = {
    /**
     * There is sufficient diagnostic and/or clinical evidence to treat this as a confirmed condition.
     */
    condition_ver_status_Confirmed: {
        code: "confirmed",
        display: "Confirmed",
        system: "http://terminology.hl7.org/CodeSystem/condition-ver-status"
    },
    /**
     * One of a set of potential (and typically mutually exclusive) diagnoses asserted to further guide the diagnostic process and preliminary treatment.
     */
    condition_ver_status_Differential: {
        code: "differential",
        display: "Differential",
        system: "http://terminology.hl7.org/CodeSystem/condition-ver-status"
    },
    /**
     * The statement was entered in error and is not valid.
     */
    condition_ver_status_EnteredInError: {
        code: "entered-in-error",
        display: "Entered in Error",
        system: "http://terminology.hl7.org/CodeSystem/condition-ver-status"
    },
    /**
     * This is a tentative diagnosis - still a candidate that is under consideration.
     */
    condition_ver_status_Provisional: {
        code: "provisional",
        display: "Provisional",
        system: "http://terminology.hl7.org/CodeSystem/condition-ver-status"
    },
    /**
     * This condition has been ruled out by diagnostic and clinical evidence.
     */
    condition_ver_status_Refuted: {
        code: "refuted",
        display: "Refuted",
        system: "http://terminology.hl7.org/CodeSystem/condition-ver-status"
    },
    /**
     * There is not sufficient diagnostic and/or clinical evidence to treat this as a confirmed condition.
     */
    condition_ver_status_Unconfirmed: {
        code: "unconfirmed",
        display: "Unconfirmed",
        system: "http://terminology.hl7.org/CodeSystem/condition-ver-status"
    },
};
//# sourceMappingURL=ConditionVerStatus.js.map