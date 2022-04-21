import { Coding } from '../fhir.js';
/**
 * MedicationAdministration Performer Function Codes
 */
export declare const MedAdminPerformFunctionValueSet: {
    /**
     * performer: A person, non-person living subject, organization or device that who actually and principally carries out the action
     */
    readonly Performer: Coding;
    /**
     * verifier: A person who verifies the correctness and appropriateness of the service (plan, order, event, etc.) and hence takes on accountability.
     */
    readonly Verifier: Coding;
    /**
     * witness: A person witnessing the action happening without doing anything. A witness is not necessarily aware, much less approves of anything stated in the service event. Example for a witness is students watching an operation or an advanced directive witness.
     */
    readonly Witness: Coding;
};
/**
 * MedicationAdministration Performer Function Codes
 */
export declare type MedAdminPerformFunctionValueSetType = typeof MedAdminPerformFunctionValueSet;
/**
 * MedicationAdministration Performer Function Codes
 */
export declare enum MedAdminPerformFunctionValueSetEnum {
    /**
     * performer: A person, non-person living subject, organization or device that who actually and principally carries out the action
     */
    Performer = "performer",
    /**
     * verifier: A person who verifies the correctness and appropriateness of the service (plan, order, event, etc.) and hence takes on accountability.
     */
    Verifier = "verifier",
    /**
     * witness: A person witnessing the action happening without doing anything. A witness is not necessarily aware, much less approves of anything stated in the service event. Example for a witness is students watching an operation or an advanced directive witness.
     */
    Witness = "witness"
}
//# sourceMappingURL=MedAdminPerformFunctionValueSet.d.ts.map