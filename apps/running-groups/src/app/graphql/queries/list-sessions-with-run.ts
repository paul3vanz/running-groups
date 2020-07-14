import gql from 'graphql-tag';

export default gql`
  query ListSessionsWithRun {
    listSessions {
      items {
        id
        runId
        run {
          id
          title
          description
          paceFrom
          paceTo
          distance
          topography {
            title
          }
        }
      }
    }
  }
`;
