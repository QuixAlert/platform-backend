import {child, Database, DatabaseReference, get, ref} from "@firebase/database";
import {FirebaseConnectionProvider} from "../../../infra/firebase/FirebaseConnectionProvider";
import {DOCS_PATH, REPORT_PATH} from "../../utils/Consts";
import {mapReportData} from "../../report/model/ReportMapper";
import {mapToDocument} from "../model/DocumentMapper";

export class DocumentRepositoryImpl implements IDocumentRepository {
    private readonly database: Database;
    private readonly dbRef: DatabaseReference;

    constructor() {
        this.database = FirebaseConnectionProvider.getDb()
        this.dbRef = ref(this.database)
    }

    async getAll(): Promise<DocumentF[]> {
        return get(child(this.dbRef, DOCS_PATH))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const values = snapshot.val();
                    return Object.values(values)
                        .map(
                            (documentData: any) => Object.values(documentData).map((documentDataIn: any) => mapToDocument(documentDataIn))
                        ).flat();
                }
            })
            .catch((err) => {
                throw err;
            });
    }

    async getByDocumentId(documentId: String): Promise<DocumentF> {
        try {
            const snapshot = await get(child(this.dbRef, DOCS_PATH));

            if (snapshot.exists()) {
                const documentSnap = snapshot.val();

                const document = Object.values(documentSnap)
                    .map((reportDataIn: any) => Object.values(reportDataIn).map(mapToDocument))
                    .flat()
                    .find(report => report.id == documentId)

                return document

            }
        } catch (err) {
            throw err;
        }
        return null;
    }


    async getByUserId(userId: String): Promise<DocumentF[]> {
        try {
            const snapshot = await get(child(this.dbRef, DOCS_PATH));

            if (snapshot.exists()) {
                const documentSnap = snapshot.val();
                const documents = Object.values(documentSnap[userId.valueOf()]).map(mapToDocument)

                return documents
            }
        } catch (err) {
            throw err;
        }
        return null;
    }
}