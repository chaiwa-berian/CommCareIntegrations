submit(
    field("metadata", function(state){
      return {
        "username": "test",
        "userID": "9231768348d64a5aa8e2df401c6ca7fd",
        "timeStart": "2018-01-10T17:22:28.094000Z",
        "timeEnd": "2018-01-10T17:23:20.373000Z",
        "location": null,
        "geo_point": null,
        "deviceID": "357950075597380",
        "commcare_version": "2.40.1",
        "app_build_version": 34,
        "appVersion": "CommCare Android, version \"2.40.1\"(444156). App v34. CommCare Version 2.40. Build 444156, built on: 2017-11-20"

      }
    }),
    fields(
      field("@", function(state) {
        return {
          "xmlns": "http://openrosa.org/formdesigner/C3478C08-ABB3-47FC-ADF1-A7788E28D565"
        };
      }),
      field("name", "Vibro Waterpoint"),
      field("waterpoint_id", "102772815"),
      field("gps_coordinates", "-13.6426553 32.6390061 0.0 20.0"),
      field("lattitude", "-13.6426553"),
      field("longitude", "32.6390061"),
      field("meta", function(state) {
          return {
            "username": "test",
            "userID": "9231768348d64a5aa8e2df401c6ca7fd",
            "timeStart": "2018-01-10T17:22:28.094000Z",
            "timeEnd": "2018-01-10T17:23:20.373000Z",
            "location": null,
            "geo_point": null,
            "deviceID": "357950075597380",
            "commcare_version": "2.40.1",
            "app_build_version": 34,
            "appVersion": "CommCare Android, version \"2.40.1\"(444156). App v34. CommCare Version 2.40. Build 444156, built on: 2017-11-20",
            "@xmlns": "http://openrosa.org/jr/xforms"
            }
      }),
      field("case", function(state) {
        return {
          field("create", function(state){
            return {
              "owner_id": "69ca667a1fd4bd822f3766e95f91df9c",
              "case_type": "water_point",
              "case_name": "Vibro Waterpoint"
            }
          })
        },
        "@xmlns": "http://commcarehq.org/case/transaction/v2",
        "@user_id": "9231768348d64a5aa8e2df401c6ca7fd",
        "@date_modified": "2018-01-10T17:23:20.373000Z"
      }),
      field("@name", "Waterpoint Registration Form"),
    )
  )