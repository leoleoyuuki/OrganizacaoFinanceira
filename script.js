function calcularSaldo() {
    const salario = parseFloat(document.getElementById("salario").value) || 0;
    const valeRefeicao = parseFloat(document.getElementById("valeRefeicao").value) || 0;
    const gastoValeRefeicao = parseFloat(document.getElementById("gastoValeRefeicao").value) || 0;
    const valeAlimentacao = parseFloat(document.getElementById("valeAlimentacao").value) || 0;
    const gastoValeAlimentacao = parseFloat(document.getElementById("gastoValeAlimentacao").value) || 0;
    const gastoCartao = parseFloat(document.getElementById("gastoCartao").value) || 0;
    const gastoCasa = parseFloat(document.getElementById("gastoCasa").value) || 0;
    const gastoLazer = parseFloat(document.getElementById("gastoLazer").value) || 0;
  
    const totalEntradas = salario + valeRefeicao + valeAlimentacao;
    const totalGastos = gastoValeRefeicao + gastoValeAlimentacao + gastoCartao + gastoCasa + gastoLazer;
    const saldoFinal = totalEntradas - totalGastos;
  
    document.getElementById("saldoFinal").textContent = saldoFinal.toFixed(2);
  
    gerarGrafico([gastoValeRefeicao, gastoValeAlimentacao, gastoCartao, gastoCasa, gastoLazer]);
  }
  
  function gerarGrafico(gastos) {
    const ctx = document.getElementById("gastosChart").getContext("2d");
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Vale Refeição", "Vale Alimentação", "Cartão de Crédito", "Casa", "Lazer"],
        datasets: [{
          label: "Gastos",
          data: gastos,
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0",
            "#9966FF"
          ],
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
      },
    });
  }
  