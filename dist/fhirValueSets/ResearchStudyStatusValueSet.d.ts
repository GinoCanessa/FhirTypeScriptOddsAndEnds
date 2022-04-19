import { Coding } from '../fhir';
/**
 * Codes that convey the current status of the research study.
 */
export declare const ResearchStudyStatusValueSet: {
    /**
     * Study is opened for accrual.
     */
    research_study_status_Active: Coding;
    /**
     * Study is completed prematurely and will not resume; patients are no longer examined nor treated.
     */
    research_study_status_AdministrativelyCompleted: Coding;
    /**
     * Protocol is approved by the review board.
     */
    research_study_status_Approved: Coding;
    /**
     * Study is closed for accrual; patients can be examined and treated.
     */
    research_study_status_ClosedToAccrual: Coding;
    /**
     * Study is closed to accrual and intervention, i.e. the study is closed to enrollment, all study subjects have completed treatment or intervention but are still being followed according to the primary objective of the study.
     */
    research_study_status_ClosedToAccrualAndIntervention: Coding;
    /**
     * Study is closed to accrual and intervention, i.e. the study is closed to enrollment, all study subjects have completed treatment
     * or intervention but are still being followed according to the primary objective of the study.
     */
    research_study_status_Completed: Coding;
    /**
     * Protocol was disapproved by the review board.
     */
    research_study_status_Disapproved: Coding;
    /**
     * Protocol is submitted to the review board for approval.
     */
    research_study_status_InReview: Coding;
    /**
     * Study is temporarily closed for accrual; can be potentially resumed in the future; patients can be examined and treated.
     */
    research_study_status_TemporarilyClosedToAccrual: Coding;
    /**
     * Study is temporarily closed for accrual and intervention and potentially can be resumed in the future.
     */
    research_study_status_TemporarilyClosedToAccrualAndIntervention: Coding;
    /**
     * Protocol was withdrawn by the lead organization.
     */
    research_study_status_Withdrawn: Coding;
};
//# sourceMappingURL=ResearchStudyStatusValueSet.d.ts.map