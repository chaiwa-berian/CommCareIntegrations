/************************************* 
 ****A.CommCare to DHIS2 Job Setup****
 ************************************/

//1. Credential Settings
Username: admin
Password: district
API URL: https://pay.dhis2.org/dev

//2. Trigger Settings
Label: New Waterpoint
Trigger Type: Message Filter: Job runs when matching messages arrive
Filter Criteria: {"form":{"@name":"Waterpoint Registration Form"},"app_id":"3ebb1ab0124313650b86d7668645f556"}

//3. Job Code Snippet to Create a new Tracked Entity Instance(Equivalent to CommCare's Case)
createTEI( {
    "trackedEntity": "VENu24Hqrg5",
    "orgUnit": "qCaJ3CY1rgw",
    "attributes": [
      {
      "attribute": "Exn9iU61K5S",
      "value": dataValue("form.name")(state)
      },
      {
        "attribute": "TFk7uLjDrB7",
        "value": dataValue("form.gps_coordinates")(state)
      },
      {
        "attribute": "hA9s4T7EC7x",
        "value": dataValue("form.lattitude")(state)
      },
      {
        "attribute": "HgQVDJTn5p6",
        "value": dataValue("form.longitude")(state)
      },
      {
        "attribute": "dyuCklbsDXs",
        "value": dataValue("form.waterpoint_id")(state)
      }]
  }   )
/************************************* 
 ****B. DHIS2 to CommCare Job Setup****
 ************************************/
