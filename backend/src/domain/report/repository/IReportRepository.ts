interface IReportRepository {
    getAll(): Promise<ReportF[]>
    getByReportId(reportId: String): Promise<ReportF>
    getByUserId(userId: String): Promise<ReportF[]>
}