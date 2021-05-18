// Найдите идентификатор ресторана, название и оценки для тех ресторанов, которые достигли оценки «А»
// и набрали 11 баллов на ISODate «2014-08-11T00:00:00Z».

db = db.getSiblingDB('test')

var specificDate = ISODate("2014-08-11T00:00:00Z")

// TODO: сомневаюсь что правильно понял условие задачи. 
db.restaurants.aggregate([
    {
        "$project": {
            "_id": 0,
            "restaurant_id": 1,
            "name": 1,
            "grades": 1,
            "gradesObjectsOnSpecificDate": { 
                "$filter": {
                    input: "$grades",
                    as: "grade",
                    cond: { "$lte": ["$$grade.date", specificDate] }
                }
            }
        }
    },
    {
        "$match": {
            "gradesObjectsOnSpecificDate.grade": "A"
        }
    },
    {
        "$addFields": {
            "gradesScore": { "$sum": "$gradesObjectsOnSpecificDate.score" }
        }
    },
    {
        "$match": {
            gradesScore: { "$gte": 11 },
        }
    },
    {
        "$project": {
            "_id": 0,
            restaurant_id: 1,
            name: 1,
            grades: 1
        }
    }
])
    .forEach(printjson)
 