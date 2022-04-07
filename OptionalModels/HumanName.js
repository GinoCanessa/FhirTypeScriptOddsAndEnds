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
 * A human's name with the ability to identify parts and usage.
 */
var HumanName = /** @class */ (function (_super) {
    __extends(HumanName, _super);
    /**
     * Default constructor for HumanName from an object that MAY NOT contain all required elements.
     */
    function HumanName(source) {
        var _this = _super.call(this, source) || this;
        if (source["family"] !== undefined) {
            _this.family = source.family;
        }
        if (source["_family"] !== undefined) {
            _this._family = new fhirModels.Element(source._family);
        }
        if (source["given"] !== undefined) {
            _this.given = source.given.map(function (x) { return (x); });
        }
        if (source["_given"] !== undefined) {
            _this._given = source._given.map(function (x) { return new fhirModels.Element(x); });
        }
        if (source["period"] !== undefined) {
            _this.period = new fhirModels.Period(source.period);
        }
        if (source["prefix"] !== undefined) {
            _this.prefix = source.prefix.map(function (x) { return (x); });
        }
        if (source["_prefix"] !== undefined) {
            _this._prefix = source._prefix.map(function (x) { return new fhirModels.Element(x); });
        }
        if (source["suffix"] !== undefined) {
            _this.suffix = source.suffix.map(function (x) { return (x); });
        }
        if (source["_suffix"] !== undefined) {
            _this._suffix = source._suffix.map(function (x) { return new fhirModels.Element(x); });
        }
        if (source["text"] !== undefined) {
            _this.text = source.text;
        }
        if (source["_text"] !== undefined) {
            _this._text = new fhirModels.Element(source._text);
        }
        if (source["use"] !== undefined) {
            _this.use = source.use;
        }
        if (source["_use"] !== undefined) {
            _this._use = new fhirModels.Element(source._use);
        }
        return _this;
    }
    /**
     * Factory function to create a HumanName from an object that MUST contain all required elements.
     */
    HumanName.CreateStrict = function (source) {
        var dest = new HumanName(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "HumanName is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current HumanName contains all required elements.
     */
    HumanName.prototype.checkRequiredElements = function () {
        var missingElements = [];
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    /**
     * Convert a HumanName into a displayable string
     */
    HumanName.prototype.toDisplay = function (familyFirst, includeAnnotations) {
        if (familyFirst === void 0) { familyFirst = true; }
        if (includeAnnotations === void 0) { includeAnnotations = false; }
        if ((this.text) && (this.text.length > 0)) {
            return this.text;
        }
        var val = '';
        if (familyFirst) {
            if (this.family) {
                val = this.family;
            }
            if (this.given) {
                val += (val.length > 0 ? ', ' : '') + this.given.join(' ');
            }
            if (includeAnnotations) {
                if (this.suffix) {
                    val += (val.length > 0 ? ', ' : '') + this.suffix.join(', ');
                }
                if (this.prefix) {
                    val += (val.length > 0 ? ', ' : '') + this.prefix.join(', ');
                }
            }
            return val;
        }
        if ((includeAnnotations) && (this.prefix)) {
            val += this.prefix.join(', ');
        }
        if (this.given) {
            val = (val.length > 0 ? ' ' : '') + this.given.join(' ');
        }
        if (this.family) {
            val += (val.length > 0 ? ' ' : '') + this.family;
        }
        if ((includeAnnotations) && (this.suffix)) {
            val += (val.length > 0 ? ', ' : '') + this.suffix.join(', ');
        }
        return val;
    };
    return HumanName;
}(fhirModels.Element));
export { HumanName };
/**
 * Code Values for the HumanName.use field
 */
export var HumanNameUseEnum;
(function (HumanNameUseEnum) {
    HumanNameUseEnum["USUAL"] = "usual";
    HumanNameUseEnum["OFFICIAL"] = "official";
    HumanNameUseEnum["TEMP"] = "temp";
    HumanNameUseEnum["NICKNAME"] = "nickname";
    HumanNameUseEnum["ANONYMOUS"] = "anonymous";
    HumanNameUseEnum["OLD"] = "old";
    HumanNameUseEnum["MAIDEN"] = "maiden";
})(HumanNameUseEnum || (HumanNameUseEnum = {}));
