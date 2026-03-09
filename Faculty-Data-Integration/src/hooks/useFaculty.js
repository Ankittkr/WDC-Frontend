import { useQuery } from "@tanstack/react-query"
import { getFaculty } from "../api/facultyApi"

export const useFaculty = (email)=>{

    return useQuery({
        queryKey: ["faculty", email],
        queryFn: () => getFaculty(email),
        staleTime: 1000 * 60 * 5,
        retry: 2,
    })
}