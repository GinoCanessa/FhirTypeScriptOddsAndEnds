import { Coding } from '../fhir';
/**
 * The verification status to support or decline the clinical status of the condition or diagnosis.
 */
export declare const ConditionVerStatusValueSet: {
    /**
     * There is sufficient diagnostic and/or clinical evidence to treat this as a confirmed condition.
     */
    condition_ver_status_Confirmed: Coding;
    /**
     * One of a set of potential (and typically mutually exclusive) diagnoses asserted to further guide the diagnostic process and preliminary treatment.
     */
    condition_ver_status_Differential: Coding;
    /**
     * The statement was entered in error and is not valid.
     */
    condition_ver_status_EnteredInError: Coding;
    /**
     * This is a tentative diagnosis - still a candidate that is under consideration.
     */
    condition_ver_status_Provisional: Coding;
    /**
     * This condition has been ruled out by diagnostic and clinical evidence.
     */
    condition_ver_status_Refuted: Coding;
    /**
     * There is not sufficient diagnostic and/or clinical evidence to treat this as a confirmed condition.
     */
    condition_ver_status_Unconfirmed: Coding;
};
//# sourceMappingURL=ConditionVerStatusValueSet.d.ts.map