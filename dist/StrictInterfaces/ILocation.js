"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationStatusEnum = exports.LocationModeEnum = exports.LocationHoursOfOperationDaysOfWeekEnum = void 0;
/**
 * Code Values for the Location.hoursOfOperation.daysOfWeek field
 */
var LocationHoursOfOperationDaysOfWeekEnum;
(function (LocationHoursOfOperationDaysOfWeekEnum) {
    LocationHoursOfOperationDaysOfWeekEnum["MON"] = "mon";
    LocationHoursOfOperationDaysOfWeekEnum["TUE"] = "tue";
    LocationHoursOfOperationDaysOfWeekEnum["WED"] = "wed";
    LocationHoursOfOperationDaysOfWeekEnum["THU"] = "thu";
    LocationHoursOfOperationDaysOfWeekEnum["FRI"] = "fri";
    LocationHoursOfOperationDaysOfWeekEnum["SAT"] = "sat";
    LocationHoursOfOperationDaysOfWeekEnum["SUN"] = "sun";
})(LocationHoursOfOperationDaysOfWeekEnum = exports.LocationHoursOfOperationDaysOfWeekEnum || (exports.LocationHoursOfOperationDaysOfWeekEnum = {}));
/**
 * Code Values for the Location.mode field
 */
var LocationModeEnum;
(function (LocationModeEnum) {
    LocationModeEnum["INSTANCE"] = "instance";
    LocationModeEnum["KIND"] = "kind";
})(LocationModeEnum = exports.LocationModeEnum || (exports.LocationModeEnum = {}));
/**
 * Code Values for the Location.status field
 */
var LocationStatusEnum;
(function (LocationStatusEnum) {
    LocationStatusEnum["ACTIVE"] = "active";
    LocationStatusEnum["SUSPENDED"] = "suspended";
    LocationStatusEnum["INACTIVE"] = "inactive";
})(LocationStatusEnum = exports.LocationStatusEnum || (exports.LocationStatusEnum = {}));
//# sourceMappingURL=ILocation.js.map