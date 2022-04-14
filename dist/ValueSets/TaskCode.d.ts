import { Coding } from '../strictmodels';
/**
 * Codes indicating the type of action that is expected to be performed
 */
export declare const TaskCode: {
    /**
     * Abort, cancel or withdraw the focal resource, as appropriate for the type of resource.
     */
    task_code_MarkTheFocalResourceAsNoLongerActive: Coding;
    /**
     * Take what actions are needed to transition the focus resource from 'draft' to 'active' or 'in-progress', as appropriate for the resource type.  This may involve additing additional content, approval, validation, etc.
     */
    task_code_ActivateApproveTheFocalResource: Coding;
    /**
     * Update the focal resource of the owning system to reflect the content specified as the Task.focus
     */
    task_code_ChangeTheFocalResource: Coding;
    /**
     * Act to perform the actions defined in the focus request.  This might result in a 'more assertive' request (order for a plan or proposal, filler order for a placer order), but is intend to eventually result in events.  The degree of fulfillment requested might be limited by Task.restriction.
     */
    task_code_FulfillTheFocalRequest: Coding;
    /**
     * Replace the focal resource with the specified input resource
     */
    task_code_ReplaceTheFocalResourceWithTheInputResource: Coding;
    /**
     * Transition the focal resource from 'suspended' to 'active' or 'in-progress' as appropriate for the resource type.
     */
    task_code_ReActivateTheFocalResource: Coding;
    /**
     * Transition the focal resource from 'active' or 'in-progress' to 'suspended'
     */
    task_code_SuspendTheFocalResource: Coding;
};
//# sourceMappingURL=TaskCode.d.ts.map