nginx_start:
	nginx -c $(CURDIR)/nginx.conf

nginx_stop:
	nginx -c $(CURDIR)/nginx.conf -s stop

ngnix_test:
	nginx -t -c $(CURDIR)/nginx.conf

nginx_processes:
	ps -ef | grep nginx