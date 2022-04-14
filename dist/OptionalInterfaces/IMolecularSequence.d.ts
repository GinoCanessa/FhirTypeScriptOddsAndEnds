import * as fhirInterfaces from '../optionalinterfaces';
/**
 * A sequence that is used as a reference to describe variants that are present in a sequence analyzed.
 */
export interface IMolecularSequenceReferenceSeq extends fhirInterfaces.IBackboneElement {
    /**
     * Structural unit composed of a nucleic acid molecule which controls its own replication through the interaction of specific proteins at one or more origins of replication ([SO:0000340](http://www.sequenceontology.org/browser/current_svn/term/SO:0000340)).
     */
    chromosome?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The Genome Build used for reference, following GRCh build versions e.g. 'GRCh 37'.  Version number must be included if a versioned release of a primary build was used.
     */
    genomeBuild?: string | undefined;
    _genomeBuild?: fhirInterfaces.IElement | undefined;
    /**
     * A relative reference to a DNA strand based on gene orientation. The strand that contains the open reading frame of the gene is the "sense" strand, and the opposite complementary strand is the "antisense" strand.
     */
    orientation?: MolecularSequenceReferenceSeqOrientationEnum | undefined;
    _orientation?: fhirInterfaces.IElement | undefined;
    /**
     * Reference identifier of reference sequence submitted to NCBI. It must match the type in the MolecularSequence.type field. For example, the prefix, “NG_” identifies reference sequence for genes, “NM_” for messenger RNA transcripts, and “NP_” for amino acid sequences.
     */
    referenceSeqId?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * A pointer to another MolecularSequence entity as reference sequence.
     */
    referenceSeqPointer?: fhirInterfaces.IReference | undefined;
    /**
     * A string like "ACGT".
     */
    referenceSeqString?: string | undefined;
    _referenceSeqString?: fhirInterfaces.IElement | undefined;
    /**
     * An absolute reference to a strand. The Watson strand is the strand whose 5'-end is on the short arm of the chromosome, and the Crick strand as the one whose 5'-end is on the long arm.
     */
    strand?: MolecularSequenceReferenceSeqStrandEnum | undefined;
    _strand?: fhirInterfaces.IElement | undefined;
    /**
     * End position of the window on the reference sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    windowEnd?: number | undefined;
    _windowEnd?: fhirInterfaces.IElement | undefined;
    /**
     * Start position of the window on the reference sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    windowStart?: number | undefined;
    _windowStart?: fhirInterfaces.IElement | undefined;
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
 * The definition of variant here originates from Sequence ontology ([variant_of](http://www.sequenceontology.org/browser/current_svn/term/variant_of)). This element can represent amino acid or nucleic sequence change(including insertion,deletion,SNP,etc.)  It can represent some complex mutation or segment variation with the assist of CIGAR string.
 */
export interface IMolecularSequenceVariant extends fhirInterfaces.IBackboneElement {
    /**
     * Extended CIGAR string for aligning the sequence with reference bases. See detailed documentation [here](http://support.illumina.com/help/SequencingAnalysisWorkflow/Content/Vault/Informatics/Sequencing_Analysis/CASAVA/swSEQ_mCA_ExtendedCIGARFormat.htm).
     */
    cigar?: string | undefined;
    _cigar?: fhirInterfaces.IElement | undefined;
    /**
     * End position of the variant on the reference sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    end?: number | undefined;
    _end?: fhirInterfaces.IElement | undefined;
    /**
     * An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)).  Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the observed  sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end.
     */
    observedAllele?: string | undefined;
    _observedAllele?: fhirInterfaces.IElement | undefined;
    /**
     * An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)). Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the reference sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end.
     */
    referenceAllele?: string | undefined;
    _referenceAllele?: fhirInterfaces.IElement | undefined;
    /**
     * Start position of the variant on the  reference sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    start?: number | undefined;
    _start?: fhirInterfaces.IElement | undefined;
    /**
     * A pointer to an Observation containing variant information.
     */
    variantPointer?: fhirInterfaces.IReference | undefined;
}
/**
 * Receiver Operator Characteristic (ROC) Curve  to give sensitivity/specificity tradeoff.
 */
export interface IMolecularSequenceQualityRoc extends fhirInterfaces.IBackboneElement {
    /**
     * Calculated fScore if the GQ score threshold was set to "score" field value.
     */
    fMeasure?: number[] | undefined;
    _fMeasure?: fhirInterfaces.IElement[] | undefined;
    /**
     * The number of false negatives if the GQ score threshold was set to "score" field value.
     */
    numFN?: number[] | undefined;
    _numFN?: fhirInterfaces.IElement[] | undefined;
    /**
     * The number of false positives if the GQ score threshold was set to "score" field value.
     */
    numFP?: number[] | undefined;
    _numFP?: fhirInterfaces.IElement[] | undefined;
    /**
     * The number of true positives if the GQ score threshold was set to "score" field value.
     */
    numTP?: number[] | undefined;
    _numTP?: fhirInterfaces.IElement[] | undefined;
    /**
     * Calculated precision if the GQ score threshold was set to "score" field value.
     */
    precision?: number[] | undefined;
    _precision?: fhirInterfaces.IElement[] | undefined;
    /**
     * Invidual data point representing the GQ (genotype quality) score threshold.
     */
    score?: number[] | undefined;
    _score?: fhirInterfaces.IElement[] | undefined;
    /**
     * Calculated sensitivity if the GQ score threshold was set to "score" field value.
     */
    sensitivity?: number[] | undefined;
    _sensitivity?: fhirInterfaces.IElement[] | undefined;
}
/**
 * An experimental feature attribute that defines the quality of the feature in a quantitative way, such as a phred quality score ([SO:0001686](http://www.sequenceontology.org/browser/current_svn/term/SO:0001686)).
 */
export interface IMolecularSequenceQuality extends fhirInterfaces.IBackboneElement {
    /**
     * End position of the sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    end?: number | undefined;
    _end?: fhirInterfaces.IElement | undefined;
    /**
     * Harmonic mean of Recall and Precision, computed as: 2 * precision * recall / (precision + recall).
     */
    fScore?: number | undefined;
    _fScore?: fhirInterfaces.IElement | undefined;
    /**
     * The number of false positives where the non-REF alleles in the Truth and Query Call Sets match (i.e. cases where the truth is 1/1 and the query is 0/1 or similar).
     */
    gtFP?: number | undefined;
    _gtFP?: fhirInterfaces.IElement | undefined;
    /**
     * Which method is used to get sequence quality.
     */
    method?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * QUERY.TP / (QUERY.TP + QUERY.FP).
     */
    precision?: number | undefined;
    _precision?: fhirInterfaces.IElement | undefined;
    /**
     * False positives, i.e. the number of sites in the Query Call Set for which there is no path through the Truth Call Set that is consistent with this site. Sites with correct variant but incorrect genotype are counted here.
     */
    queryFP?: number | undefined;
    _queryFP?: fhirInterfaces.IElement | undefined;
    /**
     * True positives, from the perspective of the query data, i.e. the number of sites in the Query Call Set for which there are paths through the Truth Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event.
     */
    queryTP?: number | undefined;
    _queryTP?: fhirInterfaces.IElement | undefined;
    /**
     * TRUTH.TP / (TRUTH.TP + TRUTH.FN).
     */
    recall?: number | undefined;
    _recall?: fhirInterfaces.IElement | undefined;
    /**
     * Receiver Operator Characteristic (ROC) Curve  to give sensitivity/specificity tradeoff.
     */
    roc?: fhirInterfaces.IMolecularSequenceQualityRoc | undefined;
    /**
     * The score of an experimentally derived feature such as a p-value ([SO:0001685](http://www.sequenceontology.org/browser/current_svn/term/SO:0001685)).
     */
    score?: fhirInterfaces.IQuantity | undefined;
    /**
     * Gold standard sequence used for comparing against.
     */
    standardSequence?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Start position of the sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    start?: number | undefined;
    _start?: fhirInterfaces.IElement | undefined;
    /**
     * False negatives, i.e. the number of sites in the Truth Call Set for which there is no path through the Query Call Set that is consistent with all of the alleles at this site, or sites for which there is an inaccurate genotype call for the event. Sites with correct variant but incorrect genotype are counted here.
     */
    truthFN?: number | undefined;
    _truthFN?: fhirInterfaces.IElement | undefined;
    /**
     * True positives, from the perspective of the truth data, i.e. the number of sites in the Truth Call Set for which there are paths through the Query Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event.
     */
    truthTP?: number | undefined;
    _truthTP?: fhirInterfaces.IElement | undefined;
    /**
     * INDEL / SNP / Undefined variant.
     */
    type?: MolecularSequenceQualityTypeEnum | undefined;
    _type?: fhirInterfaces.IElement | undefined;
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
 * Configurations of the external repository. The repository shall store target's observedSeq or records related with target's observedSeq.
 */
export interface IMolecularSequenceRepository extends fhirInterfaces.IBackboneElement {
    /**
     * Id of the variant in this external repository. The server will understand how to use this id to call for more info about datasets in external repository.
     */
    datasetId?: string | undefined;
    _datasetId?: fhirInterfaces.IElement | undefined;
    /**
     * URI of an external repository which contains further details about the genetics data.
     */
    name?: string | undefined;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * Id of the read in this external repository.
     */
    readsetId?: string | undefined;
    _readsetId?: fhirInterfaces.IElement | undefined;
    /**
     * Click and see / RESTful API / Need login to see / RESTful API with authentication / Other ways to see resource.
     */
    type?: MolecularSequenceRepositoryTypeEnum | undefined;
    _type?: fhirInterfaces.IElement | undefined;
    /**
     * URI of an external repository which contains further details about the genetics data.
     */
    url?: string | undefined;
    _url?: fhirInterfaces.IElement | undefined;
    /**
     * Id of the variantset in this external repository. The server will understand how to use this id to call for more info about variantsets in external repository.
     */
    variantsetId?: string | undefined;
    _variantsetId?: fhirInterfaces.IElement | undefined;
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
 * Structural variant outer.
 */
export interface IMolecularSequenceStructureVariantOuter extends fhirInterfaces.IBackboneElement {
    /**
     * Structural variant outer end. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    end?: number | undefined;
    _end?: fhirInterfaces.IElement | undefined;
    /**
     * Structural variant outer start. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    start?: number | undefined;
    _start?: fhirInterfaces.IElement | undefined;
}
/**
 * Structural variant inner.
 */
export interface IMolecularSequenceStructureVariantInner extends fhirInterfaces.IBackboneElement {
    /**
     * Structural variant inner end. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
     */
    end?: number | undefined;
    _end?: fhirInterfaces.IElement | undefined;
    /**
     * Structural variant inner start. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
     */
    start?: number | undefined;
    _start?: fhirInterfaces.IElement | undefined;
}
/**
 * Information about chromosome structure variation.
 */
export interface IMolecularSequenceStructureVariant extends fhirInterfaces.IBackboneElement {
    /**
     * Used to indicate if the outer and inner start-end values have the same meaning.
     */
    exact?: boolean | undefined;
    _exact?: fhirInterfaces.IElement | undefined;
    /**
     * Structural variant inner.
     */
    inner?: fhirInterfaces.IMolecularSequenceStructureVariantInner | undefined;
    /**
     * Length of the variant chromosome.
     */
    length?: number | undefined;
    _length?: fhirInterfaces.IElement | undefined;
    /**
     * Structural variant outer.
     */
    outer?: fhirInterfaces.IMolecularSequenceStructureVariantOuter | undefined;
    /**
     * Information about chromosome structure variation DNA change type.
     */
    variantType?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Raw data describing a biological sequence.
 */
export interface IMolecularSequence extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "MolecularSequence";
    /**
     * Whether the sequence is numbered starting at 0 (0-based numbering or coordinates, inclusive start, exclusive end) or starting at 1 (1-based numbering, inclusive start and inclusive end).
     */
    coordinateSystem?: number | undefined;
    _coordinateSystem?: fhirInterfaces.IElement | undefined;
    /**
     * The method for sequencing, for example, chip information.
     */
    device?: fhirInterfaces.IReference | undefined;
    /**
     * A unique identifier for this particular sequence instance. This is a FHIR-defined id.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * Sequence that was observed. It is the result marked by referenceSeq along with variant records on referenceSeq. This shall start from referenceSeq.windowStart and end by referenceSeq.windowEnd.
     */
    observedSeq?: string | undefined;
    _observedSeq?: fhirInterfaces.IElement | undefined;
    /**
     * The patient whose sequencing results are described by this resource.
     */
    patient?: fhirInterfaces.IReference | undefined;
    /**
     * The organization or lab that should be responsible for this result.
     */
    performer?: fhirInterfaces.IReference | undefined;
    /**
     * Pointer to next atomic sequence which at most contains one variant.
     */
    pointer?: fhirInterfaces.IReference[] | undefined;
    /**
     * An experimental feature attribute that defines the quality of the feature in a quantitative way, such as a phred quality score ([SO:0001686](http://www.sequenceontology.org/browser/current_svn/term/SO:0001686)).
     */
    quality?: fhirInterfaces.IMolecularSequenceQuality[] | undefined;
    /**
     * The number of copies of the sequence of interest. (RNASeq).
     */
    quantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * Coverage (read depth or depth) is the average number of reads representing a given nucleotide in the reconstructed sequence.
     */
    readCoverage?: number | undefined;
    _readCoverage?: fhirInterfaces.IElement | undefined;
    /**
     * A sequence that is used as a reference to describe variants that are present in a sequence analyzed.
     */
    referenceSeq?: fhirInterfaces.IMolecularSequenceReferenceSeq | undefined;
    /**
     * Configurations of the external repository. The repository shall store target's observedSeq or records related with target's observedSeq.
     */
    repository?: fhirInterfaces.IMolecularSequenceRepository[] | undefined;
    /**
     * Specimen used for sequencing.
     */
    specimen?: fhirInterfaces.IReference | undefined;
    /**
     * Information about chromosome structure variation.
     */
    structureVariant?: fhirInterfaces.IMolecularSequenceStructureVariant[] | undefined;
    /**
     * Amino Acid Sequence/ DNA Sequence / RNA Sequence.
     */
    type?: MolecularSequenceTypeEnum | undefined;
    _type?: fhirInterfaces.IElement | undefined;
    /**
     * The definition of variant here originates from Sequence ontology ([variant_of](http://www.sequenceontology.org/browser/current_svn/term/variant_of)). This element can represent amino acid or nucleic sequence change(including insertion,deletion,SNP,etc.)  It can represent some complex mutation or segment variation with the assist of CIGAR string.
     */
    variant?: fhirInterfaces.IMolecularSequenceVariant[] | undefined;
}
/**
 * Code Values for the MolecularSequence.type field
 */
export declare enum MolecularSequenceTypeEnum {
    AA = "aa",
    DNA = "dna",
    RNA = "rna"
}
//# sourceMappingURL=IMolecularSequence.d.ts.map