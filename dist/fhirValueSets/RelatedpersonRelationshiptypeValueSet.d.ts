import { Coding } from '../fhir';
/**
 * A set of codes that can be used to indicate the relationship between a Patient and a Related Person.
 */
export declare const RelatedpersonRelationshiptypeValueSet: {
    /**
     * PersonalRelationshipRoleType
     */
    v3_RoleCode_PersonalRelationshipRoleType: Coding;
    /**
     * The player of the role (father) is a male who has taken the scoper (child) into their family through legal means and raises them as his own child.
     */
    v3_RoleCode_AdoptiveFather: Coding;
    /**
     * The player of the role (father) is a female who has taken the scoper (child) into their family through legal means and raises them as her own child.
     */
    v3_RoleCode_AdoptiveMother: Coding;
    /**
     * The player of the role (parent) has taken the scoper (child) into their family through legal means and raises them as his or her own child.
     */
    v3_RoleCode_AdoptiveParent: Coding;
    /**
     * The player of the role is a sister of the scoping person's mother or father.
     */
    v3_RoleCode_Aunt: Coding;
    /**
     * The player of the role is a male sharing one or both parents in common with the scoping entity.
     */
    v3_RoleCode_Brother: Coding;
    /**
     * The player of the role is: (1) a brother of the scoping person's spouse, or (2) the husband of the scoping person's sister, or (3) the husband of a sister of the scoping person's spouse.
     */
    v3_RoleCode_BrotherInLaw: Coding;
    /**
     * The player of the role is a child of the scoping entity.
     */
    v3_RoleCode_Child: Coding;
    /**
     * The player of the role is a child taken into a family through legal means and raised by the scoping person (parent) as his or her own child.
     */
    v3_RoleCode_AdoptedChild: Coding;
    /**
     * The player of the role is a child receiving parental care and nurture from the scoping person (parent) but not related to him or her through legal or blood ties.
     */
    v3_RoleCode_FosterChild: Coding;
    /**
     * The player of the role is the spouse of scoping person's child.
     */
    v3_RoleCode_ChildInLaw: Coding;
    /**
     * The player of the role is a relative of the scoping person descended from a common ancestor, such as a 	grandparent, by two or more steps in a diverging line.
     */
    v3_RoleCode_Cousin: Coding;
    /**
     * The player of the role is a female offspring of the scoping entity (parent).
     */
    v3_RoleCode_NaturalDaughter: Coding;
    /**
     * The player of the role is a female child taken into a family through legal means and raised by the scoping person (parent) as his or her own child.
     */
    v3_RoleCode_AdoptedDaughter: Coding;
    /**
     * Description: The player of the role is a female child (of any type) of scoping entity (parent)
     */
    v3_RoleCode_Daughter: Coding;
    /**
     * The player of the role is a female child receiving parental care and nurture from the scoping person (parent) but not related to him or her through legal or blood ties.
     */
    v3_RoleCode_FosterDaughter: Coding;
    /**
     * The player of the role is the wife of scoping person's son.
     */
    v3_RoleCode_DaughterInLaw: Coding;
    /**
     * The player of the role cohabits with the scoping person but is not the scoping person's spouse.
     */
    v3_RoleCode_DomesticPartner: Coding;
    /**
     * Description: A family member not having an immediate genetic or legal relationship e.g. Aunt, cousin, great grandparent, grandchild, grandparent, niece, nephew or uncle.
     */
    v3_RoleCode_ExtendedFamilyMember: Coding;
    /**
     * A relationship between two people characterizing their "familial" relationship
     */
    v3_RoleCode_FamilyMember: Coding;
    /**
     * Player of the role was previously joined to the scoping person in marriage and this marriage is now dissolved and inactive.
     *
     *
     *                            Usage Note: This is significant to indicate as some jurisdictions have different legal requirements for former spouse to access the patient's record, from a general friend.
     */
    v3_RoleCode_FormerSpouse: Coding;
    /**
     * The player of the role is a person who is known, liked, and trusted by the scoping person.
     */
    v3_RoleCode_UnrelatedFriend: Coding;
    /**
     * The player of the role is a male who begets or raises or nurtures the scoping entity (child).
     */
    v3_RoleCode_Father: Coding;
    /**
     * The player of the role (parent) who is a male state-certified caregiver responsible for the scoper (child) who has been placed in the parent's care. The placement of the child is usually arranged through the government or a social-service agency, and temporary.
     *
     *                         The state, via a jurisdiction recognized child protection agency, stands as in loco parentis to the child, making all legal decisions while the foster parent is responsible for the day-to-day care of the specified child.
     */
    v3_RoleCode_FosterFather: Coding;
    /**
     * The player of the role is the father of the scoping person's husband or wife.
     */
    v3_RoleCode_FatherInLaw: Coding;
    /**
     * The scoper and player were carried in the same womb and share common biological parents but are the product of distinct egg/sperm pairs.
     */
    v3_RoleCode_FraternalTwin: Coding;
    /**
     * The scoper was carried in the same womb as the male player and shares common biological parents but is the product of a distinct egg/sperm pair.
     */
    v3_RoleCode_FraternalTwinBrother: Coding;
    /**
     * The scoper was carried in the same womb as the female player and shares common biological parents but is the product of a distinct egg/sperm pair.
     */
    v3_RoleCode_FraternalTwinSister: Coding;
    /**
     * The player is a female whose womb carries the fetus of the scoper.  Generally used when the gestational mother and natural mother are not the same.
     */
    v3_RoleCode_GestationalMother: Coding;
    /**
     * The player of the role is the father of the scoping person's grandparent.
     */
    v3_RoleCode_GreatGrandfather: Coding;
    /**
     * The player of the role is the mother of the scoping person's grandparent.
     */
    v3_RoleCode_GreatGrandmother: Coding;
    /**
     * The player of the role is a parent of the scoping person's grandparent.
     */
    v3_RoleCode_GreatGrandparent: Coding;
    /**
     * The player of the role is the father of the scoping person's mother or father.
     */
    v3_RoleCode_Grandfather: Coding;
    /**
     * The player of the role is the mother of the scoping person's mother or father.
     */
    v3_RoleCode_Grandmother: Coding;
    /**
     * The player of the role is a child of the scoping person's son or daughter.
     */
    v3_RoleCode_Grandchild: Coding;
    /**
     * The player of the role is a daughter of the scoping person's son or daughter.
     */
    v3_RoleCode_Granddaughter: Coding;
    /**
     * The player of the role is a son of the scoping person's son or daughter.
     */
    v3_RoleCode_Grandson: Coding;
    /**
     * The player of the role is a parent of the scoping person's mother or father.
     */
    v3_RoleCode_Grandparent: Coding;
    /**
     * The player of the role is a male related to the scoping entity by sharing only one biological parent.
     */
    v3_RoleCode_HalfBrother: Coding;
    /**
     * The player of the role is related to the scoping entity by sharing only one biological parent.
     */
    v3_RoleCode_HalfSibling: Coding;
    /**
     * The player of the role is a female related to the scoping entity by sharing only one biological parent.
     */
    v3_RoleCode_HalfSister: Coding;
    /**
     * The player of the role is a man joined to a woman (scoping person) in marriage.
     */
    v3_RoleCode_Husband: Coding;
    /**
     * A relationship between an individual and a member of their spousal partner's immediate family.
     */
    v3_RoleCode_Inlaw: Coding;
    /**
     * The scoper and player are offspring of the same egg-sperm pair.
     */
    v3_RoleCode_IdenticalTwin: Coding;
    /**
     * The male scoper is an offspring of the same egg-sperm pair as the male player.
     */
    v3_RoleCode_IdenticalTwinBrother: Coding;
    /**
     * The female scoper is an offspring of the same egg-sperm pair as the female player.
     */
    v3_RoleCode_IdenticalTwinSister: Coding;
    /**
     * Description:The player of the role is a biological sister of the scoping person's biological mother.
     */
    v3_RoleCode_MaternalAunt: Coding;
    /**
     * Description:The player of the role is a biological relative of the scoping person descended from a common ancestor on the player's mother's side, such as a grandparent, by two or more steps in a diverging line.
     */
    v3_RoleCode_MaternalCousin: Coding;
    /**
     * Description:The player of the role is the biological father of the scoping person's biological mother's parent.
     */
    v3_RoleCode_MaternalGreatGrandfather: Coding;
    /**
     * Description:The player of the role is the biological mother of the scoping person's biological mother's parent.
     */
    v3_RoleCode_MaternalGreatGrandmother: Coding;
    /**
     * Description:The player of the role is a biological parent of the scoping person's biological mother's parent.
     */
    v3_RoleCode_MaternalGreatGrandparent: Coding;
    /**
     * Description:The player of the role is the biological father of the scoping person's biological mother.
     */
    v3_RoleCode_MaternalGrandfather: Coding;
    /**
     * Description:The player of the role is the biological mother of the scoping person's biological mother.
     */
    v3_RoleCode_MaternalGrandmother: Coding;
    /**
     * Description:The player of the role is the biological parent of the scoping person's biological mother.
     */
    v3_RoleCode_MaternalGrandparent: Coding;
    /**
     * The player of the role is a female who conceives, gives birth to, or raises and nurtures the scoping entity (child).
     */
    v3_RoleCode_Mother: Coding;
    /**
     * The player of the role (parent) who is a female state-certified caregiver responsible for the scoper (child) who has been placed in the parent's care. The placement of the child is usually arranged through the government or a social-service agency, and temporary.
     *
     *                         The state, via a jurisdiction recognized child protection agency, stands as in loco parentis to the child, making all legal decisions while the foster parent is responsible for the day-to-day care of the specified child.
     */
    v3_RoleCode_FosterMother: Coding;
    /**
     * The player of the role is the mother of the scoping person's husband or wife.
     */
    v3_RoleCode_MotherInLaw: Coding;
    /**
     * Description:The player of the role is a biological brother of the scoping person's biological mother.
     */
    v3_RoleCode_MaternalUncle: Coding;
    /**
     * The player of the role lives near or next to the 	scoping person.
     */
    v3_RoleCode_Neighbor: Coding;
    /**
     * The player of the role is a male having the same biological parents as the scoping entity.
     */
    v3_RoleCode_NaturalBrother: Coding;
    /**
     * The player of the role is an offspring of the scoping entity as determined by birth.
     */
    v3_RoleCode_NaturalChild: Coding;
    /**
     * The player of the role is a son of the scoping person's brother or sister or of the brother or sister of the 	scoping person's spouse.
     */
    v3_RoleCode_Nephew: Coding;
    /**
     * The player of the role is a male who begets the scoping entity (child).
     */
    v3_RoleCode_NaturalFather: Coding;
    /**
     * Indicates the biologic male parent of a fetus.
     */
    v3_RoleCode_NaturalFatherOfFetus: Coding;
    /**
     * The player of the role is a daughter of the scoping person's brother or sister or of the brother or sister of the 	scoping person's spouse.
     */
    v3_RoleCode_Niece: Coding;
    /**
     * The player of the role is a child of scoping person's brother or sister or of the brother or sister of the 	scoping person's spouse.
     */
    v3_RoleCode_NieceNephew: Coding;
    /**
     * The player of the role is a female who conceives or gives birth to the scoping entity (child).
     */
    v3_RoleCode_NaturalMother: Coding;
    /**
     * The player is the biologic female parent of the scoping fetus.
     */
    v3_RoleCode_NaturalMotherOfFetus: Coding;
    /**
     * natural parent
     */
    v3_RoleCode_NaturalParent: Coding;
    /**
     * The player of the role has both biological parents in common with the scoping entity.
     */
    v3_RoleCode_NaturalSibling: Coding;
    /**
     * The player of the role is a female having the same biological parents as the scoping entity.
     */
    v3_RoleCode_NaturalSister: Coding;
    v2_0131_Other: Coding;
    /**
     * The relationship that a person has with his or her self.
     */
    v3_RoleCode_Self: Coding;
    /**
     * Description:The player of the role is a biological sister of the scoping person's biological father.
     */
    v3_RoleCode_PaternalAunt: Coding;
    /**
     * Description:The player of the role is a biological relative of the scoping person descended from a common ancestor on the player's father's side, such as a grandparent, by two or more steps in a diverging line.
     */
    v3_RoleCode_PaternalCousin: Coding;
    /**
     * Description:The player of the role is the biological father of the scoping person's biological father's parent.
     */
    v3_RoleCode_PaternalGreatGrandfather: Coding;
    /**
     * Description:The player of the role is the biological mother of the scoping person's biological father's parent.
     */
    v3_RoleCode_PaternalGreatGrandmother: Coding;
    /**
     * Description:The player of the role is a biological parent of the scoping person's biological father's parent.
     */
    v3_RoleCode_PaternalGreatGrandparent: Coding;
    /**
     * Description:The player of the role is the biological father of the scoping person's biological father.
     */
    v3_RoleCode_PaternalGrandfather: Coding;
    /**
     * Description:The player of the role is the biological mother of the scoping person's biological father.
     */
    v3_RoleCode_PaternalGrandmother: Coding;
    /**
     * Description:The player of the role is the biological parent of the scoping person's biological father.
     */
    v3_RoleCode_PaternalGrandparent: Coding;
    /**
     * The player of the role is one who begets, gives birth to, or nurtures and raises the scoping entity (child).
     */
    v3_RoleCode_Parent: Coding;
    /**
     * The player of the role (parent) who is a state-certified caregiver responsible for the scoper (child) who has been placed in the parent's care. The placement of the child is usually arranged through the government or a social-service agency, and temporary.
     *
     *                         The state, via a jurisdiction recognized child protection agency, stands as in loco parentis to the child, making all legal decisions while the foster parent is responsible for the day-to-day care of the specified child.
     */
    v3_RoleCode_FosterParent: Coding;
    /**
     * The player of the role is the parent of scoping person's husband or wife.
     */
    v3_RoleCode_ParentInLaw: Coding;
    /**
     * Description:The player of the role is a biological brother of the scoping person's biological father.
     */
    v3_RoleCode_PaternalUncle: Coding;
    /**
     * One who shares living quarters with the subject.
     */
    v3_RoleCode_Roommate: Coding;
    /**
     * The player of the role shares one or both parents in common with the scoping entity.
     */
    v3_RoleCode_Sibling: Coding;
    /**
     * The player of the role is: (1) a sibling of the scoping person's spouse, or (2) the spouse of the scoping person's sibling, or (3) the spouse of a sibling of the scoping person's spouse.
     */
    v3_RoleCode_SiblingInLaw: Coding;
    /**
     * A person who is important to one's well being; especially a spouse or one in a similar relationship.  (The player is the one who is important)
     */
    v3_RoleCode_SignificantOther: Coding;
    /**
     * The player of the role is a female sharing one or both parents in common with the scoping entity.
     */
    v3_RoleCode_Sister: Coding;
    /**
     * The player of the role is: (1) a sister of the scoping person's spouse, or (2) the wife of the scoping person's brother, or (3) the wife of a brother of the scoping person's spouse.
     */
    v3_RoleCode_SisterInLaw: Coding;
    /**
     * The player of the role is a male offspring of the scoping entity (parent).
     */
    v3_RoleCode_NaturalSon: Coding;
    /**
     * The player of the role is a male child taken into a family through legal means and raised by the scoping person (parent) as his or her own child.
     */
    v3_RoleCode_AdoptedSon: Coding;
    /**
     * Description: The player of the role is a male child (of any type) of scoping entity (parent)
     */
    v3_RoleCode_Son: Coding;
    /**
     * The player of the role is a male child receiving parental care and nurture from the scoping person (parent) but not related to him or her through legal or blood ties.
     */
    v3_RoleCode_FosterSon: Coding;
    /**
     * The player of the role is the husband of scoping person's daughter.
     */
    v3_RoleCode_SonInLaw: Coding;
    /**
     * The player of the role is a marriage partner of the scoping person.
     */
    v3_RoleCode_Spouse: Coding;
    /**
     * The player of the role is a son of the scoping person's stepparent.
     */
    v3_RoleCode_Stepbrother: Coding;
    /**
     * The player of the role is a child of the scoping person's spouse by a previous union.
     */
    v3_RoleCode_StepChild: Coding;
    /**
     * The player of the role is a daughter of the scoping person's spouse by a previous union.
     */
    v3_RoleCode_Stepdaughter: Coding;
    /**
     * The player of the role is the husband of scoping person's mother and not the scoping person's natural father.
     */
    v3_RoleCode_Stepfather: Coding;
    /**
     * The player of the role is the wife of scoping person's father and not the scoping person's natural mother.
     */
    v3_RoleCode_Stepmother: Coding;
    /**
     * The player of the role is the spouse of the scoping person's parent and not the scoping person's natural parent.
     */
    v3_RoleCode_StepParent: Coding;
    /**
     * The player of the role is a child of the scoping person's stepparent.
     */
    v3_RoleCode_StepSibling: Coding;
    /**
     * The player of the role is a daughter of the scoping person's stepparent.
     */
    v3_RoleCode_Stepsister: Coding;
    /**
     * The player of the role is a son of the scoping person's spouse by a previous union.
     */
    v3_RoleCode_Stepson: Coding;
    /**
     * The scoper and player were carried in the same womb and shared common biological parents.
     */
    v3_RoleCode_Twin: Coding;
    /**
     * The scoper was carried in the same womb as the male player and shares common biological parents.
     */
    v3_RoleCode_TwinBrother: Coding;
    /**
     * The scoper was carried in the same womb as the female player and shares common biological parents.
     */
    v3_RoleCode_TwinSister: Coding;
    /**
     * The player of the role is a brother of the scoping person's mother or father.
     */
    v3_RoleCode_Uncle: Coding;
    /**
     * The player of the role is a woman joined to a man (scoping person) in marriage.
     */
    v3_RoleCode_Wife: Coding;
};
//# sourceMappingURL=RelatedpersonRelationshiptypeValueSet.d.ts.map