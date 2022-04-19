import * as fhir from '../fhir';
/**
 * The linkages between sugar residues will also be captured.
 */
export declare type ISubstanceNucleicAcidSubunitLinkage = fhir.IBackboneElement & {
    /**
     * The entity that links the sugar residues together should also be captured for nearly all naturally occurring nucleic acid the linkage is a phosphate group. For many synthetic oligonucleotides phosphorothioate linkages are often seen. Linkage connectivity is assumed to be 3’-5’. If the linkage is either 3’-3’ or 5’-5’ this should be specified.
     */
    connectivity?: string | undefined;
    _connectivity?: fhir.IFhirElement | undefined;
    /**
     * Each linkage will be registered as a fragment and have an ID.
     */
    identifier?: fhir.IIdentifier | undefined;
    /**
     * Each linkage will be registered as a fragment and have at least one name. A single name shall be assigned to each linkage.
     */
    name?: string | undefined;
    _name?: fhir.IFhirElement | undefined;
    /**
     * Residues shall be captured as described in 5.3.6.8.3.
     */
    residueSite?: string | undefined;
    _residueSite?: fhir.IFhirElement | undefined;
};
/**
 * 5.3.6.8.1 Sugar ID (Mandatory).
 */
export declare type ISubstanceNucleicAcidSubunitSugar = fhir.IBackboneElement & {
    /**
     * The Substance ID of the sugar or sugar-like component that make up the nucleotide.
     */
    identifier?: fhir.IIdentifier | undefined;
    /**
     * The name of the sugar or sugar-like component that make up the nucleotide.
     */
    name?: string | undefined;
    _name?: fhir.IFhirElement | undefined;
    /**
     * The residues that contain a given sugar will be captured. The order of given residues will be captured in the 5‘-3‘direction consistent with the base sequences listed above.
     */
    residueSite?: string | undefined;
    _residueSite?: fhir.IFhirElement | undefined;
};
/**
 * Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; subunits that have identical sequences will be repeated multiple times.
 */
export declare type ISubstanceNucleicAcidSubunit = fhir.IBackboneElement & {
    /**
     * The nucleotide present at the 5’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the first position in the sequence. A separate representation would be redundant.
     */
    fivePrime?: fhir.ICodeableConcept | undefined;
    /**
     * The length of the sequence shall be captured.
     */
    length?: number | undefined;
    _length?: fhir.IFhirElement | undefined;
    /**
     * The linkages between sugar residues will also be captured.
     */
    linkage?: fhir.ISubstanceNucleicAcidSubunitLinkage[] | undefined;
    /**
     * Actual nucleotide sequence notation from 5' to 3' end using standard single letter codes. In addition to the base sequence, sugar and type of phosphate or non-phosphate linkage should also be captured.
     */
    sequence?: string | undefined;
    _sequence?: fhir.IFhirElement | undefined;
    /**
     * (TBC).
     */
    sequenceAttachment?: fhir.IAttachment | undefined;
    /**
     * Index of linear sequences of nucleic acids in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts.
     */
    subunit?: number | undefined;
    _subunit?: fhir.IFhirElement | undefined;
    /**
     * 5.3.6.8.1 Sugar ID (Mandatory).
     */
    sugar?: fhir.ISubstanceNucleicAcidSubunitSugar[] | undefined;
    /**
     * The nucleotide present at the 3’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the last position in the sequence. A separate representation would be redundant.
     */
    threePrime?: fhir.ICodeableConcept | undefined;
};
/**
 * Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction.
 */
export declare type ISubstanceNucleicAcid = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "SubstanceNucleicAcid";
    /**
     * The area of hybridisation shall be described if applicable for double stranded RNA or DNA. The number associated with the subunit followed by the number associated to the residue shall be specified in increasing order. The underscore “” shall be used as separator as follows: “Subunitnumber Residue”.
     */
    areaOfHybridisation?: string | undefined;
    _areaOfHybridisation?: fhir.IFhirElement | undefined;
    /**
     * The number of linear sequences of nucleotides linked through phosphodiester bonds shall be described. Subunits would be strands of nucleic acids that are tightly associated typically through Watson-Crick base pairing. NOTE: If not specified in the reference source, the assumption is that there is 1 subunit.
     */
    numberOfSubunits?: number | undefined;
    _numberOfSubunits?: fhir.IFhirElement | undefined;
    /**
     * (TBC).
     */
    oligoNucleotideType?: fhir.ICodeableConcept | undefined;
    /**
     * The type of the sequence shall be specified based on a controlled vocabulary.
     */
    sequenceType?: fhir.ICodeableConcept | undefined;
    /**
     * Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; subunits that have identical sequences will be repeated multiple times.
     */
    subunit?: fhir.ISubstanceNucleicAcidSubunit[] | undefined;
};
/**
 * The linkages between sugar residues will also be captured.
 */
