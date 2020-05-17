import { APIGatewayProxyHandler } from "aws-lambda";
import "source-map-support/register";

export const get: APIGatewayProxyHandler = async (event, context) => {
  console.log(context);
  console.log(event);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: event,
    }),
  };
};

export const post: APIGatewayProxyHandler = async (event, context) => {
  console.log(context);
  console.log(event);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Password sent.",
    }),
  };
};
