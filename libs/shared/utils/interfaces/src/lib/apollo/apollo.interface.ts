import { DocumentNode } from 'graphql';
import { Observable } from 'rxjs';
import { ApolloError, ApolloQueryResult } from '@apollo/client';

export interface IApolloRequest {
  keys?: string[];
  query: DocumentNode;
}

export type TApolloResponse<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T = any,
  R extends ApolloError = ApolloError
> = Observable<T | R>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-unused-vars
export function extractApolloResponse<T = any>(
  result: ApolloQueryResult<any>,
  entitiesKey?: string[]
) {
  const key = !entitiesKey ? Object.keys(entitiesKey) : entitiesKey;
  return key.length === 1 ? result.data[key[0]] : result.data;
}
