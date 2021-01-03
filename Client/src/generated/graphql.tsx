import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  Users: Array<User>;
  me: User;
  replies: Array<Reply>;
  post?: Maybe<Post>;
  posts: Array<Post>;
  Rooms: Array<Rooms>;
  getRooms: RoomsResponse;
};


export type QueryPostArgs = {
  id: Scalars['Int'];
};


export type QueryPostsArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};


export type QueryGetRoomsArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
};


export type Reply = {
  __typename?: 'Reply';
  liked: Scalars['Boolean'];
  userId: Scalars['Float'];
  postId: Scalars['Float'];
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  creator: User;
  comments: Scalars['Float'];
  likes: Scalars['Float'];
  message: Scalars['String'];
  creatorid: Scalars['ID'];
};

export type Rooms = {
  __typename?: 'Rooms';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  Roomname: Scalars['String'];
  adminId: Scalars['ID'];
  members: Scalars['Float'];
};

export type RoomsResponse = {
  __typename?: 'RoomsResponse';
  success?: Maybe<Array<Success>>;
  rooms?: Maybe<Array<Rooms>>;
  errors?: Maybe<Array<FieldError>>;
};

export type Success = {
  __typename?: 'Success';
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  changePassword: UserResponse;
  hitlike: Scalars['Boolean'];
  removelike: Scalars['Boolean'];
  createpost: Post;
  updatepost: Post;
  deletepost: Scalars['Boolean'];
  updateRoom: BoolRoomResponse;
  deleteRoom: BoolRoomResponse;
  joinRoom: BoolRoomResponse;
  createRoom: RoomResponse;
};


export type MutationRegisterArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  usernameorEmail: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  token: Scalars['String'];
  newPassword: Scalars['String'];
};


export type MutationHitlikeArgs = {
  postid: Scalars['Int'];
};


export type MutationRemovelikeArgs = {
  postid: Scalars['Int'];
};


export type MutationCreatepostArgs = {
  message: Scalars['String'];
};


export type MutationUpdatepostArgs = {
  message?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};


export type MutationDeletepostArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateRoomArgs = {
  newname: Scalars['String'];
  prevname: Scalars['String'];
};


export type MutationDeleteRoomArgs = {
  name: Scalars['String'];
};


export type MutationJoinRoomArgs = {
  roomId: Scalars['Int'];
};


export type MutationCreateRoomArgs = {
  name: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  success?: Maybe<Array<Success>>;
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type BoolRoomResponse = {
  __typename?: 'boolRoomResponse';
  success?: Maybe<Array<Success>>;
  updated?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Array<FieldError>>;
};

export type RoomResponse = {
  __typename?: 'RoomResponse';
  success?: Maybe<Array<Success>>;
  rooms?: Maybe<Rooms>;
  errors?: Maybe<Array<FieldError>>;
};

export type RegularErrorFragment = (
  { __typename?: 'FieldError' }
  & Pick<FieldError, 'field' | 'message'>
);

export type RegularRoomsFragment = (
  { __typename?: 'Rooms' }
  & Pick<Rooms, 'id' | 'adminId' | 'Roomname' | 'members'>
);

export type RegularSuccessFragment = (
  { __typename?: 'Success' }
  & Pick<Success, 'field' | 'message'>
);

export type RegularUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username'>
);

export type ChangePasswordMutationVariables = Exact<{
  token: Scalars['String'];
  password: Scalars['String'];
}>;


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & { changePassword: (
    { __typename?: 'UserResponse' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & RegularUserFragment
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type CreateRoomMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateRoomMutation = (
  { __typename?: 'Mutation' }
  & { createRoom: (
    { __typename?: 'RoomResponse' }
    & { rooms?: Maybe<(
      { __typename?: 'Rooms' }
      & RegularRoomsFragment
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & RegularErrorFragment
    )>>, success?: Maybe<Array<(
      { __typename?: 'Success' }
      & RegularSuccessFragment
    )>> }
  ) }
);

export type ForgotpasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotpasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'forgotPassword'>
);

export type JoinroomMutationVariables = Exact<{
  roomid: Scalars['Int'];
}>;


export type JoinroomMutation = (
  { __typename?: 'Mutation' }
  & { joinRoom: (
    { __typename?: 'boolRoomResponse' }
    & Pick<BoolRoomResponse, 'updated'>
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type LoginMutationVariables = Exact<{
  usernameorEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & RegularUserFragment
    )> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & RegularUserFragment
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type GetroomsQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type GetroomsQuery = (
  { __typename?: 'Query' }
  & { getRooms: (
    { __typename?: 'RoomsResponse' }
    & { rooms?: Maybe<Array<(
      { __typename?: 'Rooms' }
      & RegularRoomsFragment
    )>>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'User' }
    & RegularUserFragment
  ) }
);

export const RegularErrorFragmentDoc = gql`
    fragment RegularError on FieldError {
  field
  message
}
    `;
export const RegularRoomsFragmentDoc = gql`
    fragment RegularRooms on Rooms {
  id
  adminId
  Roomname
  members
}
    `;
export const RegularSuccessFragmentDoc = gql`
    fragment RegularSuccess on Success {
  field
  message
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  username
}
    `;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($token: String!, $password: String!) {
  changePassword(token: $token, newPassword: $password) {
    user {
      ...RegularUser
    }
    errors {
      field
      message
    }
  }
}
    ${RegularUserFragmentDoc}`;

export function useChangePasswordMutation() {
  return Urql.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument);
};
export const CreateRoomDocument = gql`
    mutation createRoom($name: String!) {
  createRoom(name: $name) {
    rooms {
      ...RegularRooms
    }
    errors {
      ...RegularError
    }
    success {
      ...RegularSuccess
    }
  }
}
    ${RegularRoomsFragmentDoc}
${RegularErrorFragmentDoc}
${RegularSuccessFragmentDoc}`;

export function useCreateRoomMutation() {
  return Urql.useMutation<CreateRoomMutation, CreateRoomMutationVariables>(CreateRoomDocument);
};
export const ForgotpasswordDocument = gql`
    mutation forgotpassword($email: String!) {
  forgotPassword(email: $email)
}
    `;

export function useForgotpasswordMutation() {
  return Urql.useMutation<ForgotpasswordMutation, ForgotpasswordMutationVariables>(ForgotpasswordDocument);
};
export const JoinroomDocument = gql`
    mutation joinroom($roomid: Int!) {
  joinRoom(roomId: $roomid) {
    updated
    errors {
      field
      message
    }
  }
}
    `;

export function useJoinroomMutation() {
  return Urql.useMutation<JoinroomMutation, JoinroomMutationVariables>(JoinroomDocument);
};
export const LoginDocument = gql`
    mutation Login($usernameorEmail: String!, $password: String!) {
  login(usernameorEmail: $usernameorEmail, password: $password) {
    errors {
      field
      message
    }
    user {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const RegisterDocument = gql`
    mutation Register($username: String!, $password: String!, $email: String!) {
  register(username: $username, password: $password, email: $email) {
    user {
      ...RegularUser
    }
    errors {
      field
      message
    }
  }
}
    ${RegularUserFragmentDoc}`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const GetroomsDocument = gql`
    query getrooms($limit: Int!, $cursor: String) {
  getRooms(limit: $limit, cursor: $cursor) {
    rooms {
      ...RegularRooms
    }
    errors {
      field
      message
    }
  }
}
    ${RegularRoomsFragmentDoc}`;

export function useGetroomsQuery(options: Omit<Urql.UseQueryArgs<GetroomsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetroomsQuery>({ query: GetroomsDocument, ...options });
};
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};