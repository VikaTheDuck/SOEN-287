from flask import Flask, url_for, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('04_index.html',
                           hello=url_for('hello_soen287'),
                           goodbye=url_for('goodbye_soen287'))


@app.route('/hello')
def hello_soen287():
    return '<h1>Hello SOEN287!</h1>'


@app.route('/goodbye')
def goodbye_soen287():
    return '<h1>Goodbye SOEN287!</h1>'


if __name__ == '__main__':
    app.run()

