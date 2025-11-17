# 🧠 Ejercicios interactivos — Comandos CMD

A continuación puedes practicar los comandos vistos en clase.  
Escribe el comando correcto en cada campo y pulsa **Comprobar**.

---

## 🗂️ Navegación y Directorios

<div class="exercise">
  <p><strong>1.</strong> Mostrar el contenido de la carpeta actual:</p>
  <input id="cmd1" placeholder="Escribe el comando...">
  <button onclick="check('cmd1', 'dir')">Comprobar</button>
  <span id="res1"></span>
</div>

<div class="exercise">
  <p><strong>2.</strong> Subir un nivel en la jerarquía:</p>
  <input id="cmd2" placeholder="Escribe el comando...">
  <button onclick="check('cmd2', 'cd ..')">Comprobar</button>
  <span id="res2"></span>
</div>

<div class="exercise">
  <p><strong>3.</strong> Mostrar solo los nombres de archivos sin detalles:</p>
  <input id="cmd3" placeholder="Escribe el comando...">
  <button onclick="check('cmd3', 'dir /b')">Comprobar</button>
  <span id="res3"></span>
</div>

---

## 🗃️ Archivos

<div class="exercise">
  <p><strong>4.</strong> Copiar todos los archivos `.txt` al directorio <code>D:\Backup</code>:</p>
  <input id="cmd4" placeholder="Escribe el comando...">
  <button onclick="check('cmd4', 'copy *.txt d:\\backup')">Comprobar</button>
  <span id="res4"></span>
</div>

<div class="exercise">
  <p><strong>5.</strong> Eliminar todos los archivos <code>.tmp</code> del directorio actual sin pedir confirmación:</p>
  <input id="cmd5" placeholder="Escribe el comando...">
  <button onclick="check('cmd5', 'del /q *.tmp')">Comprobar</button>
  <span id="res5"></span>
</div>

---

## 🧩 Retos combinados

<div class="exercise">
  <p><strong>6.</strong> Crear una carpeta llamada <code>Proyectos2025</code> y entrar en ella (un solo comando):</p>
  <input id="cmd6" placeholder="Escribe el comando...">
  <button onclick="check('cmd6', 'mkdir proyectos2025 && cd proyectos2025')">Comprobar</button>
  <span id="res6"></span>
</div>

---

<script>
function normalize(str){
  return str.trim().toLowerCase().replace(/\s+/g,' ');
}

function check(id, correct){
  const input = document.getElementById(id).value;
  const result = document.getElementById('res'+id.replace('cmd',''));
  if(normalize(input) === normalize(correct)){
    result.innerHTML = "✅ ¡Correcto!";
    result.style.color = "green";
  } else {
    result.innerHTML = "❌ Inténtalo de nuevo";
    result.style.color = "red";
  }
}
</script>

<style>
.exercise {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  padding: 1rem;
  border-radius: 0.75rem;
  margin-bottom: 1rem;
}
.exercise input {
  padding: 6px;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 60%;
}
.exercise button {
  margin-left: 0.5rem;
  padding: 6px 10px;
  border: none;
  border-radius: 6px;
  background: #3b82f6;
  color: white;
  cursor: pointer;
}
.exercise button:hover {
  background: #2563eb;
}
.exercise span {
  margin-left: 0.5rem;
  font-weight: 600;
}
</style>
