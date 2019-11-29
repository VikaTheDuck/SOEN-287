import csv
from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('base.html')


@app.route('/slides')
def slides():
    prefix = '/static/'
    slide_list = [('Course Outline', prefix+'00_outline.slides.html'), ('HTML', prefix+'01_html.slides.html')]
    return render_template('slides.html', slide_list=slide_list)


@app.route('/documents')
def documents():
    # TODO: put the prefix in the app config dictionary
    prefix = '/static/'
    with open('data/slides.csv') as f:
        doc_list = list(csv.reader(f))[1:]
    return render_template('documents.html', doc_list=doc_list, prefix=prefix)


@app.route('/assignments')
def assignments():
    return render_template('assignments.html')


@app.route('/contact')
def contact():
    return render_template('contact.html')


@app.route('/simple')
def simple():
    return render_template('simple.html')


@app.route('/sub')
def sub():
    return render_template('sub.html')


if __name__ == '__main__':
    app.run()
