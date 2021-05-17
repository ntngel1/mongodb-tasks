// Найдите рестораны, набравшие более 90 баллов.

db = db.getSiblingDB('test')

db.restaurants.aggregate([
    {
        "$addFields": {
            totalScore: { "$sum": "$grades.score" }
        }
    },
    {
        "$match": {
            totalScore: { "$gt": 90 }
        }
    },
    {
        "$unset": "totalScore"
    }
])
    .forEach(printjson)
