export DOMAIN=jehusilva.dev
export CERTIFICATE_ARN=arn:aws:acm:us-east-1:418473758315:certificate/89f363a5-4f78-4dbb-9f16-f78487826ed1
export STACK_NAME=project-jehusilva-dev-website

echo Deploying for $DOMAIN

echo Creating lambda package
zip -j ../backend/lambda.zip ../backend/lambda/*

echo Uploading lambda package to S3
aws s3 cp ../backend/lambda.zip s3://centralized-project-artifacts/websites/$DOMAIN/src/lambda/package.zip

echo Removing lambda package
rm ../backend/lambda.zip


aws cloudformation deploy \
--template-file cloudformation-stack.yaml \
--stack-name $STACK_NAME \
--parameter-overrides \
    DomainName=$DOMAIN \
    ACMCertificateArn=$CERTIFICATE_ARN \
--capabilities CAPABILITY_IAM
