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
 * Allows for adjustment on two axis.
 */
var VisionPrescriptionLensSpecificationPrism = /** @class */ (function (_super) {
    __extends(VisionPrescriptionLensSpecificationPrism, _super);
    /**
     * Default constructor for VisionPrescriptionLensSpecificationPrism from an object that MAY NOT contain all required elements.
     */
    function VisionPrescriptionLensSpecificationPrism(source) {
        var _this = _super.call(this, source) || this;
        {
            _this.amount = source.amount;
        }
        if (source["_amount"] !== undefined) {
            _this._amount = new fhirModels.Element(source._amount);
        }
        {
            _this.base = source.base;
        }
        if (source["_base"] !== undefined) {
            _this._base = new fhirModels.Element(source._base);
        }
        return _this;
    }
    return VisionPrescriptionLensSpecificationPrism;
}(fhirModels.BackboneElement));
export { VisionPrescriptionLensSpecificationPrism };
/**
 * Code Values for the VisionPrescription.lensSpecification.prism.base field
 */
export var VisionPrescriptionLensSpecificationPrismBaseEnum;
(function (VisionPrescriptionLensSpecificationPrismBaseEnum) {
    VisionPrescriptionLensSpecificationPrismBaseEnum["UP"] = "up";
    VisionPrescriptionLensSpecificationPrismBaseEnum["DOWN"] = "down";
    VisionPrescriptionLensSpecificationPrismBaseEnum["IN"] = "in";
    VisionPrescriptionLensSpecificationPrismBaseEnum["OUT"] = "out";
})(VisionPrescriptionLensSpecificationPrismBaseEnum || (VisionPrescriptionLensSpecificationPrismBaseEnum = {}));
/**
 * Contain the details of  the individual lens specifications and serves as the authorization for the fullfillment by certified professionals.
 */
var VisionPrescriptionLensSpecification = /** @class */ (function (_super) {
    __extends(VisionPrescriptionLensSpecification, _super);
    /**
     * Default constructor for VisionPrescriptionLensSpecification from an object that MAY NOT contain all required elements.
     */
    function VisionPrescriptionLensSpecification(source) {
        var _this = _super.call(this, source) || this;
        if (source["add"] !== undefined) {
            _this.add = source.add;
        }
        if (source["_add"] !== undefined) {
            _this._add = new fhirModels.Element(source._add);
        }
        if (source["axis"] !== undefined) {
            _this.axis = source.axis;
        }
        if (source["_axis"] !== undefined) {
            _this._axis = new fhirModels.Element(source._axis);
        }
        if (source["backCurve"] !== undefined) {
            _this.backCurve = source.backCurve;
        }
        if (source["_backCurve"] !== undefined) {
            _this._backCurve = new fhirModels.Element(source._backCurve);
        }
        if (source["brand"] !== undefined) {
            _this.brand = source.brand;
        }
        if (source["_brand"] !== undefined) {
            _this._brand = new fhirModels.Element(source._brand);
        }
        if (source["color"] !== undefined) {
            _this.color = source.color;
        }
        if (source["_color"] !== undefined) {
            _this._color = new fhirModels.Element(source._color);
        }
        if (source["cylinder"] !== undefined) {
            _this.cylinder = source.cylinder;
        }
        if (source["_cylinder"] !== undefined) {
            _this._cylinder = new fhirModels.Element(source._cylinder);
        }
        if (source["diameter"] !== undefined) {
            _this.diameter = source.diameter;
        }
        if (source["_diameter"] !== undefined) {
            _this._diameter = new fhirModels.Element(source._diameter);
        }
        if (source["duration"] !== undefined) {
            _this.duration = new fhirModels.Quantity(source.duration);
        }
        {
            _this.eye = source.eye;
        }
        if (source["_eye"] !== undefined) {
            _this._eye = new fhirModels.Element(source._eye);
        }
        if (source["note"] !== undefined) {
            _this.note = source.note.map(function (x) { return new fhirModels.Annotation(x); });
        }
        if (source["power"] !== undefined) {
            _this.power = source.power;
        }
        if (source["_power"] !== undefined) {
            _this._power = new fhirModels.Element(source._power);
        }
        if (source["prism"] !== undefined) {
            _this.prism = source.prism.map(function (x) { return new fhirModels.VisionPrescriptionLensSpecificationPrism(x); });
        }
        {
            _this.product = new fhirModels.CodeableConcept(source.product);
        }
        if (source["sphere"] !== undefined) {
            _this.sphere = source.sphere;
        }
        if (source["_sphere"] !== undefined) {
            _this._sphere = new fhirModels.Element(source._sphere);
        }
        return _this;
    }
    return VisionPrescriptionLensSpecification;
}(fhirModels.BackboneElement));
export { VisionPrescriptionLensSpecification };
/**
 * Code Values for the VisionPrescription.lensSpecification.eye field
 */
export var VisionPrescriptionLensSpecificationEyeEnum;
(function (VisionPrescriptionLensSpecificationEyeEnum) {
    VisionPrescriptionLensSpecificationEyeEnum["RIGHT"] = "right";
    VisionPrescriptionLensSpecificationEyeEnum["LEFT"] = "left";
})(VisionPrescriptionLensSpecificationEyeEnum || (VisionPrescriptionLensSpecificationEyeEnum = {}));
/**
 * An authorization for the provision of glasses and/or contact lenses to a patient.
 */
var VisionPrescription = /** @class */ (function (_super) {
    __extends(VisionPrescription, _super);
    /**
     * Default constructor for VisionPrescription from an object that MAY NOT contain all required elements.
     */
    function VisionPrescription(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "VisionPrescription";
        if ((source['resourceType'] !== "VisionPrescription") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a VisionPrescription';
        }
        {
            _this.created = source.created;
        }
        if (source["_created"] !== undefined) {
            _this._created = new fhirModels.Element(source._created);
        }
        {
            _this.dateWritten = source.dateWritten;
        }
        if (source["_dateWritten"] !== undefined) {
            _this._dateWritten = new fhirModels.Element(source._dateWritten);
        }
        if (source["encounter"] !== undefined) {
            _this.encounter = new fhirModels.Reference(source.encounter);
        }
        if (source["identifier"] !== undefined) {
            _this.identifier = source.identifier.map(function (x) { return new fhirModels.Identifier(x); });
        }
        {
            _this.lensSpecification = source.lensSpecification.map(function (x) { return new fhirModels.VisionPrescriptionLensSpecification(x); });
        }
        {
            _this.patient = new fhirModels.Reference(source.patient);
        }
        {
            _this.prescriber = new fhirModels.Reference(source.prescriber);
        }
        {
            _this.status = source.status;
        }
        if (source["_status"] !== undefined) {
            _this._status = new fhirModels.Element(source._status);
        }
        return _this;
    }
    return VisionPrescription;
}(fhirModels.DomainResource));
export { VisionPrescription };
/**
 * Code Values for the VisionPrescription.status field
 */
export var VisionPrescriptionStatusEnum;
(function (VisionPrescriptionStatusEnum) {
    VisionPrescriptionStatusEnum["ACTIVE"] = "active";
    VisionPrescriptionStatusEnum["CANCELLED"] = "cancelled";
    VisionPrescriptionStatusEnum["DRAFT"] = "draft";
    VisionPrescriptionStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(VisionPrescriptionStatusEnum || (VisionPrescriptionStatusEnum = {}));
