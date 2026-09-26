# LABORATORIO 1

1. Indique el Token Único que generó para este trabajo.
    
    peylw-2026-practicos-apelahnz-2743-10

2. ¿Qué salida obtuvo de ejecutar git status justo antes de realizar su primer commit? (Copie y pegue la salida literal).

    No pude ejecutar git status antes del primer commit, pero sí antes del segundo.

    On branch main
    Your branch is up to date with 'origin/main'.

    Untracked files:
    (use "git add <file>..." to include in what will be committed)
            README.md
            REFLEXION.md
            capturas/

    nothing added to commit but untracked files present (use "git add" to track)

3. Explique con sus palabras cuál es la diferencia entre el área de preparación (staging area) y el directorio de trabajo (working directory) de Git.

    El área de preparación es el sector donde se presenta una preview de los commits antes de ser ejecutados. Eso te permite decidir qué cambios hacer y cuándo hacerlos, mientras que el directorio de trabajo es solamente el área donde se presentan todos los archivos del repositorio git y sus commits.




# LABORATORIO 2

1. El nombre de la imagen insertada es `mi_img.jpg`, y su alt figura como `Mi imagen personal`.

2. Es fundamental porque nos ayuda a organizarnos en el código fácilmente con etiquetas. Creo que la parte más relevante está en que, cuando se oculta el contenido de una etiqueta, uno puede guiarse por su mismo nombre. Esto no sería posible si usamos siempre las etiquetas div, puesto que ocultan todo el contenido exceptuando su nombre. En códigos grandes esto genera un caos de div's y hay que ir leyendo el contenido de cada uno para entender qué es lo que se está poniendo dentro, o renombrarlo manualmente con un ID.

3. Las rutas serán siempre correctas mientras estén enlazadas mediante una dirección relativa a la carpeta de origen. Si tengo todos mis archivos en una misma carpeta y hago una redirección directa a un segundo archivo en esa misma carpeta, no debería fallar. Lo mismo si desde la misma carpeta de origen se intenta acceder a otra carpeta y de ahí a un archivo.





# LABORATORIO 3

1.  <div class="form-group">
    <label for="codigo-postal">Código Postal:</label>
    <input 
        type="text" 
        id="codigo-postal" 
        name="codigo_postal" 
        required
        pattern="^[A-Z]\d{4}[A-Z]{3}$" 
        title="El formato debe ser una letra mayúscula, cuatro números y tres letras mayúsculas (Ej: R8500AAF)."
        placeholder="Ej: R8500AAF">
    </div>

2. La etiqueta <label> sirve para asignar una descripción textual a un campo de un formulario, como un <input>, con el fin de mejorar la accesibilidad y la usabilidad, ya que al hacer clic sobre el texto de la etiqueta el foco se traslada automáticamente al campo asociado, además de ser narrado para las personas con discapacidades visuales. La forma de asociarla a un campo específico es con el atributo for, y su valor debe coincidir exactamente con el atributo id del campo de entrada correspondiente.

3. Cuando varios botones de radio comparten el mismo valor en el atributo name, el navegador los trata como parte de un mismo grupo: solo uno de ellos puede estar seleccionado a la vez, y al marcar uno se desmarca automáticamente cualquier otro del grupo. En cambio, si los radio buttons tienen atributos name diferentes, el navegador los considera independientes, y por lo tanto cada uno puede marcarse o desmarcarse sin afectar a los demás.

