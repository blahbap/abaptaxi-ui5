# ABAP Taxi
UI5 application for working with transports in SAP. 
Supports proxying of SAP services while running from local server.
A Node HTTPS server is used to allow persistent user sessions against SAP for installations where the 
SAP server parameter `login/ticket_only_by_https` is set to 1 (true).

# Install the tools
1. Install Node and NPM - https://nodejs.org/en/
2. Install Bower - https://bower.io/

# Install the application 
1. Clone the repository with `git clone https://github.com/blahbap/abaptaxi-ui5.git`
2. Change into directory `abaptaxi-ui5`
3. Install node modules with command  `npm install`
4. Install front end libraries with `bower install`
 
# Configuration 
In the file `config/default.json`, enter the names and URLs of one or more SAP systems.


# Running the server 
1. Execute `node ssl-server`
2. In the browser, go to "https://localhost:3000"
