import { CognitoUserPool } from 'amazon-cognito-identity-js'

const poolData = {
    UserPoolId: "ap-northeast-1_jKVUpPvY5",
    ClientId: "58l2sdbndphgnj8v3jvjrk9spr"
}

export default new CognitoUserPool(poolData)