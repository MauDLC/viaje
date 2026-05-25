const days = {
  martes: {
    title: "Martes",
    theme: "AM19 · Salida desde Lima",
    note: "Día de viaje para tu hermano: AM19 Lima-CDMX sale a las 11:00 pm.",
    area: "Lima / Colegio SDA / Aeropuerto Jorge Chávez",
    pace: "Logística",
    events: [
      {
        time: "7:30 pm",
        title: "Cerrar maleta y documentos",
        desc: "Revisar pasaporte, boleto, cargadores, dinero/tarjetas, líquidos y una muda ligera para la llegada a CDMX.",
        tone: "gold"
      },
      {
        time: "8:00 pm",
        title: "Salir del Colegio SDA hacia el aeropuerto de Lima",
        desc: "Traslado en taxi previo al AM19 de las 11:00 pm. Costo aprox: S/45-S/90, según zona exacta, app y demanda. Salir con margen por tráfico nocturno.",
        tone: "blue",
        links: [
          ["Ruta", "https://www.google.com/maps/dir/?api=1&origin=Colegio+SDA+Lima&destination=Aeropuerto+Internacional+Jorge+Ch%C3%A1vez&travelmode=driving"],
          ["Aeropuerto LIM", "https://www.lima-airport.com/"]
        ]
      },
      {
        time: "11:00 pm",
        title: "Salida AM19 Lima → Ciudad de México",
        desc: "Horario fijo de salida. Dormir lo más posible en el vuelo para aguantar el miércoles sin que se vuelva pesado.",
        tone: "blue",
        links: [
          ["AM19", "https://www.flightstats.com/v2/flight-tracker/AM/19"],
          ["Aeroméxico", "https://aeromexico.com/"]
        ]
      }
    ]
  },
  miercoles: {
    title: "Miércoles",
    theme: "AM19 + Historia Natural + Antropología",
    note: "Llegada del AM19 a CDMX a las 4:00 am: Historia Natural, Yakumanka, Antropología y La Lucha Polanco.",
    area: "AICM / Olivarito 62 / Chapultepec / Roma / Polanco",
    pace: "Completo pero lineal",
    events: [
      {
        time: "3:00 am",
        title: "Salir de Olivarito 62 hacia el AICM",
        desc: "Traslado en taxi estimado: 40 a 60 min. Costo aprox: $450-$750 MXN, según app, tarifa nocturna y terminal. Salir con margen para estar antes de la llegada de las 4:00 am.",
        tone: "blue",
        links: [
          ["Ruta", "https://www.google.com/maps/dir/?api=1&origin=Olivarito+62+Olivar+de+los+Padres+CDMX&destination=AICM&travelmode=driving"],
          ["AICM", "https://www.aicm.com.mx/"]
        ]
      },
      {
        time: "4:00 am",
        title: "Recibir AM19 en el AICM",
        desc: "Punto fijo del viaje. Lleva agua y algo ligero porque la llegada es muy temprano.",
        tone: "blue",
        links: [
          ["AICM", "https://www.aicm.com.mx/"],
          ["AM19", "https://www.flightstats.com/v2/flight-tracker/AM/19"],
          ["Mapa", "https://www.google.com/maps/search/?api=1&query=AICM+Terminal+1"]
        ]
      },
      {
        time: "5:30 am",
        title: "AICM a Olivarito 62",
        desc: "Traslado en taxi estimado: 50 a 75 min. Costo aprox: $500-$850 MXN, según taxi autorizado/app y demanda. Si migración o maletas tardan, este bloque se mueve.",
        tone: "blue",
        links: [
          ["Ruta", "https://www.google.com/maps/dir/?api=1&origin=AICM&destination=Olivarito+62+Olivar+de+los+Padres+CDMX&travelmode=driving"]
        ]
      },
      {
        time: "6:45 am",
        title: "Desayuno cerca del hospedaje",
        desc: "Mejor desayunar en Olivar de los Padres / San Ángel / Pedregal y guardar energía para el día.",
        links: [
          ["Cafés cerca", "https://www.google.com/maps/search/?api=1&query=cafe+desayuno+Olivar+de+los+Padres+CDMX"]
        ]
      },
      {
        time: "8:00 am",
        title: "Maletas + descanso corto",
        desc: "Dejar equipaje, ducha y pausa. Si el check-in es tarde, preguntar por resguardo de maletas.",
        tone: "gold"
      },
      {
        time: "9:45 am",
        title: "Salir al Museo de Historia Natural",
        desc: "Traslado estimado en transporte público desde Olivarito 62: 1 h 20 min a 1 h 50 min hacia Chapultepec.",
        tone: "blue",
        links: [
          ["Ruta", "https://www.google.com/maps/dir/?api=1&origin=Olivarito+62+Olivar+de+los+Padres+CDMX&destination=Museo+de+Historia+Natural+y+Cultura+Ambiental+CDMX&travelmode=transit"]
        ]
      },
      {
        time: "11:20 am",
        title: "Museo de Historia Natural y Cultura Ambiental",
        desc: "Plan perfecto para el primer día: interesante, bajo techo y dentro de Chapultepec. Horario oficial: martes a domingo, 10:00 a 17:00.",
        links: [
          ["Sitio oficial", "https://www.sedema.cdmx.gob.mx/programas/programa/museo-de-historia-natural-y-cultura-ambiental"],
          ["Mapa", "https://www.google.com/maps/search/?api=1&query=Museo+de+Historia+Natural+y+Cultura+Ambiental+CDMX"]
        ]
      },
      {
        time: "12:50 pm",
        title: "Traslado a Yakumanka Roma Norte",
        desc: "Traslado estimado en transporte público desde Chapultepec: 45 a 65 min. Yakumanka está en Guanajuato 138, Roma Norte.",
        tone: "blue",
        links: [
          ["Ruta", "https://www.google.com/maps/dir/?api=1&origin=Museo+de+Historia+Natural+y+Cultura+Ambiental+CDMX&destination=Yakumanka+Guanajuato+138+Roma+Norte+CDMX&travelmode=transit"]
        ]
      },
      {
        time: "2:00 pm",
        title: "Almuerzo en Yakumanka",
        desc: "Comida peruana para recibirlo con algo familiar y muy bueno. Reservar o llamar antes si quieren asegurar mesa.",
        tone: "terra",
        links: [
          ["Mapa", "https://www.google.com/maps/search/?api=1&query=Yakumanka+Guanajuato+138+Roma+Norte+CDMX"],
          ["Reservar", "https://www.google.com/search?q=Yakumanka+CDMX+reservar"]
        ]
      },
      {
        time: "3:45 pm",
        title: "Traslado a Museo Nacional de Antropología",
        desc: "Traslado estimado en transporte público desde Roma Norte: 45 a 65 min. Ir directo evita volver al hospedaje y deja más tiempo para el museo.",
        tone: "blue",
        links: [
          ["Ruta", "https://www.google.com/maps/dir/?api=1&origin=Yakumanka+Guanajuato+138+Roma+Norte+CDMX&destination=Museo+Nacional+de+Antropologia+CDMX&travelmode=transit"]
        ]
      },
      {
        time: "4:50 pm",
        title: "Museo Nacional de Antropología",
        desc: "Visita enfocada de 90 min a 2 horas: sala Mexica, Maya, Oaxaca y patio central. Mejor hacerlo bien que sumar otro museo con prisa.",
        links: [
          ["Sitio oficial", "https://www.inah.gob.mx/museos/museo-nacional-de-antropologia"],
          ["Mapa", "https://www.google.com/maps/search/?api=1&query=Museo+Nacional+de+Antropologia+CDMX"]
        ]
      },
      {
        time: "6:45 pm",
        title: "Paseo corto por Polanco",
        desc: "Caminar por Parque Lincoln o Masaryk antes de cenar. Mantenerlo ligero por la madrugada de llegada.",
        links: [
          ["Parque Lincoln", "https://www.google.com/maps/search/?api=1&query=Parque+Lincoln+Polanco"],
          ["Masaryk", "https://www.google.com/maps/search/?api=1&query=Avenida+Presidente+Masaryk+Polanco"]
        ]
      },
      {
        time: "7:45 pm",
        title: "Traslado a La Lucha Polanco",
        desc: "Traslado estimado en transporte público desde Antropología: 30 a 45 min. Reservar o revisar horario para no llegar justos.",
        tone: "blue",
        links: [
          ["Ruta", "https://www.google.com/maps/dir/?api=1&origin=Museo+Nacional+de+Antropologia+CDMX&destination=La+Lucha+Polanco+CDMX&travelmode=transit"]
        ]
      },
      {
        time: "8:30 pm",
        title: "Cena en La Lucha Polanco",
        desc: "Cierre del día en Polanco después de los museos. Mantener la cena sin alargar demasiado la noche.",
        tone: "terra",
        links: [
          ["Mapa", "https://www.google.com/maps/search/?api=1&query=La+Lucha+Polanco+CDMX"]
        ]
      },
      {
        time: "10:15 pm",
        title: "Regreso a Olivarito 62",
        desc: "Traslado estimado en transporte público de Polanco a Olivar de los Padres: 1 h 30 min a 2 h. Dormir temprano; el jueves será Coyoacán/San Ángel y Oaxtepec queda para viernes.",
        tone: "blue",
        links: [
          ["Ruta", "https://www.google.com/maps/dir/?api=1&origin=La+Lucha+Polanco+CDMX&destination=Olivarito+62+Olivar+de+los+Padres+CDMX&travelmode=transit"]
        ]
      }
    ]
  },
  jueves: {
    title: "Jueves",
    theme: "Coyoacán + San Ángel + Roma Norte",
    note: "Día mexicano completo pero más ligero: Frida, Coyoacán, San Ángel/UNAM y cena tranquila antes de Oaxtepec.",
    area: "Olivarito 62 / Coyoacán / San Ángel / Roma Norte",
    pace: "Completo",
    events: [
      {
        time: "8:00 am",
        title: "Salir de Olivarito 62 a Coyoacán",
        desc: "Traslado estimado en transporte público: 1 h 10 min a 1 h 40 min. Salir con margen porque Casa Azul suele ser estricta con horarios.",
        tone: "blue",
        links: [
          ["Ruta", "https://www.google.com/maps/dir/?api=1&origin=Olivarito+62+Olivar+de+los+Padres+CDMX&destination=Museo+Frida+Kahlo+Casa+Azul&travelmode=transit"]
        ]
      },
      {
        time: "9:30 am",
        title: "Museo Frida Kahlo / Casa Azul",
        desc: "Comprar boletos con anticipación. Es de los sitios con más demanda turística.",
        links: [
          ["Casa Azul", "https://www.museofridakahlo.org.mx/"],
          ["Boletos", "https://boletos.museofridakahlo.org.mx/"]
        ]
      },
      {
        time: "11:30 am",
        title: "Centro de Coyoacán",
        desc: "Jardín Centenario, parroquia, mercado y calles para caminar.",
        links: [
          ["Mapa", "https://www.google.com/maps/search/?api=1&query=Jardin+Centenario+Coyoacan"]
        ]
      },
      {
        time: "1:00 pm",
        title: "Comida en Coyoacán",
        desc: "Buscar antojitos, tostadas o una comida sentada antes de moverse hacia San Ángel/UNAM.",
        tone: "terra",
        links: [
          ["Restaurantes", "https://www.google.com/maps/search/?api=1&query=comida+Coyoacan+CDMX"]
        ]
      },
      {
        time: "2:20 pm",
        title: "Traslado a San Ángel",
        desc: "Traslado estimado en transporte público desde Coyoacán: 35 a 55 min. Es una opción cercana, bonita y más ligera antes de la noche.",
        tone: "blue",
        links: [
          ["Ruta", "https://www.google.com/maps/dir/?api=1&origin=Centro+de+Coyoacan+CDMX&destination=San+Angel+CDMX&travelmode=transit"]
        ]
      },
      {
        time: "3:20 pm",
        title: "San Ángel y Bazaar Sábado",
        desc: "Caminar por Plaza San Jacinto, calles empedradas, galerías y cafés. Si no es sábado, sigue siendo buena zona para pasear.",
        links: [
          ["Plaza San Jacinto", "https://www.google.com/maps/search/?api=1&query=Plaza+San+Jacinto+San+Angel+CDMX"],
          ["Bazaar Sábado", "https://www.google.com/maps/search/?api=1&query=Bazaar+Sabado+San+Angel+CDMX"]
        ]
      },
      {
        time: "5:00 pm",
        title: "Biblioteca Central UNAM o MUAC",
        desc: "Elegir según energía: foto rápida en Biblioteca Central / Rectoría o visita breve al MUAC si quieren museo contemporáneo.",
        links: [
          ["Biblioteca Central", "https://www.google.com/maps/search/?api=1&query=Biblioteca+Central+UNAM"],
          ["MUAC", "https://muac.unam.mx/"]
        ]
      },
      {
        time: "6:20 pm",
        title: "Traslado directo a Roma Norte",
        desc: "Traslado estimado en transporte público desde UNAM/San Ángel: 1 h a 1 h 25 min. Ir directo evita regresar al hospedaje y cruzar la ciudad dos veces.",
        tone: "blue",
        links: [
          ["Ruta", "https://www.google.com/maps/dir/?api=1&origin=Biblioteca+Central+UNAM&destination=Roma+Norte+CDMX&travelmode=transit"]
        ]
      },
      {
        time: "7:45 pm",
        title: "Cena y paseo corto en Roma Norte",
        desc: "Elegir algo rico y regresar temprano. Buen cierre sin castigar la salida a Oaxtepec del viernes.",
        links: [
          ["Restaurantes", "https://www.google.com/maps/search/?api=1&query=restaurantes+Roma+Norte+CDMX"],
          ["Cafés", "https://www.google.com/maps/search/?api=1&query=cafes+Roma+Norte+CDMX"]
        ]
      },
      {
        time: "9:45 pm",
        title: "Regreso al hospedaje",
        desc: "Traslado estimado en transporte público Roma Norte a Olivarito 62: 1 h 20 min a 1 h 50 min. Dormir lo antes posible para salir temprano.",
        tone: "blue",
        links: [
          ["Ruta", "https://www.google.com/maps/dir/?api=1&origin=Roma+Norte+CDMX&destination=Olivarito+62+Olivar+de+los+Padres+CDMX&travelmode=transit"]
        ]
      }
    ]
  },
  viernes: {
    title: "Viernes",
    theme: "Six Flags Hurricane Harbor Oaxtepec",
    note: "Día completo de parque acuático, saliendo primero hacia Terminal del Sur / Taxqueña para tomar transporte a Oaxtepec.",
    area: "Olivarito 62 / Terminal del Sur / Oaxtepec",
    pace: "Excursión de día completo",
    events: [
      {
        time: "5:45 am",
        title: "Salir de Olivarito 62 hacia Terminal del Sur",
        desc: "Traslado estimado en transporte público a Taxqueña: 1 h 20 min a 1 h 50 min. Salir temprano para comprar boletos o ubicar la salida sin prisas.",
        tone: "blue",
        links: [
          ["Ruta", "https://www.google.com/maps/dir/?api=1&origin=Olivarito+62+Olivar+de+los+Padres+CDMX&destination=Terminal+Central+del+Sur+Taxque%C3%B1a&travelmode=transit"],
          ["Terminal del Sur", "https://www.google.com/maps/search/?api=1&query=Terminal+Central+del+Sur+Taxque%C3%B1a"]
        ]
      },
      {
        time: "7:40 am",
        title: "Terminal del Sur a Oaxtepec",
        desc: "Considerar 1 h 45 min a 2 h 30 min de camino, más espera de autobús. Revisar salida disponible el día anterior.",
        tone: "blue",
        links: [
          ["Ruta", "https://www.google.com/maps/dir/?api=1&origin=Terminal+Central+del+Sur+Taxque%C3%B1a&destination=Six+Flags+Hurricane+Harbor+Oaxtepec&travelmode=transit"],
          ["Autobuses", "https://www.google.com/search?q=Terminal+del+Sur+Taxque%C3%B1a+Oaxtepec+autob%C3%BAs"]
        ]
      },
      {
        time: "10:30 am",
        title: "Entrada a Six Flags Hurricane Harbor Oaxtepec",
        desc: "Confirmar horario operativo del día en el calendario oficial antes de comprar y salir.",
        links: [
          ["Sitio oficial", "https://www.sixflags.com.mx/hurricaneharboroaxtepec"],
          ["Calendario", "https://www.sixflags.com.mx/hurricaneharboroaxtepec/plan-your-visit/park-hours"],
          ["Mapa", "https://www.google.com/maps/search/?api=1&query=Six+Flags+Hurricane+Harbor+Oaxtepec"]
        ]
      },
      {
        time: "1:00 pm",
        title: "Comida dentro o cerca del parque",
        desc: "Hacer una pausa larga para no quemarse con el sol. Revisar reglas del parque sobre alimentos externos.",
        tone: "terra",
        links: [
          ["Restaurantes cerca", "https://www.google.com/maps/search/?api=1&query=restaurantes+cerca+de+Six+Flags+Hurricane+Harbor+Oaxtepec"]
        ]
      },
      {
        time: "2:30 pm",
        title: "Toboganes y albercas principales",
        desc: "Priorizar las atracciones fuertes primero y dejar albercas o río lento para el cierre.",
        links: [
          ["Atracciones", "https://www.sixflags.com.mx/hurricaneharboroaxtepec/things-to-do/all-rides"]
        ]
      },
      {
        time: "5:00 pm",
        title: "Salida del parque hacia Terminal del Sur",
        desc: "Cambiarse, revisar que no falte nada y ubicar el transporte de regreso. Considerar 2 h a 3 h hasta Taxqueña contando espera.",
        tone: "blue",
        links: [
          ["Ruta", "https://www.google.com/maps/dir/?api=1&origin=Six+Flags+Hurricane+Harbor+Oaxtepec&destination=Terminal+Central+del+Sur+Taxque%C3%B1a&travelmode=transit"]
        ]
      },
      {
        time: "8:00 pm",
        title: "Terminal del Sur a Olivarito 62",
        desc: "Traslado estimado en transporte público desde Taxqueña: 1 h 20 min a 1 h 50 min. Revisar la última conexión disponible al llegar.",
        tone: "blue",
        links: [
          ["Ruta", "https://www.google.com/maps/dir/?api=1&origin=Terminal+Central+del+Sur+Taxque%C3%B1a&destination=Olivarito+62+Olivar+de+los+Padres+CDMX&travelmode=transit"]
        ]
      },
      {
        time: "9:30 pm",
        title: "Cena tranquila en CDMX",
        desc: "Plan flexible según cansancio. Mejor cerca del hospedaje.",
        links: [
          ["Cena cerca", "https://www.google.com/maps/search/?api=1&query=cena+cerca+de+mi+CDMX"]
        ]
      }
    ]
  },
  sabado: {
    title: "Sábado",
    theme: "AM46 · Salida a Lima",
    note: "AM46 CDMX-Lima sale a las 9:00 am, así que la mañana queda enfocada en llegar temprano al aeropuerto.",
    area: "AICM",
    pace: "Salida",
    events: [
      {
        time: "4:45 am",
        title: "Despertar y cerrar maletas",
        desc: "Revisar pasaportes, cargadores, líquidos y documentos del vuelo.",
        tone: "gold"
      },
      {
        time: "5:45 am",
        title: "Salir hacia el AICM",
        desc: "Traslado en taxi estimado desde Olivarito 62: 50 a 80 min. Costo aprox: $450-$750 MXN. Salir 5:45 am para llegar alrededor de 6:45-7:05 am.",
        tone: "blue",
        links: [
          ["Ruta", "https://www.google.com/maps/dir/?api=1&origin=Olivarito+62+Olivar+de+los+Padres+CDMX&destination=AICM&travelmode=driving"]
        ]
      },
      {
        time: "6:45 am",
        title: "Llegar al AICM con margen",
        desc: "Llegar alrededor de esta hora da margen para documentación, seguridad y cualquier fila antes del AM46.",
        links: [
          ["AICM", "https://www.aicm.com.mx/"]
        ]
      },
      {
        time: "9:00 am",
        title: "Salida AM46 CDMX → Lima",
        desc: "Horario fijo de salida.",
        links: [
          ["AICM", "https://www.aicm.com.mx/"],
          ["AM46", "https://www.flightstats.com/v2/flight-tracker/AM/46"],
          ["Aeroméxico", "https://aeromexico.com/"]
        ]
      }
    ]
  }
};

