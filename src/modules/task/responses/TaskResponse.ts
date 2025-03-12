export class TaskResponse {
    constructor(
        public readonly title: string,
        public readonly description?: string | null,
        public readonly status: "pending" | "in_progress" | "completed" = "pending"

    ) { }
}