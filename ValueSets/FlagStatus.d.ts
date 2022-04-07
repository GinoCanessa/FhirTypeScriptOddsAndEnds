import { Coding } from '../strictmodels';
/**
 * Indicates whether this flag is active and needs to be displayed to a user, or whether it is no longer needed or was entered in error.
 */
export declare const FlagStatus: {
    /**
     * A current flag that should be displayed to a user. A system may use the category to determine which user roles should view the flag.
     */
    flag_status_Active: Coding;
    /**
     * The flag was added in error and should no longer be displayed.
     */
    flag_status_EnteredInError: Coding;
    /**
     * The flag no longer needs to be displayed.
     */
    flag_status_Inactive: Coding;
};
//# sourceMappingURL=FlagStatus.d.ts.map