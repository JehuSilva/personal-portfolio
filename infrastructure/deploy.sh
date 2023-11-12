
export DOMAIN=jehusilva.com
export STACK_NAME=project-personal-portfolio

echo Deploying for $DOMAIN

aws cloudformation deploy \
--template-file cloudformation-stack.yaml \
--stack-name $STACK_NAME \
--parameter-overrides DomainName=$DOMAIN SubdomainName=$SUB_DOMAIN \
--capabilities CAPABILITY_IAM
