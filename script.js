document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("cadastroForm");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const data = {
      tipo: document.getElementById("tipo").value || "anônimo",
      nome: document.getElementById("nome").value || "anônimo",
      cpf: document.getElementById("cpf").value || "anônimo",
      whatsapp: document.getElementById("whatsapp").value || "anônimo",
      endereco: document.getElementById("endereco").value || "anônimo",
      mei: document.getElementById("mei").value || "anônimo",
      cnpj: document.getElementById("cnpj").value || "anônimo",
      email: document.getElementById("email").value || "anônimo",
      cnh: document.getElementById("cnh").value || "anônimo",
      endcomercial: document.getElementById("endcomercial").value || "anônimo",
      endresidencial: document.getElementById("endresidencial").value || "anônimo",
      pai: document.getElementById("pai").value || "anônimo",
      mae: document.getElementById("mae").value || "anônimo",
      whatsapp2: document.getElementById("whatsapp2").value || "anônimo",
      data_envio: new Date().toLocaleString("pt-BR")
    };

    const webhookURL = "https://hook.us2.make.com/2pb32fhzkiuo90xeq816jkr7ocou9zko";

    try {
      const response = await fetch(webhookURL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (response.ok) {
        alert("✅ Cadastro enviado com sucesso!");
        form.reset();
      } else {
        alert("❌ Erro ao enviar cadastro. Tente novamente.");
      }
    } catch (error) {
      alert("❌ Erro ao conectar com o servidor.");
    }
  });
});
