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
 * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed.
 */
var DataRequirementCodeFilter = /** @class */ (function (_super) {
    __extends(DataRequirementCodeFilter, _super);
    /**
     * Default constructor for DataRequirementCodeFilter from an object that MAY NOT contain all required elements.
     */
    function DataRequirementCodeFilter(source) {
        var _this = _super.call(this, source) || this;
        if (source["code"] !== undefined) {
            _this.code = source.code.map(function (x) { return new fhirModels.Coding(x); });
        }
        if (source["path"] !== undefined) {
            _this.path = source.path;
        }
        if (source["_path"] !== undefined) {
            _this._path = new fhirModels.Element(source._path);
        }
        if (source["searchParam"] !== undefined) {
            _this.searchParam = source.searchParam;
        }
        if (source["_searchParam"] !== undefined) {
            _this._searchParam = new fhirModels.Element(source._searchParam);
        }
        if (source["valueSet"] !== undefined) {
            _this.valueSet = source.valueSet;
        }
        if (source["_valueSet"] !== undefined) {
            _this._valueSet = new fhirModels.Element(source._valueSet);
        }
        return _this;
    }
    /**
     * Factory function to create a DataRequirementCodeFilter from an object that MUST contain all required elements.
     */
    DataRequirementCodeFilter.CreateStrict = function (source) {
        var dest = new DataRequirementCodeFilter(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "DataRequirementCodeFilter is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current DataRequirementCodeFilter contains all required elements.
     */
    DataRequirementCodeFilter.prototype.checkRequiredElements = function () {
        var missingElements = [];
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return DataRequirementCodeFilter;
}(fhirModels.Element));
export { DataRequirementCodeFilter };
/**
 * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed.
 */
var DataRequirementDateFilter = /** @class */ (function (_super) {
    __extends(DataRequirementDateFilter, _super);
    /**
     * Default constructor for DataRequirementDateFilter from an object that MAY NOT contain all required elements.
     */
    function DataRequirementDateFilter(source) {
        var _this = _super.call(this, source) || this;
        if (source["path"] !== undefined) {
            _this.path = source.path;
        }
        if (source["_path"] !== undefined) {
            _this._path = new fhirModels.Element(source._path);
        }
        if (source["searchParam"] !== undefined) {
            _this.searchParam = source.searchParam;
        }
        if (source["_searchParam"] !== undefined) {
            _this._searchParam = new fhirModels.Element(source._searchParam);
        }
        if (source["valueDateTime"] !== undefined) {
            _this.valueDateTime = source.valueDateTime;
        }
        if (source["_valueDateTime"] !== undefined) {
            _this._valueDateTime = new fhirModels.Element(source._valueDateTime);
        }
        if (source["valuePeriod"] !== undefined) {
            _this.valuePeriod = new fhirModels.Period(source.valuePeriod);
        }
        if (source["valueDuration"] !== undefined) {
            _this.valueDuration = new fhirModels.Duration(source.valueDuration);
        }
        return _this;
    }
    /**
     * Factory function to create a DataRequirementDateFilter from an object that MUST contain all required elements.
     */
    DataRequirementDateFilter.CreateStrict = function (source) {
        var dest = new DataRequirementDateFilter(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "DataRequirementDateFilter is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current DataRequirementDateFilter contains all required elements.
     */
    DataRequirementDateFilter.prototype.checkRequiredElements = function () {
        var missingElements = [];
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return DataRequirementDateFilter;
}(fhirModels.Element));
export { DataRequirementDateFilter };
/**
 * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5". When multiple sorts are specified, they are applied in the order they appear in the resource.
 */
var DataRequirementSort = /** @class */ (function (_super) {
    __extends(DataRequirementSort, _super);
    /**
     * Default constructor for DataRequirementSort from an object that MAY NOT contain all required elements.
     */
    function DataRequirementSort(source) {
        var _this = _super.call(this, source) || this;
        if (source["direction"] !== undefined) {
            _this.direction = source.direction;
        }
        if (source["_direction"] !== undefined) {
            _this._direction = new fhirModels.Element(source._direction);
        }
        if (source["path"] !== undefined) {
            _this.path = source.path;
        }
        if (source["_path"] !== undefined) {
            _this._path = new fhirModels.Element(source._path);
        }
        return _this;
    }
    /**
     * Factory function to create a DataRequirementSort from an object that MUST contain all required elements.
     */
    DataRequirementSort.CreateStrict = function (source) {
        var dest = new DataRequirementSort(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "DataRequirementSort is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current DataRequirementSort contains all required elements.
     */
    DataRequirementSort.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["direction"] === undefined) {
            missingElements.push("direction");
        }
        if (this["path"] === undefined) {
            missingElements.push("path");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return DataRequirementSort;
}(fhirModels.Element));
export { DataRequirementSort };
/**
 * Code Values for the DataRequirement.sort.direction field
 */
export var DataRequirementSortDirectionEnum;
(function (DataRequirementSortDirectionEnum) {
    DataRequirementSortDirectionEnum["ASCENDING"] = "ascending";
    DataRequirementSortDirectionEnum["DESCENDING"] = "descending";
})(DataRequirementSortDirectionEnum || (DataRequirementSortDirectionEnum = {}));
/**
 * Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data.
 */
var DataRequirement = /** @class */ (function (_super) {
    __extends(DataRequirement, _super);
    /**
     * Default constructor for DataRequirement from an object that MAY NOT contain all required elements.
     */
    function DataRequirement(source) {
        var _this = _super.call(this, source) || this;
        if (source["codeFilter"] !== undefined) {
            _this.codeFilter = source.codeFilter.map(function (x) { return new fhirModels.DataRequirementCodeFilter(x); });
        }
        if (source["dateFilter"] !== undefined) {
            _this.dateFilter = source.dateFilter.map(function (x) { return new fhirModels.DataRequirementDateFilter(x); });
        }
        if (source["limit"] !== undefined) {
            _this.limit = source.limit;
        }
        if (source["_limit"] !== undefined) {
            _this._limit = new fhirModels.Element(source._limit);
        }
        if (source["mustSupport"] !== undefined) {
            _this.mustSupport = source.mustSupport.map(function (x) { return (x); });
        }
        if (source["_mustSupport"] !== undefined) {
            _this._mustSupport = source._mustSupport.map(function (x) { return new fhirModels.Element(x); });
        }
        if (source["profile"] !== undefined) {
            _this.profile = source.profile.map(function (x) { return (x); });
        }
        if (source["_profile"] !== undefined) {
            _this._profile = source._profile.map(function (x) { return new fhirModels.Element(x); });
        }
        if (source["sort"] !== undefined) {
            _this.sort = source.sort.map(function (x) { return new fhirModels.DataRequirementSort(x); });
        }
        if (source["subjectCodeableConcept"] !== undefined) {
            _this.subjectCodeableConcept = new fhirModels.CodeableConcept(source.subjectCodeableConcept);
        }
        if (source["subjectReference"] !== undefined) {
            _this.subjectReference = new fhirModels.Reference(source.subjectReference);
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
     * Factory function to create a DataRequirement from an object that MUST contain all required elements.
     */
    DataRequirement.CreateStrict = function (source) {
        var dest = new DataRequirement(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "DataRequirement is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current DataRequirement contains all required elements.
     */
    DataRequirement.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["type"] === undefined) {
            missingElements.push("type");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return DataRequirement;
}(fhirModels.Element));
export { DataRequirement };