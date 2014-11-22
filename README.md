saga
====

1. Normal workflow - check in code, travis runs a build
2. On build success, grunt build, run build-control:<heroku> to deploy the site
3. Later on travis will control the deploy to heroku to automate this task