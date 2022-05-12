/**
 *  A role of a place that further classifies the setting (e.g., accident site, road side, work site, community location) in which services are delivered.
 */
export declare enum V3ServiceDeliveryLocationRoleTypeValueSetEnum {
    /**
     * _DedicatedClinicalLocationRoleType: A role of a place that further classifies the clinical setting (e.g., cardiology clinic, primary care clinic, rehabilitation hospital, skilled nursing facility) in which care is delivered during an encounter.
     */
    DedicatedClinicalLocationRoleType = "_DedicatedClinicalLocationRoleType",
    /**
     * _DedicatedNonClinicalLocationRoleType: A role of a place that further classifies a setting that is intended to house the provision of non-clinical services.
     */
    DedicatedNonClinicalLocationRoleType = "_DedicatedNonClinicalLocationRoleType",
    /**
     * _DedicatedServiceDeliveryLocationRoleType: A role of a place that further classifies a setting that is intended to house the provision of services.
     */
    DedicatedServiceDeliveryLocationRoleType = "_DedicatedServiceDeliveryLocationRoleType",
    /**
     * _IncidentalServiceDeliveryLocationRoleType: IncidentalServiceDeliveryLocationRoleType
     */
    IncidentalServiceDeliveryLocationRoleType = "_IncidentalServiceDeliveryLocationRoleType",
    /**
     * ACC: Location of an accident where healthcare service was delivered, such as a roadside.
     */
    AccidentSite = "ACC",
    /**
     * ALL: Allergy clinic
     */
    AllergyClinic = "ALL",
    /**
     * AMB: Location (mobile) where healthcare service was delivered, identified specifically as an ambulance.
     */
    Ambulance = "AMB",
    /**
     * AMPUT: Amputee clinic
     */
    AmputeeClinic = "AMPUT",
    /**
     * BMTC: Bone marrow transplant clinic
     */
    BoneMarrowTransplantClinic = "BMTC",
    /**
     * BMTU: Bone marrow transplant unit
     */
    BoneMarrowTransplantUnit = "BMTU",
    /**
     * BREAST: Breast clinic
     */
    BreastClinic = "BREAST",
    /**
     * CANC: Child and adolescent neurology clinic
     */
    ChildAndAdolescentNeurologyClinic = "CANC",
    /**
     * CAPC: Child and adolescent psychiatry clinic
     */
    ChildAndAdolescentPsychiatryClinic = "CAPC",
    /**
     * CARD: Ambulatory Health Care Facilities; Clinic/Center; Rehabilitation: Cardiac Facilities
     */
    AmbulatoryHealthCareFacilitiesClinicCenterRehabilitationCardiacFacilities = "CARD",
    /**
     * CATH: Cardiac catheterization lab
     */
    CardiacCatheterizationLab = "CATH",
    /**
     * CCU: Coronary care unit
     */
    CoronaryCareUnit = "CCU",
    /**
     * CHEST: A specialty unit in hospital that focuses on chronic respirator patients and pulmonary failure
     */
    ChestUnit = "CHEST",
    /**
     * CHR: (1) A hospital including a physical plant and personnel that provides multidisciplinary diagnosis and treatment for diseases that have one or more of the following characteristics: is permanent; leaves residual disability; is caused by nonreversible pathological alteration; requires special training of the patient for rehabilitation; and/or may be expected to require a long period of supervision or care. In addition, patients require the safety, security, and shelter of these specialized inpatient or partial hospitalization settings. (2) A hospital that provides medical and skilled nursing services to patients with long-term illnesses who are not in an acute phase but who require an intensity of services not available in nursing homes
     */
    ChronicCareFacility = "CHR",
    /**
     * COAG: Coagulation clinic
     */
    CoagulationClinic = "COAG",
    /**
     * COMM: Community location where healthcare is delivered.
     */
    CommunityLocation = "COMM",
    /**
     * CRS: Colon and rectal surgery clinic
     */
    ColonAndRectalSurgeryClinic = "CRS",
    /**
     * CSC: Description: A location that plays the role of delivering services which may include providing front-line services to the population of a defined geographic area such as: healthcare services and social services, preventive or curative, rehabilitation or reintegration.
     */
    CommunityServiceCenter = "CSC",
    /**
     * CVDX: A practice setting where cardiovascular diagnostic procedures or therapeutic interventions are performed (e.g., cardiac catheterization lab, echocardiography suite)
     */
    CardiovascularDiagnosticsOrTherapeuticsUnit = "CVDX",
    /**
     * DADDR: Location address where medical supplies were transported to for use.
     */
    DeliveryAddress = "DADDR",
    /**
     * DERM: Dermatology clinic
     */
    DermatologyClinic = "DERM",
    /**
     * DX: A practice setting where diagnostic procedures or therapeutic interventions are performed
     */
    DiagnosticsOrTherapeuticsUnit = "DX",
    /**
     * ECHO: Echocardiography lab
     */
    EchocardiographyLab = "ECHO",
    /**
     * ENDO: Endocrinology clinic
     */
    EndocrinologyClinic = "ENDO",
    /**
     * ENDOS: (X12N 261QD0000N)
     */
    EndoscopyLab = "ENDOS",
    /**
     * ENT: Otorhinolaryngology clinic
     */
    OtorhinolaryngologyClinic = "ENT",
    /**
     * EPIL: Epilepsy unit
     */
    EpilepsyUnit = "EPIL",
    /**
     * ER: The section of a health care facility for providing rapid treatment to victims of sudden illness or trauma.
     */
    EmergencyRoom = "ER",
    /**
     * ETU: Emergency trauma unit
     */
    EmergencyTraumaUnit = "ETU",
    /**
     * FMC: Family medicine clinic
     */
    FamilyMedicineClinic = "FMC",
    /**
     * GACH: (X12N 282N00000N)
     */
    HospitalsGeneralAcuteCareHospital = "GACH",
    /**
     * GI: Gastroenterology clinic
     */
    GastroenterologyClinic = "GI",
    /**
     * GIDX: A practice setting where GI procedures (such as endoscopies) are performed
     */
    GastroenterologyDiagnosticsOrTherapeuticsLab = "GIDX",
    /**
     * GIM: General internal medicine clinic
     */
    GeneralInternalMedicineClinic = "GIM",
    /**
     * GYN: Gynecology clinic
     */
    GynecologyClinic = "GYN",
    /**
     * HAND: Hand clinic
     */
    HandClinic = "HAND",
    /**
     * HD: Hemodialysis unit
     */
    HemodialysisUnit = "HD",
    /**
     * HEM: Hematology clinic
     */
    HematologyClinic = "HEM",
    /**
     * HLAB: Description: A location that plays the role of delivering services which may include tests done based on clinical specimens to get health information about a patient as pertaining to the diagnosis, treatment and prevention of disease.  Hospital laboratories may be further divided into specialized units such as Anatomic Pathology, Microbiology, and Biochemistry.
     */
    HospitalLaboratory = "HLAB",
    /**
     * HOSP: An acute care institution that provides medical, surgical, or psychiatric care and treatment for the sick or the injured.
     */
    Hospital = "HOSP",
    /**
     * HRAD: Description: A location that plays the role of delivering services which may include the branch of medicine that uses ionizing and non-ionizing radiation to diagnose and treat diseases.  The radiology unit may be further divided into subspecialties such as Imaging, Cardiovascular, Thoracic, and Ultrasound.
     */
    RadiologyUnit = "HRAD",
    /**
     * HTN: Hypertension clinic
     */
    HypertensionClinic = "HTN",
    /**
     * HU: Hospital unit
     */
    HospitalUnit = "HU",
    /**
     * HUSCS: Description: A location that plays the role of delivering services which may include collecting specimens and/or samples from patients for laboratory testing purposes, but does not perform any tests or analysis functions.
     */
    SpecimenCollectionSite = "HUSCS",
    /**
     * ICU: Intensive care unit
     */
    IntensiveCareUnit = "ICU",
    /**
     * IEC: Focuses on assessing disability
     */
    ImpairmentEvaluationCenter = "IEC",
    /**
     * INFD: Infectious disease clinic
     */
    InfectiousDiseaseClinic = "INFD",
    /**
     * INLAB: Description: A location that plays the role of delivering services which may include tests are done on clinical specimens to get health information about a patient pertaining to the diagnosis, treatment, and prevention of disease for a hospital visit longer than one day.
     */
    InpatientLaboratory = "INLAB",
    /**
     * INPHARM: Description: A location that plays the role of delivering services which may include providing judicious, safe, efficacious, appropriate and cost effective use of medicines for treatment of patients for visits longer than one day. The distinction between inpatient pharmacies and retail (or outpatient) pharmacies is that they are part of a patient's continuity of care while staying in the hospital.
     */
    InpatientPharmacy = "INPHARM",
    /**
     * INV: Infertility clinic
     */
    InfertilityClinic = "INV",
    /**
     * LYMPH: Lympedema clinic
     */
    LympedemaClinic = "LYMPH",
    /**
     * MBL: Description: A location that plays the role of delivering services which include biochemistry, hematology, microbiology, immunochemistry, and toxicology.
     */
    MedicalLaboratory = "MBL",
    /**
     * MGEN: Medical genetics clinic
     */
    MedicalGeneticsClinic = "MGEN",
    /**
     * MHSP: A health care facility operated by the Department of Defense or other military operation.
     */
    MilitaryHospital = "MHSP",
    /**
     * MOBL: Location (mobile) where healthcare service was delivered.
     */
    MobileUnit = "MOBL",
    /**
     * NCCF: Nursing or custodial care facility
     */
    NursingOrCustodialCareFacility = "NCCF",
    /**
     * NCCS: Neurology critical care and stroke unit
     */
    NeurologyCriticalCareAndStrokeUnit = "NCCS",
    /**
     * NEPH: Nephrology clinic
     */
    NephrologyClinic = "NEPH",
    /**
     * NEUR: Neurology clinic
     */
    NeurologyClinic = "NEUR",
    /**
     * NS: Neurosurgery unit
     */
    NeurosurgeryUnit = "NS",
    /**
     * OB: Obstetrics clinic
     */
    ObstetricsClinic = "OB",
    /**
     * OF: Outpatient facility
     */
    OutpatientFacility = "OF",
    /**
     * OMS: Oral and maxillofacial surgery clinic
     */
    OralAndMaxillofacialSurgeryClinic = "OMS",
    /**
     * ONCL: Medical oncology clinic
     */
    MedicalOncologyClinic = "ONCL",
    /**
     * OPH: Opthalmology clinic
     */
    OpthalmologyClinic = "OPH",
    /**
     * OPTC: Description: A location that plays the role of delivering services which may include examination, diagnosis, treatment, management, and prevention of diseases and disorders of the eye as well as prescribing and fitting appropriate corrective lenses (glasses or contact lenses) as needed.  Optometry clinics may also provide tests for visual field screening, measuring intra-ocular pressure and ophthalmoscopy, as and when required.
     */
    OptometryClinic = "OPTC",
    /**
     * ORTHO: Orthopedics clinic
     */
    OrthopedicsClinic = "ORTHO",
    /**
     * OUTLAB: Description: A location that plays the role of delivering services which may include tests are done on clinical specimens to get health information about a patient pertaining to the diagnosis, treatment, and prevention of disease for same day visits.
     */
    OutpatientLaboratory = "OUTLAB",
    /**
     * OUTPHARM: Description: A location that plays the role of delivering services which may include providing judicious, safe, efficacious, appropriate and cost effective use of medicines for treatment of patients for outpatient visits and may also be used for discharge prescriptions.
     */
    OutpatientPharmacy = "OUTPHARM",
    /**
     * PAINCL: (X12N 261QP3300N)
     */
    PainClinic = "PAINCL",
    /**
     * PC: (X12N 261QP2300N)
     */
    PrimaryCareClinic = "PC",
    /**
     * PEDC: Pediatrics clinic
     */
    PediatricsClinic = "PEDC",
    /**
     * PEDCARD: Pediatric cardiology clinic
     */
    PediatricCardiologyClinic = "PEDCARD",
    /**
     * PEDE: Pediatric endocrinology clinic
     */
    PediatricEndocrinologyClinic = "PEDE",
    /**
     * PEDGI: Pediatric gastroenterology clinic
     */
    PediatricGastroenterologyClinic = "PEDGI",
    /**
     * PEDHEM: Pediatric hematology clinic
     */
    PediatricHematologyClinic = "PEDHEM",
    /**
     * PEDHO: Pediatric oncology clinic
     */
    PediatricOncologyClinic = "PEDHO",
    /**
     * PEDICU: Pediatric intensive care unit
     */
    PediatricIntensiveCareUnit = "PEDICU",
    /**
     * PEDID: Pediatric infectious disease clinic
     */
    PediatricInfectiousDiseaseClinic = "PEDID",
    /**
     * PEDNEPH: Pediatric nephrology clinic
     */
    PediatricNephrologyClinic = "PEDNEPH",
    /**
     * PEDNICU: Pediatric neonatal intensive care unit
     */
    PediatricNeonatalIntensiveCareUnit = "PEDNICU",
    /**
     * PEDRHEUM: Pediatric rheumatology clinic
     */
    PediatricRheumatologyClinic = "PEDRHEUM",
    /**
     * PEDU: Pediatric unit
     */
    PediatricUnit = "PEDU",
    /**
     * PHARM: Location where healthcare service was delivered, identified as a pharmacy.
     */
    Pharmacy = "PHARM",
    /**
     * PHU: (X12N 273R00000N)
     */
    PsychiatricHospitalUnit = "PHU",
    /**
     * PLS: Plastic surgery clinic
     */
    PlasticSurgeryClinic = "PLS",
    /**
     * POD: (X12N 261QP1100N)
     */
    PodiatryClinic = "POD",
    /**
     * PRC: Pain rehabilitation center
     */
    PainRehabilitationCenter = "PRC",
    /**
     * PREV: Preventive medicine clinic
     */
    PreventiveMedicineClinic = "PREV",
    /**
     * PROCTO: Proctology clinic
     */
    ProctologyClinic = "PROCTO",
    /**
     * PROFF: Location where healthcare service was delivered, identified as the healthcare provider's practice office.
     */
    ProviderQuoteSOffice = "PROFF",
    /**
     * PROS: Prosthodontics clinic
     */
    ProsthodonticsClinic = "PROS",
    /**
     * PSI: Psychology clinic
     */
    PsychologyClinic = "PSI",
    /**
     * PSY: Psychiatry clinic
     */
    PsychiatryClinic = "PSY",
    /**
     * PSYCHF: Healthcare facility that cares for patients with psychiatric illness(s).
     */
    PsychatricCareFacility = "PSYCHF",
    /**
     * PTRES: location where healthcare was delivered which is the residence of the Patient.
     */
    PatientQuoteSResidence = "PTRES",
    /**
     * RADDX: A practice setting where radiology services (diagnostic or therapeutic) are provided            (X12N 261QR0200N)
     */
    RadiologyDiagnosticsOrTherapeuticsUnit = "RADDX",
    /**
     * RADO: (X12N 261QX0203N)
     */
    RadiationOncologyUnit = "RADO",
    /**
     * RH: (X12N 283X00000N)
     */
    RehabilitationHospital = "RH",
    /**
     * RHAT: Description: A location that plays the role of delivering services which may include life training and/or social support to people with addictions.
     */
    AddictionTreatmentCenter = "RHAT",
    /**
     * RHEUM: Rheumatology clinic
     */
    RheumatologyClinic = "RHEUM",
    /**
     * RHII: Description: A location that plays the role of delivering services which may include adaptation, rehabilitation and social integration services for people with intellectual and/or pervasive development disorders such as autism or severe behaviour disorder.
     */
    IntellectualImpairmentCenter = "RHII",
    /**
     * RHMAD: Description: A location that plays the role of delivering services which may social support services for adolescents who are pregnant or have child and are experiencing adaptation issues/difficulties in their current or eventual parenting role.
     */
    ParentsWithAdjustmentDifficultiesCenter = "RHMAD",
    /**
     * RHPI: Description: A location that plays the role of delivering services which may include adaptation, rehabilitation and social integration services for people with physical impairments.
     */
    PhysicalImpairmentCenter = "RHPI",
    /**
     * RHPIH: Description: A location that plays the role of delivering services for people with hearing impairments.
     */
    PhysicalImpairmentHearingCenter = "RHPIH",
    /**
     * RHPIMS: Description: A location that plays the role of delivering services for people with motor skill impairments.
     */
    PhysicalImpairmentMotorSkillsCenter = "RHPIMS",
    /**
     * RHPIVS: Description: A location that plays the role of delivering services for people with visual skill impairments.
     */
    PhysicalImpairmentVisualSkillsCenter = "RHPIVS",
    /**
     * RHU: Rehabilitation hospital unit
     */
    RehabilitationHospitalUnit = "RHU",
    /**
     * RHYAD: Description: A location that plays the role of delivering services which may include life training and/or social support services for the adaption, rehabilitation and social integration of youths with adjustment difficulties.
     */
    YouthsWithAdjustmentDifficultiesCenter = "RHYAD",
    /**
     * RNEU: Neuroradiology unit
     */
    NeuroradiologyUnit = "RNEU",
    /**
     * RTF: Residential treatment facility
     */
    ResidentialTreatmentFacility = "RTF",
    /**
     * SCHOOL: Location where healthcare service was delivered, identified as a school or educational facility.
     */
    School = "SCHOOL",
    /**
     * SLEEP: (X12N 261QA1200N)
     */
    SleepDisordersUnit = "SLEEP",
    /**
     * SNF: (X12N 314000000N)
     */
    SkilledNursingFacility = "SNF",
    /**
     * SPMED: Sports medicine clinic
     */
    SportsMedicineClinic = "SPMED",
    /**
     * SU: Surgery clinic
     */
    SurgeryClinic = "SU",
    /**
     * SURF: (X12N 324500000N)
     */
    SubstanceUseRehabilitationFacility = "SURF",
    /**
     * TR: Transplant clinic
     */
    TransplantClinic = "TR",
    /**
     * TRAVEL: Travel and geographic medicine clinic
     */
    TravelAndGeographicMedicineClinic = "TRAVEL",
    /**
     * UPC: Description: A location that plays the role of delivering services which may include: social emergency services required for a young person as required under any jurisdictional youth laws, child placement, and family mediation in the defined geographical area the SDL is responsible for. It may provide expertise in a judiciary setting on child custody, adoption and biological history research.
     */
    UnderageProtectionCenter = "UPC",
    /**
     * URO: Urology clinic
     */
    UrologyClinic = "URO",
    /**
     * WND: Wound clinic
     */
    WoundClinic = "WND",
    /**
     * WORK: Location where healthcare service was delivered, identified as a work place.
     */
    WorkSite = "WORK"
}
//# sourceMappingURL=V3ServiceDeliveryLocationRoleTypeValueSetEnum.d.ts.map