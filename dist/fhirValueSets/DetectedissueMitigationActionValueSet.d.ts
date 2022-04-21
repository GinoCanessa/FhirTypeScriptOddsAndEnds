import { Coding } from '../fhir.js';
/**
 * Kinds of mitigating actions and observations that can be associated with a detected issue or contraindication, such as 'added concurrent therapy', 'prior therapy documented', etc.
 */
export declare const DetectedissueMitigationActionValueSet: {
    /**
     * _ActAdministrativeDetectedIssueManagementCode: Codes dealing with the management of Detected Issue observations for the administrative and patient administrative acts domains.
     */
    readonly ActAdministrativeDetectedIssueManagementCode: Coding;
    /**
     * _ActDetectedIssueManagementCode: Codes dealing with the management of Detected Issue observations
     */
    readonly ActDetectedIssueManagementCode: Coding;
    /**
     * _AuthorizationIssueManagementCode: Authorization Issue Management Code
     */
    readonly AuthorizationIssueManagementCode: Coding;
    /**
     * 1: Confirmed drug therapy appropriate
     */
    readonly TherapyAppropriate: Coding;
    /**
     * 10: Provided education or training to the patient on appropriate therapy use
     */
    readonly ProvidedPatientEducation: Coding;
    /**
     * 11: Instituted an additional therapy to mitigate potential negative effects
     */
    readonly AddedConcurrentTherapy: Coding;
    /**
     * 12: Suspended existing therapy that triggered interaction for the duration of this therapy
     */
    readonly TemporarilySuspendedConcurrentTherapy: Coding;
    /**
     * 13: Aborted existing therapy that triggered interaction.
     */
    readonly StoppedConcurrentTherapy: Coding;
    /**
     * 14: Confirmed supply action appropriate
     */
    readonly SupplyAppropriate: Coding;
    /**
     * 15: Patient's existing supply was lost/wasted
     */
    readonly Replacement: Coding;
    /**
     * 16: Supply date is due to patient vacation
     */
    readonly VacationSupply: Coding;
    /**
     * 17: Supply date is intended to carry patient over weekend
     */
    readonly WeekendSupply: Coding;
    /**
     * 18: Supply is intended for use during a leave of absence from an institution.
     */
    readonly LeaveOfAbsence: Coding;
    /**
     * 19: Consulted other supplier/pharmacy, therapy confirmed
     */
    readonly ConsultedSupplier: Coding;
    /**
     * 2: Assessed patient, therapy is appropriate
     */
    readonly AssessedPatient: Coding;
    /**
     * 20: Description: Supply is different than expected as an additional quantity has been supplied in a separate dispense.
     */
    readonly AdditionalQuantityOnSeparateDispense: Coding;
    /**
     * 21: Description: Indicates that the permissions have been externally verified and the request should be processed.
     */
    readonly AuthorizationConfirmed: Coding;
    /**
     * 22: Description: The patient has the appropriate indication or diagnosis for the action to be taken.
     */
    readonly AppropriateIndicationOrDiagnosis: Coding;
    /**
     * 23: Description: It has been confirmed that the appropriate pre-requisite therapy has been tried.
     */
    readonly PriorTherapyDocumented: Coding;
    /**
     * 3: Patient gave adequate explanation
     */
    readonly PatientExplanation: Coding;
    /**
     * 4: Consulted other supply source, therapy still appropriate
     */
    readonly ConsultedOtherSource: Coding;
    /**
     * 5: Consulted prescriber, therapy confirmed
     */
    readonly ConsultedPrescriber: Coding;
    /**
     * 6: Consulted prescriber and recommended change, prescriber declined
     */
    readonly PrescriberDeclinedChange: Coding;
    /**
     * 7: Concurrent therapy triggering alert is no longer on-going or planned
     */
    readonly InteractingTherapyNoLongerActivePlanned: Coding;
    /**
     * 8: Order is performed as issued, but other action taken to mitigate potential adverse effects
     */
    readonly OtherActionTaken: Coding;
    /**
     * 9: Arranged to monitor patient for adverse effects
     */
    readonly InstitutedOngoingMonitoringProgram: Coding;
    /**
     * EMAUTH: Used to temporarily override normal authorization rules to gain access to data in a case of emergency. Use of this override code will typically be monitored, and a procedure to verify its proper use may be triggered when used.
     */
    readonly EmergencyAuthorizationOverride: Coding;
};
/**
 * Kinds of mitigating actions and observations that can be associated with a detected issue or contraindication, such as 'added concurrent therapy', 'prior therapy documented', etc.
 */
