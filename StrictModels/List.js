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
 * If there are no entries in the list, an emptyReason SHOULD be provided.
 */
var ListEntry = /** @class */ (function (_super) {
    __extends(ListEntry, _super);
    /**
     * Default constructor for ListEntry from an object that MAY NOT contain all required elements.
     */
    function ListEntry(source) {
        var _this = _super.call(this, source) || this;
        if (source["date"] !== undefined) {
            _this.date = source.date;
        }
        if (source["_date"] !== undefined) {
            _this._date = new fhirModels.Element(source._date);
        }
        if (source["deleted"] !== undefined) {
            _this.deleted = source.deleted;
        }
        if (source["_deleted"] !== undefined) {
            _this._deleted = new fhirModels.Element(source._deleted);
        }
        if (source["flag"] !== undefined) {
            _this.flag = new fhirModels.CodeableConcept(source.flag);
        }
        {
            _this.item = new fhirModels.Reference(source.item);
        }
        return _this;
    }
    return ListEntry;
}(fhirModels.BackboneElement));
export { ListEntry };
/**
 * A list is a curated collection of resources.
 */
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    /**
     * Default constructor for List from an object that MAY NOT contain all required elements.
     */
    function List(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "List";
        if ((source['resourceType'] !== "List") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a List';
        }
        if (source["code"] !== undefined) {
            _this.code = new fhirModels.CodeableConcept(source.code);
        }
        if (source["date"] !== undefined) {
            _this.date = source.date;
        }
        if (source["_date"] !== undefined) {
            _this._date = new fhirModels.Element(source._date);
        }
        if (source["emptyReason"] !== undefined) {
            _this.emptyReason = new fhirModels.CodeableConcept(source.emptyReason);
        }
        if (source["encounter"] !== undefined) {
            _this.encounter = new fhirModels.Reference(source.encounter);
        }
        if (source["entry"] !== undefined) {
            _this.entry = source.entry.map(function (x) { return new fhirModels.ListEntry(x); });
        }
        if (source["identifier"] !== undefined) {
            _this.identifier = source.identifier.map(function (x) { return new fhirModels.Identifier(x); });
        }
        {
            _this.mode = source.mode;
        }
        if (source["_mode"] !== undefined) {
            _this._mode = new fhirModels.Element(source._mode);
        }
        if (source["note"] !== undefined) {
            _this.note = source.note.map(function (x) { return new fhirModels.Annotation(x); });
        }
        if (source["orderedBy"] !== undefined) {
            _this.orderedBy = new fhirModels.CodeableConcept(source.orderedBy);
        }
        if (source["source"] !== undefined) {
            _this.source = new fhirModels.Reference(source.source);
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
        if (source["title"] !== undefined) {
            _this.title = source.title;
        }
        if (source["_title"] !== undefined) {
            _this._title = new fhirModels.Element(source._title);
        }
        return _this;
    }
    return List;
}(fhirModels.DomainResource));
export { List };
/**
 * Code Values for the List.mode field
 */
export var ListModeEnum;
(function (ListModeEnum) {
    ListModeEnum["WORKING"] = "working";
    ListModeEnum["SNAPSHOT"] = "snapshot";
    ListModeEnum["CHANGES"] = "changes";
})(ListModeEnum || (ListModeEnum = {}));
/**
 * Code Values for the List.status field
 */
export var ListStatusEnum;
(function (ListStatusEnum) {
    ListStatusEnum["CURRENT"] = "current";
    ListStatusEnum["RETIRED"] = "retired";
    ListStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(ListStatusEnum || (ListStatusEnum = {}));