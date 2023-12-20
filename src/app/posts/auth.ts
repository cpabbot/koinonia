import { Amplify } from 'aws-amplify';
import { Hub } from 'aws-amplify/utils';
import { signInWithRedirect, signOut, getCurrentUser, AuthUser } from "aws-amplify/auth";

/**
 * Is OAuth authentication in progress.
 * After redirection from Cognito Hosted UI to obtain user tokens
 * several requests are executed to finish OAuth Authorization code grant path.
 */
let isAuthenticating = false;

let isAuthenticationFailure = false;

Hub.listen('auth', ({ payload }) => {
  switch (payload.event) {
    case 'signedIn':
      console.log('user have been signedIn successfully.');
      break;
    case 'signedOut':
      console.log('user have been signedOut successfully.');
      break;
    case 'tokenRefresh':
      console.log('auth tokens have been refreshed.');
      break;
    case 'tokenRefresh_failure':
      console.log('failure while refreshing auth tokens.');
      break;
    case 'signInWithRedirect':
      console.log('signInWithRedirect API has successfully been resolved.');
      break;
    case 'signInWithRedirect_failure':
      console.log('failure while trying to resolve signInWithRedirect API.');
      break;
    case 'customOAuthState':
      console.log('custom state returned from CognitoHosted UI');
      break;
  }
});

/*

import Auth, {CognitoUser} from '@aws-amplify/auth';
import Amplify, {Hub} from '@aws-amplify/core';
import {config} from './config';

/**
 * Is OAuth authentication in progress.
 * After redirection from Cognito Hosted UI to obtain user tokens
 * several requests are executed to finish OAuth Authorization code grant path.
 */
// let isAuthenticating = false;

// let isAuthenticationFailure = false;

/**
 * Promise that will be resolved after successful user signing in
 * or rejected after unsuccessul. If signing in is not initiated,
 * this will never be resolved.
 * As a side-effect, current auth status is updated along the process.
 */
// const signedInUser: Promise<CognitoUser> = new Promise((resolve, reject) => {
//     Hub.listen('auth', ({payload: {event, data}}) => {
//         switch (event) {
//         case 'codeFlow':
//             isAuthenticating = true;
//             break;
//         case 'signIn':
//             isAuthenticating = false;
//             resolve(data);
//             break;
//         case 'signIn_failure':
//             isAuthenticating = false;
//             isAuthenticationFailure = true;
//             reject();
//             break;
//         }
//     });
// });

/**
 * Configure Amplify authentication.
 * If required, this will trigger user token validation (to finish Authorization code grant path after redirect from Cognito Hosted UI)
 * or refresh (to get new access token).
 */
Amplify.configure({
    Auth: {
      Cognito: {
        userPoolClientId: '5h51v3emg4n1agf540qd6nrcqd',
        userPoolId: 'us-east-1_7wOEXZQxU',
        loginWith: {
            // OPTIONAL - Hosted UI configuration
            oauth: {
              domain: 'https://koinonia.auth.us-east-1.amazoncognito.com',
              scopes: [
                'aws.cognito.signin.user.admin'
              ],
              redirectSignIn: ['https://cabbot.csc475.kentros.gr/posts/'],
              redirectSignOut: ['http://localhost:3000/'],
              responseType: 'token' // or 'token', note that REFRESH token will only be generated when the responseType is code
            }
        }
        // loginWith: { // Optional
        //   oauth: {
        //     domain: 'abcdefghij1234567890-29051e27.auth.us-east-1.amazoncognito.com',
        //     scopes: ['openid email phone profile aws.cognito.signin.user.admin '],
        //     redirectSignIn: ['http://localhost:3000/','https://example.com/'],
        //     redirectSignOut: ['http://localhost:3000/','https://example.com/'],
        //     responseType: 'code',
        //   },
        //   username: 'true',
        //   email: 'false', // Optional
        //   phone: 'false', // Optional
        // }
      }
    }
  });
// Amplify.configure({
//     Auth: {
//         // Amazon Cognito Region
//         region: config.region,
//         // Amazon Cognito Identity Pool ID
//         identityPoolId: config.cognito.identityPoolId,
//         // Amazon Cognito User Pool ID
//         userPoolId: config.cognito.userPoolId,
//         // Amazon Cognito Web Client ID (26-char alphanumeric string)
//         userPoolWebClientId: config.cognito.userPoolWebClientId,
//         oauth: {
//             // Amazon Cognito domain name
//             domain: config.cognito.oauthDomain,
//             scope: ['email', 'openid'],
//             redirectSignIn: window.location.origin,
//             redirectSignOut: window.location.origin,
//             // 'code' for Authorization code grant, 'token' for Implicit grant
//             responseType: 'code',
//         },
//     },
// });

export const getUser = async (): Promise<any> => {
    try {
      const currentUser = await getCurrentUser();
      return(currentUser);
    } catch (error) {
      console.error(error);
      console.log("Not signed in");
    }
  };

/**
 * Waits for authentication end (if necessary)
 * and resolves with logged in user or rejects if user is not logged in.
 */
// export const getUser2 = async (): Promise<CognitoUser> => {
//     if (isAuthenticating) {
//         return signedInUser;
//     } else {
//         return Auth.currentAuthenticatedUser();
//     }
// };

export const getIsAuthenticationFailure = (): boolean => isAuthenticationFailure;