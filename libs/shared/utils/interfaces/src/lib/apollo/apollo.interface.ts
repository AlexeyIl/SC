import { DocumentNode } from 'graphql';
import { Observable } from 'rxjs';
import { ApolloError } from '@apollo/client';

export interface IApolloRequest {
  keys?: string[];
  query: DocumentNode;
}

export type TApolloResponse<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T = any,
  R extends ApolloError = ApolloError
> = Observable<T | R>;
