from flask import Flask, jsonify
app = Flask(__name__)

# Food
class Food(dict):

    all = []
    id_counter = 0

    
    def __init__(self, id, name, price):
        dict.__init__(self)
        Food.id_counter = Food.id_counter + 1
        self["id"]= Food.id_counter
        self["name"] = name
        self["price"] = price
        Food.all.append(self)


Food(1, "Taco", 2)

Food(2, "Burger", 20)

# foods = [ 
#     {
#         "id": 1,
#         "name": "Taco",
#         "price": 2
#     },
#     {
#         "id": 2,
#         "name": "Burger",
#         "price": 20
#     }
# ]

@app.route('/foods')
def index():
    return jsonify(Food.all)

@app.route('/foods/<id>')
def show(id):
    for food in Food.all:
        if food["id"] == int(id):
            return jsonify(food)
