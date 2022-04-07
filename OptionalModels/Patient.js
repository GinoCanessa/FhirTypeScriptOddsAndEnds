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
 * Contact covers all kinds of contact parties: family members, business contacts, guardians, caregivers. Not applicable to register pedigree and family ties beyond use of having contact.
 */
var PatientContact = /** @class */ (function (_super) {
    __extends(PatientContact, _super);
    /**
     * Default constructor for PatientContact from an object that MAY NOT contain all required elements.
     */
    function PatientContact(source) {
        var _this = _super.call(this, source) || this;
        if (source["address"] !== undefined) {
            _this.address = new fhirModels.Address(source.address);
        }
        if (source["gender"] !== undefined) {
            _this.gender = source.gender;
        }
        if (source["_gender"] !== undefined) {
            _this._gender = new fhirModels.Element(source._gender);
        }
        if (source["name"] !== undefined) {
            _this.name = new fhirModels.HumanName(source.name);
        }
        if (source["organization"] !== undefined) {
            _this.organization = new fhirModels.Reference(source.organization);
        }
        if (source["period"] !== undefined) {
            _this.period = new fhirModels.Period(source.period);
        }
        if (source["relationship"] !== undefined) {
            _this.relationship = source.relationship.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["telecom"] !== undefined) {
            _this.telecom = source.telecom.map(function (x) { return new fhirModels.ContactPoint(x); });
        }
        return _this;
    }
    /**
     * Factory function to create a PatientContact from an object that MUST contain all required elements.
     */
    PatientContact.CreateStrict = function (source) {
        var dest = new PatientContact(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "PatientContact is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current PatientContact contains all required elements.
     */
    PatientContact.prototype.checkRequiredElements = function () {
        var missingElements = [];
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return PatientContact;
}(fhirModels.BackboneElement));
export { PatientContact };
/**
 * Code Values for the Patient.contact.gender field
 */
export var PatientContactGenderEnum;
(function (PatientContactGenderEnum) {
    PatientContactGenderEnum["MALE"] = "male";
    PatientContactGenderEnum["FEMALE"] = "female";
    PatientContactGenderEnum["OTHER"] = "other";
    PatientContactGenderEnum["UNKNOWN"] = "unknown";
})(PatientContactGenderEnum || (PatientContactGenderEnum = {}));
/**
 * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple Patient.Communication associations.   For animals, language is not a relevant field, and should be absent from the instance. If the Patient does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
 */
var PatientCommunication = /** @class */ (function (_super) {
    __extends(PatientCommunication, _super);
    /**
     * Default constructor for PatientCommunication from an object that MAY NOT contain all required elements.
     */
    function PatientCommunication(source) {
        var _this = _super.call(this, source) || this;
        if (source["language"] !== undefined) {
            _this.language = new fhirModels.CodeableConcept(source.language);
        }
        if (source["preferred"] !== undefined) {
            _this.preferred = source.preferred;
        }
        if (source["_preferred"] !== undefined) {
            _this._preferred = new fhirModels.Element(source._preferred);
        }
        return _this;
    }
    /**
     * Factory function to create a PatientCommunication from an object that MUST contain all required elements.
     */
    PatientCommunication.CreateStrict = function (source) {
        var dest = new PatientCommunication(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "PatientCommunication is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current PatientCommunication contains all required elements.
     */
    PatientCommunication.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["language"] === undefined) {
            missingElements.push("language");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return PatientCommunication;
}(fhirModels.BackboneElement));
export { PatientCommunication };
/**
 * There is no assumption that linked patient records have mutual links.
 */
var PatientLink = /** @class */ (function (_super) {
    __extends(PatientLink, _super);
    /**
     * Default constructor for PatientLink from an object that MAY NOT contain all required elements.
     */
    function PatientLink(source) {
        var _this = _super.call(this, source) || this;
        if (source["other"] !== undefined) {
            _this.other = new fhirModels.Reference(source.other);
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
     * Factory function to create a PatientLink from an object that MUST contain all required elements.
     */
    PatientLink.CreateStrict = function (source) {
        var dest = new PatientLink(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "PatientLink is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current PatientLink contains all required elements.
     */
    PatientLink.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["other"] === undefined) {
            missingElements.push("other");
        }
        if (this["type"] === undefined) {
            missingElements.push("type");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return PatientLink;
}(fhirModels.BackboneElement));
export { PatientLink };
/**
 * Code Values for the Patient.link.type field
 */
export var PatientLinkTypeEnum;
(function (PatientLinkTypeEnum) {
    PatientLinkTypeEnum["REPLACED_BY"] = "replaced-by";
    PatientLinkTypeEnum["REPLACES"] = "replaces";
    PatientLinkTypeEnum["REFER"] = "refer";
    PatientLinkTypeEnum["SEEALSO"] = "seealso";
})(PatientLinkTypeEnum || (PatientLinkTypeEnum = {}));
/**
 * Demographics and other administrative information about an individual or animal receiving care or other health-related services.
 */
var Patient = /** @class */ (function (_super) {
    __extends(Patient, _super);
    /**
     * Default constructor for Patient from an object that MAY NOT contain all required elements.
     */
    function Patient(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "Patient";
        if ((source['resourceType'] !== "Patient") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a Patient';
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
            _this.communication = source.communication.map(function (x) { return new fhirModels.PatientCommunication(x); });
        }
        if (source["contact"] !== undefined) {
            _this.contact = source.contact.map(function (x) { return new fhirModels.PatientContact(x); });
        }
        if (source["deceasedBoolean"] !== undefined) {
            _this.deceasedBoolean = source.deceasedBoolean;
        }
        if (source["_deceasedBoolean"] !== undefined) {
            _this._deceasedBoolean = new fhirModels.Element(source._deceasedBoolean);
        }
        if (source["deceasedDateTime"] !== undefined) {
            _this.deceasedDateTime = source.deceasedDateTime;
        }
        if (source["_deceasedDateTime"] !== undefined) {
            _this._deceasedDateTime = new fhirModels.Element(source._deceasedDateTime);
        }
        if (source["gender"] !== undefined) {
            _this.gender = source.gender;
        }
        if (source["_gender"] !== undefined) {
            _this._gender = new fhirModels.Element(source._gender);
        }
        if (source["generalPractitioner"] !== undefined) {
            _this.generalPractitioner = source.generalPractitioner.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["identifier"] !== undefined) {
            _this.identifier = source.identifier.map(function (x) { return new fhirModels.Identifier(x); });
        }
        if (source["link"] !== undefined) {
            _this.link = source.link.map(function (x) { return new fhirModels.PatientLink(x); });
        }
        if (source["managingOrganization"] !== undefined) {
            _this.managingOrganization = new fhirModels.Reference(source.managingOrganization);
        }
        if (source["maritalStatus"] !== undefined) {
            _this.maritalStatus = new fhirModels.CodeableConcept(source.maritalStatus);
        }
        if (source["multipleBirthBoolean"] !== undefined) {
            _this.multipleBirthBoolean = source.multipleBirthBoolean;
        }
        if (source["_multipleBirthBoolean"] !== undefined) {
            _this._multipleBirthBoolean = new fhirModels.Element(source._multipleBirthBoolean);
        }
        if (source["multipleBirthInteger"] !== undefined) {
            _this.multipleBirthInteger = source.multipleBirthInteger;
        }
        if (source["_multipleBirthInteger"] !== undefined) {
            _this._multipleBirthInteger = new fhirModels.Element(source._multipleBirthInteger);
        }
        if (source["name"] !== undefined) {
            _this.name = source.name.map(function (x) { return new fhirModels.HumanName(x); });
        }
        if (source["photo"] !== undefined) {
            _this.photo = source.photo.map(function (x) { return new fhirModels.Attachment(x); });
        }
        if (source["telecom"] !== undefined) {
            _this.telecom = source.telecom.map(function (x) { return new fhirModels.ContactPoint(x); });
        }
        return _this;
    }
    /**
     * Factory function to create a Patient from an object that MUST contain all required elements.
     */
    Patient.CreateStrict = function (source) {
        var dest = new Patient(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "Patient is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current Patient contains all required elements.
     */
    Patient.prototype.checkRequiredElements = function () {
        var missingElements = [];
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return Patient;
}(fhirModels.DomainResource));
export { Patient };
/**
 * Code Values for the Patient.gender field
 */
export var PatientGenderEnum;
(function (PatientGenderEnum) {
    PatientGenderEnum["MALE"] = "male";
    PatientGenderEnum["FEMALE"] = "female";
    PatientGenderEnum["OTHER"] = "other";
    PatientGenderEnum["UNKNOWN"] = "unknown";
})(PatientGenderEnum || (PatientGenderEnum = {}));
