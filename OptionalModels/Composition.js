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
 * Only list each attester once.
 */
var CompositionAttester = /** @class */ (function (_super) {
    __extends(CompositionAttester, _super);
    /**
     * Default constructor for CompositionAttester from an object that MAY NOT contain all required elements.
     */
    function CompositionAttester(source) {
        var _this = _super.call(this, source) || this;
        if (source["mode"] !== undefined) {
            _this.mode = source.mode;
        }
        if (source["_mode"] !== undefined) {
            _this._mode = new fhirModels.Element(source._mode);
        }
        if (source["party"] !== undefined) {
            _this.party = new fhirModels.Reference(source.party);
        }
        if (source["time"] !== undefined) {
            _this.time = source.time;
        }
        if (source["_time"] !== undefined) {
            _this._time = new fhirModels.Element(source._time);
        }
        return _this;
    }
    /**
     * Factory function to create a CompositionAttester from an object that MUST contain all required elements.
     */
    CompositionAttester.CreateStrict = function (source) {
        var dest = new CompositionAttester(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "CompositionAttester is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current CompositionAttester contains all required elements.
     */
    CompositionAttester.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["mode"] === undefined) {
            missingElements.push("mode");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return CompositionAttester;
}(fhirModels.BackboneElement));
export { CompositionAttester };
/**
 * Code Values for the Composition.attester.mode field
 */
export var CompositionAttesterModeEnum;
(function (CompositionAttesterModeEnum) {
    CompositionAttesterModeEnum["PERSONAL"] = "personal";
    CompositionAttesterModeEnum["PROFESSIONAL"] = "professional";
    CompositionAttesterModeEnum["LEGAL"] = "legal";
    CompositionAttesterModeEnum["OFFICIAL"] = "official";
})(CompositionAttesterModeEnum || (CompositionAttesterModeEnum = {}));
/**
 * A document is a version specific composition.
 */
var CompositionRelatesTo = /** @class */ (function (_super) {
    __extends(CompositionRelatesTo, _super);
    /**
     * Default constructor for CompositionRelatesTo from an object that MAY NOT contain all required elements.
     */
    function CompositionRelatesTo(source) {
        var _this = _super.call(this, source) || this;
        if (source["code"] !== undefined) {
            _this.code = source.code;
        }
        if (source["_code"] !== undefined) {
            _this._code = new fhirModels.Element(source._code);
        }
        if (source["targetIdentifier"] !== undefined) {
            _this.targetIdentifier = new fhirModels.Identifier(source.targetIdentifier);
        }
        if (source["targetReference"] !== undefined) {
            _this.targetReference = new fhirModels.Reference(source.targetReference);
        }
        return _this;
    }
    /**
     * Factory function to create a CompositionRelatesTo from an object that MUST contain all required elements.
     */
    CompositionRelatesTo.CreateStrict = function (source) {
        var dest = new CompositionRelatesTo(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "CompositionRelatesTo is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current CompositionRelatesTo contains all required elements.
     */
    CompositionRelatesTo.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["code"] === undefined) {
            missingElements.push("code");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return CompositionRelatesTo;
}(fhirModels.BackboneElement));
export { CompositionRelatesTo };
/**
 * Code Values for the Composition.relatesTo.code field
 */
export var CompositionRelatesToCodeEnum;
(function (CompositionRelatesToCodeEnum) {
    CompositionRelatesToCodeEnum["REPLACES"] = "replaces";
    CompositionRelatesToCodeEnum["TRANSFORMS"] = "transforms";
    CompositionRelatesToCodeEnum["SIGNS"] = "signs";
    CompositionRelatesToCodeEnum["APPENDS"] = "appends";
})(CompositionRelatesToCodeEnum || (CompositionRelatesToCodeEnum = {}));
/**
 * The event needs to be consistent with the type element, though can provide further information if desired.
 */
var CompositionEvent = /** @class */ (function (_super) {
    __extends(CompositionEvent, _super);
    /**
     * Default constructor for CompositionEvent from an object that MAY NOT contain all required elements.
     */
    function CompositionEvent(source) {
        var _this = _super.call(this, source) || this;
        if (source["code"] !== undefined) {
            _this.code = source.code.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["detail"] !== undefined) {
            _this.detail = source.detail.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["period"] !== undefined) {
            _this.period = new fhirModels.Period(source.period);
        }
        return _this;
    }
    /**
     * Factory function to create a CompositionEvent from an object that MUST contain all required elements.
     */
    CompositionEvent.CreateStrict = function (source) {
        var dest = new CompositionEvent(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "CompositionEvent is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current CompositionEvent contains all required elements.
     */
    CompositionEvent.prototype.checkRequiredElements = function () {
        var missingElements = [];
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return CompositionEvent;
}(fhirModels.BackboneElement));
export { CompositionEvent };
/**
 * The root of the sections that make up the composition.
 */
var CompositionSection = /** @class */ (function (_super) {
    __extends(CompositionSection, _super);
    /**
     * Default constructor for CompositionSection from an object that MAY NOT contain all required elements.
     */
    function CompositionSection(source) {
        var _this = _super.call(this, source) || this;
        if (source["author"] !== undefined) {
            _this.author = source.author.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["code"] !== undefined) {
            _this.code = new fhirModels.CodeableConcept(source.code);
        }
        if (source["emptyReason"] !== undefined) {
            _this.emptyReason = new fhirModels.CodeableConcept(source.emptyReason);
        }
        if (source["entry"] !== undefined) {
            _this.entry = source.entry.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["focus"] !== undefined) {
            _this.focus = new fhirModels.Reference(source.focus);
        }
        if (source["mode"] !== undefined) {
            _this.mode = source.mode;
        }
        if (source["_mode"] !== undefined) {
            _this._mode = new fhirModels.Element(source._mode);
        }
        if (source["orderedBy"] !== undefined) {
            _this.orderedBy = new fhirModels.CodeableConcept(source.orderedBy);
        }
        if (source["section"] !== undefined) {
            _this.section = source.section.map(function (x) { return new fhirModels.CompositionSection(x); });
        }
        if (source["text"] !== undefined) {
            _this.text = new fhirModels.Narrative(source.text);
        }
        if (source["title"] !== undefined) {
            _this.title = source.title;
        }
        if (source["_title"] !== undefined) {
            _this._title = new fhirModels.Element(source._title);
        }
        return _this;
    }
    /**
     * Factory function to create a CompositionSection from an object that MUST contain all required elements.
     */
    CompositionSection.CreateStrict = function (source) {
        var dest = new CompositionSection(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "CompositionSection is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current CompositionSection contains all required elements.
     */
    CompositionSection.prototype.checkRequiredElements = function () {
        var missingElements = [];
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return CompositionSection;
}(fhirModels.BackboneElement));
export { CompositionSection };
/**
 * Code Values for the Composition.section.mode field
 */
export var CompositionSectionModeEnum;
(function (CompositionSectionModeEnum) {
    CompositionSectionModeEnum["WORKING"] = "working";
    CompositionSectionModeEnum["SNAPSHOT"] = "snapshot";
    CompositionSectionModeEnum["CHANGES"] = "changes";
})(CompositionSectionModeEnum || (CompositionSectionModeEnum = {}));
/**
 * A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document. However, a Composition alone does not constitute a document. Rather, the Composition must be the first entry in a Bundle where Bundle.type=document, and any other resources referenced from Composition must be included as subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.).
 */
var Composition = /** @class */ (function (_super) {
    __extends(Composition, _super);
    /**
     * Default constructor for Composition from an object that MAY NOT contain all required elements.
     */
    function Composition(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "Composition";
        if ((source['resourceType'] !== "Composition") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a Composition';
        }
        if (source["attester"] !== undefined) {
            _this.attester = source.attester.map(function (x) { return new fhirModels.CompositionAttester(x); });
        }
        if (source["author"] !== undefined) {
            _this.author = source.author.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["category"] !== undefined) {
            _this.category = source.category.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["confidentiality"] !== undefined) {
            _this.confidentiality = source.confidentiality;
        }
        if (source["_confidentiality"] !== undefined) {
            _this._confidentiality = new fhirModels.Element(source._confidentiality);
        }
        if (source["custodian"] !== undefined) {
            _this.custodian = new fhirModels.Reference(source.custodian);
        }
        if (source["date"] !== undefined) {
            _this.date = source.date;
        }
        if (source["_date"] !== undefined) {
            _this._date = new fhirModels.Element(source._date);
        }
        if (source["encounter"] !== undefined) {
            _this.encounter = new fhirModels.Reference(source.encounter);
        }
        if (source["event"] !== undefined) {
            _this.event = source.event.map(function (x) { return new fhirModels.CompositionEvent(x); });
        }
        if (source["identifier"] !== undefined) {
            _this.identifier = new fhirModels.Identifier(source.identifier);
        }
        if (source["relatesTo"] !== undefined) {
            _this.relatesTo = source.relatesTo.map(function (x) { return new fhirModels.CompositionRelatesTo(x); });
        }
        if (source["section"] !== undefined) {
            _this.section = source.section.map(function (x) { return new fhirModels.CompositionSection(x); });
        }
        if (source["status"] !== undefined) {
            _this.status = source.status;
        }
        if (source["_status"] !== undefined) {
            _this._status = new fhirModels.Element(source._status);
        }
        if (source["subject"] !== undefined) {
            _this.subject = new fhirModels.Reference(source.subject);
        }
        if (source["title"] !== undefined) {
            _this.title = source.title;
        }
        if (source["_title"] !== undefined) {
            _this._title = new fhirModels.Element(source._title);
        }
        if (source["type"] !== undefined) {
            _this.type = new fhirModels.CodeableConcept(source.type);
        }
        return _this;
    }
    /**
     * Factory function to create a Composition from an object that MUST contain all required elements.
     */
    Composition.CreateStrict = function (source) {
        var dest = new Composition(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "Composition is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current Composition contains all required elements.
     */
    Composition.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if ((this["author"] === undefined) || (this["author"].length === 0)) {
            missingElements.push("author");
        }
        if (this["date"] === undefined) {
            missingElements.push("date");
        }
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        if (this["title"] === undefined) {
            missingElements.push("title");
        }
        if (this["type"] === undefined) {
            missingElements.push("type");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return Composition;
}(fhirModels.DomainResource));
export { Composition };
/**
 * Code Values for the Composition.status field
 */
export var CompositionStatusEnum;
(function (CompositionStatusEnum) {
    CompositionStatusEnum["PRELIMINARY"] = "preliminary";
    CompositionStatusEnum["FINAL"] = "final";
    CompositionStatusEnum["AMENDED"] = "amended";
    CompositionStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(CompositionStatusEnum || (CompositionStatusEnum = {}));
