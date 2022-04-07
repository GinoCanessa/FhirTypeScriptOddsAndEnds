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
 * A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element.
 */
var TriggerDefinition = /** @class */ (function (_super) {
    __extends(TriggerDefinition, _super);
    /**
     * Default constructor for TriggerDefinition from an object that MAY NOT contain all required elements.
     */
    function TriggerDefinition(source) {
        var _this = _super.call(this, source) || this;
        if (source["condition"] !== undefined) {
            _this.condition = new fhirModels.Expression(source.condition);
        }
        if (source["data"] !== undefined) {
            _this.data = source.data.map(function (x) { return new fhirModels.DataRequirement(x); });
        }
        if (source["name"] !== undefined) {
            _this.name = source.name;
        }
        if (source["_name"] !== undefined) {
            _this._name = new fhirModels.Element(source._name);
        }
        if (source["timingTiming"] !== undefined) {
            _this.timingTiming = new fhirModels.Timing(source.timingTiming);
        }
        if (source["timingReference"] !== undefined) {
            _this.timingReference = new fhirModels.Reference(source.timingReference);
        }
        if (source["timingDate"] !== undefined) {
            _this.timingDate = source.timingDate;
        }
        if (source["_timingDate"] !== undefined) {
            _this._timingDate = new fhirModels.Element(source._timingDate);
        }
        if (source["timingDateTime"] !== undefined) {
            _this.timingDateTime = source.timingDateTime;
        }
        if (source["_timingDateTime"] !== undefined) {
            _this._timingDateTime = new fhirModels.Element(source._timingDateTime);
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
     * Factory function to create a TriggerDefinition from an object that MUST contain all required elements.
     */
    TriggerDefinition.CreateStrict = function (source) {
        var dest = new TriggerDefinition(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "TriggerDefinition is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current TriggerDefinition contains all required elements.
     */
    TriggerDefinition.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["type"] === undefined) {
            missingElements.push("type");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return TriggerDefinition;
}(fhirModels.Element));
export { TriggerDefinition };
/**
 * Code Values for the TriggerDefinition.type field
 */
export var TriggerDefinitionTypeEnum;
(function (TriggerDefinitionTypeEnum) {
    TriggerDefinitionTypeEnum["NAMED_EVENT"] = "named-event";
    TriggerDefinitionTypeEnum["PERIODIC"] = "periodic";
    TriggerDefinitionTypeEnum["DATA_CHANGED"] = "data-changed";
    TriggerDefinitionTypeEnum["DATA_ADDED"] = "data-added";
    TriggerDefinitionTypeEnum["DATA_MODIFIED"] = "data-modified";
    TriggerDefinitionTypeEnum["DATA_REMOVED"] = "data-removed";
    TriggerDefinitionTypeEnum["DATA_ACCESSED"] = "data-accessed";
    TriggerDefinitionTypeEnum["DATA_ACCESS_ENDED"] = "data-access-ended";
})(TriggerDefinitionTypeEnum || (TriggerDefinitionTypeEnum = {}));