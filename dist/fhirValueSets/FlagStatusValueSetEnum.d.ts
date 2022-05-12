/**
 * Indicates whether this flag is active and needs to be displayed to a user, or whether it is no longer needed or was entered in error.
 */
export declare enum FlagStatusValueSetEnum {
    /**
     * active: A current flag that should be displayed to a user. A system may use the category to determine which user roles should view the flag.
     */
    Active = "active",
    /**
     * entered-in-error: The flag was added in error and should no longer be displayed.
     */
    EnteredInError = "entered-in-error",
    /**
     * inactive: The flag no longer needs to be displayed.
     */
    Inactive = "inactive"
}
//# sourceMappingURL=FlagStatusValueSetEnum.d.ts.map