const tabs = document.querySelectorAll(".tab");
const dayBrief = document.querySelector("#dayBrief");
const timeline = document.querySelector("#timeline");
const printButton = document.querySelector("#printPlan");

function icon(name) {
  return `<i data-lucide="${name}"></i>`;
}

function renderDay(dayKey) {
  const day = days[dayKey];

  if (dayKey === "todo") {
    renderAllDays();
    return;
  }

  dayBrief.innerHTML = `
    <p class="eyebrow">${day.theme}</p>
    <strong>${day.title}</strong>
    <p>${day.note}</p>
    <div class="meta">
      <span>${icon("map-pin")} ${day.area}</span>
      <span>${icon("activity")} Ritmo: ${day.pace}</span>
    </div>
  `;

  timeline.innerHTML = day.events
    .map((event) => {
      const links = event.links
        ? `<div class="links">${event.links
            .map(([label, href]) => `<a href="${href}" target="_blank" rel="noreferrer">${icon("external-link")}${label}</a>`)
            .join("")}</div>`
        : "";

      return `
        <li class="event" data-tone="${event.tone || "green"}">
          <div class="time">${event.time}</div>
          <div>
            <h3>${event.title}</h3>
            <p>${event.desc}</p>
            ${links}
          </div>
        </li>
      `;
    })
    .join("");

  tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.day === dayKey));
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function renderAllDays() {
  dayBrief.innerHTML = `
    <p class="eyebrow">Itinerario completo</p>
    <strong>Martes a sábado</strong>
    <p>Vista general para revisar, compartir o imprimir todo el plan turístico de CDMX.</p>
    <div class="meta">
      <span>${icon("calendar-days")} 5 días</span>
      <span>${icon("plane")} Llegada y salida por AICM</span>
    </div>
  `;

  timeline.innerHTML = Object.entries(days)
    .map(([key, day]) => {
      const events = day.events
        .map((event) => {
          const links = event.links
            ? `<div class="links">${event.links
                .map(([label, href]) => `<a href="${href}" target="_blank" rel="noreferrer">${icon("external-link")}${label}</a>`)
                .join("")}</div>`
            : "";

          return `
            <li class="event" data-tone="${event.tone || "green"}">
              <div class="time">${event.time}</div>
              <div>
                <h3>${event.title}</h3>
                <p>${event.desc}</p>
                ${links}
              </div>
            </li>
          `;
        })
        .join("");

      return `<h3 class="all-day-title">${day.title}: ${day.theme}</h3>${events}`;
    })
    .join("");

  tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.day === "todo"));
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => renderDay(tab.dataset.day));
});

printButton.addEventListener("click", () => window.print());

renderDay("martes");
