// Найдите идентификатор ресторана, название и оценки для тех ресторанов, которые возвращают 0 в качестве 
// остатка после деления баллов на 7.

db = db.getSiblingDB('test')

db.restaurants.aggregate([
    {
        "$addFields": {
            totalScoreMod: { "$mod": [{"$sum": "$grades.score"}, 7] }
        }
    },
    {
        "$match": {
            totalScoreMod: 0
        }
    },
    {
        "$project": {
            "_id": 0,
            "restaurant_id": 1,
            "grades": 1,
            "name": 1
        }
    }
])
    .forEach(printjson)
