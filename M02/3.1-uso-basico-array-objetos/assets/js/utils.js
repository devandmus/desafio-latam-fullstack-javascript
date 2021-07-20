const printFirstAndLast = data => {
  const first = data.slice(0, 1).pop()
  const last = data.slice(-1).pop()
  document.write(`<p>Primera atención: ${first.paciente} - ${first.prevision} | Última atención: ${last.paciente} - ${last.prevision}.</p>`)
}

const printTable = data => {
  document.write(`
    <table>
      <thead>
        <tr>
          <th>HORA</th>
          <th>ESPECIALISTA</th>
          <th>PACIENTE</th>
          <th>RUT</th>
          <th>PREVISIÓN</th>
        </tr>
      </thead>
      <tbody>
        ${data.map(row => `
          <tr>
            <td>${row.hora}</td>
            <td>${row.especialista}</td>
            <td>${row.paciente}</td>
            <td>${row.rut}</td>
            <td>${row.prevision}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `);
}
