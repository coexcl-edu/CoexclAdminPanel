export function getNotificationList(authorizationCode){
    if(authorizationCode !== ""){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", authorizationCode);
        myHeaders.append("Content-Type","application/json")

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        return fetch("https://school-coexcl-api.el.r.appspot.com/api/school/listNotice", requestOptions)
        .then((response) => response.json())
        .then((responseData) => {
            console.log("Student List :- "+JSON.stringify(responseData));
            return responseData;
        }
        ).catch(error => console.warn("Error while Fetching Student List "+error));
    }

}



export function saveNotification(title,description,referenceUrl,className,logeedInAuthToken) {

    var myHeaders = new Headers();
      myHeaders.append("Authorization", logeedInAuthToken);
      myHeaders.append("Content-Type","application/json")
      var requestOptions = {
      method: 'POST',
      body: JSON.stringify(
        {
          "title": title,
          "notice": description,
          "imageurl":referenceUrl ,
          "class": className,
        }  
        
        ),
      redirect: 'follow',
      headers:myHeaders
      };
      return fetch(`https://school-coexcl-api.el.r.appspot.com/api/school/createNotice`,requestOptions)
      .then((response) => response.json())
      .then((responseData) => {
          console.log("Notification got added :--> "+responseData);
          return responseData;
        }
      ).catch(error => console.warn("Error while Notification added  "+error));
  
  }