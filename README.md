# Dravel-search
A search engine made with firebase that can actually search.
You can try the search engine at https://dravel.herokuapp.com

Algorithm behind the scenes :-
1. Crawl the webpage (static) using bs4 . Save the body data in array in firebase firestore
2. Create the webpage with flask
3. With firebase web v9 use query to search in each document in each array for the first letter of the query
4. Show the results

Dravel Search is based on firebase . It is now opensource so that the community can improve on the code and make appropriate changes . You can also find security issues with the code and change it. 

It is in the beta version and the image section is incomplete.
I need to focus on some more important tasks and therefore I am making in the project public so that whatever you can you contribute to build it.
