// Отобразите поля идентификатор ресторана, название, район и кухня, но исключите поле _id для всех документов.

db = db.getSiblingDB('test')

db.restaurants.find(
    {},
    {
        "_id": 0,
        "restaurant_id": 1,
        "name": 1,
        "cuisine": 1,
        "borough": 1
    })
    .forEach(printjson)
