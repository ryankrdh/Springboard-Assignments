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

operators = {
    "add": add,
    "sub": sub,
    "mult": mult,
    "div": div,
    }

@app.route('/math/<math>')
def calculate(math):
    """Calculates integers a and b depending on route"""

    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = operators[math](a,b)

    return str(result)
