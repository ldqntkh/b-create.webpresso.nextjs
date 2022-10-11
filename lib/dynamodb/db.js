import AWS from 'aws-sdk';

AWS.config.update({
    "DB_ACCESS_KEY_ID": "AKIAVBM3HUP5NDYGWGIO",
    "DB_SECRET_ACCESS_KEY": "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",
    "region": "ap-northeast-1"
});
// AWS.config.loadFromPath('config.json');
const db = new AWS.DynamoDB.DocumentClient({ apiVersion: 'latest' });

export default db;