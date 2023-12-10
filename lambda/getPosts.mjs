import { DynamoDB } from "@aws-sdk/client-dynamodb";

const client = new DynamoDB({});
const tableName = "Posts";

export const handler = async (event, context) => {
  let body;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json",
  };
  
  try {
    let requestJSON = event;
    // let requestJSON = JSON.parse(event.body);
    
    // await dynamo.send(
    //   new QueryCommand({
    //     TableName: tableName,
    //     KeyConditionExpression:
    //       "postID = :str",
    //     ExpressionAttributeValues: {
    //       ":str": "0",
    //     },
    //   })
    // );
    
    body = await client.scan({ TableName: tableName });
    
  } catch (err) {
    statusCode = 400;
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }

  return {
    statusCode,
    body,
    headers,
  };
};
