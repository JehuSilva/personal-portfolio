echo Deploying for $DOMAIN

aws cloudformation deploy \
--template-file cloudformation-stack.yaml \
--stack-name $STACK_NAME \
--parameter-overrides \
    DomainName=$DOMAIN \
    ACMCertificateArn=$CERTIFICATE_ARN \
--capabilities CAPABILITY_IAM
