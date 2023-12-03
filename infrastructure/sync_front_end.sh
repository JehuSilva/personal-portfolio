echo Syncing frontend files

aws s3 sync ../frontend/build/ s3://$DOMAIN/ --exclude "*.tmp" --delete
