// Найдите рестораны, которые не готовят «американскую» кухню, с оценкой их баллов более 70 и широтой -65,754168.

db = db.getSiblingDB('test')

// TODO: У меня почему-то при выполнении этого запроса не выводит ни одного ресторана. Кажется потому что 
// в принципе нет ресторанов на широте -65,754168
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