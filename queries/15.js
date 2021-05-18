// Найдите идентификатор ресторана, название, район и кухню для тех ресторанов, которые набрали не более 10 баллов.

db = db.getSiblingDB('test')

db.restaurants.aggregate([
    {
        "$addFields": {
            totalScore: { "$sum": "$grades.score" }
        }
    },
    {
        "$match": {
            totalScore: { "$lt": 10 }
        }
    },
    {
        "$project": {
            "_id": 0,
            "restaurant_id": 1,
            "name": 1,
            "borough": 1,
            "cuisine": 1
        }
    }
])
    .forEach(printjson)
