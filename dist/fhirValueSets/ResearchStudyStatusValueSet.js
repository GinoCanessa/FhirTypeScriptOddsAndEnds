// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/research-study-status|4.0.1
import { Coding } from '../fhir.js';
/**
 * Codes that convey the current status of the research study.
 */
export const ResearchStudyStatusValueSet = {
    /**
     * active: Study is opened for accrual.
     */
    Active: new Coding({
        display: "Active",
        code: "active",
        system: "http://hl7.org/fhir/research-study-status",
    }),
    /**
     * administratively-completed: Study is completed prematurely and will not resume; patients are no longer examined nor treated.
     */
    AdministrativelyCompleted: new Coding({
        display: "Administratively Completed",
        code: "administratively-completed",
        system: "http://hl7.org/fhir/research-study-status",
    }),
    /**
     * approved: Protocol is approved by the review board.
     */
    Approved: new Coding({
        display: "Approved",
        code: "approved",
        system: "http://hl7.org/fhir/research-study-status",
    }),
    /**
     * closed-to-accrual: Study is closed for accrual; patients can be examined and treated.
     */
    ClosedToAccrual: new Coding({
        display: "Closed to Accrual",
        code: "closed-to-accrual",
        system: "http://hl7.org/fhir/research-study-status",
    }),
    /**
     * closed-to-accrual-and-intervention: Study is closed to accrual and intervention, i.e. the study is closed to enrollment, all study subjects have completed treatment or intervention but are still being followed according to the primary objective of the study.
     */
    ClosedToAccrualAndIntervention: new Coding({
        display: "Closed to Accrual and Intervention",
        code: "closed-to-accrual-and-intervention",
        system: "http://hl7.org/fhir/research-study-status",
    }),
    /**
     * completed: Study is closed to accrual and intervention, i.e. the study is closed to enrollment, all study subjects have completed treatment
     * or intervention but are still being followed according to the primary objective of the study.
     */
    Completed: new Coding({
        display: "Completed",
        code: "completed",
        system: "http://hl7.org/fhir/research-study-status",
    }),
    /**
     * disapproved: Protocol was disapproved by the review board.
     */
    Disapproved: new Coding({
        display: "Disapproved",
        code: "disapproved",
        system: "http://hl7.org/fhir/research-study-status",
    }),
    /**
     * in-review: Protocol is submitted to the review board for approval.
     */
    InReview: new Coding({
        display: "In Review",
        code: "in-review",
        system: "http://hl7.org/fhir/research-study-status",
    }),
    /**
     * temporarily-closed-to-accrual: Study is temporarily closed for accrual; can be potentially resumed in the future; patients can be examined and treated.
     */
    TemporarilyClosedToAccrual: new Coding({
        display: "Temporarily Closed to Accrual",
        code: "temporarily-closed-to-accrual",
        system: "http://hl7.org/fhir/research-study-status",
    }),
    /**
     * temporarily-closed-to-accrual-and-intervention: Study is temporarily closed for accrual and intervention and potentially can be resumed in the future.
     */
    TemporarilyClosedToAccrualAndIntervention: new Coding({
        display: "Temporarily Closed to Accrual and Intervention",
        code: "temporarily-closed-to-accrual-and-intervention",
        system: "http://hl7.org/fhir/research-study-status",
    }),
    /**
     * withdrawn: Protocol was withdrawn by the lead organization.
     */
    Withdrawn: new Coding({
        display: "Withdrawn",
        code: "withdrawn",
        system: "http://hl7.org/fhir/research-study-status",
    }),
};
/**
 * Codes that convey the current status of the research study.
 */
export var ResearchStudyStatusValueSetEnum;
(function (ResearchStudyStatusValueSetEnum) {
    /**
     * active: Study is opened for accrual.
     */
    ResearchStudyStatusValueSetEnum["Active"] = "active";
    /**
     * administratively-completed: Study is completed prematurely and will not resume; patients are no longer examined nor treated.
     */
    ResearchStudyStatusValueSetEnum["AdministrativelyCompleted"] = "administratively-completed";
    /**
     * approved: Protocol is approved by the review board.
     */
    ResearchStudyStatusValueSetEnum["Approved"] = "approved";
    /**
     * closed-to-accrual: Study is closed for accrual; patients can be examined and treated.
     */
    ResearchStudyStatusValueSetEnum["ClosedToAccrual"] = "closed-to-accrual";
    /**
     * closed-to-accrual-and-intervention: Study is closed to accrual and intervention, i.e. the study is closed to enrollment, all study subjects have completed treatment or intervention but are still being followed according to the primary objective of the study.
     */
    ResearchStudyStatusValueSetEnum["ClosedToAccrualAndIntervention"] = "closed-to-accrual-and-intervention";
    /**
     * completed: Study is closed to accrual and intervention, i.e. the study is closed to enrollment, all study subjects have completed treatment
     * or intervention but are still being followed according to the primary objective of the study.
     */
    ResearchStudyStatusValueSetEnum["Completed"] = "completed";
    /**
     * disapproved: Protocol was disapproved by the review board.
     */
    ResearchStudyStatusValueSetEnum["Disapproved"] = "disapproved";
    /**
     * in-review: Protocol is submitted to the review board for approval.
     */
    ResearchStudyStatusValueSetEnum["InReview"] = "in-review";
    /**
     * temporarily-closed-to-accrual: Study is temporarily closed for accrual; can be potentially resumed in the future; patients can be examined and treated.
     */
    ResearchStudyStatusValueSetEnum["TemporarilyClosedToAccrual"] = "temporarily-closed-to-accrual";
    /**
     * temporarily-closed-to-accrual-and-intervention: Study is temporarily closed for accrual and intervention and potentially can be resumed in the future.
     */
    ResearchStudyStatusValueSetEnum["TemporarilyClosedToAccrualAndIntervention"] = "temporarily-closed-to-accrual-and-intervention";
    /**
     * withdrawn: Protocol was withdrawn by the lead organization.
     */
    ResearchStudyStatusValueSetEnum["Withdrawn"] = "withdrawn";
})(ResearchStudyStatusValueSetEnum || (ResearchStudyStatusValueSetEnum = {}));
//# sourceMappingURL=ResearchStudyStatusValueSet.js.map