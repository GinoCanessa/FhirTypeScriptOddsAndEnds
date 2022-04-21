// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/contract-status|4.0.1
import { Coding } from '../fhir.js';
/**
 * This value set contract specific codes for status.
 */
export const ContractStatusValueSet = {
    /**
     * amended: Contract is augmented with additional information to correct errors in a predecessor or to updated values in a predecessor. Usage: Contract altered within effective time. Precedence Order = 9. Comparable FHIR and v.3 status codes: revised; replaced.
     */
    Amended: new Coding({
        display: "Amended",
        code: "amended",
        system: "http://hl7.org/fhir/contract-status",
    }),
    /**
     * appended: Contract is augmented with additional information that was missing from a predecessor Contract. Usage: Contract altered within effective time. Precedence Order = 9. Comparable FHIR and v.3 status codes: updated, replaced.
     */
    Appended: new Coding({
        display: "Appended",
        code: "appended",
        system: "http://hl7.org/fhir/contract-status",
    }),
    /**
     * cancelled: Contract is terminated due to failure of the Grantor and/or the Grantee to fulfil one or more contract provisions. Usage: Abnormal contract termination. Precedence Order = 10. Comparable FHIR and v.3 status codes: stopped; failed; aborted.
     */
    Cancelled: new Coding({
        display: "Cancelled",
        code: "cancelled",
        system: "http://hl7.org/fhir/contract-status",
    }),
    /**
     * disputed: Contract is pended to rectify failure of the Grantor or the Grantee to fulfil contract provision(s). E.g., Grantee complaint about Grantor's failure to comply with contract provisions. Usage: Contract pended. Precedence Order = 7. Comparable FHIR and v.3 status codes: on hold; pended; suspended.
     */
    Disputed: new Coding({
        display: "Disputed",
        code: "disputed",
        system: "http://hl7.org/fhir/contract-status",
    }),
    /**
     * entered-in-error: Contract was created in error. No Precedence Order.  Status may be applied to a Contract with any status.
     */
    EnteredInError: new Coding({
        display: "Entered in Error",
        code: "entered-in-error",
        system: "http://hl7.org/fhir/contract-status",
    }),
    /**
     * executable: Contract execution pending; may be executed when either the Grantor or the Grantee accepts the contract provisions by signing. I.e., where either the Grantor or the Grantee has signed, but not both. E.g., when an insurance applicant signs the insurers application, which references the policy. Usage: Optional first step of contract execution activity.  May be skipped and contracting activity moves directly to executed state. Precedence Order = 3. Comparable FHIR and v.3 status codes: draft; preliminary; planned; intended; active.
     */
    Executable: new Coding({
        display: "Executable",
        code: "executable",
        system: "http://hl7.org/fhir/contract-status",
    }),
    /**
     * executed: Contract is activated for period stipulated when both the Grantor and Grantee have signed it. Usage: Required state for normal completion of contracting activity.  Precedence Order = 6. Comparable FHIR and v.3 status codes: accepted; completed.
     */
    Executed: new Coding({
        display: "Executed",
        code: "executed",
        system: "http://hl7.org/fhir/contract-status",
    }),
    /**
     * negotiable: Contract execution is suspended while either or both the Grantor and Grantee propose and consider new or revised contract provisions. I.e., where the party which has not signed proposes changes to the terms.  E .g., a life insurer declines to agree to the signed application because the life insurer has evidence that the applicant, who asserted to being younger or a non-smoker to get a lower premium rate - but offers instead to agree to a higher premium based on the applicants actual age or smoking status. Usage: Optional contract activity between executable and executed state. Precedence Order = 4. Comparable FHIR and v.3 status codes: in progress; review; held.
     */
    Negotiable: new Coding({
        display: "Negotiable",
        code: "negotiable",
        system: "http://hl7.org/fhir/contract-status",
    }),
    /**
     * offered: Contract is a proposal by either the Grantor or the Grantee. Aka - A Contract hard copy or electronic 'template', 'form' or 'application'. E.g., health insurance application; consent directive form. Usage: Beginning of contract negotiation, which may have been completed as a precondition because used for 0..* contracts. Precedence Order = 2. Comparable FHIR and v.3 status codes: requested; new.
     */
    Offered: new Coding({
        display: "Offered",
        code: "offered",
        system: "http://hl7.org/fhir/contract-status",
    }),
    /**
     * policy: Contract template is available as the basis for an application or offer by the Grantor or Grantee. E.g., health insurance policy; consent directive policy.  Usage: Required initial contract activity, which may have been completed as a precondition because used for 0..* contracts. Precedence Order = 1. Comparable FHIR and v.3 status codes: proposed; intended.
     */
    Policy: new Coding({
        display: "Policy",
        code: "policy",
        system: "http://hl7.org/fhir/contract-status",
    }),
    /**
     * rejected:  Execution of the Contract is not completed because either or both the Grantor and Grantee decline to accept some or all of the contract provisions. Usage: Optional contract activity between executable and abnormal termination. Precedence Order = 5. Comparable FHIR and v.3 status codes:  stopped; cancelled.
     */
    Rejected: new Coding({
        display: "Rejected",
        code: "rejected",
        system: "http://hl7.org/fhir/contract-status",
    }),
    /**
     * renewed: Beginning of a successor Contract at the termination of predecessor Contract lifecycle. Usage: Follows termination of a preceding Contract that has reached its expiry date. Precedence Order = 13. Comparable FHIR and v.3 status codes: superseded.
     */
    Renewed: new Coding({
        display: "Renewed",
        code: "renewed",
        system: "http://hl7.org/fhir/contract-status",
    }),
    /**
     * resolved: Contract is reactivated after being pended because of faulty execution. *E.g., competency of the signer(s), or where the policy is substantially different from and did not accompany the application/form so that the applicant could not compare them. Aka - ''reactivated''. Usage: Optional stage where a pended contract is reactivated. Precedence Order = 8. Comparable FHIR and v.3 status codes: reactivated.
     */
    Resolved: new Coding({
        display: "Resolved",
        code: "resolved",
        system: "http://hl7.org/fhir/contract-status",
    }),
    /**
     * revoked: A Contract that is rescinded.  May be required prior to replacing with an updated Contract. Comparable FHIR and v.3 status codes: nullified.
     */
    Revoked: new Coding({
        display: "Revoked",
        code: "revoked",
        system: "http://hl7.org/fhir/contract-status",
    }),
    /**
     * terminated: Contract reaches its expiry date. It might or might not be renewed or renegotiated. Usage: Normal end of contract period. Precedence Order = 12. Comparable FHIR and v.3 status codes: Obsoleted.
     */
    Terminated: new Coding({
        display: "Terminated",
        code: "terminated",
        system: "http://hl7.org/fhir/contract-status",
    }),
};
/**
 * This value set contract specific codes for status.
 */
