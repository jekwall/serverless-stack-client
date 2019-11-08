//Configuariont file for our app that will reference all the recources
export default {
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-api-prod-serverlessdeploymentbucket-1fd4qg5m7z0ra"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://xhqv62ycbd.execute-api.us-east-2.amazonaws.com/prod" 
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_qwoenGbzA",
    APP_CLIENT_ID: "1rlsq3klutn4c0a7s53jr9aep8",
    IDENTITY_POOL_ID: "us-east-2:41004644-562f-4ebb-a7c2-91f816c7f876" 
  }
};