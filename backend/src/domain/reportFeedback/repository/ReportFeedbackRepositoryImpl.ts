import {Feedback} from "../../shared/model/Feedback";
import {child, Database, DatabaseReference, get, ref, set} from "@firebase/database";
import {FirebaseConnectionProvider} from "../../../infra/firebase/FirebaseConnectionProvider";
import {
    ADOPTION_FEEDBACK_PATH,
    ADOPTION_PATH,
    ANIMAL_PATH,
    DOCUMENT_FEEDBACK_PATH,
    REPORT_FEEDBACK_PATH
} from "../../utils/Consts";
import {generateUniqueDocumentId} from "../../utils/Helpers";
import {IReportFeedbackRepository} from "./IReportFeedbackRepository";

export class ReportFeedbackRepositoryImpl implements IReportFeedbackRepository {
    private readonly database: Database;
    private readonly dbRef: DatabaseReference;

    constructor() {
        this.database = FirebaseConnectionProvider.getDb()
        this.dbRef = ref(this.database)
    }

    async getAll(): Promise<Feedback[]> {
        return get(child(this.dbRef, REPORT_FEEDBACK_PATH))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const values = snapshot.val();
                    return Object.values(values) as Feedback[]
                }
            })
            .catch((err) => {
                throw err;
            });
    }

    async registerReportFeedback(feedBack: Feedback): Promise<boolean> {
        const documentId = generateUniqueDocumentId();

        feedBack["id"] = documentId

        const result = await set(ref(this.database,  REPORT_FEEDBACK_PATH + '/' + documentId), feedBack)
            .then(() => true)
            .catch(() => false)

        return result
    }
}