export function getListOfStudent(authorizationCode){
    if(authorizationCode !== ""){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", authorizationCode);
        myHeaders.append("Content-Type","application/json")

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        return fetch("https://school-coexcl-api.el.r.appspot.com/api/school/listStudents?skip=0&limit=30&section=6", requestOptions)
        .then((response) => response.json())
        .then((responseData) => {
            console.log("Student List :- "+JSON.stringify(responseData));
            return responseData;
        }
        ).catch(error => console.warn("Error while Fetching Student List "+error));
    }

}