export declare type DetectedissueMitigationActionValueSetType = typeof DetectedissueMitigationActionValueSet;
/**
 * Kinds of mitigating actions and observations that can be associated with a detected issue or contraindication, such as 'added concurrent therapy', 'prior therapy documented', etc.
 */
export declare enum DetectedissueMitigationActionValueSetEnum {
    /**
     * _ActAdministrativeDetectedIssueManagementCode: Codes dealing with the management of Detected Issue observations for the administrative and patient administrative acts domains.
     */
    ActAdministrativeDetectedIssueManagementCode = "_ActAdministrativeDetectedIssueManagementCode",
    /**
     * _ActDetectedIssueManagementCode: Codes dealing with the management of Detected Issue observations
     */
    ActDetectedIssueManagementCode = "_ActDetectedIssueManagementCode",
    /**
     * _AuthorizationIssueManagementCode: Authorization Issue Management Code
     */
    AuthorizationIssueManagementCode = "_AuthorizationIssueManagementCode",
    /**
     * 1: Confirmed drug therapy appropriate
     */
    TherapyAppropriate = "1",
    /**
     * 10: Provided education or training to the patient on appropriate therapy use
     */
    ProvidedPatientEducation = "10",
    /**
     * 11: Instituted an additional therapy to mitigate potential negative effects
     */
    AddedConcurrentTherapy = "11",
    /**
     * 12: Suspended existing therapy that triggered interaction for the duration of this therapy
     */
    TemporarilySuspendedConcurrentTherapy = "12",
    /**
     * 13: Aborted existing therapy that triggered interaction.
     */
    StoppedConcurrentTherapy = "13",
    /**
     * 14: Confirmed supply action appropriate
     */
    SupplyAppropriate = "14",
    /**
     * 15: Patient's existing supply was lost/wasted
     */
    Replacement = "15",
    /**
     * 16: Supply date is due to patient vacation
     */
    VacationSupply = "16",
    /**
     * 17: Supply date is intended to carry patient over weekend
     */
    WeekendSupply = "17",
    /**
     * 18: Supply is intended for use during a leave of absence from an institution.
     */
    LeaveOfAbsence = "18",
    /**
     * 19: Consulted other supplier/pharmacy, therapy confirmed
     */
    ConsultedSupplier = "19",
    /**
     * 2: Assessed patient, therapy is appropriate
     */
    AssessedPatient = "2",
    /**
     * 20: Description: Supply is different than expected as an additional quantity has been supplied in a separate dispense.
     */
    AdditionalQuantityOnSeparateDispense = "20",
    /**
     * 21: Description: Indicates that the permissions have been externally verified and the request should be processed.
     */
    AuthorizationConfirmed = "21",
    /**
     * 22: Description: The patient has the appropriate indication or diagnosis for the action to be taken.
     */
    AppropriateIndicationOrDiagnosis = "22",
    /**
     * 23: Description: It has been confirmed that the appropriate pre-requisite therapy has been tried.
     */
    PriorTherapyDocumented = "23",
    /**
     * 3: Patient gave adequate explanation
     */
    PatientExplanation = "3",
    /**
     * 4: Consulted other supply source, therapy still appropriate
     */
    ConsultedOtherSource = "4",
    /**
     * 5: Consulted prescriber, therapy confirmed
     */
    ConsultedPrescriber = "5",
    /**
     * 6: Consulted prescriber and recommended change, prescriber declined
     */
    PrescriberDeclinedChange = "6",
    /**
     * 7: Concurrent therapy triggering alert is no longer on-going or planned
     */
    InteractingTherapyNoLongerActivePlanned = "7",
    /**
     * 8: Order is performed as issued, but other action taken to mitigate potential adverse effects
     */
    OtherActionTaken = "8",
    /**
     * 9: Arranged to monitor patient for adverse effects
     */
    InstitutedOngoingMonitoringProgram = "9",
    /**
     * EMAUTH: Used to temporarily override normal authorization rules to gain access to data in a case of emergency. Use of this override code will typically be monitored, and a procedure to verify its proper use may be triggered when used.
     */
    EmergencyAuthorizationOverride = "EMAUTH"
}
//# sourceMappingURL=DetectedissueMitigationActionValueSet.d.ts.map