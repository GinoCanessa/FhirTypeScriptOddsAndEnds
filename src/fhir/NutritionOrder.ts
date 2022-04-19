// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * Class that defines the quantity and type of nutrient modifications (for example carbohydrate, fiber or sodium) required for the oral diet.
 */
export type INutritionOrderOralDietNutrient = fhir.IBackboneElement & {
  /**
   * The quantity of the specified nutrient to include in diet.
   */
  amount?: fhir.IQuantity|undefined;
  /**
   * The nutrient that is being modified such as carbohydrate or sodium.
   */
  modifier?: fhir.ICodeableConcept|undefined;
}
/**
 * Class that describes any texture modifications required for the patient to safely consume various types of solid foods.
 */
export type INutritionOrderOralDietTexture = fhir.IBackboneElement & {
  /**
   * Coupled with the `texture.modifier`; could be (All Foods).
   */
  foodType?: fhir.ICodeableConcept|undefined;
  /**
   * Coupled with the foodType (Meat).
   */
  modifier?: fhir.ICodeableConcept|undefined;
}
/**
 * Diet given orally in contrast to enteral (tube) feeding.
 */
export type INutritionOrderOralDiet = fhir.IBackboneElement & {
  /**
   * The required consistency (e.g. honey-thick, nectar-thick, thin, thickened.) of liquids or fluids served to the patient.
   */
  fluidConsistencyType?: fhir.ICodeableConcept[]|undefined;
  /**
   * Free text dosage instructions can be used for cases where the instructions are too complex to code.
   */
  instruction?: string|undefined;
  _instruction?: fhir.IFhirElement|undefined;
  /**
   * Class that defines the quantity and type of nutrient modifications (for example carbohydrate, fiber or sodium) required for the oral diet.
   */
  nutrient?: fhir.INutritionOrderOralDietNutrient[]|undefined;
  /**
   * The time period and frequency at which the diet should be given.  The diet should be given for the combination of all schedules if more than one schedule is present.
   */
  schedule?: fhir.ITiming[]|undefined;
  /**
   * Class that describes any texture modifications required for the patient to safely consume various types of solid foods.
   */
  texture?: fhir.INutritionOrderOralDietTexture[]|undefined;
  /**
   * The kind of diet or dietary restriction such as fiber restricted diet or diabetic diet.
   */
  type?: fhir.ICodeableConcept[]|undefined;
}
/**
 * Oral nutritional products given in order to add further nutritional value to the patient's diet.
 */
export type INutritionOrderSupplement = fhir.IBackboneElement & {
  /**
   * Free text dosage instructions can be used for cases where the instructions are too complex to code.
   */
  instruction?: string|undefined;
  _instruction?: fhir.IFhirElement|undefined;
  /**
   * The product or brand name of the nutritional supplement such as "Acme Protein Shake".
   */
  productName?: string|undefined;
  _productName?: fhir.IFhirElement|undefined;
  /**
   * The amount of the nutritional supplement to be given.
   */
  quantity?: fhir.IQuantity|undefined;
  /**
   * The time period and frequency at which the supplement(s) should be given.  The supplement should be given for the combination of all schedules if more than one schedule is present.
   */
  schedule?: fhir.ITiming[]|undefined;
  /**
   * The kind of nutritional supplement product required such as a high protein or pediatric clear liquid supplement.
   */
  type?: fhir.ICodeableConcept|undefined;
}
/**
 * See implementation notes below for further discussion on how to order continuous vs bolus enteral feeding using this resource.
 */
export type INutritionOrderEnteralFormulaAdministration = fhir.IBackboneElement & {
  /**
   * The volume of formula to provide to the patient per the specified administration schedule.
   */
  quantity?: fhir.IQuantity|undefined;
  /**
   * Ratio is used when the quantity value in the denominator is not "1", otherwise use Quantity. For example, the Ratio datatype is used for "200 mL/4 hrs" versus the Quantity datatype for "50 mL/hr".
   */
  rateQuantity?: fhir.IQuantity|undefined;
  /**
   * Ratio is used when the quantity value in the denominator is not "1", otherwise use Quantity. For example, the Ratio datatype is used for "200 mL/4 hrs" versus the Quantity datatype for "50 mL/hr".
   */
  rateRatio?: fhir.IRatio|undefined;
  /**
   * The time period and frequency at which the enteral formula should be delivered to the patient.
   */
  schedule?: fhir.ITiming|undefined;
}
/**
 * Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.
 */
