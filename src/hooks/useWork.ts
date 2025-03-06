import { useQuery } from "@tanstack/react-query";

export interface WorksClass {
  image: string;
  title: string;
  list?: WorksClass[];
}

const useWorks = () => {
  const queryFn = async (): Promise<Array<WorksClass>> =>
    (await fetch("/data/works.json")).json();

  const result = useQuery({ queryKey: ["works"], queryFn: queryFn });

  return result;
};
export default useWorks;
