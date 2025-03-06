import { useQuery } from "@tanstack/react-query";

export interface WorkExperience {
  id: string;
  year: number;
  projectName: string;
  category: string;
  designation: string;
  productionCompany: string;
  description: string;
}

const useBio = () => {
  const queryFn = async (): Promise<Array<WorkExperience>> =>
    (await fetch("/data/bio.json")).json();

  const result = useQuery({ queryKey: ["bio"], queryFn: queryFn });

  return result;
};
export default useBio;
