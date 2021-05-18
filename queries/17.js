// Найдите идентификатор ресторана, название и оценки для тех ресторанов, которые достигли оценки «А»
// и набрали 11 баллов на ISODate «2014-08-11T00:00:00Z».

db = db.getSiblingDB('test')

var specificDate = ISODate("2014-08-11T00:00:00Z")

db.restaurants.aggregate([
    {
        "$project": {
            "_id": 0,
            "restaurant_id": 1,
            "name": 1,
            "gradesOnSpecificDate": { 
                "$filter": {
                    input: "$grades",
                    as: "grade",
                    cond: { "$lte": ["$$grade.date", specificDate] }
                }
            }
        }
    },
    {
        "$addFields": {
            "totalScore": { "$sum": "$grades.score" },
            "totalGrade": 
        }
    },
    {
        "$match": {
            gradesOnSpecificDate: {"$elemMatch": {grade: "A"}}
        }
    }
])
    .forEach(printjson)
