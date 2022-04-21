// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/task-code|4.0.1
import { Coding } from '../fhir.js';
/**
 * Codes indicating the type of action that is expected to be performed
 */
export const TaskCodeValueSet = {
    /**
     * abort: Abort, cancel or withdraw the focal resource, as appropriate for the type of resource.
     */
    MarkTheFocalResourceAsNoLongerActive: new Coding({
        display: "Mark the focal resource as no longer active",
        code: "abort",
        system: "http://hl7.org/fhir/CodeSystem/task-code",
    }),
    /**
     * approve: Take what actions are needed to transition the focus resource from 'draft' to 'active' or 'in-progress', as appropriate for the resource type.  This may involve additing additional content, approval, validation, etc.
     */
    ActivateApproveTheFocalResource: new Coding({
        display: "Activate/approve the focal resource",
        code: "approve",
        system: "http://hl7.org/fhir/CodeSystem/task-code",
    }),
    /**
     * change: Update the focal resource of the owning system to reflect the content specified as the Task.focus
     */
    ChangeTheFocalResource: new Coding({
        display: "Change the focal resource",
        code: "change",
        system: "http://hl7.org/fhir/CodeSystem/task-code",
    }),
    /**
     * fulfill: Act to perform the actions defined in the focus request.  This might result in a 'more assertive' request (order for a plan or proposal, filler order for a placer order), but is intend to eventually result in events.  The degree of fulfillment requested might be limited by Task.restriction.
     */
    FulfillTheFocalRequest: new Coding({
        display: "Fulfill the focal request",
        code: "fulfill",
        system: "http://hl7.org/fhir/CodeSystem/task-code",
    }),
    /**
     * replace: Replace the focal resource with the specified input resource
     */
    ReplaceTheFocalResourceWithTheInputResource: new Coding({
        display: "Replace the focal resource with the input resource",
        code: "replace",
        system: "http://hl7.org/fhir/CodeSystem/task-code",
    }),
    /**
     * resume: Transition the focal resource from 'suspended' to 'active' or 'in-progress' as appropriate for the resource type.
     */
    ReActivateTheFocalResource: new Coding({
        display: "Re-activate the focal resource",
        code: "resume",
        system: "http://hl7.org/fhir/CodeSystem/task-code",
    }),
    /**
     * suspend: Transition the focal resource from 'active' or 'in-progress' to 'suspended'
     */
    SuspendTheFocalResource: new Coding({
        display: "Suspend the focal resource",
        code: "suspend",
        system: "http://hl7.org/fhir/CodeSystem/task-code",
    }),
};
/**
 * Codes indicating the type of action that is expected to be performed
 */
export var TaskCodeValueSetEnum;
(function (TaskCodeValueSetEnum) {
    /**
     * abort: Abort, cancel or withdraw the focal resource, as appropriate for the type of resource.
     */
    TaskCodeValueSetEnum["MarkTheFocalResourceAsNoLongerActive"] = "abort";
    /**
     * approve: Take what actions are needed to transition the focus resource from 'draft' to 'active' or 'in-progress', as appropriate for the resource type.  This may involve additing additional content, approval, validation, etc.
     */
    TaskCodeValueSetEnum["ActivateApproveTheFocalResource"] = "approve";
    /**
     * change: Update the focal resource of the owning system to reflect the content specified as the Task.focus
     */
    TaskCodeValueSetEnum["ChangeTheFocalResource"] = "change";
    /**
     * fulfill: Act to perform the actions defined in the focus request.  This might result in a 'more assertive' request (order for a plan or proposal, filler order for a placer order), but is intend to eventually result in events.  The degree of fulfillment requested might be limited by Task.restriction.
     */
    TaskCodeValueSetEnum["FulfillTheFocalRequest"] = "fulfill";
    /**
     * replace: Replace the focal resource with the specified input resource
     */
    TaskCodeValueSetEnum["ReplaceTheFocalResourceWithTheInputResource"] = "replace";
    /**
     * resume: Transition the focal resource from 'suspended' to 'active' or 'in-progress' as appropriate for the resource type.
     */
    TaskCodeValueSetEnum["ReActivateTheFocalResource"] = "resume";
    /**
     * suspend: Transition the focal resource from 'active' or 'in-progress' to 'suspended'
     */
    TaskCodeValueSetEnum["SuspendTheFocalResource"] = "suspend";
})(TaskCodeValueSetEnum || (TaskCodeValueSetEnum = {}));
//# sourceMappingURL=TaskCodeValueSet.js.map