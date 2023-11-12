# utils/dynamodb_utils.py

import boto3
from botocore.exceptions import ClientError

def get_dynamodb_table(table_name):
    dynamodb = boto3.resource('dynamodb')
    return dynamodb.Table(table_name)

def get_item(table, item_id):
    try:
        response = table.get_item(Key={'id': item_id})
        # Resto de la lógica...
    except ClientError as e:
        pass
