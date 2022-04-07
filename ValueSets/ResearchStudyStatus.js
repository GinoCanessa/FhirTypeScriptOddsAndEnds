/**
 * Codes that convey the current status of the research study.
 */
export var ResearchStudyStatus = {
    /**
     * Study is opened for accrual.
     */
    research_study_status_Active: {
        code: "active",
        display: "Active",
        system: "http://hl7.org/fhir/research-study-status"
    },
    /**
     * Study is completed prematurely and will not resume; patients are no longer examined nor treated.
     */
    research_study_status_AdministrativelyCompleted: {
        code: "administratively-completed",
        display: "Administratively Completed",
        system: "http://hl7.org/fhir/research-study-status"
    },
    /**
     * Protocol is approved by the review board.
     */
    research_study_status_Approved: {
        code: "approved",
        display: "Approved",
        system: "http://hl7.org/fhir/research-study-status"
    },
    /**
     * Study is closed for accrual; patients can be examined and treated.
     */
    research_study_status_ClosedToAccrual: {
        code: "closed-to-accrual",
        display: "Closed to Accrual",
        system: "http://hl7.org/fhir/research-study-status"
    },
    /**
     * Study is closed to accrual and intervention, i.e. the study is closed to enrollment, all study subjects have completed treatment or intervention but are still being followed according to the primary objective of the study.
     */
    research_study_status_ClosedToAccrualAndIntervention: {
        code: "closed-to-accrual-and-intervention",
        display: "Closed to Accrual and Intervention",
        system: "http://hl7.org/fhir/research-study-status"
    },
    /**
     * Study is closed to accrual and intervention, i.e. the study is closed to enrollment, all study subjects have completed treatment
     * or intervention but are still being followed according to the primary objective of the study.
     */
    research_study_status_Completed: {
        code: "completed",
        display: "Completed",
        system: "http://hl7.org/fhir/research-study-status"
    },
    /**
     * Protocol was disapproved by the review board.
     */
    research_study_status_Disapproved: {
        code: "disapproved",
        display: "Disapproved",
        system: "http://hl7.org/fhir/research-study-status"
    },
    /**
     * Protocol is submitted to the review board for approval.
     */
    research_study_status_InReview: {
        code: "in-review",
        display: "In Review",
        system: "http://hl7.org/fhir/research-study-status"
    },
    /**
     * Study is temporarily closed for accrual; can be potentially resumed in the future; patients can be examined and treated.
     */
    research_study_status_TemporarilyClosedToAccrual: {
        code: "temporarily-closed-to-accrual",
        display: "Temporarily Closed to Accrual",
        system: "http://hl7.org/fhir/research-study-status"
    },
    /**
     * Study is temporarily closed for accrual and intervention and potentially can be resumed in the future.
     */
    research_study_status_TemporarilyClosedToAccrualAndIntervention: {
        code: "temporarily-closed-to-accrual-and-intervention",
        display: "Temporarily Closed to Accrual and Intervention",
        system: "http://hl7.org/fhir/research-study-status"
    },
    /**
     * Protocol was withdrawn by the lead organization.
     */
    research_study_status_Withdrawn: {
        code: "withdrawn",
        display: "Withdrawn",
        system: "http://hl7.org/fhir/research-study-status"
    }
};
