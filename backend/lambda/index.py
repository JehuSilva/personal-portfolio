import json
import boto3

def lambda_handler(event, context):
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
    }

    # Verificar el método HTTP y actuar en consecuencia
    if event['httpMethod'] == 'POST' and event['resource'] == '/contact':
        # Procesar el cuerpo del evento y enviar un correo electrónico
        return handle_post_request(event, headers)
    elif event['httpMethod'] == 'GET' and event['resource'] == '/ping':
        # Retornar mensaje para método GET en /ping
        return {
            "statusCode": 200,
            "headers": headers,
            "body": json.dumps({"message": "API is working"})
        }
    else:
        # Método HTTP no soportado
        return {
            "statusCode": 405,
            "headers": headers,
            "body": json.dumps({"error": "Method not allowed"})
        }

def handle_post_request(event, headers):
    if 'body' not in event:
        return {
            "statusCode": 400,
            "headers": headers,
            "body": json.dumps({"message": "The body of the request is missing"})
        }

    body = json.loads(event['body'])

    required_fields = ['email', 'firstName', 'message']
    for field in required_fields:
        if field not in body:
            return {
                "statusCode": 400,
                "headers": headers,
                "body": json.dumps({"message": f"The field '{field}' is missing"})
            }
    email_body = f"""
        <!DOCTYPE html>
        <html>
        <head>
        <style>
            body {{
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                color: #333;
                line-height: 1.6;
            }}
            .container {{
                width: 80%;
                margin: auto;
                background: #fff;
                padding: 20px;
            }}
            h1 {{
                color: #333;
                text-align: center;
            }}
            .info p {{
                font-size: 16px;
                line-height: 1.5;
            }}
            .info strong {{
                color: #444;
            }}
        </style>
        </head>
        <body>
            <div class="container">
                <h1>Mensaje de contacto recibido en jehusilva.dev</h1>
                <div class="info">
                    <p><strong>Nombre:</strong> {body.get('firstName')} {body.get('lastName')}</p>
                    <p><strong>Email:</strong> {body.get('email')}</p>
                    <p><strong>Teléfono:</strong> {body.get('phone')}</p>
                    <p><strong>Mensaje:</strong> {body.get('message')}</p>
                </div>
            </div>
        </body>
        </html>
    """
    ses_client = boto3.client('ses')
    response = ses_client.send_email(
        Source='jehusilva.dev@gmail.com',
        Destination={
            'ToAddresses': ['jehusilva.dev@gmail.com'],
        },
        Message={
            'Subject': {'Data': 'Nueva solicitud de contacto'},
            'Body': {'Html': {'Data': email_body}}
        }
    )

    return {
        "statusCode": 200,
        "headers": headers,
        "body": json.dumps({"message": "Email sent successfully"})
    }
