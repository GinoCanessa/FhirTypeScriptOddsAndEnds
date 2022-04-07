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
import * as fhirModels from '../strictmodels';
/**
 * The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the practitioner.  For example, a medical license issued by a medical board authorizing the practitioner to practice medicine within a certian locality.
 */
var PractitionerQualification = /** @class */ (function (_super) {
    __extends(PractitionerQualification, _super);
    /**
     * Default constructor for PractitionerQualification from an object that MAY NOT contain all required elements.
     */
    function PractitionerQualification(source) {
        var _this = _super.call(this, source) || this;
        {
            _this.code = new fhirModels.CodeableConcept(source.code);
        }
        if (source["identifier"] !== undefined) {
            _this.identifier = source.identifier.map(function (x) { return new fhirModels.Identifier(x); });
        }
        if (source["issuer"] !== undefined) {
            _this.issuer = new fhirModels.Reference(source.issuer);
        }
        if (source["period"] !== undefined) {
            _this.period = new fhirModels.Period(source.period);
        }
        return _this;
    }
    return PractitionerQualification;
}(fhirModels.BackboneElement));
export { PractitionerQualification };
/**
 * A person who is directly or indirectly involved in the provisioning of healthcare.
 */
var Practitioner = /** @class */ (function (_super) {
    __extends(Practitioner, _super);
    /**
     * Default constructor for Practitioner from an object that MAY NOT contain all required elements.
     */
    function Practitioner(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "Practitioner";
        if ((source['resourceType'] !== "Practitioner") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a Practitioner';
        }
        if (source["active"] !== undefined) {
            _this.active = source.active;
        }
        if (source["_active"] !== undefined) {
            _this._active = new fhirModels.Element(source._active);
        }
        if (source["address"] !== undefined) {
            _this.address = source.address.map(function (x) { return new fhirModels.Address(x); });
        }
        if (source["birthDate"] !== undefined) {
            _this.birthDate = source.birthDate;
        }
        if (source["_birthDate"] !== undefined) {
            _this._birthDate = new fhirModels.Element(source._birthDate);
        }
        if (source["communication"] !== undefined) {
            _this.communication = source.communication.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["gender"] !== undefined) {
            _this.gender = source.gender;
        }
        if (source["_gender"] !== undefined) {
            _this._gender = new fhirModels.Element(source._gender);
        }
        if (source["identifier"] !== undefined) {
            _this.identifier = source.identifier.map(function (x) { return new fhirModels.Identifier(x); });
        }
        if (source["name"] !== undefined) {
            _this.name = source.name.map(function (x) { return new fhirModels.HumanName(x); });
        }
        if (source["photo"] !== undefined) {
            _this.photo = source.photo.map(function (x) { return new fhirModels.Attachment(x); });
        }
        if (source["qualification"] !== undefined) {
            _this.qualification = source.qualification.map(function (x) { return new fhirModels.PractitionerQualification(x); });
        }
        if (source["telecom"] !== undefined) {
            _this.telecom = source.telecom.map(function (x) { return new fhirModels.ContactPoint(x); });
        }
        return _this;
    }
    return Practitioner;
}(fhirModels.DomainResource));
export { Practitioner };
/**
 * Code Values for the Practitioner.gender field
 */
export var PractitionerGenderEnum;
(function (PractitionerGenderEnum) {
    PractitionerGenderEnum["MALE"] = "male";
    PractitionerGenderEnum["FEMALE"] = "female";
    PractitionerGenderEnum["OTHER"] = "other";
    PractitionerGenderEnum["UNKNOWN"] = "unknown";
})(PractitionerGenderEnum || (PractitionerGenderEnum = {}));
