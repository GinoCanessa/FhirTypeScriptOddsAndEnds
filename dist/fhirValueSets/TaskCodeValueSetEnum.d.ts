/**
 * Codes indicating the type of action that is expected to be performed
 */
export declare enum TaskCodeValueSetEnum {
    /**
     * abort: Abort, cancel or withdraw the focal resource, as appropriate for the type of resource.
     */
    MarkTheFocalResourceAsNoLongerActive = "abort",
    /**
     * approve: Take what actions are needed to transition the focus resource from 'draft' to 'active' or 'in-progress', as appropriate for the resource type.  This may involve additing additional content, approval, validation, etc.
     */
    ActivateApproveTheFocalResource = "approve",
    /**
     * change: Update the focal resource of the owning system to reflect the content specified as the Task.focus
     */
    ChangeTheFocalResource = "change",
    /**
     * fulfill: Act to perform the actions defined in the focus request.  This might result in a 'more assertive' request (order for a plan or proposal, filler order for a placer order), but is intend to eventually result in events.  The degree of fulfillment requested might be limited by Task.restriction.
     */
    FulfillTheFocalRequest = "fulfill",
    /**
     * replace: Replace the focal resource with the specified input resource
     */
    ReplaceTheFocalResourceWithTheInputResource = "replace",
    /**
     * resume: Transition the focal resource from 'suspended' to 'active' or 'in-progress' as appropriate for the resource type.
     */
    ReActivateTheFocalResource = "resume",
    /**
     * suspend: Transition the focal resource from 'active' or 'in-progress' to 'suspended'
     */
    SuspendTheFocalResource = "suspend"
}
//# sourceMappingURL=TaskCodeValueSetEnum.d.ts.map