export type INutritionOrderEnteralFormula = fhir.IBackboneElement & {
  /**
   * The product or brand name of the type of modular component to be added to the formula.
   */
  additiveProductName?: string|undefined;
  _additiveProductName?: fhir.IFhirElement|undefined;
  /**
   * Indicates the type of modular component such as protein, carbohydrate, fat or fiber to be provided in addition to or mixed with the base formula.
   */
  additiveType?: fhir.ICodeableConcept|undefined;
  /**
   * See implementation notes below for further discussion on how to order continuous vs bolus enteral feeding using this resource.
   */
  administration?: fhir.INutritionOrderEnteralFormulaAdministration[]|undefined;
  /**
   * Free text dosage instructions can be used for cases where the instructions are too complex to code.
   */
  administrationInstruction?: string|undefined;
  _administrationInstruction?: fhir.IFhirElement|undefined;
  /**
   * The product or brand name of the enteral or infant formula product such as "ACME Adult Standard Formula".
   */
  baseFormulaProductName?: string|undefined;
  _baseFormulaProductName?: fhir.IFhirElement|undefined;
  /**
   * The type of enteral or infant formula such as an adult standard formula with fiber or a soy-based infant formula.
   */
  baseFormulaType?: fhir.ICodeableConcept|undefined;
  /**
   * The amount of energy (calories) that the formula should provide per specified volume, typically per mL or fluid oz.  For example, an infant may require a formula that provides 24 calories per fluid ounce or an adult may require an enteral formula that provides 1.5 calorie/mL.
   */
  caloricDensity?: fhir.IQuantity|undefined;
  /**
   * The maximum total quantity of formula that may be administered to a subject over the period of time, e.g. 1440 mL over 24 hours.
   */
  maxVolumeToDeliver?: fhir.IQuantity|undefined;
  /**
   * The route or physiological path of administration into the patient's gastrointestinal  tract for purposes of providing the formula feeding, e.g. nasogastric tube.
   */
  routeofAdministration?: fhir.ICodeableConcept|undefined;
}
/**
 * A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.
 */
export type INutritionOrder = fhir.IDomainResource & {
  /**
   * Resource Type Name
   */
  resourceType: "NutritionOrder";
  /**
   * Information on a patient's food allergies and intolerances to inform healthcare personnel about the type of foods that the patient shouldn't receive or consume.
   */
  allergyIntolerance?: fhir.IReference[]|undefined;
  /**
   * The date and time that this nutrition order was requested.
   */
  dateTime: string|null;
  _dateTime?: fhir.IFhirElement|undefined;
  /**
   * An encounter that provides additional information about the healthcare context in which this request is made.
   */
  encounter?: fhir.IReference|undefined;
  /**
   * Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.
   */
  enteralFormula?: fhir.INutritionOrderEnteralFormula|undefined;
  /**
   * Information on a patient's food allergies, intolerances and preferences to inform healthcare personnel about the type  of foods that the patient shouldn't receive or consume.
   */
  excludeFoodModifier?: fhir.ICodeableConcept[]|undefined;
  /**
   * Information on a patient's food preferences that inform healthcare personnel about the food that the patient should receive or consume.
   */
  foodPreferenceModifier?: fhir.ICodeableConcept[]|undefined;
  /**
   * The Identifier.type element can be to indicate filler vs. placer if needed.  This is explained in further detail [here](servicerequest.html#notes).
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * The URL pointing to a protocol, guideline, orderset or other definition that is adhered to in whole or in part by this NutritionOrder.
   */
  instantiates?: string[]|undefined;
  _instantiates?: fhir.IFhirElement[]|undefined;
  /**
   * Note: This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  instantiatesCanonical?: string[]|undefined;
  _instantiatesCanonical?: fhir.IFhirElement[]|undefined;
  /**
   * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
   */
  instantiatesUri?: string[]|undefined;
  _instantiatesUri?: fhir.IFhirElement[]|undefined;
  /**
   * When resources map to this element, they are free to define as many codes as necessary to cover their space and will map to "proposal, plan or order".  Can have multiple codes that map to one of these.  E.g. "original order", "encoded order", "reflex order" would all map to "order".  Expectation is that the set of codes is mutually exclusive or a strict all-encompassing hierarchy.
   */
  intent: NutritionOrderIntentEnum|null;
  _intent?: fhir.IFhirElement|undefined;
  /**
   * This element SHALL NOT be used to supply free text instructions for the diet which are represented in the `.oralDiet.instruction`, `supplement.instruction`, or `enteralFormula.administrationInstruction` elements.
   */
  note?: fhir.IAnnotation[]|undefined;
  /**
   * Diet given orally in contrast to enteral (tube) feeding.
   */
  oralDiet?: fhir.INutritionOrderOralDiet|undefined;
  /**
   * The practitioner that holds legal responsibility for ordering the diet, nutritional supplement, or formula feedings.
   */
  orderer?: fhir.IReference|undefined;
  /**
   * The person (patient) who needs the nutrition order for an oral diet, nutritional supplement and/or enteral or formula feeding.
   */
  patient: fhir.IReference|null;
  /**
   * Typically the system placing the order sets the status to "requested". Thereafter, the order is maintained by the receiver that updates the status as the request is handled.  This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: NutritionOrderStatusEnum|null;
  _status?: fhir.IFhirElement|undefined;
  /**
   * Oral nutritional products given in order to add further nutritional value to the patient's diet.
   */
  supplement?: fhir.INutritionOrderSupplement[]|undefined;
}
/**
 * Class that defines the quantity and type of nutrient modifications (for example carbohydrate, fiber or sodium) required for the oral diet.
 */
