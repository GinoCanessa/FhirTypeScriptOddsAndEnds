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
// Restricted to: Patient|Encounter|Observation
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.
 */
var ContactPoint = /** @class */ (function (_super) {
    __extends(ContactPoint, _super);
    /**
     * Default constructor for ContactPoint - initializes required elements to null.
     */
    function ContactPoint() {
        return _super.call(this) || this;
    }
    /**
     * Factory function to create a ContactPoint from an object that MAY NOT contain all required elements.
     */
    ContactPoint.FactoryCreate = function (source) {
        var dest = _super.FactoryCreate.call(this, source);
        if (source["period"] !== undefined) {
            dest.period = fhir.Period.FactoryCreate(source.period);
        }
        if (source["rank"] !== undefined) {
            dest.rank = source.rank;
        }
        if (source["_rank"] !== undefined) {
            dest._rank = fhir.FhirElement.FactoryCreate(source._rank);
        }
        if (source["system"] !== undefined) {
            dest.system = source.system;
        }
        if (source["_system"] !== undefined) {
            dest._system = fhir.FhirElement.FactoryCreate(source._system);
        }
        if (source["use"] !== undefined) {
            dest.use = source.use;
        }
        if (source["_use"] !== undefined) {
            dest._use = fhir.FhirElement.FactoryCreate(source._use);
        }
        if (source["value"] !== undefined) {
            dest.value = source.value;
        }
        if (source["_value"] !== undefined) {
            dest._value = fhir.FhirElement.FactoryCreate(source._value);
        }
        return dest;
    };
    /**
     * Check if the current ContactPoint contains all required elements.
     */
    ContactPoint.prototype.checkRequiredElements = function () {
        var missingElements = [];
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    /**
     * Factory function to create a ContactPoint from an object that MUST contain all required elements.
     */
    ContactPoint.FactoryCreateStrict = function (source) {
        var dest = this.FactoryCreate(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "ContactPoint is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    return ContactPoint;
}(fhir.FhirElement));
export { ContactPoint };
/**
 * Code Values for the ContactPoint.system field
 */
export var ContactPointSystemEnum;
(function (ContactPointSystemEnum) {
    ContactPointSystemEnum["PHONE"] = "phone";
    ContactPointSystemEnum["FAX"] = "fax";
    ContactPointSystemEnum["EMAIL"] = "email";
    ContactPointSystemEnum["PAGER"] = "pager";
    ContactPointSystemEnum["URL"] = "url";
    ContactPointSystemEnum["SMS"] = "sms";
    ContactPointSystemEnum["OTHER"] = "other";
})(ContactPointSystemEnum || (ContactPointSystemEnum = {}));
/**
 * Code Values for the ContactPoint.use field
 */
export var ContactPointUseEnum;
(function (ContactPointUseEnum) {
    ContactPointUseEnum["HOME"] = "home";
    ContactPointUseEnum["WORK"] = "work";
    ContactPointUseEnum["TEMP"] = "temp";
    ContactPointUseEnum["OLD"] = "old";
    ContactPointUseEnum["MOBILE"] = "mobile";
})(ContactPointUseEnum || (ContactPointUseEnum = {}));
//# sourceMappingURL=ContactPoint.js.map