import {Feedback} from "../../shared/model/Feedback";

export interface IReportFeedbackRepository {
    getAll(): Promise<Feedback[]>
    registerReportFeedback(feedBack: Feedback): Promise<boolean>
}