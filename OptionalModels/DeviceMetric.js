var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../optionalmodels';
/**
 * Describes the calibrations that have been performed or that are required to be performed.
 */
var DeviceMetricCalibration = /** @class */ (function (_super) {
    __extends(DeviceMetricCalibration, _super);
    /**
     * Default constructor for DeviceMetricCalibration from an object that MAY NOT contain all required elements.
     */
    function DeviceMetricCalibration(source) {
        var _this = _super.call(this, source) || this;
        if (source["state"] !== undefined) {
            _this.state = source.state;
        }
        if (source["_state"] !== undefined) {
            _this._state = new fhirModels.Element(source._state);
        }
        if (source["time"] !== undefined) {
            _this.time = source.time;
        }
        if (source["_time"] !== undefined) {
            _this._time = new fhirModels.Element(source._time);
        }
        if (source["type"] !== undefined) {
            _this.type = source.type;
        }
        if (source["_type"] !== undefined) {
            _this._type = new fhirModels.Element(source._type);
        }
        return _this;
    }
    /**
     * Factory function to create a DeviceMetricCalibration from an object that MUST contain all required elements.
     */
    DeviceMetricCalibration.CreateStrict = function (source) {
        var dest = new DeviceMetricCalibration(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "DeviceMetricCalibration is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current DeviceMetricCalibration contains all required elements.
     */
    DeviceMetricCalibration.prototype.checkRequiredElements = function () {
        var missingElements = [];
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return DeviceMetricCalibration;
}(fhirModels.BackboneElement));
export { DeviceMetricCalibration };
/**
 * Code Values for the DeviceMetric.calibration.state field
 */
export var DeviceMetricCalibrationStateEnum;
(function (DeviceMetricCalibrationStateEnum) {
    DeviceMetricCalibrationStateEnum["NOT_CALIBRATED"] = "not-calibrated";
    DeviceMetricCalibrationStateEnum["CALIBRATION_REQUIRED"] = "calibration-required";
    DeviceMetricCalibrationStateEnum["CALIBRATED"] = "calibrated";
    DeviceMetricCalibrationStateEnum["UNSPECIFIED"] = "unspecified";
})(DeviceMetricCalibrationStateEnum || (DeviceMetricCalibrationStateEnum = {}));
/**
 * Code Values for the DeviceMetric.calibration.type field
 */
export var DeviceMetricCalibrationTypeEnum;
(function (DeviceMetricCalibrationTypeEnum) {
    DeviceMetricCalibrationTypeEnum["UNSPECIFIED"] = "unspecified";
    DeviceMetricCalibrationTypeEnum["OFFSET"] = "offset";
    DeviceMetricCalibrationTypeEnum["GAIN"] = "gain";
    DeviceMetricCalibrationTypeEnum["TWO_POINT"] = "two-point";
})(DeviceMetricCalibrationTypeEnum || (DeviceMetricCalibrationTypeEnum = {}));
/**
 * Describes a measurement, calculation or setting capability of a medical device.
 */
var DeviceMetric = /** @class */ (function (_super) {
    __extends(DeviceMetric, _super);
    /**
     * Default constructor for DeviceMetric from an object that MAY NOT contain all required elements.
     */
    function DeviceMetric(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "DeviceMetric";
        if ((source['resourceType'] !== "DeviceMetric") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a DeviceMetric';
        }
        if (source["calibration"] !== undefined) {
            _this.calibration = source.calibration.map(function (x) { return new fhirModels.DeviceMetricCalibration(x); });
        }
        if (source["category"] !== undefined) {
            _this.category = source.category;
        }
        if (source["_category"] !== undefined) {
            _this._category = new fhirModels.Element(source._category);
        }
        if (source["color"] !== undefined) {
            _this.color = source.color;
        }
        if (source["_color"] !== undefined) {
            _this._color = new fhirModels.Element(source._color);
        }
        if (source["identifier"] !== undefined) {
            _this.identifier = source.identifier.map(function (x) { return new fhirModels.Identifier(x); });
        }
        if (source["measurementPeriod"] !== undefined) {
            _this.measurementPeriod = new fhirModels.Timing(source.measurementPeriod);
        }
        if (source["operationalStatus"] !== undefined) {
            _this.operationalStatus = source.operationalStatus;
        }
        if (source["_operationalStatus"] !== undefined) {
            _this._operationalStatus = new fhirModels.Element(source._operationalStatus);
        }
        if (source["parent"] !== undefined) {
            _this.parent = new fhirModels.Reference(source.parent);
        }
        if (source["source"] !== undefined) {
            _this.source = new fhirModels.Reference(source.source);
        }
        if (source["type"] !== undefined) {
            _this.type = new fhirModels.CodeableConcept(source.type);
        }
        if (source["unit"] !== undefined) {
            _this.unit = new fhirModels.CodeableConcept(source.unit);
        }
        return _this;
    }
    /**
     * Factory function to create a DeviceMetric from an object that MUST contain all required elements.
     */
    DeviceMetric.CreateStrict = function (source) {
        var dest = new DeviceMetric(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "DeviceMetric is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current DeviceMetric contains all required elements.
     */
    DeviceMetric.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["category"] === undefined) {
            missingElements.push("category");
        }
        if (this["type"] === undefined) {
            missingElements.push("type");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return DeviceMetric;
}(fhirModels.DomainResource));
export { DeviceMetric };
/**
 * Code Values for the DeviceMetric.category field
 */
export var DeviceMetricCategoryEnum;
(function (DeviceMetricCategoryEnum) {
    DeviceMetricCategoryEnum["MEASUREMENT"] = "measurement";
    DeviceMetricCategoryEnum["SETTING"] = "setting";
    DeviceMetricCategoryEnum["CALCULATION"] = "calculation";
    DeviceMetricCategoryEnum["UNSPECIFIED"] = "unspecified";
})(DeviceMetricCategoryEnum || (DeviceMetricCategoryEnum = {}));
/**
 * Code Values for the DeviceMetric.color field
 */
export var DeviceMetricColorEnum;
(function (DeviceMetricColorEnum) {
    DeviceMetricColorEnum["BLACK"] = "black";
    DeviceMetricColorEnum["RED"] = "red";
    DeviceMetricColorEnum["GREEN"] = "green";
    DeviceMetricColorEnum["YELLOW"] = "yellow";
    DeviceMetricColorEnum["BLUE"] = "blue";
    DeviceMetricColorEnum["MAGENTA"] = "magenta";
    DeviceMetricColorEnum["CYAN"] = "cyan";
    DeviceMetricColorEnum["WHITE"] = "white";
})(DeviceMetricColorEnum || (DeviceMetricColorEnum = {}));
/**
 * Code Values for the DeviceMetric.operationalStatus field
 */
export var DeviceMetricOperationalStatusEnum;
(function (DeviceMetricOperationalStatusEnum) {
    DeviceMetricOperationalStatusEnum["ON"] = "on";
    DeviceMetricOperationalStatusEnum["OFF"] = "off";
    DeviceMetricOperationalStatusEnum["STANDBY"] = "standby";
    DeviceMetricOperationalStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(DeviceMetricOperationalStatusEnum || (DeviceMetricOperationalStatusEnum = {}));
