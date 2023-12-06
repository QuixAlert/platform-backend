import {Feedback} from "../../shared/model/Feedback";

export interface IAdoptionFeedbackRepository {
    getAll(): Promise<Feedback[]>
    registerAdoptionFeedback(feedBack: Feedback): Promise<boolean>
}