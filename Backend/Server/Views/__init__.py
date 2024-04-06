from flask import Blueprint
from flask_restful import Api

from Server.Views.orderviews import ViewAllOrders,AddOrder,OrderbyId

api_endpoints = Blueprint('auth', __name__, url_prefix='/api')
api = Api(api_endpoints)


api.add_resource(ViewAllOrders , '/orders')
api.add_resource(AddOrder , '/neworder')
api.add_resource(OrderbyId, '/orders/<int:order_id>')

