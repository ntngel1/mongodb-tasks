// Найдите рестораны, которые не готовят «американскую» кухню, с оценкой их баллов более 70 и широтой -65,754168.

db = db.getSiblingDB('test')

db.restaurants.aggregate([
    {
        "$match": {
            cuisine: { "$ne": "American " }
        }
    },
    {
        "$addFields": {
            latitude: { "$first": "$address.coord" },
            totalScore: { "$sum": "$grades.score" }
        }
    },
    {
        "$match": {
            latitude: -65.754168,
            totalScore: { "$gt": 70 }
        }
    },
    {
        "$unset": ["latitude", "totalScore"]
    }
])
    .forEach(printjson)