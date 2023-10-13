from flask import Flask, render_template, request, Response
import os

app = Flask(__name__)

@app.route('/')
def index():
    hists = os.listdir('static/background')
    hists = ['background/' + file for file in hists]
    print('hists: ', hists)
    return render_template('report.html', hists = hists)


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080)