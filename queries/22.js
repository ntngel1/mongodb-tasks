// Напишите запрос, чтобы найти название ресторана, район, долготу, широту и кухню для тех ресторанов,
// в которых где-то в названии есть последовательность букв «mon».

db = db.getSiblingDB('test')

db.restaurants.aggregate([
    {
        "$match": {
            name: {"$regex": /.*mon.*/}
        }
    },
    {
        "$project": {
            "_id": 0,
            "name": 1,
            "borough": 1,
            "cuisine": 1,
            "latitude": { "$arrayElemAt": ["$address.coord", 0] },
            "longitude": { "$arrayElemAt": ["$address.coord", 1] },
        }
    }
])
    .forEach(printjson)
