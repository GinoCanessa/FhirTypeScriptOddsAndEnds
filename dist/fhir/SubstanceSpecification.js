// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: SubstanceSpecification
import * as fhir from '../fhir.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * Moiety, for structural modifications.
 */
export class SubstanceSpecificationMoiety extends fhir.BackboneElement {
    /**
     * Default constructor for SubstanceSpecificationMoiety - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'SubstanceSpecificationMoiety';
        this.__amountIsChoice = true;
        if (source['role']) {
            this.role = new fhir.CodeableConcept(source.role);
        }
        if (source['identifier']) {
            this.identifier = new fhir.Identifier(source.identifier);
        }
        if (source['name']) {
            this.name = new fhir.FhirString({ value: source.name });
        }
        if (source['stereochemistry']) {
            this.stereochemistry = new fhir.CodeableConcept(source.stereochemistry);
        }
        if (source['opticalActivity']) {
            this.opticalActivity = new fhir.CodeableConcept(source.opticalActivity);
        }
        if (source['molecularFormula']) {
            this.molecularFormula = new fhir.FhirString({ value: source.molecularFormula });
        }
        if (source['amount']) {
            this.amount = source.amount;
        }
        else if (source['amountQuantity']) {
            this.amount = new fhir.Quantity(source.amountQuantity);
        }
        else if (source['amountString']) {
            this.amount = new fhir.FhirString({ value: source.amountString });
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["role"]) {
            outcome.issue.push(...this.role.doModelValidation().issue);
        }
        if (this["identifier"]) {
            outcome.issue.push(...this.identifier.doModelValidation().issue);
        }
        if (this["name"]) {
            outcome.issue.push(...this.name.doModelValidation().issue);
        }
        if (this["stereochemistry"]) {
            outcome.issue.push(...this.stereochemistry.doModelValidation().issue);
        }
        if (this["opticalActivity"]) {
            outcome.issue.push(...this.opticalActivity.doModelValidation().issue);
        }
        if (this["molecularFormula"]) {
            outcome.issue.push(...this.molecularFormula.doModelValidation().issue);
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
/**
 * General specifications for this substance, including how it is related to other substances.
 */
export class SubstanceSpecificationProperty extends fhir.BackboneElement {
    /**
     * Default constructor for SubstanceSpecificationProperty - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'SubstanceSpecificationProperty';
        this.__definingSubstanceIsChoice = true;
        this.__amountIsChoice = true;
        if (source['category']) {
            this.category = new fhir.CodeableConcept(source.category);
        }
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        if (source['parameters']) {
            this.parameters = new fhir.FhirString({ value: source.parameters });
        }
        if (source['definingSubstance']) {
            this.definingSubstance = source.definingSubstance;
        }
        else if (source['definingSubstanceReference']) {
            this.definingSubstance = new fhir.Reference(source.definingSubstanceReference);
        }
        else if (source['definingSubstanceCodeableConcept']) {
            this.definingSubstance = new fhir.CodeableConcept(source.definingSubstanceCodeableConcept);
        }
        if (source['amount']) {
            this.amount = source.amount;
        }
        else if (source['amountQuantity']) {
            this.amount = new fhir.Quantity(source.amountQuantity);
        }
        else if (source['amountString']) {
            this.amount = new fhir.FhirString({ value: source.amountString });
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["category"]) {
            outcome.issue.push(...this.category.doModelValidation().issue);
        }
        if (this["code"]) {
            outcome.issue.push(...this.code.doModelValidation().issue);
        }
        if (this["parameters"]) {
            outcome.issue.push(...this.parameters.doModelValidation().issue);
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
/**
 * The molecular weight or weight range (for proteins, polymers or nucleic acids).
 */
export class SubstanceSpecificationStructureIsotopeMolecularWeight extends fhir.BackboneElement {
    /**
     * Default constructor for SubstanceSpecificationStructureIsotopeMolecularWeight - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'SubstanceSpecificationStructureIsotopeMolecularWeight';
        if (source['method']) {
            this.method = new fhir.CodeableConcept(source.method);
        }
        if (source['type']) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        if (source['amount']) {
            this.amount = new fhir.Quantity(source.amount);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["method"]) {
            outcome.issue.push(...this.method.doModelValidation().issue);
        }
        if (this["type"]) {
            outcome.issue.push(...this.type.doModelValidation().issue);
        }
        if (this["amount"]) {
            outcome.issue.push(...this.amount.doModelValidation().issue);
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
/**
 * Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio.
 */
export class SubstanceSpecificationStructureIsotope extends fhir.BackboneElement {
    /**
     * Default constructor for SubstanceSpecificationStructureIsotope - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'SubstanceSpecificationStructureIsotope';
        if (source['identifier']) {
            this.identifier = new fhir.Identifier(source.identifier);
        }
        if (source['name']) {
            this.name = new fhir.CodeableConcept(source.name);
        }
        if (source['substitution']) {
            this.substitution = new fhir.CodeableConcept(source.substitution);
        }
        if (source['halfLife']) {
            this.halfLife = new fhir.Quantity(source.halfLife);
        }
        if (source['molecularWeight']) {
            this.molecularWeight = new fhir.SubstanceSpecificationStructureIsotopeMolecularWeight(source.molecularWeight);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["identifier"]) {
            outcome.issue.push(...this.identifier.doModelValidation().issue);
        }
        if (this["name"]) {
            outcome.issue.push(...this.name.doModelValidation().issue);
        }
        if (this["substitution"]) {
            outcome.issue.push(...this.substitution.doModelValidation().issue);
        }
        if (this["halfLife"]) {
            outcome.issue.push(...this.halfLife.doModelValidation().issue);
        }
        if (this["molecularWeight"]) {
            outcome.issue.push(...this.molecularWeight.doModelValidation().issue);
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
/**
 * Molecular structural representation.
 */
export class SubstanceSpecificationStructureRepresentation extends fhir.BackboneElement {
    /**
     * Default constructor for SubstanceSpecificationStructureRepresentation - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'SubstanceSpecificationStructureRepresentation';
        if (source['type']) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        if (source['representation']) {
            this.representation = new fhir.FhirString({ value: source.representation });
        }
        if (source['attachment']) {
            this.attachment = new fhir.Attachment(source.attachment);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["type"]) {
            outcome.issue.push(...this.type.doModelValidation().issue);
        }
        if (this["representation"]) {
            outcome.issue.push(...this.representation.doModelValidation().issue);
        }
        if (this["attachment"]) {
            outcome.issue.push(...this.attachment.doModelValidation().issue);
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
/**
 * Structural information.
 */
export class SubstanceSpecificationStructure extends fhir.BackboneElement {
    /**
     * Default constructor for SubstanceSpecificationStructure - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'SubstanceSpecificationStructure';
        /**
         * Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio.
         */
        this.isotope = [];
        /**
         * Supporting literature.
         */
        this.source = [];
        /**
         * Molecular structural representation.
         */
        this.representation = [];
        if (source['stereochemistry']) {
            this.stereochemistry = new fhir.CodeableConcept(source.stereochemistry);
        }
        if (source['opticalActivity']) {
            this.opticalActivity = new fhir.CodeableConcept(source.opticalActivity);
        }
        if (source['molecularFormula']) {
            this.molecularFormula = new fhir.FhirString({ value: source.molecularFormula });
        }
        if (source['molecularFormulaByMoiety']) {
            this.molecularFormulaByMoiety = new fhir.FhirString({ value: source.molecularFormulaByMoiety });
        }
        if (source['isotope']) {
            this.isotope = source.isotope.map((x) => new fhir.SubstanceSpecificationStructureIsotope(x));
        }
        if (source['molecularWeight']) {
            this.molecularWeight = new fhir.SubstanceSpecificationStructureIsotopeMolecularWeight(source.molecularWeight);
        }
        if (source['source']) {
            this.source = source.source.map((x) => new fhir.Reference(x));
        }
        if (source['representation']) {
            this.representation = source.representation.map((x) => new fhir.SubstanceSpecificationStructureRepresentation(x));
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["stereochemistry"]) {
            outcome.issue.push(...this.stereochemistry.doModelValidation().issue);
        }
        if (this["opticalActivity"]) {
            outcome.issue.push(...this.opticalActivity.doModelValidation().issue);
        }
        if (this["molecularFormula"]) {
            outcome.issue.push(...this.molecularFormula.doModelValidation().issue);
        }
        if (this["molecularFormulaByMoiety"]) {
            outcome.issue.push(...this.molecularFormulaByMoiety.doModelValidation().issue);
        }
        if (this["isotope"]) {
            this.isotope.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["molecularWeight"]) {
            outcome.issue.push(...this.molecularWeight.doModelValidation().issue);
        }
        if (this["source"]) {
            this.source.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["representation"]) {
            this.representation.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
/**
 * Codes associated with the substance.
 */
export class SubstanceSpecificationCode extends fhir.BackboneElement {
    /**
     * Default constructor for SubstanceSpecificationCode - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'SubstanceSpecificationCode';
        /**
         * Supporting literature.
         */
        this.source = [];
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        if (source['status']) {
            this.status = new fhir.CodeableConcept(source.status);
        }
        if (source['statusDate']) {
            this.statusDate = new fhir.FhirDateTime({ value: source.statusDate });
        }
        if (source['comment']) {
            this.comment = new fhir.FhirString({ value: source.comment });
        }
        if (source['source']) {
            this.source = source.source.map((x) => new fhir.Reference(x));
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["code"]) {
            outcome.issue.push(...this.code.doModelValidation().issue);
        }
        if (this["status"]) {
            outcome.issue.push(...this.status.doModelValidation().issue);
        }
        if (this["statusDate"]) {
            outcome.issue.push(...this.statusDate.doModelValidation().issue);
        }
        if (this["comment"]) {
            outcome.issue.push(...this.comment.doModelValidation().issue);
        }
        if (this["source"]) {
            this.source.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
/**
 * Details of the official nature of this name.
 */
export class SubstanceSpecificationNameOfficial extends fhir.BackboneElement {
    /**
     * Default constructor for SubstanceSpecificationNameOfficial - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'SubstanceSpecificationNameOfficial';
        if (source['authority']) {
            this.authority = new fhir.CodeableConcept(source.authority);
        }
        if (source['status']) {
            this.status = new fhir.CodeableConcept(source.status);
        }
        if (source['date']) {
            this.date = new fhir.FhirDateTime({ value: source.date });
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["authority"]) {
            outcome.issue.push(...this.authority.doModelValidation().issue);
        }
        if (this["status"]) {
            outcome.issue.push(...this.status.doModelValidation().issue);
        }
        if (this["date"]) {
            outcome.issue.push(...this.date.doModelValidation().issue);
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
/**
 * Names applicable to this substance.
 */
export class SubstanceSpecificationName extends fhir.BackboneElement {
    /**
     * Default constructor for SubstanceSpecificationName - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'SubstanceSpecificationName';
        /**
         * Language of the name.
         */
        this.language = [];
        /**
         * The use context of this name for example if there is a different name a drug active ingredient as opposed to a food colour additive.
         */
        this.domain = [];
        /**
         * The jurisdiction where this name applies.
         */
        this.jurisdiction = [];
        /**
         * A synonym of this name.
         */
        this.synonym = [];
        /**
         * A translation for this name.
         */
        this.translation = [];
        /**
         * Details of the official nature of this name.
         */
        this.official = [];
        /**
         * Supporting literature.
         */
        this.source = [];
        if (source['name']) {
            this.name = new fhir.FhirString({ value: source.name });
        }
        else {
            this.name = null;
        }
        if (source['type']) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        if (source['status']) {
            this.status = new fhir.CodeableConcept(source.status);
        }
        if (source['preferred']) {
            this.preferred = new fhir.FhirBoolean({ value: source.preferred });
        }
        if (source['language']) {
            this.language = source.language.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['domain']) {
            this.domain = source.domain.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['jurisdiction']) {
            this.jurisdiction = source.jurisdiction.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['synonym']) {
            this.synonym = source.synonym.map((x) => new fhir.SubstanceSpecificationName(x));
        }
        if (source['translation']) {
            this.translation = source.translation.map((x) => new fhir.SubstanceSpecificationName(x));
        }
        if (source['official']) {
            this.official = source.official.map((x) => new fhir.SubstanceSpecificationNameOfficial(x));
        }
        if (source['source']) {
            this.source = source.source.map((x) => new fhir.Reference(x));
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['name']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property name:fhir.FhirString fhir: SubstanceSpecification.name.name:string", }));
        }
        if (this["name"]) {
            outcome.issue.push(...this.name.doModelValidation().issue);
        }
        if (this["type"]) {
            outcome.issue.push(...this.type.doModelValidation().issue);
        }
        if (this["status"]) {
            outcome.issue.push(...this.status.doModelValidation().issue);
        }
        if (this["preferred"]) {
            outcome.issue.push(...this.preferred.doModelValidation().issue);
        }
        if (this["language"]) {
            this.language.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["domain"]) {
            this.domain.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["jurisdiction"]) {
            this.jurisdiction.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["synonym"]) {
            this.synonym.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["translation"]) {
            this.translation.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["official"]) {
            this.official.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["source"]) {
            this.source.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
/**
 * A link between this substance and another, with details of the relationship.
 */
export class SubstanceSpecificationRelationship extends fhir.BackboneElement {
    /**
     * Default constructor for SubstanceSpecificationRelationship - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'SubstanceSpecificationRelationship';
        this.__substanceIsChoice = true;
        this.__amountIsChoice = true;
        /**
         * Supporting literature.
         */
        this.source = [];
        if (source['substance']) {
            this.substance = source.substance;
        }
        else if (source['substanceReference']) {
            this.substance = new fhir.Reference(source.substanceReference);
        }
        else if (source['substanceCodeableConcept']) {
            this.substance = new fhir.CodeableConcept(source.substanceCodeableConcept);
        }
        if (source['relationship']) {
            this.relationship = new fhir.CodeableConcept(source.relationship);
        }
        if (source['isDefining']) {
            this.isDefining = new fhir.FhirBoolean({ value: source.isDefining });
        }
        if (source['amount']) {
            this.amount = source.amount;
        }
        else if (source['amountQuantity']) {
            this.amount = new fhir.Quantity(source.amountQuantity);
        }
        else if (source['amountRange']) {
            this.amount = new fhir.Range(source.amountRange);
        }
        else if (source['amountRatio']) {
            this.amount = new fhir.Ratio(source.amountRatio);
        }
        else if (source['amountString']) {
            this.amount = new fhir.FhirString({ value: source.amountString });
        }
        if (source['amountRatioLowLimit']) {
            this.amountRatioLowLimit = new fhir.Ratio(source.amountRatioLowLimit);
        }
        if (source['amountType']) {
            this.amountType = new fhir.CodeableConcept(source.amountType);
        }
        if (source['source']) {
            this.source = source.source.map((x) => new fhir.Reference(x));
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["relationship"]) {
            outcome.issue.push(...this.relationship.doModelValidation().issue);
        }
        if (this["isDefining"]) {
            outcome.issue.push(...this.isDefining.doModelValidation().issue);
        }
        if (this["amountRatioLowLimit"]) {
            outcome.issue.push(...this.amountRatioLowLimit.doModelValidation().issue);
        }
        if (this["amountType"]) {
            outcome.issue.push(...this.amountType.doModelValidation().issue);
        }
        if (this["source"]) {
            this.source.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
/**
 * The detailed description of a substance, typically at a level beyond what is used for prescribing.
 */
export class SubstanceSpecification extends fhir.DomainResource {
    /**
     * Default constructor for SubstanceSpecification - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'SubstanceSpecification';
        /**
         * Supporting literature.
         */
        this.source = [];
        /**
         * Moiety, for structural modifications.
         */
        this.moiety = [];
        /**
         * General specifications for this substance, including how it is related to other substances.
         */
        this.property = [];
        /**
         * Codes associated with the substance.
         */
        this.code = [];
        /**
         * Names applicable to this substance.
         */
        this.name = [];
        /**
         * The molecular weight or weight range (for proteins, polymers or nucleic acids).
         */
        this.molecularWeight = [];
        /**
         * A link between this substance and another, with details of the relationship.
         */
        this.relationship = [];
        this.resourceType = 'SubstanceSpecification';
        if (source['identifier']) {
            this.identifier = new fhir.Identifier(source.identifier);
        }
        if (source['type']) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        if (source['status']) {
            this.status = new fhir.CodeableConcept(source.status);
        }
        if (source['domain']) {
            this.domain = new fhir.CodeableConcept(source.domain);
        }
        if (source['description']) {
            this.description = new fhir.FhirString({ value: source.description });
        }
        if (source['source']) {
            this.source = source.source.map((x) => new fhir.Reference(x));
        }
        if (source['comment']) {
            this.comment = new fhir.FhirString({ value: source.comment });
        }
        if (source['moiety']) {
            this.moiety = source.moiety.map((x) => new fhir.SubstanceSpecificationMoiety(x));
        }
        if (source['property']) {
            this.property = source.property.map((x) => new fhir.SubstanceSpecificationProperty(x));
        }
        if (source['referenceInformation']) {
            this.referenceInformation = new fhir.Reference(source.referenceInformation);
        }
        if (source['structure']) {
            this.structure = new fhir.SubstanceSpecificationStructure(source.structure);
        }
        if (source['code']) {
            this.code = source.code.map((x) => new fhir.SubstanceSpecificationCode(x));
        }
        if (source['name']) {
            this.name = source.name.map((x) => new fhir.SubstanceSpecificationName(x));
        }
        if (source['molecularWeight']) {
            this.molecularWeight = source.molecularWeight.map((x) => new fhir.SubstanceSpecificationStructureIsotopeMolecularWeight(x));
        }
        if (source['relationship']) {
            this.relationship = source.relationship.map((x) => new fhir.SubstanceSpecificationRelationship(x));
        }
        if (source['nucleicAcid']) {
            this.nucleicAcid = new fhir.Reference(source.nucleicAcid);
        }
        if (source['polymer']) {
            this.polymer = new fhir.Reference(source.polymer);
        }
        if (source['protein']) {
            this.protein = new fhir.Reference(source.protein);
        }
        if (source['sourceMaterial']) {
            this.sourceMaterial = new fhir.Reference(source.sourceMaterial);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['resourceType']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property resourceType:'SubstanceSpecification' fhir: SubstanceSpecification.resourceType:'SubstanceSpecification'", }));
        }
        if (this["identifier"]) {
            outcome.issue.push(...this.identifier.doModelValidation().issue);
        }
        if (this["type"]) {
            outcome.issue.push(...this.type.doModelValidation().issue);
        }
        if (this["status"]) {
            outcome.issue.push(...this.status.doModelValidation().issue);
        }
        if (this["domain"]) {
            outcome.issue.push(...this.domain.doModelValidation().issue);
        }
        if (this["description"]) {
            outcome.issue.push(...this.description.doModelValidation().issue);
        }
        if (this["source"]) {
            this.source.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["comment"]) {
            outcome.issue.push(...this.comment.doModelValidation().issue);
        }
        if (this["moiety"]) {
            this.moiety.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["property"]) {
            this.property.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["referenceInformation"]) {
            outcome.issue.push(...this.referenceInformation.doModelValidation().issue);
        }
        if (this["structure"]) {
            outcome.issue.push(...this.structure.doModelValidation().issue);
        }
        if (this["code"]) {
            this.code.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["name"]) {
            this.name.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["molecularWeight"]) {
            this.molecularWeight.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["relationship"]) {
            this.relationship.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["nucleicAcid"]) {
            outcome.issue.push(...this.nucleicAcid.doModelValidation().issue);
        }
        if (this["polymer"]) {
            outcome.issue.push(...this.polymer.doModelValidation().issue);
        }
        if (this["protein"]) {
            outcome.issue.push(...this.protein.doModelValidation().issue);
        }
        if (this["sourceMaterial"]) {
            outcome.issue.push(...this.sourceMaterial.doModelValidation().issue);
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
//# sourceMappingURL=SubstanceSpecification.js.map