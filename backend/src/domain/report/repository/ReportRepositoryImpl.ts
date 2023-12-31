import {child, Database, DatabaseReference, get, ref, set} from "@firebase/database";
import {FirebaseConnectionProvider} from "../../../infra/firebase/FirebaseConnectionProvider";
import {REPORT_PATH} from "../../utils/Consts";
import {mapReportData, mapToReportData} from "../model/ReportMapper";

export class ReportRepositoryImpl implements IReportRepository {
    private readonly database: Database;
    private readonly dbRef: DatabaseReference;

    constructor() {
        this.database = FirebaseConnectionProvider.getDb()
        this.dbRef = ref(this.database)
    }

    async changeStatusReport(reportId: string): Promise<boolean> {
      try {
          // Use getByReportId to find the report
          const report = await this.getByReportId(reportId);
  
          if (report) {
              // Update the "atendido" attribute
              report.attended = true;
  
              // Update the report in the database
              const reportRef = ref(this.database, REPORT_PATH + '/' + report.userId + '/' + report.id);
              await set(reportRef, mapToReportData(report));
  
              return true;
          } else {
              console.log(`Report with ID ${reportId} not found.`);
              return false;
          }
      } catch (error) {
          console.error('Error updating report status:', error);
          return false;
      }
  }

    async getAll(): Promise<ReportF[]> {
        return get(child(this.dbRef, REPORT_PATH))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const values = snapshot.val();
                    return Object.values(values)
                        .map(
                            (reportData: any) => Object.values(reportData).map((reportDataIn: any) => mapReportData(reportDataIn))
                        ).flat();
                }
            })
            .catch((err) => {
                throw err;
            });
    }

    async getByReportId(reportId: String): Promise<ReportF> {
        try {
            const snapshot = await get(child(this.dbRef, REPORT_PATH));

            if (snapshot.exists()) {
                const reportSnap = snapshot.val();

                return Object.values(reportSnap)
                    .map((reportDataIn: any) => Object.values(reportDataIn).map(mapReportData))
                    .flat()
                    .find(report => report.id == reportId)

            }
        } catch (err) {
            throw err;
        }
        return null;
    }


    async getByUserId(userId: String): Promise<ReportF[]> {
        try {
            const snapshot = await get(child(this.dbRef, REPORT_PATH));

            if (snapshot.exists()) {
                const reportSnap = snapshot.val();
                return Object.values(reportSnap[userId.valueOf()]).map(mapReportData)
            }
        } catch (err) {
            throw err;
        }
        return null;
    }
}