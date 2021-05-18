// Напишите запрос, чтобы узнать, содержат ли все адреса улицу или нет.

db = db.getSiblingDB('test')

var countOfAddressesWithMissingStreet = 
    db.restaurants.countDocuments({
        "$or": [
            { "address.street": null },
            { "address.street": "" }
        ]
    })

print("All addresses has street = " + (countOfAddressesWithMissingStreet == 0))