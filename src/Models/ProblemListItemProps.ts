<<<<<<< HEAD
import { Problem } from "."
=======
import { Problem } from "./"
>>>>>>> origin/RADE-119

export default interface ProblemListItemProps {
    problem: Problem
    selectedProblems: string[]
    addProblem: (problemId: string) => void
    removeProblem: (problemId: string) => void
}
