// Найдите рестораны, которые набрали более 80, но менее 100 баллов.

db = db.getSiblingDB('test')

db.restaurants.aggregate([
    {
        "$addFields": {
            totalScore: { "$sum": "$grades.score" }
        }
    },
    {
        "$match": {
            totalScore: { "$gt": 80, "$lt": 100 }
        }
    },
    {
        "$unset": "totalScore"
    }
])
    .forEach(printjson)
