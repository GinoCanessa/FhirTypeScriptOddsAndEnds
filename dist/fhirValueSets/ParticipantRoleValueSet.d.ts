import { Coding } from '../fhir.js';
/**
 * Roles of participants that may be included in a care team.  Defined as: Is a Person, Healthcare professional (occupation) or Healthcare related organization (qualifier value).
 */
export declare const ParticipantRoleValueSet: {
    /**
     * Code: 100217091000087103
     */
    readonly MaternalAunt: Coding;
    /**
     * Code: 105428002
     */
    readonly HomosexualParents: Coding;
    /**
     * Code: 105429005
     */
    readonly ElderlyParents: Coding;
    /**
     * Code: 105431001
     */
    readonly AdoptedPerson: Coding;
    /**
     * Code: 105436006
     */
    readonly ElderlyPerson: Coding;
    /**
     * Code: 105437002
     */
    readonly ElderlyMan: Coding;
    /**
     * Code: 105438007
     */
    readonly ElderlyWoman: Coding;
    /**
     * Code: 105449001
     */
    readonly SickRelative: Coding;
    /**
     * Code: 105450001
     */
    readonly AlcoholicRelative: Coding;
    /**
     * Code: 105451002
     */
    readonly DementedRelative: Coding;
    /**
     * Code: 105452009
     */
    readonly DiabeticRelative: Coding;
    /**
     * Code: 105453004
     */
    readonly SchizophrenicRelative: Coding;
    /**
     * Code: 105454005
     */
    readonly DisabledRelative: Coding;
    /**
     * Code: 105455006
     */
    readonly DonorForMedicalOrSurgicalProcedure: Coding;
    /**
     * Code: 105456007
     */
    readonly LiveDonor: Coding;
    /**
     * Code: 105457003
     */
    readonly CadaverDonor: Coding;
    /**
     * Code: 105458008
     */
    readonly CandidateDonor: Coding;
    /**
     * Code: 105459000
     */
    readonly AcceptedDonor: Coding;
    /**
     * Code: 105460005
     */
    readonly RejectedDonor: Coding;
    /**
     * Code: 105461009
     */
    readonly OrganDonor: Coding;
    /**
     * Code: 105462002
     */
    readonly DonorOfKidneyForTransplant: Coding;
    /**
     * Code: 105463007
     */
    readonly DonorForLiverTransplant: Coding;
    /**
     * Code: 105464001
     */
    readonly EyeDonorForCornealTransplant: Coding;
    /**
     * Code: 105465000
     */
    readonly DonorForHeartTransplant: Coding;
    /**
     * Code: 105466004
     */
    readonly DonorForLungTransplant: Coding;
    /**
     * Code: 105467008
     */
    readonly DonorForHeartLungTransplant: Coding;
    /**
     * Code: 105468003
     */
    readonly TissueDonor: Coding;
    /**
     * Code: 105469006
     */
    readonly BoneTissueDonor: Coding;
    /**
     * Code: 105470007
     */
    readonly BloodDonor: Coding;
    /**
     * Code: 105471006
     */
    readonly BoneMarrowDonor: Coding;
    /**
     * Code: 105472004
     */
    readonly SpermDonorForArtificialInsemination: Coding;
    /**
     * Code: 105473009
     */
    readonly HusbandSpermDonorForArtificialInsemination: Coding;
    /**
     * Code: 105474003
     */
    readonly RelatedSpermDonorForArtificialInsemination: Coding;
    /**
     * Code: 106289002
     */
    readonly DentalSurgeon: Coding;
    /**
     * Code: 106291005
     */
    readonly DieticianANDORPublicHealthNutritionist: Coding;
    /**
     * Code: 106292003
     */
    readonly Nurse: Coding;
    /**
     * Code: 106293008
     */
    readonly NursingPersonnel: Coding;
    /**
     * Code: 106294002
     */
    readonly MidwiferyPersonnel: Coding;
    /**
     * Code: 106296000
     */
    readonly PhysiotherapistANDOROccupationalTherapist: Coding;
    /**
     * Code: 106330007
     */
    readonly PhilologistTranslatorANDORInterpreter: Coding;
    /**
     * Code: 10896006
     */
    readonly IdenticalTwinSibling: Coding;
    /**
     * Code: 10960006
     */
    readonly WorkingFather: Coding;
    /**
     * Code: 112247003
     */
    readonly MedicalDoctor: Coding;
    /**
     * Code: 11286003
     */
    readonly TwinSibling: Coding;
    /**
     * Code: 113157001
     */
    readonly Grandmother: Coding;
    /**
     * Code: 113158006
     */
    readonly FraternalTwinSibling: Coding;
    /**
     * Code: 113159003
     */
    readonly LegalDaughter: Coding;
    /**
     * Code: 113160008
     */
    readonly NaturalSon: Coding;
    /**
     * Code: 113161007
     */
    readonly FemaleFiance: Coding;
    /**
     * Code: 113163005
     */
    readonly Friend: Coding;
    /**
     * Code: 11393001
     */
    readonly GreatGreatGrandChild: Coding;
    /**
     * Code: 11434005
     */
    readonly MaleSecondCousin: Coding;
    /**
     * Code: 116153009
     */
    readonly DonorOfControlMaterial: Coding;
    /**
     * Code: 116154003
     */
    readonly Patient: Coding;
    /**
     * Code: 11661002
     */
    readonly Neuropathologist: Coding;
    /**
     * Code: 11773006
     */
    readonly LegalBrother: Coding;
    /**
     * Code: 11911009
     */
    readonly Nephrologist: Coding;
    /**
     * Code: 11935004
     */
    readonly Obstetrician: Coding;
    /**
     * Code: 11993008
     */
    readonly MaleFirstCousin: Coding;
    /**
     * Code: 12241003
     */
    readonly FosterSon: Coding;
    /**
     * Code: 125677006
     */
    readonly Relative: Coding;
    /**
     * Code: 125678001
     */
    readonly FirstDegreeBloodRelative: Coding;
    /**
     * Code: 125679009
     */
    readonly BloodRelative: Coding;
    /**
     * Code: 12629003
     */
    readonly SingleMother: Coding;
    /**
     * Code: 127848009
     */
    readonly Spouse: Coding;
    /**
     * Code: 127849001
     */
    readonly Husband: Coding;
    /**
     * Code: 127850001
     */
    readonly Wife: Coding;
    /**
     * Code: 127851002
     */
    readonly Fiance: Coding;
    /**
     * Code: 13038009
     */
    readonly OlderBrother: Coding;
    /**
     * Code: 13157002
     */
    readonly OlderSibling: Coding;
    /**
     * Code: 133931009
     */
    readonly Infant: Coding;
    /**
     * Code: 133932002
     */
    readonly Caregiver: Coding;
    /**
     * Code: 133933007
     */
    readonly Newborn: Coding;
    /**
     * Code: 133936004
     */
    readonly Adult: Coding;
    /**
     * Code: 133937008
     */
    readonly Adolescent: Coding;
    /**
     * Code: 13443008
     */
    readonly SecondCousin: Coding;
    /**
     * Code: 1354005
     */
    readonly OrphanFemale: Coding;
    /**
     * Code: 13580004
     */
    readonly SchoolDentalAssistant: Coding;
    /**
     * Code: 13646006
     */
    readonly NaturalParent: Coding;
    /**
     * Code: 1421009
     */
    readonly SpecializedSurgeon: Coding;
    /**
     * Code: 14469008
     */
    readonly LegalChild: Coding;
    /**
     * Code: 14698002
     */
    readonly MedicalMicrobiologist: Coding;
    /**
     * Code: 15130002
     */
    readonly SurrogateParent: Coding;
    /**
     * Code: 158965000
     */
    readonly MedicalPractitioner: Coding;
    /**
     * Code: 158966004
     */
    readonly MedicalAdministratorNational: Coding;
    /**
     * Code: 158967008
     */
    readonly ConsultantPhysician: Coding;
    /**
     * Code: 158968003
     */
    readonly ConsultantSurgeon: Coding;
    /**
     * Code: 158969006
     */
    readonly ConsultantGynecologyAndObstetrics: Coding;
    /**
     * Code: 158970007
     */
    readonly Anesthetist: Coding;
    /**
     * Code: 158971006
     */
    readonly HospitalRegistrar: Coding;
    /**
     * Code: 158972004
     */
    readonly HouseOfficer: Coding;
    /**
     * Code: 158973009
     */
    readonly OccupationalPhysician: Coding;
    /**
     * Code: 158974003
     */
    readonly ClinicalMedicalOfficer: Coding;
    /**
     * Code: 158975002
     */
    readonly MedicalPractitionerTeaching: Coding;
    /**
     * Code: 158977005
     */
    readonly DentalAdministrator: Coding;
    /**
     * Code: 158978000
     */
    readonly DentalConsultant: Coding;
    /**
     * Code: 158979008
     */
    readonly DentalGeneralPractitioner: Coding;
    /**
     * Code: 158980006
     */
    readonly DentalPractitionerTeaching: Coding;
    /**
     * Code: 158983008
     */
    readonly NurseAdministratorNational: Coding;
    /**
     * Code: 158984002
     */
    readonly NursingOfficerRegion: Coding;
    /**
     * Code: 158985001
     */
    readonly NursingOfficerDistrict: Coding;
    /**
     * Code: 158986000
     */
    readonly NursingAdministratorProfessionalBody: Coding;
    /**
     * Code: 158987009
     */
    readonly NursingOfficerDivision: Coding;
    /**
     * Code: 158988004
     */
    readonly NurseEducationDirector: Coding;
    /**
     * Code: 158989007
     */
    readonly OccupationalHealthNursingOfficer: Coding;
    /**
     * Code: 158990003
     */
    readonly NursingOfficer: Coding;
    /**
     * Code: 158992006
     */
    readonly MidwiferySister: Coding;
    /**
     * Code: 158993001
     */
    readonly NursingSisterTheatre: Coding;
    /**
     * Code: 158994007
     */
    readonly StaffNurse: Coding;
    /**
     * Code: 158995008
     */
    readonly StaffMidwife: Coding;
    /**
     * Code: 158996009
     */
    readonly StateEnrolledNurse: Coding;
    /**
     * Code: 158997000
     */
    readonly DistrictNurse: Coding;
    /**
     * Code: 158998005
     */
    readonly PrivateNurse: Coding;
    /**
     * Code: 158999002
     */
    readonly CommunityMidwife: Coding;
    /**
     * Code: 159001001
     */
    readonly ClinicNurse: Coding;
    /**
     * Code: 159002008
     */
    readonly PracticeNurse: Coding;
    /**
     * Code: 159003003
     */
    readonly SchoolNurse: Coding;
    /**
     * Code: 159004009
     */
    readonly NurseTeaching: Coding;
    /**
     * Code: 159005005
     */
    readonly StudentNurse: Coding;
    /**
     * Code: 159006006
     */
    readonly DentalNurse: Coding;
    /**
     * Code: 159007002
     */
    readonly CommunityPediatricNurse: Coding;
    /**
     * Code: 159010009
     */
    readonly HospitalPharmacist: Coding;
    /**
     * Code: 159011008
     */
    readonly RetailPharmacist: Coding;
    /**
     * Code: 159012001
     */
    readonly IndustrialPharmacist: Coding;
    /**
     * Code: 159013006
     */
    readonly PharmaceuticalOfficerHA: Coding;
    /**
     * Code: 159014000
     */
    readonly TraineePharmacist: Coding;
    /**
     * Code: 159016003
     */
    readonly MedicalRadiographer: Coding;
    /**
     * Code: 159017007
     */
    readonly DiagnosticRadiographer: Coding;
    /**
     * Code: 159018002
     */
    readonly TherapeuticRadiographer: Coding;
    /**
     * Code: 159019005
     */
    readonly TraineeRadiographer: Coding;
    /**
     * Code: 159021000
     */
    readonly OphthalmicOptician: Coding;
    /**
     * Code: 159022007
     */
    readonly TraineeOptician: Coding;
    /**
     * Code: 159025009
     */
    readonly RemedialGymnast: Coding;
    /**
     * Code: 159026005
     */
    readonly SpeechAndLanguageTherapist: Coding;
    /**
     * Code: 159027001
     */
    readonly Orthoptist: Coding;
    /**
     * Code: 159028006
     */
    readonly TraineeRemedialTherapist: Coding;
    /**
     * Code: 159033005
     */
    readonly Dietician: Coding;
    /**
     * Code: 159034004
     */
    readonly Podiatrist: Coding;
    /**
     * Code: 159035003
     */
    readonly DentalAuxiliary: Coding;
    /**
     * Code: 159036002
     */
    readonly ECGTechnician: Coding;
    /**
     * Code: 159037006
     */
    readonly EEGTechnician: Coding;
    /**
     * Code: 159038001
     */
    readonly ArtificialLimbFitter: Coding;
    /**
     * Code: 159039009
     */
    readonly ATAudiologyTechnician: Coding;
    /**
     * Code: 159040006
     */
    readonly PharmacyTechnician: Coding;
    /**
     * Code: 159041005
     */
    readonly TraineeMedicalTechnician: Coding;
    /**
     * Code: 159141008
     */
    readonly Geneticist: Coding;
    /**
     * Code: 159972006
     */
    readonly SurgicalCorsetFitter: Coding;
    /**
     * Code: 160008000
     */
    readonly DentalTechnician: Coding;
    /**
     * Code: 160234004
     */
    readonly SalvationArmyMember: Coding;
    /**
     * Code: 160498000
     */
    readonly SchoolChild: Coding;
    /**
     * Code: 160505009
     */
    readonly CommonLawHusband: Coding;
    /**
     * Code: 160506005
     */
    readonly CommonLawWife: Coding;
    /**
     * Code: 160540005
     */
    readonly RomanCatholic: Coding;
    /**
     * Code: 160542002
     */
    readonly Atheist: Coding;
    /**
     * Code: 160543007
     */
    readonly Jew: Coding;
    /**
     * Code: 160544001
     */
    readonly ChristianScienceChurch: Coding;
    /**
     * Code: 160545000
     */
    readonly Hindu: Coding;
    /**
     * Code: 160549006
     */
    readonly Christian: Coding;
    /**
     * Code: 160557009
     */
    readonly Baptist: Coding;
    /**
     * Code: 160558004
     */
    readonly Methodist: Coding;
    /**
     * Code: 160560002
     */
    readonly Presbyterian: Coding;
    /**
     * Code: 160562005
     */
    readonly Pentecostal: Coding;
    /**
     * Code: 160563000
     */
    readonly Evangelist: Coding;
    /**
     * Code: 160566008
     */
    readonly Christadelphian: Coding;
    /**
     * Code: 160567004
     */
    readonly Agnostic: Coding;
    /**
     * Code: 160772005
     */
    readonly VoluntaryWorker: Coding;
    /**
     * Code: 161158003
     */
    readonly Immigrant: Coding;
    /**
     * Code: 166557991000087101
     */
    readonly MaternalGreatGrandFather: Coding;
    /**
     * Code: 17219007
     */
    readonly MaleFiance: Coding;
    /**
     * Code: 173704201000087107
     */
    readonly PaternalFirstCousin: Coding;
    /**
     * Code: 17561000
     */
    readonly Cardiologist: Coding;
    /**
     * Code: 17925003
     */
    readonly AdoptiveBrother: Coding;
    /**
     * Code: 17945006
     */
    readonly NaturalGrandmother: Coding;
    /**
     * Code: 18205005
     */
    readonly WesleyanMethodistFollowerOfReligion: Coding;
    /**
     * Code: 183033871000087106
     */
    readonly MinistryOfHealthSaskatchewan: Coding;
    /**
     * Code: 18803008
     */
    readonly Dermatologist: Coding;
    /**
     * Code: 18850004
     */
    readonly LaboratoryHematologist: Coding;
    /**
     * Code: 18906004
     */
    readonly FosterSibling: Coding;
    /**
     * Code: 189542671000087101
     */
    readonly MinistryOfHealthQuebec: Coding;
    /**
     * Code: 19244007
     */
    readonly Gerodontist: Coding;
    /**
     * Code: 19343003
     */
    readonly TwinSister: Coding;
    /**
     * Code: 194907391000087109
     */
    readonly MaternalGreatGrandMother: Coding;
    /**
     * Code: 19686009
     */
    readonly YoungerSister: Coding;
    /**
     * Code: 20145008
     */
    readonly RemovableProsthodontist: Coding;
    /**
     * Code: 21093007
     */
    readonly HalfSibling: Coding;
    /**
     * Code: 21365001
     */
    readonly SpecializedDentist: Coding;
    /**
     * Code: 21450003
     */
    readonly Neuropsychiatrist: Coding;
    /**
     * Code: 21464003
     */
    readonly AdoptiveMother: Coding;
    /**
     * Code: 21506002
     */
    readonly FemaleSecondCousin: Coding;
    /**
     * Code: 215424891000087101
     */
    readonly PaternalGreatGrandMother: Coding;
    /**
     * Code: 22387007
     */
    readonly SurrogateChild: Coding;
    /**
     * Code: 224080001
     */
    readonly CommittedChristianFollowerOfReligion: Coding;
    /**
     * Code: 224526002
     */
    readonly Woman: Coding;
    /**
     * Code: 224527006
     */
    readonly PersonInTheWorkEnvironment: Coding;
    /**
     * Code: 224528001
     */
    readonly Employee: Coding;
    /**
     * Code: 224529009
     */
    readonly ClinicalAssistant: Coding;
    /**
     * Code: 224530004
     */
    readonly SeniorRegistrar: Coding;
    /**
     * Code: 224531000
     */
    readonly Registrar: Coding;
    /**
     * Code: 224532007
     */
    readonly SeniorHouseOfficer: Coding;
    /**
     * Code: 224533002
     */
    readonly MOMedicalOfficer: Coding;
    /**
     * Code: 224534008
     */
    readonly HealthVisitorNurseMidwife: Coding;
    /**
     * Code: 224535009
     */
    readonly RegisteredNurse: Coding;
    /**
     * Code: 224536005
     */
    readonly MidwiferyTutor: Coding;
    /**
     * Code: 224537001
     */
    readonly AccidentAndEmergencyNurse: Coding;
    /**
     * Code: 224538006
     */
    readonly TriageNurse: Coding;
    /**
     * Code: 224540001
     */
    readonly CommunityNurse: Coding;
    /**
     * Code: 224541002
     */
    readonly NursingContinenceAdvisor: Coding;
    /**
     * Code: 224542009
     */
    readonly CoronaryCareNurse: Coding;
    /**
     * Code: 224543004
     */
    readonly DiabeticNurse: Coding;
    /**
     * Code: 224544005
     */
    readonly FamilyPlanningNurse: Coding;
    /**
     * Code: 224545006
     */
    readonly CareOfTheElderlyNurse: Coding;
    /**
     * Code: 224546007
     */
    readonly ICNInfectionControlNurse: Coding;
    /**
     * Code: 224547003
     */
    readonly IntensiveTherapyNurse: Coding;
    /**
     * Code: 224548008
     */
    readonly LearningDisabilitiesNurse: Coding;
    /**
     * Code: 224549000
     */
    readonly NeonatalNurse: Coding;
    /**
     * Code: 224550000
     */
    readonly NeurologyNurse: Coding;
    /**
     * Code: 224551001
     */
    readonly IndustrialNurse: Coding;
    /**
     * Code: 224552008
     */
    readonly OncologyNurse: Coding;
    /**
     * Code: 224553003
     */
    readonly MacmillanNurse: Coding;
    /**
     * Code: 224554009
     */
    readonly MarieCurieNurse: Coding;
    /**
     * Code: 224555005
     */
    readonly PainControlNurse: Coding;
    /**
     * Code: 224556006
     */
    readonly PalliativeCareNurse: Coding;
    /**
     * Code: 224557002
     */
    readonly ChemotherapyNurse: Coding;
    /**
     * Code: 224558007
     */
    readonly RadiotherapyNurse: Coding;
    /**
     * Code: 224559004
     */
    readonly PACUNurse: Coding;
    /**
     * Code: 224560009
     */
    readonly Stomatherapist: Coding;
    /**
     * Code: 224561008
     */
    readonly TheatreNurse: Coding;
    /**
     * Code: 224562001
     */
    readonly PediatricNurse: Coding;
    /**
     * Code: 224563006
     */
    readonly PsychiatricNurse: Coding;
    /**
     * Code: 224564000
     */
    readonly CommunityMentalHealthNurse: Coding;
    /**
     * Code: 224565004
     */
    readonly RenalNurse: Coding;
    /**
     * Code: 224566003
     */
    readonly HemodialysisNurse: Coding;
    /**
     * Code: 224567007
     */
    readonly WoundCareNurse: Coding;
    /**
     * Code: 224569005
     */
    readonly NurseGrade: Coding;
    /**
     * Code: 224570006
     */
    readonly ClinicalNurseSpecialist: Coding;
    /**
     * Code: 224571005
     */
    readonly NursePractitioner: Coding;
    /**
     * Code: 224572003
     */
    readonly NursingSister: Coding;
    /**
     * Code: 224573008
     */
    readonly CNChargeNurse: Coding;
    /**
     * Code: 224574002
     */
    readonly WardManager: Coding;
    /**
     * Code: 224575001
     */
    readonly NursingTeamLeader: Coding;
    /**
     * Code: 224576000
     */
    readonly NursingAssistant: Coding;
    /**
     * Code: 224577009
     */
    readonly HealthcareAssistant: Coding;
    /**
     * Code: 224578004
     */
    readonly NurseryNurse: Coding;
    /**
     * Code: 224579007
     */
    readonly HealthcareServiceManager: Coding;
    /**
     * Code: 224580005
     */
    readonly OccupationalHealthServiceManager: Coding;
    /**
     * Code: 224581009
     */
    readonly CommunityNurseManager: Coding;
    /**
     * Code: 224583007
     */
    readonly BehaviorTherapist: Coding;
    /**
     * Code: 224584001
     */
    readonly BehaviorTherapyAssistant: Coding;
    /**
     * Code: 224585000
     */
    readonly DramaTherapist: Coding;
    /**
     * Code: 224586004
     */
    readonly DomiciliaryOccupationalTherapist: Coding;
    /**
     * Code: 224587008
     */
    readonly OccupationalTherapyHelper: Coding;
    /**
     * Code: 224588003
     */
    readonly Psychotherapist: Coding;
    /**
     * Code: 224589006
     */
    readonly CommunityBasedPhysiotherapist: Coding;
    /**
     * Code: 224590002
     */
    readonly PlayTherapist: Coding;
    /**
     * Code: 224591003
     */
    readonly PlaySpecialist: Coding;
    /**
     * Code: 224592005
     */
    readonly PlayLeader: Coding;
    /**
     * Code: 224593000
     */
    readonly CommunityBasedSpeechLanguageTherapist: Coding;
    /**
     * Code: 224594006
     */
    readonly SpeechLanguageAssistant: Coding;
    /**
     * Code: 224595007
     */
    readonly ProfessionalCounselor: Coding;
    /**
     * Code: 224596008
     */
    readonly MarriageGuidanceCounselor: Coding;
    /**
     * Code: 224597004
     */
    readonly TrainedNurseCounselor: Coding;
    /**
     * Code: 224598009
     */
    readonly TrainedSocialWorkerCounselor: Coding;
    /**
     * Code: 224599001
     */
    readonly TrainedPersonnelCounselor: Coding;
    /**
     * Code: 224600003
     */
    readonly Psychoanalyst: Coding;
    /**
     * Code: 224601004
     */
    readonly AssistantPsychologist: Coding;
    /**
     * Code: 224602006
     */
    readonly CommunityBasedPodiatrist: Coding;
    /**
     * Code: 224603001
     */
    readonly FootCareWorker: Coding;
    /**
     * Code: 224604007
     */
    readonly Audiometrician: Coding;
    /**
     * Code: 224605008
     */
    readonly Audiometrist: Coding;
    /**
     * Code: 224606009
     */
    readonly TechnicalHealthcareOccupation: Coding;
    /**
     * Code: 224607000
     */
    readonly OccupationalTherapyTechnicalInstructor: Coding;
    /**
     * Code: 224608005
     */
    readonly AdministrativeHealthcareStaff: Coding;
    /**
     * Code: 224609002
     */
    readonly ComplementaryHealthWorker: Coding;
    /**
     * Code: 224610007
     */
    readonly SupportingServicesPersonnel: Coding;
    /**
     * Code: 224614003
     */
    readonly ResearchAssociate: Coding;
    /**
     * Code: 224615002
     */
    readonly ResearchNurse: Coding;
    /**
     * Code: 224619008
     */
    readonly Migrant: Coding;
    /**
     * Code: 224620002
     */
    readonly HumanAidToCommunication: Coding;
    /**
     * Code: 224621003
     */
    readonly Palantypist: Coding;
    /**
     * Code: 224622005
     */
    readonly NoteTaker: Coding;
    /**
     * Code: 224623000
     */
    readonly Cuer: Coding;
    /**
     * Code: 224624006
     */
    readonly Lipspeaker: Coding;
    /**
     * Code: 224625007
     */
    readonly InterpreterForBritishSignLanguage: Coding;
    /**
     * Code: 224626008
     */
    readonly InterpreterForSignsSupportingEnglish: Coding;
    /**
     * Code: 224627004
     */
    readonly GeneralCategoryOfPerson: Coding;
    /**
     * Code: 224936003
     */
    readonly GeneralPractitionerLocum: Coding;
    /**
     * Code: 22515006
     */
    readonly MedicalAssistant: Coding;
    /**
     * Code: 225726006
     */
    readonly LactationConsultant: Coding;
    /**
     * Code: 225727002
     */
    readonly MidwifeCounselor: Coding;
    /**
     * Code: 22573006
     */
    readonly Stepdaughter: Coding;
    /**
     * Code: 22609000
     */
    readonly AdoptiveGrandparent: Coding;
    /**
     * Code: 2272004
     */
    readonly HalfSister: Coding;
    /**
     * Code: 22731001
     */
    readonly OrthopedicSurgeon: Coding;
    /**
     * Code: 22963000
     */
    readonly LegalSister: Coding;
    /**
     * Code: 22983004
     */
    readonly ThoracicSurgeon: Coding;
    /**
     * Code: 231189271000087109
     */
    readonly Naturopath: Coding;
    /**
     * Code: 2316007
     */
    readonly AdoptiveSon: Coding;
    /**
     * Code: 23278007
     */
    readonly CommunityHealthPhysician: Coding;
    /**
     * Code: 236749831000087105
     */
    readonly Prosthetist: Coding;
    /**
     * Code: 2368000
     */
    readonly GreatGreatGrandmother: Coding;
    /**
     * Code: 24430003
     */
    readonly PhysicalMedicineSpecialist: Coding;
    /**
     * Code: 24590004
     */
    readonly Urologist: Coding;
    /**
     * Code: 2481008
     */
    readonly WorkingMother: Coding;
    /**
     * Code: 248544006
     */
    readonly RastafarianFollowerOfReligion: Coding;
    /**
     * Code: 249236551000087105
     */
    readonly CommunityHealthCenter: Coding;
    /**
     * Code: 250624661000087107
     */
    readonly NovaScotiaDepartmentOfHealthAndWellness: Coding;
    /**
     * Code: 25211005
     */
    readonly Aunt: Coding;
    /**
     * Code: 254693751000087105
     */
    readonly NunavutDepartmentOfHealthAndSocialServices: Coding;
    /**
     * Code: 255409004
     */
    readonly PregnantWoman: Coding;
    /**
     * Code: 257497009
     */
    readonly AnimalRider: Coding;
    /**
     * Code: 257498004
     */
    readonly RiderOfMotorcycle: Coding;
    /**
     * Code: 257499007
     */
    readonly PedalCyclist: Coding;
    /**
     * Code: 257500003
     */
    readonly Passenger: Coding;
    /**
     * Code: 257501004
     */
    readonly OccupantOfMotorVehicle: Coding;
    /**
     * Code: 257502006
     */
    readonly OccupantOfTram: Coding;
    /**
     * Code: 257503001
     */
    readonly PillionPassenger: Coding;
    /**
     * Code: 257504007
     */
    readonly PersonRidingOnOutsideOfVehicle: Coding;
    /**
     * Code: 257505008
     */
    readonly PersonTravellingOnOutsideOfTrain: Coding;
    /**
     * Code: 257506009
     */
    readonly FrontSeatPassenger: Coding;
    /**
     * Code: 257508005
     */
    readonly BackSeatPassenger: Coding;
    /**
     * Code: 257509002
     */
    readonly OccupantOfAnimalDrawnVehicle: Coding;
    /**
     * Code: 257510007
     */
    readonly PassengerOnCommercialWatercraft: Coding;
    /**
     * Code: 257511006
     */
    readonly PassengerOnStation: Coding;
    /**
     * Code: 257512004
     */
    readonly PassengerOnTrain: Coding;
    /**
     * Code: 257513009
     */
    readonly MemberOfPublic: Coding;
    /**
     * Code: 257514003
     */
    readonly MemberOfPublicInvolvedIncidentally: Coding;
    /**
     * Code: 257516001
     */
    readonly MemberOfPublicOnGround: Coding;
    /**
     * Code: 257517005
     */
    readonly OccupantOfNonmotorVehicle: Coding;
    /**
     * Code: 257518000
     */
    readonly Pedestrian: Coding;
    /**
     * Code: 257519008
     */
    readonly PersonTrespassingOnRailwayLine: Coding;
    /**
     * Code: 257521003
     */
    readonly RailwayEmployeeOnTrain: Coding;
    /**
     * Code: 257522005
     */
    readonly RecreationalWatercraftUser: Coding;
    /**
     * Code: 257523000
     */
    readonly Swimmer: Coding;
    /**
     * Code: 257524006
     */
    readonly UserOfAnimalDrawnVehicle: Coding;
    /**
     * Code: 257525007
     */
    readonly WatercraftDweller: Coding;
    /**
     * Code: 257526008
     */
    readonly Waterskier: Coding;
    /**
     * Code: 258508741000087105
     */
    readonly HipAndKneeSurgeon: Coding;
    /**
     * Code: 25961008
     */
    readonly ElectroencephalographySpecialist: Coding;
    /**
     * Code: 26042002
     */
    readonly DentalHygienist: Coding;
    /**
     * Code: 260767431000087107
     */
    readonly Hepatologist: Coding;
    /**
     * Code: 262043009
     */
    readonly Companion: Coding;
    /**
     * Code: 26369006
     */
    readonly PublicHealthNurse: Coding;
    /**
     * Code: 265937000
     */
    readonly NursingOccupation: Coding;
    /**
     * Code: 265939002
     */
    readonly MedicalDentalTechnicians: Coding;
    /**
     * Code: 266943008
     */
    readonly SingleParent: Coding;
    /**
     * Code: 268557009
     */
    readonly Sportsman: Coding;
    /**
     * Code: 270002
     */
    readonly FemaleFirstCousin: Coding;
    /**
     * Code: 271448006
     */
    readonly AnglicanFollowerOfReligion: Coding;
    /**
     * Code: 27508009
     */
    readonly SurrogateMother: Coding;
    /**
     * Code: 276035002
     */
    readonly VoluntaryHelper: Coding;
    /**
     * Code: 276036001
     */
    readonly VoluntaryVisitor: Coding;
    /**
     * Code: 276037005
     */
    readonly VolunteerHelper: Coding;
    /**
     * Code: 276119007
     */
    readonly Nonconformist: Coding;
    /**
     * Code: 27733009
     */
    readonly SrSister: Coding;
    /**
     * Code: 28010004
     */
    readonly ShiiteMuslimFollowerOfReligion: Coding;
    /**
     * Code: 28229004
     */
    readonly Optometrist: Coding;
    /**
     * Code: 283875005
     */
    readonly ParkinsonDiseaseNurse: Coding;
    /**
     * Code: 28411006
     */
    readonly Neonatologist: Coding;
    /**
     * Code: 28544002
     */
    readonly ChemicalPathologist: Coding;
    /**
     * Code: 285631911000087106
     */
    readonly ShoulderSurgeon: Coding;
    /**
     * Code: 286864561000087100
     */
    readonly MaternalCousin: Coding;
    /**
     * Code: 287697331000087102
     */
    readonly ProviderBillingNumber: Coding;
    /**
     * Code: 291705421000087106
     */
    readonly InterventionalRadiologist: Coding;
    /**
     * Code: 29539002
     */
    readonly YoungerSibling: Coding;
    /**
     * Code: 2959006
     */
    readonly FemaleCousin: Coding;
    /**
     * Code: 29644004
     */
    readonly FraternalTwinSister: Coding;
    /**
     * Code: 29787005
     */
    readonly FosterBrother: Coding;
    /**
     * Code: 302211009
     */
    readonly SpecialistRegistrar: Coding;
    /**
     * Code: 303069001
     */
    readonly PersonInTheTransportEnvironment: Coding;
    /**
     * Code: 303071001
     */
    readonly PersonInTheFamily: Coding;
    /**
     * Code: 303072008
     */
    readonly PersonInTheHomeEnvironment: Coding;
    /**
     * Code: 303073003
     */
    readonly PersonInTheReligiousEnvironment: Coding;
    /**
     * Code: 303118004
     */
    readonly PersonInTheHealthcareEnvironment: Coding;
    /**
     * Code: 303119007
     */
    readonly PersonInTheCommunityEnvironment: Coding;
    /**
     * Code: 303120001
     */
    readonly PersonInTheRecreationalEnvironment: Coding;
    /**
     * Code: 303121002
     */
    readonly PersonInTheEducationalEnvironment: Coding;
    /**
     * Code: 303122009
     */
    readonly Crewmember: Coding;
    /**
     * Code: 303124005
     */
    readonly MemberOfMentalHealthReviewTribunal: Coding;
    /**
     * Code: 303129000
     */
    readonly HospitalManager: Coding;
    /**
     * Code: 303133007
     */
    readonly ResponsibleMedicalOfficer: Coding;
    /**
     * Code: 303134001
     */
    readonly IndependentDoctor: Coding;
    /**
     * Code: 303977004
     */
    readonly OccupantOfRailwayVehicle: Coding;
    /**
     * Code: 303980003
     */
    readonly DriverOfMotorVehicle: Coding;
    /**
     * Code: 303981004
     */
    readonly DriverOfAnimalDrawnVehicle: Coding;
    /**
     * Code: 303983001
     */
    readonly PassengerOfAnimalDrawnVehicle: Coding;
    /**
     * Code: 303984007
     */
    readonly PassengerOnPedalCycle: Coding;
    /**
     * Code: 303985008
     */
    readonly OccupantOfWatercraft: Coding;
    /**
     * Code: 303986009
     */
    readonly OccupantOfAircraft: Coding;
    /**
     * Code: 303987000
     */
    readonly HorseRider: Coding;
    /**
     * Code: 303988005
     */
    readonly PassengerOnAircraft: Coding;
    /**
     * Code: 303989002
     */
    readonly CrewmemberOnAircraft: Coding;
    /**
     * Code: 303990006
     */
    readonly PassengerOfMotorVehicle: Coding;
    /**
     * Code: 303991005
     */
    readonly Trespasser: Coding;
    /**
     * Code: 303992003
     */
    readonly CarPassenger: Coding;
    /**
     * Code: 303993008
     */
    readonly CoachPassenger: Coding;
    /**
     * Code: 304291006
     */
    readonly BereavementCounselor: Coding;
    /**
     * Code: 304292004
     */
    readonly Surgeon: Coding;
    /**
     * Code: 30578000
     */
    readonly Stepfather: Coding;
    /**
     * Code: 307988006
     */
    readonly MedicalTechnician: Coding;
    /**
     * Code: 308002005
     */
    readonly RemedialTherapist: Coding;
    /**
     * Code: 309294001
     */
    readonly AccidentAndEmergencyDoctor: Coding;
    /**
     * Code: 309295000
     */
    readonly ClinicalOncologist: Coding;
    /**
     * Code: 309296004
     */
    readonly FamilyPlanningDoctor: Coding;
    /**
     * Code: 309322005
     */
    readonly AssociateGeneralPractitioner: Coding;
    /**
     * Code: 309323000
     */
    readonly PartnerOfGeneralPractitioner: Coding;
    /**
     * Code: 309324006
     */
    readonly AssistantGP: Coding;
    /**
     * Code: 309326008
     */
    readonly DeputizingGeneralPractitioner: Coding;
    /**
     * Code: 309327004
     */
    readonly GeneralPractitionerRegistrar: Coding;
    /**
     * Code: 309328009
     */
    readonly AmbulatoryPediatrician: Coding;
    /**
     * Code: 309329001
     */
    readonly CommunityPediatrician: Coding;
    /**
     * Code: 309330006
     */
    readonly PediatricCardiologist: Coding;
    /**
     * Code: 309331005
     */
    readonly PediatricEndocrinologist: Coding;
    /**
     * Code: 309332003
     */
    readonly PediatricGastroenterologist: Coding;
    /**
     * Code: 309333008
     */
    readonly PediatricNephrologist: Coding;
    /**
     * Code: 309334002
     */
    readonly PediatricNeurologist: Coding;
    /**
     * Code: 309335001
     */
    readonly PediatricRheumatologist: Coding;
    /**
     * Code: 309336000
     */
    readonly PediatricOncologist: Coding;
    /**
     * Code: 309337009
     */
    readonly PainManagementSpecialist: Coding;
    /**
     * Code: 309338004
     */
    readonly IntensiveCareSpecialist: Coding;
    /**
     * Code: 309339007
     */
    readonly AdultIntensiveCareSpecialist: Coding;
    /**
     * Code: 309340009
     */
    readonly PediatricIntensiveCareSpecialist: Coding;
    /**
     * Code: 309341008
     */
    readonly BloodTransfusionDoctor: Coding;
    /**
     * Code: 309342001
     */
    readonly Histopathologist: Coding;
    /**
     * Code: 309343006
     */
    readonly Physician: Coding;
    /**
     * Code: 309345004
     */
    readonly ChestPhysician: Coding;
    /**
     * Code: 309346003
     */
    readonly ThoracicPhysician: Coding;
    /**
     * Code: 309347007
     */
    readonly ClinicalHematologist: Coding;
    /**
     * Code: 309348002
     */
    readonly ClinicalNeurophysiologist: Coding;
    /**
     * Code: 309349005
     */
    readonly ClinicalPhysiologist: Coding;
    /**
     * Code: 309350005
     */
    readonly Diabetologist: Coding;
    /**
     * Code: 309351009
     */
    readonly Andrologist: Coding;
    /**
     * Code: 309352002
     */
    readonly Neuroendocrinologist: Coding;
    /**
     * Code: 309353007
     */
    readonly ReproductiveEndocrinologist: Coding;
    /**
     * Code: 309354001
     */
    readonly Thyroidologist: Coding;
    /**
     * Code: 309355000
     */
    readonly ClinicalGeneticist: Coding;
    /**
     * Code: 309356004
     */
    readonly ClinicalCytogeneticist: Coding;
    /**
     * Code: 309357008
     */
    readonly ClinicalMolecularGeneticist: Coding;
    /**
     * Code: 309358003
     */
    readonly GenitourinaryMedicinePhysician: Coding;
    /**
     * Code: 309359006
     */
    readonly PalliativeCarePhysician: Coding;
    /**
     * Code: 309360001
     */
    readonly RehabilitationPhysician: Coding;
    /**
     * Code: 309361002
     */
    readonly ChildAndAdolescentPsychiatrist: Coding;
    /**
     * Code: 309362009
     */
    readonly ForensicPsychiatrist: Coding;
    /**
     * Code: 309363004
     */
    readonly LiaisonPsychiatrist: Coding;
    /**
     * Code: 309364005
     */
    readonly Psychogeriatrician: Coding;
    /**
     * Code: 309365006
     */
    readonly PsychiatristForMentalHandicap: Coding;
    /**
     * Code: 309366007
     */
    readonly RehabilitationPsychiatrist: Coding;
    /**
     * Code: 309367003
     */
    readonly ObstetricianAndGynecologist: Coding;
    /**
     * Code: 309368008
     */
    readonly BreastSurgeon: Coding;
    /**
     * Code: 309369000
     */
    readonly CardiothoracicSurgeon: Coding;
    /**
     * Code: 309371000
     */
    readonly CardiacSurgeon: Coding;
    /**
     * Code: 309372007
     */
    readonly EarNoseAndThroatSurgeon: Coding;
    /**
     * Code: 309373002
     */
    readonly EndocrineSurgeon: Coding;
    /**
     * Code: 309374008
     */
    readonly ThyroidSurgeon: Coding;
    /**
     * Code: 309375009
     */
    readonly PituitarySurgeon: Coding;
    /**
     * Code: 309376005
     */
    readonly GastrointestinalSurgeon: Coding;
    /**
     * Code: 309377001
     */
    readonly GeneralGastrointestinalSurgeon: Coding;
    /**
     * Code: 309378006
     */
    readonly UpperGastrointestinalSurgeon: Coding;
    /**
     * Code: 309379003
     */
    readonly ColorectalSurgeon: Coding;
    /**
     * Code: 309380000
     */
    readonly HandSurgeon: Coding;
    /**
     * Code: 309381001
     */
    readonly HepatobiliarySurgeon: Coding;
    /**
     * Code: 309382008
     */
    readonly OphthalmicSurgeon: Coding;
    /**
     * Code: 309383003
     */
    readonly PediatricSurgeon: Coding;
    /**
     * Code: 309384009
     */
    readonly PancreaticSurgeon: Coding;
    /**
     * Code: 309385005
     */
    readonly TransplantSurgeon: Coding;
    /**
     * Code: 309386006
     */
    readonly TraumaSurgeon: Coding;
    /**
     * Code: 309388007
     */
    readonly VascularSurgeon: Coding;
    /**
     * Code: 309389004
     */
    readonly MedicalPractitionerGrade: Coding;
    /**
     * Code: 309390008
     */
    readonly HospitalConsultant: Coding;
    /**
     * Code: 309391007
     */
    readonly VisitingSpecialistRegistrar: Coding;
    /**
     * Code: 309392000
     */
    readonly ResearchRegistrar: Coding;
    /**
     * Code: 309393005
     */
    readonly GeneralPractitionerGrade: Coding;
    /**
     * Code: 309394004
     */
    readonly GeneralPractitionerPrincipal: Coding;
    /**
     * Code: 309395003
     */
    readonly HospitalSpecialist: Coding;
    /**
     * Code: 309396002
     */
    readonly AssociateSpecialist: Coding;
    /**
     * Code: 309397006
     */
    readonly ResearchFellow: Coding;
    /**
     * Code: 309398001
     */
    readonly AlliedHealthProfessional: Coding;
    /**
     * Code: 309399009
     */
    readonly HospitalDietitian: Coding;
    /**
     * Code: 309400002
     */
    readonly DomiciliaryPhysiotherapist: Coding;
    /**
     * Code: 309401003
     */
    readonly GeneralPractitionerBasedPhysiotherapist: Coding;
    /**
     * Code: 309402005
     */
    readonly HospitalBasedPhysiotherapist: Coding;
    /**
     * Code: 309403000
     */
    readonly PrivatePhysiotherapist: Coding;
    /**
     * Code: 309404006
     */
    readonly PhysiotherapyAssistant: Coding;
    /**
     * Code: 309409001
     */
    readonly HospitalBasedSpeechAndLanguageTherapist: Coding;
    /**
     * Code: 309410006
     */
    readonly ArtsTherapist: Coding;
    /**
     * Code: 309411005
     */
    readonly DanceTherapist: Coding;
    /**
     * Code: 309412003
     */
    readonly MusicTherapist: Coding;
    /**
     * Code: 309413008
     */
    readonly RenalDietitian: Coding;
    /**
     * Code: 309414002
     */
    readonly LiverDietitian: Coding;
    /**
     * Code: 309415001
     */
    readonly OncologyDietitian: Coding;
    /**
     * Code: 309416000
     */
    readonly PediatricDietitian: Coding;
    /**
     * Code: 309417009
     */
    readonly DiabetesDietitian: Coding;
    /**
     * Code: 309418004
     */
    readonly Audiologist: Coding;
    /**
     * Code: 309419007
     */
    readonly HearingTherapist: Coding;
    /**
     * Code: 309420001
     */
    readonly AudiologicalScientist: Coding;
    /**
     * Code: 309421002
     */
    readonly HearingAidDispenser: Coding;
    /**
     * Code: 309422009
     */
    readonly CommunityBasedOccupationalTherapist: Coding;
    /**
     * Code: 309423004
     */
    readonly HospitalOccupationalTherapist: Coding;
    /**
     * Code: 309427003
     */
    readonly SocialServicesOccupationalTherapist: Coding;
    /**
     * Code: 309428008
     */
    readonly Orthotist: Coding;
    /**
     * Code: 309429000
     */
    readonly SurgicalFitter: Coding;
    /**
     * Code: 309434001
     */
    readonly HospitalBasedPodiatrist: Coding;
    /**
     * Code: 309435000
     */
    readonly PodiatryAssistant: Coding;
    /**
     * Code: 309436004
     */
    readonly LymphedemaNurse: Coding;
    /**
     * Code: 309437008
     */
    readonly CommunityLearningDisabilitiesNurse: Coding;
    /**
     * Code: 309439006
     */
    readonly ClinicalNurseTeacher: Coding;
    /**
     * Code: 309440008
     */
    readonly CommunityPracticeNurseTeacher: Coding;
    /**
     * Code: 309441007
     */
    readonly NurseTutor: Coding;
    /**
     * Code: 309442000
     */
    readonly NurseTeacherPractitioner: Coding;
    /**
     * Code: 309443005
     */
    readonly NurseLecturerPractitioner: Coding;
    /**
     * Code: 309444004
     */
    readonly OutreachNurse: Coding;
    /**
     * Code: 309445003
     */
    readonly AnestheticNurse: Coding;
    /**
     * Code: 309446002
     */
    readonly NurseManager: Coding;
    /**
     * Code: 309450009
     */
    readonly NurseAdministrator: Coding;
    /**
     * Code: 309452001
     */
    readonly MidwiferyGrade: Coding;
    /**
     * Code: 309453006
     */
    readonly Midwife: Coding;
    /**
     * Code: 309454000
     */
    readonly StudentMidwife: Coding;
    /**
     * Code: 309455004
     */
    readonly ParentcraftSister: Coding;
    /**
     * Code: 309456003
     */
    readonly Clergy: Coding;
    /**
     * Code: 309459005
     */
    readonly HealthcareProfessionalGrade: Coding;
    /**
     * Code: 309460000
     */
    readonly RestorativeDentist: Coding;
    /**
     * Code: 309687009
     */
    readonly BuddhistFollowerOfReligion: Coding;
    /**
     * Code: 309884000
     */
    readonly MuslimFollowerOfReligion: Coding;
    /**
     * Code: 309885004
     */
    readonly ProtestantFollowerOfReligion: Coding;
    /**
     * Code: 309886003
     */
    readonly QuakerFollowerOfReligion: Coding;
    /**
     * Code: 310170009
     */
    readonly PediatricAudiologist: Coding;
    /**
     * Code: 310171008
     */
    readonly Immunopathologist: Coding;
    /**
     * Code: 310172001
     */
    readonly AudiologicalPhysician: Coding;
    /**
     * Code: 310173006
     */
    readonly ClinicalPharmacologist: Coding;
    /**
     * Code: 310174000
     */
    readonly PrivateDoctor: Coding;
    /**
     * Code: 310175004
     */
    readonly AgencyNurse: Coding;
    /**
     * Code: 310176003
     */
    readonly BehavioralTherapistNurse: Coding;
    /**
     * Code: 310177007
     */
    readonly CardiacRehabilitationNurse: Coding;
    /**
     * Code: 310178002
     */
    readonly GenitourinaryNurse: Coding;
    /**
     * Code: 310179005
     */
    readonly RheumatologyNurseSpecialist: Coding;
    /**
     * Code: 310180008
     */
    readonly ContinenceNurse: Coding;
    /**
     * Code: 310181007
     */
    readonly ContactTracingNurse: Coding;
    /**
     * Code: 310182000
     */
    readonly GeneralNurse: Coding;
    /**
     * Code: 310183005
     */
    readonly NurseForTheMentallyHandicapped: Coding;
    /**
     * Code: 310184004
     */
    readonly LiaisonNurse: Coding;
    /**
     * Code: 310185003
     */
    readonly DiabeticLiaisonNurse: Coding;
    /**
     * Code: 310186002
     */
    readonly NursePsychotherapist: Coding;
    /**
     * Code: 310187006
     */
    readonly CompanyNurse: Coding;
    /**
     * Code: 310188001
     */
    readonly HospitalMidwife: Coding;
    /**
     * Code: 310189009
     */
    readonly GeneticCounselor: Coding;
    /**
     * Code: 310190000
     */
    readonly MentalHealthCounselor: Coding;
    /**
     * Code: 310191001
     */
    readonly ClinicalPsychologist: Coding;
    /**
     * Code: 310192008
     */
    readonly EducationalPsychologist: Coding;
    /**
     * Code: 310193003
     */
    readonly Coroner: Coding;
    /**
     * Code: 310194009
     */
    readonly ApplianceOfficer: Coding;
    /**
     * Code: 310512001
     */
    readonly MedicalOncologist: Coding;
    /**
     * Code: 310543008
     */
    readonly Graduate: Coding;
    /**
     * Code: 311441001
     */
    readonly SchoolMedicalOfficer: Coding;
    /**
     * Code: 312485001
     */
    readonly IntegratedMidwife: Coding;
    /**
     * Code: 313415001
     */
    readonly IdenticalTwin: Coding;
    /**
     * Code: 313416000
     */
    readonly HeterozygousTwin: Coding;
    /**
     * Code: 314712007
     */
    readonly Parachutist: Coding;
    /**
     * Code: 314767008
     */
    readonly BirdFancier: Coding;
    /**
     * Code: 31656007
     */
    readonly AdoptiveGrandmother: Coding;
    /**
     * Code: 317817411000087104
     */
    readonly IndependentHealthCareFacility: Coding;
    /**
     * Code: 31831004
     */
    readonly FosterDaughter: Coding;
    /**
     * Code: 33969000
     */
    readonly GreatGrandparent: Coding;
    /**
     * Code: 339947000
     */
    readonly Man: Coding;
    /**
     * Code: 341320851000087105
     */
    readonly PediatricRadiologist: Coding;
    /**
     * Code: 3425009
     */
    readonly OldestDaughter: Coding;
    /**
     * Code: 3430008
     */
    readonly RadiationTherapist: Coding;
    /**
     * Code: 34581001
     */
    readonly Niece: Coding;
    /**
     * Code: 34871008
     */
    readonly Grandfather: Coding;
    /**
     * Code: 34972000
     */
    readonly OnlyDaughter: Coding;
    /**
     * Code: 357174231000087105
     */
    readonly HealthRegulatoryBodyForOccupationalTherapists: Coding;
    /**
     * Code: 360852005
     */
    readonly Bum: Coding;
    /**
     * Code: 360863008
     */
    readonly Beggar: Coding;
    /**
     * Code: 360984002
     */
    readonly HasidicJewFollowerOfReligion: Coding;
    /**
     * Code: 366740002
     */
    readonly SikhFollowerOfReligion: Coding;
    /**
     * Code: 36682004
     */
    readonly PTPhysiotherapist: Coding;
    /**
     * Code: 368890881000087105
     */
    readonly EmergencyMedicineSpecialist: Coding;
    /**
     * Code: 371439331000087102
     */
    readonly HealthRegulatoryBodyForPhysiotherapists: Coding;
    /**
     * Code: 37154003
     */
    readonly Periodontist: Coding;
    /**
     * Code: 372102007
     */
    readonly RNFirstAssist: Coding;
    /**
     * Code: 373864002
     */
    readonly Outpatient: Coding;
    /**
     * Code: 373929005
     */
    readonly OrphanChild: Coding;
    /**
     * Code: 375005
     */
    readonly Sibling: Coding;
    /**
     * Code: 37504001
     */
    readonly Orthodontist: Coding;
    /**
     * Code: 38048003
     */
    readonly Uncle: Coding;
    /**
     * Code: 38248007
     */
    readonly OldestSon: Coding;
    /**
     * Code: 38265003
     */
    readonly FosterMother: Coding;
    /**
     * Code: 38312007
     */
    readonly Grandparent: Coding;
    /**
     * Code: 3842006
     */
    readonly Chiropractor: Coding;
    /**
     * Code: 3851003
     */
    readonly SurrogateDaughter: Coding;
    /**
     * Code: 385435006
     */
    readonly Individual: Coding;
    /**
     * Code: 387619007
     */
    readonly Optician: Coding;
    /**
     * Code: 39062003
     */
    readonly FosterChild: Coding;
    /**
     * Code: 390790000
     */
    readonly AsylumSeeker: Coding;
    /**
     * Code: 392685081000087107
     */
    readonly HealthRegulatoryBodyForDentalHygienists: Coding;
    /**
     * Code: 394566006
     */
    readonly GreatGrandson: Coding;
    /**
     * Code: 394567002
     */
    readonly GreatGranddaughter: Coding;
    /**
     * Code: 394568007
     */
    readonly ExtendedFamilyMember: Coding;
    /**
     * Code: 394571004
     */
    readonly Employer: Coding;
    /**
     * Code: 394572006
     */
    readonly MedicalSecretary: Coding;
    /**
     * Code: 394618009
     */
    readonly HospitalNurse: Coding;
    /**
     * Code: 394619001
     */
    readonly Guardian: Coding;
    /**
     * Code: 394738000
     */
    readonly OtherRelatedPersons: Coding;
    /**
     * Code: 394745000
     */
    readonly GeneralPracticeOrganisation: Coding;
    /**
     * Code: 394746004
     */
    readonly RegionalOffice: Coding;
    /**
     * Code: 394747008
     */
    readonly HealthAuthority: Coding;
    /**
     * Code: 394748003
     */
    readonly PrimaryCareGroup: Coding;
    /**
     * Code: 394749006
     */
    readonly PrimaryCareTrust: Coding;
    /**
     * Code: 394751005
     */
    readonly SpecialHealthAuthority: Coding;
    /**
     * Code: 394757009
     */
    readonly HospiceIndependent: Coding;
    /**
     * Code: 394758004
     */
    readonly IndependentProvider: Coding;
    /**
     * Code: 394760002
     */
    readonly GPPractice: Coding;
    /**
     * Code: 394762005
     */
    readonly GDPPractice: Coding;
    /**
     * Code: 394763000
     */
    readonly MoDPractice: Coding;
    /**
     * Code: 394764006
     */
    readonly MoDHospital: Coding;
    /**
     * Code: 394765007
     */
    readonly PrisonPractice: Coding;
    /**
     * Code: 394854006
     */
    readonly ImmediateFamilyMember: Coding;
    /**
     * Code: 394855007
     */
    readonly NonImmediateFamilyMember: Coding;
    /**
     * Code: 394856008
     */
    readonly PaternalGrandFather: Coding;
    /**
     * Code: 394857004
     */
    readonly MaternalGrandFather: Coding;
    /**
     * Code: 394858009
     */
    readonly PaternalGrandMother: Coding;
    /**
     * Code: 394859001
     */
    readonly MaternalGrandMother: Coding;
    /**
     * Code: 394860006
     */
    readonly DistantRelative: Coding;
    /**
     * Code: 394861005
     */
    readonly GreatUncle: Coding;
    /**
     * Code: 394862003
     */
    readonly GreatAunt: Coding;
    /**
     * Code: 394863008
     */
    readonly NonFamilyMember: Coding;
    /**
     * Code: 394921008
     */
    readonly Cohabitee: Coding;
    /**
     * Code: 396762341000087100
     */
    readonly PaternalCousin: Coding;
    /**
     * Code: 39677007
     */
    readonly InternalMedicineSpecialist: Coding;
    /**
     * Code: 397824005
     */
    readonly ConsultantAnesthetist: Coding;
    /**
     * Code: 397897005
     */
    readonly Paramedic: Coding;
    /**
     * Code: 397903001
     */
    readonly StaffGradeObstetrician: Coding;
    /**
     * Code: 397908005
     */
    readonly StaffGradePractitioner: Coding;
    /**
     * Code: 3981000175106
     */
    readonly NurseComplexCaseManager: Coding;
    /**
     * Code: 398130009
     */
    readonly MedicalStudent: Coding;
    /**
     * Code: 398154004
     */
    readonly QualityImprovementTemplateTaskForce: Coding;
    /**
     * Code: 398238009
     */
    readonly ActingObstetricRegistrar: Coding;
    /**
     * Code: 398255008
     */
    readonly AssociationOfAnesthesiaClinicalDirectors: Coding;
    /**
     * Code: 398480381000087106
     */
    readonly FamilyMedicineSpecialistPalliativeCare: Coding;
    /**
     * Code: 398524981000087101
     */
    readonly PaternalGreatGrandFather: Coding;
    /**
     * Code: 40127002
     */
    readonly DietitianGeneral: Coding;
    /**
     * Code: 40204001
     */
    readonly Hematologist: Coding;
    /**
     * Code: 404940000
     */
    readonly PhysiotherapistTechnicalInstructor: Coding;
    /**
     * Code: 405277009
     */
    readonly ResidentPhysician: Coding;
    /**
     * Code: 405278004
     */
    readonly CertifiedRegisteredNurseAnesthetist: Coding;
    /**
     * Code: 405279007
     */
    readonly AttendingPhysician: Coding;
    /**
     * Code: 405623001
     */
    readonly AssignedPractitioner: Coding;
    /**
     * Code: 405684005
     */
    readonly ProfessionalInitiatingSurgicalCase: Coding;
    /**
     * Code: 405685006
     */
    readonly ProfessionalProvidingStaffReliefDuringSurgicalProcedure: Coding;
    /**
     * Code: 40570005
     */
    readonly Interpreter: Coding;
    /**
     * Code: 40683002
     */
    readonly Parent: Coding;
    /**
     * Code: 407542009
     */
    readonly InformalCarer: Coding;
    /**
     * Code: 407543004
     */
    readonly PrimaryCarer: Coding;
    /**
     * Code: 408798009
     */
    readonly ConsultantPediatrician: Coding;
    /**
     * Code: 408799001
     */
    readonly ConsultantNeonatologist: Coding;
    /**
     * Code: 409974004
     */
    readonly HealthEducator: Coding;
    /**
     * Code: 409975003
     */
    readonly CertifiedHealthEducationSpecialist: Coding;
    /**
     * Code: 41057000
     */
    readonly SurrogateSon: Coding;
    /**
     * Code: 410597007
     */
    readonly PersonCategorizedByReligiousAffiliation: Coding;
    /**
     * Code: 410598002
     */
    readonly PersonCategorizedByAge: Coding;
    /**
     * Code: 410599005
     */
    readonly Minor: Coding;
    /**
     * Code: 410600008
     */
    readonly PreTeen: Coding;
    /**
     * Code: 410601007
     */
    readonly Child: Coding;
    /**
     * Code: 410602000
     */
    readonly PreschoolChild: Coding;
    /**
     * Code: 410603005
     */
    readonly PersonInTheLegalEnvironment: Coding;
    /**
     * Code: 410604004
     */
    readonly SubjectOfRecord: Coding;
    /**
     * Code: 413327003
     */
    readonly StudentInFullTimeEducation: Coding;
    /**
     * Code: 413854007
     */
    readonly CirculatingNurse: Coding;
    /**
     * Code: 414043009
     */
    readonly DomesticPartner: Coding;
    /**
     * Code: 415075003
     */
    readonly PerioperativeNurse: Coding;
    /**
     * Code: 415506007
     */
    readonly ScrubNurse: Coding;
    /**
     * Code: 416034003
     */
    readonly PrimaryScreener: Coding;
    /**
     * Code: 416035002
     */
    readonly SecondaryScreener: Coding;
    /**
     * Code: 416160000
     */
    readonly FellowOfAmericanAcademyOfOsteopathy: Coding;
    /**
     * Code: 416186861000087101
     */
    readonly SurgicalOncologist: Coding;
    /**
     * Code: 4162009
     */
    readonly DentalAssistant: Coding;
    /**
     * Code: 416625007
     */
    readonly FamilyReunionImmigrant: Coding;
    /**
     * Code: 41672002
     */
    readonly RespiratoryPhysician: Coding;
    /**
     * Code: 416800000
     */
    readonly Inpatient: Coding;
    /**
     * Code: 41795004
     */
    readonly LegalSon: Coding;
    /**
     * Code: 418119000
     */
    readonly InfantChild: Coding;
    /**
     * Code: 41904004
     */
    readonly MedicalXRayTechnician: Coding;
    /**
     * Code: 419358007
     */
    readonly SubjectOfRecordOrOtherProviderOfHistory: Coding;
    /**
     * Code: 41953004
     */
    readonly AdoptiveParent: Coding;
    /**
     * Code: 420058008
     */
    readonly ProviderOfHistoryOtherThanSubject: Coding;
    /**
     * Code: 420158005
     */
    readonly PerformerOfMethod: Coding;
    /**
     * Code: 420314821000087103
     */
    readonly HealthRegulatoryBodyForMassageTherapists: Coding;
    /**
     * Code: 420409002
     */
    readonly OculoplasticSurgeon: Coding;
    /**
     * Code: 420678001
     */
    readonly RetinalSurgeon: Coding;
    /**
     * Code: 421841007
     */
    readonly AdmittingPhysician: Coding;
    /**
     * Code: 422140007
     */
    readonly MedicalOphthalmologist: Coding;
    /**
     * Code: 422234006
     */
    readonly Ophthalmologist: Coding;
    /**
     * Code: 427568008
     */
    readonly Neighbor: Coding;
    /**
     * Code: 427729003
     */
    readonly ElimPentecostalistFollowerOfReligion: Coding;
    /**
     * Code: 427754003
     */
    readonly LiberalJew: Coding;
    /**
     * Code: 427755002
     */
    readonly LutheranFollowerOfReligion: Coding;
    /**
     * Code: 427874000
     */
    readonly CongregationalistFollowerOfReligion: Coding;
    /**
     * Code: 427950002
     */
    readonly HarediJew: Coding;
    /**
     * Code: 427963008
     */
    readonly AdvaitinHinduFollowerOfReligion: Coding;
    /**
     * Code: 427981006
     */
    readonly ZenBuddhist: Coding;
    /**
     * Code: 428024001
     */
    readonly ClinicalTrialParticipant: Coding;
    /**
     * Code: 428315004
     */
    readonly AnabaptistFollowerOfReligion: Coding;
    /**
     * Code: 428347009
     */
    readonly AryaSamajHindu: Coding;
    /**
     * Code: 428373004
     */
    readonly CopticOrthodoxFollowerOfReligion: Coding;
    /**
     * Code: 428376007
     */
    readonly EasternCatholic: Coding;
    /**
     * Code: 428378008
     */
    readonly EthiopianOrthodoxTewahedoFollowerOfReligion: Coding;
    /**
     * Code: 428407001
     */
    readonly TheravadaBuddhist: Coding;
    /**
     * Code: 428408006
     */
    readonly Wiccan: Coding;
    /**
     * Code: 428410008
     */
    readonly ShaktiHindu: Coding;
    /**
     * Code: 428496003
     */
    readonly TibetanBuddhistFollowerOfReligion: Coding;
    /**
     * Code: 428503004
     */
    readonly OrthodoxChristian: Coding;
    /**
     * Code: 428504005
     */
    readonly ChristianSpiritualistFollowerOfReligion: Coding;
    /**
     * Code: 428506007
     */
    readonly DruidFollowerOfReligion: Coding;
    /**
     * Code: 428620006
     */
    readonly SmartaHindu: Coding;
    /**
     * Code: 428666001
     */
    readonly NichirenBuddhist: Coding;
    /**
     * Code: 428792000
     */
    readonly CaseContact: Coding;
    /**
     * Code: 428801007
     */
    readonly IsmailiMuslim: Coding;
    /**
     * Code: 428815009
     */
    readonly AhmadiFollowerOfReligion: Coding;
    /**
     * Code: 428816005
     */
    readonly ArmenianCatholic: Coding;
    /**
     * Code: 428820009
     */
    readonly PureLandBuddhistFollowerOfReligion: Coding;
    /**
     * Code: 428821008
     */
    readonly SeventhDayAdventist: Coding;
    /**
     * Code: 429158002
     */
    readonly GreekOrthodox: Coding;
    /**
     * Code: 429171004
     */
    readonly Spiritualist: Coding;
    /**
     * Code: 429379008
     */
    readonly ShivaHinduFollowerOfReligion: Coding;
    /**
     * Code: 429509008
     */
    readonly ReformJewFollowerOfReligion: Coding;
    /**
     * Code: 429511004
     */
    readonly VaishnavaHindu: Coding;
    /**
     * Code: 429527006
     */
    readonly NewKadampaTraditionBuddhist: Coding;
    /**
     * Code: 429533002
     */
    readonly MahayanaBuddhist: Coding;
    /**
     * Code: 429534008
     */
    readonly MasortiJewFollowerOfReligion: Coding;
    /**
     * Code: 429539003
     */
    readonly Calvinist: Coding;
    /**
     * Code: 429543004
     */
    readonly TaoistFollowerOfReligion: Coding;
    /**
     * Code: 429544005
     */
    readonly RussianOrthodoxFollowerOfReligion: Coding;
    /**
     * Code: 429545006
     */
    readonly SanatanaDharmaFollower: Coding;
    /**
     * Code: 429547003
     */
    readonly Shinto: Coding;
    /**
     * Code: 429577009
     */
    readonly PatientAdvocate: Coding;
    /**
     * Code: 429644000
     */
    readonly OrthodoxJewFollowerOfReligion: Coding;
    /**
     * Code: 429708003
     */
    readonly UnitarianFollowerOfReligion: Coding;
    /**
     * Code: 429732005
     */
    readonly BahaQuoteI: Coding;
    /**
     * Code: 429787006
     */
    readonly JainFollowerOfReligion: Coding;
    /**
     * Code: 429790000
     */
    readonly ZoroastrianFollowerOfReligion: Coding;
    /**
     * Code: 430098004
     */
    readonly DonorForIntestineTransplant: Coding;
    /**
     * Code: 430101000
     */
    readonly WholeBloodDonor: Coding;
    /**
     * Code: 430792005
     */
    readonly StemCellDonor: Coding;
    /**
     * Code: 430882007
     */
    readonly EggDonor: Coding;
    /**
     * Code: 431549007
     */
    readonly FemaleChild: Coding;
    /**
     * Code: 432100008
     */
    readonly HealthCoach: Coding;
    /**
     * Code: 432233171000087103
     */
    readonly JurisdictionalHealthNumber: Coding;
    /**
     * Code: 433152004
     */
    readonly Boy: Coding;
    /**
     * Code: 433475001
     */
    readonly HumanOocyteDonorAge35AndOlder: Coding;
    /**
     * Code: 43702002
     */
    readonly OccupationalHealthNurse: Coding;
    /**
     * Code: 437208901000087109
     */
    readonly ProvincialAndOrTerritorialGovernmentPlanOutOfJurisdiction: Coding;
    /**
     * Code: 438347000
     */
    readonly PersonCategorizedByAffiliationWithBeliefSystem: Coding;
    /**
     * Code: 439182891000087102
     */
    readonly ProviderNumberIssuedByThirdParty: Coding;
    /**
     * Code: 441144831000087108
     */
    readonly HealthRegulatoryBodyForPhysiciansAndSurgeons: Coding;
    /**
     * Code: 441463002
     */
    readonly SpermDonor: Coding;
    /**
     * Code: 441465009
     */
    readonly StrangerIsSpermDonorForArtificialInsemination: Coding;
    /**
     * Code: 441468006
     */
    readonly UnrelatedKnownSpermDonorForArtificialInsemination: Coding;
    /**
     * Code: 44181008
     */
    readonly Granddaughter: Coding;
    /**
     * Code: 442867008
     */
    readonly RespiratoryTherapist: Coding;
    /**
     * Code: 443090005
     */
    readonly PodiatricSurgeon: Coding;
    /**
     * Code: 443470051000087109
     */
    readonly MinistryOfHealth: Coding;
    /**
     * Code: 444000
     */
    readonly LegalSibling: Coding;
    /**
     * Code: 444018008
     */
    readonly PersonWithCharacteristicRelatedToSubjectOfRecord: Coding;
    /**
     * Code: 444052006
     */
    readonly SpouseOfSubject: Coding;
    /**
     * Code: 444053001
     */
    readonly HusbandOfSubject: Coding;
    /**
     * Code: 444054007
     */
    readonly WifeOfSubject: Coding;
    /**
     * Code: 444055008
     */
    readonly UncleOfSubject: Coding;
    /**
     * Code: 444145006
     */
    readonly PartnerInRelationshipWithSubject: Coding;
    /**
     * Code: 444146007
     */
    readonly BoyfriendOfSubject: Coding;
    /**
     * Code: 444147003
     */
    readonly GirlfriendOfSubject: Coding;
    /**
     * Code: 444148008
     */
    readonly PersonInFamilyOfSubject: Coding;
    /**
     * Code: 444168002
     */
    readonly Homemaker: Coding;
    /**
     * Code: 444169005
     */
    readonly HouseHusband: Coding;
    /**
     * Code: 444191003
     */
    readonly AuntOfSubject: Coding;
    /**
     * Code: 444192005
     */
    readonly ChildOfSubject: Coding;
    /**
     * Code: 444193000
     */
    readonly FirstDegreeBloodRelativeOfSubject: Coding;
    /**
     * Code: 444194006
     */
    readonly DaughterOfSubject: Coding;
    /**
     * Code: 444199001
     */
    readonly FriendOfSubject: Coding;
    /**
     * Code: 444210007
     */
    readonly CohabiteeInRelationshipWithSubject: Coding;
    /**
     * Code: 444211006
     */
    readonly CommonLawHusbandOfSubject: Coding;
    /**
     * Code: 444212004
     */
    readonly CommonLawWifeOfSubject: Coding;
    /**
     * Code: 444213009
     */
    readonly DomesticPartnerOfSubject: Coding;
    /**
     * Code: 444241008
     */
    readonly SonOfSubject: Coding;
    /**
     * Code: 444242001
     */
    readonly GrandparentOfSubject: Coding;
    /**
     * Code: 444243006
     */
    readonly MaternalGrandfatherOfSubject: Coding;
    /**
     * Code: 444244000
     */
    readonly MaternalGrandmotherOfSubject: Coding;
    /**
     * Code: 444278006
     */
    readonly FianceOfSubject: Coding;
    /**
     * Code: 444279003
     */
    readonly FemaleFianceOfSubject: Coding;
    /**
     * Code: 444280000
     */
    readonly MaleFianceOfSubject: Coding;
    /**
     * Code: 444292000
     */
    readonly PaternalGrandfatherOfSubject: Coding;
    /**
     * Code: 444293005
     */
    readonly PaternalGrandmotherOfSubject: Coding;
    /**
     * Code: 444294004
     */
    readonly ParentOfSubject: Coding;
    /**
     * Code: 444295003
     */
    readonly FatherOfSubject: Coding;
    /**
     * Code: 444301002
     */
    readonly MotherOfSubject: Coding;
    /**
     * Code: 444302009
     */
    readonly SiblingOfSubject: Coding;
    /**
     * Code: 444303004
     */
    readonly BrotherOfSubject: Coding;
    /**
     * Code: 444304005
     */
    readonly SisterOfSubject: Coding;
    /**
     * Code: 444464007
     */
    readonly RecipientOfBiologicalMaterialFromSubject: Coding;
    /**
     * Code: 444870008
     */
    readonly ApostolicPentecostalistFollowerOfReligion: Coding;
    /**
     * Code: 444912007
     */
    readonly Hypnotherapist: Coding;
    /**
     * Code: 445313000
     */
    readonly AsthmaNurseSpecialist: Coding;
    /**
     * Code: 445451001
     */
    readonly NurseCaseManager: Coding;
    /**
     * Code: 446050000
     */
    readonly PCPPrimaryCarePhysician: Coding;
    /**
     * Code: 44652006
     */
    readonly PharmaceuticalAssistant: Coding;
    /**
     * Code: 446654005
     */
    readonly Refugee: Coding;
    /**
     * Code: 446701002
     */
    readonly AddictionMedicineSpecialist: Coding;
    /**
     * Code: 449161006
     */
    readonly PAPhysicianAssistant: Coding;
    /**
     * Code: 450044741000087104
     */
    readonly Acupuncturist: Coding;
    /**
     * Code: 450768005
     */
    readonly InternationalStudent: Coding;
    /**
     * Code: 45419001
     */
    readonly Masseur: Coding;
    /**
     * Code: 45440000
     */
    readonly Rheumatologist: Coding;
    /**
     * Code: 45544007
     */
    readonly Neurosurgeon: Coding;
    /**
     * Code: 4577005
     */
    readonly FirstCousin: Coding;
    /**
     * Code: 45929001
     */
    readonly HalfBrother: Coding;
    /**
     * Code: 45956004
     */
    readonly Sanitarian: Coding;
    /**
     * Code: 460276491000087102
     */
    readonly NewBrunswickDepartmentOfHealth: Coding;
    /**
     * Code: 46255001
     */
    readonly Pharmacist: Coding;
    /**
     * Code: 46363003
     */
    readonly Stepsister: Coding;
    /**
     * Code: 465511991000087105
     */
    readonly PediatricOrthopedicSurgeon: Coding;
    /**
     * Code: 471000122100
     */
    readonly MultiOrganDonor: Coding;
    /**
     * Code: 471302004
     */
    readonly GovernmentMidwife: Coding;
    /**
     * Code: 47801002
     */
    readonly MaleCousin: Coding;
    /**
     * Code: 48385004
     */
    readonly Acquaintance: Coding;
    /**
     * Code: 48673000
     */
    readonly AdoptiveChild: Coding;
    /**
     * Code: 48740002
     */
    readonly Philologist: Coding;
    /**
     * Code: 49203003
     */
    readonly DispensingOptometrist: Coding;
    /**
     * Code: 494782281000087101
     */
    readonly PediatricHematologist: Coding;
    /**
     * Code: 49993003
     */
    readonly MaxillofacialSurgeon: Coding;
    /**
     * Code: 50058005
     */
    readonly IdenticalTwinSister: Coding;
    /**
     * Code: 50149000
     */
    readonly Endodontist: Coding;
    /**
     * Code: 50261002
     */
    readonly GreatGrandfather: Coding;
    /**
     * Code: 51616000
     */
    readonly SephardicJewFollowerOfReligion: Coding;
    /**
     * Code: 5275007
     */
    readonly NANursingAuxiliary: Coding;
    /**
     * Code: 53201003
     */
    readonly OlderSister: Coding;
    /**
     * Code: 539773351000087101
     */
    readonly AlbertaHealthAndWellness: Coding;
    /**
     * Code: 54056000
     */
    readonly Trustee: Coding;
    /**
     * Code: 54503009
     */
    readonly FaithHealer: Coding;
    /**
     * Code: 548886741000087101
     */
    readonly HealthRegulatoryBodyForDenturists: Coding;
    /**
     * Code: 549577861000087101
     */
    readonly HealthRegulatoryBodyForChiropractors: Coding;
    /**
     * Code: 553641311000087101
     */
    readonly NewfoundlandAndLabradorDepartmentOfHealthAndCommunityServices: Coding;
    /**
     * Code: 55538000
     */
    readonly Cousin: Coding;
    /**
     * Code: 5581000087108
     */
    readonly CanadianJurisdictionBased: Coding;
    /**
     * Code: 56397003
     */
    readonly Neurologist: Coding;
    /**
     * Code: 56466003
     */
    readonly CommunityPhysician: Coding;
    /**
     * Code: 56542007
     */
    readonly MedicalRecordAdministrator: Coding;
    /**
     * Code: 56545009
     */
    readonly CardiovascularSurgeon: Coding;
    /**
     * Code: 567496441000087102
     */
    readonly CancerPlanSaskatchewanAndSexuallyTransmittedDiseasesPlan: Coding;
    /**
     * Code: 569232871000087107
     */
    readonly YukonDepartmentOfHealthAndSocialServices: Coding;
    /**
     * Code: 57654006
     */
    readonly FixedProsthodontist: Coding;
    /**
     * Code: 58293006
     */
    readonly FosterSister: Coding;
    /**
     * Code: 583114651000087104
     */
    readonly MaternalUncle: Coding;
    /**
     * Code: 58626002
     */
    readonly LegalGuardian: Coding;
    /**
     * Code: 589612571000087102
     */
    readonly PaternalUncle: Coding;
    /**
     * Code: 59058001
     */
    readonly GeneralPhysician: Coding;
    /**
     * Code: 59169001
     */
    readonly OrthopedicTechnician: Coding;
    /**
     * Code: 59944000
     */
    readonly Psychologist: Coding;
    /**
     * Code: 60008001
     */
    readonly CommunityBasedDietitian: Coding;
    /**
     * Code: 60614009
     */
    readonly NaturalBrother: Coding;
    /**
     * Code: 609005
     */
    readonly AdoptiveFather: Coding;
    /**
     * Code: 609564621000087104
     */
    readonly HealthRegulatoryBodyForPharmacists: Coding;
    /**
     * Code: 61207006
     */
    readonly MedicalPathologist: Coding;
    /**
     * Code: 61246008
     */
    readonly LaboratoryMedicineSpecialist: Coding;
    /**
     * Code: 61345009
     */
    readonly Otorhinolaryngologist: Coding;
    /**
     * Code: 61894003
     */
    readonly Endocrinologist: Coding;
    /**
     * Code: 619197631000087102
     */
    readonly Neuroradiologist: Coding;
    /**
     * Code: 62090008
     */
    readonly LegalMother: Coding;
    /**
     * Code: 62247001
     */
    readonly FamilyMedicineSpecialist: Coding;
    /**
     * Code: 62296006
     */
    readonly NaturalGrandFather: Coding;
    /**
     * Code: 623630151000087105
     */
    readonly FamilyMedicineSpecialistAnesthetist: Coding;
    /**
     * Code: 63098009
     */
    readonly ClinicalImmunologist: Coding;
    /**
     * Code: 643545671000087106
     */
    readonly HealthRegulatoryBodyForSocialWorkers: Coding;
    /**
     * Code: 644191431000087105
     */
    readonly MinistryOfHealthAndLongTermCareOntario: Coding;
    /**
     * Code: 64988008
     */
    readonly SunniMuslimFollowerOfReligion: Coding;
    /**
     * Code: 65412001
     */
    readonly StepMother: Coding;
    /**
     * Code: 65616008
     */
    readonly Son: Coding;
    /**
     * Code: 65656005
     */
    readonly NaturalMother: Coding;
    /**
     * Code: 65853000
     */
    readonly Student: Coding;
    /**
     * Code: 66089001
     */
    readonly Daughter: Coding;
    /**
     * Code: 66476003
     */
    readonly OralPathologist: Coding;
    /**
     * Code: 666298511000087107
     */
    readonly HealthRegulatoryBodyForMidwives: Coding;
    /**
     * Code: 666997781000087107
     */
    readonly Doula: Coding;
    /**
     * Code: 6676009
     */
    readonly YoungestDaughter: Coding;
    /**
     * Code: 66839005
     */
    readonly Father: Coding;
    /**
     * Code: 66862007
     */
    readonly Radiologist: Coding;
    /**
     * Code: 67005001
     */
    readonly AdoptiveDaughter: Coding;
    /**
     * Code: 67147004
     */
    readonly LegalFather: Coding;
    /**
     * Code: 673433971000087102
     */
    readonly ProviderRegistrationNumber: Coding;
    /**
     * Code: 673825031000087109
     */
    readonly TraditionalHerbalMedicineSpecialist: Coding;
    /**
     * Code: 67822003
     */
    readonly Child_67822003: Coding;
    /**
     * Code: 68021009
     */
    readonly GreatGreatGrandParent: Coding;
    /**
     * Code: 6816002
     */
    readonly SpecializedNurse: Coding;
    /**
     * Code: 682131381000087105
     */
    readonly OccupationalMedicineSpecialist: Coding;
    /**
     * Code: 6868009
     */
    readonly HospitalAdministrator: Coding;
    /**
     * Code: 68867008
     */
    readonly PublicHealthDentist: Coding;
    /**
     * Code: 68950000
     */
    readonly Prosthodontist: Coding;
    /**
     * Code: 691349461000087102
     */
    readonly PaternalAunt: Coding;
    /**
     * Code: 69280009
     */
    readonly SpecializedPhysician: Coding;
    /**
     * Code: 699110007
     */
    readonly SecondDegreeBloodRelative: Coding;
    /**
     * Code: 699111006
     */
    readonly SecondDegreeBloodRelativeOfSubject: Coding;
    /**
     * Code: 70578009
     */
    readonly GrandSon: Coding;
    /**
     * Code: 70862002
     */
    readonly ContactPerson: Coding;
    /**
     * Code: 70924004
     */
    readonly Brother: Coding;
    /**
     * Code: 713176007
     */
    readonly CadaverDonorForLungTransplant: Coding;
    /**
     * Code: 713177003
     */
    readonly CadaverDonorForHeartTransplant: Coding;
    /**
     * Code: 713178008
     */
    readonly CadaverDonorForLiverTransplant: Coding;
    /**
     * Code: 713179000
     */
    readonly CadaverDonorForCornealTransplant: Coding;
    /**
     * Code: 713183000
     */
    readonly CadaverDonorForKidneyTransplant: Coding;
    /**
     * Code: 713184006
     */
    readonly BloodProductDonor: Coding;
    /**
     * Code: 713352007
     */
    readonly SkinDonor: Coding;
    /**
     * Code: 713353002
     */
    readonly LiveRelatedLiverDonor: Coding;
    /**
     * Code: 713369009
     */
    readonly LiveRelatedKidneyDonor: Coding;
    /**
     * Code: 715167002
     */
    readonly OpenEpiscopalChurchFollowerOfReligion: Coding;
    /**
     * Code: 71838004
     */
    readonly Gastroenterologist: Coding;
    /**
     * Code: 72012000
     */
    readonly GreatGrandChild: Coding;
    /**
     * Code: 724022191000087108
     */
    readonly HealthRegulatoryBodyForRespiratoryTherapists: Coding;
    /**
     * Code: 724111801000087104
     */
    readonly PediatricEmergencyMedicineSpecialist: Coding;
    /**
     * Code: 726220521000087101
     */
    readonly ProvincialAndOrTerritorialGovernmentPlanResident: Coding;
    /**
     * Code: 72705000
     */
    readonly Mother: Coding;
    /**
     * Code: 73265009
     */
    readonly NursingAid: Coding;
    /**
     * Code: 73678001
     */
    readonly NaturalSister: Coding;
    /**
     * Code: 74128007
     */
    readonly StepParent: Coding;
    /**
     * Code: 74489007
     */
    readonly YoungerChild: Coding;
    /**
     * Code: 745424761000087106
     */
    readonly WorkersQuoteCompensationNumber: Coding;
    /**
     * Code: 747936471000087102
     */
    readonly FamilyMedicineSpecialistCareOfTheElderly: Coding;
    /**
     * Code: 75226009
     */
    readonly NaturalChild: Coding;
    /**
     * Code: 75271001
     */
    readonly MWMidwife: Coding;
    /**
     * Code: 753977441000087109
     */
    readonly MinistryOfHealthNorthwestTerritories: Coding;
    /**
     * Code: 75615008
     */
    readonly SurrogateFather: Coding;
    /**
     * Code: 76022008
     */
    readonly AdoptiveSister: Coding;
    /**
     * Code: 76087000
     */
    readonly StepBrother: Coding;
    /**
     * Code: 76166008
     */
    readonly PracticalAidPharmacy: Coding;
    /**
     * Code: 76231001
     */
    readonly Osteopath: Coding;
    /**
     * Code: 762510691000087106
     */
    readonly HealthRegulatoryBodyForAudiologistsAndSpeechLanguagePathologists: Coding;
    /**
     * Code: 766788081000087100
     */
    readonly TravelMedicineSpecialist: Coding;
    /**
     * Code: 767205061000087108
     */
    readonly SpineSurgeon: Coding;
    /**
     * Code: 76899008
     */
    readonly InfectiousDiseasesPhysician: Coding;
    /**
     * Code: 78194006
     */
    readonly IdenticalTwinBrother: Coding;
    /**
     * Code: 78272007
     */
    readonly NaturalGrandParent: Coding;
    /**
     * Code: 78652007
     */
    readonly GreatGrandMother: Coding;
    /**
     * Code: 78703002
     */
    readonly GeneralSurgeon: Coding;
    /**
     * Code: 78729002
     */
    readonly DiagnosticRadiologist: Coding;
    /**
     * Code: 78872000
     */
    readonly OrphanMale: Coding;
    /**
     * Code: 79508001
     */
    readonly AdoptiveSibling: Coding;
    /**
     * Code: 79756005
     */
    readonly Boyfriend: Coding;
    /**
     * Code: 79898004
     */
    readonly AuxiliaryMidwife: Coding;
    /**
     * Code: 80386000
     */
    readonly GreatGreatGrandFather: Coding;
    /**
     * Code: 80409005
     */
    readonly Translator: Coding;
    /**
     * Code: 8051000087100
     */
    readonly JurisdictionDriverLicenseNumber: Coding;
    /**
     * Code: 80546007
     */
    readonly OTOccupationalTherapist: Coding;
    /**
     * Code: 80584001
     */
    readonly Psychiatrist: Coding;
    /**
     * Code: 80587008
     */
    readonly JehovahQuoteSWitnessFollowerOfReligion: Coding;
    /**
     * Code: 8061000087102
     */
    readonly JurisdictionalBirthCertificateRegistrationNumber: Coding;
    /**
     * Code: 8071000087106
     */
    readonly InterimHealthProgramCertificateNumber: Coding;
    /**
     * Code: 80933006
     */
    readonly NuclearMedicinePhysician: Coding;
    /**
     * Code: 81173009
     */
    readonly OnlySon: Coding;
    /**
     * Code: 81276006
     */
    readonly TwinBrother: Coding;
    /**
     * Code: 813758161000087106
     */
    readonly MaternalOrFetalMedicineSpecialist: Coding;
    /**
     * Code: 81464008
     */
    readonly ClinicalPathologist: Coding;
    /**
     * Code: 81467001
     */
    readonly FraternalTwinBrother: Coding;
    /**
     * Code: 81706006
     */
    readonly AshkenaziJew: Coding;
    /**
     * Code: 82101005
     */
    readonly NaturalSibling: Coding;
    /**
     * Code: 822410621000087104
     */
    readonly MassageTherapist: Coding;
    /**
     * Code: 82296001
     */
    readonly Pediatrician: Coding;
    /**
     * Code: 83189004
     */
    readonly OtherProfessionalNurse: Coding;
    /**
     * Code: 83273008
     */
    readonly AnatomicPathologist: Coding;
    /**
     * Code: 83408003
     */
    readonly WorkingParent: Coding;
    /**
     * Code: 83420006
     */
    readonly NaturalDaughter: Coding;
    /**
     * Code: 83559000
     */
    readonly Nephew: Coding;
    /**
     * Code: 83685006
     */
    readonly Gynecologist: Coding;
    /**
     * Code: 84390006
     */
    readonly Girlfriend: Coding;
    /**
     * Code: 844670641000087109
     */
    readonly MaternalFirstCousin: Coding;
    /**
     * Code: 8458002
     */
    readonly FosterFather: Coding;
    /**
     * Code: 847240411000087102
     */
    readonly Hospitalist: Coding;
    /**
     * Code: 85058002
     */
    readonly AdoptiveGrandfather: Coding;
    /**
     * Code: 853827051000087104
     */
    readonly SportsMedicineSpecialist: Coding;
    /**
     * Code: 85411004
     */
    readonly YoungerBrother: Coding;
    /**
     * Code: 85683001
     */
    readonly SingleFather: Coding;
    /**
     * Code: 85733003
     */
    readonly GeneralPathologist: Coding;
    /**
     * Code: 859430851000087100
     */
    readonly MedicalCarePlanHospitalTechnicalServicesQuebec: Coding;
    /**
     * Code: 86372007
     */
    readonly GrandChild: Coding;
    /**
     * Code: 8674003
     */
    readonly StepSon: Coding;
    /**
     * Code: 86764008
     */
    readonly StepChild: Coding;
    /**
     * Code: 8724009
     */
    readonly PlasticSurgeon: Coding;
    /**
     * Code: 874107021000087108
     */
    readonly HealthRegulatoryBodyForNurses: Coding;
    /**
     * Code: 876612791000087101
     */
    readonly HealthRegulatoryBodyForParamedics: Coding;
    /**
     * Code: 88189002
     */
    readonly Anesthesiologist: Coding;
    /**
     * Code: 882121321000087100
     */
    readonly MinistryOfHealthBritishColumbia: Coding;
    /**
     * Code: 88475002
     */
    readonly OtherDietitiansAndPublicHealthNutritionists: Coding;
    /**
     * Code: 88510002
     */
    readonly StepSibling: Coding;
    /**
     * Code: 89681006
     */
    readonly YoungestSon: Coding;
    /**
     * Code: 90201008
     */
    readonly PediatricDentist: Coding;
    /**
     * Code: 90655003
     */
    readonly CareOfTheElderlyPhysician: Coding;
    /**
     * Code: 90921004
     */
    readonly FosterParent: Coding;
    /**
     * Code: 912320101000087109
     */
    readonly HealthRegulatoryBodyForPracticalNurses: Coding;
    /**
     * Code: 926871431000087103
     */
    readonly PediatricRespirologist: Coding;
    /**
     * Code: 930012821000087105
     */
    readonly HealthRegulatoryBodyForDietitians: Coding;
    /**
     * Code: 9306000
     */
    readonly LegalParent: Coding;
    /**
     * Code: 954544641000087107
     */
    readonly Homeopath: Coding;
    /**
     * Code: 956387501000087102
     */
    readonly FamilyMedicineSpecialistEmergencyMedicine: Coding;
    /**
     * Code: 969118571000087109
     */
    readonly PediatricHematologistOrOncologist: Coding;
    /**
     * Code: 984095901000087105
     */
    readonly FootAndAnkleSurgeon: Coding;
    /**
     * Code: 990928611000087105
     */
    readonly InvasiveCardiologist: Coding;
    /**
     * Code: 9947008
     */
    readonly NaturalFather: Coding;
    /**
     * Code: 998711551000087102
     */
    readonly HealthPEI: Coding;
    /**
     * Code: 998820271000087109
     */
    readonly ManitobaHealth: Coding;
    /**
     * Code: 999480451000087102
     */
    readonly CaseManager: Coding;
    /**
     * Code: 999480461000087104
     */
    readonly Kinesthesiologist: Coding;
    /**
     * Code: 999483971000087108
     */
    readonly HealthRegulatoryBodyForNaturopathicPractitioners: Coding;
};
/**
 * Roles of participants that may be included in a care team.  Defined as: Is a Person, Healthcare professional (occupation) or Healthcare related organization (qualifier value).
 */
