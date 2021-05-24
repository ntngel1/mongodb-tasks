// Найдите рестораны, набравшие более 90 баллов.

db = db.getSiblingDB('test')

db.restaurants.find({
    "grades": { 
        "$elemMatch": { 
            "score": { "$gt": 90 }
        }
    }
})
    .forEach(printjson)
