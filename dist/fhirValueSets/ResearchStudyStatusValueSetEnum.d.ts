/**
 * Codes that convey the current status of the research study.
 */
export declare enum ResearchStudyStatusValueSetEnum {
    /**
     * active: Study is opened for accrual.
     */
    Active = "active",
    /**
     * administratively-completed: Study is completed prematurely and will not resume; patients are no longer examined nor treated.
     */
    AdministrativelyCompleted = "administratively-completed",
    /**
     * approved: Protocol is approved by the review board.
     */
    Approved = "approved",
    /**
     * closed-to-accrual: Study is closed for accrual; patients can be examined and treated.
     */
    ClosedToAccrual = "closed-to-accrual",
    /**
     * closed-to-accrual-and-intervention: Study is closed to accrual and intervention, i.e. the study is closed to enrollment, all study subjects have completed treatment or intervention but are still being followed according to the primary objective of the study.
     */
    ClosedToAccrualAndIntervention = "closed-to-accrual-and-intervention",
    /**
     * completed: Study is closed to accrual and intervention, i.e. the study is closed to enrollment, all study subjects have completed treatment
     * or intervention but are still being followed according to the primary objective of the study.
     */
    Completed = "completed",
    /**
     * disapproved: Protocol was disapproved by the review board.
     */
    Disapproved = "disapproved",
    /**
     * in-review: Protocol is submitted to the review board for approval.
     */
    InReview = "in-review",
    /**
     * temporarily-closed-to-accrual: Study is temporarily closed for accrual; can be potentially resumed in the future; patients can be examined and treated.
     */
    TemporarilyClosedToAccrual = "temporarily-closed-to-accrual",
    /**
     * temporarily-closed-to-accrual-and-intervention: Study is temporarily closed for accrual and intervention and potentially can be resumed in the future.
     */
    TemporarilyClosedToAccrualAndIntervention = "temporarily-closed-to-accrual-and-intervention",
    /**
     * withdrawn: Protocol was withdrawn by the lead organization.
     */
    Withdrawn = "withdrawn"
}
//# sourceMappingURL=ResearchStudyStatusValueSetEnum.d.ts.map