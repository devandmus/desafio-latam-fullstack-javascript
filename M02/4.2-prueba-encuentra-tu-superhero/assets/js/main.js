const heroId = document.querySelector('#heroId');

const insertHTML = data => {
  document.querySelector('#result').innerHTML = `
  <p class="text-center">SuperHero Encontrado</p>
  <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${data.image.url}" class="img-fluid rounded-start" alt="">
    </div>
    <div class="col-md-8 pl-md-0">
      <div class="card-body pl-0">
        <h5 class="card-title">Nombre: ${data.biography['full-name']}</h5>
        <p class="card-text">
            Conexiones: ${data.connections['group-affiliation']}
        </p>
        <div class="font-italic p-3">
            <p class="m-0">Publicado por: ${data.biography.publisher}</p>
            <hr>
            <p class="m-0">Ocupación: ${data.work.occupation}</p>
            <hr>
            <p class="m-0">Primera Aparición: ${data.biography['first-appearance']}</p>
            <hr>            
            <p class="m-0">Altura: ${data.appearance.height.join(' - ')}</p>
            <hr>  
            <p class="m-0">Peso: ${data.appearance.weight.join(' - ')}</p>
            <hr>            
            <p class="m-0">Alianzas: ${data.biography.aliases.join(' ')}</p>
        </div>
      </div>
    </div>
  </div>
  </div>
  `;
}

const setChart = data => {
  const { powerstats } = data;
  const dataPoints = Object.keys(powerstats).map(key => ({
    y: powerstats[key],
    label: key,
  }));
  const chart = new CanvasJS.Chart("chart", {
    animationEnabled: false,
    title: {
      text: 'Estadísticas de Poder para ' + data.name
    },
    data: [{
      type: "pie",
      startAngle: 25,
      toolTipContent: "<b>{label}</b>: {y}",
      showInLegend: "true",
      legendText: "{label}",
      indexLabelFontSize: 16,
      indexLabel: "{label} - {y}%",
      dataPoints: dataPoints
    }]
  });
  chart.render();
}

const getHero = () => {
  const value = parseInt(heroId.value);
  if (value > 0 && value < 732) {
    loading.on();
    $.ajax({
      url: `https://www.superheroapi.com/api.php/1042186496522905/${value}`,
      type: 'GET',
      success: function(data){
        insertHTML(data);
        setChart(data);
        loading.off();
      }
    });
  }
  else alert('Debes elegir un número válido entre 1 y 731');
}

const loading = {
  on() {
    document.querySelector('#loading').innerHTML = '<h1 class="text-center w-100 py-5">Cargando SuperHero...</h1>';
    document.querySelector('#result').innerHTML = '';
    document.querySelector('#chart').innerHTML = '';
  },
  off() {
    document.querySelector('#loading').innerHTML = '';
  }
}