export class NutritionOrderOralDietNutrient extends fhir.BackboneElement implements fhir.INutritionOrderOralDietNutrient {
  /**
   * The quantity of the specified nutrient to include in diet.
   */
  public amount?: fhir.Quantity|undefined;
  /**
   * The nutrient that is being modified such as carbohydrate or sodium.
   */
  public modifier?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for NutritionOrderOralDietNutrient - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.INutritionOrderOralDietNutrient> = {}) {
    super(source);
    if (source["amount"]) { this.amount = new fhir.Quantity(source.amount!); }
    if (source["modifier"]) { this.modifier = new fhir.CodeableConcept(source.modifier!); }
  }
  /**
   * Check if the current NutritionOrderOralDietNutrient contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a NutritionOrderOralDietNutrient from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.INutritionOrderOralDietNutrient):NutritionOrderOralDietNutrient {
    var dest:NutritionOrderOralDietNutrient = new NutritionOrderOralDietNutrient(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `NutritionOrderOralDietNutrient is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Class that describes any texture modifications required for the patient to safely consume various types of solid foods.
 */
export class NutritionOrderOralDietTexture extends fhir.BackboneElement implements fhir.INutritionOrderOralDietTexture {
  /**
   * Coupled with the `texture.modifier`; could be (All Foods).
   */
  public foodType?: fhir.CodeableConcept|undefined;
  /**
   * Coupled with the foodType (Meat).
   */
  public modifier?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for NutritionOrderOralDietTexture - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.INutritionOrderOralDietTexture> = {}) {
    super(source);
    if (source["foodType"]) { this.foodType = new fhir.CodeableConcept(source.foodType!); }
    if (source["modifier"]) { this.modifier = new fhir.CodeableConcept(source.modifier!); }
  }
  /**
   * Check if the current NutritionOrderOralDietTexture contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a NutritionOrderOralDietTexture from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.INutritionOrderOralDietTexture):NutritionOrderOralDietTexture {
    var dest:NutritionOrderOralDietTexture = new NutritionOrderOralDietTexture(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `NutritionOrderOralDietTexture is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Diet given orally in contrast to enteral (tube) feeding.
 */
