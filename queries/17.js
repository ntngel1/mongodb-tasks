// Найдите идентификатор ресторана, название и оценки для тех ресторанов, которые достигли оценки «А»
// и набрали 11 баллов на ISODate «2014-08-11T00:00:00Z».

db = db.getSiblingDB('test')

var specificDate = ISODate("2014-08-11T00:00:00Z")

db.restaurants.find(
    {
        "grades": { 
            "$elemMatch": {
                "score": 11,
                "date": { "$lte": specificDate }
            }
        },
        "grades": { 
            "$elemMatch": {
                "grade": "A"
            }
        }
    },
    {
        "_id": 0,
        "restaurant_id": 1,
        "name": 1,
        "grades": 1
    }
)
    .forEach(printjson)
 