// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * Used to define the parts of a composite search parameter.
 */
export class SearchParameterComponent extends fhir.BackboneElement {
    /**
     * Default constructor for SearchParameterComponent - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.definition = null;
        if (source["definition"]) {
            this.definition = source.definition;
        }
        if (this.definition === undefined) {
            this.definition = null;
        }
        if (source["_definition"]) {
            this._definition = new fhir.FhirElement(source._definition);
        }
        this.expression = null;
        if (source["expression"]) {
            this.expression = source.expression;
        }
        if (this.expression === undefined) {
            this.expression = null;
        }
        if (source["_expression"]) {
            this._expression = new fhir.FhirElement(source._expression);
        }
    }
    /**
     * Check if the current SearchParameterComponent contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["definition"] === undefined) {
            missingElements.push("definition");
        }
        if (this["expression"] === undefined) {
            missingElements.push("expression");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a SearchParameterComponent from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new SearchParameterComponent(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `SearchParameterComponent is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * A search parameter that defines a named search item that can be used to search/filter on a resource.
 */
export class SearchParameter extends fhir.DomainResource {
    /**
     * Default constructor for SearchParameter - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'SearchParameter';
        this.base = null;
        if (source["base"]) {
            this.base = source.base.map((x) => (x));
        }
        if (this.base === undefined) {
            this.base = null;
        }
        if (source["_base"]) {
            this._base = source._base.map((x) => new fhir.FhirElement(x));
        }
        if (source["chain"]) {
            this.chain = source.chain.map((x) => (x));
        }
        if (source["_chain"]) {
            this._chain = source._chain.map((x) => new fhir.FhirElement(x));
        }
        this.code = null;
        if (source["code"]) {
            this.code = source.code;
        }
        if (this.code === undefined) {
            this.code = null;
        }
        if (source["_code"]) {
            this._code = new fhir.FhirElement(source._code);
        }
        if (source["comparator"]) {
            this.comparator = source.comparator.map((x) => (x));
        }
        if (source["_comparator"]) {
            this._comparator = source._comparator.map((x) => new fhir.FhirElement(x));
        }
        if (source["component"]) {
            this.component = source.component.map((x) => new fhir.SearchParameterComponent(x));
        }
        if (source["contact"]) {
            this.contact = source.contact.map((x) => new fhir.ContactDetail(x));
        }
        if (source["date"]) {
            this.date = source.date;
        }
        if (source["_date"]) {
            this._date = new fhir.FhirElement(source._date);
        }
        if (source["derivedFrom"]) {
            this.derivedFrom = source.derivedFrom;
        }
        if (source["_derivedFrom"]) {
            this._derivedFrom = new fhir.FhirElement(source._derivedFrom);
        }
        this.description = null;
        if (source["description"]) {
            this.description = source.description;
        }
        if (this.description === undefined) {
            this.description = null;
        }
        if (source["_description"]) {
            this._description = new fhir.FhirElement(source._description);
        }
        if (source["experimental"]) {
            this.experimental = source.experimental;
        }
        if (source["_experimental"]) {
            this._experimental = new fhir.FhirElement(source._experimental);
        }
        if (source["expression"]) {
            this.expression = source.expression;
        }
        if (source["_expression"]) {
            this._expression = new fhir.FhirElement(source._expression);
        }
        if (source["jurisdiction"]) {
            this.jurisdiction = source.jurisdiction.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["modifier"]) {
            this.modifier = source.modifier.map((x) => (x));
        }
        if (source["_modifier"]) {
            this._modifier = source._modifier.map((x) => new fhir.FhirElement(x));
        }
        if (source["multipleAnd"]) {
            this.multipleAnd = source.multipleAnd;
        }
        if (source["_multipleAnd"]) {
            this._multipleAnd = new fhir.FhirElement(source._multipleAnd);
        }
        if (source["multipleOr"]) {
            this.multipleOr = source.multipleOr;
        }
        if (source["_multipleOr"]) {
            this._multipleOr = new fhir.FhirElement(source._multipleOr);
        }
        this.name = null;
        if (source["name"]) {
            this.name = source.name;
        }
        if (this.name === undefined) {
            this.name = null;
        }
        if (source["_name"]) {
            this._name = new fhir.FhirElement(source._name);
        }
        if (source["publisher"]) {
            this.publisher = source.publisher;
        }
        if (source["_publisher"]) {
            this._publisher = new fhir.FhirElement(source._publisher);
        }
        if (source["purpose"]) {
            this.purpose = source.purpose;
        }
        if (source["_purpose"]) {
            this._purpose = new fhir.FhirElement(source._purpose);
        }
        this.status = null;
        if (source["status"]) {
            this.status = source.status;
        }
        if (this.status === undefined) {
            this.status = null;
        }
        if (source["_status"]) {
            this._status = new fhir.FhirElement(source._status);
        }
        if (source["target"]) {
            this.target = source.target.map((x) => (x));
        }
        if (source["_target"]) {
            this._target = source._target.map((x) => new fhir.FhirElement(x));
        }
        this.type = null;
        if (source["type"]) {
            this.type = source.type;
        }
        if (this.type === undefined) {
            this.type = null;
        }
        if (source["_type"]) {
            this._type = new fhir.FhirElement(source._type);
        }
        this.url = null;
        if (source["url"]) {
            this.url = source.url;
        }
        if (this.url === undefined) {
            this.url = null;
        }
        if (source["_url"]) {
            this._url = new fhir.FhirElement(source._url);
        }
        if (source["useContext"]) {
            this.useContext = source.useContext.map((x) => new fhir.UsageContext(x));
        }
        if (source["version"]) {
            this.version = source.version;
        }
        if (source["_version"]) {
            this._version = new fhir.FhirElement(source._version);
        }
        if (source["xpath"]) {
            this.xpath = source.xpath;
        }
        if (source["_xpath"]) {
            this._xpath = new fhir.FhirElement(source._xpath);
        }
        if (source["xpathUsage"]) {
            this.xpathUsage = source.xpathUsage;
        }
        if (source["_xpathUsage"]) {
            this._xpathUsage = new fhir.FhirElement(source._xpathUsage);
        }
    }
    /**
     * Check if the current SearchParameter contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if ((!this["base"]) || (this["base"].length === 0)) {
            missingElements.push("base");
        }
        if (this["code"] === undefined) {
            missingElements.push("code");
        }
        if (this["description"] === undefined) {
            missingElements.push("description");
        }
        if (this["name"] === undefined) {
            missingElements.push("name");
        }
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        if (this["type"] === undefined) {
            missingElements.push("type");
        }
        if (this["url"] === undefined) {
            missingElements.push("url");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a SearchParameter from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new SearchParameter(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `SearchParameter is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Code Values for the SearchParameter.comparator field
 */
export var SearchParameterComparatorEnum;
(function (SearchParameterComparatorEnum) {
    SearchParameterComparatorEnum["EQ"] = "eq";
    SearchParameterComparatorEnum["NE"] = "ne";
    SearchParameterComparatorEnum["GT"] = "gt";
    SearchParameterComparatorEnum["LT"] = "lt";
    SearchParameterComparatorEnum["GE"] = "ge";
    SearchParameterComparatorEnum["LE"] = "le";
    SearchParameterComparatorEnum["SA"] = "sa";
    SearchParameterComparatorEnum["EB"] = "eb";
    SearchParameterComparatorEnum["AP"] = "ap";
})(SearchParameterComparatorEnum || (SearchParameterComparatorEnum = {}));
/**
 * Code Values for the SearchParameter.modifier field
 */
export var SearchParameterModifierEnum;
(function (SearchParameterModifierEnum) {
    SearchParameterModifierEnum["MISSING"] = "missing";
    SearchParameterModifierEnum["EXACT"] = "exact";
    SearchParameterModifierEnum["CONTAINS"] = "contains";
    SearchParameterModifierEnum["NOT"] = "not";
    SearchParameterModifierEnum["TEXT"] = "text";
    SearchParameterModifierEnum["IN"] = "in";
    SearchParameterModifierEnum["NOT_IN"] = "not-in";
    SearchParameterModifierEnum["BELOW"] = "below";
    SearchParameterModifierEnum["ABOVE"] = "above";
    SearchParameterModifierEnum["TYPE"] = "type";
    SearchParameterModifierEnum["IDENTIFIER"] = "identifier";
    SearchParameterModifierEnum["OFTYPE"] = "ofType";
})(SearchParameterModifierEnum || (SearchParameterModifierEnum = {}));
/**
 * Code Values for the SearchParameter.status field
 */
export var SearchParameterStatusEnum;
(function (SearchParameterStatusEnum) {
    SearchParameterStatusEnum["DRAFT"] = "draft";
    SearchParameterStatusEnum["ACTIVE"] = "active";
    SearchParameterStatusEnum["RETIRED"] = "retired";
    SearchParameterStatusEnum["UNKNOWN"] = "unknown";
})(SearchParameterStatusEnum || (SearchParameterStatusEnum = {}));
/**
 * Code Values for the SearchParameter.type field
 */
export var SearchParameterTypeEnum;
(function (SearchParameterTypeEnum) {
    SearchParameterTypeEnum["NUMBER"] = "number";
    SearchParameterTypeEnum["DATE"] = "date";
    SearchParameterTypeEnum["STRING"] = "string";
    SearchParameterTypeEnum["TOKEN"] = "token";
    SearchParameterTypeEnum["REFERENCE"] = "reference";
    SearchParameterTypeEnum["COMPOSITE"] = "composite";
    SearchParameterTypeEnum["QUANTITY"] = "quantity";
    SearchParameterTypeEnum["URI"] = "uri";
    SearchParameterTypeEnum["SPECIAL"] = "special";
})(SearchParameterTypeEnum || (SearchParameterTypeEnum = {}));
/**
 * Code Values for the SearchParameter.xpathUsage field
 */
export var SearchParameterXpathUsageEnum;
(function (SearchParameterXpathUsageEnum) {
    SearchParameterXpathUsageEnum["NORMAL"] = "normal";
    SearchParameterXpathUsageEnum["PHONETIC"] = "phonetic";
    SearchParameterXpathUsageEnum["NEARBY"] = "nearby";
    SearchParameterXpathUsageEnum["DISTANCE"] = "distance";
    SearchParameterXpathUsageEnum["OTHER"] = "other";
})(SearchParameterXpathUsageEnum || (SearchParameterXpathUsageEnum = {}));
//# sourceMappingURL=SearchParameter.js.map