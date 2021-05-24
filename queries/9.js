// Найдите рестораны, которые не готовят «американскую» кухню, набрали более 70 баллов и 
// находятся на долготе более 35.754168. Выполните запрос без использования оператора $and.

db = db.getSiblingDB('test')

db.restaurants.find({
    "cuisine": { "$ne": "American " },
    "address.coord.1": { "$gt": 35.754168 },
    "grades": { 
        "$elemMatch": { 
            "score": { "$gt": 70 }
        }
    }
})
    .forEach(printjson)