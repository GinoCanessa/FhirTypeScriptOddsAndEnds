// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://terminology.hl7.org/ValueSet/v3-ServiceDeliveryLocationRoleType|2014-03-26
import { Coding } from '../fhir.js';
/**
 *  A role of a place that further classifies the setting (e.g., accident site, road side, work site, community location) in which services are delivered.
 */
export const V3ServiceDeliveryLocationRoleTypeValueSet = {
    /**
     * _DedicatedClinicalLocationRoleType: A role of a place that further classifies the clinical setting (e.g., cardiology clinic, primary care clinic, rehabilitation hospital, skilled nursing facility) in which care is delivered during an encounter.
     */
    DedicatedClinicalLocationRoleType: new Coding({
        display: "DedicatedClinicalLocationRoleType",
        code: "_DedicatedClinicalLocationRoleType",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * _DedicatedNonClinicalLocationRoleType: A role of a place that further classifies a setting that is intended to house the provision of non-clinical services.
     */
    DedicatedNonClinicalLocationRoleType: new Coding({
        display: "DedicatedNonClinicalLocationRoleType",
        code: "_DedicatedNonClinicalLocationRoleType",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * _DedicatedServiceDeliveryLocationRoleType: A role of a place that further classifies a setting that is intended to house the provision of services.
     */
    DedicatedServiceDeliveryLocationRoleType: new Coding({
        display: "DedicatedServiceDeliveryLocationRoleType",
        code: "_DedicatedServiceDeliveryLocationRoleType",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * _IncidentalServiceDeliveryLocationRoleType: IncidentalServiceDeliveryLocationRoleType
     */
    IncidentalServiceDeliveryLocationRoleType: new Coding({
        display: "IncidentalServiceDeliveryLocationRoleType",
        code: "_IncidentalServiceDeliveryLocationRoleType",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * ACC: Location of an accident where healthcare service was delivered, such as a roadside.
     */
    AccidentSite: new Coding({
        display: "accident site",
        code: "ACC",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * ALL: Allergy clinic
     */
    AllergyClinic: new Coding({
        display: "Allergy clinic",
        code: "ALL",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * AMB: Location (mobile) where healthcare service was delivered, identified specifically as an ambulance.
     */
    Ambulance: new Coding({
        display: "Ambulance",
        code: "AMB",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * AMPUT: Amputee clinic
     */
    AmputeeClinic: new Coding({
        display: "Amputee clinic",
        code: "AMPUT",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * BMTC: Bone marrow transplant clinic
     */
    BoneMarrowTransplantClinic: new Coding({
        display: "Bone marrow transplant clinic",
        code: "BMTC",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * BMTU: Bone marrow transplant unit
     */
    BoneMarrowTransplantUnit: new Coding({
        display: "Bone marrow transplant unit",
        code: "BMTU",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * BREAST: Breast clinic
     */
    BreastClinic: new Coding({
        display: "Breast clinic",
        code: "BREAST",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * CANC: Child and adolescent neurology clinic
     */
    ChildAndAdolescentNeurologyClinic: new Coding({
        display: "Child and adolescent neurology clinic",
        code: "CANC",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * CAPC: Child and adolescent psychiatry clinic
     */
    ChildAndAdolescentPsychiatryClinic: new Coding({
        display: "Child and adolescent psychiatry clinic",
        code: "CAPC",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * CARD: Ambulatory Health Care Facilities; Clinic/Center; Rehabilitation: Cardiac Facilities
     */
    AmbulatoryHealthCareFacilitiesClinicCenterRehabilitationCardiacFacilities: new Coding({
        display: "Ambulatory Health Care Facilities; Clinic/Center; Rehabilitation: Cardiac Facilities",
        code: "CARD",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * CATH: Cardiac catheterization lab
     */
    CardiacCatheterizationLab: new Coding({
        display: "Cardiac catheterization lab",
        code: "CATH",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * CCU: Coronary care unit
     */
    CoronaryCareUnit: new Coding({
        display: "Coronary care unit",
        code: "CCU",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * CHEST: A specialty unit in hospital that focuses on chronic respirator patients and pulmonary failure
     */
    ChestUnit: new Coding({
        display: "Chest unit",
        code: "CHEST",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * CHR: (1) A hospital including a physical plant and personnel that provides multidisciplinary diagnosis and treatment for diseases that have one or more of the following characteristics: is permanent; leaves residual disability; is caused by nonreversible pathological alteration; requires special training of the patient for rehabilitation; and/or may be expected to require a long period of supervision or care. In addition, patients require the safety, security, and shelter of these specialized inpatient or partial hospitalization settings. (2) A hospital that provides medical and skilled nursing services to patients with long-term illnesses who are not in an acute phase but who require an intensity of services not available in nursing homes
     */
    ChronicCareFacility: new Coding({
        display: "Chronic Care Facility",
        code: "CHR",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * COAG: Coagulation clinic
     */
    CoagulationClinic: new Coding({
        display: "Coagulation clinic",
        code: "COAG",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * COMM: Community location where healthcare is delivered.
     */
    CommunityLocation: new Coding({
        display: "Community Location",
        code: "COMM",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * CRS: Colon and rectal surgery clinic
     */
    ColonAndRectalSurgeryClinic: new Coding({
        display: "Colon and rectal surgery clinic",
        code: "CRS",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * CSC: Description: A location that plays the role of delivering services which may include providing front-line services to the population of a defined geographic area such as: healthcare services and social services, preventive or curative, rehabilitation or reintegration.
     */
    CommunityServiceCenter: new Coding({
        display: "community service center",
        code: "CSC",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * CVDX: A practice setting where cardiovascular diagnostic procedures or therapeutic interventions are performed (e.g., cardiac catheterization lab, echocardiography suite)
     */
    CardiovascularDiagnosticsOrTherapeuticsUnit: new Coding({
        display: "Cardiovascular diagnostics or therapeutics unit",
        code: "CVDX",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * DADDR: Location address where medical supplies were transported to for use.
     */
    DeliveryAddress: new Coding({
        display: "Delivery Address",
        code: "DADDR",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * DERM: Dermatology clinic
     */
    DermatologyClinic: new Coding({
        display: "Dermatology clinic",
        code: "DERM",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * DX: A practice setting where diagnostic procedures or therapeutic interventions are performed
     */
    DiagnosticsOrTherapeuticsUnit: new Coding({
        display: "Diagnostics or therapeutics unit",
        code: "DX",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * ECHO: Echocardiography lab
     */
    EchocardiographyLab: new Coding({
        display: "Echocardiography lab",
        code: "ECHO",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * ENDO: Endocrinology clinic
     */
    EndocrinologyClinic: new Coding({
        display: "Endocrinology clinic",
        code: "ENDO",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * ENDOS: (X12N 261QD0000N)
     */
    EndoscopyLab: new Coding({
        display: "Endoscopy lab",
        code: "ENDOS",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * ENT: Otorhinolaryngology clinic
     */
    OtorhinolaryngologyClinic: new Coding({
        display: "Otorhinolaryngology clinic",
        code: "ENT",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * EPIL: Epilepsy unit
     */
    EpilepsyUnit: new Coding({
        display: "Epilepsy unit",
        code: "EPIL",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * ER: The section of a health care facility for providing rapid treatment to victims of sudden illness or trauma.
     */
    EmergencyRoom: new Coding({
        display: "Emergency room",
        code: "ER",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * ETU: Emergency trauma unit
     */
    EmergencyTraumaUnit: new Coding({
        display: "Emergency trauma unit",
        code: "ETU",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * FMC: Family medicine clinic
     */
    FamilyMedicineClinic: new Coding({
        display: "Family medicine clinic",
        code: "FMC",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * GACH: (X12N 282N00000N)
     */
    HospitalsGeneralAcuteCareHospital: new Coding({
        display: "Hospitals; General Acute Care Hospital",
        code: "GACH",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * GI: Gastroenterology clinic
     */
    GastroenterologyClinic: new Coding({
        display: "Gastroenterology clinic",
        code: "GI",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * GIDX: A practice setting where GI procedures (such as endoscopies) are performed
     */
    GastroenterologyDiagnosticsOrTherapeuticsLab: new Coding({
        display: "Gastroenterology diagnostics or therapeutics lab",
        code: "GIDX",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * GIM: General internal medicine clinic
     */
    GeneralInternalMedicineClinic: new Coding({
        display: "General internal medicine clinic",
        code: "GIM",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * GYN: Gynecology clinic
     */
    GynecologyClinic: new Coding({
        display: "Gynecology clinic",
        code: "GYN",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * HAND: Hand clinic
     */
    HandClinic: new Coding({
        display: "Hand clinic",
        code: "HAND",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * HD: Hemodialysis unit
     */
    HemodialysisUnit: new Coding({
        display: "Hemodialysis unit",
        code: "HD",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * HEM: Hematology clinic
     */
    HematologyClinic: new Coding({
        display: "Hematology clinic",
        code: "HEM",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * HLAB: Description: A location that plays the role of delivering services which may include tests done based on clinical specimens to get health information about a patient as pertaining to the diagnosis, treatment and prevention of disease.  Hospital laboratories may be further divided into specialized units such as Anatomic Pathology, Microbiology, and Biochemistry.
     */
    HospitalLaboratory: new Coding({
        display: "hospital laboratory",
        code: "HLAB",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * HOSP: An acute care institution that provides medical, surgical, or psychiatric care and treatment for the sick or the injured.
     */
    Hospital: new Coding({
        display: "Hospital",
        code: "HOSP",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * HRAD: Description: A location that plays the role of delivering services which may include the branch of medicine that uses ionizing and non-ionizing radiation to diagnose and treat diseases.  The radiology unit may be further divided into subspecialties such as Imaging, Cardiovascular, Thoracic, and Ultrasound.
     */
    RadiologyUnit: new Coding({
        display: "radiology unit",
        code: "HRAD",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * HTN: Hypertension clinic
     */
    HypertensionClinic: new Coding({
        display: "Hypertension clinic",
        code: "HTN",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * HU: Hospital unit
     */
    HospitalUnit: new Coding({
        display: "Hospital unit",
        code: "HU",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * HUSCS: Description: A location that plays the role of delivering services which may include collecting specimens and/or samples from patients for laboratory testing purposes, but does not perform any tests or analysis functions.
     */
    SpecimenCollectionSite: new Coding({
        display: "specimen collection site",
        code: "HUSCS",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * ICU: Intensive care unit
     */
    IntensiveCareUnit: new Coding({
        display: "Intensive care unit",
        code: "ICU",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * IEC: Focuses on assessing disability
     */
    ImpairmentEvaluationCenter: new Coding({
        display: "Impairment evaluation center",
        code: "IEC",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * INFD: Infectious disease clinic
     */
    InfectiousDiseaseClinic: new Coding({
        display: "Infectious disease clinic",
        code: "INFD",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * INLAB: Description: A location that plays the role of delivering services which may include tests are done on clinical specimens to get health information about a patient pertaining to the diagnosis, treatment, and prevention of disease for a hospital visit longer than one day.
     */
    InpatientLaboratory: new Coding({
        display: "inpatient laboratory",
        code: "INLAB",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * INPHARM: Description: A location that plays the role of delivering services which may include providing judicious, safe, efficacious, appropriate and cost effective use of medicines for treatment of patients for visits longer than one day. The distinction between inpatient pharmacies and retail (or outpatient) pharmacies is that they are part of a patient's continuity of care while staying in the hospital.
     */
    InpatientPharmacy: new Coding({
        display: "inpatient pharmacy",
        code: "INPHARM",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * INV: Infertility clinic
     */
    InfertilityClinic: new Coding({
        display: "Infertility clinic",
        code: "INV",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * LYMPH: Lympedema clinic
     */
    LympedemaClinic: new Coding({
        display: "Lympedema clinic",
        code: "LYMPH",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * MBL: Description: A location that plays the role of delivering services which include biochemistry, hematology, microbiology, immunochemistry, and toxicology.
     */
    MedicalLaboratory: new Coding({
        display: "medical laboratory",
        code: "MBL",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * MGEN: Medical genetics clinic
     */
    MedicalGeneticsClinic: new Coding({
        display: "Medical genetics clinic",
        code: "MGEN",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * MHSP: A health care facility operated by the Department of Defense or other military operation.
     */
    MilitaryHospital: new Coding({
        display: "Military Hospital",
        code: "MHSP",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * MOBL: Location (mobile) where healthcare service was delivered.
     */
    MobileUnit: new Coding({
        display: "Mobile Unit",
        code: "MOBL",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * NCCF: Nursing or custodial care facility
     */
    NursingOrCustodialCareFacility: new Coding({
        display: "Nursing or custodial care facility",
        code: "NCCF",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * NCCS: Neurology critical care and stroke unit
     */
    NeurologyCriticalCareAndStrokeUnit: new Coding({
        display: "Neurology critical care and stroke unit",
        code: "NCCS",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * NEPH: Nephrology clinic
     */
    NephrologyClinic: new Coding({
        display: "Nephrology clinic",
        code: "NEPH",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * NEUR: Neurology clinic
     */
    NeurologyClinic: new Coding({
        display: "Neurology clinic",
        code: "NEUR",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * NS: Neurosurgery unit
     */
    NeurosurgeryUnit: new Coding({
        display: "Neurosurgery unit",
        code: "NS",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * OB: Obstetrics clinic
     */
    ObstetricsClinic: new Coding({
        display: "Obstetrics clinic",
        code: "OB",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * OF: Outpatient facility
     */
    OutpatientFacility: new Coding({
        display: "Outpatient facility",
        code: "OF",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * OMS: Oral and maxillofacial surgery clinic
     */
    OralAndMaxillofacialSurgeryClinic: new Coding({
        display: "Oral and maxillofacial surgery clinic",
        code: "OMS",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * ONCL: Medical oncology clinic
     */
    MedicalOncologyClinic: new Coding({
        display: "Medical oncology clinic",
        code: "ONCL",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * OPH: Opthalmology clinic
     */
    OpthalmologyClinic: new Coding({
        display: "Opthalmology clinic",
        code: "OPH",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * OPTC: Description: A location that plays the role of delivering services which may include examination, diagnosis, treatment, management, and prevention of diseases and disorders of the eye as well as prescribing and fitting appropriate corrective lenses (glasses or contact lenses) as needed.  Optometry clinics may also provide tests for visual field screening, measuring intra-ocular pressure and ophthalmoscopy, as and when required.
     */
    OptometryClinic: new Coding({
        display: "optometry clinic",
        code: "OPTC",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * ORTHO: Orthopedics clinic
     */
    OrthopedicsClinic: new Coding({
        display: "Orthopedics clinic",
        code: "ORTHO",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * OUTLAB: Description: A location that plays the role of delivering services which may include tests are done on clinical specimens to get health information about a patient pertaining to the diagnosis, treatment, and prevention of disease for same day visits.
     */
    OutpatientLaboratory: new Coding({
        display: "outpatient laboratory",
        code: "OUTLAB",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * OUTPHARM: Description: A location that plays the role of delivering services which may include providing judicious, safe, efficacious, appropriate and cost effective use of medicines for treatment of patients for outpatient visits and may also be used for discharge prescriptions.
     */
    OutpatientPharmacy: new Coding({
        display: "outpatient pharmacy",
        code: "OUTPHARM",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * PAINCL: (X12N 261QP3300N)
     */
    PainClinic: new Coding({
        display: "Pain clinic",
        code: "PAINCL",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * PC: (X12N 261QP2300N)
     */
    PrimaryCareClinic: new Coding({
        display: "Primary care clinic",
        code: "PC",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * PEDC: Pediatrics clinic
     */
    PediatricsClinic: new Coding({
        display: "Pediatrics clinic",
        code: "PEDC",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * PEDCARD: Pediatric cardiology clinic
     */
    PediatricCardiologyClinic: new Coding({
        display: "Pediatric cardiology clinic",
        code: "PEDCARD",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * PEDE: Pediatric endocrinology clinic
     */
    PediatricEndocrinologyClinic: new Coding({
        display: "Pediatric endocrinology clinic",
        code: "PEDE",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * PEDGI: Pediatric gastroenterology clinic
     */
    PediatricGastroenterologyClinic: new Coding({
        display: "Pediatric gastroenterology clinic",
        code: "PEDGI",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * PEDHEM: Pediatric hematology clinic
     */
    PediatricHematologyClinic: new Coding({
        display: "Pediatric hematology clinic",
        code: "PEDHEM",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * PEDHO: Pediatric oncology clinic
     */
    PediatricOncologyClinic: new Coding({
        display: "Pediatric oncology clinic",
        code: "PEDHO",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * PEDICU: Pediatric intensive care unit
     */
    PediatricIntensiveCareUnit: new Coding({
        display: "Pediatric intensive care unit",
        code: "PEDICU",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * PEDID: Pediatric infectious disease clinic
     */
    PediatricInfectiousDiseaseClinic: new Coding({
        display: "Pediatric infectious disease clinic",
        code: "PEDID",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * PEDNEPH: Pediatric nephrology clinic
     */
    PediatricNephrologyClinic: new Coding({
        display: "Pediatric nephrology clinic",
        code: "PEDNEPH",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * PEDNICU: Pediatric neonatal intensive care unit
     */
    PediatricNeonatalIntensiveCareUnit: new Coding({
        display: "Pediatric neonatal intensive care unit",
        code: "PEDNICU",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * PEDRHEUM: Pediatric rheumatology clinic
     */
    PediatricRheumatologyClinic: new Coding({
        display: "Pediatric rheumatology clinic",
        code: "PEDRHEUM",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * PEDU: Pediatric unit
     */
    PediatricUnit: new Coding({
        display: "Pediatric unit",
        code: "PEDU",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * PHARM: Location where healthcare service was delivered, identified as a pharmacy.
     */
    Pharmacy: new Coding({
        display: "Pharmacy",
        code: "PHARM",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * PHU: (X12N 273R00000N)
     */
    PsychiatricHospitalUnit: new Coding({
        display: "Psychiatric hospital unit",
        code: "PHU",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * PLS: Plastic surgery clinic
     */
    PlasticSurgeryClinic: new Coding({
        display: "Plastic surgery clinic",
        code: "PLS",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * POD: (X12N 261QP1100N)
     */
    PodiatryClinic: new Coding({
        display: "Podiatry clinic",
        code: "POD",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * PRC: Pain rehabilitation center
     */
    PainRehabilitationCenter: new Coding({
        display: "Pain rehabilitation center",
        code: "PRC",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * PREV: Preventive medicine clinic
     */
    PreventiveMedicineClinic: new Coding({
        display: "Preventive medicine clinic",
        code: "PREV",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * PROCTO: Proctology clinic
     */
    ProctologyClinic: new Coding({
        display: "Proctology clinic",
        code: "PROCTO",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * PROFF: Location where healthcare service was delivered, identified as the healthcare provider's practice office.
     */
    ProviderQuoteSOffice: new Coding({
        display: "Provider's Office",
        code: "PROFF",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * PROS: Prosthodontics clinic
     */
    ProsthodonticsClinic: new Coding({
        display: "Prosthodontics clinic",
        code: "PROS",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * PSI: Psychology clinic
     */
    PsychologyClinic: new Coding({
        display: "Psychology clinic",
        code: "PSI",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * PSY: Psychiatry clinic
     */
    PsychiatryClinic: new Coding({
        display: "Psychiatry clinic",
        code: "PSY",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * PSYCHF: Healthcare facility that cares for patients with psychiatric illness(s).
     */
    PsychatricCareFacility: new Coding({
        display: "Psychatric Care Facility",
        code: "PSYCHF",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * PTRES: location where healthcare was delivered which is the residence of the Patient.
     */
    PatientQuoteSResidence: new Coding({
        display: "Patient's Residence",
        code: "PTRES",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * RADDX: A practice setting where radiology services (diagnostic or therapeutic) are provided            (X12N 261QR0200N)
     */
    RadiologyDiagnosticsOrTherapeuticsUnit: new Coding({
        display: "Radiology diagnostics or therapeutics unit",
        code: "RADDX",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * RADO: (X12N 261QX0203N)
     */
    RadiationOncologyUnit: new Coding({
        display: "Radiation oncology unit",
        code: "RADO",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * RH: (X12N 283X00000N)
     */
    RehabilitationHospital: new Coding({
        display: "Rehabilitation hospital",
        code: "RH",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * RHAT: Description: A location that plays the role of delivering services which may include life training and/or social support to people with addictions.
     */
    AddictionTreatmentCenter: new Coding({
        display: "addiction treatment center",
        code: "RHAT",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * RHEUM: Rheumatology clinic
     */
    RheumatologyClinic: new Coding({
        display: "Rheumatology clinic",
        code: "RHEUM",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * RHII: Description: A location that plays the role of delivering services which may include adaptation, rehabilitation and social integration services for people with intellectual and/or pervasive development disorders such as autism or severe behaviour disorder.
     */
    IntellectualImpairmentCenter: new Coding({
        display: "intellectual impairment center",
        code: "RHII",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * RHMAD: Description: A location that plays the role of delivering services which may social support services for adolescents who are pregnant or have child and are experiencing adaptation issues/difficulties in their current or eventual parenting role.
     */
    ParentsWithAdjustmentDifficultiesCenter: new Coding({
        display: "parents with adjustment difficulties center",
        code: "RHMAD",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * RHPI: Description: A location that plays the role of delivering services which may include adaptation, rehabilitation and social integration services for people with physical impairments.
     */
    PhysicalImpairmentCenter: new Coding({
        display: "physical impairment center",
        code: "RHPI",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * RHPIH: Description: A location that plays the role of delivering services for people with hearing impairments.
     */
    PhysicalImpairmentHearingCenter: new Coding({
        display: "physical impairment - hearing center",
        code: "RHPIH",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * RHPIMS: Description: A location that plays the role of delivering services for people with motor skill impairments.
     */
    PhysicalImpairmentMotorSkillsCenter: new Coding({
        display: "physical impairment - motor skills center",
        code: "RHPIMS",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * RHPIVS: Description: A location that plays the role of delivering services for people with visual skill impairments.
     */
    PhysicalImpairmentVisualSkillsCenter: new Coding({
        display: "physical impairment - visual skills center",
        code: "RHPIVS",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * RHU: Rehabilitation hospital unit
     */
    RehabilitationHospitalUnit: new Coding({
        display: "Rehabilitation hospital unit",
        code: "RHU",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * RHYAD: Description: A location that plays the role of delivering services which may include life training and/or social support services for the adaption, rehabilitation and social integration of youths with adjustment difficulties.
     */
    YouthsWithAdjustmentDifficultiesCenter: new Coding({
        display: "youths with adjustment difficulties center",
        code: "RHYAD",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * RNEU: Neuroradiology unit
     */
    NeuroradiologyUnit: new Coding({
        display: "Neuroradiology unit",
        code: "RNEU",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * RTF: Residential treatment facility
     */
    ResidentialTreatmentFacility: new Coding({
        display: "Residential treatment facility",
        code: "RTF",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * SCHOOL: Location where healthcare service was delivered, identified as a school or educational facility.
     */
    School: new Coding({
        display: "school",
        code: "SCHOOL",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * SLEEP: (X12N 261QA1200N)
     */
    SleepDisordersUnit: new Coding({
        display: "Sleep disorders unit",
        code: "SLEEP",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * SNF: (X12N 314000000N)
     */
    SkilledNursingFacility: new Coding({
        display: "Skilled nursing facility",
        code: "SNF",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * SPMED: Sports medicine clinic
     */
    SportsMedicineClinic: new Coding({
        display: "Sports medicine clinic",
        code: "SPMED",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * SU: Surgery clinic
     */
    SurgeryClinic: new Coding({
        display: "Surgery clinic",
        code: "SU",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * SURF: (X12N 324500000N)
     */
    SubstanceUseRehabilitationFacility: new Coding({
        display: "Substance use rehabilitation facility",
        code: "SURF",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * TR: Transplant clinic
     */
    TransplantClinic: new Coding({
        display: "Transplant clinic",
        code: "TR",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * TRAVEL: Travel and geographic medicine clinic
     */
    TravelAndGeographicMedicineClinic: new Coding({
        display: "Travel and geographic medicine clinic",
        code: "TRAVEL",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * UPC: Description: A location that plays the role of delivering services which may include: social emergency services required for a young person as required under any jurisdictional youth laws, child placement, and family mediation in the defined geographical area the SDL is responsible for. It may provide expertise in a judiciary setting on child custody, adoption and biological history research.
     */
    UnderageProtectionCenter: new Coding({
        display: "underage protection center",
        code: "UPC",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * URO: Urology clinic
     */
    UrologyClinic: new Coding({
        display: "Urology clinic",
        code: "URO",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * WND: Wound clinic
     */
    WoundClinic: new Coding({
        display: "Wound clinic",
        code: "WND",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
    /**
     * WORK: Location where healthcare service was delivered, identified as a work place.
     */
    WorkSite: new Coding({
        display: "work site",
        code: "WORK",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
    }),
};
/**
 *  A role of a place that further classifies the setting (e.g., accident site, road side, work site, community location) in which services are delivered.
 */
//# sourceMappingURL=V3ServiceDeliveryLocationRoleTypeValueSet.js.map