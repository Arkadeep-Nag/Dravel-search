from flask import Flask, redirect, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')
@app.route('/search/<string:search_query>/type/<string:type>')
def search(search_query, type):
    data = {
        'search_query': search_query,
        'type': type,
    }
    branchEvents = [
        'All',
        'Images',
        'Videos',
        'News',
        'Shopping',
        'Tickets',
        'Maps',
    ]
    
    return render_template('search.html',data=data,events=branchEvents)
@app.route('/search/<string:search_query>')
def search_no_page(search_query):
    return redirect(f'/search/{search_query}/type/All')
@app.route('/search/<string:search_query>/')
def search_no_page___(search_query):
    return redirect(f'/search/{search_query}/type/All')

@app.errorhandler(404)
def page_not_found(e):
    return redirect('/')
if __name__ == '__main__':
    app.run(debug=True)