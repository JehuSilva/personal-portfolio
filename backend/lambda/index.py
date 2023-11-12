import json
import boto3
from botocore.exceptions import ClientError

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('MyDynamoDBTable')  # Reemplaza con el nombre de tu tabla

def lambda_handler(event, context):
    try:
        http_method = event['httpMethod']

        if http_method == 'GET':
            return get_item(event)
        elif http_method == 'POST':
            return put_item(event)
        elif http_method == 'PUT':
            return update_item(event)
        elif http_method == 'DELETE':
            return delete_item(event)
        else:
            return {
                'statusCode': 405,
                'body': json.dumps('Method Not Allowed')
            }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps(str(e))
        }

def get_item(event):
    item_id = event['queryStringParameters']['id']
    try:
        response = table.get_item(Key={'id': item_id})
    except ClientError as e:
        return {
            'statusCode': 500,
            'body': json.dumps(e.response['Error']['Message'])
        }
    else:
        item = response.get('Item', {})
        if not item:
            return {'statusCode': 404, 'body': json.dumps('Item not found')}
        return {
            'statusCode': 200,
            'body': json.dumps(item)
        }

def put_item(event):
    item = json.loads(event['body'])
    try:
        table.put_item(Item=item)
        return {'statusCode': 201, 'body': json.dumps(item)}
    except ClientError as e:
        return {
            'statusCode': 500,
            'body': json.dumps(e.response['Error']['Message'])
        }

def update_item(event):
    item = json.loads(event['body'])
    item_id = item['id']
    # Aquí se puede agregar lógica para actualizar el artículo específico
    # Ejemplo: UpdateItem en DynamoDB
    # ...

def delete_item(event):
    item_id = event['queryStringParameters']['id']
    try:
        table.delete_item(Key={'id': item_id})
        return {'statusCode': 204}
    except ClientError as e:
        return {
            'statusCode': 500,
            'body': json.dumps(e.response['Error']['Message'])
        }

