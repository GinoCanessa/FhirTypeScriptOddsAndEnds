// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://hl7.org/fhir/ValueSet/subscription-status|4.0.1
/**
 * The status of a subscription.
 */
export var SubscriptionStatusValueSetEnum;
(function (SubscriptionStatusValueSetEnum) {
    /**
     * active: The subscription is active.
     */
    SubscriptionStatusValueSetEnum["Active"] = "active";
    /**
     * error: The server has an error executing the notification.
     */
    SubscriptionStatusValueSetEnum["Error"] = "error";
    /**
     * off: Too many errors have occurred or the subscription has expired.
     */
    SubscriptionStatusValueSetEnum["Off"] = "off";
    /**
     * requested: The client has requested the subscription, and the server has not yet set it up.
     */
    SubscriptionStatusValueSetEnum["Requested"] = "requested";
})(SubscriptionStatusValueSetEnum || (SubscriptionStatusValueSetEnum = {}));
//# sourceMappingURL=SubscriptionStatusValueSetEnum.js.map