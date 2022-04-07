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
 * A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers.
 */
var Contributor = /** @class */ (function (_super) {
    __extends(Contributor, _super);
    /**
     * Default constructor for Contributor from an object that MAY NOT contain all required elements.
     */
    function Contributor(source) {
        var _this = _super.call(this, source) || this;
        if (source["contact"] !== undefined) {
            _this.contact = source.contact.map(function (x) { return new fhirModels.ContactDetail(x); });
        }
        {
            _this.name = source.name;
        }
        if (source["_name"] !== undefined) {
            _this._name = new fhirModels.Element(source._name);
        }
        {
            _this.type = source.type;
        }
        if (source["_type"] !== undefined) {
            _this._type = new fhirModels.Element(source._type);
        }
        return _this;
    }
    return Contributor;
}(fhirModels.Element));
export { Contributor };
/**
 * Code Values for the Contributor.type field
 */
export var ContributorTypeEnum;
(function (ContributorTypeEnum) {
    ContributorTypeEnum["AUTHOR"] = "author";
    ContributorTypeEnum["EDITOR"] = "editor";
    ContributorTypeEnum["REVIEWER"] = "reviewer";
    ContributorTypeEnum["ENDORSER"] = "endorser";
})(ContributorTypeEnum || (ContributorTypeEnum = {}));