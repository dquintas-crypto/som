# 🧠 Verificador de Comandos CMD

Sube el archivo con el historial de tus comandos (`mis_comandos.txt`) para comprobar tus resultados.

<input type="file" id="fileInput" accept=".txt">
<button onclick="checkCommands()">Verificar</button>

<div id="resultados"></div>


<script>
const expected = [
  {desc: "Listar el contenido del directorio actual", cmd: "dir"},
  {desc: "Mostrar solo los nombres sin detalles", cmd: "dir /b"},
  {desc: "Subir un nivel", cmd: "cd .."},
  {desc: "Crear carpeta Proyectos2025", cmd: "mkdir proyectos2025"},
  {desc: "Eliminar carpeta temporal", cmd: "rmdir temporal"},
  {desc: "Mostrar árbol de directorios", cmd: "tree /f"}
];

function normalize(str){
  return str.toLowerCase().replace(/\s+/g,' ').trim();
}

function checkCommands(){
  const fileInput = document.getElementById('fileInput');
  const resultados = document.getElementById('resultados');
  resultados.innerHTML = "";

  if(!fileInput.files.length){
    resultados.innerHTML = "<p style='color:orange;'>⚠️ Por favor, selecciona un archivo.</p>";
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e){
    const content = e.target.result;
    const lines = content.split('\n').map(normalize).filter(l => l);
    
    let correctas = 0;
    let output = "<h3>📋 Resultados:</h3><ul style='list-style:none; padding:0;'>";

    expected.forEach(t => {
      const encontrado = lines.some(line => line.includes(normalize(t.cmd)));
      if(encontrado){
        output += `<li style='margin:0.5rem 0; color:green;'>✅ ${t.desc}</li>`;
        correctas++;
      } else {
        output += `<li style='margin:0.5rem 0; color:red;'>❌ ${t.desc}<br><code style='background:#f0f0f0; padding:0.2rem 0.4rem;'>${t.cmd}</code></li>`;
      }
    });

    output += "</ul>";
    output += `<hr><p><strong>Puntuación: ${correctas}/${expected.length}</strong></p>`;
    resultados.innerHTML = output;
  };
  reader.readAsText(fileInput.files[0]);
}
</script>

<style>
button {
  padding: 0.5rem 1rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 0.5rem;
}

button:hover {
  background: #0056b3;
}

#fileInput {
  margin-right: 0.5rem;
}

#resultados ul { list-style-type: none; padding-left: 0; }
#resultados li { margin: 0.4rem 0; }
</style>
