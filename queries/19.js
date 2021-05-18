// Напишите запрос, чтобы расположить название кухни в порядке возрастания, а для этой же кухни район должен 
// быть в порядке убывания.

db = db.getSiblingDB('test')

db.restaurants.find({})
    .sort({
        cuisine: 1,
        borough: -1
    })
    .forEach(printjson)