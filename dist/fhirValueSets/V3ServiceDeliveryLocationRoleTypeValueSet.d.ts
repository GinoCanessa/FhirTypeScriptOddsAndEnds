import { Coding } from '../fhir';
/**
 *  A role of a place that further classifies the setting (e.g., accident site, road side, work site, community location) in which services are delivered.
 */
export declare const V3ServiceDeliveryLocationRoleTypeValueSet: {
    /**
     * A role of a place that further classifies the clinical setting (e.g., cardiology clinic, primary care clinic, rehabilitation hospital, skilled nursing facility) in which care is delivered during an encounter.
     */
    v3_RoleCode_DedicatedClinicalLocationRoleType: Coding;
    /**
     * A role of a place that further classifies a setting that is intended to house the provision of non-clinical services.
     */
    v3_RoleCode_DedicatedNonClinicalLocationRoleType: Coding;
    /**
     * A role of a place that further classifies a setting that is intended to house the provision of services.
     */
    v3_RoleCode_DedicatedServiceDeliveryLocationRoleType: Coding;
    /**
     * IncidentalServiceDeliveryLocationRoleType
     */
    v3_RoleCode_IncidentalServiceDeliveryLocationRoleType: Coding;
    /**
     * Location of an accident where healthcare service was delivered, such as a roadside.
     */
    v3_RoleCode_AccidentSite: Coding;
    /**
     * Allergy clinic
     */
    v3_RoleCode_AllergyClinic: Coding;
    /**
     * Location (mobile) where healthcare service was delivered, identified specifically as an ambulance.
     */
    v3_RoleCode_Ambulance: Coding;
    /**
     * Amputee clinic
     */
    v3_RoleCode_AmputeeClinic: Coding;
    /**
     * Bone marrow transplant clinic
     */
    v3_RoleCode_BoneMarrowTransplantClinic: Coding;
    /**
     * Bone marrow transplant unit
     */
    v3_RoleCode_BoneMarrowTransplantUnit: Coding;
    /**
     * Breast clinic
     */
    v3_RoleCode_BreastClinic: Coding;
    /**
     * Child and adolescent neurology clinic
     */
    v3_RoleCode_ChildAndAdolescentNeurologyClinic: Coding;
    /**
     * Child and adolescent psychiatry clinic
     */
    v3_RoleCode_ChildAndAdolescentPsychiatryClinic: Coding;
    /**
     * Ambulatory Health Care Facilities; Clinic/Center; Rehabilitation: Cardiac Facilities
     */
    v3_RoleCode_AmbulatoryHealthCareFacilitiesClinicCenterRehabilitationCardiacFacilities: Coding;
    /**
     * Cardiac catheterization lab
     */
    v3_RoleCode_CardiacCatheterizationLab: Coding;
    /**
     * Coronary care unit
     */
    v3_RoleCode_CoronaryCareUnit: Coding;
    /**
     * A specialty unit in hospital that focuses on chronic respirator patients and pulmonary failure
     */
    v3_RoleCode_ChestUnit: Coding;
    /**
     * (1) A hospital including a physical plant and personnel that provides multidisciplinary diagnosis and treatment for diseases that have one or more of the following characteristics: is permanent; leaves residual disability; is caused by nonreversible pathological alteration; requires special training of the patient for rehabilitation; and/or may be expected to require a long period of supervision or care. In addition, patients require the safety, security, and shelter of these specialized inpatient or partial hospitalization settings. (2) A hospital that provides medical and skilled nursing services to patients with long-term illnesses who are not in an acute phase but who require an intensity of services not available in nursing homes
     */
    v3_RoleCode_ChronicCareFacility: Coding;
    /**
     * Coagulation clinic
     */
    v3_RoleCode_CoagulationClinic: Coding;
    /**
     * Community location where healthcare is delivered.
     */
    v3_RoleCode_CommunityLocation: Coding;
    /**
     * Colon and rectal surgery clinic
     */
    v3_RoleCode_ColonAndRectalSurgeryClinic: Coding;
    /**
     * Description: A location that plays the role of delivering services which may include providing front-line services to the population of a defined geographic area such as: healthcare services and social services, preventive or curative, rehabilitation or reintegration.
     */
    v3_RoleCode_CommunityServiceCenter: Coding;
    /**
     * A practice setting where cardiovascular diagnostic procedures or therapeutic interventions are performed (e.g., cardiac catheterization lab, echocardiography suite)
     */
    v3_RoleCode_CardiovascularDiagnosticsOrTherapeuticsUnit: Coding;
    /**
     * Location address where medical supplies were transported to for use.
     */
    v3_RoleCode_DeliveryAddress: Coding;
    /**
     * Dermatology clinic
     */
    v3_RoleCode_DermatologyClinic: Coding;
    /**
     * A practice setting where diagnostic procedures or therapeutic interventions are performed
     */
    v3_RoleCode_DiagnosticsOrTherapeuticsUnit: Coding;
    /**
     * Echocardiography lab
     */
    v3_RoleCode_EchocardiographyLab: Coding;
    /**
     * Endocrinology clinic
     */
    v3_RoleCode_EndocrinologyClinic: Coding;
    /**
     * (X12N 261QD0000N)
     */
    v3_RoleCode_EndoscopyLab: Coding;
    /**
     * Otorhinolaryngology clinic
     */
    v3_RoleCode_OtorhinolaryngologyClinic: Coding;
    /**
     * Epilepsy unit
     */
    v3_RoleCode_EpilepsyUnit: Coding;
    /**
     * The section of a health care facility for providing rapid treatment to victims of sudden illness or trauma.
     */
    v3_RoleCode_EmergencyRoom: Coding;
    /**
     * Emergency trauma unit
     */
    v3_RoleCode_EmergencyTraumaUnit: Coding;
    /**
     * Family medicine clinic
     */
    v3_RoleCode_FamilyMedicineClinic: Coding;
    /**
     * (X12N 282N00000N)
     */
    v3_RoleCode_HospitalsGeneralAcuteCareHospital: Coding;
    /**
     * Gastroenterology clinic
     */
    v3_RoleCode_GastroenterologyClinic: Coding;
    /**
     * A practice setting where GI procedures (such as endoscopies) are performed
     */
    v3_RoleCode_GastroenterologyDiagnosticsOrTherapeuticsLab: Coding;
    /**
     * General internal medicine clinic
     */
    v3_RoleCode_GeneralInternalMedicineClinic: Coding;
    /**
     * Gynecology clinic
     */
    v3_RoleCode_GynecologyClinic: Coding;
    /**
     * Hand clinic
     */
    v3_RoleCode_HandClinic: Coding;
    /**
     * Hemodialysis unit
     */
    v3_RoleCode_HemodialysisUnit: Coding;
    /**
     * Hematology clinic
     */
    v3_RoleCode_HematologyClinic: Coding;
    /**
     * Description: A location that plays the role of delivering services which may include tests done based on clinical specimens to get health information about a patient as pertaining to the diagnosis, treatment and prevention of disease.  Hospital laboratories may be further divided into specialized units such as Anatomic Pathology, Microbiology, and Biochemistry.
     */
    v3_RoleCode_HospitalLaboratory: Coding;
    /**
     * An acute care institution that provides medical, surgical, or psychiatric care and treatment for the sick or the injured.
     */
    v3_RoleCode_Hospital: Coding;
    /**
     * Description: A location that plays the role of delivering services which may include the branch of medicine that uses ionizing and non-ionizing radiation to diagnose and treat diseases.  The radiology unit may be further divided into subspecialties such as Imaging, Cardiovascular, Thoracic, and Ultrasound.
     */
    v3_RoleCode_RadiologyUnit: Coding;
    /**
     * Hypertension clinic
     */
    v3_RoleCode_HypertensionClinic: Coding;
    /**
     * Hospital unit
     */
    v3_RoleCode_HospitalUnit: Coding;
    /**
     * Description: A location that plays the role of delivering services which may include collecting specimens and/or samples from patients for laboratory testing purposes, but does not perform any tests or analysis functions.
     */
    v3_RoleCode_SpecimenCollectionSite: Coding;
    /**
     * Intensive care unit
     */
    v3_RoleCode_IntensiveCareUnit: Coding;
    /**
     * Focuses on assessing disability
     */
    v3_RoleCode_ImpairmentEvaluationCenter: Coding;
    /**
     * Infectious disease clinic
     */
    v3_RoleCode_InfectiousDiseaseClinic: Coding;
    /**
     * Description: A location that plays the role of delivering services which may include tests are done on clinical specimens to get health information about a patient pertaining to the diagnosis, treatment, and prevention of disease for a hospital visit longer than one day.
     */
    v3_RoleCode_InpatientLaboratory: Coding;
    /**
     * Description: A location that plays the role of delivering services which may include providing judicious, safe, efficacious, appropriate and cost effective use of medicines for treatment of patients for visits longer than one day. The distinction between inpatient pharmacies and retail (or outpatient) pharmacies is that they are part of a patient's continuity of care while staying in the hospital.
     */
    v3_RoleCode_InpatientPharmacy: Coding;
    /**
     * Infertility clinic
     */
    v3_RoleCode_InfertilityClinic: Coding;
    /**
     * Lympedema clinic
     */
    v3_RoleCode_LympedemaClinic: Coding;
    /**
     * Description: A location that plays the role of delivering services which include biochemistry, hematology, microbiology, immunochemistry, and toxicology.
     */
    v3_RoleCode_MedicalLaboratory: Coding;
    /**
     * Medical genetics clinic
     */
    v3_RoleCode_MedicalGeneticsClinic: Coding;
    /**
     * A health care facility operated by the Department of Defense or other military operation.
     */
    v3_RoleCode_MilitaryHospital: Coding;
    /**
     * Location (mobile) where healthcare service was delivered.
     */
    v3_RoleCode_MobileUnit: Coding;
    /**
     * Nursing or custodial care facility
     */
    v3_RoleCode_NursingOrCustodialCareFacility: Coding;
    /**
     * Neurology critical care and stroke unit
     */
    v3_RoleCode_NeurologyCriticalCareAndStrokeUnit: Coding;
    /**
     * Nephrology clinic
     */
    v3_RoleCode_NephrologyClinic: Coding;
    /**
     * Neurology clinic
     */
    v3_RoleCode_NeurologyClinic: Coding;
    /**
     * Neurosurgery unit
     */
    v3_RoleCode_NeurosurgeryUnit: Coding;
    /**
     * Obstetrics clinic
     */
    v3_RoleCode_ObstetricsClinic: Coding;
    /**
     * Outpatient facility
     */
    v3_RoleCode_OutpatientFacility: Coding;
    /**
     * Oral and maxillofacial surgery clinic
     */
    v3_RoleCode_OralAndMaxillofacialSurgeryClinic: Coding;
    /**
     * Medical oncology clinic
     */
    v3_RoleCode_MedicalOncologyClinic: Coding;
    /**
     * Opthalmology clinic
     */
    v3_RoleCode_OpthalmologyClinic: Coding;
    /**
     * Description: A location that plays the role of delivering services which may include examination, diagnosis, treatment, management, and prevention of diseases and disorders of the eye as well as prescribing and fitting appropriate corrective lenses (glasses or contact lenses) as needed.  Optometry clinics may also provide tests for visual field screening, measuring intra-ocular pressure and ophthalmoscopy, as and when required.
     */
    v3_RoleCode_OptometryClinic: Coding;
    /**
     * Orthopedics clinic
     */
    v3_RoleCode_OrthopedicsClinic: Coding;
    /**
     * Description: A location that plays the role of delivering services which may include tests are done on clinical specimens to get health information about a patient pertaining to the diagnosis, treatment, and prevention of disease for same day visits.
     */
    v3_RoleCode_OutpatientLaboratory: Coding;
    /**
     * Description: A location that plays the role of delivering services which may include providing judicious, safe, efficacious, appropriate and cost effective use of medicines for treatment of patients for outpatient visits and may also be used for discharge prescriptions.
     */
    v3_RoleCode_OutpatientPharmacy: Coding;
    /**
     * (X12N 261QP3300N)
     */
    v3_RoleCode_PainClinic: Coding;
    /**
     * (X12N 261QP2300N)
     */
    v3_RoleCode_PrimaryCareClinic: Coding;
    /**
     * Pediatrics clinic
     */
    v3_RoleCode_PediatricsClinic: Coding;
    /**
     * Pediatric cardiology clinic
     */
    v3_RoleCode_PediatricCardiologyClinic: Coding;
    /**
     * Pediatric endocrinology clinic
     */
    v3_RoleCode_PediatricEndocrinologyClinic: Coding;
    /**
     * Pediatric gastroenterology clinic
     */
    v3_RoleCode_PediatricGastroenterologyClinic: Coding;
    /**
     * Pediatric hematology clinic
     */
    v3_RoleCode_PediatricHematologyClinic: Coding;
    /**
     * Pediatric oncology clinic
     */
    v3_RoleCode_PediatricOncologyClinic: Coding;
    /**
     * Pediatric intensive care unit
     */
    v3_RoleCode_PediatricIntensiveCareUnit: Coding;
    /**
     * Pediatric infectious disease clinic
     */
    v3_RoleCode_PediatricInfectiousDiseaseClinic: Coding;
    /**
     * Pediatric nephrology clinic
     */
    v3_RoleCode_PediatricNephrologyClinic: Coding;
    /**
     * Pediatric neonatal intensive care unit
     */
    v3_RoleCode_PediatricNeonatalIntensiveCareUnit: Coding;
    /**
     * Pediatric rheumatology clinic
     */
    v3_RoleCode_PediatricRheumatologyClinic: Coding;
    /**
     * Pediatric unit
     */
    v3_RoleCode_PediatricUnit: Coding;
    /**
     * Location where healthcare service was delivered, identified as a pharmacy.
     */
    v3_RoleCode_Pharmacy: Coding;
    /**
     * (X12N 273R00000N)
     */
    v3_RoleCode_PsychiatricHospitalUnit: Coding;
    /**
     * Plastic surgery clinic
     */
    v3_RoleCode_PlasticSurgeryClinic: Coding;
    /**
     * (X12N 261QP1100N)
     */
    v3_RoleCode_PodiatryClinic: Coding;
    /**
     * Pain rehabilitation center
     */
    v3_RoleCode_PainRehabilitationCenter: Coding;
    /**
     * Preventive medicine clinic
     */
    v3_RoleCode_PreventiveMedicineClinic: Coding;
    /**
     * Proctology clinic
     */
    v3_RoleCode_ProctologyClinic: Coding;
    /**
     * Location where healthcare service was delivered, identified as the healthcare provider's practice office.
     */
    v3_RoleCode_ProviderQuoteSOffice: Coding;
    /**
     * Prosthodontics clinic
     */
    v3_RoleCode_ProsthodonticsClinic: Coding;
    /**
     * Psychology clinic
     */
    v3_RoleCode_PsychologyClinic: Coding;
    /**
     * Psychiatry clinic
     */
    v3_RoleCode_PsychiatryClinic: Coding;
    /**
     * Healthcare facility that cares for patients with psychiatric illness(s).
     */
    v3_RoleCode_PsychatricCareFacility: Coding;
    /**
     * location where healthcare was delivered which is the residence of the Patient.
     */
    v3_RoleCode_PatientQuoteSResidence: Coding;
    /**
     * A practice setting where radiology services (diagnostic or therapeutic) are provided            (X12N 261QR0200N)
     */
    v3_RoleCode_RadiologyDiagnosticsOrTherapeuticsUnit: Coding;
    /**
     * (X12N 261QX0203N)
     */
    v3_RoleCode_RadiationOncologyUnit: Coding;
    /**
     * (X12N 283X00000N)
     */
    v3_RoleCode_RehabilitationHospital: Coding;
    /**
     * Description: A location that plays the role of delivering services which may include life training and/or social support to people with addictions.
     */
    v3_RoleCode_AddictionTreatmentCenter: Coding;
    /**
     * Rheumatology clinic
     */
    v3_RoleCode_RheumatologyClinic: Coding;
    /**
     * Description: A location that plays the role of delivering services which may include adaptation, rehabilitation and social integration services for people with intellectual and/or pervasive development disorders such as autism or severe behaviour disorder.
     */
    v3_RoleCode_IntellectualImpairmentCenter: Coding;
    /**
     * Description: A location that plays the role of delivering services which may social support services for adolescents who are pregnant or have child and are experiencing adaptation issues/difficulties in their current or eventual parenting role.
     */
    v3_RoleCode_ParentsWithAdjustmentDifficultiesCenter: Coding;
    /**
     * Description: A location that plays the role of delivering services which may include adaptation, rehabilitation and social integration services for people with physical impairments.
     */
    v3_RoleCode_PhysicalImpairmentCenter: Coding;
    /**
     * Description: A location that plays the role of delivering services for people with hearing impairments.
     */
    v3_RoleCode_PhysicalImpairmentHearingCenter: Coding;
    /**
     * Description: A location that plays the role of delivering services for people with motor skill impairments.
     */
    v3_RoleCode_PhysicalImpairmentMotorSkillsCenter: Coding;
    /**
     * Description: A location that plays the role of delivering services for people with visual skill impairments.
     */
    v3_RoleCode_PhysicalImpairmentVisualSkillsCenter: Coding;
    /**
     * Rehabilitation hospital unit
     */
    v3_RoleCode_RehabilitationHospitalUnit: Coding;
    /**
     * Description: A location that plays the role of delivering services which may include life training and/or social support services for the adaption, rehabilitation and social integration of youths with adjustment difficulties.
     */
    v3_RoleCode_YouthsWithAdjustmentDifficultiesCenter: Coding;
    /**
     * Neuroradiology unit
     */
    v3_RoleCode_NeuroradiologyUnit: Coding;
    /**
     * Residential treatment facility
     */
    v3_RoleCode_ResidentialTreatmentFacility: Coding;
    /**
     * Location where healthcare service was delivered, identified as a school or educational facility.
     */
    v3_RoleCode_School: Coding;
    /**
     * (X12N 261QA1200N)
     */
    v3_RoleCode_SleepDisordersUnit: Coding;
    /**
     * (X12N 314000000N)
     */
    v3_RoleCode_SkilledNursingFacility: Coding;
    /**
     * Sports medicine clinic
     */
    v3_RoleCode_SportsMedicineClinic: Coding;
    /**
     * Surgery clinic
     */
    v3_RoleCode_SurgeryClinic: Coding;
    /**
     * (X12N 324500000N)
     */
    v3_RoleCode_SubstanceUseRehabilitationFacility: Coding;
    /**
     * Transplant clinic
     */
    v3_RoleCode_TransplantClinic: Coding;
    /**
     * Travel and geographic medicine clinic
     */
    v3_RoleCode_TravelAndGeographicMedicineClinic: Coding;
    /**
     * Description: A location that plays the role of delivering services which may include: social emergency services required for a young person as required under any jurisdictional youth laws, child placement, and family mediation in the defined geographical area the SDL is responsible for. It may provide expertise in a judiciary setting on child custody, adoption and biological history research.
     */
    v3_RoleCode_UnderageProtectionCenter: Coding;
    /**
     * Urology clinic
     */
    v3_RoleCode_UrologyClinic: Coding;
    /**
     * Wound clinic
     */
    v3_RoleCode_WoundClinic: Coding;
    /**
     * Location where healthcare service was delivered, identified as a work place.
     */
    v3_RoleCode_WorkSite: Coding;
};
//# sourceMappingURL=V3ServiceDeliveryLocationRoleTypeValueSet.d.ts.map