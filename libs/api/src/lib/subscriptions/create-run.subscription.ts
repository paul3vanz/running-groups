import gql from 'graphql-tag';

export const CREATE_RUN_SUBSCRIPTION = gql`
  subscription OnCreateRun {
    onCreateRun {
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
          bookings {
            __typename
            sessionId
            userId
          }
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
