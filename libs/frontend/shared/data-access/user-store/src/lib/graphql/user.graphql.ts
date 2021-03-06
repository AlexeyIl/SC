import { gql } from 'apollo-angular';

import { IApolloRequest } from '@sc/shared/utils/interfaces';

export const userRequest: IApolloRequest = {
  keys: ['user'],
  query: gql`
    query {
      user {
        id
        username
        password
        nickname
        email
        phone
        created
        updated
      }
    }
  `,
};
