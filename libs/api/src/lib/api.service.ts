/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import { Observable } from "zen-observable-ts";

export type CreateOrganisationInput = {
  name: string;
  description: string;
};

export type UpdateOrganisationInput = {
  id: string;
  name: string;
  description?: string | null;
};

export type DeleteOrganisationInput = {
  id: string;
};

export type CreateLocationInput = {
  name: string;
  description?: string | null;
  lat?: number | null;
  lng?: number | null;
  organisationId: string;
};

export type UpdateLocationInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  lat?: number | null;
  lng?: number | null;
  userId?: string | null;
};

export type DeleteLocationInput = {
  id: string;
};

export type CreateTopographyInput = {
  title: string;
};

export type UpdateTopographyInput = {
  id: string;
  title: string;
};

export type DeleteTopographyInput = {
  id: string;
};

export type CreateRunInput = {
  title: string;
  description?: string | null;
  confirmation?: string | null;
  paceFrom?: string | null;
  paceTo?: string | null;
  distance?: number | null;
  topographyId?: string | null;
  cost?: number | null;
  capacity?: number | null;
  locationId: string;
  leaderId: string;
  organisationId: string;
};

export type UpdateRunInput = {
  id: string;
  title: string;
  description?: string | null;
  confirmation?: string | null;
  paceFrom?: string | null;
  paceTo?: string | null;
  distance?: number | null;
  cost?: number | null;
  capacity?: number | null;
  locationId?: string | null;
  userId?: string | null;
  leaderId?: string | null;
  topographyId?: string | null;
};

export type DeleteRunInput = {
  id: string;
};

export type CreateSessionInput = {
  runId: string;
  date: string;
  time: string;
  description?: string | null;
};

export type UpdateSessionInput = {
  id: string;
  runId?: string | null;
  date: string;
  time?: string | null;
  description?: string | null;
};

export type DeleteSessionInput = {
  id: string;
};

export type TableOrganisationFilterInput = {
  id?: TableIDFilterInput | null;
  name?: TableStringFilterInput | null;
  description?: TableStringFilterInput | null;
};

export type TableIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type TableStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type TableLocationFilterInput = {
  id?: TableIDFilterInput | null;
  name?: TableStringFilterInput | null;
  description?: TableStringFilterInput | null;
  lat?: TableFloatFilterInput | null;
  lng?: TableFloatFilterInput | null;
  userId?: TableIDFilterInput | null;
  organisationId?: TableIDFilterInput | null;
};

export type TableFloatFilterInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  contains?: number | null;
  notContains?: number | null;
  between?: Array<number | null> | null;
};

export type TableTopographyFilterInput = {
  id?: TableIDFilterInput | null;
  title?: TableStringFilterInput | null;
};

export type TableRunFilterInput = {
  id?: TableIDFilterInput | null;
  title?: TableStringFilterInput | null;
  description?: TableStringFilterInput | null;
  confirmation?: TableStringFilterInput | null;
  paceFrom?: TableStringFilterInput | null;
  paceTo?: TableStringFilterInput | null;
  distance?: TableFloatFilterInput | null;
  cost?: TableFloatFilterInput | null;
  capacity?: TableIntFilterInput | null;
  locationId?: TableIDFilterInput | null;
  userId?: TableIDFilterInput | null;
  leaderId?: TableIDFilterInput | null;
  organisationId?: TableIDFilterInput | null;
  topographyId?: TableIDFilterInput | null;
};

export type TableIntFilterInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  contains?: number | null;
  notContains?: number | null;
  between?: Array<number | null> | null;
};

export type TableSessionFilterInput = {
  id?: TableIDFilterInput | null;
  runId?: TableIDFilterInput | null;
  date?: TableStringFilterInput | null;
  time?: TableStringFilterInput | null;
  description?: TableStringFilterInput | null;
};

