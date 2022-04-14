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
exports.AccountStatusEnum = exports.Account = exports.AccountGuarantor = exports.AccountCoverage = void 0;
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
const fhirModels = __importStar(require("../optionalmodels"));
/**
 * Typically. this may be some form of insurance, internal charges, or self-pay.
 * Local or jurisdictional business rules may determine which coverage covers which types of billable items charged to the account, and in which order.
 * Where the order is important, a local/jurisdictional extension may be defined to specify the order for the type of charge.
 */
class AccountCoverage extends fhirModels.BackboneElement {
    /**
     * Default constructor for AccountCoverage from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["coverage"] !== undefined) {
            this.coverage = new fhirModels.Reference(source.coverage);
        }
        if (source["priority"] !== undefined) {
            this.priority = source.priority;
        }
        if (source["_priority"] !== undefined) {
            this._priority = new fhirModels.Element(source._priority);
        }
    }
    /**
     * Factory function to create a AccountCoverage from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new AccountCoverage(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `AccountCoverage is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current AccountCoverage contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["coverage"] === undefined) {
            missingElements.push("coverage");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
}
exports.AccountCoverage = AccountCoverage;
/**
 * The parties responsible for balancing the account if other payment options fall short.
 */
class AccountGuarantor extends fhirModels.BackboneElement {
    /**
     * Default constructor for AccountGuarantor from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["onHold"] !== undefined) {
            this.onHold = source.onHold;
        }
        if (source["_onHold"] !== undefined) {
            this._onHold = new fhirModels.Element(source._onHold);
        }
        if (source["party"] !== undefined) {
            this.party = new fhirModels.Reference(source.party);
        }
        if (source["period"] !== undefined) {
            this.period = new fhirModels.Period(source.period);
        }
    }
    /**
     * Factory function to create a AccountGuarantor from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new AccountGuarantor(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `AccountGuarantor is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current AccountGuarantor contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["party"] === undefined) {
            missingElements.push("party");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
}
exports.AccountGuarantor = AccountGuarantor;
/**
 * A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc.
 */
class Account extends fhirModels.DomainResource {
    /**
     * Default constructor for Account from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        /**
         * Resource Type Name
         */
        this.resourceType = "Account";
        if ((source['resourceType'] !== "Account") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a Account';
        }
        if (source["coverage"] !== undefined) {
            this.coverage = source.coverage.map((x) => new fhirModels.AccountCoverage(x));
        }
        if (source["description"] !== undefined) {
            this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            this._description = new fhirModels.Element(source._description);
        }
        if (source["guarantor"] !== undefined) {
            this.guarantor = source.guarantor.map((x) => new fhirModels.AccountGuarantor(x));
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
        if (source["owner"] !== undefined) {
            this.owner = new fhirModels.Reference(source.owner);
        }
        if (source["partOf"] !== undefined) {
            this.partOf = new fhirModels.Reference(source.partOf);
        }
        if (source["servicePeriod"] !== undefined) {
            this.servicePeriod = new fhirModels.Period(source.servicePeriod);
        }
        if (source["status"] !== undefined) {
            this.status = source.status;
        }
        if (source["_status"] !== undefined) {
            this._status = new fhirModels.Element(source._status);
        }
        if (source["subject"] !== undefined) {
            this.subject = source.subject.map((x) => new fhirModels.Reference(x));
        }
        if (source["type"] !== undefined) {
            this.type = new fhirModels.CodeableConcept(source.type);
        }
    }
    /**
     * Factory function to create a Account from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new Account(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `Account is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current Account contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
}
exports.Account = Account;
/**
 * Code Values for the Account.status field
 */
var AccountStatusEnum;
(function (AccountStatusEnum) {
    AccountStatusEnum["ACTIVE"] = "active";
    AccountStatusEnum["INACTIVE"] = "inactive";
    AccountStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
    AccountStatusEnum["ON_HOLD"] = "on-hold";
    AccountStatusEnum["UNKNOWN"] = "unknown";
})(AccountStatusEnum = exports.AccountStatusEnum || (exports.AccountStatusEnum = {}));
//# sourceMappingURL=Account.js.map