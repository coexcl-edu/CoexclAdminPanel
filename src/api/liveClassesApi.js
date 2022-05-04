export function saveLiveClasses(className,subject,topic,teacherName,duration,url,description,time,logeedInAuthToken) {

  var myHeaders = new Headers();
    myHeaders.append("Authorization", logeedInAuthToken);
    myHeaders.append("Content-Type","application/json")
    var requestOptions = {
    method: 'POST',
    body: JSON.stringify(
      {
        "class": className,
        "subject": subject,
        "topic": topic,
        "teacherName": teacherName,
        "duration": parseInt(duration),
        "videoMeetUrl": url,
        "description": description,
        "startTime": time
      }    
      ),
    redirect: 'follow',
    headers:myHeaders
    };
    return fetch(`https://school-coexcl-api.el.r.appspot.com/api/school/createLiveClass`,requestOptions)
    .then((response) => response.json())
    .then((responseData) => {
        console.log("Live classes added :--> "+responseData);
        return responseData;
      }
    ).catch(error => console.warn("Error while Live Class added  "+error));

}

export function getListOfliveClasses(authorizationCode){
    if(authorizationCode !== ""){
    var myHeaders = new Headers();
    myHeaders.append("Authorization", authorizationCode);
    myHeaders.append("Content-Type","application/json")

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

return fetch("https://school-coexcl-api.el.r.appspot.com/api/school/listLiveClass?skip=1&limit=30", requestOptions)
.then((response) => response.json())
.then((responseData) => {
    console.log("LiveClasses"+JSON.stringify(responseData));
    return responseData;
  }
).catch(error => console.warn("Error while Fetching live classes "+error));
}

}