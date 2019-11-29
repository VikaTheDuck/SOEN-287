from flask import Flask, url_for

app = Flask(__name__)


@app.route('/')
def index():
    return '<a href="{0}">{0}</a>'.format(url_for('hello_soen287'))


@app.route('/hello')
def hello_soen287():
    return '<h1>Hello SOEN287!</h1>'


if __name__ == '__main__':
    app.run()

