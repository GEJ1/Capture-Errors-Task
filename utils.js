fin_del_experimento = function (content, rank, total) {
      content.innerHTML += "<h3>Estás en el puesto " + rank + "de " + total + "</h3>";
      content.innerHTML +=
        "<h4>Tu identificación anónima es <code>" + subject_id + "</code></h4>";
    } 