export type CreateConversationMutation = {
  __typename: "Conversation";
  createdAt: string | null;
  id: string;
  messages: {
    __typename: "MessageConnection";
    messages: Array<{
      __typename: "Message";
      author: {
        __typename: "User";
        cognitoId: string;
        id: string;
        username: string;
        registered: boolean | null;
        firstName: string;
        lastName: string;
        avatarUrl: string | null;
        membershipNumber: string | null;
      } | null;
      content: string;
      conversationId: string;
      createdAt: string | null;
      id: string;
      isSent: boolean | null;
      recipient: {
        __typename: "User";
        cognitoId: string;
        id: string;
        username: string;
        registered: boolean | null;
        firstName: string;
        lastName: string;
        avatarUrl: string | null;
        membershipNumber: string | null;
      } | null;
      sender: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  name: string;
};

export type CreateMessageMutation = {
  __typename: "Message";
  author: {
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
      userConversations: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      messages: Array<{
        __typename: "Message";
        content: string;
        conversationId: string;
        createdAt: string | null;
        id: string;
        isSent: boolean | null;
        sender: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
    firstName: string;
    lastName: string;
    avatarUrl: string | null;
    membershipNumber: string | null;
  } | null;
  content: string;
  conversationId: string;
  createdAt: string | null;
  id: string;
  isSent: boolean | null;
  recipient: {
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
      userConversations: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      messages: Array<{
        __typename: "Message";
        content: string;
        conversationId: string;
        createdAt: string | null;
        id: string;
        isSent: boolean | null;
        sender: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
    firstName: string;
    lastName: string;
    avatarUrl: string | null;
    membershipNumber: string | null;
  } | null;
  sender: string | null;
};

export type CreateUserMutation = {
  __typename: "User";
  cognitoId: string;
  conversations: {
    __typename: "UserConverstationsConnection";
    nextToken: string | null;
    userConversations: Array<{
      __typename: "UserConversations";
      associated: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
      conversation: {
        __typename: "Conversation";
        createdAt: string | null;
        id: string;
        name: string;
      } | null;
      conversationId: string;
      user: {
        __typename: "User";
        cognitoId: string;
        id: string;
        username: string;
        registered: boolean | null;
        firstName: string;
        lastName: string;
        avatarUrl: string | null;
        membershipNumber: string | null;
      } | null;
      userId: string;
    } | null> | null;
  } | null;
  id: string;
  messages: {
    __typename: "MessageConnection";
    messages: Array<{
      __typename: "Message";
      author: {
        __typename: "User";
        cognitoId: string;
        id: string;
        username: string;
        registered: boolean | null;
        firstName: string;
        lastName: string;
        avatarUrl: string | null;
        membershipNumber: string | null;
      } | null;
      content: string;
      conversationId: string;
      createdAt: string | null;
      id: string;
      isSent: boolean | null;
      recipient: {
        __typename: "User";
        cognitoId: string;
        id: string;
        username: string;
        registered: boolean | null;
        firstName: string;
        lastName: string;
        avatarUrl: string | null;
        membershipNumber: string | null;
      } | null;
      sender: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  username: string;
  registered: boolean | null;
  firstName: string;
  lastName: string;
  avatarUrl: string | null;
  membershipNumber: string | null;
};

export type CreateUserConversationsMutation = {
  __typename: "UserConversations";
  associated: Array<{
    __typename: "UserConversations";
    associated: Array<{
      __typename: "UserConversations";
      associated: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
      conversation: {
        __typename: "Conversation";
        createdAt: string | null;
        id: string;
        name: string;
      } | null;
      conversationId: string;
      user: {
        __typename: "User";
        cognitoId: string;
        id: string;
        username: string;
        registered: boolean | null;
        firstName: string;
        lastName: string;
        avatarUrl: string | null;
        membershipNumber: string | null;
      } | null;
      userId: string;
    } | null> | null;
    conversation: {
      __typename: "Conversation";
      createdAt: string | null;
      id: string;
      messages: {
        __typename: "MessageConnection";
        nextToken: string | null;
      } | null;
      name: string;
    } | null;
    conversationId: string;
    user: {
      __typename: "User";
      cognitoId: string;
      conversations: {
        __typename: "UserConverstationsConnection";
        nextToken: string | null;
      } | null;
      id: string;
      messages: {
        __typename: "MessageConnection";
        nextToken: string | null;
      } | null;
      username: string;
      registered: boolean | null;
      firstName: string;
      lastName: string;
      avatarUrl: string | null;
      membershipNumber: string | null;
    } | null;
    userId: string;
  } | null> | null;
  conversation: {
    __typename: "Conversation";
    createdAt: string | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      messages: Array<{
        __typename: "Message";
        content: string;
        conversationId: string;
        createdAt: string | null;
        id: string;
        isSent: boolean | null;
        sender: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    name: string;
  } | null;
  conversationId: string;
  user: {
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
      userConversations: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      messages: Array<{
        __typename: "Message";
        content: string;
        conversationId: string;
        createdAt: string | null;
        id: string;
        isSent: boolean | null;
        sender: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
    firstName: string;
    lastName: string;
    avatarUrl: string | null;
    membershipNumber: string | null;
  } | null;
  userId: string;
};

export type CreateOrganisationMutation = {
  __typename: "Organisation";
  id: string;
  name: string;
  description: string;
  users: Array<{
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
      userConversations: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      messages: Array<{
        __typename: "Message";
        content: string;
        conversationId: string;
        createdAt: string | null;
        id: string;
        isSent: boolean | null;
        sender: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
    firstName: string;
    lastName: string;
    avatarUrl: string | null;
    membershipNumber: string | null;
  } | null> | null;
};

export type UpdateOrganisationMutation = {
  __typename: "Organisation";
  id: string;
  name: string;
  description: string;
  users: Array<{
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
      userConversations: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      messages: Array<{
        __typename: "Message";
        content: string;
        conversationId: string;
        createdAt: string | null;
        id: string;
        isSent: boolean | null;
        sender: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
    firstName: string;
    lastName: string;
    avatarUrl: string | null;
    membershipNumber: string | null;
  } | null> | null;
};

export type DeleteOrganisationMutation = {
  __typename: "Organisation";
  id: string;
  name: string;
  description: string;
  users: Array<{
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
      userConversations: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      messages: Array<{
        __typename: "Message";
        content: string;
        conversationId: string;
        createdAt: string | null;
        id: string;
        isSent: boolean | null;
        sender: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
    firstName: string;
    lastName: string;
    avatarUrl: string | null;
    membershipNumber: string | null;
  } | null> | null;
};

export type CreateLocationMutation = {
  __typename: "Location";
  id: string;
  name: string;
  description: string;
  lat: number | null;
  lng: number | null;
  user: {
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
      userConversations: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      messages: Array<{
        __typename: "Message";
        content: string;
        conversationId: string;
        createdAt: string | null;
        id: string;
        isSent: boolean | null;
        sender: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
    firstName: string;
    lastName: string;
    avatarUrl: string | null;
    membershipNumber: string | null;
  } | null;
  userId: string;
  organisationId: string;
};

export type UpdateLocationMutation = {
  __typename: "Location";
  id: string;
  name: string;
  description: string;
  lat: number | null;
  lng: number | null;
  user: {
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
      userConversations: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      messages: Array<{
        __typename: "Message";
        content: string;
        conversationId: string;
        createdAt: string | null;
        id: string;
        isSent: boolean | null;
        sender: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
    firstName: string;
    lastName: string;
    avatarUrl: string | null;
    membershipNumber: string | null;
  } | null;
  userId: string;
  organisationId: string;
};

export type DeleteLocationMutation = {
  __typename: "Location";
  id: string;
  name: string;
  description: string;
  lat: number | null;
  lng: number | null;
  user: {
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
      userConversations: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      messages: Array<{
        __typename: "Message";
        content: string;
        conversationId: string;
        createdAt: string | null;
        id: string;
        isSent: boolean | null;
        sender: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
    firstName: string;
    lastName: string;
    avatarUrl: string | null;
    membershipNumber: string | null;
  } | null;
  userId: string;
  organisationId: string;
};

export type CreateTopographyMutation = {
  __typename: "Topography";
  id: string;
  title: string;
};

export type UpdateTopographyMutation = {
  __typename: "Topography";
  id: string;
  title: string;
};

export type DeleteTopographyMutation = {
  __typename: "Topography";
  id: string;
  title: string;
};

export type CreateRunMutation = {
  __typename: "Run";
  id: string;
  title: string;
  description: string | null;
  confirmation: string | null;
  paceFrom: string | null;
  paceTo: string | null;
  distance: number | null;
  topography: {
    __typename: "Topography";
    id: string;
    title: string;
  } | null;
  topographyId: string | null;
  cost: number | null;
  capacity: number | null;
  location: {
    __typename: "Location";
    id: string;
    name: string;
    description: string;
    lat: number | null;
    lng: number | null;
    user: {
      __typename: "User";
      cognitoId: string;
      conversations: {
        __typename: "UserConverstationsConnection";
        nextToken: string | null;
      } | null;
      id: string;
      messages: {
        __typename: "MessageConnection";
        nextToken: string | null;
      } | null;
      username: string;
      registered: boolean | null;
      firstName: string;
      lastName: string;
      avatarUrl: string | null;
      membershipNumber: string | null;
    } | null;
    userId: string;
    organisationId: string;
  } | null;
  locationId: string;
  leader: {
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
      userConversations: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      messages: Array<{
        __typename: "Message";
        content: string;
        conversationId: string;
        createdAt: string | null;
        id: string;
        isSent: boolean | null;
        sender: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
    firstName: string;
    lastName: string;
    avatarUrl: string | null;
    membershipNumber: string | null;
  } | null;
  leaderId: string;
  organisationId: string;
  sessions: Array<{
    __typename: "Session";
    id: string;
    run: {
      __typename: "Run";
      id: string;
      title: string;
      description: string | null;
      confirmation: string | null;
      paceFrom: string | null;
      paceTo: string | null;
      distance: number | null;
      topography: {
        __typename: "Topography";
        id: string;
        title: string;
      } | null;
      topographyId: string | null;
      cost: number | null;
      capacity: number | null;
      location: {
        __typename: "Location";
        id: string;
        name: string;
        description: string;
        lat: number | null;
        lng: number | null;
        userId: string;
        organisationId: string;
      } | null;
      locationId: string;
      leader: {
        __typename: "User";
        cognitoId: string;
        id: string;
        username: string;
        registered: boolean | null;
        firstName: string;
        lastName: string;
        avatarUrl: string | null;
        membershipNumber: string | null;
      } | null;
      leaderId: string;
      organisationId: string;
      sessions: Array<{
        __typename: "Session";
        id: string;
        runId: string;
        date: string;
        time: string;
        description: string | null;
      } | null> | null;
    } | null;
    runId: string;
    date: string;
    time: string;
    description: string | null;
  } | null> | null;
};

export type UpdateRunMutation = {
  __typename: "Run";
  id: string;
  title: string;
  description: string | null;
  confirmation: string | null;
  paceFrom: string | null;
  paceTo: string | null;
  distance: number | null;
  topography: {
    __typename: "Topography";
    id: string;
    title: string;
  } | null;
  topographyId: string | null;
  cost: number | null;
  capacity: number | null;
  location: {
    __typename: "Location";
    id: string;
    name: string;
    description: string;
    lat: number | null;
    lng: number | null;
    user: {
      __typename: "User";
      cognitoId: string;
      conversations: {
        __typename: "UserConverstationsConnection";
        nextToken: string | null;
      } | null;
      id: string;
      messages: {
        __typename: "MessageConnection";
        nextToken: string | null;
      } | null;
      username: string;
      registered: boolean | null;
      firstName: string;
      lastName: string;
      avatarUrl: string | null;
      membershipNumber: string | null;
    } | null;
    userId: string;
    organisationId: string;
  } | null;
  locationId: string;
  leader: {
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
      userConversations: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      messages: Array<{
        __typename: "Message";
        content: string;
        conversationId: string;
        createdAt: string | null;
        id: string;
        isSent: boolean | null;
        sender: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
    firstName: string;
    lastName: string;
    avatarUrl: string | null;
    membershipNumber: string | null;
  } | null;
  leaderId: string;
  organisationId: string;
  sessions: Array<{
    __typename: "Session";
    id: string;
    run: {
      __typename: "Run";
      id: string;
      title: string;
      description: string | null;
      confirmation: string | null;
      paceFrom: string | null;
      paceTo: string | null;
      distance: number | null;
      topography: {
        __typename: "Topography";
        id: string;
        title: string;
      } | null;
      topographyId: string | null;
      cost: number | null;
      capacity: number | null;
      location: {
        __typename: "Location";
        id: string;
        name: string;
        description: string;
        lat: number | null;
        lng: number | null;
        userId: string;
        organisationId: string;
      } | null;
      locationId: string;
      leader: {
        __typename: "User";
        cognitoId: string;
        id: string;
        username: string;
        registered: boolean | null;
        firstName: string;
        lastName: string;
        avatarUrl: string | null;
        membershipNumber: string | null;
      } | null;
      leaderId: string;
      organisationId: string;
      sessions: Array<{
        __typename: "Session";
        id: string;
        runId: string;
        date: string;
        time: string;
        description: string | null;
      } | null> | null;
    } | null;
    runId: string;
    date: string;
    time: string;
    description: string | null;
  } | null> | null;
};

export type DeleteRunMutation = {
  __typename: "Run";
  id: string;
  title: string;
  description: string | null;
  confirmation: string | null;
  paceFrom: string | null;
  paceTo: string | null;
  distance: number | null;
  topography: {
    __typename: "Topography";
    id: string;
    title: string;
  } | null;
  topographyId: string | null;
  cost: number | null;
  capacity: number | null;
  location: {
    __typename: "Location";
    id: string;
    name: string;
    description: string;
    lat: number | null;
    lng: number | null;
    user: {
      __typename: "User";
      cognitoId: string;
      conversations: {
        __typename: "UserConverstationsConnection";
        nextToken: string | null;
      } | null;
      id: string;
      messages: {
        __typename: "MessageConnection";
        nextToken: string | null;
      } | null;
      username: string;
      registered: boolean | null;
      firstName: string;
      lastName: string;
      avatarUrl: string | null;
      membershipNumber: string | null;
    } | null;
    userId: string;
    organisationId: string;
  } | null;
  locationId: string;
  leader: {
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
      userConversations: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      messages: Array<{
        __typename: "Message";
        content: string;
        conversationId: string;
        createdAt: string | null;
        id: string;
        isSent: boolean | null;
        sender: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
    firstName: string;
    lastName: string;
    avatarUrl: string | null;
    membershipNumber: string | null;
  } | null;
  leaderId: string;
  organisationId: string;
  sessions: Array<{
    __typename: "Session";
    id: string;
    run: {
      __typename: "Run";
      id: string;
      title: string;
      description: string | null;
      confirmation: string | null;
      paceFrom: string | null;
      paceTo: string | null;
      distance: number | null;
      topography: {
        __typename: "Topography";
        id: string;
        title: string;
      } | null;
      topographyId: string | null;
      cost: number | null;
      capacity: number | null;
      location: {
        __typename: "Location";
        id: string;
        name: string;
        description: string;
        lat: number | null;
        lng: number | null;
        userId: string;
        organisationId: string;
      } | null;
      locationId: string;
      leader: {
        __typename: "User";
        cognitoId: string;
        id: string;
        username: string;
        registered: boolean | null;
        firstName: string;
        lastName: string;
        avatarUrl: string | null;
        membershipNumber: string | null;
      } | null;
      leaderId: string;
      organisationId: string;
      sessions: Array<{
        __typename: "Session";
        id: string;
        runId: string;
        date: string;
        time: string;
        description: string | null;
      } | null> | null;
    } | null;
    runId: string;
    date: string;
    time: string;
    description: string | null;
  } | null> | null;
};

export type CreateSessionMutation = {
  __typename: "Session";
  id: string;
  run: {
    __typename: "Run";
    id: string;
    title: string;
    description: string | null;
    confirmation: string | null;
    paceFrom: string | null;
    paceTo: string | null;
    distance: number | null;
    topography: {
      __typename: "Topography";
      id: string;
      title: string;
    } | null;
    topographyId: string | null;
    cost: number | null;
    capacity: number | null;
    location: {
      __typename: "Location";
      id: string;
      name: string;
      description: string;
      lat: number | null;
      lng: number | null;
      user: {
        __typename: "User";
        cognitoId: string;
        id: string;
        username: string;
        registered: boolean | null;
        firstName: string;
        lastName: string;
        avatarUrl: string | null;
        membershipNumber: string | null;
      } | null;
      userId: string;
      organisationId: string;
    } | null;
    locationId: string;
    leader: {
      __typename: "User";
      cognitoId: string;
      conversations: {
        __typename: "UserConverstationsConnection";
        nextToken: string | null;
      } | null;
      id: string;
      messages: {
        __typename: "MessageConnection";
        nextToken: string | null;
      } | null;
      username: string;
      registered: boolean | null;
      firstName: string;
      lastName: string;
      avatarUrl: string | null;
      membershipNumber: string | null;
    } | null;
    leaderId: string;
    organisationId: string;
    sessions: Array<{
      __typename: "Session";
      id: string;
      run: {
        __typename: "Run";
        id: string;
        title: string;
        description: string | null;
        confirmation: string | null;
        paceFrom: string | null;
        paceTo: string | null;
        distance: number | null;
        topographyId: string | null;
        cost: number | null;
        capacity: number | null;
        locationId: string;
        leaderId: string;
        organisationId: string;
      } | null;
      runId: string;
      date: string;
      time: string;
      description: string | null;
    } | null> | null;
  } | null;
  runId: string;
  date: string;
  time: string;
  description: string | null;
};

export type UpdateSessionMutation = {
  __typename: "Session";
  id: string;
  run: {
    __typename: "Run";
    id: string;
    title: string;
    description: string | null;
    confirmation: string | null;
    paceFrom: string | null;
    paceTo: string | null;
    distance: number | null;
    topography: {
      __typename: "Topography";
      id: string;
      title: string;
    } | null;
    topographyId: string | null;
    cost: number | null;
    capacity: number | null;
    location: {
      __typename: "Location";
      id: string;
      name: string;
      description: string;
      lat: number | null;
      lng: number | null;
      user: {
        __typename: "User";
        cognitoId: string;
        id: string;
        username: string;
        registered: boolean | null;
        firstName: string;
        lastName: string;
        avatarUrl: string | null;
        membershipNumber: string | null;
      } | null;
      userId: string;
      organisationId: string;
    } | null;
    locationId: string;
    leader: {
      __typename: "User";
      cognitoId: string;
      conversations: {
        __typename: "UserConverstationsConnection";
        nextToken: string | null;
      } | null;
      id: string;
      messages: {
        __typename: "MessageConnection";
        nextToken: string | null;
      } | null;
      username: string;
      registered: boolean | null;
      firstName: string;
      lastName: string;
      avatarUrl: string | null;
      membershipNumber: string | null;
    } | null;
    leaderId: string;
    organisationId: string;
    sessions: Array<{
      __typename: "Session";
      id: string;
      run: {
        __typename: "Run";
        id: string;
        title: string;
        description: string | null;
        confirmation: string | null;
        paceFrom: string | null;
        paceTo: string | null;
        distance: number | null;
        topographyId: string | null;
        cost: number | null;
        capacity: number | null;
        locationId: string;
        leaderId: string;
        organisationId: string;
      } | null;
      runId: string;
      date: string;
      time: string;
      description: string | null;
    } | null> | null;
  } | null;
  runId: string;
  date: string;
  time: string;
  description: string | null;
};

export type DeleteSessionMutation = {
  __typename: "Session";
  id: string;
  run: {
    __typename: "Run";
    id: string;
    title: string;
    description: string | null;
    confirmation: string | null;
    paceFrom: string | null;
    paceTo: string | null;
    distance: number | null;
    topography: {
      __typename: "Topography";
      id: string;
      title: string;
    } | null;
    topographyId: string | null;
    cost: number | null;
    capacity: number | null;
    location: {
      __typename: "Location";
      id: string;
      name: string;
      description: string;
      lat: number | null;
      lng: number | null;
      user: {
        __typename: "User";
        cognitoId: string;
        id: string;
        username: string;
        registered: boolean | null;
        firstName: string;
        lastName: string;
        avatarUrl: string | null;
        membershipNumber: string | null;
      } | null;
      userId: string;
      organisationId: string;
    } | null;
    locationId: string;
    leader: {
      __typename: "User";
      cognitoId: string;
      conversations: {
        __typename: "UserConverstationsConnection";
        nextToken: string | null;
      } | null;
      id: string;
      messages: {
        __typename: "MessageConnection";
        nextToken: string | null;
      } | null;
      username: string;
      registered: boolean | null;
      firstName: string;
      lastName: string;
      avatarUrl: string | null;
      membershipNumber: string | null;
    } | null;
    leaderId: string;
    organisationId: string;
    sessions: Array<{
      __typename: "Session";
      id: string;
      run: {
        __typename: "Run";
        id: string;
        title: string;
        description: string | null;
        confirmation: string | null;
        paceFrom: string | null;
        paceTo: string | null;
        distance: number | null;
        topographyId: string | null;
        cost: number | null;
        capacity: number | null;
        locationId: string;
        leaderId: string;
        organisationId: string;
      } | null;
      runId: string;
      date: string;
      time: string;
      description: string | null;
    } | null> | null;
  } | null;
  runId: string;
  date: string;
  time: string;
  description: string | null;
};

export type AllMessageQuery = {
  __typename: "Message";
  author: {
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
      userConversations: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      messages: Array<{
        __typename: "Message";
        content: string;
        conversationId: string;
        createdAt: string | null;
        id: string;
        isSent: boolean | null;
        sender: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
    firstName: string;
    lastName: string;
    avatarUrl: string | null;
    membershipNumber: string | null;
  } | null;
  content: string;
  conversationId: string;
  createdAt: string | null;
  id: string;
  isSent: boolean | null;
  recipient: {
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
      userConversations: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      messages: Array<{
        __typename: "Message";
        content: string;
        conversationId: string;
        createdAt: string | null;
        id: string;
        isSent: boolean | null;
        sender: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
    firstName: string;
    lastName: string;
    avatarUrl: string | null;
    membershipNumber: string | null;
  } | null;
  sender: string | null;
};

export type AllMessageConnectionQuery = {
  __typename: "MessageConnection";
  messages: Array<{
    __typename: "Message";
    author: {
      __typename: "User";
      cognitoId: string;
      conversations: {
        __typename: "UserConverstationsConnection";
        nextToken: string | null;
      } | null;
      id: string;
      messages: {
        __typename: "MessageConnection";
        nextToken: string | null;
      } | null;
      username: string;
      registered: boolean | null;
      firstName: string;
      lastName: string;
      avatarUrl: string | null;
      membershipNumber: string | null;
    } | null;
    content: string;
    conversationId: string;
    createdAt: string | null;
    id: string;
    isSent: boolean | null;
    recipient: {
      __typename: "User";
      cognitoId: string;
      conversations: {
        __typename: "UserConverstationsConnection";
        nextToken: string | null;
      } | null;
      id: string;
      messages: {
        __typename: "MessageConnection";
        nextToken: string | null;
      } | null;
      username: string;
      registered: boolean | null;
      firstName: string;
      lastName: string;
      avatarUrl: string | null;
      membershipNumber: string | null;
    } | null;
    sender: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type AllMessageFromQuery = {
  __typename: "Message";
  author: {
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
      userConversations: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      messages: Array<{
        __typename: "Message";
        content: string;
        conversationId: string;
        createdAt: string | null;
        id: string;
        isSent: boolean | null;
        sender: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
    firstName: string;
    lastName: string;
    avatarUrl: string | null;
    membershipNumber: string | null;
  } | null;
  content: string;
  conversationId: string;
  createdAt: string | null;
  id: string;
  isSent: boolean | null;
  recipient: {
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
      userConversations: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      messages: Array<{
        __typename: "Message";
        content: string;
        conversationId: string;
        createdAt: string | null;
        id: string;
        isSent: boolean | null;
        sender: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
    firstName: string;
    lastName: string;
    avatarUrl: string | null;
    membershipNumber: string | null;
  } | null;
  sender: string | null;
};

export type AllUserQuery = {
  __typename: "User";
  cognitoId: string;
  conversations: {
    __typename: "UserConverstationsConnection";
    nextToken: string | null;
    userConversations: Array<{
      __typename: "UserConversations";
      associated: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
      conversation: {
        __typename: "Conversation";
        createdAt: string | null;
        id: string;
        name: string;
      } | null;
      conversationId: string;
      user: {
        __typename: "User";
        cognitoId: string;
        id: string;
        username: string;
        registered: boolean | null;
        firstName: string;
        lastName: string;
        avatarUrl: string | null;
        membershipNumber: string | null;
      } | null;
      userId: string;
    } | null> | null;
  } | null;
  id: string;
  messages: {
    __typename: "MessageConnection";
    messages: Array<{
      __typename: "Message";
      author: {
        __typename: "User";
        cognitoId: string;
        id: string;
        username: string;
        registered: boolean | null;
        firstName: string;
        lastName: string;
        avatarUrl: string | null;
        membershipNumber: string | null;
      } | null;
      content: string;
      conversationId: string;
      createdAt: string | null;
      id: string;
      isSent: boolean | null;
      recipient: {
        __typename: "User";
        cognitoId: string;
        id: string;
        username: string;
        registered: boolean | null;
        firstName: string;
        lastName: string;
        avatarUrl: string | null;
        membershipNumber: string | null;
      } | null;
      sender: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  username: string;
  registered: boolean | null;
  firstName: string;
  lastName: string;
  avatarUrl: string | null;
  membershipNumber: string | null;
};

export type MeQuery = {
  __typename: "User";
  cognitoId: string;
  conversations: {
    __typename: "UserConverstationsConnection";
    nextToken: string | null;
    userConversations: Array<{
      __typename: "UserConversations";
      associated: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
      conversation: {
        __typename: "Conversation";
        createdAt: string | null;
        id: string;
        name: string;
      } | null;
      conversationId: string;
      user: {
        __typename: "User";
        cognitoId: string;
        id: string;
        username: string;
        registered: boolean | null;
        firstName: string;
        lastName: string;
        avatarUrl: string | null;
        membershipNumber: string | null;
      } | null;
      userId: string;
    } | null> | null;
  } | null;
  id: string;
  messages: {
    __typename: "MessageConnection";
    messages: Array<{
      __typename: "Message";
      author: {
        __typename: "User";
        cognitoId: string;
        id: string;
        username: string;
        registered: boolean | null;
        firstName: string;
        lastName: string;
        avatarUrl: string | null;
        membershipNumber: string | null;
      } | null;
      content: string;
      conversationId: string;
      createdAt: string | null;
      id: string;
      isSent: boolean | null;
      recipient: {
        __typename: "User";
        cognitoId: string;
        id: string;
        username: string;
        registered: boolean | null;
        firstName: string;
        lastName: string;
        avatarUrl: string | null;
        membershipNumber: string | null;
      } | null;
      sender: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  username: string;
  registered: boolean | null;
  firstName: string;
  lastName: string;
  avatarUrl: string | null;
  membershipNumber: string | null;
};

export type GetOrganisationQuery = {
  __typename: "Organisation";
  id: string;
  name: string;
  description: string;
  users: Array<{
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
      userConversations: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      messages: Array<{
        __typename: "Message";
        content: string;
        conversationId: string;
        createdAt: string | null;
        id: string;
        isSent: boolean | null;
        sender: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
    firstName: string;
    lastName: string;
    avatarUrl: string | null;
    membershipNumber: string | null;
  } | null> | null;
};

export type ListOrganisationsQuery = {
  __typename: "OrganisationConnection";
  items: Array<{
    __typename: "Organisation";
    id: string;
    name: string;
    description: string;
    users: Array<{
      __typename: "User";
      cognitoId: string;
      conversations: {
        __typename: "UserConverstationsConnection";
        nextToken: string | null;
      } | null;
      id: string;
      messages: {
        __typename: "MessageConnection";
        nextToken: string | null;
      } | null;
      username: string;
      registered: boolean | null;
      firstName: string;
      lastName: string;
      avatarUrl: string | null;
      membershipNumber: string | null;
    } | null> | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetLocationQuery = {
  __typename: "Location";
  id: string;
  name: string;
  description: string;
  lat: number | null;
  lng: number | null;
  user: {
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
      userConversations: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      messages: Array<{
        __typename: "Message";
        content: string;
        conversationId: string;
        createdAt: string | null;
        id: string;
        isSent: boolean | null;
        sender: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
    firstName: string;
    lastName: string;
    avatarUrl: string | null;
    membershipNumber: string | null;
  } | null;
  userId: string;
  organisationId: string;
};

export type ListLocationsQuery = {
  __typename: "LocationConnection";
  items: Array<{
    __typename: "Location";
    id: string;
    name: string;
    description: string;
    lat: number | null;
    lng: number | null;
    user: {
      __typename: "User";
      cognitoId: string;
      conversations: {
        __typename: "UserConverstationsConnection";
        nextToken: string | null;
      } | null;
      id: string;
      messages: {
        __typename: "MessageConnection";
        nextToken: string | null;
      } | null;
      username: string;
      registered: boolean | null;
      firstName: string;
      lastName: string;
      avatarUrl: string | null;
      membershipNumber: string | null;
    } | null;
    userId: string;
    organisationId: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetTopographyQuery = {
  __typename: "Topography";
  id: string;
  title: string;
};

export type ListTopographiesQuery = {
  __typename: "TopographyConnection";
  items: Array<{
    __typename: "Topography";
    id: string;
    title: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetRunQuery = {
  __typename: "Run";
  id: string;
  title: string;
  description: string | null;
  confirmation: string | null;
  paceFrom: string | null;
  paceTo: string | null;
  distance: number | null;
  topography: {
    __typename: "Topography";
    id: string;
    title: string;
  } | null;
  topographyId: string | null;
  cost: number | null;
  capacity: number | null;
  location: {
    __typename: "Location";
    id: string;
    name: string;
    description: string;
    lat: number | null;
    lng: number | null;
    user: {
      __typename: "User";
      cognitoId: string;
      conversations: {
        __typename: "UserConverstationsConnection";
        nextToken: string | null;
      } | null;
      id: string;
      messages: {
        __typename: "MessageConnection";
        nextToken: string | null;
      } | null;
      username: string;
      registered: boolean | null;
      firstName: string;
      lastName: string;
      avatarUrl: string | null;
      membershipNumber: string | null;
    } | null;
    userId: string;
    organisationId: string;
  } | null;
  locationId: string;
  leader: {
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
      userConversations: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      messages: Array<{
        __typename: "Message";
        content: string;
        conversationId: string;
        createdAt: string | null;
        id: string;
        isSent: boolean | null;
        sender: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
    firstName: string;
    lastName: string;
    avatarUrl: string | null;
    membershipNumber: string | null;
  } | null;
  leaderId: string;
  organisationId: string;
  sessions: Array<{
    __typename: "Session";
    id: string;
    run: {
      __typename: "Run";
      id: string;
      title: string;
      description: string | null;
      confirmation: string | null;
      paceFrom: string | null;
      paceTo: string | null;
      distance: number | null;
      topography: {
        __typename: "Topography";
        id: string;
        title: string;
      } | null;
      topographyId: string | null;
      cost: number | null;
      capacity: number | null;
      location: {
        __typename: "Location";
        id: string;
        name: string;
        description: string;
        lat: number | null;
        lng: number | null;
        userId: string;
        organisationId: string;
      } | null;
      locationId: string;
      leader: {
        __typename: "User";
        cognitoId: string;
        id: string;
        username: string;
        registered: boolean | null;
        firstName: string;
        lastName: string;
        avatarUrl: string | null;
        membershipNumber: string | null;
      } | null;
      leaderId: string;
      organisationId: string;
      sessions: Array<{
        __typename: "Session";
        id: string;
        runId: string;
        date: string;
        time: string;
        description: string | null;
      } | null> | null;
    } | null;
    runId: string;
    date: string;
    time: string;
    description: string | null;
  } | null> | null;
};

export type ListRunsQuery = {
  __typename: "RunConnection";
  items: Array<{
    __typename: "Run";
    id: string;
    title: string;
    description: string | null;
    confirmation: string | null;
    paceFrom: string | null;
    paceTo: string | null;
    distance: number | null;
    topography: {
      __typename: "Topography";
      id: string;
      title: string;
    } | null;
    topographyId: string | null;
    cost: number | null;
    capacity: number | null;
    location: {
      __typename: "Location";
      id: string;
      name: string;
      description: string;
      lat: number | null;
      lng: number | null;
      user: {
        __typename: "User";
        cognitoId: string;
        id: string;
        username: string;
        registered: boolean | null;
        firstName: string;
        lastName: string;
        avatarUrl: string | null;
        membershipNumber: string | null;
      } | null;
      userId: string;
      organisationId: string;
    } | null;
    locationId: string;
    leader: {
      __typename: "User";
      cognitoId: string;
      conversations: {
        __typename: "UserConverstationsConnection";
        nextToken: string | null;
      } | null;
      id: string;
      messages: {
        __typename: "MessageConnection";
        nextToken: string | null;
      } | null;
      username: string;
      registered: boolean | null;
      firstName: string;
      lastName: string;
      avatarUrl: string | null;
      membershipNumber: string | null;
    } | null;
    leaderId: string;
    organisationId: string;
    sessions: Array<{
      __typename: "Session";
      id: string;
      run: {
        __typename: "Run";
        id: string;
        title: string;
        description: string | null;
        confirmation: string | null;
        paceFrom: string | null;
        paceTo: string | null;
        distance: number | null;
        topographyId: string | null;
        cost: number | null;
        capacity: number | null;
        locationId: string;
        leaderId: string;
        organisationId: string;
      } | null;
      runId: string;
      date: string;
      time: string;
      description: string | null;
    } | null> | null;
  } | null> | null;
  nextToken: string | null;
};

export type QueryRunsByIdPaceIndexQuery = {
  __typename: "RunConnection";
  items: Array<{
    __typename: "Run";
    id: string;
    title: string;
    description: string | null;
    confirmation: string | null;
    paceFrom: string | null;
    paceTo: string | null;
    distance: number | null;
    topography: {
      __typename: "Topography";
      id: string;
      title: string;
    } | null;
    topographyId: string | null;
    cost: number | null;
    capacity: number | null;
    location: {
      __typename: "Location";
      id: string;
      name: string;
      description: string;
      lat: number | null;
      lng: number | null;
      user: {
        __typename: "User";
        cognitoId: string;
        id: string;
        username: string;
        registered: boolean | null;
        firstName: string;
        lastName: string;
        avatarUrl: string | null;
        membershipNumber: string | null;
      } | null;
      userId: string;
      organisationId: string;
    } | null;
    locationId: string;
    leader: {
      __typename: "User";
      cognitoId: string;
      conversations: {
        __typename: "UserConverstationsConnection";
        nextToken: string | null;
      } | null;
      id: string;
      messages: {
        __typename: "MessageConnection";
        nextToken: string | null;
      } | null;
      username: string;
      registered: boolean | null;
      firstName: string;
      lastName: string;
      avatarUrl: string | null;
      membershipNumber: string | null;
    } | null;
    leaderId: string;
    organisationId: string;
    sessions: Array<{
      __typename: "Session";
      id: string;
      run: {
        __typename: "Run";
        id: string;
        title: string;
        description: string | null;
        confirmation: string | null;
        paceFrom: string | null;
        paceTo: string | null;
        distance: number | null;
        topographyId: string | null;
        cost: number | null;
        capacity: number | null;
        locationId: string;
        leaderId: string;
        organisationId: string;
      } | null;
      runId: string;
      date: string;
      time: string;
      description: string | null;
    } | null> | null;
  } | null> | null;
  nextToken: string | null;
};

export type QueryRunsByIdDistanceIndexQuery = {
  __typename: "RunConnection";
  items: Array<{
    __typename: "Run";
    id: string;
    title: string;
    description: string | null;
    confirmation: string | null;
    paceFrom: string | null;
    paceTo: string | null;
    distance: number | null;
    topography: {
      __typename: "Topography";
      id: string;
      title: string;
    } | null;
    topographyId: string | null;
    cost: number | null;
    capacity: number | null;
    location: {
      __typename: "Location";
      id: string;
      name: string;
      description: string;
      lat: number | null;
      lng: number | null;
      user: {
        __typename: "User";
        cognitoId: string;
        id: string;
        username: string;
        registered: boolean | null;
        firstName: string;
        lastName: string;
        avatarUrl: string | null;
        membershipNumber: string | null;
      } | null;
      userId: string;
      organisationId: string;
    } | null;
    locationId: string;
    leader: {
      __typename: "User";
      cognitoId: string;
      conversations: {
        __typename: "UserConverstationsConnection";
        nextToken: string | null;
      } | null;
      id: string;
      messages: {
        __typename: "MessageConnection";
        nextToken: string | null;
      } | null;
      username: string;
      registered: boolean | null;
      firstName: string;
      lastName: string;
      avatarUrl: string | null;
      membershipNumber: string | null;
    } | null;
    leaderId: string;
    organisationId: string;
    sessions: Array<{
      __typename: "Session";
      id: string;
      run: {
        __typename: "Run";
        id: string;
        title: string;
        description: string | null;
        confirmation: string | null;
        paceFrom: string | null;
        paceTo: string | null;
        distance: number | null;
        topographyId: string | null;
        cost: number | null;
        capacity: number | null;
        locationId: string;
        leaderId: string;
        organisationId: string;
      } | null;
      runId: string;
      date: string;
      time: string;
      description: string | null;
    } | null> | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetSessionQuery = {
  __typename: "Session";
  id: string;
  run: {
    __typename: "Run";
    id: string;
    title: string;
    description: string | null;
    confirmation: string | null;
    paceFrom: string | null;
    paceTo: string | null;
    distance: number | null;
    topography: {
      __typename: "Topography";
      id: string;
      title: string;
    } | null;
    topographyId: string | null;
    cost: number | null;
    capacity: number | null;
    location: {
      __typename: "Location";
      id: string;
      name: string;
      description: string;
      lat: number | null;
      lng: number | null;
      user: {
        __typename: "User";
        cognitoId: string;
        id: string;
        username: string;
        registered: boolean | null;
        firstName: string;
        lastName: string;
        avatarUrl: string | null;
        membershipNumber: string | null;
      } | null;
      userId: string;
      organisationId: string;
    } | null;
    locationId: string;
    leader: {
      __typename: "User";
      cognitoId: string;
      conversations: {
        __typename: "UserConverstationsConnection";
        nextToken: string | null;
      } | null;
      id: string;
      messages: {
        __typename: "MessageConnection";
        nextToken: string | null;
      } | null;
      username: string;
      registered: boolean | null;
      firstName: string;
      lastName: string;
      avatarUrl: string | null;
      membershipNumber: string | null;
    } | null;
    leaderId: string;
    organisationId: string;
    sessions: Array<{
      __typename: "Session";
      id: string;
      run: {
        __typename: "Run";
        id: string;
        title: string;
        description: string | null;
        confirmation: string | null;
        paceFrom: string | null;
        paceTo: string | null;
        distance: number | null;
        topographyId: string | null;
        cost: number | null;
        capacity: number | null;
        locationId: string;
        leaderId: string;
        organisationId: string;
      } | null;
      runId: string;
      date: string;
      time: string;
      description: string | null;
    } | null> | null;
  } | null;
  runId: string;
  date: string;
  time: string;
  description: string | null;
};

export type ListSessionsQuery = {
  __typename: "SessionConnection";
  items: Array<{
    __typename: "Session";
    id: string;
    run: {
      __typename: "Run";
      id: string;
      title: string;
      description: string | null;
      confirmation: string | null;
      paceFrom: string | null;
      paceTo: string | null;
      distance: number | null;
      topography: {
        __typename: "Topography";
        id: string;
        title: string;
      } | null;
      topographyId: string | null;
      cost: number | null;
      capacity: number | null;
      location: {
        __typename: "Location";
        id: string;
        name: string;
        description: string;
        lat: number | null;
        lng: number | null;
        userId: string;
        organisationId: string;
      } | null;
      locationId: string;
      leader: {
        __typename: "User";
        cognitoId: string;
        id: string;
        username: string;
        registered: boolean | null;
        firstName: string;
        lastName: string;
        avatarUrl: string | null;
        membershipNumber: string | null;
      } | null;
      leaderId: string;
      organisationId: string;
      sessions: Array<{
        __typename: "Session";
        id: string;
        runId: string;
        date: string;
        time: string;
        description: string | null;
      } | null> | null;
    } | null;
    runId: string;
    date: string;
    time: string;
    description: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type SubscribeToNewMessageSubscription = {
  __typename: "Message";
  author: {
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
      userConversations: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      messages: Array<{
        __typename: "Message";
        content: string;
        conversationId: string;
        createdAt: string | null;
        id: string;
        isSent: boolean | null;
        sender: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
    firstName: string;
    lastName: string;
    avatarUrl: string | null;
    membershipNumber: string | null;
  } | null;
  content: string;
  conversationId: string;
  createdAt: string | null;
  id: string;
  isSent: boolean | null;
  recipient: {
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
      userConversations: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      messages: Array<{
        __typename: "Message";
        content: string;
        conversationId: string;
        createdAt: string | null;
        id: string;
        isSent: boolean | null;
        sender: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
    firstName: string;
    lastName: string;
    avatarUrl: string | null;
    membershipNumber: string | null;
  } | null;
  sender: string | null;
};

export type SubscribeToNewUCsSubscription = {
  __typename: "UserConversations";
  associated: Array<{
    __typename: "UserConversations";
    associated: Array<{
      __typename: "UserConversations";
      associated: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
      conversation: {
        __typename: "Conversation";
        createdAt: string | null;
        id: string;
        name: string;
      } | null;
      conversationId: string;
      user: {
        __typename: "User";
        cognitoId: string;
        id: string;
        username: string;
        registered: boolean | null;
        firstName: string;
        lastName: string;
        avatarUrl: string | null;
        membershipNumber: string | null;
      } | null;
      userId: string;
    } | null> | null;
    conversation: {
      __typename: "Conversation";
      createdAt: string | null;
      id: string;
      messages: {
        __typename: "MessageConnection";
        nextToken: string | null;
      } | null;
      name: string;
    } | null;
    conversationId: string;
    user: {
      __typename: "User";
      cognitoId: string;
      conversations: {
        __typename: "UserConverstationsConnection";
        nextToken: string | null;
      } | null;
      id: string;
      messages: {
        __typename: "MessageConnection";
        nextToken: string | null;
      } | null;
      username: string;
      registered: boolean | null;
      firstName: string;
      lastName: string;
      avatarUrl: string | null;
      membershipNumber: string | null;
    } | null;
    userId: string;
  } | null> | null;
  conversation: {
    __typename: "Conversation";
    createdAt: string | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      messages: Array<{
        __typename: "Message";
        content: string;
        conversationId: string;
        createdAt: string | null;
        id: string;
        isSent: boolean | null;
        sender: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    name: string;
  } | null;
  conversationId: string;
  user: {
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
      userConversations: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      messages: Array<{
        __typename: "Message";
        content: string;
        conversationId: string;
        createdAt: string | null;
        id: string;
        isSent: boolean | null;
        sender: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
    firstName: string;
    lastName: string;
    avatarUrl: string | null;
    membershipNumber: string | null;
  } | null;
  userId: string;
};

export type SubscribeToNewUsersSubscription = {
  __typename: "User";
  cognitoId: string;
  conversations: {
    __typename: "UserConverstationsConnection";
    nextToken: string | null;
    userConversations: Array<{
      __typename: "UserConversations";
      associated: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
      conversation: {
        __typename: "Conversation";
        createdAt: string | null;
        id: string;
        name: string;
      } | null;
      conversationId: string;
      user: {
        __typename: "User";
        cognitoId: string;
        id: string;
        username: string;
        registered: boolean | null;
        firstName: string;
        lastName: string;
        avatarUrl: string | null;
        membershipNumber: string | null;
      } | null;
      userId: string;
    } | null> | null;
  } | null;
  id: string;
  messages: {
    __typename: "MessageConnection";
    messages: Array<{
      __typename: "Message";
      author: {
        __typename: "User";
        cognitoId: string;
        id: string;
        username: string;
        registered: boolean | null;
        firstName: string;
        lastName: string;
        avatarUrl: string | null;
        membershipNumber: string | null;
      } | null;
      content: string;
      conversationId: string;
      createdAt: string | null;
      id: string;
      isSent: boolean | null;
      recipient: {
        __typename: "User";
        cognitoId: string;
        id: string;
        username: string;
        registered: boolean | null;
        firstName: string;
        lastName: string;
        avatarUrl: string | null;
        membershipNumber: string | null;
      } | null;
      sender: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  username: string;
  registered: boolean | null;
  firstName: string;
  lastName: string;
  avatarUrl: string | null;
  membershipNumber: string | null;
};

export type OnCreateOrganisationSubscription = {
  __typename: "Organisation";
  id: string;
  name: string;
  description: string;
  users: Array<{
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
      userConversations: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      messages: Array<{
        __typename: "Message";
        content: string;
        conversationId: string;
        createdAt: string | null;
        id: string;
        isSent: boolean | null;
        sender: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
    firstName: string;
    lastName: string;
    avatarUrl: string | null;
    membershipNumber: string | null;
  } | null> | null;
};

export type OnUpdateOrganisationSubscription = {
  __typename: "Organisation";
  id: string;
  name: string;
  description: string;
  users: Array<{
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
      userConversations: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      messages: Array<{
        __typename: "Message";
        content: string;
        conversationId: string;
        createdAt: string | null;
        id: string;
        isSent: boolean | null;
        sender: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
    firstName: string;
    lastName: string;
    avatarUrl: string | null;
    membershipNumber: string | null;
  } | null> | null;
};

export type OnDeleteOrganisationSubscription = {
  __typename: "Organisation";
  id: string;
  name: string;
  description: string;
  users: Array<{
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
      userConversations: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      messages: Array<{
        __typename: "Message";
        content: string;
        conversationId: string;
        createdAt: string | null;
        id: string;
        isSent: boolean | null;
        sender: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
    firstName: string;
    lastName: string;
    avatarUrl: string | null;
    membershipNumber: string | null;
  } | null> | null;
};

export type OnCreateLocationSubscription = {
  __typename: "Location";
  id: string;
  name: string;
  description: string;
  lat: number | null;
  lng: number | null;
  user: {
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
      userConversations: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      messages: Array<{
        __typename: "Message";
        content: string;
        conversationId: string;
        createdAt: string | null;
        id: string;
        isSent: boolean | null;
        sender: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
    firstName: string;
    lastName: string;
    avatarUrl: string | null;
    membershipNumber: string | null;
  } | null;
  userId: string;
  organisationId: string;
};

export type OnUpdateLocationSubscription = {
  __typename: "Location";
  id: string;
  name: string;
  description: string;
  lat: number | null;
  lng: number | null;
  user: {
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
      userConversations: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      messages: Array<{
        __typename: "Message";
        content: string;
        conversationId: string;
        createdAt: string | null;
        id: string;
        isSent: boolean | null;
        sender: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
    firstName: string;
    lastName: string;
    avatarUrl: string | null;
    membershipNumber: string | null;
  } | null;
  userId: string;
  organisationId: string;
};

export type OnDeleteLocationSubscription = {
  __typename: "Location";
  id: string;
  name: string;
  description: string;
  lat: number | null;
  lng: number | null;
  user: {
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
      userConversations: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      messages: Array<{
        __typename: "Message";
        content: string;
        conversationId: string;
        createdAt: string | null;
        id: string;
        isSent: boolean | null;
        sender: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
    firstName: string;
    lastName: string;
    avatarUrl: string | null;
    membershipNumber: string | null;
  } | null;
  userId: string;
  organisationId: string;
};

export type OnCreateTopographySubscription = {
  __typename: "Topography";
  id: string;
  title: string;
};

export type OnUpdateTopographySubscription = {
  __typename: "Topography";
  id: string;
  title: string;
};

export type OnDeleteTopographySubscription = {
  __typename: "Topography";
  id: string;
  title: string;
};

export type OnCreateRunSubscription = {
  __typename: "Run";
  id: string;
  title: string;
  description: string | null;
  confirmation: string | null;
  paceFrom: string | null;
  paceTo: string | null;
  distance: number | null;
  topography: {
    __typename: "Topography";
    id: string;
    title: string;
  } | null;
  topographyId: string | null;
  cost: number | null;
  capacity: number | null;
  location: {
    __typename: "Location";
    id: string;
    name: string;
    description: string;
    lat: number | null;
    lng: number | null;
    user: {
      __typename: "User";
      cognitoId: string;
      conversations: {
        __typename: "UserConverstationsConnection";
        nextToken: string | null;
      } | null;
      id: string;
      messages: {
        __typename: "MessageConnection";
        nextToken: string | null;
      } | null;
      username: string;
      registered: boolean | null;
      firstName: string;
      lastName: string;
      avatarUrl: string | null;
      membershipNumber: string | null;
    } | null;
    userId: string;
    organisationId: string;
  } | null;
  locationId: string;
  leader: {
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
      userConversations: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      messages: Array<{
        __typename: "Message";
        content: string;
        conversationId: string;
        createdAt: string | null;
        id: string;
        isSent: boolean | null;
        sender: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
    firstName: string;
    lastName: string;
    avatarUrl: string | null;
    membershipNumber: string | null;
  } | null;
  leaderId: string;
  organisationId: string;
  sessions: Array<{
    __typename: "Session";
    id: string;
    run: {
      __typename: "Run";
      id: string;
      title: string;
      description: string | null;
      confirmation: string | null;
      paceFrom: string | null;
      paceTo: string | null;
      distance: number | null;
      topography: {
        __typename: "Topography";
        id: string;
        title: string;
      } | null;
      topographyId: string | null;
      cost: number | null;
      capacity: number | null;
      location: {
        __typename: "Location";
        id: string;
        name: string;
        description: string;
        lat: number | null;
        lng: number | null;
        userId: string;
        organisationId: string;
      } | null;
      locationId: string;
      leader: {
        __typename: "User";
        cognitoId: string;
        id: string;
        username: string;
        registered: boolean | null;
        firstName: string;
        lastName: string;
        avatarUrl: string | null;
        membershipNumber: string | null;
      } | null;
      leaderId: string;
      organisationId: string;
      sessions: Array<{
        __typename: "Session";
        id: string;
        runId: string;
        date: string;
        time: string;
        description: string | null;
      } | null> | null;
    } | null;
    runId: string;
    date: string;
    time: string;
    description: string | null;
  } | null> | null;
};

export type OnUpdateRunSubscription = {
  __typename: "Run";
  id: string;
  title: string;
  description: string | null;
  confirmation: string | null;
  paceFrom: string | null;
  paceTo: string | null;
  distance: number | null;
  topography: {
    __typename: "Topography";
    id: string;
    title: string;
  } | null;
  topographyId: string | null;
  cost: number | null;
  capacity: number | null;
  location: {
    __typename: "Location";
    id: string;
    name: string;
    description: string;
    lat: number | null;
    lng: number | null;
    user: {
      __typename: "User";
      cognitoId: string;
      conversations: {
        __typename: "UserConverstationsConnection";
        nextToken: string | null;
      } | null;
      id: string;
      messages: {
        __typename: "MessageConnection";
        nextToken: string | null;
      } | null;
      username: string;
      registered: boolean | null;
      firstName: string;
      lastName: string;
      avatarUrl: string | null;
      membershipNumber: string | null;
    } | null;
    userId: string;
    organisationId: string;
  } | null;
  locationId: string;
  leader: {
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
      userConversations: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      messages: Array<{
        __typename: "Message";
        content: string;
        conversationId: string;
        createdAt: string | null;
        id: string;
        isSent: boolean | null;
        sender: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
    firstName: string;
    lastName: string;
    avatarUrl: string | null;
    membershipNumber: string | null;
  } | null;
  leaderId: string;
  organisationId: string;
  sessions: Array<{
    __typename: "Session";
    id: string;
    run: {
      __typename: "Run";
      id: string;
      title: string;
      description: string | null;
      confirmation: string | null;
      paceFrom: string | null;
      paceTo: string | null;
      distance: number | null;
      topography: {
        __typename: "Topography";
        id: string;
        title: string;
      } | null;
      topographyId: string | null;
      cost: number | null;
      capacity: number | null;
      location: {
        __typename: "Location";
        id: string;
        name: string;
        description: string;
        lat: number | null;
        lng: number | null;
        userId: string;
        organisationId: string;
      } | null;
      locationId: string;
      leader: {
        __typename: "User";
        cognitoId: string;
        id: string;
        username: string;
        registered: boolean | null;
        firstName: string;
        lastName: string;
        avatarUrl: string | null;
        membershipNumber: string | null;
      } | null;
      leaderId: string;
      organisationId: string;
      sessions: Array<{
        __typename: "Session";
        id: string;
        runId: string;
        date: string;
        time: string;
        description: string | null;
      } | null> | null;
    } | null;
    runId: string;
    date: string;
    time: string;
    description: string | null;
  } | null> | null;
};

export type OnDeleteRunSubscription = {
  __typename: "Run";
  id: string;
  title: string;
  description: string | null;
  confirmation: string | null;
  paceFrom: string | null;
  paceTo: string | null;
  distance: number | null;
  topography: {
    __typename: "Topography";
    id: string;
    title: string;
  } | null;
  topographyId: string | null;
  cost: number | null;
  capacity: number | null;
  location: {
    __typename: "Location";
    id: string;
    name: string;
    description: string;
    lat: number | null;
    lng: number | null;
    user: {
      __typename: "User";
      cognitoId: string;
      conversations: {
        __typename: "UserConverstationsConnection";
        nextToken: string | null;
      } | null;
      id: string;
      messages: {
        __typename: "MessageConnection";
        nextToken: string | null;
      } | null;
      username: string;
      registered: boolean | null;
      firstName: string;
      lastName: string;
      avatarUrl: string | null;
      membershipNumber: string | null;
    } | null;
    userId: string;
    organisationId: string;
  } | null;
  locationId: string;
  leader: {
    __typename: "User";
    cognitoId: string;
    conversations: {
      __typename: "UserConverstationsConnection";
      nextToken: string | null;
      userConversations: Array<{
        __typename: "UserConversations";
        conversationId: string;
        userId: string;
      } | null> | null;
    } | null;
    id: string;
    messages: {
      __typename: "MessageConnection";
      messages: Array<{
        __typename: "Message";
        content: string;
        conversationId: string;
        createdAt: string | null;
        id: string;
        isSent: boolean | null;
        sender: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    username: string;
    registered: boolean | null;
    firstName: string;
    lastName: string;
    avatarUrl: string | null;
    membershipNumber: string | null;
  } | null;
  leaderId: string;
  organisationId: string;
  sessions: Array<{
    __typename: "Session";
    id: string;
    run: {
      __typename: "Run";
      id: string;
      title: string;
      description: string | null;
      confirmation: string | null;
      paceFrom: string | null;
      paceTo: string | null;
      distance: number | null;
      topography: {
        __typename: "Topography";
        id: string;
        title: string;
      } | null;
      topographyId: string | null;
      cost: number | null;
      capacity: number | null;
      location: {
        __typename: "Location";
        id: string;
        name: string;
        description: string;
        lat: number | null;
        lng: number | null;
        userId: string;
        organisationId: string;
      } | null;
      locationId: string;
      leader: {
        __typename: "User";
        cognitoId: string;
        id: string;
        username: string;
        registered: boolean | null;
        firstName: string;
        lastName: string;
        avatarUrl: string | null;
        membershipNumber: string | null;
      } | null;
      leaderId: string;
      organisationId: string;
      sessions: Array<{
        __typename: "Session";
        id: string;
        runId: string;
        date: string;
        time: string;
        description: string | null;
      } | null> | null;
    } | null;
    runId: string;
    date: string;
    time: string;
    description: string | null;
  } | null> | null;
};

export type OnCreateSessionSubscription = {
  __typename: "Session";
  id: string;
  run: {
    __typename: "Run";
    id: string;
    title: string;
    description: string | null;
    confirmation: string | null;
    paceFrom: string | null;
    paceTo: string | null;
    distance: number | null;
    topography: {
      __typename: "Topography";
      id: string;
      title: string;
    } | null;
    topographyId: string | null;
    cost: number | null;
    capacity: number | null;
    location: {
      __typename: "Location";
      id: string;
      name: string;
      description: string;
      lat: number | null;
      lng: number | null;
      user: {
        __typename: "User";
        cognitoId: string;
        id: string;
        username: string;
        registered: boolean | null;
        firstName: string;
        lastName: string;
        avatarUrl: string | null;
        membershipNumber: string | null;
      } | null;
      userId: string;
      organisationId: string;
    } | null;
    locationId: string;
    leader: {
      __typename: "User";
      cognitoId: string;
      conversations: {
        __typename: "UserConverstationsConnection";
        nextToken: string | null;
      } | null;
      id: string;
      messages: {
        __typename: "MessageConnection";
        nextToken: string | null;
      } | null;
      username: string;
      registered: boolean | null;
      firstName: string;
      lastName: string;
      avatarUrl: string | null;
      membershipNumber: string | null;
    } | null;
    leaderId: string;
    organisationId: string;
    sessions: Array<{
      __typename: "Session";
      id: string;
      run: {
        __typename: "Run";
        id: string;
        title: string;
        description: string | null;
        confirmation: string | null;
        paceFrom: string | null;
        paceTo: string | null;
        distance: number | null;
        topographyId: string | null;
        cost: number | null;
        capacity: number | null;
        locationId: string;
        leaderId: string;
        organisationId: string;
      } | null;
      runId: string;
      date: string;
      time: string;
      description: string | null;
    } | null> | null;
  } | null;
  runId: string;
  date: string;
  time: string;
  description: string | null;
};

export type OnUpdateSessionSubscription = {
  __typename: "Session";
  id: string;
  run: {
    __typename: "Run";
    id: string;
    title: string;
    description: string | null;
    confirmation: string | null;
    paceFrom: string | null;
    paceTo: string | null;
    distance: number | null;
    topography: {
      __typename: "Topography";
      id: string;
      title: string;
    } | null;
    topographyId: string | null;
    cost: number | null;
    capacity: number | null;
    location: {
      __typename: "Location";
      id: string;
      name: string;
      description: string;
      lat: number | null;
      lng: number | null;
      user: {
        __typename: "User";
        cognitoId: string;
        id: string;
        username: string;
        registered: boolean | null;
        firstName: string;
        lastName: string;
        avatarUrl: string | null;
        membershipNumber: string | null;
      } | null;
      userId: string;
      organisationId: string;
    } | null;
    locationId: string;
    leader: {
      __typename: "User";
      cognitoId: string;
      conversations: {
        __typename: "UserConverstationsConnection";
        nextToken: string | null;
      } | null;
      id: string;
      messages: {
        __typename: "MessageConnection";
        nextToken: string | null;
      } | null;
      username: string;
      registered: boolean | null;
      firstName: string;
      lastName: string;
      avatarUrl: string | null;
      membershipNumber: string | null;
    } | null;
    leaderId: string;
    organisationId: string;
    sessions: Array<{
      __typename: "Session";
      id: string;
      run: {
        __typename: "Run";
        id: string;
        title: string;
        description: string | null;
        confirmation: string | null;
        paceFrom: string | null;
        paceTo: string | null;
        distance: number | null;
        topographyId: string | null;
        cost: number | null;
        capacity: number | null;
        locationId: string;
        leaderId: string;
        organisationId: string;
      } | null;
      runId: string;
      date: string;
      time: string;
      description: string | null;
    } | null> | null;
  } | null;
  runId: string;
  date: string;
  time: string;
  description: string | null;
};

export type OnDeleteSessionSubscription = {
  __typename: "Session";
  id: string;
  run: {
    __typename: "Run";
    id: string;
    title: string;
    description: string | null;
    confirmation: string | null;
    paceFrom: string | null;
    paceTo: string | null;
    distance: number | null;
    topography: {
      __typename: "Topography";
      id: string;
      title: string;
    } | null;
    topographyId: string | null;
    cost: number | null;
    capacity: number | null;
    location: {
      __typename: "Location";
      id: string;
      name: string;
      description: string;
      lat: number | null;
      lng: number | null;
      user: {
        __typename: "User";
        cognitoId: string;
        id: string;
        username: string;
        registered: boolean | null;
        firstName: string;
        lastName: string;
        avatarUrl: string | null;
        membershipNumber: string | null;
      } | null;
      userId: string;
      organisationId: string;
    } | null;
    locationId: string;
    leader: {
      __typename: "User";
      cognitoId: string;
      conversations: {
        __typename: "UserConverstationsConnection";
        nextToken: string | null;
      } | null;
      id: string;
      messages: {
        __typename: "MessageConnection";
        nextToken: string | null;
      } | null;
      username: string;
      registered: boolean | null;
      firstName: string;
      lastName: string;
      avatarUrl: string | null;
      membershipNumber: string | null;
    } | null;
    leaderId: string;
    organisationId: string;
    sessions: Array<{
      __typename: "Session";
      id: string;
      run: {
        __typename: "Run";
        id: string;
        title: string;
        description: string | null;
        confirmation: string | null;
        paceFrom: string | null;
        paceTo: string | null;
        distance: number | null;
        topographyId: string | null;
        cost: number | null;
        capacity: number | null;
        locationId: string;
        leaderId: string;
        organisationId: string;
      } | null;
      runId: string;
      date: string;
      time: string;
      description: string | null;
    } | null> | null;
  } | null;
  runId: string;
  date: string;
  time: string;
  description: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateConversation(
    id: string,
    name: string,
    createdAt?: string
  ): Promise<CreateConversationMutation> {
    const statement = `mutation CreateConversation($createdAt: String, $id: ID!, $name: String!) {
        createConversation(createdAt: $createdAt, id: $id, name: $name) {
          __typename
          createdAt
          id
          messages {
            __typename
            messages {
              __typename
              author {
                __typename
                cognitoId
                id
                username
                registered
                firstName
                lastName
                avatarUrl
                membershipNumber
              }
              content
              conversationId
              createdAt
              id
              isSent
              recipient {
                __typename
                cognitoId
                id
                username
                registered
                firstName
                lastName
                avatarUrl
                membershipNumber
              }
              sender
            }
            nextToken
          }
          name
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
      name
    };
    if (createdAt) {
      gqlAPIServiceArguments.createdAt = createdAt;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateConversationMutation>response.data.createConversation;
  }
  async CreateMessage(
    conversationId: string,
    createdAt: string,
    id: string,
    content?: string
  ): Promise<CreateMessageMutation> {
    const statement = `mutation CreateMessage($content: String, $conversationId: ID!, $createdAt: String!, $id: ID!) {
        createMessage(content: $content, conversationId: $conversationId, createdAt: $createdAt, id: $id) {
          __typename
          author {
            __typename
            cognitoId
            conversations {
              __typename
              nextToken
              userConversations {
                __typename
                conversationId
                userId
              }
            }
            id
            messages {
              __typename
              messages {
                __typename
                content
                conversationId
                createdAt
                id
                isSent
                sender
              }
              nextToken
            }
            username
            registered
            firstName
            lastName
            avatarUrl
            membershipNumber
          }
          content
          conversationId
          createdAt
          id
          isSent
          recipient {
            __typename
            cognitoId
            conversations {
              __typename
              nextToken
              userConversations {
                __typename
                conversationId
                userId
              }
            }
            id
            messages {
              __typename
              messages {
                __typename
                content
                conversationId
                createdAt
                id
                isSent
                sender
              }
              nextToken
            }
            username
            registered
            firstName
            lastName
            avatarUrl
            membershipNumber
          }
          sender
        }
      }`;
    const gqlAPIServiceArguments: any = {
      conversationId,
      createdAt,
      id
    };
    if (content) {
      gqlAPIServiceArguments.content = content;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateMessageMutation>response.data.createMessage;
  }
  async CreateUser(username: string): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($username: String!) {
        createUser(username: $username) {
          __typename
          cognitoId
          conversations {
            __typename
            nextToken
            userConversations {
              __typename
              associated {
                __typename
                conversationId
                userId
              }
              conversation {
                __typename
                createdAt
                id
                name
              }
              conversationId
              user {
                __typename
                cognitoId
                id
                username
                registered
                firstName
                lastName
                avatarUrl
                membershipNumber
              }
              userId
            }
          }
          id
          messages {
            __typename
            messages {
              __typename
              author {
                __typename
                cognitoId
                id
                username
                registered
                firstName
                lastName
                avatarUrl
                membershipNumber
              }
              content
              conversationId
              createdAt
              id
              isSent
              recipient {
                __typename
                cognitoId
                id
                username
                registered
                firstName
                lastName
                avatarUrl
                membershipNumber
              }
              sender
            }
            nextToken
          }
          username
          registered
          firstName
          lastName
          avatarUrl
          membershipNumber
        }
      }`;
    const gqlAPIServiceArguments: any = {
      username
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async CreateUserConversations(
    conversationId: string,
    userId: string
  ): Promise<CreateUserConversationsMutation> {
    const statement = `mutation CreateUserConversations($conversationId: ID!, $userId: ID!) {
        createUserConversations(conversationId: $conversationId, userId: $userId) {
          __typename
          associated {
            __typename
            associated {
              __typename
              associated {
                __typename
                conversationId
                userId
              }
              conversation {
                __typename
                createdAt
                id
                name
              }
              conversationId
              user {
                __typename
                cognitoId
                id
                username
                registered
                firstName
                lastName
                avatarUrl
                membershipNumber
              }
              userId
            }
            conversation {
              __typename
              createdAt
              id
              messages {
                __typename
                nextToken
              }
              name
            }
            conversationId
            user {
              __typename
              cognitoId
              conversations {
                __typename
                nextToken
              }
              id
              messages {
                __typename
                nextToken
              }
              username
              registered
              firstName
              lastName
              avatarUrl
              membershipNumber
            }
            userId
          }
          conversation {
            __typename
            createdAt
            id
            messages {
              __typename
              messages {
                __typename
                content
                conversationId
                createdAt
                id
                isSent
                sender
              }
              nextToken
            }
            name
          }
          conversationId
          user {
            __typename
            cognitoId
            conversations {
              __typename
              nextToken
              userConversations {
                __typename
                conversationId
                userId
              }
            }
            id
            messages {
              __typename
              messages {
                __typename
                content
                conversationId
                createdAt
                id
                isSent
                sender
              }
              nextToken
            }
            username
            registered
            firstName
            lastName
            avatarUrl
            membershipNumber
          }
          userId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      conversationId,
      userId
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserConversationsMutation>(
      response.data.createUserConversations
    );
  }
  async CreateOrganisation(
    input: CreateOrganisationInput
  ): Promise<CreateOrganisationMutation> {
    const statement = `mutation CreateOrganisation($input: CreateOrganisationInput!) {
        createOrganisation(input: $input) {
          __typename
          id
          name
          description
          users {
            __typename
            cognitoId
            conversations {
              __typename
              nextToken
              userConversations {
                __typename
                conversationId
                userId
              }
            }
            id
            messages {
              __typename
              messages {
                __typename
                content
                conversationId
                createdAt
                id
                isSent
                sender
              }
              nextToken
            }
            username
            registered
            firstName
            lastName
            avatarUrl
            membershipNumber
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateOrganisationMutation>response.data.createOrganisation;
  }
  async UpdateOrganisation(
    input: UpdateOrganisationInput
  ): Promise<UpdateOrganisationMutation> {
    const statement = `mutation UpdateOrganisation($input: UpdateOrganisationInput!) {
        updateOrganisation(input: $input) {
          __typename
          id
          name
          description
          users {
            __typename
            cognitoId
            conversations {
              __typename
              nextToken
              userConversations {
                __typename
                conversationId
                userId
              }
            }
            id
            messages {
              __typename
              messages {
                __typename
                content
                conversationId
                createdAt
                id
                isSent
                sender
              }
              nextToken
            }
            username
            registered
            firstName
            lastName
            avatarUrl
            membershipNumber
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateOrganisationMutation>response.data.updateOrganisation;
  }
  async DeleteOrganisation(
    input: DeleteOrganisationInput
  ): Promise<DeleteOrganisationMutation> {
    const statement = `mutation DeleteOrganisation($input: DeleteOrganisationInput!) {
        deleteOrganisation(input: $input) {
          __typename
          id
          name
          description
          users {
            __typename
            cognitoId
            conversations {
              __typename
              nextToken
              userConversations {
                __typename
                conversationId
                userId
              }
            }
            id
            messages {
              __typename
              messages {
                __typename
                content
                conversationId
                createdAt
                id
                isSent
                sender
              }
              nextToken
            }
            username
            registered
            firstName
            lastName
            avatarUrl
            membershipNumber
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteOrganisationMutation>response.data.deleteOrganisation;
  }
  async CreateLocation(
    input: CreateLocationInput
  ): Promise<CreateLocationMutation> {
    const statement = `mutation CreateLocation($input: CreateLocationInput!) {
        createLocation(input: $input) {
          __typename
          id
          name
          description
          lat
          lng
          user {
            __typename
            cognitoId
            conversations {
              __typename
              nextToken
              userConversations {
                __typename
                conversationId
                userId
              }
            }
            id
            messages {
              __typename
              messages {
                __typename
                content
                conversationId
                createdAt
                id
                isSent
                sender
              }
              nextToken
            }
            username
            registered
            firstName
            lastName
            avatarUrl
            membershipNumber
          }
          userId
          organisationId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateLocationMutation>response.data.createLocation;
  }
  async UpdateLocation(
    input: UpdateLocationInput
  ): Promise<UpdateLocationMutation> {
    const statement = `mutation UpdateLocation($input: UpdateLocationInput!) {
        updateLocation(input: $input) {
          __typename
          id
          name
          description
          lat
          lng
          user {
            __typename
            cognitoId
            conversations {
              __typename
              nextToken
              userConversations {
                __typename
                conversationId
                userId
              }
            }
            id
            messages {
              __typename
              messages {
                __typename
                content
                conversationId
                createdAt
                id
                isSent
                sender
              }
              nextToken
            }
            username
            registered
            firstName
            lastName
            avatarUrl
            membershipNumber
          }
          userId
          organisationId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateLocationMutation>response.data.updateLocation;
  }
  async DeleteLocation(
    input: DeleteLocationInput
  ): Promise<DeleteLocationMutation> {
    const statement = `mutation DeleteLocation($input: DeleteLocationInput!) {
        deleteLocation(input: $input) {
          __typename
          id
          name
          description
          lat
          lng
          user {
            __typename
            cognitoId
            conversations {
              __typename
              nextToken
              userConversations {
                __typename
                conversationId
                userId
              }
            }
            id
            messages {
              __typename
              messages {
                __typename
                content
                conversationId
                createdAt
                id
                isSent
                sender
              }
              nextToken
            }
            username
            registered
            firstName
            lastName
            avatarUrl
            membershipNumber
          }
          userId
          organisationId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteLocationMutation>response.data.deleteLocation;
  }
  async CreateTopography(
    input: CreateTopographyInput
  ): Promise<CreateTopographyMutation> {
    const statement = `mutation CreateTopography($input: CreateTopographyInput!) {
        createTopography(input: $input) {
          __typename
          id
          title
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTopographyMutation>response.data.createTopography;
  }
  async UpdateTopography(
    input: UpdateTopographyInput
  ): Promise<UpdateTopographyMutation> {
    const statement = `mutation UpdateTopography($input: UpdateTopographyInput!) {
        updateTopography(input: $input) {
          __typename
          id
          title
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTopographyMutation>response.data.updateTopography;
  }
  async DeleteTopography(
    input: DeleteTopographyInput
  ): Promise<DeleteTopographyMutation> {
    const statement = `mutation DeleteTopography($input: DeleteTopographyInput!) {
        deleteTopography(input: $input) {
          __typename
          id
          title
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTopographyMutation>response.data.deleteTopography;
  }
  async CreateRun(input: CreateRunInput): Promise<CreateRunMutation> {
    const statement = `mutation CreateRun($input: CreateRunInput!) {
        createRun(input: $input) {
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
              conversations {
                __typename
                nextToken
              }
              id
              messages {
                __typename
                nextToken
              }
              username
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
            conversations {
              __typename
              nextToken
              userConversations {
                __typename
                conversationId
                userId
              }
            }
            id
            messages {
              __typename
              messages {
                __typename
                content
                conversationId
                createdAt
                id
                isSent
                sender
              }
              nextToken
            }
            username
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
                id
                username
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
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRunMutation>response.data.createRun;
  }
  async UpdateRun(input: UpdateRunInput): Promise<UpdateRunMutation> {
    const statement = `mutation UpdateRun($input: UpdateRunInput!) {
        updateRun(input: $input) {
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
              conversations {
                __typename
                nextToken
              }
              id
              messages {
                __typename
                nextToken
              }
              username
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
            conversations {
              __typename
              nextToken
              userConversations {
                __typename
                conversationId
                userId
              }
            }
            id
            messages {
              __typename
              messages {
                __typename
                content
                conversationId
                createdAt
                id
                isSent
                sender
              }
              nextToken
            }
            username
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
                id
                username
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
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRunMutation>response.data.updateRun;
  }
  async DeleteRun(input: DeleteRunInput): Promise<DeleteRunMutation> {
    const statement = `mutation DeleteRun($input: DeleteRunInput!) {
        deleteRun(input: $input) {
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
              conversations {
                __typename
                nextToken
              }
              id
              messages {
                __typename
                nextToken
              }
              username
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
            conversations {
              __typename
              nextToken
              userConversations {
                __typename
                conversationId
                userId
              }
            }
            id
            messages {
              __typename
              messages {
                __typename
                content
                conversationId
                createdAt
                id
                isSent
                sender
              }
              nextToken
            }
            username
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
                id
                username
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
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRunMutation>response.data.deleteRun;
  }
  async CreateSession(
    input: CreateSessionInput
  ): Promise<CreateSessionMutation> {
    const statement = `mutation CreateSession($input: CreateSessionInput!) {
        createSession(input: $input) {
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
                id
                username
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
              conversations {
                __typename
                nextToken
              }
              id
              messages {
                __typename
                nextToken
              }
              username
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
            }
          }
          runId
          date
          time
          description
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateSessionMutation>response.data.createSession;
  }
  async UpdateSession(
    input: UpdateSessionInput
  ): Promise<UpdateSessionMutation> {
    const statement = `mutation UpdateSession($input: UpdateSessionInput!) {
        updateSession(input: $input) {
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
                id
                username
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
              conversations {
                __typename
                nextToken
              }
              id
              messages {
                __typename
                nextToken
              }
              username
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
            }
          }
          runId
          date
          time
          description
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateSessionMutation>response.data.updateSession;
  }
  async DeleteSession(
    input: DeleteSessionInput
  ): Promise<DeleteSessionMutation> {
    const statement = `mutation DeleteSession($input: DeleteSessionInput!) {
        deleteSession(input: $input) {
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
                id
                username
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
              conversations {
                __typename
                nextToken
              }
              id
              messages {
                __typename
                nextToken
              }
              username
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
            }
          }
          runId
          date
          time
          description
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteSessionMutation>response.data.deleteSession;
  }
  async AllMessage(
    conversationId: string,
    after?: string,
    first?: number
  ): Promise<Array<AllMessageQuery>> {
    const statement = `query AllMessage($after: String, $conversationId: ID!, $first: Int) {
        allMessage(after: $after, conversationId: $conversationId, first: $first) {
          __typename
          author {
            __typename
            cognitoId
            conversations {
              __typename
              nextToken
              userConversations {
                __typename
                conversationId
                userId
              }
            }
            id
            messages {
              __typename
              messages {
                __typename
                content
                conversationId
                createdAt
                id
                isSent
                sender
              }
              nextToken
            }
            username
            registered
            firstName
            lastName
            avatarUrl
            membershipNumber
          }
          content
          conversationId
          createdAt
          id
          isSent
          recipient {
            __typename
            cognitoId
            conversations {
              __typename
              nextToken
              userConversations {
                __typename
                conversationId
                userId
              }
            }
            id
            messages {
              __typename
              messages {
                __typename
                content
                conversationId
                createdAt
                id
                isSent
                sender
              }
              nextToken
            }
            username
            registered
            firstName
            lastName
            avatarUrl
            membershipNumber
          }
          sender
        }
      }`;
    const gqlAPIServiceArguments: any = {
      conversationId
    };
    if (after) {
      gqlAPIServiceArguments.after = after;
    }
    if (first) {
      gqlAPIServiceArguments.first = first;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <Array<AllMessageQuery>>response.data.allMessage;
  }
  async AllMessageConnection(
    conversationId: string,
    after?: string,
    first?: number
  ): Promise<AllMessageConnectionQuery> {
    const statement = `query AllMessageConnection($after: String, $conversationId: ID!, $first: Int) {
        allMessageConnection(after: $after, conversationId: $conversationId, first: $first) {
          __typename
          messages {
            __typename
            author {
              __typename
              cognitoId
              conversations {
                __typename
                nextToken
              }
              id
              messages {
                __typename
                nextToken
              }
              username
              registered
              firstName
              lastName
              avatarUrl
              membershipNumber
            }
            content
            conversationId
            createdAt
            id
            isSent
            recipient {
              __typename
              cognitoId
              conversations {
                __typename
                nextToken
              }
              id
              messages {
                __typename
                nextToken
              }
              username
              registered
              firstName
              lastName
              avatarUrl
              membershipNumber
            }
            sender
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      conversationId
    };
    if (after) {
      gqlAPIServiceArguments.after = after;
    }
    if (first) {
      gqlAPIServiceArguments.first = first;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <AllMessageConnectionQuery>response.data.allMessageConnection;
  }
  async AllMessageFrom(
    conversationId: string,
    sender: string,
    after?: string,
    first?: number
  ): Promise<Array<AllMessageFromQuery>> {
    const statement = `query AllMessageFrom($after: String, $conversationId: ID!, $first: Int, $sender: String!) {
        allMessageFrom(after: $after, conversationId: $conversationId, first: $first, sender: $sender) {
          __typename
          author {
            __typename
            cognitoId
            conversations {
              __typename
              nextToken
              userConversations {
                __typename
                conversationId
                userId
              }
            }
            id
            messages {
              __typename
              messages {
                __typename
                content
                conversationId
                createdAt
                id
                isSent
                sender
              }
              nextToken
            }
            username
            registered
            firstName
            lastName
            avatarUrl
            membershipNumber
          }
          content
          conversationId
          createdAt
          id
          isSent
          recipient {
            __typename
            cognitoId
            conversations {
              __typename
              nextToken
              userConversations {
                __typename
                conversationId
                userId
              }
            }
            id
            messages {
              __typename
              messages {
                __typename
                content
                conversationId
                createdAt
                id
                isSent
                sender
              }
              nextToken
            }
            username
            registered
            firstName
            lastName
            avatarUrl
            membershipNumber
          }
          sender
        }
      }`;
    const gqlAPIServiceArguments: any = {
      conversationId,
      sender
    };
    if (after) {
      gqlAPIServiceArguments.after = after;
    }
    if (first) {
      gqlAPIServiceArguments.first = first;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <Array<AllMessageFromQuery>>response.data.allMessageFrom;
  }
  async AllUser(after?: string, first?: number): Promise<Array<AllUserQuery>> {
    const statement = `query AllUser($after: String, $first: Int) {
        allUser(after: $after, first: $first) {
          __typename
          cognitoId
          conversations {
            __typename
            nextToken
            userConversations {
              __typename
              associated {
                __typename
                conversationId
                userId
              }
              conversation {
                __typename
                createdAt
                id
                name
              }
              conversationId
              user {
                __typename
                cognitoId
                id
                username
                registered
                firstName
                lastName
                avatarUrl
                membershipNumber
              }
              userId
            }
          }
          id
          messages {
            __typename
            messages {
              __typename
              author {
                __typename
                cognitoId
                id
                username
                registered
                firstName
                lastName
                avatarUrl
                membershipNumber
              }
              content
              conversationId
              createdAt
              id
              isSent
              recipient {
                __typename
                cognitoId
                id
                username
                registered
                firstName
                lastName
                avatarUrl
                membershipNumber
              }
              sender
            }
            nextToken
          }
          username
          registered
          firstName
          lastName
          avatarUrl
          membershipNumber
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (after) {
      gqlAPIServiceArguments.after = after;
    }
    if (first) {
      gqlAPIServiceArguments.first = first;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <Array<AllUserQuery>>response.data.allUser;
  }
  async Me(): Promise<MeQuery> {
    const statement = `query Me {
        me {
          __typename
          cognitoId
          conversations {
            __typename
            nextToken
            userConversations {
              __typename
              associated {
                __typename
                conversationId
                userId
              }
              conversation {
                __typename
                createdAt
                id
                name
              }
              conversationId
              user {
                __typename
                cognitoId
                id
                username
                registered
                firstName
                lastName
                avatarUrl
                membershipNumber
              }
              userId
            }
          }
          id
          messages {
            __typename
            messages {
              __typename
              author {
                __typename
                cognitoId
                id
                username
                registered
                firstName
                lastName
                avatarUrl
                membershipNumber
              }
              content
              conversationId
              createdAt
              id
              isSent
              recipient {
                __typename
                cognitoId
                id
                username
                registered
                firstName
                lastName
                avatarUrl
                membershipNumber
              }
              sender
            }
            nextToken
          }
          username
          registered
          firstName
          lastName
          avatarUrl
          membershipNumber
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <MeQuery>response.data.me;
  }
  async GetOrganisation(
    id: string,
    name: string
  ): Promise<GetOrganisationQuery> {
    const statement = `query GetOrganisation($id: ID!, $name: String!) {
        getOrganisation(id: $id, name: $name) {
          __typename
          id
          name
          description
          users {
            __typename
            cognitoId
            conversations {
              __typename
              nextToken
              userConversations {
                __typename
                conversationId
                userId
              }
            }
            id
            messages {
              __typename
              messages {
                __typename
                content
                conversationId
                createdAt
                id
                isSent
                sender
              }
              nextToken
            }
            username
            registered
            firstName
            lastName
            avatarUrl
            membershipNumber
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
      name
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetOrganisationQuery>response.data.getOrganisation;
  }
  async ListOrganisations(
    filter?: TableOrganisationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListOrganisationsQuery> {
    const statement = `query ListOrganisations($filter: TableOrganisationFilterInput, $limit: Int, $nextToken: String) {
        listOrganisations(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            users {
              __typename
              cognitoId
              conversations {
                __typename
                nextToken
              }
              id
              messages {
                __typename
                nextToken
              }
              username
              registered
              firstName
              lastName
              avatarUrl
              membershipNumber
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListOrganisationsQuery>response.data.listOrganisations;
  }
  async GetLocation(id: string): Promise<GetLocationQuery> {
    const statement = `query GetLocation($id: ID!) {
        getLocation(id: $id) {
          __typename
          id
          name
          description
          lat
          lng
          user {
            __typename
            cognitoId
            conversations {
              __typename
              nextToken
              userConversations {
                __typename
                conversationId
                userId
              }
            }
            id
            messages {
              __typename
              messages {
                __typename
                content
                conversationId
                createdAt
                id
                isSent
                sender
              }
              nextToken
            }
            username
            registered
            firstName
            lastName
            avatarUrl
            membershipNumber
          }
          userId
          organisationId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetLocationQuery>response.data.getLocation;
  }
  async ListLocations(
    filter?: TableLocationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListLocationsQuery> {
    const statement = `query ListLocations($filter: TableLocationFilterInput, $limit: Int, $nextToken: String) {
        listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            lat
            lng
            user {
              __typename
              cognitoId
              conversations {
                __typename
                nextToken
              }
              id
              messages {
                __typename
                nextToken
              }
              username
              registered
              firstName
              lastName
              avatarUrl
              membershipNumber
            }
            userId
            organisationId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListLocationsQuery>response.data.listLocations;
  }
  async GetTopography(id: string, title: string): Promise<GetTopographyQuery> {
    const statement = `query GetTopography($id: ID!, $title: String!) {
        getTopography(id: $id, title: $title) {
          __typename
          id
          title
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
      title
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTopographyQuery>response.data.getTopography;
  }
  async ListTopographies(
    filter?: TableTopographyFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTopographiesQuery> {
    const statement = `query ListTopographies($filter: TableTopographyFilterInput, $limit: Int, $nextToken: String) {
        listTopographies(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTopographiesQuery>response.data.listTopographies;
  }
  async GetRun(id: string, title: string): Promise<GetRunQuery> {
    const statement = `query GetRun($id: ID!, $title: String!) {
        getRun(id: $id, title: $title) {
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
              conversations {
                __typename
                nextToken
              }
              id
              messages {
                __typename
                nextToken
              }
              username
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
            conversations {
              __typename
              nextToken
              userConversations {
                __typename
                conversationId
                userId
              }
            }
            id
            messages {
              __typename
              messages {
                __typename
                content
                conversationId
                createdAt
                id
                isSent
                sender
              }
              nextToken
            }
            username
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
                id
                username
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
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
      title
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRunQuery>response.data.getRun;
  }
  async ListRuns(
    filter?: TableRunFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRunsQuery> {
    const statement = `query ListRuns($filter: TableRunFilterInput, $limit: Int, $nextToken: String) {
        listRuns(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
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
                id
                username
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
              conversations {
                __typename
                nextToken
              }
              id
              messages {
                __typename
                nextToken
              }
              username
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
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRunsQuery>response.data.listRuns;
  }
  async QueryRunsByIdPaceIndex(
    id: string,
    first?: number,
    after?: string
  ): Promise<QueryRunsByIdPaceIndexQuery> {
    const statement = `query QueryRunsByIdPaceIndex($id: ID!, $first: Int, $after: String) {
        queryRunsByIdPaceIndex(id: $id, first: $first, after: $after) {
          __typename
          items {
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
                id
                username
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
              conversations {
                __typename
                nextToken
              }
              id
              messages {
                __typename
                nextToken
              }
              username
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
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    if (first) {
      gqlAPIServiceArguments.first = first;
    }
    if (after) {
      gqlAPIServiceArguments.after = after;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <QueryRunsByIdPaceIndexQuery>response.data.queryRunsByIdPaceIndex;
  }
  async QueryRunsByIdDistanceIndex(
    id: string,
    first?: number,
    after?: string
  ): Promise<QueryRunsByIdDistanceIndexQuery> {
    const statement = `query QueryRunsByIdDistanceIndex($id: ID!, $first: Int, $after: String) {
        queryRunsByIdDistanceIndex(id: $id, first: $first, after: $after) {
          __typename
          items {
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
                id
                username
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
              conversations {
                __typename
                nextToken
              }
              id
              messages {
                __typename
                nextToken
              }
              username
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
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    if (first) {
      gqlAPIServiceArguments.first = first;
    }
    if (after) {
      gqlAPIServiceArguments.after = after;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <QueryRunsByIdDistanceIndexQuery>(
      response.data.queryRunsByIdDistanceIndex
    );
  }
  async GetSession(id: string, date: string): Promise<GetSessionQuery> {
    const statement = `query GetSession($id: ID!, $date: AWSDate!) {
        getSession(id: $id, date: $date) {
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
                id
                username
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
              conversations {
                __typename
                nextToken
              }
              id
              messages {
                __typename
                nextToken
              }
              username
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
            }
          }
          runId
          date
          time
          description
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
      date
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetSessionQuery>response.data.getSession;
  }
  async ListSessions(
    filter?: TableSessionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListSessionsQuery> {
    const statement = `query ListSessions($filter: TableSessionFilterInput, $limit: Int, $nextToken: String) {
        listSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
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
                id
                username
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
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListSessionsQuery>response.data.listSessions;
  }
  SubscribeToNewMessageListener: Observable<
    SubscribeToNewMessageSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription SubscribeToNewMessage($conversationId: ID!) {
        subscribeToNewMessage(conversationId: $conversationId) {
          __typename
          author {
            __typename
            cognitoId
            conversations {
              __typename
              nextToken
              userConversations {
                __typename
                conversationId
                userId
              }
            }
            id
            messages {
              __typename
              messages {
                __typename
                content
                conversationId
                createdAt
                id
                isSent
                sender
              }
              nextToken
            }
            username
            registered
            firstName
            lastName
            avatarUrl
            membershipNumber
          }
          content
          conversationId
          createdAt
          id
          isSent
          recipient {
            __typename
            cognitoId
            conversations {
              __typename
              nextToken
              userConversations {
                __typename
                conversationId
                userId
              }
            }
            id
            messages {
              __typename
              messages {
                __typename
                content
                conversationId
                createdAt
                id
                isSent
                sender
              }
              nextToken
            }
            username
            registered
            firstName
            lastName
            avatarUrl
            membershipNumber
          }
          sender
        }
      }`
    )
  ) as Observable<SubscribeToNewMessageSubscription>;

  SubscribeToNewUCsListener: Observable<
    SubscribeToNewUCsSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription SubscribeToNewUCs($userId: ID!) {
        subscribeToNewUCs(userId: $userId) {
          __typename
          associated {
            __typename
            associated {
              __typename
              associated {
                __typename
                conversationId
                userId
              }
              conversation {
                __typename
                createdAt
                id
                name
              }
              conversationId
              user {
                __typename
                cognitoId
                id
                username
                registered
                firstName
                lastName
                avatarUrl
                membershipNumber
              }
              userId
            }
            conversation {
              __typename
              createdAt
              id
              messages {
                __typename
                nextToken
              }
              name
            }
            conversationId
            user {
              __typename
              cognitoId
              conversations {
                __typename
                nextToken
              }
              id
              messages {
                __typename
                nextToken
              }
              username
              registered
              firstName
              lastName
              avatarUrl
              membershipNumber
            }
            userId
          }
          conversation {
            __typename
            createdAt
            id
            messages {
              __typename
              messages {
                __typename
                content
                conversationId
                createdAt
                id
                isSent
                sender
              }
              nextToken
            }
            name
          }
          conversationId
          user {
            __typename
            cognitoId
            conversations {
              __typename
              nextToken
              userConversations {
                __typename
                conversationId
                userId
              }
            }
            id
            messages {
              __typename
              messages {
                __typename
                content
                conversationId
                createdAt
                id
                isSent
                sender
              }
              nextToken
            }
            username
            registered
            firstName
            lastName
            avatarUrl
            membershipNumber
          }
          userId
        }
      }`
    )
  ) as Observable<SubscribeToNewUCsSubscription>;

  SubscribeToNewUsersListener: Observable<
    SubscribeToNewUsersSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription SubscribeToNewUsers {
        subscribeToNewUsers {
          __typename
          cognitoId
          conversations {
            __typename
            nextToken
            userConversations {
              __typename
              associated {
                __typename
                conversationId
                userId
              }
              conversation {
                __typename
                createdAt
                id
                name
              }
              conversationId
              user {
                __typename
                cognitoId
                id
                username
                registered
                firstName
                lastName
                avatarUrl
                membershipNumber
              }
              userId
            }
          }
          id
          messages {
            __typename
            messages {
              __typename
              author {
                __typename
                cognitoId
                id
                username
                registered
                firstName
                lastName
                avatarUrl
                membershipNumber
              }
              content
              conversationId
              createdAt
              id
              isSent
              recipient {
                __typename
                cognitoId
                id
                username
                registered
                firstName
                lastName
                avatarUrl
                membershipNumber
              }
              sender
            }
            nextToken
          }
          username
          registered
          firstName
          lastName
          avatarUrl
          membershipNumber
        }
      }`
    )
  ) as Observable<SubscribeToNewUsersSubscription>;

  OnCreateOrganisationListener: Observable<
    OnCreateOrganisationSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateOrganisation($id: ID, $name: String, $description: String) {
        onCreateOrganisation(id: $id, name: $name, description: $description) {
          __typename
          id
          name
          description
          users {
            __typename
            cognitoId
            conversations {
              __typename
              nextToken
              userConversations {
                __typename
                conversationId
                userId
              }
            }
            id
            messages {
              __typename
              messages {
                __typename
                content
                conversationId
                createdAt
                id
                isSent
                sender
              }
              nextToken
            }
            username
            registered
            firstName
            lastName
            avatarUrl
            membershipNumber
          }
        }
      }`
    )
  ) as Observable<OnCreateOrganisationSubscription>;

  OnUpdateOrganisationListener: Observable<
    OnUpdateOrganisationSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateOrganisation($id: ID, $name: String, $description: String) {
        onUpdateOrganisation(id: $id, name: $name, description: $description) {
          __typename
          id
          name
          description
          users {
            __typename
            cognitoId
            conversations {
              __typename
              nextToken
              userConversations {
                __typename
                conversationId
                userId
              }
            }
            id
            messages {
              __typename
              messages {
                __typename
                content
                conversationId
                createdAt
                id
                isSent
                sender
              }
              nextToken
            }
            username
            registered
            firstName
            lastName
            avatarUrl
            membershipNumber
          }
        }
      }`
    )
  ) as Observable<OnUpdateOrganisationSubscription>;

  OnDeleteOrganisationListener: Observable<
    OnDeleteOrganisationSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteOrganisation($id: ID, $name: String, $description: String) {
        onDeleteOrganisation(id: $id, name: $name, description: $description) {
          __typename
          id
          name
          description
          users {
            __typename
            cognitoId
            conversations {
              __typename
              nextToken
              userConversations {
                __typename
                conversationId
                userId
              }
            }
            id
            messages {
              __typename
              messages {
                __typename
                content
                conversationId
                createdAt
                id
                isSent
                sender
              }
              nextToken
            }
            username
            registered
            firstName
            lastName
            avatarUrl
            membershipNumber
          }
        }
      }`
    )
  ) as Observable<OnDeleteOrganisationSubscription>;

  OnCreateLocationListener: Observable<
    OnCreateLocationSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateLocation($id: ID, $name: String, $description: String, $lat: Float, $lng: Float) {
        onCreateLocation(id: $id, name: $name, description: $description, lat: $lat, lng: $lng) {
          __typename
          id
          name
          description
          lat
          lng
          user {
            __typename
            cognitoId
            conversations {
              __typename
              nextToken
              userConversations {
                __typename
                conversationId
                userId
              }
            }
            id
            messages {
              __typename
              messages {
                __typename
                content
                conversationId
                createdAt
                id
                isSent
                sender
              }
              nextToken
            }
            username
            registered
            firstName
            lastName
            avatarUrl
            membershipNumber
          }
          userId
          organisationId
        }
      }`
    )
  ) as Observable<OnCreateLocationSubscription>;

  OnUpdateLocationListener: Observable<
    OnUpdateLocationSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateLocation($id: ID, $name: String, $description: String, $lat: Float, $lng: Float) {
        onUpdateLocation(id: $id, name: $name, description: $description, lat: $lat, lng: $lng) {
          __typename
          id
          name
          description
          lat
          lng
          user {
            __typename
            cognitoId
            conversations {
              __typename
              nextToken
              userConversations {
                __typename
                conversationId
                userId
              }
            }
            id
            messages {
              __typename
              messages {
                __typename
                content
                conversationId
                createdAt
                id
                isSent
                sender
              }
              nextToken
            }
            username
            registered
            firstName
            lastName
            avatarUrl
            membershipNumber
          }
          userId
          organisationId
        }
      }`
    )
  ) as Observable<OnUpdateLocationSubscription>;

  OnDeleteLocationListener: Observable<
    OnDeleteLocationSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteLocation($id: ID, $name: String, $description: String, $lat: Float, $lng: Float) {
        onDeleteLocation(id: $id, name: $name, description: $description, lat: $lat, lng: $lng) {
          __typename
          id
          name
          description
          lat
          lng
          user {
            __typename
            cognitoId
            conversations {
              __typename
              nextToken
              userConversations {
                __typename
                conversationId
                userId
              }
            }
            id
            messages {
              __typename
              messages {
                __typename
                content
                conversationId
                createdAt
                id
                isSent
                sender
              }
              nextToken
            }
            username
            registered
            firstName
            lastName
            avatarUrl
            membershipNumber
          }
          userId
          organisationId
        }
      }`
    )
  ) as Observable<OnDeleteLocationSubscription>;

  OnCreateTopographyListener: Observable<
    OnCreateTopographySubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTopography($id: ID, $title: String) {
        onCreateTopography(id: $id, title: $title) {
          __typename
          id
          title
        }
      }`
    )
  ) as Observable<OnCreateTopographySubscription>;

  OnUpdateTopographyListener: Observable<
    OnUpdateTopographySubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTopography($id: ID, $title: String) {
        onUpdateTopography(id: $id, title: $title) {
          __typename
          id
          title
        }
      }`
    )
  ) as Observable<OnUpdateTopographySubscription>;

  OnDeleteTopographyListener: Observable<
    OnDeleteTopographySubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTopography($id: ID, $title: String) {
        onDeleteTopography(id: $id, title: $title) {
          __typename
          id
          title
        }
      }`
    )
  ) as Observable<OnDeleteTopographySubscription>;

  OnCreateRunListener: Observable<OnCreateRunSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateRun($id: ID, $title: String, $description: String, $confirmation: String, $paceFrom: AWSTime) {
        onCreateRun(id: $id, title: $title, description: $description, confirmation: $confirmation, paceFrom: $paceFrom) {
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
              conversations {
                __typename
                nextToken
              }
              id
              messages {
                __typename
                nextToken
              }
              username
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
            conversations {
              __typename
              nextToken
              userConversations {
                __typename
                conversationId
                userId
              }
            }
            id
            messages {
              __typename
              messages {
                __typename
                content
                conversationId
                createdAt
                id
                isSent
                sender
              }
              nextToken
            }
            username
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
                id
                username
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
          }
        }
      }`
    )
  ) as Observable<OnCreateRunSubscription>;

  OnUpdateRunListener: Observable<OnUpdateRunSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateRun($id: ID, $title: String, $description: String, $confirmation: String, $paceFrom: AWSTime) {
        onUpdateRun(id: $id, title: $title, description: $description, confirmation: $confirmation, paceFrom: $paceFrom) {
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
              conversations {
                __typename
                nextToken
              }
              id
              messages {
                __typename
                nextToken
              }
              username
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
            conversations {
              __typename
              nextToken
              userConversations {
                __typename
                conversationId
                userId
              }
            }
            id
            messages {
              __typename
              messages {
                __typename
                content
                conversationId
                createdAt
                id
                isSent
                sender
              }
              nextToken
            }
            username
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
                id
                username
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
          }
        }
      }`
    )
  ) as Observable<OnUpdateRunSubscription>;

  OnDeleteRunListener: Observable<OnDeleteRunSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteRun($id: ID, $title: String, $description: String, $confirmation: String, $paceFrom: AWSTime) {
        onDeleteRun(id: $id, title: $title, description: $description, confirmation: $confirmation, paceFrom: $paceFrom) {
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
              conversations {
                __typename
                nextToken
              }
              id
              messages {
                __typename
                nextToken
              }
              username
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
            conversations {
              __typename
              nextToken
              userConversations {
                __typename
                conversationId
                userId
              }
            }
            id
            messages {
              __typename
              messages {
                __typename
                content
                conversationId
                createdAt
                id
                isSent
                sender
              }
              nextToken
            }
            username
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
                id
                username
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
          }
        }
      }`
    )
  ) as Observable<OnDeleteRunSubscription>;

  OnCreateSessionListener: Observable<
    OnCreateSessionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateSession($id: ID, $runId: ID, $date: AWSDate, $time: AWSTime, $description: String) {
        onCreateSession(id: $id, runId: $runId, date: $date, time: $time, description: $description) {
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
                id
                username
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
              conversations {
                __typename
                nextToken
              }
              id
              messages {
                __typename
                nextToken
              }
              username
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
            }
          }
          runId
          date
          time
          description
        }
      }`
    )
  ) as Observable<OnCreateSessionSubscription>;

  OnUpdateSessionListener: Observable<
    OnUpdateSessionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateSession($id: ID, $runId: ID, $date: AWSDate, $time: AWSTime, $description: String) {
        onUpdateSession(id: $id, runId: $runId, date: $date, time: $time, description: $description) {
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
                id
                username
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
              conversations {
                __typename
                nextToken
              }
              id
              messages {
                __typename
                nextToken
              }
              username
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
            }
          }
          runId
          date
          time
          description
        }
      }`
    )
  ) as Observable<OnUpdateSessionSubscription>;

  OnDeleteSessionListener: Observable<
    OnDeleteSessionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteSession($id: ID, $runId: ID, $date: AWSDate, $time: AWSTime, $description: String) {
        onDeleteSession(id: $id, runId: $runId, date: $date, time: $time, description: $description) {
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
                id
                username
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
              conversations {
                __typename
                nextToken
              }
              id
              messages {
                __typename
                nextToken
              }
              username
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
            }
          }
          runId
          date
          time
          description
        }
      }`
    )
  ) as Observable<OnDeleteSessionSubscription>;
}
