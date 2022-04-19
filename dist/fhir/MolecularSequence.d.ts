import * as fhir from '../fhir';
/**
 * A sequence that is used as a reference to describe variants that are present in a sequence analyzed.
 */
export declare type IMolecularSequenceReferenceSeq = fhir.IBackboneElement & {
    /**
     * Structural unit composed of a nucleic acid molecule which controls its own replication through the interaction of specific proteins at one or more origins of replication ([SO:0000340](http://www.sequenceontology.org/browser/current_svn/term/SO:0000340)).
     */
    chromosome?: fhir.ICodeableConcept | undefined;
    /**
     * The Genome Build used for reference, following GRCh build versions e.g. 'GRCh 37'.  Version number must be included if a versioned release of a primary build was used.
     */
    genomeBuild?: string | undefined;
    _genomeBuild?: fhir.IFhirElement | undefined;
    /**
     * A relative reference to a DNA strand based on gene orientation. The strand that contains the open reading frame of the gene is the "sense" strand, and the opposite complementary strand is the "antisense" strand.
     */
    orientation?: MolecularSequenceReferenceSeqOrientationEnum | undefined;
    _orientation?: fhir.IFhirElement | undefined;
    /**
     * Reference identifier of reference sequence submitted to NCBI. It must match the type in the MolecularSequence.type field. For example, the prefix, “NG_” identifies reference sequence for genes, “NM_” for messenger RNA transcripts, and “NP_” for amino acid sequences.
     */
    referenceSeqId?: fhir.ICodeableConcept | undefined;
    /**
     * A pointer to another MolecularSequence entity as reference sequence.
     */
    referenceSeqPointer?: fhir.IReference | undefined;
    /**
     * A string like "ACGT".
     */
    referenceSeqString?: string | undefined;
    _referenceSeqString?: fhir.IFhirElement | undefined;
    /**
     * An absolute reference to a strand. The Watson strand is the strand whose 5'-end is on the short arm of the chromosome, and the Crick strand as the one whose 5'-end is on the long arm.
     */
    strand?: MolecularSequenceReferenceSeqStrandEnum | undefined;
    _strand?: fhir.IFhirElement | undefined;
    /**
     * End position of the window on the reference sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    windowEnd?: number | undefined;
    _windowEnd?: fhir.IFhirElement | undefined;
    /**
     * Start position of the window on the reference sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    windowStart?: number | undefined;
    _windowStart?: fhir.IFhirElement | undefined;
};
/**
 * The definition of variant here originates from Sequence ontology ([variant_of](http://www.sequenceontology.org/browser/current_svn/term/variant_of)). This element can represent amino acid or nucleic sequence change(including insertion,deletion,SNP,etc.)  It can represent some complex mutation or segment variation with the assist of CIGAR string.
 */
export declare type IMolecularSequenceVariant = fhir.IBackboneElement & {
    /**
     * Extended CIGAR string for aligning the sequence with reference bases. See detailed documentation [here](http://support.illumina.com/help/SequencingAnalysisWorkflow/Content/Vault/Informatics/Sequencing_Analysis/CASAVA/swSEQ_mCA_ExtendedCIGARFormat.htm).
     */
    cigar?: string | undefined;
    _cigar?: fhir.IFhirElement | undefined;
    /**
     * End position of the variant on the reference sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    end?: number | undefined;
    _end?: fhir.IFhirElement | undefined;
    /**
     * An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)).  Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the observed  sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end.
     */
    observedAllele?: string | undefined;
    _observedAllele?: fhir.IFhirElement | undefined;
    /**
     * An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)). Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the reference sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end.
     */
    referenceAllele?: string | undefined;
    _referenceAllele?: fhir.IFhirElement | undefined;
    /**
     * Start position of the variant on the  reference sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    start?: number | undefined;
    _start?: fhir.IFhirElement | undefined;
    /**
     * A pointer to an Observation containing variant information.
     */
    variantPointer?: fhir.IReference | undefined;
};
/**
 * Receiver Operator Characteristic (ROC) Curve  to give sensitivity/specificity tradeoff.
 */
export declare type IMolecularSequenceQualityRoc = fhir.IBackboneElement & {
    /**
     * Calculated fScore if the GQ score threshold was set to "score" field value.
     */
    fMeasure?: number[] | undefined;
    _fMeasure?: fhir.IFhirElement[] | undefined;
    /**
     * The number of false negatives if the GQ score threshold was set to "score" field value.
     */
    numFN?: number[] | undefined;
    _numFN?: fhir.IFhirElement[] | undefined;
    /**
     * The number of false positives if the GQ score threshold was set to "score" field value.
     */
    numFP?: number[] | undefined;
    _numFP?: fhir.IFhirElement[] | undefined;
    /**
     * The number of true positives if the GQ score threshold was set to "score" field value.
     */
    numTP?: number[] | undefined;
    _numTP?: fhir.IFhirElement[] | undefined;
    /**
     * Calculated precision if the GQ score threshold was set to "score" field value.
     */
    precision?: number[] | undefined;
    _precision?: fhir.IFhirElement[] | undefined;
    /**
     * Invidual data point representing the GQ (genotype quality) score threshold.
     */
    score?: number[] | undefined;
    _score?: fhir.IFhirElement[] | undefined;
    /**
     * Calculated sensitivity if the GQ score threshold was set to "score" field value.
     */
    sensitivity?: number[] | undefined;
    _sensitivity?: fhir.IFhirElement[] | undefined;
};
/**
 * An experimental feature attribute that defines the quality of the feature in a quantitative way, such as a phred quality score ([SO:0001686](http://www.sequenceontology.org/browser/current_svn/term/SO:0001686)).
 */
export declare type IMolecularSequenceQuality = fhir.IBackboneElement & {
    /**
     * End position of the sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    end?: number | undefined;
    _end?: fhir.IFhirElement | undefined;
    /**
     * Harmonic mean of Recall and Precision, computed as: 2 * precision * recall / (precision + recall).
     */
    fScore?: number | undefined;
    _fScore?: fhir.IFhirElement | undefined;
    /**
     * The number of false positives where the non-REF alleles in the Truth and Query Call Sets match (i.e. cases where the truth is 1/1 and the query is 0/1 or similar).
     */
    gtFP?: number | undefined;
    _gtFP?: fhir.IFhirElement | undefined;
    /**
     * Which method is used to get sequence quality.
     */
    method?: fhir.ICodeableConcept | undefined;
    /**
     * QUERY.TP / (QUERY.TP + QUERY.FP).
     */
    precision?: number | undefined;
    _precision?: fhir.IFhirElement | undefined;
    /**
     * False positives, i.e. the number of sites in the Query Call Set for which there is no path through the Truth Call Set that is consistent with this site. Sites with correct variant but incorrect genotype are counted here.
     */
    queryFP?: number | undefined;
    _queryFP?: fhir.IFhirElement | undefined;
    /**
     * True positives, from the perspective of the query data, i.e. the number of sites in the Query Call Set for which there are paths through the Truth Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event.
     */
    queryTP?: number | undefined;
    _queryTP?: fhir.IFhirElement | undefined;
    /**
     * TRUTH.TP / (TRUTH.TP + TRUTH.FN).
     */
    recall?: number | undefined;
    _recall?: fhir.IFhirElement | undefined;
    /**
     * Receiver Operator Characteristic (ROC) Curve  to give sensitivity/specificity tradeoff.
     */
    roc?: fhir.IMolecularSequenceQualityRoc | undefined;
    /**
     * The score of an experimentally derived feature such as a p-value ([SO:0001685](http://www.sequenceontology.org/browser/current_svn/term/SO:0001685)).
     */
    score?: fhir.IQuantity | undefined;
    /**
     * Gold standard sequence used for comparing against.
     */
    standardSequence?: fhir.ICodeableConcept | undefined;
    /**
     * Start position of the sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    start?: number | undefined;
    _start?: fhir.IFhirElement | undefined;
    /**
     * False negatives, i.e. the number of sites in the Truth Call Set for which there is no path through the Query Call Set that is consistent with all of the alleles at this site, or sites for which there is an inaccurate genotype call for the event. Sites with correct variant but incorrect genotype are counted here.
     */
    truthFN?: number | undefined;
    _truthFN?: fhir.IFhirElement | undefined;
    /**
     * True positives, from the perspective of the truth data, i.e. the number of sites in the Truth Call Set for which there are paths through the Query Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event.
     */
    truthTP?: number | undefined;
    _truthTP?: fhir.IFhirElement | undefined;
    /**
     * INDEL / SNP / Undefined variant.
     */
    type: MolecularSequenceQualityTypeEnum | null;
    _type?: fhir.IFhirElement | undefined;
};
/**
 * Configurations of the external repository. The repository shall store target's observedSeq or records related with target's observedSeq.
 */
export declare type IMolecularSequenceRepository = fhir.IBackboneElement & {
    /**
     * Id of the variant in this external repository. The server will understand how to use this id to call for more info about datasets in external repository.
     */
    datasetId?: string | undefined;
    _datasetId?: fhir.IFhirElement | undefined;
    /**
     * URI of an external repository which contains further details about the genetics data.
     */
    name?: string | undefined;
    _name?: fhir.IFhirElement | undefined;
    /**
     * Id of the read in this external repository.
     */
    readsetId?: string | undefined;
    _readsetId?: fhir.IFhirElement | undefined;
    /**
     * Click and see / RESTful API / Need login to see / RESTful API with authentication / Other ways to see resource.
     */
    type: MolecularSequenceRepositoryTypeEnum | null;
    _type?: fhir.IFhirElement | undefined;
    /**
     * URI of an external repository which contains further details about the genetics data.
     */
    url?: string | undefined;
    _url?: fhir.IFhirElement | undefined;
    /**
     * Id of the variantset in this external repository. The server will understand how to use this id to call for more info about variantsets in external repository.
     */
    variantsetId?: string | undefined;
    _variantsetId?: fhir.IFhirElement | undefined;
};
/**
 * Structural variant outer.
 */
export declare type IMolecularSequenceStructureVariantOuter = fhir.IBackboneElement & {
    /**
     * Structural variant outer end. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    end?: number | undefined;
    _end?: fhir.IFhirElement | undefined;
    /**
     * Structural variant outer start. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    start?: number | undefined;
    _start?: fhir.IFhirElement | undefined;
};
/**
 * Structural variant inner.
 */
export declare type IMolecularSequenceStructureVariantInner = fhir.IBackboneElement & {
    /**
     * Structural variant inner end. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    end?: number | undefined;
    _end?: fhir.IFhirElement | undefined;
    /**
     * Structural variant inner start. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    start?: number | undefined;
    _start?: fhir.IFhirElement | undefined;
};
/**
 * Information about chromosome structure variation.
 */
export declare type IMolecularSequenceStructureVariant = fhir.IBackboneElement & {
    /**
     * Used to indicate if the outer and inner start-end values have the same meaning.
     */
    exact?: boolean | undefined;
    _exact?: fhir.IFhirElement | undefined;
    /**
     * Structural variant inner.
     */
    inner?: fhir.IMolecularSequenceStructureVariantInner | undefined;
    /**
     * Length of the variant chromosome.
     */
    length?: number | undefined;
    _length?: fhir.IFhirElement | undefined;
    /**
     * Structural variant outer.
     */
    outer?: fhir.IMolecularSequenceStructureVariantOuter | undefined;
    /**
     * Information about chromosome structure variation DNA change type.
     */
    variantType?: fhir.ICodeableConcept | undefined;
};
/**
 * Raw data describing a biological sequence.
 */
export declare type IMolecularSequence = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "MolecularSequence";
    /**
     * Whether the sequence is numbered starting at 0 (0-based numbering or coordinates, inclusive start, exclusive end) or starting at 1 (1-based numbering, inclusive start and inclusive end).
     */
    coordinateSystem: number | null;
    _coordinateSystem?: fhir.IFhirElement | undefined;
    /**
     * The method for sequencing, for example, chip information.
     */
    device?: fhir.IReference | undefined;
    /**
     * A unique identifier for this particular sequence instance. This is a FHIR-defined id.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Sequence that was observed. It is the result marked by referenceSeq along with variant records on referenceSeq. This shall start from referenceSeq.windowStart and end by referenceSeq.windowEnd.
     */
    observedSeq?: string | undefined;
    _observedSeq?: fhir.IFhirElement | undefined;
    /**
     * The patient whose sequencing results are described by this resource.
     */
    patient?: fhir.IReference | undefined;
    /**
     * The organization or lab that should be responsible for this result.
     */
    performer?: fhir.IReference | undefined;
    /**
     * Pointer to next atomic sequence which at most contains one variant.
     */
    pointer?: fhir.IReference[] | undefined;
    /**
     * An experimental feature attribute that defines the quality of the feature in a quantitative way, such as a phred quality score ([SO:0001686](http://www.sequenceontology.org/browser/current_svn/term/SO:0001686)).
     */
    quality?: fhir.IMolecularSequenceQuality[] | undefined;
    /**
     * The number of copies of the sequence of interest. (RNASeq).
     */
    quantity?: fhir.IQuantity | undefined;
    /**
     * Coverage (read depth or depth) is the average number of reads representing a given nucleotide in the reconstructed sequence.
     */
    readCoverage?: number | undefined;
    _readCoverage?: fhir.IFhirElement | undefined;
    /**
     * A sequence that is used as a reference to describe variants that are present in a sequence analyzed.
     */
    referenceSeq?: fhir.IMolecularSequenceReferenceSeq | undefined;
    /**
     * Configurations of the external repository. The repository shall store target's observedSeq or records related with target's observedSeq.
     */
    repository?: fhir.IMolecularSequenceRepository[] | undefined;
    /**
     * Specimen used for sequencing.
     */
    specimen?: fhir.IReference | undefined;
    /**
     * Information about chromosome structure variation.
     */
    structureVariant?: fhir.IMolecularSequenceStructureVariant[] | undefined;
    /**
     * Amino Acid Sequence/ DNA Sequence / RNA Sequence.
     */
    type?: MolecularSequenceTypeEnum | undefined;
    _type?: fhir.IFhirElement | undefined;
    /**
     * The definition of variant here originates from Sequence ontology ([variant_of](http://www.sequenceontology.org/browser/current_svn/term/variant_of)). This element can represent amino acid or nucleic sequence change(including insertion,deletion,SNP,etc.)  It can represent some complex mutation or segment variation with the assist of CIGAR string.
     */
    variant?: fhir.IMolecularSequenceVariant[] | undefined;
};
/**
 * A sequence that is used as a reference to describe variants that are present in a sequence analyzed.
 */
export declare class MolecularSequenceReferenceSeq extends fhir.BackboneElement implements fhir.IMolecularSequenceReferenceSeq {
    /**
     * Structural unit composed of a nucleic acid molecule which controls its own replication through the interaction of specific proteins at one or more origins of replication ([SO:0000340](http://www.sequenceontology.org/browser/current_svn/term/SO:0000340)).
     */
    chromosome?: fhir.CodeableConcept | undefined;
    /**
     * The Genome Build used for reference, following GRCh build versions e.g. 'GRCh 37'.  Version number must be included if a versioned release of a primary build was used.
     */
    genomeBuild?: string | undefined;
    _genomeBuild?: fhir.FhirElement | undefined;
    /**
     * A relative reference to a DNA strand based on gene orientation. The strand that contains the open reading frame of the gene is the "sense" strand, and the opposite complementary strand is the "antisense" strand.
     */
    orientation?: MolecularSequenceReferenceSeqOrientationEnum | undefined;
    _orientation?: fhir.FhirElement | undefined;
    /**
     * Reference identifier of reference sequence submitted to NCBI. It must match the type in the MolecularSequence.type field. For example, the prefix, “NG_” identifies reference sequence for genes, “NM_” for messenger RNA transcripts, and “NP_” for amino acid sequences.
     */
    referenceSeqId?: fhir.CodeableConcept | undefined;
    /**
     * A pointer to another MolecularSequence entity as reference sequence.
     */
    referenceSeqPointer?: fhir.Reference | undefined;
    /**
     * A string like "ACGT".
     */
    referenceSeqString?: string | undefined;
    _referenceSeqString?: fhir.FhirElement | undefined;
    /**
     * An absolute reference to a strand. The Watson strand is the strand whose 5'-end is on the short arm of the chromosome, and the Crick strand as the one whose 5'-end is on the long arm.
     */
    strand?: MolecularSequenceReferenceSeqStrandEnum | undefined;
    _strand?: fhir.FhirElement | undefined;
    /**
     * End position of the window on the reference sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    windowEnd?: number | undefined;
    _windowEnd?: fhir.FhirElement | undefined;
    /**
     * Start position of the window on the reference sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    windowStart?: number | undefined;
    _windowStart?: fhir.FhirElement | undefined;
    /**
     * Default constructor for MolecularSequenceReferenceSeq - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMolecularSequenceReferenceSeq>);
    /**
     * Check if the current MolecularSequenceReferenceSeq contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MolecularSequenceReferenceSeq from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMolecularSequenceReferenceSeq): MolecularSequenceReferenceSeq;
}
/**
 * The definition of variant here originates from Sequence ontology ([variant_of](http://www.sequenceontology.org/browser/current_svn/term/variant_of)). This element can represent amino acid or nucleic sequence change(including insertion,deletion,SNP,etc.)  It can represent some complex mutation or segment variation with the assist of CIGAR string.
 */
export declare class MolecularSequenceVariant extends fhir.BackboneElement implements fhir.IMolecularSequenceVariant {
    /**
     * Extended CIGAR string for aligning the sequence with reference bases. See detailed documentation [here](http://support.illumina.com/help/SequencingAnalysisWorkflow/Content/Vault/Informatics/Sequencing_Analysis/CASAVA/swSEQ_mCA_ExtendedCIGARFormat.htm).
     */
    cigar?: string | undefined;
    _cigar?: fhir.FhirElement | undefined;
    /**
     * End position of the variant on the reference sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    end?: number | undefined;
    _end?: fhir.FhirElement | undefined;
    /**
     * An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)).  Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the observed  sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end.
     */
    observedAllele?: string | undefined;
    _observedAllele?: fhir.FhirElement | undefined;
    /**
     * An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)). Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the reference sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end.
     */
    referenceAllele?: string | undefined;
    _referenceAllele?: fhir.FhirElement | undefined;
    /**
     * Start position of the variant on the  reference sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    start?: number | undefined;
    _start?: fhir.FhirElement | undefined;
    /**
     * A pointer to an Observation containing variant information.
     */
    variantPointer?: fhir.Reference | undefined;
    /**
     * Default constructor for MolecularSequenceVariant - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMolecularSequenceVariant>);
    /**
     * Check if the current MolecularSequenceVariant contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MolecularSequenceVariant from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMolecularSequenceVariant): MolecularSequenceVariant;
}
/**
 * Receiver Operator Characteristic (ROC) Curve  to give sensitivity/specificity tradeoff.
 */
export declare class MolecularSequenceQualityRoc extends fhir.BackboneElement implements fhir.IMolecularSequenceQualityRoc {
    /**
     * Calculated fScore if the GQ score threshold was set to "score" field value.
     */
    fMeasure?: number[] | undefined;
    _fMeasure?: fhir.FhirElement[] | undefined;
    /**
     * The number of false negatives if the GQ score threshold was set to "score" field value.
     */
    numFN?: number[] | undefined;
    _numFN?: fhir.FhirElement[] | undefined;
    /**
     * The number of false positives if the GQ score threshold was set to "score" field value.
     */
    numFP?: number[] | undefined;
    _numFP?: fhir.FhirElement[] | undefined;
    /**
     * The number of true positives if the GQ score threshold was set to "score" field value.
     */
    numTP?: number[] | undefined;
    _numTP?: fhir.FhirElement[] | undefined;
    /**
     * Calculated precision if the GQ score threshold was set to "score" field value.
     */
    precision?: number[] | undefined;
    _precision?: fhir.FhirElement[] | undefined;
    /**
     * Invidual data point representing the GQ (genotype quality) score threshold.
     */
    score?: number[] | undefined;
    _score?: fhir.FhirElement[] | undefined;
    /**
     * Calculated sensitivity if the GQ score threshold was set to "score" field value.
     */
    sensitivity?: number[] | undefined;
    _sensitivity?: fhir.FhirElement[] | undefined;
    /**
     * Default constructor for MolecularSequenceQualityRoc - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMolecularSequenceQualityRoc>);
    /**
     * Check if the current MolecularSequenceQualityRoc contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MolecularSequenceQualityRoc from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMolecularSequenceQualityRoc): MolecularSequenceQualityRoc;
}
/**
 * An experimental feature attribute that defines the quality of the feature in a quantitative way, such as a phred quality score ([SO:0001686](http://www.sequenceontology.org/browser/current_svn/term/SO:0001686)).
 */
export declare class MolecularSequenceQuality extends fhir.BackboneElement implements fhir.IMolecularSequenceQuality {
    /**
     * End position of the sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    end?: number | undefined;
    _end?: fhir.FhirElement | undefined;
    /**
     * Harmonic mean of Recall and Precision, computed as: 2 * precision * recall / (precision + recall).
     */
    fScore?: number | undefined;
    _fScore?: fhir.FhirElement | undefined;
    /**
     * The number of false positives where the non-REF alleles in the Truth and Query Call Sets match (i.e. cases where the truth is 1/1 and the query is 0/1 or similar).
     */
    gtFP?: number | undefined;
    _gtFP?: fhir.FhirElement | undefined;
    /**
     * Which method is used to get sequence quality.
     */
    method?: fhir.CodeableConcept | undefined;
    /**
     * QUERY.TP / (QUERY.TP + QUERY.FP).
     */
    precision?: number | undefined;
    _precision?: fhir.FhirElement | undefined;
    /**
     * False positives, i.e. the number of sites in the Query Call Set for which there is no path through the Truth Call Set that is consistent with this site. Sites with correct variant but incorrect genotype are counted here.
     */
    queryFP?: number | undefined;
    _queryFP?: fhir.FhirElement | undefined;
    /**
     * True positives, from the perspective of the query data, i.e. the number of sites in the Query Call Set for which there are paths through the Truth Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event.
     */
    queryTP?: number | undefined;
    _queryTP?: fhir.FhirElement | undefined;
    /**
     * TRUTH.TP / (TRUTH.TP + TRUTH.FN).
     */
    recall?: number | undefined;
    _recall?: fhir.FhirElement | undefined;
    /**
     * Receiver Operator Characteristic (ROC) Curve  to give sensitivity/specificity tradeoff.
     */
    roc?: fhir.MolecularSequenceQualityRoc | undefined;
    /**
     * The score of an experimentally derived feature such as a p-value ([SO:0001685](http://www.sequenceontology.org/browser/current_svn/term/SO:0001685)).
     */
    score?: fhir.Quantity | undefined;
    /**
     * Gold standard sequence used for comparing against.
     */
    standardSequence?: fhir.CodeableConcept | undefined;
    /**
     * Start position of the sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    start?: number | undefined;
    _start?: fhir.FhirElement | undefined;
    /**
     * False negatives, i.e. the number of sites in the Truth Call Set for which there is no path through the Query Call Set that is consistent with all of the alleles at this site, or sites for which there is an inaccurate genotype call for the event. Sites with correct variant but incorrect genotype are counted here.
     */
    truthFN?: number | undefined;
    _truthFN?: fhir.FhirElement | undefined;
    /**
     * True positives, from the perspective of the truth data, i.e. the number of sites in the Truth Call Set for which there are paths through the Query Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event.
     */
    truthTP?: number | undefined;
    _truthTP?: fhir.FhirElement | undefined;
    /**
     * INDEL / SNP / Undefined variant.
     */
    type: MolecularSequenceQualityTypeEnum | null;
    _type?: fhir.FhirElement | undefined;
    /**
     * Default constructor for MolecularSequenceQuality - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMolecularSequenceQuality>);
    /**
     * Check if the current MolecularSequenceQuality contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MolecularSequenceQuality from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMolecularSequenceQuality): MolecularSequenceQuality;
}
/**
 * Configurations of the external repository. The repository shall store target's observedSeq or records related with target's observedSeq.
 */
export declare class MolecularSequenceRepository extends fhir.BackboneElement implements fhir.IMolecularSequenceRepository {
    /**
     * Id of the variant in this external repository. The server will understand how to use this id to call for more info about datasets in external repository.
     */
    datasetId?: string | undefined;
    _datasetId?: fhir.FhirElement | undefined;
    /**
     * URI of an external repository which contains further details about the genetics data.
     */
    name?: string | undefined;
    _name?: fhir.FhirElement | undefined;
    /**
     * Id of the read in this external repository.
     */
    readsetId?: string | undefined;
    _readsetId?: fhir.FhirElement | undefined;
    /**
     * Click and see / RESTful API / Need login to see / RESTful API with authentication / Other ways to see resource.
     */
    type: MolecularSequenceRepositoryTypeEnum | null;
    _type?: fhir.FhirElement | undefined;
    /**
     * URI of an external repository which contains further details about the genetics data.
     */
    url?: string | undefined;
    _url?: fhir.FhirElement | undefined;
    /**
     * Id of the variantset in this external repository. The server will understand how to use this id to call for more info about variantsets in external repository.
     */
    variantsetId?: string | undefined;
    _variantsetId?: fhir.FhirElement | undefined;
    /**
     * Default constructor for MolecularSequenceRepository - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMolecularSequenceRepository>);
    /**
     * Check if the current MolecularSequenceRepository contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MolecularSequenceRepository from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMolecularSequenceRepository): MolecularSequenceRepository;
}
/**
 * Structural variant outer.
 */
export declare class MolecularSequenceStructureVariantOuter extends fhir.BackboneElement implements fhir.IMolecularSequenceStructureVariantOuter {
    /**
     * Structural variant outer end. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    end?: number | undefined;
    _end?: fhir.FhirElement | undefined;
    /**
     * Structural variant outer start. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    start?: number | undefined;
    _start?: fhir.FhirElement | undefined;
    /**
     * Default constructor for MolecularSequenceStructureVariantOuter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMolecularSequenceStructureVariantOuter>);
    /**
     * Check if the current MolecularSequenceStructureVariantOuter contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MolecularSequenceStructureVariantOuter from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMolecularSequenceStructureVariantOuter): MolecularSequenceStructureVariantOuter;
}
/**
 * Structural variant inner.
 */
export declare class MolecularSequenceStructureVariantInner extends fhir.BackboneElement implements fhir.IMolecularSequenceStructureVariantInner {
    /**
     * Structural variant inner end. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    end?: number | undefined;
    _end?: fhir.FhirElement | undefined;
    /**
     * Structural variant inner start. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    start?: number | undefined;
    _start?: fhir.FhirElement | undefined;
    /**
     * Default constructor for MolecularSequenceStructureVariantInner - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMolecularSequenceStructureVariantInner>);
    /**
     * Check if the current MolecularSequenceStructureVariantInner contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MolecularSequenceStructureVariantInner from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMolecularSequenceStructureVariantInner): MolecularSequenceStructureVariantInner;
}
/**
 * Information about chromosome structure variation.
 */
export declare class MolecularSequenceStructureVariant extends fhir.BackboneElement implements fhir.IMolecularSequenceStructureVariant {
    /**
     * Used to indicate if the outer and inner start-end values have the same meaning.
     */
    exact?: boolean | undefined;
    _exact?: fhir.FhirElement | undefined;
    /**
     * Structural variant inner.
     */
    inner?: fhir.MolecularSequenceStructureVariantInner | undefined;
    /**
     * Length of the variant chromosome.
     */
    length?: number | undefined;
    _length?: fhir.FhirElement | undefined;
    /**
     * Structural variant outer.
     */
    outer?: fhir.MolecularSequenceStructureVariantOuter | undefined;
    /**
     * Information about chromosome structure variation DNA change type.
     */
    variantType?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for MolecularSequenceStructureVariant - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMolecularSequenceStructureVariant>);
    /**
     * Check if the current MolecularSequenceStructureVariant contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MolecularSequenceStructureVariant from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMolecularSequenceStructureVariant): MolecularSequenceStructureVariant;
}
/**
 * Raw data describing a biological sequence.
 */
export declare class MolecularSequence extends fhir.DomainResource implements fhir.IMolecularSequence {
    /**
     * Resource Type Name
     */
    resourceType: "MolecularSequence";
    /**
     * Whether the sequence is numbered starting at 0 (0-based numbering or coordinates, inclusive start, exclusive end) or starting at 1 (1-based numbering, inclusive start and inclusive end).
     */
    coordinateSystem: number | null;
    _coordinateSystem?: fhir.FhirElement | undefined;
    /**
     * The method for sequencing, for example, chip information.
     */
    device?: fhir.Reference | undefined;
    /**
     * A unique identifier for this particular sequence instance. This is a FHIR-defined id.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Sequence that was observed. It is the result marked by referenceSeq along with variant records on referenceSeq. This shall start from referenceSeq.windowStart and end by referenceSeq.windowEnd.
     */
    observedSeq?: string | undefined;
    _observedSeq?: fhir.FhirElement | undefined;
    /**
     * The patient whose sequencing results are described by this resource.
     */
    patient?: fhir.Reference | undefined;
    /**
     * The organization or lab that should be responsible for this result.
     */
    performer?: fhir.Reference | undefined;
    /**
     * Pointer to next atomic sequence which at most contains one variant.
     */
    pointer?: fhir.Reference[] | undefined;
    /**
     * An experimental feature attribute that defines the quality of the feature in a quantitative way, such as a phred quality score ([SO:0001686](http://www.sequenceontology.org/browser/current_svn/term/SO:0001686)).
     */
    quality?: fhir.MolecularSequenceQuality[] | undefined;
    /**
     * The number of copies of the sequence of interest. (RNASeq).
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * Coverage (read depth or depth) is the average number of reads representing a given nucleotide in the reconstructed sequence.
     */
    readCoverage?: number | undefined;
    _readCoverage?: fhir.FhirElement | undefined;
    /**
     * A sequence that is used as a reference to describe variants that are present in a sequence analyzed.
     */
    referenceSeq?: fhir.MolecularSequenceReferenceSeq | undefined;
    /**
     * Configurations of the external repository. The repository shall store target's observedSeq or records related with target's observedSeq.
     */
    repository?: fhir.MolecularSequenceRepository[] | undefined;
    /**
     * Specimen used for sequencing.
     */
    specimen?: fhir.Reference | undefined;
    /**
     * Information about chromosome structure variation.
     */
    structureVariant?: fhir.MolecularSequenceStructureVariant[] | undefined;
    /**
     * Amino Acid Sequence/ DNA Sequence / RNA Sequence.
     */
    type?: MolecularSequenceTypeEnum | undefined;
    _type?: fhir.FhirElement | undefined;
    /**
     * The definition of variant here originates from Sequence ontology ([variant_of](http://www.sequenceontology.org/browser/current_svn/term/variant_of)). This element can represent amino acid or nucleic sequence change(including insertion,deletion,SNP,etc.)  It can represent some complex mutation or segment variation with the assist of CIGAR string.
     */
    variant?: fhir.MolecularSequenceVariant[] | undefined;
    /**
     * Default constructor for MolecularSequence - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IMolecularSequence>);
    /**
     * Check if the current MolecularSequence contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a MolecularSequence from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IMolecularSequence): MolecularSequence;
}
/**
 * Code Values for the MolecularSequence.referenceSeq.orientation field
 */
export declare enum MolecularSequenceReferenceSeqOrientationEnum {
    SENSE = "sense",
    ANTISENSE = "antisense"
}
/**
 * Code Values for the MolecularSequence.referenceSeq.strand field
 */
export declare enum MolecularSequenceReferenceSeqStrandEnum {
    WATSON = "watson",
    CRICK = "crick"
}
/**
 * Code Values for the MolecularSequence.quality.type field
 */
export declare enum MolecularSequenceQualityTypeEnum {
    INDEL = "indel",
    SNP = "snp",
    UNKNOWN = "unknown"
}
/**
 * Code Values for the MolecularSequence.repository.type field
 */
export declare enum MolecularSequenceRepositoryTypeEnum {
    DIRECTLINK = "directlink",
    OPENAPI = "openapi",
    LOGIN = "login",
    OAUTH = "oauth",
    OTHER = "other"
}
/**
 * Code Values for the MolecularSequence.type field
 */
export declare enum MolecularSequenceTypeEnum {
    AA = "aa",
    DNA = "dna",
    RNA = "rna"
}
//# sourceMappingURL=MolecularSequence.d.ts.map