export class NutritionOrderOralDiet extends fhir.BackboneElement implements fhir.INutritionOrderOralDiet {
  /**
   * The required consistency (e.g. honey-thick, nectar-thick, thin, thickened.) of liquids or fluids served to the patient.
   */
  public fluidConsistencyType?: fhir.CodeableConcept[]|undefined;
  /**
   * Free text dosage instructions can be used for cases where the instructions are too complex to code.
   */
  public instruction?: string|undefined;
  public _instruction?: fhir.FhirElement|undefined;
  /**
   * Class that defines the quantity and type of nutrient modifications (for example carbohydrate, fiber or sodium) required for the oral diet.
   */
  public nutrient?: fhir.NutritionOrderOralDietNutrient[]|undefined;
  /**
   * The time period and frequency at which the diet should be given.  The diet should be given for the combination of all schedules if more than one schedule is present.
   */
  public schedule?: fhir.Timing[]|undefined;
  /**
   * Class that describes any texture modifications required for the patient to safely consume various types of solid foods.
   */
  public texture?: fhir.NutritionOrderOralDietTexture[]|undefined;
  /**
   * The kind of diet or dietary restriction such as fiber restricted diet or diabetic diet.
   */
  public type?: fhir.CodeableConcept[]|undefined;
  /**
   * Default constructor for NutritionOrderOralDiet - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.INutritionOrderOralDiet> = {}) {
    super(source);
    if (source["fluidConsistencyType"]) { this.fluidConsistencyType = source.fluidConsistencyType.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["instruction"]) { this.instruction = source.instruction; }
    if (source["_instruction"]) { this._instruction = new fhir.FhirElement(source._instruction!); }
    if (source["nutrient"]) { this.nutrient = source.nutrient.map((x:Partial<fhir.INutritionOrderOralDietNutrient>) => new fhir.NutritionOrderOralDietNutrient(x)); }
    if (source["schedule"]) { this.schedule = source.schedule.map((x:Partial<fhir.ITiming>) => new fhir.Timing(x)); }
    if (source["texture"]) { this.texture = source.texture.map((x:Partial<fhir.INutritionOrderOralDietTexture>) => new fhir.NutritionOrderOralDietTexture(x)); }
    if (source["type"]) { this.type = source.type.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
  }
  /**
   * Check if the current NutritionOrderOralDiet contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a NutritionOrderOralDiet from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.INutritionOrderOralDiet):NutritionOrderOralDiet {
    var dest:NutritionOrderOralDiet = new NutritionOrderOralDiet(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `NutritionOrderOralDiet is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Oral nutritional products given in order to add further nutritional value to the patient's diet.
 */
export class NutritionOrderSupplement extends fhir.BackboneElement implements fhir.INutritionOrderSupplement {
  /**
   * Free text dosage instructions can be used for cases where the instructions are too complex to code.
   */
  public instruction?: string|undefined;
  public _instruction?: fhir.FhirElement|undefined;
  /**
   * The product or brand name of the nutritional supplement such as "Acme Protein Shake".
   */
  public productName?: string|undefined;
  public _productName?: fhir.FhirElement|undefined;
  /**
   * The amount of the nutritional supplement to be given.
   */
  public quantity?: fhir.Quantity|undefined;
  /**
   * The time period and frequency at which the supplement(s) should be given.  The supplement should be given for the combination of all schedules if more than one schedule is present.
   */
  public schedule?: fhir.Timing[]|undefined;
  /**
   * The kind of nutritional supplement product required such as a high protein or pediatric clear liquid supplement.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for NutritionOrderSupplement - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.INutritionOrderSupplement> = {}) {
    super(source);
    if (source["instruction"]) { this.instruction = source.instruction; }
    if (source["_instruction"]) { this._instruction = new fhir.FhirElement(source._instruction!); }
    if (source["productName"]) { this.productName = source.productName; }
    if (source["_productName"]) { this._productName = new fhir.FhirElement(source._productName!); }
    if (source["quantity"]) { this.quantity = new fhir.Quantity(source.quantity!); }
    if (source["schedule"]) { this.schedule = source.schedule.map((x:Partial<fhir.ITiming>) => new fhir.Timing(x)); }
    if (source["type"]) { this.type = new fhir.CodeableConcept(source.type!); }
  }
  /**
   * Check if the current NutritionOrderSupplement contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a NutritionOrderSupplement from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.INutritionOrderSupplement):NutritionOrderSupplement {
    var dest:NutritionOrderSupplement = new NutritionOrderSupplement(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `NutritionOrderSupplement is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * See implementation notes below for further discussion on how to order continuous vs bolus enteral feeding using this resource.
 */
export class NutritionOrderEnteralFormulaAdministration extends fhir.BackboneElement implements fhir.INutritionOrderEnteralFormulaAdministration {
  /**
   * The volume of formula to provide to the patient per the specified administration schedule.
   */
  public quantity?: fhir.Quantity|undefined;
  /**
   * Ratio is used when the quantity value in the denominator is not "1", otherwise use Quantity. For example, the Ratio datatype is used for "200 mL/4 hrs" versus the Quantity datatype for "50 mL/hr".
   */
  public rateQuantity?: fhir.Quantity|undefined;
  /**
   * Ratio is used when the quantity value in the denominator is not "1", otherwise use Quantity. For example, the Ratio datatype is used for "200 mL/4 hrs" versus the Quantity datatype for "50 mL/hr".
   */
  public rateRatio?: fhir.Ratio|undefined;
  /**
   * The time period and frequency at which the enteral formula should be delivered to the patient.
   */
  public schedule?: fhir.Timing|undefined;
  /**
   * Default constructor for NutritionOrderEnteralFormulaAdministration - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.INutritionOrderEnteralFormulaAdministration> = {}) {
    super(source);
    if (source["quantity"]) { this.quantity = new fhir.Quantity(source.quantity!); }
    if (source["rateQuantity"]) { this.rateQuantity = new fhir.Quantity(source.rateQuantity!); }
    if (source["rateRatio"]) { this.rateRatio = new fhir.Ratio(source.rateRatio!); }
    if (source["schedule"]) { this.schedule = new fhir.Timing(source.schedule!); }
  }
  /**
   * Check if the current NutritionOrderEnteralFormulaAdministration contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a NutritionOrderEnteralFormulaAdministration from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.INutritionOrderEnteralFormulaAdministration):NutritionOrderEnteralFormulaAdministration {
    var dest:NutritionOrderEnteralFormulaAdministration = new NutritionOrderEnteralFormulaAdministration(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `NutritionOrderEnteralFormulaAdministration is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.
 */
export class NutritionOrderEnteralFormula extends fhir.BackboneElement implements fhir.INutritionOrderEnteralFormula {
  /**
   * The product or brand name of the type of modular component to be added to the formula.
   */
  public additiveProductName?: string|undefined;
  public _additiveProductName?: fhir.FhirElement|undefined;
  /**
   * Indicates the type of modular component such as protein, carbohydrate, fat or fiber to be provided in addition to or mixed with the base formula.
   */
  public additiveType?: fhir.CodeableConcept|undefined;
  /**
   * See implementation notes below for further discussion on how to order continuous vs bolus enteral feeding using this resource.
   */
  public administration?: fhir.NutritionOrderEnteralFormulaAdministration[]|undefined;
  /**
   * Free text dosage instructions can be used for cases where the instructions are too complex to code.
   */
  public administrationInstruction?: string|undefined;
  public _administrationInstruction?: fhir.FhirElement|undefined;
  /**
   * The product or brand name of the enteral or infant formula product such as "ACME Adult Standard Formula".
   */
  public baseFormulaProductName?: string|undefined;
  public _baseFormulaProductName?: fhir.FhirElement|undefined;
  /**
   * The type of enteral or infant formula such as an adult standard formula with fiber or a soy-based infant formula.
   */
  public baseFormulaType?: fhir.CodeableConcept|undefined;
  /**
   * The amount of energy (calories) that the formula should provide per specified volume, typically per mL or fluid oz.  For example, an infant may require a formula that provides 24 calories per fluid ounce or an adult may require an enteral formula that provides 1.5 calorie/mL.
   */
  public caloricDensity?: fhir.Quantity|undefined;
  /**
   * The maximum total quantity of formula that may be administered to a subject over the period of time, e.g. 1440 mL over 24 hours.
   */
  public maxVolumeToDeliver?: fhir.Quantity|undefined;
  /**
   * The route or physiological path of administration into the patient's gastrointestinal  tract for purposes of providing the formula feeding, e.g. nasogastric tube.
   */
  public routeofAdministration?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for NutritionOrderEnteralFormula - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.INutritionOrderEnteralFormula> = {}) {
    super(source);
    if (source["additiveProductName"]) { this.additiveProductName = source.additiveProductName; }
    if (source["_additiveProductName"]) { this._additiveProductName = new fhir.FhirElement(source._additiveProductName!); }
    if (source["additiveType"]) { this.additiveType = new fhir.CodeableConcept(source.additiveType!); }
    if (source["administration"]) { this.administration = source.administration.map((x:Partial<fhir.INutritionOrderEnteralFormulaAdministration>) => new fhir.NutritionOrderEnteralFormulaAdministration(x)); }
    if (source["administrationInstruction"]) { this.administrationInstruction = source.administrationInstruction; }
    if (source["_administrationInstruction"]) { this._administrationInstruction = new fhir.FhirElement(source._administrationInstruction!); }
    if (source["baseFormulaProductName"]) { this.baseFormulaProductName = source.baseFormulaProductName; }
    if (source["_baseFormulaProductName"]) { this._baseFormulaProductName = new fhir.FhirElement(source._baseFormulaProductName!); }
    if (source["baseFormulaType"]) { this.baseFormulaType = new fhir.CodeableConcept(source.baseFormulaType!); }
    if (source["caloricDensity"]) { this.caloricDensity = new fhir.Quantity(source.caloricDensity!); }
    if (source["maxVolumeToDeliver"]) { this.maxVolumeToDeliver = new fhir.Quantity(source.maxVolumeToDeliver!); }
    if (source["routeofAdministration"]) { this.routeofAdministration = new fhir.CodeableConcept(source.routeofAdministration!); }
  }
  /**
   * Check if the current NutritionOrderEnteralFormula contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a NutritionOrderEnteralFormula from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.INutritionOrderEnteralFormula):NutritionOrderEnteralFormula {
    var dest:NutritionOrderEnteralFormula = new NutritionOrderEnteralFormula(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `NutritionOrderEnteralFormula is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.
 */
export class NutritionOrder extends fhir.DomainResource implements fhir.INutritionOrder {
  /**
   * Resource Type Name
   */
  public override resourceType: "NutritionOrder";
  /**
   * Information on a patient's food allergies and intolerances to inform healthcare personnel about the type of foods that the patient shouldn't receive or consume.
   */
  public allergyIntolerance?: fhir.Reference[]|undefined;
  /**
   * The date and time that this nutrition order was requested.
   */
  public dateTime: string|null;
  public _dateTime?: fhir.FhirElement|undefined;
  /**
   * An encounter that provides additional information about the healthcare context in which this request is made.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.
   */
  public enteralFormula?: fhir.NutritionOrderEnteralFormula|undefined;
  /**
   * Information on a patient's food allergies, intolerances and preferences to inform healthcare personnel about the type  of foods that the patient shouldn't receive or consume.
   */
  public excludeFoodModifier?: fhir.CodeableConcept[]|undefined;
  /**
   * Information on a patient's food preferences that inform healthcare personnel about the food that the patient should receive or consume.
   */
  public foodPreferenceModifier?: fhir.CodeableConcept[]|undefined;
  /**
   * The Identifier.type element can be to indicate filler vs. placer if needed.  This is explained in further detail [here](servicerequest.html#notes).
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * The URL pointing to a protocol, guideline, orderset or other definition that is adhered to in whole or in part by this NutritionOrder.
   */
  public instantiates?: string[]|undefined;
  public _instantiates?: fhir.FhirElement[]|undefined;
  /**
   * Note: This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  public instantiatesCanonical?: string[]|undefined;
  public _instantiatesCanonical?: fhir.FhirElement[]|undefined;
  /**
   * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
   */
  public instantiatesUri?: string[]|undefined;
  public _instantiatesUri?: fhir.FhirElement[]|undefined;
  /**
   * When resources map to this element, they are free to define as many codes as necessary to cover their space and will map to "proposal, plan or order".  Can have multiple codes that map to one of these.  E.g. "original order", "encoded order", "reflex order" would all map to "order".  Expectation is that the set of codes is mutually exclusive or a strict all-encompassing hierarchy.
   */
  public intent: NutritionOrderIntentEnum|null;
  public _intent?: fhir.FhirElement|undefined;
  /**
   * This element SHALL NOT be used to supply free text instructions for the diet which are represented in the `.oralDiet.instruction`, `supplement.instruction`, or `enteralFormula.administrationInstruction` elements.
   */
  public note?: fhir.Annotation[]|undefined;
  /**
   * Diet given orally in contrast to enteral (tube) feeding.
   */
  public oralDiet?: fhir.NutritionOrderOralDiet|undefined;
  /**
   * The practitioner that holds legal responsibility for ordering the diet, nutritional supplement, or formula feedings.
   */
  public orderer?: fhir.Reference|undefined;
  /**
   * The person (patient) who needs the nutrition order for an oral diet, nutritional supplement and/or enteral or formula feeding.
   */
  public patient: fhir.Reference|null;
  /**
   * Typically the system placing the order sets the status to "requested". Thereafter, the order is maintained by the receiver that updates the status as the request is handled.  This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status: NutritionOrderStatusEnum|null;
  public _status?: fhir.FhirElement|undefined;
  /**
   * Oral nutritional products given in order to add further nutritional value to the patient's diet.
   */
  public supplement?: fhir.NutritionOrderSupplement[]|undefined;
  /**
   * Default constructor for NutritionOrder - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.INutritionOrder> = {}) {
    super(source);
    this.resourceType = 'NutritionOrder';
    if (source["allergyIntolerance"]) { this.allergyIntolerance = source.allergyIntolerance.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    this.dateTime = null;
    if (source["dateTime"]) { this.dateTime = source.dateTime; }
    if (this.dateTime === undefined) { this.dateTime = null }
    if (source["_dateTime"]) { this._dateTime = new fhir.FhirElement(source._dateTime!); }
    if (source["encounter"]) { this.encounter = new fhir.Reference(source.encounter!); }
    if (source["enteralFormula"]) { this.enteralFormula = new fhir.NutritionOrderEnteralFormula(source.enteralFormula!); }
    if (source["excludeFoodModifier"]) { this.excludeFoodModifier = source.excludeFoodModifier.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["foodPreferenceModifier"]) { this.foodPreferenceModifier = source.foodPreferenceModifier.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["identifier"]) { this.identifier = source.identifier.map((x:Partial<fhir.IIdentifier>) => new fhir.Identifier(x)); }
    if (source["instantiates"]) { this.instantiates = source.instantiates.map((x) => (x)); }
    if (source["_instantiates"]) { this._instantiates = source._instantiates.map((x:Partial<fhir.IFhirElement>) => new fhir.FhirElement(x)); }
    if (source["instantiatesCanonical"]) { this.instantiatesCanonical = source.instantiatesCanonical.map((x) => (x)); }
    if (source["_instantiatesCanonical"]) { this._instantiatesCanonical = source._instantiatesCanonical.map((x:Partial<fhir.IFhirElement>) => new fhir.FhirElement(x)); }
    if (source["instantiatesUri"]) { this.instantiatesUri = source.instantiatesUri.map((x) => (x)); }
    if (source["_instantiatesUri"]) { this._instantiatesUri = source._instantiatesUri.map((x:Partial<fhir.IFhirElement>) => new fhir.FhirElement(x)); }
    this.intent = null;
    if (source["intent"]) { this.intent = source.intent; }
    if (this.intent === undefined) { this.intent = null }
    if (source["_intent"]) { this._intent = new fhir.FhirElement(source._intent!); }
    if (source["note"]) { this.note = source.note.map((x:Partial<fhir.IAnnotation>) => new fhir.Annotation(x)); }
    if (source["oralDiet"]) { this.oralDiet = new fhir.NutritionOrderOralDiet(source.oralDiet!); }
    if (source["orderer"]) { this.orderer = new fhir.Reference(source.orderer!); }
    this.patient = null;
    if (source["patient"]) { this.patient = new fhir.Reference(source.patient!); }
    if (this.patient === undefined) { this.patient = null }
    this.status = null;
    if (source["status"]) { this.status = source.status; }
    if (this.status === undefined) { this.status = null }
    if (source["_status"]) { this._status = new fhir.FhirElement(source._status!); }
    if (source["supplement"]) { this.supplement = source.supplement.map((x:Partial<fhir.INutritionOrderSupplement>) => new fhir.NutritionOrderSupplement(x)); }
  }
  /**
   * Check if the current NutritionOrder contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["dateTime"] === undefined) { missingElements.push("dateTime"); }
    if (this["intent"] === undefined) { missingElements.push("intent"); }
    if (this["patient"] === undefined) { missingElements.push("patient"); }
    if (this["status"] === undefined) { missingElements.push("status"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a NutritionOrder from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.INutritionOrder):NutritionOrder {
    var dest:NutritionOrder = new NutritionOrder(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `NutritionOrder is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Code Values for the NutritionOrder.intent field
 */
export enum NutritionOrderIntentEnum {
  PROPOSAL = "proposal",
  PLAN = "plan",
  DIRECTIVE = "directive",
  ORDER = "order",
  ORIGINAL_ORDER = "original-order",
  REFLEX_ORDER = "reflex-order",
  FILLER_ORDER = "filler-order",
  INSTANCE_ORDER = "instance-order",
  OPTION = "option",
}
/**
 * Code Values for the NutritionOrder.status field
 */
export enum NutritionOrderStatusEnum {
  DRAFT = "draft",
  ACTIVE = "active",
  ON_HOLD = "on-hold",
  REVOKED = "revoked",
  COMPLETED = "completed",
  ENTERED_IN_ERROR = "entered-in-error",
  UNKNOWN = "unknown",
}