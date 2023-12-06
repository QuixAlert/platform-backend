interface IDocumentRepository {
    getAll(): Promise<DocumentF[]>
    getByDocumentId(documentId: String): Promise<DocumentF>
    getByUserId(userId: String): Promise<DocumentF[]>
}