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
 * May be identifiers or resources that caused the DocumentManifest to be created.
 */
var DocumentManifestRelated = /** @class */ (function (_super) {
    __extends(DocumentManifestRelated, _super);
    /**
     * Default constructor for DocumentManifestRelated from an object that MAY NOT contain all required elements.
     */
    function DocumentManifestRelated(source) {
        var _this = _super.call(this, source) || this;
        if (source["identifier"] !== undefined) {
            _this.identifier = new fhirModels.Identifier(source.identifier);
        }
        if (source["ref"] !== undefined) {
            _this.ref = new fhirModels.Reference(source.ref);
        }
        return _this;
    }
    return DocumentManifestRelated;
}(fhirModels.BackboneElement));
export { DocumentManifestRelated };
/**
 * A collection of documents compiled for a purpose together with metadata that applies to the collection.
 */
var DocumentManifest = /** @class */ (function (_super) {
    __extends(DocumentManifest, _super);
    /**
     * Default constructor for DocumentManifest from an object that MAY NOT contain all required elements.
     */
    function DocumentManifest(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "DocumentManifest";
        if ((source['resourceType'] !== "DocumentManifest") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a DocumentManifest';
        }
        if (source["author"] !== undefined) {
            _this.author = source.author.map(function (x) { return new fhirModels.Reference(x); });
        }
        {
            _this.content = source.content.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["created"] !== undefined) {
            _this.created = source.created;
        }
        if (source["_created"] !== undefined) {
            _this._created = new fhirModels.Element(source._created);
        }
        if (source["description"] !== undefined) {
            _this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            _this._description = new fhirModels.Element(source._description);
        }
        if (source["identifier"] !== undefined) {
            _this.identifier = source.identifier.map(function (x) { return new fhirModels.Identifier(x); });
        }
        if (source["masterIdentifier"] !== undefined) {
            _this.masterIdentifier = new fhirModels.Identifier(source.masterIdentifier);
        }
        if (source["recipient"] !== undefined) {
            _this.recipient = source.recipient.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["related"] !== undefined) {
            _this.related = source.related.map(function (x) { return new fhirModels.DocumentManifestRelated(x); });
        }
        if (source["source"] !== undefined) {
            _this.source = source.source;
        }
        if (source["_source"] !== undefined) {
            _this._source = new fhirModels.Element(source._source);
        }
        {
            _this.status = source.status;
        }
        if (source["_status"] !== undefined) {
            _this._status = new fhirModels.Element(source._status);
        }
        if (source["subject"] !== undefined) {
            _this.subject = new fhirModels.Reference(source.subject);
        }
        if (source["type"] !== undefined) {
            _this.type = new fhirModels.CodeableConcept(source.type);
        }
        return _this;
    }
    return DocumentManifest;
}(fhirModels.DomainResource));
export { DocumentManifest };
/**
 * Code Values for the DocumentManifest.status field
 */
export var DocumentManifestStatusEnum;
(function (DocumentManifestStatusEnum) {
    DocumentManifestStatusEnum["CURRENT"] = "current";
    DocumentManifestStatusEnum["SUPERSEDED"] = "superseded";
    DocumentManifestStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(DocumentManifestStatusEnum || (DocumentManifestStatusEnum = {}));
