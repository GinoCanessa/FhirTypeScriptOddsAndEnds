import { Coding } from '../strictmodels';
/**
 * The impact of the content of a message.
 */
export declare const MessageSignificanceCategory: {
    /**
     * The message represents/requests a change that should not be processed more than once; e.g., making a booking for an appointment.
     */
    message_significance_category_Consequence: Coding;
    /**
     * The message represents a response to query for current information. Retrospective processing is wrong and/or wasteful.
     */
    message_significance_category_Currency: Coding;
    /**
     * The content is not necessarily intended to be current, and it can be reprocessed, though there may be version issues created by processing old notifications.
     */
    message_significance_category_Notification: Coding;
};
//# sourceMappingURL=MessageSignificanceCategory.d.ts.map