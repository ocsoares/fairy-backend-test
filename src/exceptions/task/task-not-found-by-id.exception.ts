import { NotFoundException } from "@nestjs/common";

export class TaskNotFoundByIdException extends NotFoundException {
    static readonly EXCEPTION_MESSAGE = "The task with the provided ID does not exists !";

    constructor() {
        super(TaskNotFoundByIdException.EXCEPTION_MESSAGE);
    }
}