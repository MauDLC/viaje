const days = {
  martes: {
    title: "Martes",
    theme: "Llegada + Historia Natural + Polanco",
    note: "Día suave después del vuelo Lima-CDMX: aeropuerto, descanso, museo, almuerzo peruano y cena en Polanco.",
    area: "AICM / Chapultepec / Roma / Polanco",
    pace: "Moderado",
    events: [
      {
        time: "4:30 am",
        title: "Recibir a tu hermano en el AICM",
        desc: "Punto fijo del viaje. Lleva agua y algo ligero porque la llegada es muy temprano.",
        tone: "blue",
        links: [
          ["AICM", "https://www.aicm.com.mx/"],
          ["Mapa", "https://www.google.com/maps/search/?api=1&query=AICM+Terminal+1"]
        ]
      },
      {
        time: "6:30 am",
        title: "Desayuno y traslado al hospedaje",
        desc: "Conviene desayunar cerca del hospedaje o en una zona sencilla para no arrancar el día cansados.",
        links: [
          ["Cafés cerca", "https://www.google.com/maps/search/?api=1&query=cafe+desayuno+Roma+Condesa+Polanco+CDMX"]
        ]
      },
      {
        time: "8:00 am",
        title: "Maletas + descanso corto",
        desc: "Dejar equipaje, ducha y pausa. Si el check-in es tarde, preguntar por resguardo de maletas.",
        tone: "gold"
      },
      {
        time: "10:30 am",
        title: "Museo de Historia Natural y Cultura Ambiental",
        desc: "Plan perfecto para el primer día: interesante, bajo techo y dentro de Chapultepec. Horario oficial: martes a domingo, 10:00 a 17:00.",
        links: [
          ["Sitio oficial", "https://www.sedema.cdmx.gob.mx/programas/programa/museo-de-historia-natural-y-cultura-ambiental"],
          ["Mapa", "https://www.google.com/maps/search/?api=1&query=Museo+de+Historia+Natural+y+Cultura+Ambiental+CDMX"]
        ]
      },
      {
        time: "12:30 pm",
        title: "Paseo corto por Chapultepec",
        desc: "Caminar alrededor del Lago Mayor o tomar café antes del almuerzo. Mantenerlo ligero por la llegada temprana.",
        tone: "gold",
        links: [
          ["Bosque de Chapultepec", "https://www.chapultepec.org.mx/"],
          ["Mapa", "https://www.google.com/maps/search/?api=1&query=Lago+Mayor+Chapultepec"]
        ]
      },
      {
        time: "2:30 pm",
        title: "Almuerzo en Yakumanka",
        desc: "Comida peruana para recibirlo con algo familiar y muy bueno. Reservar o llamar antes si quieren asegurar mesa.",
        tone: "terra",
        links: [
          ["Mapa", "https://www.google.com/maps/search/?api=1&query=Yakumanka+CDMX"],
          ["Reservar", "https://www.google.com/search?q=Yakumanka+CDMX+reservar"]
        ]
      },
      {
        time: "4:30 pm",
        title: "Descanso en el hospedaje",
        desc: "Bloque realista para ducha, siesta corta y cambiarse antes de la cena.",
        tone: "gold"
      },
      {
        time: "7:30 pm",
        title: "Cena en La Lucha Polanco",
        desc: "Cena en Polanco sin hacer el martes demasiado pesado. Salir con margen por tráfico.",
        tone: "terra",
        links: [
          ["Mapa", "https://www.google.com/maps/search/?api=1&query=La+Lucha+Polanco+CDMX"],
          ["Ruta desde Yakumanka", "https://www.google.com/maps/dir/?api=1&origin=Yakumanka+CDMX&destination=La+Lucha+Polanco+CDMX&travelmode=driving"]
        ]
      },
      {
        time: "9:00 pm",
        title: "Vuelta tranquila",
        desc: "Dormir temprano para aguantar bien Chapultepec/Polanco el miércoles.",
        tone: "gold"
      }
    ]
  },
  miercoles: {
    title: "Miércoles",
    theme: "Chapultepec + Polanco",
    note: "Día de museos grandes, parque y una tarde cómoda en Polanco.",
    area: "Chapultepec / Polanco",
    pace: "Intenso pero ordenado",
    events: [
      {
        time: "9:00 am",
        title: "Castillo de Chapultepec",
        desc: "Historia, vistas y salas del Museo Nacional de Historia. Abre martes a domingo, 9:00 a 17:00.",
        links: [
          ["Sitio oficial", "https://lugares.inah.gob.mx/en/node/4961"],
          ["Boletos INAH", "https://ventadeboletosenlinea.inah.gob.mx/"]
        ]
      },
      {
        time: "11:30 am",
        title: "Museo Nacional de Antropología",
        desc: "Imprescindible. Priorizar sala Mexica, Maya, Oaxaca y el patio central. Abre martes a domingo, 9:00 a 18:00.",
        links: [
          ["Sitio oficial", "https://www.inah.gob.mx/museos/museo-nacional-de-antropologia"],
          ["Mapa", "https://www.google.com/maps/search/?api=1&query=Museo+Nacional+de+Antropologia+CDMX"]
        ]
      },
      {
        time: "2:30 pm",
        title: "Comida en Polanco",
        desc: "Moverse a Polanco para comer con calma y bajar revoluciones después del museo.",
        tone: "terra",
        links: [
          ["Restaurantes", "https://www.google.com/maps/search/?api=1&query=restaurantes+Polanco+CDMX"]
        ]
      },
      {
        time: "4:30 pm",
        title: "Museo Soumaya",
        desc: "Edificio icónico y colección amplia. Perfecto para visita de 60 a 90 minutos.",
        links: [
          ["Sitio oficial", "https://www.museo-soumaya.org/"],
          ["Mapa", "https://www.google.com/maps/search/?api=1&query=Museo+Soumaya+Plaza+Carso"]
        ]
      },
      {
        time: "6:00 pm",
        title: "Parque Lincoln o paseo por Polanco",
        desc: "Caminar sin prisa, café o helado antes de cenar.",
        links: [
          ["Parque Lincoln", "https://www.google.com/maps/search/?api=1&query=Parque+Lincoln+Polanco"]
        ]
      },
      {
        time: "8:00 pm",
        title: "Cena en Polanco, Roma o Condesa",
        desc: "Elegir según energía: Polanco para algo más formal; Roma/Condesa para ambiente caminable.",
        tone: "gold",
        links: [
          ["Roma Norte", "https://www.google.com/maps/search/?api=1&query=restaurantes+Roma+Norte+CDMX"],
          ["Condesa", "https://www.google.com/maps/search/?api=1&query=restaurantes+Condesa+CDMX"]
        ]
      }
    ]
  },
  jueves: {
    title: "Jueves",
    theme: "Six Flags Hurricane Harbor Oaxtepec",
    note: "Día completo de parque acuático. Revisar calendario oficial y comprar boletos antes de salir.",
    area: "Oaxtepec, Morelos",
    pace: "Excursión de día completo",
    events: [
      {
        time: "7:00 am",
        title: "Salir rumbo a Oaxtepec",
        desc: "Salir temprano para llegar con margen. Llevar traje de baño, sandalias, toalla, cambio de ropa, bloqueador y bolsa impermeable.",
        tone: "blue",
        links: [
          ["Ruta", "https://www.google.com/maps/dir/?api=1&origin=Ciudad+de+Mexico&destination=Six+Flags+Hurricane+Harbor+Oaxtepec&travelmode=driving"]
        ]
      },
      {
        time: "9:30 am",
        title: "Entrada a Six Flags Hurricane Harbor Oaxtepec",
        desc: "Confirmar horario operativo del día en el calendario oficial antes de comprar y salir.",
        links: [
          ["Sitio oficial", "https://www.sixflags.com.mx/hurricaneharboroaxtepec"],
          ["Calendario", "https://www.sixflags.com.mx/hurricaneharboroaxtepec/plan-your-visit/park-hours"],
          ["Mapa", "https://www.google.com/maps/search/?api=1&query=Six+Flags+Hurricane+Harbor+Oaxtepec"]
        ]
      },
      {
        time: "12:30 pm",
        title: "Comida dentro o cerca del parque",
        desc: "Hacer una pausa larga para no quemarse con el sol. Revisar reglas del parque sobre alimentos externos.",
        tone: "terra",
        links: [
          ["Restaurantes cerca", "https://www.google.com/maps/search/?api=1&query=restaurantes+cerca+de+Six+Flags+Hurricane+Harbor+Oaxtepec"]
        ]
      },
      {
        time: "2:00 pm",
        title: "Toboganes y albercas principales",
        desc: "Priorizar las atracciones fuertes primero y dejar albercas o río lento para el cierre.",
        links: [
          ["Atracciones", "https://www.sixflags.com.mx/hurricaneharboroaxtepec/things-to-do/all-rides"]
        ]
      },
      {
        time: "5:00 pm",
        title: "Salida del parque",
        desc: "Cambiarse, revisar que no falte nada y salir antes de que se junte demasiado tráfico de regreso.",
        tone: "gold"
      },
      {
        time: "7:30 pm",
        title: "Cena tranquila en CDMX",
        desc: "Plan flexible según cansancio. Mejor cerca del hospedaje.",
        links: [
          ["Cena cerca", "https://www.google.com/maps/search/?api=1&query=cena+cerca+de+mi+CDMX"]
        ]
      }
    ]
  },
  viernes: {
    title: "Viernes",
    theme: "Coyoacán + Xochimilco + Lucha libre",
    note: "El día más mexicano del plan: Frida, barrio, trajineras y Arena México.",
    area: "Coyoacán / Xochimilco / Doctores",
    pace: "Completo",
    events: [
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
        desc: "Buscar antojitos, tostadas o una comida sentada antes de bajar a Xochimilco.",
        tone: "terra",
        links: [
          ["Restaurantes", "https://www.google.com/maps/search/?api=1&query=comida+Coyoacan+CDMX"]
        ]
      },
      {
        time: "2:30 pm",
        title: "Trajinera en Xochimilco",
        desc: "Ir a Nuevo Nativitas y contratar 1.5 a 2 horas. Confirmar tarifa oficial antes de subir.",
        links: [
          ["Nuevo Nativitas", "https://mexicocity.cdmx.gob.mx/venues/embarcadero-nuevo-nativitas/?lang=es"],
          ["Mapa", "https://www.google.com/maps/search/?api=1&query=Embarcadero+Nuevo+Nativitas+Xochimilco"]
        ]
      },
      {
        time: "6:00 pm",
        title: "Volver, bañarse y descansar",
        desc: "Dejar margen real para tráfico entre Xochimilco y el centro.",
        tone: "gold"
      },
      {
        time: "8:30 pm",
        title: "Lucha libre en Arena México",
        desc: "Plan nocturno perfecto para cerrar el viaje. Revisar cartelera y comprar boletos antes.",
        links: [
          ["Ticketmaster", "https://www.ticketmaster.com/arena-mexico-tickets-mexico/venue/164115"],
          ["Mapa", "https://www.google.com/maps/search/?api=1&query=Arena+Mexico+CDMX"]
        ]
      }
    ]
  },
  sabado: {
    title: "Sábado",
    theme: "Salida a Lima",
    note: "Mañana sin actividades: todo enfocado en llegar con margen al aeropuerto.",
    area: "AICM",
    pace: "Salida",
    events: [
      {
        time: "6:30 am",
        title: "Despertar y cerrar maletas",
        desc: "Revisar pasaportes, cargadores, líquidos y documentos del vuelo.",
        tone: "gold"
      },
      {
        time: "7:30 am",
        title: "Salir hacia el AICM",
        desc: "Ajustar la hora según ubicación del hospedaje. Mejor llegar con margen que correr.",
        tone: "blue",
        links: [
          ["Ruta", "https://www.google.com/maps/dir/?api=1&origin=Ciudad+de+Mexico&destination=AICM&travelmode=driving"]
        ]
      },
      {
        time: "9:00 am",
        title: "Estar en el aeropuerto",
        desc: "Punto fijo de salida CDMX-Lima.",
        links: [
          ["AICM", "https://www.aicm.com.mx/"]
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
