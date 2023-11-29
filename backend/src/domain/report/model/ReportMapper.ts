export function mapReportData(reportData: any): ReportF {
    return {
        id: reportData.idPostagem,
        userId: reportData.idUsuario,
        title: reportData.tituloDenuncia,
        description: reportData.descricaoDenuncia,
        possibleSolution: reportData.possivelSolucao,
        picturePath: reportData.caminhoFoto,
        attended: reportData.atendido,
        incidentTime: reportData.horaOcorrencia,
        incidentData: reportData.dataOcorrencia,
        incidentLocation:reportData.localOcorrencia
    }
}