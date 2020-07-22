import gql from 'graphql-tag';

export const CREATE_SESSION_BOOKING_SUBSCRIPTION = gql`
  subscription OnCreateSessionBooking {
    onCreateSessionBooking {
      __typename
      sessionId
      userId
      user {
        __typename
        cognitoId
        firstName
        lastName
        avatarUrl
      }
      session {
        __typename
        id
        run {
          __typename
          id
          title
          description
          confirmation
          paceFrom
          paceTo
          distance
          topography {
            __typename
            id
            title
          }
          topographyId
          locationId
          leader {
            __typename
            cognitoId
            firstName
            lastName
            avatarUrl
          }
          leaderId
          organisationId
          sessions {
            __typename
            id
            runId
            date
            time
            description
          }
        }
        runId
        date
        time
        description
        bookings {
          __typename
          sessionId
          userId
          user {
            __typename
            cognitoId
            registered
            firstName
            lastName
            avatarUrl
            membershipNumber
          }
          session {
            __typename
            id
            runId
            date
            time
            description
          }
        }
      }
    }
  }
`;
