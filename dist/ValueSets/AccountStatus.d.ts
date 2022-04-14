import { Coding } from '../strictmodels';
/**
 * Indicates whether the account is available to be used.
 */
export declare const AccountStatus: {
    /**
     * This account is active and may be used.
     */
    account_status_Active: Coding;
    /**
     * This instance should not have been part of this patient's medical record.
     */
    account_status_EnteredInError: Coding;
    /**
     * This account is inactive and should not be used to track financial information.
     */
    account_status_Inactive: Coding;
    /**
     * This account is on hold.
     */
    account_status_OnHold: Coding;
    /**
     * The account status is unknown.
     */
    account_status_Unknown: Coding;
};
//# sourceMappingURL=AccountStatus.d.ts.map