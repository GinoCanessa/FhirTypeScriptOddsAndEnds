"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionStatusEnum = exports.SubscriptionChannelTypeEnum = void 0;
/**
 * Code Values for the Subscription.channel.type field
 */
var SubscriptionChannelTypeEnum;
(function (SubscriptionChannelTypeEnum) {
    SubscriptionChannelTypeEnum["REST_HOOK"] = "rest-hook";
    SubscriptionChannelTypeEnum["WEBSOCKET"] = "websocket";
    SubscriptionChannelTypeEnum["EMAIL"] = "email";
    SubscriptionChannelTypeEnum["SMS"] = "sms";
    SubscriptionChannelTypeEnum["MESSAGE"] = "message";
})(SubscriptionChannelTypeEnum = exports.SubscriptionChannelTypeEnum || (exports.SubscriptionChannelTypeEnum = {}));
/**
 * Code Values for the Subscription.status field
 */
var SubscriptionStatusEnum;
(function (SubscriptionStatusEnum) {
    SubscriptionStatusEnum["REQUESTED"] = "requested";
    SubscriptionStatusEnum["ACTIVE"] = "active";
    SubscriptionStatusEnum["ERROR"] = "error";
    SubscriptionStatusEnum["OFF"] = "off";
})(SubscriptionStatusEnum = exports.SubscriptionStatusEnum || (exports.SubscriptionStatusEnum = {}));
//# sourceMappingURL=ISubscription.js.map