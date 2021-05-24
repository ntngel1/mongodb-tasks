// Напишите запрос, чтобы узнать, содержат ли все адреса улицу или нет.

db = db.getSiblingDB('test')

var count = db.restaurants.find({"address.street": { "$exists": false }})
    .count()

print(count)