export var ContractStatusValueSetEnum;
(function (ContractStatusValueSetEnum) {
    /**
     * amended: Contract is augmented with additional information to correct errors in a predecessor or to updated values in a predecessor. Usage: Contract altered within effective time. Precedence Order = 9. Comparable FHIR and v.3 status codes: revised; replaced.
     */
    ContractStatusValueSetEnum["Amended"] = "amended";
    /**
     * appended: Contract is augmented with additional information that was missing from a predecessor Contract. Usage: Contract altered within effective time. Precedence Order = 9. Comparable FHIR and v.3 status codes: updated, replaced.
     */
    ContractStatusValueSetEnum["Appended"] = "appended";
    /**
     * cancelled: Contract is terminated due to failure of the Grantor and/or the Grantee to fulfil one or more contract provisions. Usage: Abnormal contract termination. Precedence Order = 10. Comparable FHIR and v.3 status codes: stopped; failed; aborted.
     */
    ContractStatusValueSetEnum["Cancelled"] = "cancelled";
    /**
     * disputed: Contract is pended to rectify failure of the Grantor or the Grantee to fulfil contract provision(s). E.g., Grantee complaint about Grantor's failure to comply with contract provisions. Usage: Contract pended. Precedence Order = 7. Comparable FHIR and v.3 status codes: on hold; pended; suspended.
     */
    ContractStatusValueSetEnum["Disputed"] = "disputed";
    /**
     * entered-in-error: Contract was created in error. No Precedence Order.  Status may be applied to a Contract with any status.
     */
    ContractStatusValueSetEnum["EnteredInError"] = "entered-in-error";
    /**
     * executable: Contract execution pending; may be executed when either the Grantor or the Grantee accepts the contract provisions by signing. I.e., where either the Grantor or the Grantee has signed, but not both. E.g., when an insurance applicant signs the insurers application, which references the policy. Usage: Optional first step of contract execution activity.  May be skipped and contracting activity moves directly to executed state. Precedence Order = 3. Comparable FHIR and v.3 status codes: draft; preliminary; planned; intended; active.
     */
    ContractStatusValueSetEnum["Executable"] = "executable";
    /**
     * executed: Contract is activated for period stipulated when both the Grantor and Grantee have signed it. Usage: Required state for normal completion of contracting activity.  Precedence Order = 6. Comparable FHIR and v.3 status codes: accepted; completed.
     */
    ContractStatusValueSetEnum["Executed"] = "executed";
    /**
     * negotiable: Contract execution is suspended while either or both the Grantor and Grantee propose and consider new or revised contract provisions. I.e., where the party which has not signed proposes changes to the terms.  E .g., a life insurer declines to agree to the signed application because the life insurer has evidence that the applicant, who asserted to being younger or a non-smoker to get a lower premium rate - but offers instead to agree to a higher premium based on the applicants actual age or smoking status. Usage: Optional contract activity between executable and executed state. Precedence Order = 4. Comparable FHIR and v.3 status codes: in progress; review; held.
     */
    ContractStatusValueSetEnum["Negotiable"] = "negotiable";
    /**
     * offered: Contract is a proposal by either the Grantor or the Grantee. Aka - A Contract hard copy or electronic 'template', 'form' or 'application'. E.g., health insurance application; consent directive form. Usage: Beginning of contract negotiation, which may have been completed as a precondition because used for 0..* contracts. Precedence Order = 2. Comparable FHIR and v.3 status codes: requested; new.
     */
    ContractStatusValueSetEnum["Offered"] = "offered";
    /**
     * policy: Contract template is available as the basis for an application or offer by the Grantor or Grantee. E.g., health insurance policy; consent directive policy.  Usage: Required initial contract activity, which may have been completed as a precondition because used for 0..* contracts. Precedence Order = 1. Comparable FHIR and v.3 status codes: proposed; intended.
     */
    ContractStatusValueSetEnum["Policy"] = "policy";
    /**
     * rejected:  Execution of the Contract is not completed because either or both the Grantor and Grantee decline to accept some or all of the contract provisions. Usage: Optional contract activity between executable and abnormal termination. Precedence Order = 5. Comparable FHIR and v.3 status codes:  stopped; cancelled.
     */
    ContractStatusValueSetEnum["Rejected"] = "rejected";
    /**
     * renewed: Beginning of a successor Contract at the termination of predecessor Contract lifecycle. Usage: Follows termination of a preceding Contract that has reached its expiry date. Precedence Order = 13. Comparable FHIR and v.3 status codes: superseded.
     */
    ContractStatusValueSetEnum["Renewed"] = "renewed";
    /**
     * resolved: Contract is reactivated after being pended because of faulty execution. *E.g., competency of the signer(s), or where the policy is substantially different from and did not accompany the application/form so that the applicant could not compare them. Aka - ''reactivated''. Usage: Optional stage where a pended contract is reactivated. Precedence Order = 8. Comparable FHIR and v.3 status codes: reactivated.
     */
    ContractStatusValueSetEnum["Resolved"] = "resolved";
    /**
     * revoked: A Contract that is rescinded.  May be required prior to replacing with an updated Contract. Comparable FHIR and v.3 status codes: nullified.
     */
    ContractStatusValueSetEnum["Revoked"] = "revoked";
    /**
     * terminated: Contract reaches its expiry date. It might or might not be renewed or renegotiated. Usage: Normal end of contract period. Precedence Order = 12. Comparable FHIR and v.3 status codes: Obsoleted.
     */
    ContractStatusValueSetEnum["Terminated"] = "terminated";
})(ContractStatusValueSetEnum || (ContractStatusValueSetEnum = {}));
//# sourceMappingURL=ContractStatusValueSet.js.map