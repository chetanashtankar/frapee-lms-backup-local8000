1. System Requirements

	Ubuntu 22.04 or similar

	Python 3.10+

	Node.js 18+

	Redis

	MariaDB 10.6+

	yarn, pip, npm

	wkhtmltopdf
	
	
2. Install Dependencies
 	sudo apt update && sudo apt upgrade -y
	sudo apt install python3-dev python3.10-dev python3-pip python3-setuptools python3-distutils libmysqlclient-dev build-essential libssl-dev libffi-dev python3-venv curl git redis mariadb-server 				xvfb libfontconfig wkhtmltopdf -y
	
	
3. Setup Frappe Bench
	# Install bench CLI
	git clone https://github.com/frappe/bench bench-repo
	sudo pip3 install -e bench-repo

	# Create bench
	bench init frappe-bench --frappe-branch version-14
	cd frappe-bench
	
	
4. Create New Site
	bench new-site dev.local
	# Enter MySQL root password and admin password when prompted
	
	
5. Get LMS App
      	cd apps
	git clone https://github.com/frappe/lms.git
	cd ..
	bench --site dev.local install-app lms
	
	
6. Start Local Server
       bench start
       # Visit: http://localhost:8000
       
       
7. Develop Custom CSS/JS for LMS Website
	# Path for custom styles
	apps/lms/frontend/src/index.css
	apps/lms/frontend/src/assets/**/inter.css

	# To rebuild assets after changes:
	bench build --apps lms
	
	
8. 	http://localhost:8000/app/email-account/Platformiqdemos   /* set up email here */
   	email address : platformiqdemos@gmail.com
   	Service : GMail
   	method : basic
   	password : cggssnuhbzndqgjb
	


