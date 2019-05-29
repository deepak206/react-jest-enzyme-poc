/**
 * @flow
 * @relayHash d8d278f19985f308400e276f81593180
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ListPageQueryVariables = {|
  after?: ?string,
  first: number,
|};
export type ListPageQueryResponse = {|
  +allPosts: $ReadOnlyArray<{|
    +id: string,
    +title: string,
    +text: string,
  |}>
|};
export type ListPageQuery = {|
  variables: ListPageQueryVariables,
  response: ListPageQueryResponse,
|};
*/


/*
query ListPageQuery(
  $after: String
  $first: Int!
) {
  allPosts(orderBy: createdAt_DESC, after: $after, first: $first) {
    id
    title
    text
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "after",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "allPosts",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "after",
        "variableName": "after"
      },
      {
        "kind": "Variable",
        "name": "first",
        "variableName": "first"
      },
      {
        "kind": "Literal",
        "name": "orderBy",
        "value": "createdAt_DESC"
      }
    ],
    "concreteType": "Post",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "title",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "text",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ListPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ListPageQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "ListPageQuery",
    "id": null,
    "text": "query ListPageQuery(\n  $after: String\n  $first: Int!\n) {\n  allPosts(orderBy: createdAt_DESC, after: $after, first: $first) {\n    id\n    title\n    text\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '63e8d2091792d35f978b37ad3c08c76a';
module.exports = node;
