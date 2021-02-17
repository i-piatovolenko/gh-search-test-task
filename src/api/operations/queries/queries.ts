import { gql } from "@apollo/client";

export const GET_ORGANIZATION = gql`
    query {
        organization(login: "nasa") {
            name
            url
        }
    }
`;
