import {Feedback} from "../../shared/model/Feedback";

export interface IDocumentFeedbackRepository {
    getAll(): Promise<Feedback[]>
    registerDocumentFeedback(feedBack: Feedback): Promise<boolean>
}