from flask import Flask
from flask import render_template
import mysql.connector



app = Flask(__name__)

@app.route('/login')
def login():
    return render_template('login.html')

if __name__ == '__main__':
    app.run(debug=True)