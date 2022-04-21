import { Coding } from '../fhir.js';
/**
 * This value set includes all the codes in HL7 V2 table 0074.
 */
export declare const DiagnosticServiceSectionsValueSet: {
    /**
     * Code: AU
     */
    readonly Audiology: Coding;
    /**
     * Code: BG
     */
    readonly BloodGases: Coding;
    /**
     * Code: BLB
     */
    readonly BloodBank: Coding;
    /**
     * Code: CG
     */
    readonly Cytogenetics: Coding;
    /**
     * Code: CH
     */
    readonly Chemistry: Coding;
    /**
     * Code: CP
     */
    readonly Cytopathology: Coding;
    /**
     * Code: CT
     */
    readonly CATScan: Coding;
    /**
     * Code: CTH
     */
    readonly CardiacCatheterization: Coding;
    /**
     * Code: CUS
     */
    readonly CardiacUltrasound: Coding;
    /**
     * Code: EC
     */
    readonly ElectrocardiacEGEKGEECHolter: Coding;
    /**
     * Code: EN
     */
    readonly ElectroneuroEEGEMGEPPSG: Coding;
    /**
     * Code: GE
     */
    readonly Genetics: Coding;
    /**
     * Code: HM
     */
    readonly Hematology: Coding;
    /**
     * Code: ICU
     */
    readonly BedsideICUMonitoring: Coding;
    /**
     * Code: IMM
     */
    readonly Immunology: Coding;
    /**
     * Code: LAB
     */
    readonly Laboratory: Coding;
    /**
     * Code: MB
     */
    readonly Microbiology: Coding;
    /**
     * Code: MCB
     */
    readonly Mycobacteriology: Coding;
    /**
     * Code: MYC
     */
    readonly Mycology: Coding;
    /**
     * Code: NMR
     */
    readonly NuclearMagneticResonance: Coding;
    /**
     * Code: NMS
     */
    readonly NuclearMedicineScan: Coding;
    /**
     * Code: NRS
     */
    readonly NursingServiceMeasures: Coding;
    /**
     * Code: OSL
     */
    readonly OutsideLab: Coding;
    /**
     * Code: OT
     */
    readonly OccupationalTherapy: Coding;
    /**
     * Code: OTH
     */
    readonly Other: Coding;
    /**
     * Code: OUS
     */
    readonly OBUltrasound: Coding;
    /**
     * Code: PF
     */
    readonly PulmonaryFunction: Coding;
    /**
     * Code: PHR
     */
    readonly Pharmacy: Coding;
    /**
     * Code: PHY
     */
    readonly PhysicianHxDxAdmissionNoteEtc: Coding;
    /**
     * Code: PT
     */
    readonly PhysicalTherapy: Coding;
    /**
     * Code: RAD
     */
    readonly Radiology: Coding;
    /**
     * Code: RC
     */
    readonly RespiratoryCareTherapy: Coding;
    /**
     * Code: RT
     */
    readonly RadiationTherapy: Coding;
    /**
     * Code: RUS
     */
    readonly RadiologyUltrasound: Coding;
    /**
     * Code: RX
     */
    readonly Radiograph: Coding;
    /**
     * Code: SP
     */
    readonly SurgicalPathology: Coding;
    /**
     * Code: SR
     */
    readonly Serology: Coding;
    /**
     * Code: TX
     */
    readonly Toxicology: Coding;
    /**
     * Code: VR
     */
    readonly Virology: Coding;
    /**
     * Code: VUS
     */
    readonly VascularUltrasound: Coding;
    /**
     * Code: XRC
     */
    readonly Cineradiograph: Coding;
};
/**
 * This value set includes all the codes in HL7 V2 table 0074.
 */
export declare type DiagnosticServiceSectionsValueSetType = typeof DiagnosticServiceSectionsValueSet;
/**
 * This value set includes all the codes in HL7 V2 table 0074.
 */
export declare enum DiagnosticServiceSectionsValueSetEnum {
    /**
     * Code: AU
     */
    Audiology = "AU",
    /**
     * Code: BG
     */
    BloodGases = "BG",
    /**
     * Code: BLB
     */
    BloodBank = "BLB",
    /**
     * Code: CG
     */
    Cytogenetics = "CG",
    /**
     * Code: CH
     */
    Chemistry = "CH",
    /**
     * Code: CP
     */
    Cytopathology = "CP",
    /**
     * Code: CT
     */
    CATScan = "CT",
    /**
     * Code: CTH
     */
    CardiacCatheterization = "CTH",
    /**
     * Code: CUS
     */
    CardiacUltrasound = "CUS",
    /**
     * Code: EC
     */
    ElectrocardiacEGEKGEECHolter = "EC",
    /**
     * Code: EN
     */
    ElectroneuroEEGEMGEPPSG = "EN",
    /**
     * Code: GE
     */
    Genetics = "GE",
    /**
     * Code: HM
     */
    Hematology = "HM",
    /**
     * Code: ICU
     */
    BedsideICUMonitoring = "ICU",
    /**
     * Code: IMM
     */
    Immunology = "IMM",
    /**
     * Code: LAB
     */
    Laboratory = "LAB",
    /**
     * Code: MB
     */
    Microbiology = "MB",
    /**
     * Code: MCB
     */
    Mycobacteriology = "MCB",
    /**
     * Code: MYC
     */
    Mycology = "MYC",
    /**
     * Code: NMR
     */
    NuclearMagneticResonance = "NMR",
    /**
     * Code: NMS
     */
    NuclearMedicineScan = "NMS",
    /**
     * Code: NRS
     */
    NursingServiceMeasures = "NRS",
    /**
     * Code: OSL
     */
    OutsideLab = "OSL",
    /**
     * Code: OT
     */
    OccupationalTherapy = "OT",
    /**
     * Code: OTH
     */
    Other = "OTH",
    /**
     * Code: OUS
     */
    OBUltrasound = "OUS",
    /**
     * Code: PF
     */
    PulmonaryFunction = "PF",
    /**
     * Code: PHR
     */
    Pharmacy = "PHR",
    /**
     * Code: PHY
     */
    PhysicianHxDxAdmissionNoteEtc = "PHY",
    /**
     * Code: PT
     */
    PhysicalTherapy = "PT",
    /**
     * Code: RAD
     */
    Radiology = "RAD",
    /**
     * Code: RC
     */
    RespiratoryCareTherapy = "RC",
    /**
     * Code: RT
     */
    RadiationTherapy = "RT",
    /**
     * Code: RUS
     */
    RadiologyUltrasound = "RUS",
    /**
     * Code: RX
     */
    Radiograph = "RX",
    /**
     * Code: SP
     */
    SurgicalPathology = "SP",
    /**
     * Code: SR
     */
    Serology = "SR",
    /**
     * Code: TX
     */
    Toxicology = "TX",
    /**
     * Code: VR
     */
    Virology = "VR",
    /**
     * Code: VUS
     */
    VascularUltrasound = "VUS",
    /**
     * Code: XRC
     */
    Cineradiograph = "XRC"
}
//# sourceMappingURL=DiagnosticServiceSectionsValueSet.d.ts.map