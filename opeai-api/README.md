# LiveDoc API

### Developer setup

1. ```python3 -m venv flask-venv``` creates your virtual env called flask-venv.
2. ```source flask-venv/bin/activate``` to activate the virtual env.
3. ```deactivate``` to actually deactivate the virtual env.


### TODO
1. Create a NGINX server
2. Setup WSGI
3. Setup Flask application.\


### NGINX server

1. brew services start nginx
2. brew services restart nginx
3. nginx -c custom-nginx.conf
4. nginx -c custom-nginx.conf -s stop