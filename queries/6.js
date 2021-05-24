// Найдите рестораны, которые набрали более 80, но менее 100 баллов.

db = db.getSiblingDB('test')

db.restaurants.find({
    "grades": { 
        "$elemMatch": { 
            "score": { "$gt": 80, "$lt": 100 }
        }
    }
})
    .forEach(printjson)

