import gql from 'graphql-tag';

export const CREATE_SESSION_SUBSCRIPTION = gql`
  subscription OnCreateSessionBooking {
    onCreateSessionBooking {
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
        cost
        capacity
        location {
          __typename
          id
          name
          description
          lat
          lng
          user {
            __typename
            cognitoId
            registered
            firstName
            lastName
            avatarUrl
            membershipNumber
          }
          userId
          organisationId
        }
        locationId
        leader {
          __typename
          cognitoId
          registered
          firstName
          lastName
          avatarUrl
          membershipNumber
          bookings {
            __typename
            sessionId
            userId
          }
        }
        leaderId
        organisationId
        sessions {
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
            topographyId
            cost
            capacity
            locationId
            leaderId
            organisationId
          }
          runId
          date
          time
          description
          bookings {
            __typename
            sessionId
            userId
          }
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
          bookings {
            __typename
            sessionId
            userId
          }
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
            topographyId
            cost
            capacity
            locationId
            leaderId
            organisationId
          }
          runId
          date
          time
          description
          bookings {
            __typename
            sessionId
            userId
          }
        }
      }
    }
  }
`;
