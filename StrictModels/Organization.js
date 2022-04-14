"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organization = exports.OrganizationContact = void 0;
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
const fhirModels = __importStar(require("../strictmodels"));
/**
 * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
 */
class OrganizationContact extends fhirModels.BackboneElement {
    /**
     * Default constructor for OrganizationContact from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["address"] !== undefined) {
            this.address = new fhirModels.Address(source.address);
        }
        if (source["name"] !== undefined) {
            this.name = new fhirModels.HumanName(source.name);
        }
        if (source["purpose"] !== undefined) {
            this.purpose = new fhirModels.CodeableConcept(source.purpose);
        }
        if (source["telecom"] !== undefined) {
            this.telecom = source.telecom.map((x) => new fhirModels.ContactPoint(x));
        }
    }
}
exports.OrganizationContact = OrganizationContact;
/**
 * A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc.
 */
class Organization extends fhirModels.DomainResource {
    /**
     * Default constructor for Organization from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        /**
         * Resource Type Name
         */
        this.resourceType = "Organization";
        if ((source['resourceType'] !== "Organization") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a Organization';
        }
        if (source["active"] !== undefined) {
            this.active = source.active;
        }
        if (source["_active"] !== undefined) {
            this._active = new fhirModels.Element(source._active);
        }
        if (source["address"] !== undefined) {
            this.address = source.address.map((x) => new fhirModels.Address(x));
        }
        if (source["alias"] !== undefined) {
            this.alias = source.alias.map((x) => (x));
        }
        if (source["_alias"] !== undefined) {
            this._alias = source._alias.map((x) => new fhirModels.Element(x));
        }
        if (source["contact"] !== undefined) {
            this.contact = source.contact.map((x) => new fhirModels.OrganizationContact(x));
        }
        if (source["endpoint"] !== undefined) {
            this.endpoint = source.endpoint.map((x) => new fhirModels.Reference(x));
        }
        if (source["identifier"] !== undefined) {
            this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x));
        }
        if (source["name"] !== undefined) {
            this.name = source.name;
        }
        if (source["_name"] !== undefined) {
            this._name = new fhirModels.Element(source._name);
        }
        if (source["partOf"] !== undefined) {
            this.partOf = new fhirModels.Reference(source.partOf);
        }
        if (source["telecom"] !== undefined) {
            this.telecom = source.telecom.map((x) => new fhirModels.ContactPoint(x));
        }
        if (source["type"] !== undefined) {
            this.type = source.type.map((x) => new fhirModels.CodeableConcept(x));
        }
    }
}
exports.Organization = Organization;
//# sourceMappingURL=Organization.js.map