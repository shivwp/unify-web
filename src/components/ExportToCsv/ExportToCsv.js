import React from "react";

const startDownloadCsv = (input, fileName = "test-csv") => {
  const blob = new Blob([input], { type: "application/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.download = `${fileName}.csv`;
  a.href = url;
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
};

const ExportToCsv = (data, fileName) => {
  const headers = Object.keys(data[0])?.toString();
  const main = data?.map((item) => {
    return Object.values(item).toString();
  });

  const csv = [headers, ...main].join("\n");
  startDownloadCsv(csv, fileName);
};

export default ExportToCsv;
