import { Coding } from '../strictmodels';
/**
 * Type for access of external URI.
 */
export declare const RepositoryType: {
    /**
     * When URL is clicked, the resource can be seen directly (by webpage or by download link format).
     */
    repository_type_ClickAndSee: Coding;
    /**
     * When logged into the website, the resource can be seen.
     */
    repository_type_ResultCannotBeAccessUnlessAnAccountIsLoggedIn: Coding;
    /**
     * When logged in and  follow the API in the website related with URL, the resource can be seen.
     */
    repository_type_ResultNeedToBeFetchedWithAPIAndNeedLOGINOrCookiesAreRequiredWhenVisitingTheLinkOfResource: Coding;
    /**
     * When the API method (e.g. [base_url]/[parameter]) related with the URL of the website is executed, the resource can be seen directly (usually in JSON or XML format).
     */
    repository_type_TheURLIsTheRESTfulOrOtherKindOfAPIThatCanAccessToTheResult: Coding;
    /**
     * Some other complicated or particular way to get resource from URL.
     */
    repository_type_SomeOtherComplicatedOrParticularWayToGetResourceFromURL: Coding;
};
//# sourceMappingURL=RepositoryType.d.ts.map