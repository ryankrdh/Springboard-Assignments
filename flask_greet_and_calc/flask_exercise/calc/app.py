from flask import Flask, request
from operations import add, sub, mult, div

app = Flask(__name__)

# Put your app in here.

@app.route('/add')
def addition():
    """Add a and b parameters"""

    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = add(a,b)

    return str(result)

@app.route('/sub')
def subtraction():
    """Subtract a and b parameters"""

    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = sub(a,b)

    return str(result)

@app.route('/div')
def division():
    """Subtract a and b parameters"""

    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = div(a,b)

    return str(result)

@app.route('/mult')
def multiplication():
    """Subtract a and b parameters"""

    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = mult(a,b)

    return str(result)