export declare class SubstanceNucleicAcidSubunitLinkage extends fhir.BackboneElement implements fhir.ISubstanceNucleicAcidSubunitLinkage {
    /**
     * The entity that links the sugar residues together should also be captured for nearly all naturally occurring nucleic acid the linkage is a phosphate group. For many synthetic oligonucleotides phosphorothioate linkages are often seen. Linkage connectivity is assumed to be 3’-5’. If the linkage is either 3’-3’ or 5’-5’ this should be specified.
     */
    connectivity?: string | undefined;
    _connectivity?: fhir.FhirElement | undefined;
    /**
     * Each linkage will be registered as a fragment and have an ID.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Each linkage will be registered as a fragment and have at least one name. A single name shall be assigned to each linkage.
     */
    name?: string | undefined;
    _name?: fhir.FhirElement | undefined;
    /**
     * Residues shall be captured as described in 5.3.6.8.3.
     */
    residueSite?: string | undefined;
    _residueSite?: fhir.FhirElement | undefined;
    /**
     * Default constructor for SubstanceNucleicAcidSubunitLinkage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISubstanceNucleicAcidSubunitLinkage>);
    /**
     * Check if the current SubstanceNucleicAcidSubunitLinkage contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a SubstanceNucleicAcidSubunitLinkage from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ISubstanceNucleicAcidSubunitLinkage): SubstanceNucleicAcidSubunitLinkage;
}
/**
 * 5.3.6.8.1 Sugar ID (Mandatory).
 */
export declare class SubstanceNucleicAcidSubunitSugar extends fhir.BackboneElement implements fhir.ISubstanceNucleicAcidSubunitSugar {
    /**
     * The Substance ID of the sugar or sugar-like component that make up the nucleotide.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * The name of the sugar or sugar-like component that make up the nucleotide.
     */
    name?: string | undefined;
    _name?: fhir.FhirElement | undefined;
    /**
     * The residues that contain a given sugar will be captured. The order of given residues will be captured in the 5‘-3‘direction consistent with the base sequences listed above.
     */
    residueSite?: string | undefined;
    _residueSite?: fhir.FhirElement | undefined;
    /**
     * Default constructor for SubstanceNucleicAcidSubunitSugar - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISubstanceNucleicAcidSubunitSugar>);
    /**
     * Check if the current SubstanceNucleicAcidSubunitSugar contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a SubstanceNucleicAcidSubunitSugar from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ISubstanceNucleicAcidSubunitSugar): SubstanceNucleicAcidSubunitSugar;
}
/**
 * Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; subunits that have identical sequences will be repeated multiple times.
 */
export declare class SubstanceNucleicAcidSubunit extends fhir.BackboneElement implements fhir.ISubstanceNucleicAcidSubunit {
    /**
     * The nucleotide present at the 5’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the first position in the sequence. A separate representation would be redundant.
     */
    fivePrime?: fhir.CodeableConcept | undefined;
    /**
     * The length of the sequence shall be captured.
     */
    length?: number | undefined;
    _length?: fhir.FhirElement | undefined;
    /**
     * The linkages between sugar residues will also be captured.
     */
    linkage?: fhir.SubstanceNucleicAcidSubunitLinkage[] | undefined;
    /**
     * Actual nucleotide sequence notation from 5' to 3' end using standard single letter codes. In addition to the base sequence, sugar and type of phosphate or non-phosphate linkage should also be captured.
     */
    sequence?: string | undefined;
    _sequence?: fhir.FhirElement | undefined;
    /**
     * (TBC).
     */
    sequenceAttachment?: fhir.Attachment | undefined;
    /**
     * Index of linear sequences of nucleic acids in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts.
     */
    subunit?: number | undefined;
    _subunit?: fhir.FhirElement | undefined;
    /**
     * 5.3.6.8.1 Sugar ID (Mandatory).
     */
    sugar?: fhir.SubstanceNucleicAcidSubunitSugar[] | undefined;
    /**
     * The nucleotide present at the 3’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the last position in the sequence. A separate representation would be redundant.
     */
    threePrime?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for SubstanceNucleicAcidSubunit - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISubstanceNucleicAcidSubunit>);
    /**
     * Check if the current SubstanceNucleicAcidSubunit contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a SubstanceNucleicAcidSubunit from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ISubstanceNucleicAcidSubunit): SubstanceNucleicAcidSubunit;
}
/**
 * Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction.
 */
export declare class SubstanceNucleicAcid extends fhir.DomainResource implements fhir.ISubstanceNucleicAcid {
    /**
     * Resource Type Name
     */
    resourceType: "SubstanceNucleicAcid";
    /**
     * The area of hybridisation shall be described if applicable for double stranded RNA or DNA. The number associated with the subunit followed by the number associated to the residue shall be specified in increasing order. The underscore “” shall be used as separator as follows: “Subunitnumber Residue”.
     */
    areaOfHybridisation?: string | undefined;
    _areaOfHybridisation?: fhir.FhirElement | undefined;
    /**
     * The number of linear sequences of nucleotides linked through phosphodiester bonds shall be described. Subunits would be strands of nucleic acids that are tightly associated typically through Watson-Crick base pairing. NOTE: If not specified in the reference source, the assumption is that there is 1 subunit.
     */
    numberOfSubunits?: number | undefined;
    _numberOfSubunits?: fhir.FhirElement | undefined;
    /**
     * (TBC).
     */
    oligoNucleotideType?: fhir.CodeableConcept | undefined;
    /**
     * The type of the sequence shall be specified based on a controlled vocabulary.
     */
    sequenceType?: fhir.CodeableConcept | undefined;
    /**
     * Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; subunits that have identical sequences will be repeated multiple times.
     */
    subunit?: fhir.SubstanceNucleicAcidSubunit[] | undefined;
    /**
     * Default constructor for SubstanceNucleicAcid - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISubstanceNucleicAcid>);
    /**
     * Check if the current SubstanceNucleicAcid contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a SubstanceNucleicAcid from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ISubstanceNucleicAcid): SubstanceNucleicAcid;
}
//# sourceMappingURL=SubstanceNucleicAcid.d.ts.map