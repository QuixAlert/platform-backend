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

export function mapToReportData(reportF: ReportF): any {
  return {
    idPostagem: reportF.id,
    idUsuario: reportF.userId,
    tituloDenuncia: reportF.title,
    descricaoDenuncia: reportF.description,
    possivelSolucao: reportF.possibleSolution,
    caminhoFoto: reportF.picturePath,
    atendido: reportF.attended,
    horaOcorrencia: reportF.incidentTime,
    dataOcorrencia: reportF.incidentData,
    localOcorrencia: reportF.incidentLocation
  }
}