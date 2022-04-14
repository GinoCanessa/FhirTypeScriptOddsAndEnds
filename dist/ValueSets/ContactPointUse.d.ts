import { Coding } from '../strictmodels';
/**
 * Use of contact point.
 */
export declare const ContactPointUse: {
    /**
     * A communication contact point at a home; attempted contacts for business purposes might intrude privacy and chances are one will contact family or other household members instead of the person one wishes to call. Typically used with urgent cases, or if no other contacts are available.
     */
    contact_point_use_Home: Coding;
    /**
     * A telecommunication device that moves and stays with its owner. May have characteristics of all other use codes, suitable for urgent matters, not the first choice for routine business.
     */
    contact_point_use_Mobile: Coding;
    /**
     * This contact point is no longer in use (or was never correct, but retained for records).
     */
    contact_point_use_Old: Coding;
    /**
     * A temporary contact point. The period can provide more detailed information.
     */
    contact_point_use_Temp: Coding;
    /**
     * An office contact point. First choice for business related contacts during business hours.
     */
    contact_point_use_Work: Coding;
};
//# sourceMappingURL=ContactPointUse.d.ts.map