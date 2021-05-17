// Найдите рестораны, которые не готовят «американскую» кухню, набрали более 70 баллов и 
// находятся на долготе менее -65,754168. Выполните запрос без использования оператора $and.

db = db.getSiblingDB('test')

db.restaurants.aggregate([
    {
        "$match": {
            cuisine: { "$ne": "American " }
        }
    },
    {
        "$addFields": {
            longitude: { "$last": "$address.coord" }
        }
    },
    {
        "$match": {
            longitude: { "$lt": -65.754168 }
        }
    },
    {
        "$addFields": {
            totalScore: { "$sum": "$grades.score" }
        }
    },
    {
        "$match": {
            totalScore: { "$gt": 70 } 
        }
    },
    {
        "$unset": ["longitude", "totalScore"]
    }
])
    .forEach(printjson)