export declare type ParticipantRoleValueSetType = typeof ParticipantRoleValueSet;
/**
 * Roles of participants that may be included in a care team.  Defined as: Is a Person, Healthcare professional (occupation) or Healthcare related organization (qualifier value).
 */
export declare enum ParticipantRoleValueSetEnum {
    /**
     * Code: 100217091000087103
     */
    MaternalAunt = "100217091000087103",
    /**
     * Code: 105428002
     */
    HomosexualParents = "105428002",
    /**
     * Code: 105429005
     */
    ElderlyParents = "105429005",
    /**
     * Code: 105431001
     */
    AdoptedPerson = "105431001",
    /**
     * Code: 105436006
     */
    ElderlyPerson = "105436006",
    /**
     * Code: 105437002
     */
    ElderlyMan = "105437002",
    /**
     * Code: 105438007
     */
    ElderlyWoman = "105438007",
    /**
     * Code: 105449001
     */
    SickRelative = "105449001",
    /**
     * Code: 105450001
     */
    AlcoholicRelative = "105450001",
    /**
     * Code: 105451002
     */
    DementedRelative = "105451002",
    /**
     * Code: 105452009
     */
    DiabeticRelative = "105452009",
    /**
     * Code: 105453004
     */
    SchizophrenicRelative = "105453004",
    /**
     * Code: 105454005
     */
    DisabledRelative = "105454005",
    /**
     * Code: 105455006
     */
    DonorForMedicalOrSurgicalProcedure = "105455006",
    /**
     * Code: 105456007
     */
    LiveDonor = "105456007",
    /**
     * Code: 105457003
     */
    CadaverDonor = "105457003",
    /**
     * Code: 105458008
     */
    CandidateDonor = "105458008",
    /**
     * Code: 105459000
     */
    AcceptedDonor = "105459000",
    /**
     * Code: 105460005
     */
    RejectedDonor = "105460005",
    /**
     * Code: 105461009
     */
    OrganDonor = "105461009",
    /**
     * Code: 105462002
     */
    DonorOfKidneyForTransplant = "105462002",
    /**
     * Code: 105463007
     */
    DonorForLiverTransplant = "105463007",
    /**
     * Code: 105464001
     */
    EyeDonorForCornealTransplant = "105464001",
    /**
     * Code: 105465000
     */
    DonorForHeartTransplant = "105465000",
    /**
     * Code: 105466004
     */
    DonorForLungTransplant = "105466004",
    /**
     * Code: 105467008
     */
    DonorForHeartLungTransplant = "105467008",
    /**
     * Code: 105468003
     */
    TissueDonor = "105468003",
    /**
     * Code: 105469006
     */
    BoneTissueDonor = "105469006",
    /**
     * Code: 105470007
     */
    BloodDonor = "105470007",
    /**
     * Code: 105471006
     */
    BoneMarrowDonor = "105471006",
    /**
     * Code: 105472004
     */
    SpermDonorForArtificialInsemination = "105472004",
    /**
     * Code: 105473009
     */
    HusbandSpermDonorForArtificialInsemination = "105473009",
    /**
     * Code: 105474003
     */
    RelatedSpermDonorForArtificialInsemination = "105474003",
    /**
     * Code: 106289002
     */
    DentalSurgeon = "106289002",
    /**
     * Code: 106291005
     */
    DieticianANDORPublicHealthNutritionist = "106291005",
    /**
     * Code: 106292003
     */
    Nurse = "106292003",
    /**
     * Code: 106293008
     */
    NursingPersonnel = "106293008",
    /**
     * Code: 106294002
     */
    MidwiferyPersonnel = "106294002",
    /**
     * Code: 106296000
     */
    PhysiotherapistANDOROccupationalTherapist = "106296000",
    /**
     * Code: 106330007
     */
    PhilologistTranslatorANDORInterpreter = "106330007",
    /**
     * Code: 10896006
     */
    IdenticalTwinSibling = "10896006",
    /**
     * Code: 10960006
     */
    WorkingFather = "10960006",
    /**
     * Code: 112247003
     */
    MedicalDoctor = "112247003",
    /**
     * Code: 11286003
     */
    TwinSibling = "11286003",
    /**
     * Code: 113157001
     */
    Grandmother = "113157001",
    /**
     * Code: 113158006
     */
    FraternalTwinSibling = "113158006",
    /**
     * Code: 113159003
     */
    LegalDaughter = "113159003",
    /**
     * Code: 113160008
     */
    NaturalSon = "113160008",
    /**
     * Code: 113161007
     */
    FemaleFiance = "113161007",
    /**
     * Code: 113163005
     */
    Friend = "113163005",
    /**
     * Code: 11393001
     */
    GreatGreatGrandChild = "11393001",
    /**
     * Code: 11434005
     */
    MaleSecondCousin = "11434005",
    /**
     * Code: 116153009
     */
    DonorOfControlMaterial = "116153009",
    /**
     * Code: 116154003
     */
    Patient = "116154003",
    /**
     * Code: 11661002
     */
    Neuropathologist = "11661002",
    /**
     * Code: 11773006
     */
    LegalBrother = "11773006",
    /**
     * Code: 11911009
     */
    Nephrologist = "11911009",
    /**
     * Code: 11935004
     */
    Obstetrician = "11935004",
    /**
     * Code: 11993008
     */
    MaleFirstCousin = "11993008",
    /**
     * Code: 12241003
     */
    FosterSon = "12241003",
    /**
     * Code: 125677006
     */
    Relative = "125677006",
    /**
     * Code: 125678001
     */
    FirstDegreeBloodRelative = "125678001",
    /**
     * Code: 125679009
     */
    BloodRelative = "125679009",
    /**
     * Code: 12629003
     */
    SingleMother = "12629003",
    /**
     * Code: 127848009
     */
    Spouse = "127848009",
    /**
     * Code: 127849001
     */
    Husband = "127849001",
    /**
     * Code: 127850001
     */
    Wife = "127850001",
    /**
     * Code: 127851002
     */
    Fiance = "127851002",
    /**
     * Code: 13038009
     */
    OlderBrother = "13038009",
    /**
     * Code: 13157002
     */
    OlderSibling = "13157002",
    /**
     * Code: 133931009
     */
    Infant = "133931009",
    /**
     * Code: 133932002
     */
    Caregiver = "133932002",
    /**
     * Code: 133933007
     */
    Newborn = "133933007",
    /**
     * Code: 133936004
     */
    Adult = "133936004",
    /**
     * Code: 133937008
     */
    Adolescent = "133937008",
    /**
     * Code: 13443008
     */
    SecondCousin = "13443008",
    /**
     * Code: 1354005
     */
    OrphanFemale = "1354005",
    /**
     * Code: 13580004
     */
    SchoolDentalAssistant = "13580004",
    /**
     * Code: 13646006
     */
    NaturalParent = "13646006",
    /**
     * Code: 1421009
     */
    SpecializedSurgeon = "1421009",
    /**
     * Code: 14469008
     */
    LegalChild = "14469008",
    /**
     * Code: 14698002
     */
    MedicalMicrobiologist = "14698002",
    /**
     * Code: 15130002
     */
    SurrogateParent = "15130002",
    /**
     * Code: 158965000
     */
    MedicalPractitioner = "158965000",
    /**
     * Code: 158966004
     */
    MedicalAdministratorNational = "158966004",
    /**
     * Code: 158967008
     */
    ConsultantPhysician = "158967008",
    /**
     * Code: 158968003
     */
    ConsultantSurgeon = "158968003",
    /**
     * Code: 158969006
     */
    ConsultantGynecologyAndObstetrics = "158969006",
    /**
     * Code: 158970007
     */
    Anesthetist = "158970007",
    /**
     * Code: 158971006
     */
    HospitalRegistrar = "158971006",
    /**
     * Code: 158972004
     */
    HouseOfficer = "158972004",
    /**
     * Code: 158973009
     */
    OccupationalPhysician = "158973009",
    /**
     * Code: 158974003
     */
    ClinicalMedicalOfficer = "158974003",
    /**
     * Code: 158975002
     */
    MedicalPractitionerTeaching = "158975002",
    /**
     * Code: 158977005
     */
    DentalAdministrator = "158977005",
    /**
     * Code: 158978000
     */
    DentalConsultant = "158978000",
    /**
     * Code: 158979008
     */
    DentalGeneralPractitioner = "158979008",
    /**
     * Code: 158980006
     */
    DentalPractitionerTeaching = "158980006",
    /**
     * Code: 158983008
     */
    NurseAdministratorNational = "158983008",
    /**
     * Code: 158984002
     */
    NursingOfficerRegion = "158984002",
    /**
     * Code: 158985001
     */
    NursingOfficerDistrict = "158985001",
    /**
     * Code: 158986000
     */
    NursingAdministratorProfessionalBody = "158986000",
    /**
     * Code: 158987009
     */
    NursingOfficerDivision = "158987009",
    /**
     * Code: 158988004
     */
    NurseEducationDirector = "158988004",
    /**
     * Code: 158989007
     */
    OccupationalHealthNursingOfficer = "158989007",
    /**
     * Code: 158990003
     */
    NursingOfficer = "158990003",
    /**
     * Code: 158992006
     */
    MidwiferySister = "158992006",
    /**
     * Code: 158993001
     */
    NursingSisterTheatre = "158993001",
    /**
     * Code: 158994007
     */
    StaffNurse = "158994007",
    /**
     * Code: 158995008
     */
    StaffMidwife = "158995008",
    /**
     * Code: 158996009
     */
    StateEnrolledNurse = "158996009",
    /**
     * Code: 158997000
     */
    DistrictNurse = "158997000",
    /**
     * Code: 158998005
     */
    PrivateNurse = "158998005",
    /**
     * Code: 158999002
     */
    CommunityMidwife = "158999002",
    /**
     * Code: 159001001
     */
    ClinicNurse = "159001001",
    /**
     * Code: 159002008
     */
    PracticeNurse = "159002008",
    /**
     * Code: 159003003
     */
    SchoolNurse = "159003003",
    /**
     * Code: 159004009
     */
    NurseTeaching = "159004009",
    /**
     * Code: 159005005
     */
    StudentNurse = "159005005",
    /**
     * Code: 159006006
     */
    DentalNurse = "159006006",
    /**
     * Code: 159007002
     */
    CommunityPediatricNurse = "159007002",
    /**
     * Code: 159010009
     */
    HospitalPharmacist = "159010009",
    /**
     * Code: 159011008
     */
    RetailPharmacist = "159011008",
    /**
     * Code: 159012001
     */
    IndustrialPharmacist = "159012001",
    /**
     * Code: 159013006
     */
    PharmaceuticalOfficerHA = "159013006",
    /**
     * Code: 159014000
     */
    TraineePharmacist = "159014000",
    /**
     * Code: 159016003
     */
    MedicalRadiographer = "159016003",
    /**
     * Code: 159017007
     */
    DiagnosticRadiographer = "159017007",
    /**
     * Code: 159018002
     */
    TherapeuticRadiographer = "159018002",
    /**
     * Code: 159019005
     */
    TraineeRadiographer = "159019005",
    /**
     * Code: 159021000
     */
    OphthalmicOptician = "159021000",
    /**
     * Code: 159022007
     */
    TraineeOptician = "159022007",
    /**
     * Code: 159025009
     */
    RemedialGymnast = "159025009",
    /**
     * Code: 159026005
     */
    SpeechAndLanguageTherapist = "159026005",
    /**
     * Code: 159027001
     */
    Orthoptist = "159027001",
    /**
     * Code: 159028006
     */
    TraineeRemedialTherapist = "159028006",
    /**
     * Code: 159033005
     */
    Dietician = "159033005",
    /**
     * Code: 159034004
     */
    Podiatrist = "159034004",
    /**
     * Code: 159035003
     */
    DentalAuxiliary = "159035003",
    /**
     * Code: 159036002
     */
    ECGTechnician = "159036002",
    /**
     * Code: 159037006
     */
    EEGTechnician = "159037006",
    /**
     * Code: 159038001
     */
    ArtificialLimbFitter = "159038001",
    /**
     * Code: 159039009
     */
    ATAudiologyTechnician = "159039009",
    /**
     * Code: 159040006
     */
    PharmacyTechnician = "159040006",
    /**
     * Code: 159041005
     */
    TraineeMedicalTechnician = "159041005",
    /**
     * Code: 159141008
     */
    Geneticist = "159141008",
    /**
     * Code: 159972006
     */
    SurgicalCorsetFitter = "159972006",
    /**
     * Code: 160008000
     */
    DentalTechnician = "160008000",
    /**
     * Code: 160234004
     */
    SalvationArmyMember = "160234004",
    /**
     * Code: 160498000
     */
    SchoolChild = "160498000",
    /**
     * Code: 160505009
     */
    CommonLawHusband = "160505009",
    /**
     * Code: 160506005
     */
    CommonLawWife = "160506005",
    /**
     * Code: 160540005
     */
    RomanCatholic = "160540005",
    /**
     * Code: 160542002
     */
    Atheist = "160542002",
    /**
     * Code: 160543007
     */
    Jew = "160543007",
    /**
     * Code: 160544001
     */
    ChristianScienceChurch = "160544001",
    /**
     * Code: 160545000
     */
    Hindu = "160545000",
    /**
     * Code: 160549006
     */
    Christian = "160549006",
    /**
     * Code: 160557009
     */
    Baptist = "160557009",
    /**
     * Code: 160558004
     */
    Methodist = "160558004",
    /**
     * Code: 160560002
     */
    Presbyterian = "160560002",
    /**
     * Code: 160562005
     */
    Pentecostal = "160562005",
    /**
     * Code: 160563000
     */
    Evangelist = "160563000",
    /**
     * Code: 160566008
     */
    Christadelphian = "160566008",
    /**
     * Code: 160567004
     */
    Agnostic = "160567004",
    /**
     * Code: 160772005
     */
    VoluntaryWorker = "160772005",
    /**
     * Code: 161158003
     */
    Immigrant = "161158003",
    /**
     * Code: 166557991000087101
     */
    MaternalGreatGrandFather = "166557991000087101",
    /**
     * Code: 17219007
     */
    MaleFiance = "17219007",
    /**
     * Code: 173704201000087107
     */
    PaternalFirstCousin = "173704201000087107",
    /**
     * Code: 17561000
     */
    Cardiologist = "17561000",
    /**
     * Code: 17925003
     */
    AdoptiveBrother = "17925003",
    /**
     * Code: 17945006
     */
    NaturalGrandmother = "17945006",
    /**
     * Code: 18205005
     */
    WesleyanMethodistFollowerOfReligion = "18205005",
    /**
     * Code: 183033871000087106
     */
    MinistryOfHealthSaskatchewan = "183033871000087106",
    /**
     * Code: 18803008
     */
    Dermatologist = "18803008",
    /**
     * Code: 18850004
     */
    LaboratoryHematologist = "18850004",
    /**
     * Code: 18906004
     */
    FosterSibling = "18906004",
    /**
     * Code: 189542671000087101
     */
    MinistryOfHealthQuebec = "189542671000087101",
    /**
     * Code: 19244007
     */
    Gerodontist = "19244007",
    /**
     * Code: 19343003
     */
    TwinSister = "19343003",
    /**
     * Code: 194907391000087109
     */
    MaternalGreatGrandMother = "194907391000087109",
    /**
     * Code: 19686009
     */
    YoungerSister = "19686009",
    /**
     * Code: 20145008
     */
    RemovableProsthodontist = "20145008",
    /**
     * Code: 21093007
     */
    HalfSibling = "21093007",
    /**
     * Code: 21365001
     */
    SpecializedDentist = "21365001",
    /**
     * Code: 21450003
     */
    Neuropsychiatrist = "21450003",
    /**
     * Code: 21464003
     */
    AdoptiveMother = "21464003",
    /**
     * Code: 21506002
     */
    FemaleSecondCousin = "21506002",
    /**
     * Code: 215424891000087101
     */
    PaternalGreatGrandMother = "215424891000087101",
    /**
     * Code: 22387007
     */
    SurrogateChild = "22387007",
    /**
     * Code: 224080001
     */
    CommittedChristianFollowerOfReligion = "224080001",
    /**
     * Code: 224526002
     */
    Woman = "224526002",
    /**
     * Code: 224527006
     */
    PersonInTheWorkEnvironment = "224527006",
    /**
     * Code: 224528001
     */
    Employee = "224528001",
    /**
     * Code: 224529009
     */
    ClinicalAssistant = "224529009",
    /**
     * Code: 224530004
     */
    SeniorRegistrar = "224530004",
    /**
     * Code: 224531000
     */
    Registrar = "224531000",
    /**
     * Code: 224532007
     */
    SeniorHouseOfficer = "224532007",
    /**
     * Code: 224533002
     */
    MOMedicalOfficer = "224533002",
    /**
     * Code: 224534008
     */
    HealthVisitorNurseMidwife = "224534008",
    /**
     * Code: 224535009
     */
    RegisteredNurse = "224535009",
    /**
     * Code: 224536005
     */
    MidwiferyTutor = "224536005",
    /**
     * Code: 224537001
     */
    AccidentAndEmergencyNurse = "224537001",
    /**
     * Code: 224538006
     */
    TriageNurse = "224538006",
    /**
     * Code: 224540001
     */
    CommunityNurse = "224540001",
    /**
     * Code: 224541002
     */
    NursingContinenceAdvisor = "224541002",
    /**
     * Code: 224542009
     */
    CoronaryCareNurse = "224542009",
    /**
     * Code: 224543004
     */
    DiabeticNurse = "224543004",
    /**
     * Code: 224544005
     */
    FamilyPlanningNurse = "224544005",
    /**
     * Code: 224545006
     */
    CareOfTheElderlyNurse = "224545006",
    /**
     * Code: 224546007
     */
    ICNInfectionControlNurse = "224546007",
    /**
     * Code: 224547003
     */
    IntensiveTherapyNurse = "224547003",
    /**
     * Code: 224548008
     */
    LearningDisabilitiesNurse = "224548008",
    /**
     * Code: 224549000
     */
    NeonatalNurse = "224549000",
    /**
     * Code: 224550000
     */
    NeurologyNurse = "224550000",
    /**
     * Code: 224551001
     */
    IndustrialNurse = "224551001",
    /**
     * Code: 224552008
     */
    OncologyNurse = "224552008",
    /**
     * Code: 224553003
     */
    MacmillanNurse = "224553003",
    /**
     * Code: 224554009
     */
    MarieCurieNurse = "224554009",
    /**
     * Code: 224555005
     */
    PainControlNurse = "224555005",
    /**
     * Code: 224556006
     */
    PalliativeCareNurse = "224556006",
    /**
     * Code: 224557002
     */
    ChemotherapyNurse = "224557002",
    /**
     * Code: 224558007
     */
    RadiotherapyNurse = "224558007",
    /**
     * Code: 224559004
     */
    PACUNurse = "224559004",
    /**
     * Code: 224560009
     */
    Stomatherapist = "224560009",
    /**
     * Code: 224561008
     */
    TheatreNurse = "224561008",
    /**
     * Code: 224562001
     */
    PediatricNurse = "224562001",
    /**
     * Code: 224563006
     */
    PsychiatricNurse = "224563006",
    /**
     * Code: 224564000
     */
    CommunityMentalHealthNurse = "224564000",
    /**
     * Code: 224565004
     */
    RenalNurse = "224565004",
    /**
     * Code: 224566003
     */
    HemodialysisNurse = "224566003",
    /**
     * Code: 224567007
     */
    WoundCareNurse = "224567007",
    /**
     * Code: 224569005
     */
    NurseGrade = "224569005",
    /**
     * Code: 224570006
     */
    ClinicalNurseSpecialist = "224570006",
    /**
     * Code: 224571005
     */
    NursePractitioner = "224571005",
    /**
     * Code: 224572003
     */
    NursingSister = "224572003",
    /**
     * Code: 224573008
     */
    CNChargeNurse = "224573008",
    /**
     * Code: 224574002
     */
    WardManager = "224574002",
    /**
     * Code: 224575001
     */
    NursingTeamLeader = "224575001",
    /**
     * Code: 224576000
     */
    NursingAssistant = "224576000",
    /**
     * Code: 224577009
     */
    HealthcareAssistant = "224577009",
    /**
     * Code: 224578004
     */
    NurseryNurse = "224578004",
    /**
     * Code: 224579007
     */
    HealthcareServiceManager = "224579007",
    /**
     * Code: 224580005
     */
    OccupationalHealthServiceManager = "224580005",
    /**
     * Code: 224581009
     */
    CommunityNurseManager = "224581009",
    /**
     * Code: 224583007
     */
    BehaviorTherapist = "224583007",
    /**
     * Code: 224584001
     */
    BehaviorTherapyAssistant = "224584001",
    /**
     * Code: 224585000
     */
    DramaTherapist = "224585000",
    /**
     * Code: 224586004
     */
    DomiciliaryOccupationalTherapist = "224586004",
    /**
     * Code: 224587008
     */
    OccupationalTherapyHelper = "224587008",
    /**
     * Code: 224588003
     */
    Psychotherapist = "224588003",
    /**
     * Code: 224589006
     */
    CommunityBasedPhysiotherapist = "224589006",
    /**
     * Code: 224590002
     */
    PlayTherapist = "224590002",
    /**
     * Code: 224591003
     */
    PlaySpecialist = "224591003",
    /**
     * Code: 224592005
     */
    PlayLeader = "224592005",
    /**
     * Code: 224593000
     */
    CommunityBasedSpeechLanguageTherapist = "224593000",
    /**
     * Code: 224594006
     */
    SpeechLanguageAssistant = "224594006",
    /**
     * Code: 224595007
     */
    ProfessionalCounselor = "224595007",
    /**
     * Code: 224596008
     */
    MarriageGuidanceCounselor = "224596008",
    /**
     * Code: 224597004
     */
    TrainedNurseCounselor = "224597004",
    /**
     * Code: 224598009
     */
    TrainedSocialWorkerCounselor = "224598009",
    /**
     * Code: 224599001
     */
    TrainedPersonnelCounselor = "224599001",
    /**
     * Code: 224600003
     */
    Psychoanalyst = "224600003",
    /**
     * Code: 224601004
     */
    AssistantPsychologist = "224601004",
    /**
     * Code: 224602006
     */
    CommunityBasedPodiatrist = "224602006",
    /**
     * Code: 224603001
     */
    FootCareWorker = "224603001",
    /**
     * Code: 224604007
     */
    Audiometrician = "224604007",
    /**
     * Code: 224605008
     */
    Audiometrist = "224605008",
    /**
     * Code: 224606009
     */
    TechnicalHealthcareOccupation = "224606009",
    /**
     * Code: 224607000
     */
    OccupationalTherapyTechnicalInstructor = "224607000",
    /**
     * Code: 224608005
     */
    AdministrativeHealthcareStaff = "224608005",
    /**
     * Code: 224609002
     */
    ComplementaryHealthWorker = "224609002",
    /**
     * Code: 224610007
     */
    SupportingServicesPersonnel = "224610007",
    /**
     * Code: 224614003
     */
    ResearchAssociate = "224614003",
    /**
     * Code: 224615002
     */
    ResearchNurse = "224615002",
    /**
     * Code: 224619008
     */
    Migrant = "224619008",
    /**
     * Code: 224620002
     */
    HumanAidToCommunication = "224620002",
    /**
     * Code: 224621003
     */
    Palantypist = "224621003",
    /**
     * Code: 224622005
     */
    NoteTaker = "224622005",
    /**
     * Code: 224623000
     */
    Cuer = "224623000",
    /**
     * Code: 224624006
     */
    Lipspeaker = "224624006",
    /**
     * Code: 224625007
     */
    InterpreterForBritishSignLanguage = "224625007",
    /**
     * Code: 224626008
     */
    InterpreterForSignsSupportingEnglish = "224626008",
    /**
     * Code: 224627004
     */
    GeneralCategoryOfPerson = "224627004",
    /**
     * Code: 224936003
     */
    GeneralPractitionerLocum = "224936003",
    /**
     * Code: 22515006
     */
    MedicalAssistant = "22515006",
    /**
     * Code: 225726006
     */
    LactationConsultant = "225726006",
    /**
     * Code: 225727002
     */
    MidwifeCounselor = "225727002",
    /**
     * Code: 22573006
     */
    Stepdaughter = "22573006",
    /**
     * Code: 22609000
     */
    AdoptiveGrandparent = "22609000",
    /**
     * Code: 2272004
     */
    HalfSister = "2272004",
    /**
     * Code: 22731001
     */
    OrthopedicSurgeon = "22731001",
    /**
     * Code: 22963000
     */
    LegalSister = "22963000",
    /**
     * Code: 22983004
     */
    ThoracicSurgeon = "22983004",
    /**
     * Code: 231189271000087109
     */
    Naturopath = "231189271000087109",
    /**
     * Code: 2316007
     */
    AdoptiveSon = "2316007",
    /**
     * Code: 23278007
     */
    CommunityHealthPhysician = "23278007",
    /**
     * Code: 236749831000087105
     */
    Prosthetist = "236749831000087105",
    /**
     * Code: 2368000
     */
    GreatGreatGrandmother = "2368000",
    /**
     * Code: 24430003
     */
    PhysicalMedicineSpecialist = "24430003",
    /**
     * Code: 24590004
     */
    Urologist = "24590004",
    /**
     * Code: 2481008
     */
    WorkingMother = "2481008",
    /**
     * Code: 248544006
     */
    RastafarianFollowerOfReligion = "248544006",
    /**
     * Code: 249236551000087105
     */
    CommunityHealthCenter = "249236551000087105",
    /**
     * Code: 250624661000087107
     */
    NovaScotiaDepartmentOfHealthAndWellness = "250624661000087107",
    /**
     * Code: 25211005
     */
    Aunt = "25211005",
    /**
     * Code: 254693751000087105
     */
    NunavutDepartmentOfHealthAndSocialServices = "254693751000087105",
    /**
     * Code: 255409004
     */
    PregnantWoman = "255409004",
    /**
     * Code: 257497009
     */
    AnimalRider = "257497009",
    /**
     * Code: 257498004
     */
    RiderOfMotorcycle = "257498004",
    /**
     * Code: 257499007
     */
    PedalCyclist = "257499007",
    /**
     * Code: 257500003
     */
    Passenger = "257500003",
    /**
     * Code: 257501004
     */
    OccupantOfMotorVehicle = "257501004",
    /**
     * Code: 257502006
     */
    OccupantOfTram = "257502006",
    /**
     * Code: 257503001
     */
    PillionPassenger = "257503001",
    /**
     * Code: 257504007
     */
    PersonRidingOnOutsideOfVehicle = "257504007",
    /**
     * Code: 257505008
     */
    PersonTravellingOnOutsideOfTrain = "257505008",
    /**
     * Code: 257506009
     */
    FrontSeatPassenger = "257506009",
    /**
     * Code: 257508005
     */
    BackSeatPassenger = "257508005",
    /**
     * Code: 257509002
     */
    OccupantOfAnimalDrawnVehicle = "257509002",
    /**
     * Code: 257510007
     */
    PassengerOnCommercialWatercraft = "257510007",
    /**
     * Code: 257511006
     */
    PassengerOnStation = "257511006",
    /**
     * Code: 257512004
     */
    PassengerOnTrain = "257512004",
    /**
     * Code: 257513009
     */
    MemberOfPublic = "257513009",
    /**
     * Code: 257514003
     */
    MemberOfPublicInvolvedIncidentally = "257514003",
    /**
     * Code: 257516001
     */
    MemberOfPublicOnGround = "257516001",
    /**
     * Code: 257517005
     */
    OccupantOfNonmotorVehicle = "257517005",
    /**
     * Code: 257518000
     */
    Pedestrian = "257518000",
    /**
     * Code: 257519008
     */
    PersonTrespassingOnRailwayLine = "257519008",
    /**
     * Code: 257521003
     */
    RailwayEmployeeOnTrain = "257521003",
    /**
     * Code: 257522005
     */
    RecreationalWatercraftUser = "257522005",
    /**
     * Code: 257523000
     */
    Swimmer = "257523000",
    /**
     * Code: 257524006
     */
    UserOfAnimalDrawnVehicle = "257524006",
    /**
     * Code: 257525007
     */
    WatercraftDweller = "257525007",
    /**
     * Code: 257526008
     */
    Waterskier = "257526008",
    /**
     * Code: 258508741000087105
     */
    HipAndKneeSurgeon = "258508741000087105",
    /**
     * Code: 25961008
     */
    ElectroencephalographySpecialist = "25961008",
    /**
     * Code: 26042002
     */
    DentalHygienist = "26042002",
    /**
     * Code: 260767431000087107
     */
    Hepatologist = "260767431000087107",
    /**
     * Code: 262043009
     */
    Companion = "262043009",
    /**
     * Code: 26369006
     */
    PublicHealthNurse = "26369006",
    /**
     * Code: 265937000
     */
    NursingOccupation = "265937000",
    /**
     * Code: 265939002
     */
    MedicalDentalTechnicians = "265939002",
    /**
     * Code: 266943008
     */
    SingleParent = "266943008",
    /**
     * Code: 268557009
     */
    Sportsman = "268557009",
    /**
     * Code: 270002
     */
    FemaleFirstCousin = "270002",
    /**
     * Code: 271448006
     */
    AnglicanFollowerOfReligion = "271448006",
    /**
     * Code: 27508009
     */
    SurrogateMother = "27508009",
    /**
     * Code: 276035002
     */
    VoluntaryHelper = "276035002",
    /**
     * Code: 276036001
     */
    VoluntaryVisitor = "276036001",
    /**
     * Code: 276037005
     */
    VolunteerHelper = "276037005",
    /**
     * Code: 276119007
     */
    Nonconformist = "276119007",
    /**
     * Code: 27733009
     */
    SrSister = "27733009",
    /**
     * Code: 28010004
     */
    ShiiteMuslimFollowerOfReligion = "28010004",
    /**
     * Code: 28229004
     */
    Optometrist = "28229004",
    /**
     * Code: 283875005
     */
    ParkinsonDiseaseNurse = "283875005",
    /**
     * Code: 28411006
     */
    Neonatologist = "28411006",
    /**
     * Code: 28544002
     */
    ChemicalPathologist = "28544002",
    /**
     * Code: 285631911000087106
     */
    ShoulderSurgeon = "285631911000087106",
    /**
     * Code: 286864561000087100
     */
    MaternalCousin = "286864561000087100",
    /**
     * Code: 287697331000087102
     */
    ProviderBillingNumber = "287697331000087102",
    /**
     * Code: 291705421000087106
     */
    InterventionalRadiologist = "291705421000087106",
    /**
     * Code: 29539002
     */
    YoungerSibling = "29539002",
    /**
     * Code: 2959006
     */
    FemaleCousin = "2959006",
    /**
     * Code: 29644004
     */
    FraternalTwinSister = "29644004",
    /**
     * Code: 29787005
     */
    FosterBrother = "29787005",
    /**
     * Code: 302211009
     */
    SpecialistRegistrar = "302211009",
    /**
     * Code: 303069001
     */
    PersonInTheTransportEnvironment = "303069001",
    /**
     * Code: 303071001
     */
    PersonInTheFamily = "303071001",
    /**
     * Code: 303072008
     */
    PersonInTheHomeEnvironment = "303072008",
    /**
     * Code: 303073003
     */
    PersonInTheReligiousEnvironment = "303073003",
    /**
     * Code: 303118004
     */
    PersonInTheHealthcareEnvironment = "303118004",
    /**
     * Code: 303119007
     */
    PersonInTheCommunityEnvironment = "303119007",
    /**
     * Code: 303120001
     */
    PersonInTheRecreationalEnvironment = "303120001",
    /**
     * Code: 303121002
     */
    PersonInTheEducationalEnvironment = "303121002",
    /**
     * Code: 303122009
     */
    Crewmember = "303122009",
    /**
     * Code: 303124005
     */
    MemberOfMentalHealthReviewTribunal = "303124005",
    /**
     * Code: 303129000
     */
    HospitalManager = "303129000",
    /**
     * Code: 303133007
     */
    ResponsibleMedicalOfficer = "303133007",
    /**
     * Code: 303134001
     */
    IndependentDoctor = "303134001",
    /**
     * Code: 303977004
     */
    OccupantOfRailwayVehicle = "303977004",
    /**
     * Code: 303980003
     */
    DriverOfMotorVehicle = "303980003",
    /**
     * Code: 303981004
     */
    DriverOfAnimalDrawnVehicle = "303981004",
    /**
     * Code: 303983001
     */
    PassengerOfAnimalDrawnVehicle = "303983001",
    /**
     * Code: 303984007
     */
    PassengerOnPedalCycle = "303984007",
    /**
     * Code: 303985008
     */
    OccupantOfWatercraft = "303985008",
    /**
     * Code: 303986009
     */
    OccupantOfAircraft = "303986009",
    /**
     * Code: 303987000
     */
    HorseRider = "303987000",
    /**
     * Code: 303988005
     */
    PassengerOnAircraft = "303988005",
    /**
     * Code: 303989002
     */
    CrewmemberOnAircraft = "303989002",
    /**
     * Code: 303990006
     */
    PassengerOfMotorVehicle = "303990006",
    /**
     * Code: 303991005
     */
    Trespasser = "303991005",
    /**
     * Code: 303992003
     */
    CarPassenger = "303992003",
    /**
     * Code: 303993008
     */
    CoachPassenger = "303993008",
    /**
     * Code: 304291006
     */
    BereavementCounselor = "304291006",
    /**
     * Code: 304292004
     */
    Surgeon = "304292004",
    /**
     * Code: 30578000
     */
    Stepfather = "30578000",
    /**
     * Code: 307988006
     */
    MedicalTechnician = "307988006",
    /**
     * Code: 308002005
     */
    RemedialTherapist = "308002005",
    /**
     * Code: 309294001
     */
    AccidentAndEmergencyDoctor = "309294001",
    /**
     * Code: 309295000
     */
    ClinicalOncologist = "309295000",
    /**
     * Code: 309296004
     */
    FamilyPlanningDoctor = "309296004",
    /**
     * Code: 309322005
     */
    AssociateGeneralPractitioner = "309322005",
    /**
     * Code: 309323000
     */
    PartnerOfGeneralPractitioner = "309323000",
    /**
     * Code: 309324006
     */
    AssistantGP = "309324006",
    /**
     * Code: 309326008
     */
    DeputizingGeneralPractitioner = "309326008",
    /**
     * Code: 309327004
     */
    GeneralPractitionerRegistrar = "309327004",
    /**
     * Code: 309328009
     */
    AmbulatoryPediatrician = "309328009",
    /**
     * Code: 309329001
     */
    CommunityPediatrician = "309329001",
    /**
     * Code: 309330006
     */
    PediatricCardiologist = "309330006",
    /**
     * Code: 309331005
     */
    PediatricEndocrinologist = "309331005",
    /**
     * Code: 309332003
     */
    PediatricGastroenterologist = "309332003",
    /**
     * Code: 309333008
     */
    PediatricNephrologist = "309333008",
    /**
     * Code: 309334002
     */
    PediatricNeurologist = "309334002",
    /**
     * Code: 309335001
     */
    PediatricRheumatologist = "309335001",
    /**
     * Code: 309336000
     */
    PediatricOncologist = "309336000",
    /**
     * Code: 309337009
     */
    PainManagementSpecialist = "309337009",
    /**
     * Code: 309338004
     */
    IntensiveCareSpecialist = "309338004",
    /**
     * Code: 309339007
     */
    AdultIntensiveCareSpecialist = "309339007",
    /**
     * Code: 309340009
     */
    PediatricIntensiveCareSpecialist = "309340009",
    /**
     * Code: 309341008
     */
    BloodTransfusionDoctor = "309341008",
    /**
     * Code: 309342001
     */
    Histopathologist = "309342001",
    /**
     * Code: 309343006
     */
    Physician = "309343006",
    /**
     * Code: 309345004
     */
    ChestPhysician = "309345004",
    /**
     * Code: 309346003
     */
    ThoracicPhysician = "309346003",
    /**
     * Code: 309347007
     */
    ClinicalHematologist = "309347007",
    /**
     * Code: 309348002
     */
    ClinicalNeurophysiologist = "309348002",
    /**
     * Code: 309349005
     */
    ClinicalPhysiologist = "309349005",
    /**
     * Code: 309350005
     */
    Diabetologist = "309350005",
    /**
     * Code: 309351009
     */
    Andrologist = "309351009",
    /**
     * Code: 309352002
     */
    Neuroendocrinologist = "309352002",
    /**
     * Code: 309353007
     */
    ReproductiveEndocrinologist = "309353007",
    /**
     * Code: 309354001
     */
    Thyroidologist = "309354001",
    /**
     * Code: 309355000
     */
    ClinicalGeneticist = "309355000",
    /**
     * Code: 309356004
     */
    ClinicalCytogeneticist = "309356004",
    /**
     * Code: 309357008
     */
    ClinicalMolecularGeneticist = "309357008",
    /**
     * Code: 309358003
     */
    GenitourinaryMedicinePhysician = "309358003",
    /**
     * Code: 309359006
     */
    PalliativeCarePhysician = "309359006",
    /**
     * Code: 309360001
     */
    RehabilitationPhysician = "309360001",
    /**
     * Code: 309361002
     */
    ChildAndAdolescentPsychiatrist = "309361002",
    /**
     * Code: 309362009
     */
    ForensicPsychiatrist = "309362009",
    /**
     * Code: 309363004
     */
    LiaisonPsychiatrist = "309363004",
    /**
     * Code: 309364005
     */
    Psychogeriatrician = "309364005",
    /**
     * Code: 309365006
     */
    PsychiatristForMentalHandicap = "309365006",
    /**
     * Code: 309366007
     */
    RehabilitationPsychiatrist = "309366007",
    /**
     * Code: 309367003
     */
    ObstetricianAndGynecologist = "309367003",
    /**
     * Code: 309368008
     */
    BreastSurgeon = "309368008",
    /**
     * Code: 309369000
     */
    CardiothoracicSurgeon = "309369000",
    /**
     * Code: 309371000
     */
    CardiacSurgeon = "309371000",
    /**
     * Code: 309372007
     */
    EarNoseAndThroatSurgeon = "309372007",
    /**
     * Code: 309373002
     */
    EndocrineSurgeon = "309373002",
    /**
     * Code: 309374008
     */
    ThyroidSurgeon = "309374008",
    /**
     * Code: 309375009
     */
    PituitarySurgeon = "309375009",
    /**
     * Code: 309376005
     */
    GastrointestinalSurgeon = "309376005",
    /**
     * Code: 309377001
     */
    GeneralGastrointestinalSurgeon = "309377001",
    /**
     * Code: 309378006
     */
    UpperGastrointestinalSurgeon = "309378006",
    /**
     * Code: 309379003
     */
    ColorectalSurgeon = "309379003",
    /**
     * Code: 309380000
     */
    HandSurgeon = "309380000",
    /**
     * Code: 309381001
     */
    HepatobiliarySurgeon = "309381001",
    /**
     * Code: 309382008
     */
    OphthalmicSurgeon = "309382008",
    /**
     * Code: 309383003
     */
    PediatricSurgeon = "309383003",
    /**
     * Code: 309384009
     */
    PancreaticSurgeon = "309384009",
    /**
     * Code: 309385005
     */
    TransplantSurgeon = "309385005",
    /**
     * Code: 309386006
     */
    TraumaSurgeon = "309386006",
    /**
     * Code: 309388007
     */
    VascularSurgeon = "309388007",
    /**
     * Code: 309389004
     */
    MedicalPractitionerGrade = "309389004",
    /**
     * Code: 309390008
     */
    HospitalConsultant = "309390008",
    /**
     * Code: 309391007
     */
    VisitingSpecialistRegistrar = "309391007",
    /**
     * Code: 309392000
     */
    ResearchRegistrar = "309392000",
    /**
     * Code: 309393005
     */
    GeneralPractitionerGrade = "309393005",
    /**
     * Code: 309394004
     */
    GeneralPractitionerPrincipal = "309394004",
    /**
     * Code: 309395003
     */
    HospitalSpecialist = "309395003",
    /**
     * Code: 309396002
     */
    AssociateSpecialist = "309396002",
    /**
     * Code: 309397006
     */
    ResearchFellow = "309397006",
    /**
     * Code: 309398001
     */
    AlliedHealthProfessional = "309398001",
    /**
     * Code: 309399009
     */
    HospitalDietitian = "309399009",
    /**
     * Code: 309400002
     */
    DomiciliaryPhysiotherapist = "309400002",
    /**
     * Code: 309401003
     */
    GeneralPractitionerBasedPhysiotherapist = "309401003",
    /**
     * Code: 309402005
     */
    HospitalBasedPhysiotherapist = "309402005",
    /**
     * Code: 309403000
     */
    PrivatePhysiotherapist = "309403000",
    /**
     * Code: 309404006
     */
    PhysiotherapyAssistant = "309404006",
    /**
     * Code: 309409001
     */
    HospitalBasedSpeechAndLanguageTherapist = "309409001",
    /**
     * Code: 309410006
     */
    ArtsTherapist = "309410006",
    /**
     * Code: 309411005
     */
    DanceTherapist = "309411005",
    /**
     * Code: 309412003
     */
    MusicTherapist = "309412003",
    /**
     * Code: 309413008
     */
    RenalDietitian = "309413008",
    /**
     * Code: 309414002
     */
    LiverDietitian = "309414002",
    /**
     * Code: 309415001
     */
    OncologyDietitian = "309415001",
    /**
     * Code: 309416000
     */
    PediatricDietitian = "309416000",
    /**
     * Code: 309417009
     */
    DiabetesDietitian = "309417009",
    /**
     * Code: 309418004
     */
    Audiologist = "309418004",
    /**
     * Code: 309419007
     */
    HearingTherapist = "309419007",
    /**
     * Code: 309420001
     */
    AudiologicalScientist = "309420001",
    /**
     * Code: 309421002
     */
    HearingAidDispenser = "309421002",
    /**
     * Code: 309422009
     */
    CommunityBasedOccupationalTherapist = "309422009",
    /**
     * Code: 309423004
     */
    HospitalOccupationalTherapist = "309423004",
    /**
     * Code: 309427003
     */
    SocialServicesOccupationalTherapist = "309427003",
    /**
     * Code: 309428008
     */
    Orthotist = "309428008",
    /**
     * Code: 309429000
     */
    SurgicalFitter = "309429000",
    /**
     * Code: 309434001
     */
    HospitalBasedPodiatrist = "309434001",
    /**
     * Code: 309435000
     */
    PodiatryAssistant = "309435000",
    /**
     * Code: 309436004
     */
    LymphedemaNurse = "309436004",
    /**
     * Code: 309437008
     */
    CommunityLearningDisabilitiesNurse = "309437008",
    /**
     * Code: 309439006
     */
    ClinicalNurseTeacher = "309439006",
    /**
     * Code: 309440008
     */
    CommunityPracticeNurseTeacher = "309440008",
    /**
     * Code: 309441007
     */
    NurseTutor = "309441007",
    /**
     * Code: 309442000
     */
    NurseTeacherPractitioner = "309442000",
    /**
     * Code: 309443005
     */
    NurseLecturerPractitioner = "309443005",
    /**
     * Code: 309444004
     */
    OutreachNurse = "309444004",
    /**
     * Code: 309445003
     */
    AnestheticNurse = "309445003",
    /**
     * Code: 309446002
     */
    NurseManager = "309446002",
    /**
     * Code: 309450009
     */
    NurseAdministrator = "309450009",
    /**
     * Code: 309452001
     */
    MidwiferyGrade = "309452001",
    /**
     * Code: 309453006
     */
    Midwife = "309453006",
    /**
     * Code: 309454000
     */
    StudentMidwife = "309454000",
    /**
     * Code: 309455004
     */
    ParentcraftSister = "309455004",
    /**
     * Code: 309456003
     */
    Clergy = "309456003",
    /**
     * Code: 309459005
     */
    HealthcareProfessionalGrade = "309459005",
    /**
     * Code: 309460000
     */
    RestorativeDentist = "309460000",
    /**
     * Code: 309687009
     */
    BuddhistFollowerOfReligion = "309687009",
    /**
     * Code: 309884000
     */
    MuslimFollowerOfReligion = "309884000",
    /**
     * Code: 309885004
     */
    ProtestantFollowerOfReligion = "309885004",
    /**
     * Code: 309886003
     */
    QuakerFollowerOfReligion = "309886003",
    /**
     * Code: 310170009
     */
    PediatricAudiologist = "310170009",
    /**
     * Code: 310171008
     */
    Immunopathologist = "310171008",
    /**
     * Code: 310172001
     */
    AudiologicalPhysician = "310172001",
    /**
     * Code: 310173006
     */
    ClinicalPharmacologist = "310173006",
    /**
     * Code: 310174000
     */
    PrivateDoctor = "310174000",
    /**
     * Code: 310175004
     */
    AgencyNurse = "310175004",
    /**
     * Code: 310176003
     */
    BehavioralTherapistNurse = "310176003",
    /**
     * Code: 310177007
     */
    CardiacRehabilitationNurse = "310177007",
    /**
     * Code: 310178002
     */
    GenitourinaryNurse = "310178002",
    /**
     * Code: 310179005
     */
    RheumatologyNurseSpecialist = "310179005",
    /**
     * Code: 310180008
     */
    ContinenceNurse = "310180008",
    /**
     * Code: 310181007
     */
    ContactTracingNurse = "310181007",
    /**
     * Code: 310182000
     */
    GeneralNurse = "310182000",
    /**
     * Code: 310183005
     */
    NurseForTheMentallyHandicapped = "310183005",
    /**
     * Code: 310184004
     */
    LiaisonNurse = "310184004",
    /**
     * Code: 310185003
     */
    DiabeticLiaisonNurse = "310185003",
    /**
     * Code: 310186002
     */
    NursePsychotherapist = "310186002",
    /**
     * Code: 310187006
     */
    CompanyNurse = "310187006",
    /**
     * Code: 310188001
     */
    HospitalMidwife = "310188001",
    /**
     * Code: 310189009
     */
    GeneticCounselor = "310189009",
    /**
     * Code: 310190000
     */
    MentalHealthCounselor = "310190000",
    /**
     * Code: 310191001
     */
    ClinicalPsychologist = "310191001",
    /**
     * Code: 310192008
     */
    EducationalPsychologist = "310192008",
    /**
     * Code: 310193003
     */
    Coroner = "310193003",
    /**
     * Code: 310194009
     */
    ApplianceOfficer = "310194009",
    /**
     * Code: 310512001
     */
    MedicalOncologist = "310512001",
    /**
     * Code: 310543008
     */
    Graduate = "310543008",
    /**
     * Code: 311441001
     */
    SchoolMedicalOfficer = "311441001",
    /**
     * Code: 312485001
     */
    IntegratedMidwife = "312485001",
    /**
     * Code: 313415001
     */
    IdenticalTwin = "313415001",
    /**
     * Code: 313416000
     */
    HeterozygousTwin = "313416000",
    /**
     * Code: 314712007
     */
    Parachutist = "314712007",
    /**
     * Code: 314767008
     */
    BirdFancier = "314767008",
    /**
     * Code: 31656007
     */
    AdoptiveGrandmother = "31656007",
    /**
     * Code: 317817411000087104
     */
    IndependentHealthCareFacility = "317817411000087104",
    /**
     * Code: 31831004
     */
    FosterDaughter = "31831004",
    /**
     * Code: 33969000
     */
    GreatGrandparent = "33969000",
    /**
     * Code: 339947000
     */
    Man = "339947000",
    /**
     * Code: 341320851000087105
     */
    PediatricRadiologist = "341320851000087105",
    /**
     * Code: 3425009
     */
    OldestDaughter = "3425009",
    /**
     * Code: 3430008
     */
    RadiationTherapist = "3430008",
    /**
     * Code: 34581001
     */
    Niece = "34581001",
    /**
     * Code: 34871008
     */
    Grandfather = "34871008",
    /**
     * Code: 34972000
     */
    OnlyDaughter = "34972000",
    /**
     * Code: 357174231000087105
     */
    HealthRegulatoryBodyForOccupationalTherapists = "357174231000087105",
    /**
     * Code: 360852005
     */
    Bum = "360852005",
    /**
     * Code: 360863008
     */
    Beggar = "360863008",
    /**
     * Code: 360984002
     */
    HasidicJewFollowerOfReligion = "360984002",
    /**
     * Code: 366740002
     */
    SikhFollowerOfReligion = "366740002",
    /**
     * Code: 36682004
     */
    PTPhysiotherapist = "36682004",
    /**
     * Code: 368890881000087105
     */
    EmergencyMedicineSpecialist = "368890881000087105",
    /**
     * Code: 371439331000087102
     */
    HealthRegulatoryBodyForPhysiotherapists = "371439331000087102",
    /**
     * Code: 37154003
     */
    Periodontist = "37154003",
    /**
     * Code: 372102007
     */
    RNFirstAssist = "372102007",
    /**
     * Code: 373864002
     */
    Outpatient = "373864002",
    /**
     * Code: 373929005
     */
    OrphanChild = "373929005",
    /**
     * Code: 375005
     */
    Sibling = "375005",
    /**
     * Code: 37504001
     */
    Orthodontist = "37504001",
    /**
     * Code: 38048003
     */
    Uncle = "38048003",
    /**
     * Code: 38248007
     */
    OldestSon = "38248007",
    /**
     * Code: 38265003
     */
    FosterMother = "38265003",
    /**
     * Code: 38312007
     */
    Grandparent = "38312007",
    /**
     * Code: 3842006
     */
    Chiropractor = "3842006",
    /**
     * Code: 3851003
     */
    SurrogateDaughter = "3851003",
    /**
     * Code: 385435006
     */
    Individual = "385435006",
    /**
     * Code: 387619007
     */
    Optician = "387619007",
    /**
     * Code: 39062003
     */
    FosterChild = "39062003",
    /**
     * Code: 390790000
     */
    AsylumSeeker = "390790000",
    /**
     * Code: 392685081000087107
     */
    HealthRegulatoryBodyForDentalHygienists = "392685081000087107",
    /**
     * Code: 394566006
     */
    GreatGrandson = "394566006",
    /**
     * Code: 394567002
     */
    GreatGranddaughter = "394567002",
    /**
     * Code: 394568007
     */
    ExtendedFamilyMember = "394568007",
    /**
     * Code: 394571004
     */
    Employer = "394571004",
    /**
     * Code: 394572006
     */
    MedicalSecretary = "394572006",
    /**
     * Code: 394618009
     */
    HospitalNurse = "394618009",
    /**
     * Code: 394619001
     */
    Guardian = "394619001",
    /**
     * Code: 394738000
     */
    OtherRelatedPersons = "394738000",
    /**
     * Code: 394745000
     */
    GeneralPracticeOrganisation = "394745000",
    /**
     * Code: 394746004
     */
    RegionalOffice = "394746004",
    /**
     * Code: 394747008
     */
    HealthAuthority = "394747008",
    /**
     * Code: 394748003
     */
    PrimaryCareGroup = "394748003",
    /**
     * Code: 394749006
     */
    PrimaryCareTrust = "394749006",
    /**
     * Code: 394751005
     */
    SpecialHealthAuthority = "394751005",
    /**
     * Code: 394757009
     */
    HospiceIndependent = "394757009",
    /**
     * Code: 394758004
     */
    IndependentProvider = "394758004",
    /**
     * Code: 394760002
     */
    GPPractice = "394760002",
    /**
     * Code: 394762005
     */
    GDPPractice = "394762005",
    /**
     * Code: 394763000
     */
    MoDPractice = "394763000",
    /**
     * Code: 394764006
     */
    MoDHospital = "394764006",
    /**
     * Code: 394765007
     */
    PrisonPractice = "394765007",
    /**
     * Code: 394854006
     */
    ImmediateFamilyMember = "394854006",
    /**
     * Code: 394855007
     */
    NonImmediateFamilyMember = "394855007",
    /**
     * Code: 394856008
     */
    PaternalGrandFather = "394856008",
    /**
     * Code: 394857004
     */
    MaternalGrandFather = "394857004",
    /**
     * Code: 394858009
     */
    PaternalGrandMother = "394858009",
    /**
     * Code: 394859001
     */
    MaternalGrandMother = "394859001",
    /**
     * Code: 394860006
     */
    DistantRelative = "394860006",
    /**
     * Code: 394861005
     */
    GreatUncle = "394861005",
    /**
     * Code: 394862003
     */
    GreatAunt = "394862003",
    /**
     * Code: 394863008
     */
    NonFamilyMember = "394863008",
    /**
     * Code: 394921008
     */
    Cohabitee = "394921008",
    /**
     * Code: 396762341000087100
     */
    PaternalCousin = "396762341000087100",
    /**
     * Code: 39677007
     */
    InternalMedicineSpecialist = "39677007",
    /**
     * Code: 397824005
     */
    ConsultantAnesthetist = "397824005",
    /**
     * Code: 397897005
     */
    Paramedic = "397897005",
    /**
     * Code: 397903001
     */
    StaffGradeObstetrician = "397903001",
    /**
     * Code: 397908005
     */
    StaffGradePractitioner = "397908005",
    /**
     * Code: 3981000175106
     */
    NurseComplexCaseManager = "3981000175106",
    /**
     * Code: 398130009
     */
    MedicalStudent = "398130009",
    /**
     * Code: 398154004
     */
    QualityImprovementTemplateTaskForce = "398154004",
    /**
     * Code: 398238009
     */
    ActingObstetricRegistrar = "398238009",
    /**
     * Code: 398255008
     */
    AssociationOfAnesthesiaClinicalDirectors = "398255008",
    /**
     * Code: 398480381000087106
     */
    FamilyMedicineSpecialistPalliativeCare = "398480381000087106",
    /**
     * Code: 398524981000087101
     */
    PaternalGreatGrandFather = "398524981000087101",
    /**
     * Code: 40127002
     */
    DietitianGeneral = "40127002",
    /**
     * Code: 40204001
     */
    Hematologist = "40204001",
    /**
     * Code: 404940000
     */
    PhysiotherapistTechnicalInstructor = "404940000",
    /**
     * Code: 405277009
     */
    ResidentPhysician = "405277009",
    /**
     * Code: 405278004
     */
    CertifiedRegisteredNurseAnesthetist = "405278004",
    /**
     * Code: 405279007
     */
    AttendingPhysician = "405279007",
    /**
     * Code: 405623001
     */
    AssignedPractitioner = "405623001",
    /**
     * Code: 405684005
     */
    ProfessionalInitiatingSurgicalCase = "405684005",
    /**
     * Code: 405685006
     */
    ProfessionalProvidingStaffReliefDuringSurgicalProcedure = "405685006",
    /**
     * Code: 40570005
     */
    Interpreter = "40570005",
    /**
     * Code: 40683002
     */
    Parent = "40683002",
    /**
     * Code: 407542009
     */
    InformalCarer = "407542009",
    /**
     * Code: 407543004
     */
    PrimaryCarer = "407543004",
    /**
     * Code: 408798009
     */
    ConsultantPediatrician = "408798009",
    /**
     * Code: 408799001
     */
    ConsultantNeonatologist = "408799001",
    /**
     * Code: 409974004
     */
    HealthEducator = "409974004",
    /**
     * Code: 409975003
     */
    CertifiedHealthEducationSpecialist = "409975003",
    /**
     * Code: 41057000
     */
    SurrogateSon = "41057000",
    /**
     * Code: 410597007
     */
    PersonCategorizedByReligiousAffiliation = "410597007",
    /**
     * Code: 410598002
     */
    PersonCategorizedByAge = "410598002",
    /**
     * Code: 410599005
     */
    Minor = "410599005",
    /**
     * Code: 410600008
     */
    PreTeen = "410600008",
    /**
     * Code: 410601007
     */
    Child = "410601007",
    /**
     * Code: 410602000
     */
    PreschoolChild = "410602000",
    /**
     * Code: 410603005
     */
    PersonInTheLegalEnvironment = "410603005",
    /**
     * Code: 410604004
     */
    SubjectOfRecord = "410604004",
    /**
     * Code: 413327003
     */
    StudentInFullTimeEducation = "413327003",
    /**
     * Code: 413854007
     */
    CirculatingNurse = "413854007",
    /**
     * Code: 414043009
     */
    DomesticPartner = "414043009",
    /**
     * Code: 415075003
     */
    PerioperativeNurse = "415075003",
    /**
     * Code: 415506007
     */
    ScrubNurse = "415506007",
    /**
     * Code: 416034003
     */
    PrimaryScreener = "416034003",
    /**
     * Code: 416035002
     */
    SecondaryScreener = "416035002",
    /**
     * Code: 416160000
     */
    FellowOfAmericanAcademyOfOsteopathy = "416160000",
    /**
     * Code: 416186861000087101
     */
    SurgicalOncologist = "416186861000087101",
    /**
     * Code: 4162009
     */
    DentalAssistant = "4162009",
    /**
     * Code: 416625007
     */
    FamilyReunionImmigrant = "416625007",
    /**
     * Code: 41672002
     */
    RespiratoryPhysician = "41672002",
    /**
     * Code: 416800000
     */
    Inpatient = "416800000",
    /**
     * Code: 41795004
     */
    LegalSon = "41795004",
    /**
     * Code: 418119000
     */
    InfantChild = "418119000",
    /**
     * Code: 41904004
     */
    MedicalXRayTechnician = "41904004",
    /**
     * Code: 419358007
     */
    SubjectOfRecordOrOtherProviderOfHistory = "419358007",
    /**
     * Code: 41953004
     */
    AdoptiveParent = "41953004",
    /**
     * Code: 420058008
     */
    ProviderOfHistoryOtherThanSubject = "420058008",
    /**
     * Code: 420158005
     */
    PerformerOfMethod = "420158005",
    /**
     * Code: 420314821000087103
     */
    HealthRegulatoryBodyForMassageTherapists = "420314821000087103",
    /**
     * Code: 420409002
     */
    OculoplasticSurgeon = "420409002",
    /**
     * Code: 420678001
     */
    RetinalSurgeon = "420678001",
    /**
     * Code: 421841007
     */
    AdmittingPhysician = "421841007",
    /**
     * Code: 422140007
     */
    MedicalOphthalmologist = "422140007",
    /**
     * Code: 422234006
     */
    Ophthalmologist = "422234006",
    /**
     * Code: 427568008
     */
    Neighbor = "427568008",
    /**
     * Code: 427729003
     */
    ElimPentecostalistFollowerOfReligion = "427729003",
    /**
     * Code: 427754003
     */
    LiberalJew = "427754003",
    /**
     * Code: 427755002
     */
    LutheranFollowerOfReligion = "427755002",
    /**
     * Code: 427874000
     */
    CongregationalistFollowerOfReligion = "427874000",
    /**
     * Code: 427950002
     */
    HarediJew = "427950002",
    /**
     * Code: 427963008
     */
    AdvaitinHinduFollowerOfReligion = "427963008",
    /**
     * Code: 427981006
     */
    ZenBuddhist = "427981006",
    /**
     * Code: 428024001
     */
    ClinicalTrialParticipant = "428024001",
    /**
     * Code: 428315004
     */
    AnabaptistFollowerOfReligion = "428315004",
    /**
     * Code: 428347009
     */
    AryaSamajHindu = "428347009",
    /**
     * Code: 428373004
     */
    CopticOrthodoxFollowerOfReligion = "428373004",
    /**
     * Code: 428376007
     */
    EasternCatholic = "428376007",
    /**
     * Code: 428378008
     */
    EthiopianOrthodoxTewahedoFollowerOfReligion = "428378008",
    /**
     * Code: 428407001
     */
    TheravadaBuddhist = "428407001",
    /**
     * Code: 428408006
     */
    Wiccan = "428408006",
    /**
     * Code: 428410008
     */
    ShaktiHindu = "428410008",
    /**
     * Code: 428496003
     */
    TibetanBuddhistFollowerOfReligion = "428496003",
    /**
     * Code: 428503004
     */
    OrthodoxChristian = "428503004",
    /**
     * Code: 428504005
     */
    ChristianSpiritualistFollowerOfReligion = "428504005",
    /**
     * Code: 428506007
     */
    DruidFollowerOfReligion = "428506007",
    /**
     * Code: 428620006
     */
    SmartaHindu = "428620006",
    /**
     * Code: 428666001
     */
    NichirenBuddhist = "428666001",
    /**
     * Code: 428792000
     */
    CaseContact = "428792000",
    /**
     * Code: 428801007
     */
    IsmailiMuslim = "428801007",
    /**
     * Code: 428815009
     */
    AhmadiFollowerOfReligion = "428815009",
    /**
     * Code: 428816005
     */
    ArmenianCatholic = "428816005",
    /**
     * Code: 428820009
     */
    PureLandBuddhistFollowerOfReligion = "428820009",
    /**
     * Code: 428821008
     */
    SeventhDayAdventist = "428821008",
    /**
     * Code: 429158002
     */
    GreekOrthodox = "429158002",
    /**
     * Code: 429171004
     */
    Spiritualist = "429171004",
    /**
     * Code: 429379008
     */
    ShivaHinduFollowerOfReligion = "429379008",
    /**
     * Code: 429509008
     */
    ReformJewFollowerOfReligion = "429509008",
    /**
     * Code: 429511004
     */
    VaishnavaHindu = "429511004",
    /**
     * Code: 429527006
     */
    NewKadampaTraditionBuddhist = "429527006",
    /**
     * Code: 429533002
     */
    MahayanaBuddhist = "429533002",
    /**
     * Code: 429534008
     */
    MasortiJewFollowerOfReligion = "429534008",
    /**
     * Code: 429539003
     */
    Calvinist = "429539003",
    /**
     * Code: 429543004
     */
    TaoistFollowerOfReligion = "429543004",
    /**
     * Code: 429544005
     */
    RussianOrthodoxFollowerOfReligion = "429544005",
    /**
     * Code: 429545006
     */
    SanatanaDharmaFollower = "429545006",
    /**
     * Code: 429547003
     */
    Shinto = "429547003",
    /**
     * Code: 429577009
     */
    PatientAdvocate = "429577009",
    /**
     * Code: 429644000
     */
    OrthodoxJewFollowerOfReligion = "429644000",
    /**
     * Code: 429708003
     */
    UnitarianFollowerOfReligion = "429708003",
    /**
     * Code: 429732005
     */
    BahaQuoteI = "429732005",
    /**
     * Code: 429787006
     */
    JainFollowerOfReligion = "429787006",
    /**
     * Code: 429790000
     */
    ZoroastrianFollowerOfReligion = "429790000",
    /**
     * Code: 430098004
     */
    DonorForIntestineTransplant = "430098004",
    /**
     * Code: 430101000
     */
    WholeBloodDonor = "430101000",
    /**
     * Code: 430792005
     */
    StemCellDonor = "430792005",
    /**
     * Code: 430882007
     */
    EggDonor = "430882007",
    /**
     * Code: 431549007
     */
    FemaleChild = "431549007",
    /**
     * Code: 432100008
     */
    HealthCoach = "432100008",
    /**
     * Code: 432233171000087103
     */
    JurisdictionalHealthNumber = "432233171000087103",
    /**
     * Code: 433152004
     */
    Boy = "433152004",
    /**
     * Code: 433475001
     */
    HumanOocyteDonorAge35AndOlder = "433475001",
    /**
     * Code: 43702002
     */
    OccupationalHealthNurse = "43702002",
    /**
     * Code: 437208901000087109
     */
    ProvincialAndOrTerritorialGovernmentPlanOutOfJurisdiction = "437208901000087109",
    /**
     * Code: 438347000
     */
    PersonCategorizedByAffiliationWithBeliefSystem = "438347000",
    /**
     * Code: 439182891000087102
     */
    ProviderNumberIssuedByThirdParty = "439182891000087102",
    /**
     * Code: 441144831000087108
     */
    HealthRegulatoryBodyForPhysiciansAndSurgeons = "441144831000087108",
    /**
     * Code: 441463002
     */
    SpermDonor = "441463002",
    /**
     * Code: 441465009
     */
    StrangerIsSpermDonorForArtificialInsemination = "441465009",
    /**
     * Code: 441468006
     */
    UnrelatedKnownSpermDonorForArtificialInsemination = "441468006",
    /**
     * Code: 44181008
     */
    Granddaughter = "44181008",
    /**
     * Code: 442867008
     */
    RespiratoryTherapist = "442867008",
    /**
     * Code: 443090005
     */
    PodiatricSurgeon = "443090005",
    /**
     * Code: 443470051000087109
     */
    MinistryOfHealth = "443470051000087109",
    /**
     * Code: 444000
     */
    LegalSibling = "444000",
    /**
     * Code: 444018008
     */
    PersonWithCharacteristicRelatedToSubjectOfRecord = "444018008",
    /**
     * Code: 444052006
     */
    SpouseOfSubject = "444052006",
    /**
     * Code: 444053001
     */
    HusbandOfSubject = "444053001",
    /**
     * Code: 444054007
     */
    WifeOfSubject = "444054007",
    /**
     * Code: 444055008
     */
    UncleOfSubject = "444055008",
    /**
     * Code: 444145006
     */
    PartnerInRelationshipWithSubject = "444145006",
    /**
     * Code: 444146007
     */
    BoyfriendOfSubject = "444146007",
    /**
     * Code: 444147003
     */
    GirlfriendOfSubject = "444147003",
    /**
     * Code: 444148008
     */
    PersonInFamilyOfSubject = "444148008",
    /**
     * Code: 444168002
     */
    Homemaker = "444168002",
    /**
     * Code: 444169005
     */
    HouseHusband = "444169005",
    /**
     * Code: 444191003
     */
    AuntOfSubject = "444191003",
    /**
     * Code: 444192005
     */
    ChildOfSubject = "444192005",
    /**
     * Code: 444193000
     */
    FirstDegreeBloodRelativeOfSubject = "444193000",
    /**
     * Code: 444194006
     */
    DaughterOfSubject = "444194006",
    /**
     * Code: 444199001
     */
    FriendOfSubject = "444199001",
    /**
     * Code: 444210007
     */
    CohabiteeInRelationshipWithSubject = "444210007",
    /**
     * Code: 444211006
     */
    CommonLawHusbandOfSubject = "444211006",
    /**
     * Code: 444212004
     */
    CommonLawWifeOfSubject = "444212004",
    /**
     * Code: 444213009
     */
    DomesticPartnerOfSubject = "444213009",
    /**
     * Code: 444241008
     */
    SonOfSubject = "444241008",
    /**
     * Code: 444242001
     */
    GrandparentOfSubject = "444242001",
    /**
     * Code: 444243006
     */
    MaternalGrandfatherOfSubject = "444243006",
    /**
     * Code: 444244000
     */
    MaternalGrandmotherOfSubject = "444244000",
    /**
     * Code: 444278006
     */
    FianceOfSubject = "444278006",
    /**
     * Code: 444279003
     */
    FemaleFianceOfSubject = "444279003",
    /**
     * Code: 444280000
     */
    MaleFianceOfSubject = "444280000",
    /**
     * Code: 444292000
     */
    PaternalGrandfatherOfSubject = "444292000",
    /**
     * Code: 444293005
     */
    PaternalGrandmotherOfSubject = "444293005",
    /**
     * Code: 444294004
     */
    ParentOfSubject = "444294004",
    /**
     * Code: 444295003
     */
    FatherOfSubject = "444295003",
    /**
     * Code: 444301002
     */
    MotherOfSubject = "444301002",
    /**
     * Code: 444302009
     */
    SiblingOfSubject = "444302009",
    /**
     * Code: 444303004
     */
    BrotherOfSubject = "444303004",
    /**
     * Code: 444304005
     */
    SisterOfSubject = "444304005",
    /**
     * Code: 444464007
     */
    RecipientOfBiologicalMaterialFromSubject = "444464007",
    /**
     * Code: 444870008
     */
    ApostolicPentecostalistFollowerOfReligion = "444870008",
    /**
     * Code: 444912007
     */
    Hypnotherapist = "444912007",
    /**
     * Code: 445313000
     */
    AsthmaNurseSpecialist = "445313000",
    /**
     * Code: 445451001
     */
    NurseCaseManager = "445451001",
    /**
     * Code: 446050000
     */
    PCPPrimaryCarePhysician = "446050000",
    /**
     * Code: 44652006
     */
    PharmaceuticalAssistant = "44652006",
    /**
     * Code: 446654005
     */
    Refugee = "446654005",
    /**
     * Code: 446701002
     */
    AddictionMedicineSpecialist = "446701002",
    /**
     * Code: 449161006
     */
    PAPhysicianAssistant = "449161006",
    /**
     * Code: 450044741000087104
     */
    Acupuncturist = "450044741000087104",
    /**
     * Code: 450768005
     */
    InternationalStudent = "450768005",
    /**
     * Code: 45419001
     */
    Masseur = "45419001",
    /**
     * Code: 45440000
     */
    Rheumatologist = "45440000",
    /**
     * Code: 45544007
     */
    Neurosurgeon = "45544007",
    /**
     * Code: 4577005
     */
    FirstCousin = "4577005",
    /**
     * Code: 45929001
     */
    HalfBrother = "45929001",
    /**
     * Code: 45956004
     */
    Sanitarian = "45956004",
    /**
     * Code: 460276491000087102
     */
    NewBrunswickDepartmentOfHealth = "460276491000087102",
    /**
     * Code: 46255001
     */
    Pharmacist = "46255001",
    /**
     * Code: 46363003
     */
    Stepsister = "46363003",
    /**
     * Code: 465511991000087105
     */
    PediatricOrthopedicSurgeon = "465511991000087105",
    /**
     * Code: 471000122100
     */
    MultiOrganDonor = "471000122100",
    /**
     * Code: 471302004
     */
    GovernmentMidwife = "471302004",
    /**
     * Code: 47801002
     */
    MaleCousin = "47801002",
    /**
     * Code: 48385004
     */
    Acquaintance = "48385004",
    /**
     * Code: 48673000
     */
    AdoptiveChild = "48673000",
    /**
     * Code: 48740002
     */
    Philologist = "48740002",
    /**
     * Code: 49203003
     */
    DispensingOptometrist = "49203003",
    /**
     * Code: 494782281000087101
     */
    PediatricHematologist = "494782281000087101",
    /**
     * Code: 49993003
     */
    MaxillofacialSurgeon = "49993003",
    /**
     * Code: 50058005
     */
    IdenticalTwinSister = "50058005",
    /**
     * Code: 50149000
     */
    Endodontist = "50149000",
    /**
     * Code: 50261002
     */
    GreatGrandfather = "50261002",
    /**
     * Code: 51616000
     */
    SephardicJewFollowerOfReligion = "51616000",
    /**
     * Code: 5275007
     */
    NANursingAuxiliary = "5275007",
    /**
     * Code: 53201003
     */
    OlderSister = "53201003",
    /**
     * Code: 539773351000087101
     */
    AlbertaHealthAndWellness = "539773351000087101",
    /**
     * Code: 54056000
     */
    Trustee = "54056000",
    /**
     * Code: 54503009
     */
    FaithHealer = "54503009",
    /**
     * Code: 548886741000087101
     */
    HealthRegulatoryBodyForDenturists = "548886741000087101",
    /**
     * Code: 549577861000087101
     */
    HealthRegulatoryBodyForChiropractors = "549577861000087101",
    /**
     * Code: 553641311000087101
     */
    NewfoundlandAndLabradorDepartmentOfHealthAndCommunityServices = "553641311000087101",
    /**
     * Code: 55538000
     */
    Cousin = "55538000",
    /**
     * Code: 5581000087108
     */
    CanadianJurisdictionBased = "5581000087108",
    /**
     * Code: 56397003
     */
    Neurologist = "56397003",
    /**
     * Code: 56466003
     */
    CommunityPhysician = "56466003",
    /**
     * Code: 56542007
     */
    MedicalRecordAdministrator = "56542007",
    /**
     * Code: 56545009
     */
    CardiovascularSurgeon = "56545009",
    /**
     * Code: 567496441000087102
     */
    CancerPlanSaskatchewanAndSexuallyTransmittedDiseasesPlan = "567496441000087102",
    /**
     * Code: 569232871000087107
     */
    YukonDepartmentOfHealthAndSocialServices = "569232871000087107",
    /**
     * Code: 57654006
     */
    FixedProsthodontist = "57654006",
    /**
     * Code: 58293006
     */
    FosterSister = "58293006",
    /**
     * Code: 583114651000087104
     */
    MaternalUncle = "583114651000087104",
    /**
     * Code: 58626002
     */
    LegalGuardian = "58626002",
    /**
     * Code: 589612571000087102
     */
    PaternalUncle = "589612571000087102",
    /**
     * Code: 59058001
     */
    GeneralPhysician = "59058001",
    /**
     * Code: 59169001
     */
    OrthopedicTechnician = "59169001",
    /**
     * Code: 59944000
     */
    Psychologist = "59944000",
    /**
     * Code: 60008001
     */
    CommunityBasedDietitian = "60008001",
    /**
     * Code: 60614009
     */
    NaturalBrother = "60614009",
    /**
     * Code: 609005
     */
    AdoptiveFather = "609005",
    /**
     * Code: 609564621000087104
     */
    HealthRegulatoryBodyForPharmacists = "609564621000087104",
    /**
     * Code: 61207006
     */
    MedicalPathologist = "61207006",
    /**
     * Code: 61246008
     */
    LaboratoryMedicineSpecialist = "61246008",
    /**
     * Code: 61345009
     */
    Otorhinolaryngologist = "61345009",
    /**
     * Code: 61894003
     */
    Endocrinologist = "61894003",
    /**
     * Code: 619197631000087102
     */
    Neuroradiologist = "619197631000087102",
    /**
     * Code: 62090008
     */
    LegalMother = "62090008",
    /**
     * Code: 62247001
     */
    FamilyMedicineSpecialist = "62247001",
    /**
     * Code: 62296006
     */
    NaturalGrandFather = "62296006",
    /**
     * Code: 623630151000087105
     */
    FamilyMedicineSpecialistAnesthetist = "623630151000087105",
    /**
     * Code: 63098009
     */
    ClinicalImmunologist = "63098009",
    /**
     * Code: 643545671000087106
     */
    HealthRegulatoryBodyForSocialWorkers = "643545671000087106",
    /**
     * Code: 644191431000087105
     */
    MinistryOfHealthAndLongTermCareOntario = "644191431000087105",
    /**
     * Code: 64988008
     */
    SunniMuslimFollowerOfReligion = "64988008",
    /**
     * Code: 65412001
     */
    StepMother = "65412001",
    /**
     * Code: 65616008
     */
    Son = "65616008",
    /**
     * Code: 65656005
     */
    NaturalMother = "65656005",
    /**
     * Code: 65853000
     */
    Student = "65853000",
    /**
     * Code: 66089001
     */
    Daughter = "66089001",
    /**
     * Code: 66476003
     */
    OralPathologist = "66476003",
    /**
     * Code: 666298511000087107
     */
    HealthRegulatoryBodyForMidwives = "666298511000087107",
    /**
     * Code: 666997781000087107
     */
    Doula = "666997781000087107",
    /**
     * Code: 6676009
     */
    YoungestDaughter = "6676009",
    /**
     * Code: 66839005
     */
    Father = "66839005",
    /**
     * Code: 66862007
     */
    Radiologist = "66862007",
    /**
     * Code: 67005001
     */
    AdoptiveDaughter = "67005001",
    /**
     * Code: 67147004
     */
    LegalFather = "67147004",
    /**
     * Code: 673433971000087102
     */
    ProviderRegistrationNumber = "673433971000087102",
    /**
     * Code: 673825031000087109
     */
    TraditionalHerbalMedicineSpecialist = "673825031000087109",
    /**
     * Code: 67822003
     */
    Child_67822003 = "67822003",
    /**
     * Code: 68021009
     */
    GreatGreatGrandParent = "68021009",
    /**
     * Code: 6816002
     */
    SpecializedNurse = "6816002",
    /**
     * Code: 682131381000087105
     */
    OccupationalMedicineSpecialist = "682131381000087105",
    /**
     * Code: 6868009
     */
    HospitalAdministrator = "6868009",
    /**
     * Code: 68867008
     */
    PublicHealthDentist = "68867008",
    /**
     * Code: 68950000
     */
    Prosthodontist = "68950000",
    /**
     * Code: 691349461000087102
     */
    PaternalAunt = "691349461000087102",
    /**
     * Code: 69280009
     */
    SpecializedPhysician = "69280009",
    /**
     * Code: 699110007
     */
    SecondDegreeBloodRelative = "699110007",
    /**
     * Code: 699111006
     */
    SecondDegreeBloodRelativeOfSubject = "699111006",
    /**
     * Code: 70578009
     */
    GrandSon = "70578009",
    /**
     * Code: 70862002
     */
    ContactPerson = "70862002",
    /**
     * Code: 70924004
     */
    Brother = "70924004",
    /**
     * Code: 713176007
     */
    CadaverDonorForLungTransplant = "713176007",
    /**
     * Code: 713177003
     */
    CadaverDonorForHeartTransplant = "713177003",
    /**
     * Code: 713178008
     */
    CadaverDonorForLiverTransplant = "713178008",
    /**
     * Code: 713179000
     */
    CadaverDonorForCornealTransplant = "713179000",
    /**
     * Code: 713183000
     */
    CadaverDonorForKidneyTransplant = "713183000",
    /**
     * Code: 713184006
     */
    BloodProductDonor = "713184006",
    /**
     * Code: 713352007
     */
    SkinDonor = "713352007",
    /**
     * Code: 713353002
     */
    LiveRelatedLiverDonor = "713353002",
    /**
     * Code: 713369009
     */
    LiveRelatedKidneyDonor = "713369009",
    /**
     * Code: 715167002
     */
    OpenEpiscopalChurchFollowerOfReligion = "715167002",
    /**
     * Code: 71838004
     */
    Gastroenterologist = "71838004",
    /**
     * Code: 72012000
     */
    GreatGrandChild = "72012000",
    /**
     * Code: 724022191000087108
     */
    HealthRegulatoryBodyForRespiratoryTherapists = "724022191000087108",
    /**
     * Code: 724111801000087104
     */
    PediatricEmergencyMedicineSpecialist = "724111801000087104",
    /**
     * Code: 726220521000087101
     */
    ProvincialAndOrTerritorialGovernmentPlanResident = "726220521000087101",
    /**
     * Code: 72705000
     */
    Mother = "72705000",
    /**
     * Code: 73265009
     */
    NursingAid = "73265009",
    /**
     * Code: 73678001
     */
    NaturalSister = "73678001",
    /**
     * Code: 74128007
     */
    StepParent = "74128007",
    /**
     * Code: 74489007
     */
    YoungerChild = "74489007",
    /**
     * Code: 745424761000087106
     */
    WorkersQuoteCompensationNumber = "745424761000087106",
    /**
     * Code: 747936471000087102
     */
    FamilyMedicineSpecialistCareOfTheElderly = "747936471000087102",
    /**
     * Code: 75226009
     */
    NaturalChild = "75226009",
    /**
     * Code: 75271001
     */
    MWMidwife = "75271001",
    /**
     * Code: 753977441000087109
     */
    MinistryOfHealthNorthwestTerritories = "753977441000087109",
    /**
     * Code: 75615008
     */
    SurrogateFather = "75615008",
    /**
     * Code: 76022008
     */
    AdoptiveSister = "76022008",
    /**
     * Code: 76087000
     */
    StepBrother = "76087000",
    /**
     * Code: 76166008
     */
    PracticalAidPharmacy = "76166008",
    /**
     * Code: 76231001
     */
    Osteopath = "76231001",
    /**
     * Code: 762510691000087106
     */
    HealthRegulatoryBodyForAudiologistsAndSpeechLanguagePathologists = "762510691000087106",
    /**
     * Code: 766788081000087100
     */
    TravelMedicineSpecialist = "766788081000087100",
    /**
     * Code: 767205061000087108
     */
    SpineSurgeon = "767205061000087108",
    /**
     * Code: 76899008
     */
    InfectiousDiseasesPhysician = "76899008",
    /**
     * Code: 78194006
     */
    IdenticalTwinBrother = "78194006",
    /**
     * Code: 78272007
     */
    NaturalGrandParent = "78272007",
    /**
     * Code: 78652007
     */
    GreatGrandMother = "78652007",
    /**
     * Code: 78703002
     */
    GeneralSurgeon = "78703002",
    /**
     * Code: 78729002
     */
    DiagnosticRadiologist = "78729002",
    /**
     * Code: 78872000
     */
    OrphanMale = "78872000",
    /**
     * Code: 79508001
     */
    AdoptiveSibling = "79508001",
    /**
     * Code: 79756005
     */
    Boyfriend = "79756005",
    /**
     * Code: 79898004
     */
    AuxiliaryMidwife = "79898004",
    /**
     * Code: 80386000
     */
    GreatGreatGrandFather = "80386000",
    /**
     * Code: 80409005
     */
    Translator = "80409005",
    /**
     * Code: 8051000087100
     */
    JurisdictionDriverLicenseNumber = "8051000087100",
    /**
     * Code: 80546007
     */
    OTOccupationalTherapist = "80546007",
    /**
     * Code: 80584001
     */
    Psychiatrist = "80584001",
    /**
     * Code: 80587008
     */
    JehovahQuoteSWitnessFollowerOfReligion = "80587008",
    /**
     * Code: 8061000087102
     */
    JurisdictionalBirthCertificateRegistrationNumber = "8061000087102",
    /**
     * Code: 8071000087106
     */
    InterimHealthProgramCertificateNumber = "8071000087106",
    /**
     * Code: 80933006
     */
    NuclearMedicinePhysician = "80933006",
    /**
     * Code: 81173009
     */
    OnlySon = "81173009",
    /**
     * Code: 81276006
     */
    TwinBrother = "81276006",
    /**
     * Code: 813758161000087106
     */
    MaternalOrFetalMedicineSpecialist = "813758161000087106",
    /**
     * Code: 81464008
     */
    ClinicalPathologist = "81464008",
    /**
     * Code: 81467001
     */
    FraternalTwinBrother = "81467001",
    /**
     * Code: 81706006
     */
    AshkenaziJew = "81706006",
    /**
     * Code: 82101005
     */
    NaturalSibling = "82101005",
    /**
     * Code: 822410621000087104
     */
    MassageTherapist = "822410621000087104",
    /**
     * Code: 82296001
     */
    Pediatrician = "82296001",
    /**
     * Code: 83189004
     */
    OtherProfessionalNurse = "83189004",
    /**
     * Code: 83273008
     */
    AnatomicPathologist = "83273008",
    /**
     * Code: 83408003
     */
    WorkingParent = "83408003",
    /**
     * Code: 83420006
     */
    NaturalDaughter = "83420006",
    /**
     * Code: 83559000
     */
    Nephew = "83559000",
    /**
     * Code: 83685006
     */
    Gynecologist = "83685006",
    /**
     * Code: 84390006
     */
    Girlfriend = "84390006",
    /**
     * Code: 844670641000087109
     */
    MaternalFirstCousin = "844670641000087109",
    /**
     * Code: 8458002
     */
    FosterFather = "8458002",
    /**
     * Code: 847240411000087102
     */
    Hospitalist = "847240411000087102",
    /**
     * Code: 85058002
     */
    AdoptiveGrandfather = "85058002",
    /**
     * Code: 853827051000087104
     */
    SportsMedicineSpecialist = "853827051000087104",
    /**
     * Code: 85411004
     */
    YoungerBrother = "85411004",
    /**
     * Code: 85683001
     */
    SingleFather = "85683001",
    /**
     * Code: 85733003
     */
    GeneralPathologist = "85733003",
    /**
     * Code: 859430851000087100
     */
    MedicalCarePlanHospitalTechnicalServicesQuebec = "859430851000087100",
    /**
     * Code: 86372007
     */
    GrandChild = "86372007",
    /**
     * Code: 8674003
     */
    StepSon = "8674003",
    /**
     * Code: 86764008
     */
    StepChild = "86764008",
    /**
     * Code: 8724009
     */
    PlasticSurgeon = "8724009",
    /**
     * Code: 874107021000087108
     */
    HealthRegulatoryBodyForNurses = "874107021000087108",
    /**
     * Code: 876612791000087101
     */
    HealthRegulatoryBodyForParamedics = "876612791000087101",
    /**
     * Code: 88189002
     */
    Anesthesiologist = "88189002",
    /**
     * Code: 882121321000087100
     */
    MinistryOfHealthBritishColumbia = "882121321000087100",
    /**
     * Code: 88475002
     */
    OtherDietitiansAndPublicHealthNutritionists = "88475002",
    /**
     * Code: 88510002
     */
    StepSibling = "88510002",
    /**
     * Code: 89681006
     */
    YoungestSon = "89681006",
    /**
     * Code: 90201008
     */
    PediatricDentist = "90201008",
    /**
     * Code: 90655003
     */
    CareOfTheElderlyPhysician = "90655003",
    /**
     * Code: 90921004
     */
    FosterParent = "90921004",
    /**
     * Code: 912320101000087109
     */
    HealthRegulatoryBodyForPracticalNurses = "912320101000087109",
    /**
     * Code: 926871431000087103
     */
    PediatricRespirologist = "926871431000087103",
    /**
     * Code: 930012821000087105
     */
    HealthRegulatoryBodyForDietitians = "930012821000087105",
    /**
     * Code: 9306000
     */
    LegalParent = "9306000",
    /**
     * Code: 954544641000087107
     */
    Homeopath = "954544641000087107",
    /**
     * Code: 956387501000087102
     */
    FamilyMedicineSpecialistEmergencyMedicine = "956387501000087102",
    /**
     * Code: 969118571000087109
     */
    PediatricHematologistOrOncologist = "969118571000087109",
    /**
     * Code: 984095901000087105
     */
    FootAndAnkleSurgeon = "984095901000087105",
    /**
     * Code: 990928611000087105
     */
    InvasiveCardiologist = "990928611000087105",
    /**
     * Code: 9947008
     */
    NaturalFather = "9947008",
    /**
     * Code: 998711551000087102
     */
    HealthPEI = "998711551000087102",
    /**
     * Code: 998820271000087109
     */
    ManitobaHealth = "998820271000087109",
    /**
     * Code: 999480451000087102
     */
    CaseManager = "999480451000087102",
    /**
     * Code: 999480461000087104
     */
    Kinesthesiologist = "999480461000087104",
    /**
     * Code: 999483971000087108
     */
    HealthRegulatoryBodyForNaturopathicPractitioners = "999483971000087108"
}
//# sourceMappingURL=ParticipantRoleValueSet.d.ts.map