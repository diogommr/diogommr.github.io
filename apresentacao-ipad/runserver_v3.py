#!/usr/bin/env python
from livereload import Server, shell

server = Server()

# use custom host and port w live updates
server.serve(port=8000, host='192.168.8.103')

# open the web browser on startup, based on $BROWSER environment variable
server.serve(open_url=True, debug=False)
