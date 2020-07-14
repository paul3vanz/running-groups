import gql from 'graphql-tag';

export const listSessionsQuery = gql`
  query ListSessions($filter: TableSessionFilterInput, $limit: Int, $nextToken: String) {
    listSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      __typename
      items {
        __typename
        id
        runId
        date
        time
        description
        run {
          title
          description
          paceFrom
          paceTo
          distance
          topography {
            id
            title
          }
          cost
          capacity
          location {
            name
          }
          leader {
            id
          }
        }
      }
      nextToken
    }
  }
`;
