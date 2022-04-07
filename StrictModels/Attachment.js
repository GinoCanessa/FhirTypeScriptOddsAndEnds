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
 * For referring to data content defined in other formats.
 */
var Attachment = /** @class */ (function (_super) {
    __extends(Attachment, _super);
    /**
     * Default constructor for Attachment from an object that MAY NOT contain all required elements.
     */
    function Attachment(source) {
        var _this = _super.call(this, source) || this;
        if (source["contentType"] !== undefined) {
            _this.contentType = source.contentType;
        }
        if (source["_contentType"] !== undefined) {
            _this._contentType = new fhirModels.Element(source._contentType);
        }
        if (source["creation"] !== undefined) {
            _this.creation = source.creation;
        }
        if (source["_creation"] !== undefined) {
            _this._creation = new fhirModels.Element(source._creation);
        }
        if (source["data"] !== undefined) {
            _this.data = source.data;
        }
        if (source["_data"] !== undefined) {
            _this._data = new fhirModels.Element(source._data);
        }
        if (source["hash"] !== undefined) {
            _this.hash = source.hash;
        }
        if (source["_hash"] !== undefined) {
            _this._hash = new fhirModels.Element(source._hash);
        }
        if (source["language"] !== undefined) {
            _this.language = source.language;
        }
        if (source["_language"] !== undefined) {
            _this._language = new fhirModels.Element(source._language);
        }
        if (source["size"] !== undefined) {
            _this.size = source.size;
        }
        if (source["_size"] !== undefined) {
            _this._size = new fhirModels.Element(source._size);
        }
        if (source["title"] !== undefined) {
            _this.title = source.title;
        }
        if (source["_title"] !== undefined) {
            _this._title = new fhirModels.Element(source._title);
        }
        if (source["url"] !== undefined) {
            _this.url = source.url;
        }
        if (source["_url"] !== undefined) {
            _this._url = new fhirModels.Element(source._url);
        }
        return _this;
    }
    return Attachment;
}(fhirModels.Element));
export { Attachment };
