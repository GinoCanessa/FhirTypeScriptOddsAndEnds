/**
 * Kinds of mitigating actions and observations that can be associated with a detected issue or contraindication, such as 'added concurrent therapy', 'prior therapy documented', etc.
 */
export var DetectedissueMitigationAction = {
    /**
     * Codes dealing with the management of Detected Issue observations for the administrative and patient administrative acts domains.
     */
    v3_ActCode_ActAdministrativeDetectedIssueManagementCode: {
        code: "_ActAdministrativeDetectedIssueManagementCode",
        display: "ActAdministrativeDetectedIssueManagementCode",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Codes dealing with the management of Detected Issue observations
     */
    v3_ActCode_ActDetectedIssueManagementCode: {
        code: "_ActDetectedIssueManagementCode",
        display: "ActDetectedIssueManagementCode",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Authorization Issue Management Code
     */
    v3_ActCode_AuthorizationIssueManagementCode: {
        code: "_AuthorizationIssueManagementCode",
        display: "Authorization Issue Management Code",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Confirmed drug therapy appropriate
     */
    v3_ActCode_TherapyAppropriate: {
        code: "1",
        display: "Therapy Appropriate",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Provided education or training to the patient on appropriate therapy use
     */
    v3_ActCode_ProvidedPatientEducation: {
        code: "10",
        display: "Provided Patient Education",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Instituted an additional therapy to mitigate potential negative effects
     */
    v3_ActCode_AddedConcurrentTherapy: {
        code: "11",
        display: "Added Concurrent Therapy",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Suspended existing therapy that triggered interaction for the duration of this therapy
     */
    v3_ActCode_TemporarilySuspendedConcurrentTherapy: {
        code: "12",
        display: "Temporarily Suspended Concurrent Therapy",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Aborted existing therapy that triggered interaction.
     */
    v3_ActCode_StoppedConcurrentTherapy: {
        code: "13",
        display: "Stopped Concurrent Therapy",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Confirmed supply action appropriate
     */
    v3_ActCode_SupplyAppropriate: {
        code: "14",
        display: "Supply Appropriate",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Patient's existing supply was lost/wasted
     */
    v3_ActCode_Replacement: {
        code: "15",
        display: "Replacement",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Supply date is due to patient vacation
     */
    v3_ActCode_VacationSupply: {
        code: "16",
        display: "Vacation Supply",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Supply date is intended to carry patient over weekend
     */
    v3_ActCode_WeekendSupply: {
        code: "17",
        display: "Weekend Supply",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Supply is intended for use during a leave of absence from an institution.
     */
    v3_ActCode_LeaveOfAbsence: {
        code: "18",
        display: "Leave of Absence",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Consulted other supplier/pharmacy, therapy confirmed
     */
    v3_ActCode_ConsultedSupplier: {
        code: "19",
        display: "Consulted Supplier",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Assessed patient, therapy is appropriate
     */
    v3_ActCode_AssessedPatient: {
        code: "2",
        display: "Assessed Patient",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Description: Supply is different than expected as an additional quantity has been supplied in a separate dispense.
     */
    v3_ActCode_AdditionalQuantityOnSeparateDispense: {
        code: "20",
        display: "additional quantity on separate dispense",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Description: Indicates that the permissions have been externally verified and the request should be processed.
     */
    v3_ActCode_AuthorizationConfirmed: {
        code: "21",
        display: "authorization confirmed",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Description: The patient has the appropriate indication or diagnosis for the action to be taken.
     */
    v3_ActCode_AppropriateIndicationOrDiagnosis: {
        code: "22",
        display: "appropriate indication or diagnosis",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Description: It has been confirmed that the appropriate pre-requisite therapy has been tried.
     */
    v3_ActCode_PriorTherapyDocumented: {
        code: "23",
        display: "prior therapy documented",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Patient gave adequate explanation
     */
    v3_ActCode_PatientExplanation: {
        code: "3",
        display: "Patient Explanation",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Consulted other supply source, therapy still appropriate
     */
    v3_ActCode_ConsultedOtherSource: {
        code: "4",
        display: "Consulted Other Source",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Consulted prescriber, therapy confirmed
     */
    v3_ActCode_ConsultedPrescriber: {
        code: "5",
        display: "Consulted Prescriber",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Consulted prescriber and recommended change, prescriber declined
     */
    v3_ActCode_PrescriberDeclinedChange: {
        code: "6",
        display: "Prescriber Declined Change",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Concurrent therapy triggering alert is no longer on-going or planned
     */
    v3_ActCode_InteractingTherapyNoLongerActivePlanned: {
        code: "7",
        display: "Interacting Therapy No Longer Active/Planned",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Order is performed as issued, but other action taken to mitigate potential adverse effects
     */
    v3_ActCode_OtherActionTaken: {
        code: "8",
        display: "Other Action Taken",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Arranged to monitor patient for adverse effects
     */
    v3_ActCode_InstitutedOngoingMonitoringProgram: {
        code: "9",
        display: "Instituted Ongoing Monitoring Program",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Used to temporarily override normal authorization rules to gain access to data in a case of emergency. Use of this override code will typically be monitored, and a procedure to verify its proper use may be triggered when used.
     */
    v3_ActCode_EmergencyAuthorizationOverride: {
        code: "EMAUTH",
        display: "emergency authorization override",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    }
};