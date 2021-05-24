// Найдите рестораны, которые не готовят «американскую» кухню и получили оценку «А»,
// не принадлежащие району Brooklyn. Документы должны отображаться в соответствии с кухней в порядке убывания.

db = db.getSiblingDB('test')

db.restaurants.find({
    "cuisine": { "$ne": "American " },
    "borough": { "$ne": "Brooklyn" },
    "grades": { 
        "$elemMatch": {
            "grade": "A"
        }
    }
})
    .sort({ "cuisine": -1 })
    .forEach(printjson)