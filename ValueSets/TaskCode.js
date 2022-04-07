/**
 * Codes indicating the type of action that is expected to be performed
 */
export var TaskCode = {
    /**
     * Abort, cancel or withdraw the focal resource, as appropriate for the type of resource.
     */
    task_code_MarkTheFocalResourceAsNoLongerActive: {
        code: "abort",
        display: "Mark the focal resource as no longer active",
        system: "http://hl7.org/fhir/CodeSystem/task-code"
    },
    /**
     * Take what actions are needed to transition the focus resource from 'draft' to 'active' or 'in-progress', as appropriate for the resource type.  This may involve additing additional content, approval, validation, etc.
     */
    task_code_ActivateApproveTheFocalResource: {
        code: "approve",
        display: "Activate/approve the focal resource",
        system: "http://hl7.org/fhir/CodeSystem/task-code"
    },
    /**
     * Update the focal resource of the owning system to reflect the content specified as the Task.focus
     */
    task_code_ChangeTheFocalResource: {
        code: "change",
        display: "Change the focal resource",
        system: "http://hl7.org/fhir/CodeSystem/task-code"
    },
    /**
     * Act to perform the actions defined in the focus request.  This might result in a 'more assertive' request (order for a plan or proposal, filler order for a placer order), but is intend to eventually result in events.  The degree of fulfillment requested might be limited by Task.restriction.
     */
    task_code_FulfillTheFocalRequest: {
        code: "fulfill",
        display: "Fulfill the focal request",
        system: "http://hl7.org/fhir/CodeSystem/task-code"
    },
    /**
     * Replace the focal resource with the specified input resource
     */
    task_code_ReplaceTheFocalResourceWithTheInputResource: {
        code: "replace",
        display: "Replace the focal resource with the input resource",
        system: "http://hl7.org/fhir/CodeSystem/task-code"
    },
    /**
     * Transition the focal resource from 'suspended' to 'active' or 'in-progress' as appropriate for the resource type.
     */
    task_code_ReActivateTheFocalResource: {
        code: "resume",
        display: "Re-activate the focal resource",
        system: "http://hl7.org/fhir/CodeSystem/task-code"
    },
    /**
     * Transition the focal resource from 'active' or 'in-progress' to 'suspended'
     */
    task_code_SuspendTheFocalResource: {
        code: "suspend",
        display: "Suspend the focal resource",
        system: "http://hl7.org/fhir/CodeSystem/task-code"
    }
};