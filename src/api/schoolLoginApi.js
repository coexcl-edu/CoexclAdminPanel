export function callforLgoing(id,password) {

    //var raw = "{\n    \"schoolCode\": \"COX2100001\",\n    \"password\": \"School@1234\"\n}";
    var raw = "{\n    \"schoolCode\": \"COX2100001\",\n    \"password\": \"School@1234\"\n}";

    var requestOptions = {
    method: 'POST',
    body: JSON.stringify({"schoolCode":id,"password":password}),
    redirect: 'follow',
    headers:{
        'Content-Type': 'application/json',
    }
    };
    return fetch(`https://school-coexcl-api.el.r.appspot.com/api/school/login`,requestOptions)
    .then((response) => response.json())
    .then((responseData) => {
        console.log("Login"+responseData);
        return responseData;
      }
    ).catch(error => console.warn("Error while SchoolLogin "+error));

}


export function calllogout(authorizationCode) {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", authorizationCode);
    myHeaders.append("Content-Type","application/json")

    var requestOptions = {
    method: 'POST',
    redirect: 'follow',
    headers: myHeaders
    };
    return fetch(`https://school-coexcl-api.el.r.appspot.com/api/school/logout`,requestOptions)
    .then((response) => response.json())
    .then((responseData) => {
        console.log("Logout - "+responseData);
        return responseData;
      }
    ).catch(error => console.warn("Error while SchoolLogin "+error));

}