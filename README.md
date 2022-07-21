# MLS Stats
This site was created using Next-JS, Bootstrap, Chart.JS, and MongoDB.

# Explanation
This site interacts with the API Sports football API to pull information for every MLS team at most once a day. When this information is pulled, it is stored onto my MongoDB database. The pages for this website are served statically and re-rendered once every hour in case the information from the database has changed.