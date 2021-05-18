// Найдите идентификатор ресторана, название и оценки для тех ресторанов, где 2-й элемент 
// массива оценок содержит оценку «А» и оценку 9 на ISODate «2014-08-11T00:00:00Z».

db = db.getSiblingDB('test')

var specificDate = ISODate("2014-08-11T00:00:00Z")
var index = 2
var grade = "A"
var score = 9

db.restaurants.aggregate([
    {
        "$project": {
            "_id": 0,
            "restaurant_id": 1,
            "name": 1,
            "grades": 1,
            "secondGradeOnSpecificDate": { 
                "$arrayElemAt": [
                    {
                        "$filter": {
                            input: "$grades",
                            as: "grade",
                            cond: { "$lte": ["$$grade.date", specificDate] }
                        }
                    },
                    index
                ]
            }
        }
    },
    {
        "$match": {
            "$and": [
                { "secondGradeOnSpecificDate.grade": grade },
                { "secondGradeOnSpecificDate.score": score }
            ]
        }
    },
    {
        "$unset": "secondGradeOnSpecificDate"
    }
])
    .forEach(printjson)
 