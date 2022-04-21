import { graphConfig } from "./authConfig";

/**
 * Attaches a given access token to a Microsoft Graph API call. Returns information about the user
 */
export async function callMsGraphForUser(accessToken) {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    return fetch(graphConfig.graphMeUserEndpoint, options)
        .then(response => response.json())
        .catch(error => console.log(error));
}
// The links below were for accessing the tokens in the function directly under them:
// https://docs.microsoft.com/en-us/graph/api/resources/user?view=graph-rest-1.0
// https://docs.microsoft.com/en-us/graph/api/profilephoto-get?view=graph-rest-1.0
// https://developer.mozilla.org/en-US/docs/Web/API/Response/blob

export async function callMsGraphForPhoto(accessToken){
    const headers=new Headers();
    const bearer=`Bearer ${accessToken}`;
    headers.append("Authorization",bearer);
    headers.append("Content-Type","image/jpg");
    const options={
        method:"GET",
        headers:headers
    };
    return fetch(graphConfig.graphMePhotoEndpoint,options)
    .then(response=>response.blob())
    .then(blob=>blob)
    .catch(error=>console.log(error));
}

export async function callMsGraphForLists(accessToken){
    const headers=new Headers();
    const bearer=`Bearer ${accessToken}`;
    headers.append("authorization",bearer);
    headers.append("content-Type","image/jpg");
    const options={
        method:"GET",
        headers:headers
    };
    return fetch(graphConfig.graphMeListsEndpoint,options)
    .then(response=>response.json())
    .catch(error=>console.log(error));
}