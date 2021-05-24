// Найдите рестораны, которые не готовят «американскую» кухню, с оценкой их баллов более 70 и широтой -65,754168.

db = db.getSiblingDB('test')

db.restaurants.find({
    "cuisine": { "$ne": "American " },
    "address.coord.0": { "$lt": -65.754168 },
    "grades": { 
        "$elemMatch": { 
            "score": { "$gt": 70 }
        }
    }
})
    .forEach(printjson)