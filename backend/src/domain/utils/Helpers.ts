export function generateUniqueDocumentId(): string {
    return new Date().getTime().toString();
}