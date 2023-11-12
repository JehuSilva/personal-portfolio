echo Syncing frontend files

aws s3 sync ../frontend/build/ s3://jehusilva.com/ --exclude "*.tmp" --delete
# aws s3 cp ../frontend/build/ s3://jehusilva.com/ --recursive
