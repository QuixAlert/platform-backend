export function mapToDocument(documentData: any): DocumentF {
    return {
        id: documentData.idDocumento,
        userId: documentData.idUsuario,
        description: documentData.descricaoDocumento,
        picturePath: documentData.caminhoFoto,
        incidentLocation: documentData.localOcorrencia,
        reportType: documentData.tipoDenuncia,
        requestingName: documentData.nomeSolicitante,
        requestingDocument:documentData.documentoSolicitante
    }
}