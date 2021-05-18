// Найдите рестораны, которые не готовят «американскую» кухню и получили оценку «А»,
// не принадлежащие району Brooklyn. Документы должны отображаться в соответствии с кухней в порядке убывания.

db = db.getSiblingDB('test')

db.restaurants.aggregate([
    {
        "$match": {
            $and: [
                { cuisine: { "$ne": "American " } },
                { borough: { "$ne": "Brooklyn" } }
            ]
        }
    },
    {
        "$addFields": {
            gradeSigns: { 
                "$map": {
                    input: "$grades",
                    as: "grade",
                    in: "$$grade.grade"
                }
            }
        }
    },
    {
        "$match": {
            gradeSigns: "A"
        }
    },
    {
        "$unset": "gradeSigns",
    },
    {
        "$sort": {
            cuisine: -1
        }
    }
])
    .forEach(printjson)