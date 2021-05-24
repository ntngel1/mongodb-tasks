// Найдите идентификатор ресторана, название и оценки для тех ресторанов, где 2-й элемент 
// массива оценок содержит оценку «А» и оценку 9 на ISODate «2014-08-11T00:00:00Z».

db = db.getSiblingDB('test')

var specificDate = ISODate("2014-08-11T00:00:00Z")

db.restaurants.find(
    {
        "grades.1.score": 9,
        "grades.1.grade": "A",
        "grades.1.date": { "$lte": specificDate }
    },
    {
        "_id": 0,
        "restaurant_id": 1,
        "name": 1,
        "grades": 1
    }
)
    .forEach(printjson)
 