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
 * A resource that includes narrative, extensions, and contained resources.
 */
var DomainResource = /** @class */ (function (_super) {
    __extends(DomainResource, _super);
    /**
     * Default constructor for DomainResource from an object that MAY NOT contain all required elements.
     */
    function DomainResource(source) {
        var _this = _super.call(this, source) || this;
        if (source["contained"] !== undefined) {
            _this.contained = [];
            source.contained.forEach(function (x) {
                var r = fhirModels.FhirResourceFactory(x);
                if (r) {
                    _this.contained.push(r);
                }
            });
        }
        if (source["extension"] !== undefined) {
            _this.extension = source.extension.map(function (x) { return new fhirModels.Extension(x); });
        }
        if (source["modifierExtension"] !== undefined) {
            _this.modifierExtension = source.modifierExtension.map(function (x) { return new fhirModels.Extension(x); });
        }
        if (source["text"] !== undefined) {
            _this.text = new fhirModels.Narrative(source.text);
        }
        return _this;
    }
    return DomainResource;
}(fhirModels.Resource));
export { DomainResource };