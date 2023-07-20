import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/githubApi";
import { Issue } from "../interfaces";
import { sleep } from "../../helpers/sleep";

export const getIssueInfo = async (issueNumber: number): Promise<Issue> => {
  await sleep(2);
  console.log("Call API {getIssueInfo}");
  const { data } = await githubApi.get<Issue>(`/issues/${issueNumber}`);
  return data;
};

export const getIssueComments = async (
  issueNumber: number
): Promise<Issue[]> => {
  await sleep(2);
  const { data } = await githubApi.get<Issue[]>(
    `/issues/${issueNumber}/comments`
  );
  return data;
};

export const useIssue = (issueNumber: number) => {
  const issueQuery = useQuery(
    ["issue", issueNumber], // Lo almacenamos en cache y almacenamos el numero.
    () => getIssueInfo(issueNumber)
  );

  const commentsQuery = useQuery(
    ["issue", issueNumber, "comments"],
    () => getIssueComments(issueQuery.data!.number), // Data de la primera Query
    {
      // Si enabled es el False, JAmas se va a ejecutar este Query.
      // Espermanos que el primer query se ejecute. Lueo obtenemos el number
      enabled: issueQuery.data !== undefined,
    }
  );

  return {
    issueQuery,
    commentsQuery,
  };
};
