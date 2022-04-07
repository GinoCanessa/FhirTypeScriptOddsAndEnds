import { Coding } from '../strictmodels';
/**
 * Kinds of mitigating actions and observations that can be associated with a detected issue or contraindication, such as 'added concurrent therapy', 'prior therapy documented', etc.
 */
export declare const DetectedissueMitigationAction: {
    /**
     * Codes dealing with the management of Detected Issue observations for the administrative and patient administrative acts domains.
     */
    v3_ActCode_ActAdministrativeDetectedIssueManagementCode: Coding;
    /**
     * Codes dealing with the management of Detected Issue observations
     */
    v3_ActCode_ActDetectedIssueManagementCode: Coding;
    /**
     * Authorization Issue Management Code
     */
    v3_ActCode_AuthorizationIssueManagementCode: Coding;
    /**
     * Confirmed drug therapy appropriate
     */
    v3_ActCode_TherapyAppropriate: Coding;
    /**
     * Provided education or training to the patient on appropriate therapy use
     */
    v3_ActCode_ProvidedPatientEducation: Coding;
    /**
     * Instituted an additional therapy to mitigate potential negative effects
     */
    v3_ActCode_AddedConcurrentTherapy: Coding;
    /**
     * Suspended existing therapy that triggered interaction for the duration of this therapy
     */
    v3_ActCode_TemporarilySuspendedConcurrentTherapy: Coding;
    /**
     * Aborted existing therapy that triggered interaction.
     */
    v3_ActCode_StoppedConcurrentTherapy: Coding;
    /**
     * Confirmed supply action appropriate
     */
    v3_ActCode_SupplyAppropriate: Coding;
    /**
     * Patient's existing supply was lost/wasted
     */
    v3_ActCode_Replacement: Coding;
    /**
     * Supply date is due to patient vacation
     */
    v3_ActCode_VacationSupply: Coding;
    /**
     * Supply date is intended to carry patient over weekend
     */
    v3_ActCode_WeekendSupply: Coding;
    /**
     * Supply is intended for use during a leave of absence from an institution.
     */
    v3_ActCode_LeaveOfAbsence: Coding;
    /**
     * Consulted other supplier/pharmacy, therapy confirmed
     */
    v3_ActCode_ConsultedSupplier: Coding;
    /**
     * Assessed patient, therapy is appropriate
     */
    v3_ActCode_AssessedPatient: Coding;
    /**
     * Description: Supply is different than expected as an additional quantity has been supplied in a separate dispense.
     */
    v3_ActCode_AdditionalQuantityOnSeparateDispense: Coding;
    /**
     * Description: Indicates that the permissions have been externally verified and the request should be processed.
     */
    v3_ActCode_AuthorizationConfirmed: Coding;
    /**
     * Description: The patient has the appropriate indication or diagnosis for the action to be taken.
     */
    v3_ActCode_AppropriateIndicationOrDiagnosis: Coding;
    /**
     * Description: It has been confirmed that the appropriate pre-requisite therapy has been tried.
     */
    v3_ActCode_PriorTherapyDocumented: Coding;
    /**
     * Patient gave adequate explanation
     */
    v3_ActCode_PatientExplanation: Coding;
    /**
     * Consulted other supply source, therapy still appropriate
     */
    v3_ActCode_ConsultedOtherSource: Coding;
    /**
     * Consulted prescriber, therapy confirmed
     */
    v3_ActCode_ConsultedPrescriber: Coding;
    /**
     * Consulted prescriber and recommended change, prescriber declined
     */
    v3_ActCode_PrescriberDeclinedChange: Coding;
    /**
     * Concurrent therapy triggering alert is no longer on-going or planned
     */
    v3_ActCode_InteractingTherapyNoLongerActivePlanned: Coding;
    /**
     * Order is performed as issued, but other action taken to mitigate potential adverse effects
     */
    v3_ActCode_OtherActionTaken: Coding;
    /**
     * Arranged to monitor patient for adverse effects
     */
    v3_ActCode_InstitutedOngoingMonitoringProgram: Coding;
    /**
     * Used to temporarily override normal authorization rules to gain access to data in a case of emergency. Use of this override code will typically be monitored, and a procedure to verify its proper use may be triggered when used.
     */
    v3_ActCode_EmergencyAuthorizationOverride: Coding;
};
//# sourceMappingURL=DetectedissueMitigationAction.d.ts.map